import { Request, Response } from "express";
import { z, ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";
import { UpdateEventService } from "../../services/events/UpdateEventService";
import { UpdateEventValidation } from "../../ValidatorsZod/Events/updateEventValidation";


const ParamIdValidation = z.object({
  id_event: z.string().transform((val) => Number(val)),
});

export class UpdateEventController {
  async handle(req: Request, res: Response) {
    const updateEventService = new UpdateEventService();
    try {
      const paramid = ParamIdValidation.parse(req.params);
      const updateData = UpdateEventValidation.parse(req.body);
      const updateEvent = updateEventService.execute(
        updateData,
        paramid.id_event
      );
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
