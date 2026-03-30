import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import bcrypt from "bcryptjs";

import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import Admin from "./models/Admin.js";

dotenv.config();

const app = express();


// 🛡️ SECURITY
app.use(helmet());

app.use(cors({
  origin: "https://portfolio-bay-eight-76.vercel.app" // change after frontend deploy
}));


// 🚫 RATE LIMITING
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, try again later",
});

app.use("/api", limiter);

const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: "Too many login attempts",
});

app.use("/api/auth/login", loginLimiter);


// 📦 MIDDLEWARE
app.use(express.json());
app.use("/uploads", express.static("uploads"));


// 🗄️ DATABASE
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    createAdmin(); // 🔥 auto create admin
  })
  .catch(() => console.log("DB Error"));


// 🔐 AUTO CREATE ADMIN
const createAdmin = async () => {
  try {
    const existing = await Admin.findOne({
      email: process.env.ADMIN_EMAIL
    });

    if (!existing) {
      const hashed = await bcrypt.hash(
        process.env.ADMIN_PASSWORD,
        10
      );

      await Admin.create({
        email: process.env.ADMIN_EMAIL,
        password: hashed,
      });

      console.log("✅ Admin created automatically");
    } else {
      console.log("ℹ️ Admin already exists");
    }
  } catch (err) {
    console.log("Admin creation error");
  }
};


// 🔗 ROUTES
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);


// 🧪 HEALTH CHECK
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});


// 🚀 SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
