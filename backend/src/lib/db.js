import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // We access process.env.MONGODB_URI directly to bypass any issues in env.js
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    
    console.log("MONGODB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MONGODB:", error);
    process.exit(1);
  }
};