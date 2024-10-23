import mongoController from "./mongo.controller.js";


const userController = new mongoController(User);

export default userController