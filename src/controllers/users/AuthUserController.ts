import { Request, Response } from "express";
import { AuthService } from "../../services/users/AuthUserService";
import { z, ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";
import { CreateUserService } from "../../services/users/CreateUserService";
import { AuthDataValidation } from "../../ValidatorsZod/users/authValidation";
import { createUserValidation } from "../../ValidatorsZod/users/createUserValidation";



class AuthUserController {
  async handle(req: Request, res: Response) {
    try {
      const authData = AuthDataValidation.parse(req.body);
      const createAuthService = new AuthService();
      const user = await createAuthService.execute(authData);

      return res.json(user);
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = zodErrosMap(error);
        return res.status(400).json({ errors });
      }
      throw new Error("Erro interno do servidor" + error);
    }
  }

  async handleRegister(req: Request, res: Response) {
    try {
      const registerData = createUserValidation.parse(req.body);
      const registerAuthService = new CreateUserService();
      const user = await registerAuthService.execute(registerData);
      return res.json({ register: true });
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = zodErrosMap(error);
        return res.status(400).json({ errors });
      }
      throw new Error("Erro interno do servidor" + error);
    }
  }
}

export { AuthUserController };
