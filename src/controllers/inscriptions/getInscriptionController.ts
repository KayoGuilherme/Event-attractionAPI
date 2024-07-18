import { Request, Response } from "express";

import { GetInscriptionService } from "../../services/inscriptions/getInscriptionService";

export class GetInscriptionsController {
  async handle(req: Request, res: Response) {
    const getInscriptionService = new GetInscriptionService();

    try {
      const inscription = await getInscriptionService.execute();
      return res.json(inscription);
    } catch (error: any) {
      console.log(error);
     return res.status(400).json({ error: error.message });
    }
  }
}
