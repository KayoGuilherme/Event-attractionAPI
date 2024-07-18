import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DeleteInscriptionService {
  async execute(id: number) {
    try {
      const getInscription = await prisma.inscription.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!getInscription) {
        return new Error("Inscrição não encontrada.");
      }

      await prisma.inscription.delete({
        where: {
          id: Number(id),
        },
      });

      return { sucess: true };
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor: " + error);
    }
  }
}
