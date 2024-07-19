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
import { GetInscriptionsController } from "./controllers/inscriptions/getInscriptionController";
import { GetInscriptionByIdController } from "./controllers/inscriptions/getInscriptionByIdController";
import { CreateInscriptionController } from "./controllers/inscriptions/createInscriptionController";
import { UpdateInscriptionController } from "./controllers/inscriptions/updateInscriptionController";
import { DeleteInscriptionController } from "./controllers/inscriptions/deleteInscriptionController";
import { createRoleController } from "./controllers/authorizations/createRoleController";
import { UpdateRoleController } from "./controllers/authorizations/updateRoleController";

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
router.get("/event/:id_event", isAuthenticated, new GetEventByIdController().handle);
router.post("/event", isAuthenticated, new CreateEventController().handle);
router.put("/event/:id_event", isAuthenticated, new UpdateEventController().handle);
router.delete("/event/:id_event", isAuthenticated, new DeleteEventController().handle);


//atrações
router.get("/attractions", isAuthenticated, new GetAttractiveController().handle)
router.get("/attractions/:id", isAuthenticated, new GetAttractiveByIdController().handle)
router.post("/attractions", isAuthenticated, new CreateAttractiveController().handle)
router.put("/attractions/:id", isAuthenticated, new UpdateAttractiveController().handle)
router.delete("/attractions/:id", isAuthenticated, new DeleteAttractiveController().handle)


//inscrições 
router.get("/inscriptions", isAuthenticated, new GetInscriptionsController().handle)
router.get("/inscriptions/:id", isAuthenticated, new GetInscriptionByIdController().handle)
router.post("/inscription", isAuthenticated, new CreateInscriptionController().handle)
router.put("/inscriptions/:id", isAuthenticated, new UpdateInscriptionController().handle)
router.delete("/inscriptions/:id", isAuthenticated, new DeleteInscriptionController().handle)



//authorization
router.post("/role", isAuthenticated, new createRoleController().handle)
router.put("/role/:id_role", isAuthenticated, new UpdateRoleController().handle);