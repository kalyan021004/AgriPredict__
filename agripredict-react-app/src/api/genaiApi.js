const BASE = "http://localhost:5001/api/genai";

/* AI Chat */
export async function chatAPI(message) {
  const res = await fetch(`${BASE}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
  return res.json();
}

/* Crop Recommendation (ML + AI) */
export async function cropAPI(data) {
  const res = await fetch(`${BASE}/hybrid`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
}
