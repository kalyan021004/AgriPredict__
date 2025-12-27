import api from "./axiosInstance";

/* =========================
   REGISTER
========================= */
export async function registerUser(data) {
  return api.post("/auth/register", data);
}

/* =========================
   LOGIN
========================= */
export async function loginUser(data) {
  return api.post("/auth/login", data);
}
