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

    if (!mlResult) {
      throw new Error("ML result is empty");
    }

    // 2️⃣ AI Explanation
    const explanation = await explainMLResult(mlResult);

    // 3️⃣ Save history
    await CropHistory.create({
      user: req.user._id,
      input: req.body,
      result: {
        crop: mlResult,
        explanation
      }
    });

    // 4️⃣ FINAL RESPONSE (IMPORTANT)
    res.json({
      crop: mlResult,          // ✅ frontend expects this
      explanation
    });

  } catch (err) {
    console.error("HYBRID ERROR:", err.message);
    console.error(err.stack);

    res.status(500).json({
      error: "Crop recommendation failed"
    });
  }
}
