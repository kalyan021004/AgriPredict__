export function recommendCrop({ soil, rainfall, temperature }) {
  // ✅ Normalize input
  const soilType = soil.toLowerCase();

  if (soilType === "sandy" && rainfall < 600) {
    return {
      crop: "Millets",
      confidence: 0.75,
      expected_yield: "20 quintals/hectare",
      reasoning:
        "Low rainfall and sandy soil favor drought-resistant crops like millets."
    };
  }

  if (soilType === "clay" && rainfall > 800) {
    return {
      crop: "Rice",
      confidence: 0.82,
      expected_yield: "30 quintals/hectare",
      reasoning:
        "High rainfall and clay soil retain water well, ideal for rice cultivation."
    };
  }

  if (soilType === "loamy" && rainfall >= 600 && rainfall <= 800) {
    return {
      crop: "Wheat",
      confidence: 0.78,
      expected_yield: "25 quintals/hectare",
      reasoning:
        "Moderate rainfall and loamy soil are suitable for wheat growth."
    };
  }

  return {
    crop: "Groundnut",
    confidence: 0.65,
    expected_yield: "18 quintals/hectare",
    reasoning:
      "Balanced soil and climate conditions favor oilseed crops like groundnut."
  };
}
