import axios from "axios";

// In Vite, env vars must start with VITE_ and be accessed via import.meta.env
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export const API = axios.create({
  baseURL: `${API_BASE}/api`,
});

export const IMG_BASE = `${API_BASE}/schoolImages`;
