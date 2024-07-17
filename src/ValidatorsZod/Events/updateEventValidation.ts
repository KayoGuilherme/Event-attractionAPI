import { z } from "zod";

export const UpdateEventValidation = z.object({
  name_event: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." }),
  discription: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." }),
  address: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." }),
  date_event: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." })
    .date(),
  city: z
    .string({ message: "o campo deve ser do tipo String" })
    .nonempty({ message: "Campo obrigatorio." }),
});