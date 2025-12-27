const BASE_URL = "http://localhost:6001/api";

export async function apiRequest(endpoint, options = {}) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  const res = await fetch(`${BASE_URL}${endpoint}`, config);

  // 🔐 Handle non-200 responses safely
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.error || "API request failed");
  }

  return res.json();
}
