"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "@/hooks/use-translation";
import { useTheme } from "next-themes";
import { useRouter, useParams } from "next/navigation";

export interface Message {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
}

export function useAIChat() {
  const t = useTranslation();
  const { setTheme } = useTheme();
  const router = useRouter();
  const params = useParams();
  const locale = params?.locale || "en";

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKeys, setApiKeys] = useState<string>("");
  useEffect(() => {
    const initRemoteConfig = async () => {
      try {
        if (typeof window !== "undefined") {
          const keys = process.env.NEXT_PUBLIC_AI_API_KEYS || "";
          setApiKeys(keys);
        }
      } catch (err) {
        console.error("Failed to fetch Remote Config via Firebase Client SDK:", err);
      }
    };
    initRemoteConfig();
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    // Rotate/Select the API key on the client side
    let selectedApiKey = "";
    if (apiKeys) {
      try {
        const parsed = JSON.parse(apiKeys);
        if (Array.isArray(parsed) && parsed.length > 0) {
          selectedApiKey = parsed[Math.floor(Math.random() * parsed.length)];
        } else if (typeof parsed === "object" && parsed !== null) {
          const values = Object.values(parsed);
          if (values.length > 0) {
            selectedApiKey = String(values[Math.floor(Math.random() * values.length)]);
          }
        } else {
          selectedApiKey = String(parsed);
        }
      } catch {
        const splitKeys = apiKeys.split(",").map(k => k.trim()).filter(Boolean);
        if (splitKeys.length > 0) {
          selectedApiKey = splitKeys[Math.floor(Math.random() * splitKeys.length)];
        } else {
          selectedApiKey = apiKeys;
        }
      }
    }

    try {
      // Build history for the LLM
      const history = [...messages, userMessage].map(({ id, role, content }) => ({
        role,
        content: id === "welcome" ? t("chat.welcome") : content,
      }));

      const response = await axios.post(
        "/api/chat",
        { messages: history },
        {
          headers: selectedApiKey ? { "x-api-key": selectedApiKey } : undefined,
        }
      );

      const data = response.data;

      if (data.message) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: data.message.role,
          content: data.message.content || "",
        };

        setMessages((prev) => [...prev, assistantMessage]);

        // Client-side tool calls processing
        if (data.message.tool_calls && Array.isArray(data.message.tool_calls)) {
          for (const call of data.message.tool_calls) {
            if (call.type === "function") {
              const name = call.function.name;
              try {
                const args = JSON.parse(call.function.arguments || "{}");
                if (name === "change_theme") {
                  const themeVal = args.theme;
                  if (themeVal === "light" || themeVal === "dark") {
                    setTheme(themeVal);
                  }
                } else if (name === "navigate_to") {
                  const targetPage = args.page;
                  const path = targetPage === "home" ? `/${locale}` : `/${locale}/${targetPage}`;
                  router.push(path);
                }
              } catch (parseError) {
                console.error("Error parsing tool arguments:", parseError);
              }
            }
          }
        }
      }
    } catch (err: any) {
      console.error(err);
      const errorMessage = axios.isAxiosError(err) && err.response?.data?.error
        ? err.response.data.error
        : (err.message || t("chat.error"));
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    error,
    handleSend,
  };
}
