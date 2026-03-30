import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// 🔐 SECURITY
app.use(helmet());

app.use(cors({
  origin: "http://localhost:5173" // change when deployed
}));

// 🚫 RATE LIMIT
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use("/api", limiter);

const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
});
app.use("/api/auth/login", loginLimiter);

// 📦 MIDDLEWARE
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// 🗄️ DATABASE
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("DB Error"));

// 🔗 ROUTES
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

// 🚀 SERVER
app.listen(5000, () => console.log("Server running on port 5000"));
