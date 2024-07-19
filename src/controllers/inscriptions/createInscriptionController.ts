import { Request, Response } from "express";
import { inscriptionValidation } from "../../ValidatorsZod/inscriptions/inscriptionZodValidation";
import { ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";
import { CreateInscriptionService } from "../../services/inscriptions/createInscriptionService";
import upload from "../../config/configMulter";

export class CreateInscriptionController {
  async handle(req: Request, res: Response) {
    const createInscriptionService = new CreateInscriptionService();
    try {
      const data = inscriptionValidation.parse(req.body);

      if (!req.file) {
        return res.status(400).json({ error: "Imagem do RG é necessária." });
      }
      const rgImagePath = req.file.path;
      const result = await createInscriptionService.execute({
        ...data,
        rgImagePath,
      });

      return res.json(result);
    } catch (error: any) {
      if (error instanceof ZodError) {
        const errors = zodErrosMap(error);
        return res.status(400).json({ errors });
      }

      return res.status(400).json({ error: error.message });
    }
  }
}
