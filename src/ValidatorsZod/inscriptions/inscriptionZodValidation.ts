import { z } from "zod";

export const inscriptionValidation = z.object({
  name: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." }),
  age: z.string().transform((val) => Number(val)),
  attractionId: z.string().transform((val) => Number(val)),
});
