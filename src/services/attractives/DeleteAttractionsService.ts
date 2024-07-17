import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class DeleteAttractionService {
  async execute(id: number) {
    try {
      const attraction = await prisma.attractions.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!attraction)
        return new Error("Atração nao encontrado na base de dados.");

      await prisma.attractions.delete({
        where: {
          id: Number(id),
        },
      });
      return { sucess: true };
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor: " + error);
    }
  }
}
