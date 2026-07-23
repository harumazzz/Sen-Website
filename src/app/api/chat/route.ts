import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Get the API key passed from the client, or fallback to environment variables
    const clientApiKey = req.headers.get("x-api-key") || req.headers.get("Authorization")?.replace("Bearer ", "");
    const apiKey = clientApiKey;

    if (!apiKey) {
      return NextResponse.json(
        { error: "No API key configured. Please configure Remote Config." },
        { status: 500 }
      );
    }

    const isGroq = apiKey.startsWith("gsk_") || (!clientApiKey);

    const openai = new OpenAI({
      apiKey: apiKey,
      ...(isGroq ? { baseURL: "https://api.groq.com/openai/v1" } : {}),
    });

    const systemPrompt = `You are Sen, a helpful AI assistant for the Sen website. Sen is an all-in-one PvZ2 (Plants vs. Zombies 2) Modding Tool.
Help users with modding questions, how to use the website, or other general questions. Be concise, friendly, and reply in the same language the user uses.

Product Download Recommendations:
- The website has 6 products supporting Windows and Android:
  1. "Main Tool": Used for processing game files. Recommend this when users ask to download "sen" or what to download to begin modding. This is the tool to handle all the game files, without it the other tools are useless, this must be the main priority.
  2. "Modding": Unlocks more modding potential with animation viewer & map editor. Recommend this when they want to download "map editor" or "animation viewer". Also recommend they visit the "Resources" tab to download assets/resources.
  3. "SCG Downloader": A simple app to download SCG into mods. Guide downloading this when users ask for "scg downloader".

System Requirements:
- PC / Windows:
  - Must run Windows 10 or Windows 11.
  - Requires a minimum of 4GB RAM.
  - If the application crashes on startup (or crashes with a 'CreateProcessW' error), they must install Visual C++ Redistributable (specifically VC++ 2013, 2015, and 2017).
- Mobile / Android:
  - Supports Android 10 and above.
  - Must be a 64-bit device (32-bit devices and Android emulators/virtual machines are NOT supported).`;

    const model = "llama-3.3-70b-versatile";

    const tools: OpenAI.Chat.Completions.ChatCompletionTool[] = [
      {
        type: "function",
        function: {
          name: "change_theme",
          description: "Change the website theme (light or dark mode) for the user.",
          parameters: {
            type: "object",
            properties: {
              theme: {
                type: "string",
                enum: ["light", "dark"],
                description: "The theme to switch to."
              }
            },
            required: ["theme"]
          }
        }
      },
      {
        type: "function",
        function: {
          name: "navigate_to",
          description: "Navigate to a different page/screen on the website.",
          parameters: {
            type: "object",
            properties: {
              page: {
                type: "string",
                enum: ["home", "about", "download", "resources"],
                description: "The destination page."
              }
            },
            required: ["page"]
          }
        }
      }
    ];

    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        ...messages,
      ],
      tools: tools,
    });

    return NextResponse.json({
      message: completion.choices[0]?.message || { role: "assistant", content: "No response received." },
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
