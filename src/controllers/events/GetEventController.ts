import { Request, Response } from "express";
import { GetEventService } from "../../services/events/GetEventService";

export class GetEventController {
  async handle(req: Request, res: Response) {
    const getEventService = new GetEventService();

    try {
      const event = await getEventService.execute();
      return res.json(event);
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor: " + error);
    }
  }
}
