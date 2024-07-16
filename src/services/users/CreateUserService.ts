import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export interface UserData {
  name: string;
  email: string;
  CPF: string;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, password, CPF }: UserData) {
    if (!email) {
      throw new Error("Email cannot be empty!");
    }

    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userExist) {
      throw new Error("Email already exists.");
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        CPF,
        email,
        password: passwordHash,
      },
    });

    return user;
  }
}
