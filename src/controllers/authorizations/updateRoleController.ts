import { Request, Response } from "express";
import { roleValidation } from "../../ValidatorsZod/authorizations/roleZodValidation";
import { z, ZodError } from "zod";
import { zodErrosMap } from "../../config/zodErrorMap";
import { UpdateRoleService } from "../../services/authorizations/updateRoleService";

export const ParamIdValidation = z.object({
  id_role: z.string().transform((val) => Number(val)),
});

export class UpdateRoleController {
  async handle(req: Request, res: Response) {
    const roleService = new UpdateRoleService();
    try {
      const data = roleValidation.parse(req.body);
      const paramid = ParamIdValidation.parse(req.params);
      const result = roleService.execute(data, paramid.id_role);
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
