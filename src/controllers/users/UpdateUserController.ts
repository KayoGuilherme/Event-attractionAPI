import { z, ZodError } from "zod";
import { UpdateUserService } from "../../services/users/UpdateUserService";
import { zodErrosMap } from "../../config/zodErrorMap";
import { Request, Response } from "express";
import { UpdateUserValidation } from "../../ValidatorsZod/users/updateUserValidation";
import { ParamIdValidation } from "../../ValidatorsZod/paramIdValidation";



export class UpdateUserController {
  
  async handle(req: Request, res: Response) {
    try {
      const paramId = ParamIdValidation.parse(req.params);
      const updateData = UpdateUserValidation.parse(req.body);
      const updateService = new UpdateUserService();
      await updateService.execute(updateData, Number(paramId.id));

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
