"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Bot, Sparkles, User, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAIChat } from "@/hooks/use-ai-chat";
import { useTranslation } from "@/hooks/use-translation";

interface AIChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIChatDialog({ isOpen, onClose }: AIChatDialogProps) {
  const t = useTranslation();
  const { messages, input, setInput, isLoading, error, handleSend } = useAIChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-24 right-4 z-50 flex flex-col w-[92vw] sm:w-[400px] h-[500px] rounded-2xl border border-border/40 overflow-hidden shadow-2xl backdrop-blur-xl bg-background/70"
        >
          {/* Glassmorphic Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-border/40 bg-background/20 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h3 className="font-semibold text-sm tracking-wide">{t("chat.title")}</h3>
                <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  {t("chat.subtitle")}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message List Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className={`flex gap-2.5 max-w-[85%] ${message.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
              >
                {/* Avatar Icon */}
                <div
                  className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 ${message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                    }`}
                >
                  {message.role === "user" ? (
                    <User className="w-3.5 h-3.5" />
                  ) : (
                    <Bot className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${message.role === "user"
                    ? "bg-primary/90 text-primary-foreground shadow-sm rounded-tr-none"
                    : "bg-muted/50 backdrop-blur-sm border border-border/20 text-foreground rounded-tl-none"
                    }`}
                >
                  <p className="whitespace-pre-line">
                    {message.id === "welcome" ? t("chat.welcome") : message.content}
                  </p>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-2.5 mr-auto max-w-[85%]"
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-full shrink-0 bg-muted text-muted-foreground">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-muted/50 backdrop-blur-sm border border-border/20 rounded-2xl rounded-tl-none px-3.5 py-2.5 text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 p-3 text-xs border border-destructive/20 bg-destructive/10 text-destructive rounded-xl"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="flex-1">{error}</span>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form Footer */}
          <form
            onSubmit={handleSend}
            className="p-3 border-t border-border/40 bg-background/25 backdrop-blur-md flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("chat.placeholder")}
              disabled={isLoading}
              className="flex-1 min-w-0 bg-muted/40 hover:bg-muted/60 focus:bg-background border border-border/30 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-xl px-3.5 py-2 text-sm transition-all outline-none"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              size="icon"
              className="rounded-xl shadow-md shrink-0 cursor-pointer transition-transform active:scale-95 duration-100"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
