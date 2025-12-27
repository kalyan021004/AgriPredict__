import { getCropRecommendation } from "../services/mlService.js";
import CropHistory from "../../models/CropHistory.js";
import { explainMLResult } from "../engine/pipelines/hybridPipeline.js";

export async function hybridController(req, res) {
  // 🔐 Auth safety
  if (!req.user || !req.user._id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  let mlResult;

  /* =========================
     1️⃣ ML PREDICTION (CRITICAL)
  ========================= */
  try {
    mlResult = await getCropRecommendation(req.body);
  } catch (mlErr) {
    console.error("ML SERVICE FAILED:", mlErr.message);

    return res.status(503).json({
      error: "ML service unavailable. Please try again later."
    });
  }

  // Validate ML output
  if (!mlResult || !mlResult.crop) {
    console.error("INVALID ML OUTPUT:", mlResult);

    return res.status(500).json({
      error: "Invalid ML response"
    });
  }

  /* =========================
     2️⃣ GENAI EXPLANATION (OPTIONAL)
  ========================= */
  let explanation = "AI explanation currently unavailable.";

  try {
    explanation = await explainMLResult(mlResult);
  } catch (aiErr) {
    console.error("GENAI FAILED:", aiErr.message);
    // intentionally ignored
  }

  /* =========================
     3️⃣ SAVE HISTORY (NON-BLOCKING)
  ========================= */
  try {
    await CropHistory.create({
      user: req.user._id,
      input: req.body,
      result: {
        crop: mlResult,
        explanation
      }
    });
  } catch (dbErr) {
    console.error("DB SAVE FAILED:", dbErr.message);
    // do NOT fail request
  }

  /* =========================
     4️⃣ FINAL RESPONSE
  ========================= */
  return res.json({
    crop: mlResult,
    explanation
  });
}
