import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ error: "Email, username, and password required" });
    }

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password, // ⚠️ later we’ll hash this before saving!
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const getUserNames = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { email: true, username: true }
    });
    res.json(users.map(user => ({ email: user.email, username: user.username })));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve user names" });
  }
};