import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetAttractionsService {
  async execute() {
    try {
      const attractions = await prisma.attractions.findMany();
      return attractions;
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor: " + error);
    }
  }
}
