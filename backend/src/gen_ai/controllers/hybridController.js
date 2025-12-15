// ✅ IMPORT ML SERVICE
import { getCropRecommendation } from "../services/mlService.js";

// ✅ IMPORT HYBRID PIPELINE (AI explanation)
import { explainMLResult } from "../engine/pipelines/hybridPipeline.js";

export async function hybridController(req, res) {
  try {
    // 1️⃣ Call ML (dummy for now)
    const mlResult = await getCropRecommendation(req.body);

    // 2️⃣ Explain ML result using GenAI
    const explanation = await explainMLResult(mlResult);

    // 3️⃣ Send response to frontend
    res.json({
      ml_result: mlResult,
      explanation
    });
  } catch (err) {
    console.error("HYBRID CONTROLLER ERROR:", err);
    res.status(500).json({ error: "Hybrid pipeline failed" });
  }
}
