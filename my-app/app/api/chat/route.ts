import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    // Use the 'google' provider function imported from @ai-sdk/google
    model: google("models/gemini-1.5-flash"), 
    messages: convertToModelMessages(messages),
  });

  return result.toDataStreamResponse();
}
