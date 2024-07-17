import { z } from "zod";

export const createAttractiveValidation = z.object({
  name: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." }),
  discription: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." }),
  hours: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." }),
  date: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." }),
  limit: z
    .number({ message: "o campo deve ser do tipo Number" })
    .int("Precisa ser um numero inteiro")
    .positive("Precisa ser um numero Positivo"),
  active: z.boolean(),
  indicated_classification: z
    .number({ message: "o campo deve ser do tipo Number" })
    .int("Precisa ser um numero inteiro")
    .positive("Precisa ser um numero Positivo"),
  event_id: z
    .number({ message: "o campo deve ser do tipo Number" })
    .int("Precisa ser um numero inteiro")
    .positive("Precisa ser um numero Positivo"),
});
