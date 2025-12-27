import api from "./axiosInstance";
/* =========================
   CROP HYBRID (ML + AI)
========================= */
export async function cropAPI(data) {
  const res = await api.post("/genai/hybrid", data);

  if (!res.crop) {
    throw new Error("Invalid response from server");
  }

  return res;
}

/* =========================
   AI CHAT
========================= */
export async function chatAPI(message) {
  return api.post("/genai/chat", { message });
}

/* =========================
   CROP HISTORY
========================= */
export async function getCropHistory() {
  return api.get("/genai/crop-history");
}

/* =========================
   DISEASE (TEXT)
========================= */
export async function diseaseAPI(data) {
  return api.post("/genai/disease", data);
}

/* =========================
   DISEASE (IMAGE)
========================= */
export async function diseaseImageAPI(formData) {
  return api.post("/genai/disease-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}
