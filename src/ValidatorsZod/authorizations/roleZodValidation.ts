import { z } from "zod";

export const roleValidation = z.object({
  name_role: z.string().nonempty(),
  discription_role: z.string().nonempty(),
});
