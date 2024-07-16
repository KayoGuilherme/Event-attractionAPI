import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { GetUsersController } from "./controllers/users/GetUsersController";
import { isAuthenticated } from "../src/middlewares/AuthMiddleware";
import { UpdateUserController } from "./controllers/users/UpdateUserController";
import { DeleteUserController } from "./controllers/users/DeleteUserController";

export const router = Router();

// controle de usuarios
router.post("/users", isAuthenticated, new CreateUserController().handle);
router.get("/users", isAuthenticated, new GetUsersController().handle);
router.put("/users/:id", isAuthenticated, new UpdateUserController().handle);
router.delete("/users/:id", isAuthenticated, new DeleteUserController().handle);

// autenticação de usuarios
router.post("/session", new AuthUserController().handle);
router.post("/register", new AuthUserController().handleRegister);
