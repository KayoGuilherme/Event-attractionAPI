import { Request, Response } from "express";
import { GetEventByIdService } from "../../services/events/GetEventByIdService";
import { z } from "zod";
import { GetAttractionByIdService } from "../../services/attractives/GetAttractionByIdService";

const ParamIdValidation = z.object({
  id: z.string().transform((val) => Number(val)),
});

export class GetAttractiveByIdController {
  async handle(req: Request, res: Response) {
    const getAttractiveByIdService = new GetAttractionByIdService();

    try {
      const paramid = ParamIdValidation.parse(req.params);
      const attractive = await getAttractiveByIdService.execute(paramid.id);
      return res.json(attractive);
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor: " + error);
    }
  }
}
