import { PrismaClient } from "@prisma/client";
import { AuthorizationEntity } from "../../entities/authorizationEntity";

const prisma = new PrismaClient();

export class UpdateRoleService {
  async execute(data: AuthorizationEntity, id_role: number) {
    try {
      const findRole = await prisma.authorization.findFirst({
        where: {
          id_role: Number(id_role),
        },
      });

      if (!findRole) {
        throw new Error("Role não encontrada.");
      }

      await prisma.authorization.update({
        data,
        where: {
          id_role: Number(id_role),
        },
      });
      return { sucess: true };
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor: " + error);
    }
  }
}
