import { PrismaClient } from "@prisma/client";
import { EventEntity } from "../../entities/eventEntity";

const prisma = new PrismaClient();

export class CreateEventService {
  async execute({ name_event, discription, address, date_event, city }: EventEntity) {
    try {
      await prisma.event.create({
        data: {
          name_event,
          address,
          date_event,
          discription,
          city,
        },
      });
      return { sucess: true };
    } catch (error) {
        console.log(error);
        throw new Error("erro interno do servidor: " + error )
    }
  }
}
