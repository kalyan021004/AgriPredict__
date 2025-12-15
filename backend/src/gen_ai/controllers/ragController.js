import {
  addDocuments,
  retrieveDocuments
} from "../engine/rag/vectorStore.js";

import { chat } from "../engine/llm/llmFacade.js";

/**
 * POST /api/genai/rag/add
 */
export async function ragAdd(req, res) {
  const { docs } = req.body;

  if (!Array.isArray(docs)) {
    return res.status(400).json({ error: "docs array required" });
  }

  addDocuments(docs);
  res.json({ success: true, count: docs.length });
}

/**
 * POST /api/genai/rag/query
 */
export async function ragQuery(req, res) {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "question required" });
  }

  const docs = retrieveDocuments(question);

  const context = docs.map(d => d.text).join("\n");

  const answer = await chat(
    `Use ONLY the context below to answer.\n\nContext:\n${context}\n\nQuestion:\n${question}`
  );

  res.json({
    answer,
    sources: docs
  });
}
