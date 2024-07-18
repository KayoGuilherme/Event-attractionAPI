import { PrismaClient } from "@prisma/client";
import { AuthorizationEntity } from "../../entities/authorizationEntity";

const prisma = new PrismaClient();

export class CreateRoleService {
  async execute(data: AuthorizationEntity) {
    try {
      await prisma.authorization.create({
        data,
      });
      return { sucess: true };
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor: " + error);
    }
  }
}
