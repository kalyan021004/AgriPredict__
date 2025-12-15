import { openaiClient } from "./openaiClient.js";

/* CHAT */
export async function chat(prompt) {
  const res = await openaiClient.chat.completions.create({
    model: process.env.OPENROUTER_MODEL,
    messages: [{ role: "user", content: prompt }]
  });
  return res.choices[0].message.content;
}

/* JSON */
export async function chatJSON(prompt) {
  const text = await chat(prompt + "\nReturn valid JSON only.");
  return JSON.parse(text);
}

/* TRANSLATION */
export async function translate(text, lang) {
  return chat(`Translate to ${lang}: ${text}`);
}

/* ML EXPLANATION */
export async function explainML(result) {
  return chat(`Explain this ML result:\n${JSON.stringify(result)}`);
}

/* LOCALIZED */
export async function localizedAdvice(data) {
  return chat(`Give localized farming advice:\n${JSON.stringify(data)}`);
}

/* AGENT */
export async function agentReason(query) {
  return chat(`Reason step by step:\n${query}`);
}
