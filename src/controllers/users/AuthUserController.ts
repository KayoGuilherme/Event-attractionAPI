import { Request, Response } from "express";
import { AuthService } from "../../services/users/AuthUserService";
import { z, ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";
import { CreateUserService } from "../../services/users/CreateUserService";

const AuthDataValidation = z.object({
  email: z
    .string({ message: "o campo deve ser string" })
    .email({ message: "o campo deve ser um email valido" }),
  password: z
    .string({ message: "o campo deve ser string" })
    .min(6, { message: "o campo deve ter no minimo 6 caracteres" }),
});

const RegisterDataValidation = z.object({
  name: z.string().nonempty({ message: "Campo nome é Obrigatorio." }),
  email: z
    .string()
    .email({ message: "o campo deve ser um email valido" })
    .nonempty({ message: "Campo email é obrigatorio." }),
  CPF: z
    .string({ message: "O campo deve ser uma string" })
    .min(11, { message: "O campo deve ter no minimo 11 caracteres" })
    .max(11, { message: "O campo deve ter no maximo 11 caracteres" })
    .nonempty({ message: "Campo CPF é obrigatorio." }),
  password: z
    .string({ message: "O campo deve ser uma string" })
    .min(6, { message: "o campo deve ter no minimo 6 caracteres" })
    .nonempty({ message: "Campo password é obrigatorio." }),
});

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
      const registerData = RegisterDataValidation.parse(req.body);
      const registerAuthService = new CreateUserService();
      const user = await registerAuthService.execute(registerData);
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

export { AuthUserController };
