import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export const API = axios.create({
  baseURL: `${API_BASE}/api`,
});

export const IMG_BASE = `${API_BASE}/schoolImages`;
