export function detectDisease({ crop, symptoms }) {
  const cropName = crop.toLowerCase();
  const symptomText = symptoms.map(s => s.toLowerCase());

  if (
    cropName === "tomato" &&
    symptomText.includes("yellow leaves") &&
    symptomText.includes("curling")
  ) {
    return {
      disease: "Leaf Curl Virus",
      confidence: 0.82,
      severity: "medium"
    };
  }

  if (
    cropName === "rice" &&
    symptomText.includes("brown spots")
  ) {
    return {
      disease: "Brown Spot Disease",
      confidence: 0.78,
      severity: "low"
    };
  }

  return {
    disease: "Healthy",
    confidence: 0.9,
    severity: "none"
  };
}
