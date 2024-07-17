import { Request, Response } from "express";
import { updateAttractiveValidation } from "../../ValidatorsZod/Attractive/updateAttractiveValidation";
import { ParamIdValidation } from "../../ValidatorsZod/paramIdValidation";
import { UpdateAttractionsService } from "../../services/attractives/UpdateAttractionsService";
import { ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";

export class UpdateAttractiveController {
  async handle(req: Request, res: Response) {
    try {
      const updateAttractiveService = new UpdateAttractionsService();
      const paramId = ParamIdValidation.parse(req.params);
      const data = updateAttractiveValidation.parse(req.body);
      const updateAttractive = updateAttractiveService.execute(
        data,
        paramId.id
      );
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
