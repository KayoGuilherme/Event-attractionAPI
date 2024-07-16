import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetUserService {
  async execute() {
    try {
      const getUsers = await prisma.user.findMany();
      return getUsers;
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor" + error);
    }
  }
}
