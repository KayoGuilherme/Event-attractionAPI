import { z, ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";
import { Request, Response } from "express";
import { DeleteUserService } from "../../services/users/DeleteUserService";

const ParamIdValidation = z.object({
  id: z.string().transform((val) => Number(val)),
});

export class DeleteUserController {
  constructor(private deleteUserService: DeleteUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const paramId = ParamIdValidation.parse(req.params);

      await this.deleteUserService.execute(paramId);
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
