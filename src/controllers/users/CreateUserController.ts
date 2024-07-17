import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";
import { z, ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";
import { createUserValidation } from "../../ValidatorsZod/users/createUserValidation";



class CreateUserController {
  async handle(req: Request, res: Response) {
    try {
      const userData = createUserValidation.parse(req.body);
      const createUserService = new CreateUserService();
      const user = await createUserService.execute(userData);

      return res.json(user);
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = zodErrosMap(error);
        return res.status(400).json({ errors });
      }
      throw new Error("Erro interno do servidor" + error);
    }
  }
}
export { CreateUserController };
