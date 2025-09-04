import express from 'express';
import { createTask, getTasks } from '../controllers/tasksController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/', getTasks);

export default router;