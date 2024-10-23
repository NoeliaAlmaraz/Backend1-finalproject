import { Router } from "express";
import {    readAllUsers,
    readOneUsers,
    createUsers,
    updateUsers,
    destroyUser,} from "../../controllers/mongo/users.controller.js";


const usersApiRouter = Router();

usersApiRouter.get("/", readAllUsers);
usersApiRouter.get("/:id", readOneUsers);
usersApiRouter.post("/", createUsers);
usersApiRouter.put("/:id", updateUsers);
usersApiRouter.delete("/:id", destroyUser);



export default usersApiRouter;