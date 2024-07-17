import { z } from "zod";

export const AuthDataValidation = z.object({
  email: z
    .string({ message: "o campo deve ser string" })
    .email({ message: "o campo deve ser um email valido" }),
  password: z
    .string({ message: "o campo deve ser string" })
    .min(6, { message: "o campo deve ter no minimo 6 caracteres" }),
});
