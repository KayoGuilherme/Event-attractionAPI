import { z, ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";
import { Request, Response } from "express";
import { DeleteUserService } from "../../services/users/DeleteUserService";
import { ParamIdValidation } from "../../ValidatorsZod/paramIdValidation";


export class DeleteUserController {
  async handle(req: Request, res: Response) {
    try {
      const paramId = ParamIdValidation.parse(req.params);
      const updateService = new DeleteUserService();
      await updateService.execute(paramId);
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
