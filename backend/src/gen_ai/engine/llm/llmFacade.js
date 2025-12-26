import { openaiClient } from "./openaiClient.js";

/* =========================
   ENV VALIDATION (RUNS ON START)
========================= */
const REQUIRED_ENVS = [
  "OPENROUTER_API_KEY",
  "OPENROUTER_MODEL",
  "OPENROUTER_SITE_URL",
  "OPENROUTER_SITE_NAME"
];

for (const key of REQUIRED_ENVS) {
  if (!process.env[key]) {
    console.error(`❌ Missing ENV: ${key}`);
  }
}

/* =========================
   CORE CHAT
========================= */
export async function chat(prompt) {
  try {
    if (!process.env.OPENROUTER_MODEL) {
      throw new Error("OPENROUTER_MODEL is undefined");
    }

    const res = await openaiClient.chat.completions.create({
      model: process.env.OPENROUTER_MODEL,
      messages: [{ role: "user", content: prompt }]
    });

    if (!res?.choices?.length) {
      throw new Error("Empty response from OpenRouter");
    }

    return res.choices[0].message.content;

  } catch (err) {
    /* 🔥 REAL diagnostics */
    console.error("====== OPENROUTER ERROR ======");
    console.error("Message:", err.message);
    console.error("Name:", err.name);
    console.error("Stack:", err.stack);

    // OpenAI SDK does NOT use err.response like axios
    if (err?.error) {
      console.error("SDK Error Object:", err.error);
    }

    throw new Error("LLM service failed");
  }
}

/* =========================
   JSON RESPONSE
========================= */
export async function chatJSON(prompt) {
  const text = await chat(`${prompt}\nReturn valid JSON only.`);
  try {
    return JSON.parse(text);
  } catch {
    return { error: "Invalid JSON from AI" };
  }
}

/* =========================
   TRANSLATION
========================= */
export async function translate(text, lang) {
  return chat(`Translate the following text to ${lang}:\n${text}`);
}

/* =========================
   ML EXPLANATION
========================= */
export async function explainML(result) {
  return chat(
    `Explain this ML output in simple farmer-friendly language:\n${JSON.stringify(result)}`
  );
}

/* =========================
   LOCALIZED ADVICE
========================= */
export async function localizedAdvice(data) {
  return chat(
    `Give step-by-step localized farming advice:\n${JSON.stringify(data)}`
  );
}

/* =========================
   AGENT REASONING
========================= */
export async function agentReason(query) {
  return chat(`Think step by step like an agricultural expert:\n${query}`);
}
