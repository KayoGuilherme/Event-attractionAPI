import { Request, Response } from "express";
import { GetAttractionsService } from "../../services/attractives/GetAttractionsService";

export class GetAttractiveController {
  async handle(req: Request, res: Response) {
    const getAttractiveService = new GetAttractionsService();

    try {
      const attractive = await getAttractiveService.execute();
      return res.json(attractive);
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor: " + error);
    }
  }
}
