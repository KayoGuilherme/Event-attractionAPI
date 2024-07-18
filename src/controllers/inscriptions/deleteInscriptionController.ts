import { Request, Response } from "express";
import { ParamIdValidation } from "../../ValidatorsZod/paramIdValidation";
import { DeleteInscriptionService } from "../../services/inscriptions/deleteInscriptionService";

export class DeleteInscriptionController {
  async handle(req: Request, res: Response) {
    const deleteInscriptionService = new DeleteInscriptionService();
    try {
      const paramid = ParamIdValidation.parse(req.params);
      const deleteInscription = deleteInscriptionService.execute(paramid.id);

      res.json(deleteInscription);
    } catch (error: any) {
    return res.status(400).json({ error: error.message });
    }
  }
}
