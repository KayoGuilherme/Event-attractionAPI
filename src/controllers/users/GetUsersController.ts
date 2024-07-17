import { Request, Response } from "express";
import { GetUserService } from "../../services/users/GetUserService";

export class GetUsersController {

  constructor(){}

  async handle(req: Request, res: Response) {
    const getUserService = new GetUserService();

    try {
      const users = await getUserService.execute();
      return res.json(users);
    } catch (error) {
      console.log(error);
      throw new Error("Erro interno do servidor" + error);
    }
  }
}
