import { PrismaClient } from "@prisma/client";
import { InscriptionEntity } from "../../entities/inscriptionEntity";

const prisma = new PrismaClient();

export class UpdateInscriptionService {
  async execute({ age, attractionId, name }: InscriptionEntity, id: number) {
    try {
      const getInscription = await prisma.inscription.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!getInscription) {
        return new Error("Inscrição não encontrada.");
      }

      await prisma.inscription.update({
        where: {
          id: Number(id),
        },
        data: {
          age,
          attractionId,
          name,
        },
      });

      return { sucess: true };
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor: " + error);
    }
  }
}
