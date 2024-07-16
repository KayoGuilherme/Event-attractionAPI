import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type UserData = {
  id: number;
};

export class DeleteUserService {
  async execute({ id }: UserData) {
    try {
      const userExist = await prisma.user.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!userExist)
        throw new Error("Usuario não encontrado na base de dados");

      await prisma.user.delete({
        where: {
          id: Number(id),
        },
      });

      return { sucess: true };
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor" + error);
    }
  }
}
