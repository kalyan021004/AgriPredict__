import axios from "axios";

const API_BASE ="https://agripredict-1-t4qw.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE,
  timeout: 60000 // 20s (ML can be slow)
});

/* =========================
   REQUEST INTERCEPTOR
========================= */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* =========================
   RESPONSE INTERCEPTOR
========================= */
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const msg =
      error.response?.data?.error ||
      error.response?.data?.message ||
      error.message ||
      "API request failed";

    console.error("API ERROR:", msg);
    return Promise.reject(new Error(msg));
  }
);

export default api;
