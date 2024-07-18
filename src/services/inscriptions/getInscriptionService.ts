import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetInscriptionService {
  async execute() {
    try {
      const getInscription = await prisma.inscription.findMany({
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

      return getInscription;
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor: " + error);
    }
  }
}
