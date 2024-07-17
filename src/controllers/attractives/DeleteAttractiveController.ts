import { Request, Response } from "express";
import { z, ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";
import { ParamIdValidation } from "../../ValidatorsZod/paramIdValidation";
import { DeleteAttractionService } from "../../services/attractives/DeleteAttractionsService";

export class DeleteAttractiveController {
  async handle(req: Request, res: Response) {
    const deleteAttractive = new DeleteAttractionService();
    try {
      const paramid = ParamIdValidation.parse(req.params);
      const deleteAtt = deleteAttractive.execute(paramid.id);
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
