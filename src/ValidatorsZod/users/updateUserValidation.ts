import { z } from "zod";

export const UpdateUserValidation = z.object({
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