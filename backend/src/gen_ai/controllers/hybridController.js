import { getCropRecommendation } from "../services/mlService.js";
import CropHistory from "../../models/CropHistory.js";
import { explainMLResult } from "../engine/pipelines/hybridPipeline.js";

export async function hybridController(req, res) {
  try {
    // 🔐 Auth safety
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // 1️⃣ ML Prediction
    const mlResult = await getCropRecommendation(req.body);

    // ✅ Validate ML output
    if (!mlResult || !mlResult.crop) {
      throw new Error("Invalid ML result");
    }

    // 2️⃣ AI Explanation (SAFE)
    let explanation = "AI explanation currently unavailable.";
    try {
      explanation = await explainMLResult(mlResult);
    } catch (aiErr) {
      console.error("AI EXPLANATION FAILED:", aiErr.message);
    }

    // 3️⃣ Save history (always save ML result)
    await CropHistory.create({
      user: req.user._id,
      input: req.body,
      result: {
        crop: mlResult,
        explanation
      }
    });

    // 4️⃣ Final response (never crashes frontend)
    return res.json({
      crop: mlResult,
      explanation
    });

  } catch (err) {
    console.error("HYBRID ERROR:", err.message);
    console.error(err.stack);

    return res.status(500).json({
      error: "Crop recommendation failed"
    });
  }
}
