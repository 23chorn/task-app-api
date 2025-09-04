import express from "express";
import { createProject, getProjects } from "../controllers/projectsController.js";

const router = express.Router();

// POST /projects
router.post("/", createProject);

// GET /projects
router.get("/", getProjects);

export default router;
