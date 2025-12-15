import express from "express";

const app = express();
app.use(express.json());

/* -----------------------------------------
   1. Crop Recommendation
----------------------------------------- */
app.post("/api/ml/crop-recommendation", (req, res) => {
  const {
    soil,
    rainfall,
    temperature,
    ph,
    nitrogen,
    phosphorus,
    potassium
  } = req.body;

  let crop = "Millets";
  let confidence = 0.75;
  let expected_yield = "20 quintals";

  if (soil === "sandy" && rainfall < 150 && ph >= 6 && ph <= 7) {
    crop = "Groundnut";
    confidence = 0.92;
    expected_yield = "28 quintals";
  } else if (soil === "black" && rainfall > 200) {
    crop = "Cotton";
    confidence = 0.88;
    expected_yield = "25 quintals";
  } else if (soil === "loamy" && temperature < 30) {
    crop = "Paddy";
    confidence = 0.90;
    expected_yield = "30 quintals";
  } else if (nitrogen > 40 && phosphorus > 30) {
    crop = "Maize";
    confidence = 0.86;
    expected_yield = "26 quintals";
  }

  return res.json({
    crop,
    confidence,
    expected_yield,
    reasoning: "Decision based on soil, nutrients, rainfall and temperature"
  });
});

/* -----------------------------------------
   2. Disease Detection
----------------------------------------- */
app.post("/api/ml/disease-detect", (req, res) => {
  const { crop, symptoms, humidity } = req.body;

  let disease = "Healthy";
  let severity = "low";
  let recommendation = "No action required";

  if (symptoms?.includes("yellow") && humidity > 70) {
    disease = "Leaf Blight";
    severity = "medium";
    recommendation = "Spray Mancozeb 2g/L";
  }

  return res.json({
    crop,
    disease,
    severity,
    recommendation
  });
});

/* -----------------------------------------
   3. Market Price Prediction
----------------------------------------- */
app.post("/api/ml/market-price", (req, res) => {
  const { crop, location, season } = req.body;

  let price = "₹4000/quintal";
  let trend = "stable";

  if (crop === "Groundnut" && season === "harvest") {
    price = "₹5200/quintal";
    trend = "upward";
  }

  return res.json({
    crop,
    location,
    price,
    trend
  });
});

/* -----------------------------------------
   Health Check
----------------------------------------- */
app.get("/api/ml/health", (_, res) => {
  res.json({ status: "Mock ML server running" });
});

app.listen(6001, () => {
  console.log("🧪 Dummy ML server running on http://localhost:6001");
});
