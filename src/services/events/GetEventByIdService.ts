import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetEventByIdService {
  async execute(id_event: number) {
    try {
      const event = await prisma.event.findFirst({
        where: {
          id_event: Number(id_event),
        },
      });

      if (!event)
         return new Error("Evento nao encontrado na base de dados.");

       return event;
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor: " + error);
    }
  }
}
