import { chatPipeline } from "../engine/pipelines/chatPipeline.js";

export async function chatController(req, res) {
  console.log("HEADERS:", req.headers);
  console.log("BODY:", req.body);

  const { message } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "message is required" });
  }

  const answer = await chatPipeline(message);
  res.json({ answer });
}
