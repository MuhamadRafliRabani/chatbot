import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const test = async () => {
  const res = await openai.chat.completions.create({
    model: "deepseek/deepseek-chat",
    messages: [{ role: "user", content: "Halo!" }],
  });
  console.log(res.choices[0].message.content);
};

test();
