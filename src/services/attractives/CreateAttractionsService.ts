import { PrismaClient } from "@prisma/client";
import { AttractionEntity } from "../../entities/attractionEntity";

const prisma = new PrismaClient();

export class CreateAttractionsService {
  async execute(data: AttractionEntity) {
    try {
      await prisma.attractions.create({
        data,
      });
      return { sucess: true };
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor: " + error);
    }
  }
}
