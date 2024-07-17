import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { GetUsersController } from "./controllers/users/GetUsersController";
import { isAuthenticated } from "../src/middlewares/AuthMiddleware";
import { UpdateUserController } from "./controllers/users/UpdateUserController";
import { DeleteUserController } from "./controllers/users/DeleteUserController";
import { GetEventController } from "./controllers/events/GetEventController";
import { GetEventByIdController } from "./controllers/events/GetEventByIdController";
import { CreateEventController } from "./controllers/events/CreateEventController";
import { UpdateEventController } from "./controllers/events/UpdateEventController";
import { DeleteEventController } from "./controllers/events/DeleteEventController";
import { GetAttractiveController } from "./controllers/attractives/GetAttractiveController";
import { GetAttractiveByIdController } from "./controllers/attractives/GetAttractiveByIdController";
import { CreateAttractiveController } from "./controllers/attractives/CreateAttractiveController";
import { UpdateAttractiveController } from "./controllers/attractives/UpdateAttractiveController";
import { DeleteAttractiveController } from "./controllers/attractives/DeleteAttractiveController";

export const router = Router();

// controle de usuarios
router.post("/users", isAuthenticated, new CreateUserController().handle);
router.get("/users", isAuthenticated, new GetUsersController().handle);
router.put("/users/:id", isAuthenticated, new UpdateUserController().handle);
router.delete("/users/:id", isAuthenticated, new DeleteUserController().handle);

// autenticação de usuarios
router.post("/session", new AuthUserController().handle);
router.post("/register", new AuthUserController().handleRegister);


//eventos
router.get("/event", isAuthenticated, new GetEventController().handle)
router.get("/event/:id", isAuthenticated, new GetEventByIdController().handle);
router.post("/event", isAuthenticated, new CreateEventController().handle);
router.put("/event/:id", isAuthenticated, new UpdateEventController().handle);
router.delete("/event/:id", isAuthenticated, new DeleteEventController().handle);


//atrações
router.get("/attractions", isAuthenticated, new GetAttractiveController().handle)
router.get("/attractions/:id", isAuthenticated, new GetAttractiveByIdController().handle)
router.post("/attractions", isAuthenticated, new CreateAttractiveController().handle)
router.put("/attractions/:id", isAuthenticated, new UpdateAttractiveController().handle)
router.delete("/attractions/:id", isAuthenticated, new DeleteAttractiveController().handle)


