import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import userRoutes from "./routes/users.js";
app.use("/users", userRoutes);

import projectRoutes from "./routes/projects.js";
app.use("/projects", projectRoutes);

import taskRoutes from "./routes/tasks.js";
app.use("/tasks", taskRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`);
});