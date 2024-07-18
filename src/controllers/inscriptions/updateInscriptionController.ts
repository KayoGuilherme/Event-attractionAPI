import { Request, Response } from "express";
import { UpdateInscriptionService } from "../../services/inscriptions/updateInscriptionService";
import { ParamIdValidation } from "../../ValidatorsZod/paramIdValidation";
import { inscriptionValidation } from "../../ValidatorsZod/inscriptions/inscriptionZodValidation";
import { ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";

export class UpdateInscriptionController {
  async handle(req: Request, res: Response) {
    const updateInscriptionService = new UpdateInscriptionService();
    try {
      const paramid = ParamIdValidation.parse(req.params);
      const data = inscriptionValidation.parse(req.body);
      const update = updateInscriptionService.execute(data, paramid.id);

      res.json(update);
    } catch (error: any) {
      if (error instanceof ZodError) {
        const errors = zodErrosMap(error);
        return res.status(400).json({ errors });
      }
     return res.status(400).json({ error: error.message });
    }
  }
}
