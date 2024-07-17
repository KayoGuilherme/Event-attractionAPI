import { Request, Response } from "express";
import { GetEventByIdService } from "../../services/events/GetEventByIdService";
import { z } from "zod";

const ParamIdValidation = z.object({
  id_event: z.string().transform((val) => Number(val)),
});

export class GetEventByIdController {
  async handle(req: Request, res: Response) {
    const getEventByIdService = new GetEventByIdService();

    try {
      const paramid = ParamIdValidation.parse(req.params);
      const event = await getEventByIdService.execute(paramid.id_event);
      return res.json(event);
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor: " + error);
    }
  }
}
