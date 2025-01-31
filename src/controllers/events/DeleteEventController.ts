import { Request, Response } from "express";
import { z, ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";
import { DeleteEventService } from "../../services/events/DeleteEventService";

const ParamIdValidation = z.object({
  id_event: z.string().transform((val) => Number(val)),
});

export class DeleteEventController {
  async handle(req: Request, res: Response) {
    const deleteEventService = new DeleteEventService();
    try {
      const paramid = ParamIdValidation.parse(req.params);
      const deleteEvent = deleteEventService.execute(paramid.id_event);
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
