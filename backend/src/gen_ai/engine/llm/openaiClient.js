import OpenAI from "openai";

const apiKey = process.env.OPENROUTER_API_KEY;
console.log("🔥 openaiClient.js loaded", {
  cwd: process.cwd(),
  key: !!process.env.OPENROUTER_API_KEY
});

if (!apiKey) {
  throw new Error("❌ OPENROUTER_API_KEY missing in .env");
}



export const openaiClient = new OpenAI({
  apiKey,
  baseURL: process.env.OPENROUTER_BASE_URL,
  defaultHeaders: {
    "HTTP-Referer": process.env.OPENROUTER_SITE_URL,
    "X-Title": process.env.OPENROUTER_SITE_NAME
  }
});
