import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();
const secretKey = process.env.JWT_SECRET;

interface AuthData {
  email: string;
  password: string;
}

export class AuthService {
  async execute({ email, password }: AuthData) {
    try {
      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (!user) {
        throw new Error("Email or password incorrect.");
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("Email or password incorrect.");
      }

      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
        },
        secretKey as jwt.Secret,
        { expiresIn: "1h" }
      );

      return { token };
    } catch (error) {
      console.log(error);
      throw new Error("internal server error" + error);
    }
  }
}
