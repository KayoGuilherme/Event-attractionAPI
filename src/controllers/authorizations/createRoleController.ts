import { Request, Response } from "express";
import { CreateRoleService } from "../../services/authorizations/createRoleService";
import { roleValidation } from "../../ValidatorsZod/authorizations/roleZodValidation";
import { ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";

export class createRoleController {
  async handle(req: Request, res: Response) {
    const roleService = new CreateRoleService();
    try {
      const data = roleValidation.parse(req.body);
      const result = roleService.execute(data);
      res.json({ sucess: true });
    } catch (error: any) {
      if (error instanceof ZodError) {
        const errors = zodErrosMap(error);
        return res.status(400).json({ errors });
      }

      return res.status(400).json({ error: error.message });
    }
  }
}
