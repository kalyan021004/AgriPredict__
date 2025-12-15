// ✅ IMPORT chat from LLM facade
import { chat } from "../llm/llmFacade.js";

export async function explainMLResult(mlResult) {
  const prompt = `
You are an agricultural expert.

Explain the following ML prediction in very simple language for a farmer.
Mention:
- Why this crop is suitable
- What conditions support this choice
- What the farmer should do next

ML Prediction:
${JSON.stringify(mlResult, null, 2)}
`;

  return chat(prompt);
}
