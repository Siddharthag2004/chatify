import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = ENV;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 Days in MS
    httpOnly: true, // prevent XSS attacks
    sameSite: "none", // <--- CHANGED: Allows cookie between Vercel & Render
    secure: ENV.NODE_ENV !== "development", // <--- CHANGED: Ensures secure is TRUE in production
  });

  return token;
};