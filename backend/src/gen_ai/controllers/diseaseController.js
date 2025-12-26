import { detectDisease } from "../services/mlService.js";
import { explainDisease } from "../engine/pipelines/diseasePipeline.js";

export async function diseaseController(req, res) {
  try {
    const { crop, symptoms } = req.body;

    if (!crop || !symptoms || !Array.isArray(symptoms)) {
      return res.status(400).json({ error: "Invalid disease input" });
    }

    // 1️⃣ ML
    const mlResult = await detectDisease({ crop, symptoms });

    // 2️⃣ AI Explanation (SAFE)
    let explanation = "AI explanation unavailable.";
    try {
      explanation = await explainDisease(mlResult);
    } catch (e) {
      console.error("DISEASE AI FAILED:", e.message);
    }

    res.json({
      disease: mlResult,
      explanation
    });

  } catch (err) {
    console.error("DISEASE ERROR:", err);
    res.status(500).json({ error: "Disease pipeline failed" });
  }
}
