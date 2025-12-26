import { chatPipeline } from "../engine/pipelines/chatPipeline.js";
export async function chatController(req, res) {
  try {
    console.log("USER:", req.user?._id);
    console.log("BODY:", req.body);

    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }

    const answer = await chatPipeline(message); // ✅ FIX

    res.json({ answer });
  } catch (err) {
    console.error("CHAT CONTROLLER ERROR:", err);
    res.status(500).json({ error: "AI service unavailable" });
  }
}
