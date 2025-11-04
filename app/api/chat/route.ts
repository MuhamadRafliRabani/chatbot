import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    process.env.OPENROUTER_API_KEY ??
    "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",
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat", // kamu bisa ganti misal ke 'mistralai/mixtral-8x7b'
      messages,
    });

    return NextResponse.json({
      role: "assistant",
      content: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { role: "assistant", content: "Terjadi kesalahan. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
