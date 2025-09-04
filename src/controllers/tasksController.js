import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createTask = async (req, res) => {
    try {
        const { title, description, status, projectId, assigneeIds } = req.body;

        if (!title || !projectId) {
            return res.status(400).json({ error: "Title and Project ID are required" });
        }
        const task = await prisma.task.create({
            data: {
                title,
                description,
                status,
                project: { connect: { id: projectId } },
                assignees: assigneeIds ? { connect: assigneeIds.map(id => ({ id })) } : undefined,
            },
            include: { project: true, assignees: true },
        });
        res.status(201).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create task" });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await prisma.task.findMany({
            include: {
                project: true,
                assignees: true,
            },
        });
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
};