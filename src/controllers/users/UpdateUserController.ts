import { z, ZodError } from "zod";
import { UpdateUserService } from "../../services/users/UpdateUserService";
import { zodErrosMap } from "../../config/zodErrorMap";
import { Request, Response } from "express";

const UpdateUserValidation = z.object({
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

const ParamIdValidation = z.object({
  id: z.string().transform((val) => Number(val)),
});

export class UpdateUserController {
  constructor(private updateUserController: UpdateUserService) {}

  async handle(req: Request, res: Response) {
    try {
      const paramId = ParamIdValidation.parse(req.params);
      const updateData = UpdateUserValidation.parse(req.body);
      await this.updateUserController.execute(updateData, Number(paramId.id));

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
