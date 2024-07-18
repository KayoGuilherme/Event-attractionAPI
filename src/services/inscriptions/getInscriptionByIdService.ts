import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetInscriptionByIdService {
  async execute(id: number) {
    try {
      const getInscriptionBy = await prisma.inscription.findFirst({
        where: {
          id: Number(id),
        },
        include: {
          attraction: {
            select: {
              name: true,
              discription: true,
              hours: true,
              indicated_classification: true,
              date: true,
            },
          },
        },
      });

      if(!getInscriptionBy){
        return new Error("Inscrição não encontrada.")
      }

      return getInscriptionBy;
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor: " + error);
    }
  }
}
