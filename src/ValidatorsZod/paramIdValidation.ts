import { z } from "zod";

export const ParamIdValidation = z.object({
  id: z.string().transform((val) => Number(val)),
});
