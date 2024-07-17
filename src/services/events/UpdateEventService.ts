import { PrismaClient } from "@prisma/client";
import { EventEntity } from "../../entities/eventEntity";

const prisma = new PrismaClient();

export class UpdateEventService {
  async execute(
    { name_event, discription, address, date_event, city }: EventEntity,
    id_event: number
  ) {
    try {
      const event = await prisma.event.findFirst({
        where: {
          id_event: Number(id_event),
        },
      });

      if (!event) return new Error("Evento nao encontrado na base de dados.");

      await prisma.event.update({
        data: {
          name_event,
          address,
          date_event,
          discription,
          city
        },
        where: {
          id_event: Number(id_event),
        },
      });
      return { sucess: true };
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor: " + error);
    }
  }
}
