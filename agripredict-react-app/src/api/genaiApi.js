const BASE = import.meta.env.VITE_API_BASE;

export async function cropAPI(data) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE}/genai/hybrid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  const json = await res.json();

  // 🔥 IMPORTANT
  if (!res.ok) {
    throw new Error(json.error || "Server error");
  }

  if (!json.crop) {
    throw new Error("Invalid response from server");
  }

  return json;
}

/* AI Chat */
export async function chatAPI(message) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE}/genai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ message })
  });

  return res.json();
}

/* Crop History */
export async function getCropHistory() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE}/genai/crop-history`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return res.json();
}


export async function diseaseAPI(data) {
  const token = localStorage.getItem("token"); // 👈 GET TOKEN

  const res = await fetch(`${BASE}/disease`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}` // 👈 SEND TOKEN
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

export async function diseaseImageAPI(formData) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE}/genai/disease-image`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  });

  return res.json();
}

