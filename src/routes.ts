import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { GetUsersController } from "./controllers/users/GetUsersController";
import { isAuthenticated } from "../src/middlewares/AuthMiddleware";

export const router = Router();

// controle de usuarios
router.post("/users", isAuthenticated, new CreateUserController().handle);
router.get("/users", isAuthenticated, new GetUsersController().handle);

// autenticação de usuarios
router.post("/session", new AuthUserController().handle);
router.post("/register", new AuthUserController().handleRegister);
