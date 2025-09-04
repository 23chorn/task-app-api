import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProject = async (req, res) => {
    try {
        const {name, ownerId} = req.body;

        if (!name || !ownerId) {
            return res.status(400).json({ error: "Name and ownerId are required" });
        }

        const project = await prisma.project.create({
            data: {
                name,
                owner: { connect: { id: ownerId } },
            },
            include: { owner: true },
        });
        res.status(201).json(project);
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create project" });
    }
};

export const getProjects = async (req, res) => {
    try {
        const projects = await prisma.project.findMany({
            include: { owner: true },
        });
        res.json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch projects" });
    }
};