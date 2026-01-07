import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/";

// ✅ PUBLIC - No auth
export const PublicAPI = axios.create({
  baseURL: BASE_URL,
});

// ✅ PRIVATE - With auth  
const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use((config) => {
  const access = localStorage.getItem("access");
  if (access) {
    const token = access.replace(/^"|"$/g, '');
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;