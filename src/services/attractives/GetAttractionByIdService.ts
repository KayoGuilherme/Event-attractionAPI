import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetAttractionByIdService {
  async execute(id: number) {
    try {
      const attractions = await prisma.attractions.findFirst({
        where: {
            id: Number(id)
        }
      });
      if (!attractions)
        return new Error("atração não encontrada");
         return attractions;
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor: " + error);
    }
  }
}
