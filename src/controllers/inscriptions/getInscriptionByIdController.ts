import { Request, Response } from "express";
import { z } from "zod";
import { GetInscriptionByIdService } from "../../services/inscriptions/getInscriptionByIdService";

const ParamIdValidation = z.object({
  id: z.string().transform((val) => Number(val)),
});

export class GetInscriptionByIdController {
  async handle(req: Request, res: Response) {
    const getInscriptionService = new GetInscriptionByIdService();

    try {
      const paramid = ParamIdValidation.parse(req.params);
      const event = await getInscriptionService.execute(paramid.id);
      return res.json(event);
    } catch (error: any) {
      console.log(error);
     return res.status(400).json({ error: error.message });
    }
  }
}
