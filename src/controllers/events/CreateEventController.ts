import { Request, Response } from "express";
import {  ZodError } from "zod";
import { CreateEventService } from "../../services/events/CreateEventService";
import { zodErrosMap } from "../../config/zodErrorMap";
import { CreateEventValidation } from "../../ValidatorsZod/Events/createEventValidation";



export class CreateEventController {
  async handle(req: Request, res: Response) {
    const createEventService = new CreateEventService();
    try {
      const data = CreateEventValidation.parse(req.body);
      const createEvent = createEventService.execute(data);
      return res.json({ sucess: true });
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = zodErrosMap(error);
        return res.status(400).json({ errors });
      }
      throw new Error("Erro interno do servidor" + error);
    }
  }
}
