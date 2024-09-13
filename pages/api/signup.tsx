import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

function isNotValidName(name: string) {
  if (name.length <= 6) return "Name is too short, length must be at least 6";
  return false;
}

function isNotValidEmail(email: string) {
  if (email.length <= 6) return "email is too short, length must be at least 6";
  return false;
}

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  let { name, email } = req.body;
  name = name.trim();
  email = email.trim();

  const is_not_valid_name = isNotValidName(name);
  if (is_not_valid_name) {
    res.status(400).json({ error: is_not_valid_name });
    return;
  }
  const is_not_valid_email = isNotValidEmail(email);
  if (is_not_valid_email) {
    res.status(400).json({ error: is_not_valid_email });
    return;
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
}
