import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

export const openaiClient = new OpenAI({
  baseURL: process.env.OPENROUTER_BASE_URL,
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.OPENROUTER_SITE_URL,
    "X-Title": process.env.OPENROUTER_SITE_NAME
  }
});
