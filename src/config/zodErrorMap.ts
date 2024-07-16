import { ZodError } from "zod";

export function zodErrosMap(err: ZodError) {
  return err.errors.map((error) => ({
    field: error.path.join("."),
    message: error.message,
  }));
}
