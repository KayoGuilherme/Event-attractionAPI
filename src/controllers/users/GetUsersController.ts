import { Response } from "express";
import { GetUserService } from "../../services/users/GetUserService";

export class GetUsersController {
  constructor(private getUserService: GetUserService) {}

  async handle(res: Response) {
    try {
      const users = await this.getUserService.execute();
      return res.json(users);
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor" + error);
    }
  }
}
