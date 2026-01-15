import axios from "axios";

export const axiosInstance = axios.create({
  // Automatically switch: Use Localhost in dev, and your Render Backend in production
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://chatify-backend-i5hh.onrender.com/api",
  
  // CRITICAL: This allows the browser to send/receive the "jwt" cookie
  withCredentials: true, 
});