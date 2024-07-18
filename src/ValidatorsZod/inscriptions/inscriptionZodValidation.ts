import { z } from "zod";

export const inscriptionValidation = z.object({
  name: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." }),
  age: z.number().int().positive(),
  attractionId: z.number().int().positive(),
});
