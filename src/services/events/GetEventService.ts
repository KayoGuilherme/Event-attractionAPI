import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GetEventService {
  async execute() {
    try {
      const events = await prisma.event.findMany({
        include: {
          attractions: true,
        },
      });
      return events;
    } catch (error) {
      console.log(error);
      throw new Error("erro interno do servidor: " + error);
    }
  }
}
