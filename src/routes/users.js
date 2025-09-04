import express from "express";
import { createUser, getUserNames } from "../controllers/usersController.js";

const router = express.Router();

// POST /users
router.post("/", createUser);

// GET /users/names
router.get("/", getUserNames);

export default router;