import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import "dotenv/config"; // Ensure env vars are loaded

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const __dirname = path.resolve();

const PORT = ENV.PORT || 5001; // Changed to match your screenshot (5001)

// --- FIX STARTS HERE ---
// Tell Express to trust the Render Load Balancer
// This allows secure cookies to work even though Render acts as a proxy
app.set("trust proxy", 1);
// --- FIX ENDS HERE ---

app.use(express.json({ limit: "5mb" })); // req.body
app.use(cookieParser());

// CORS configuration
// Ensure ENV.CLIENT_URL is correct or fallback to process.env.CLIENT_URL
app.use(cors({
  origin: ENV.CLIENT_URL || process.env.CLIENT_URL,
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// make ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});