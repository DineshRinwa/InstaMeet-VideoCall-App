import express from "express";
import cookieParse from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true, // Allow send request from frontend
  })
);

app.use(express.json());
app.use(cookieParse());

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Welcome, Home Page");
});

app.listen(PORT, () => {
  console.log(`Server is runing on Port ${PORT}`);
  connectDB();
});