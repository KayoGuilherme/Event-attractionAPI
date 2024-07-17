import { z, ZodError } from "zod";
import { CreateAttractionsService } from "../../services/attractives/CreateAttractionsService";
import { zodErrosMap } from "../../config/zodErrorMap";
import { Request, Response } from "express";
import { createAttractiveValidation } from "../../ValidatorsZod/Attractive/createAttractiveValidation";



export class CreateAttractiveController {
  async handle(req: Request, res: Response) {
    const createAttractiveService = new CreateAttractionsService();
    try {
      const data = createAttractiveValidation.parse(req.body);
      const createEvent = createAttractiveService.execute(data);
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
