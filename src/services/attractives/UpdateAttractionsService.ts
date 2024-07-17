import { PrismaClient } from "@prisma/client";
import { AttractionEntity } from "../../entities/attractionEntity";

const prisma = new PrismaClient();

export class UpdateAttractionsService {
  async execute(
    {
      active,
      date,
      discription,
      event_id,
      hours,
      limit,
      name,
      indicated_classification,
    }: AttractionEntity,
    id: number
  ) {
    try {
      const attraction = await prisma.attractions.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!attraction)
        return new Error("Atração nao encontrado na base de dados.");

      await prisma.attractions.update({
        data: {
          active,
          date,
          discription,
          event_id,
          hours,
          limit,
          name,
          indicated_classification,
        },
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
