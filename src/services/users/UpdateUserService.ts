import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../entities/userEntity";

const prisma = new PrismaClient();

export class UpdateUserService {
  async execute({ CPF, email, name, password }: UserEntity, id: number) {
    try {
      const userExist = await prisma.user.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!userExist)
        throw new Error("Usuario não encontrado na base de dados");

      await prisma.user.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
          email,
          CPF,
          password,
        },
      });

      return { sucess: true };
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor" + error);
    }
  }
}
