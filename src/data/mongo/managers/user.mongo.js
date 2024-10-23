import User from "../models/user.model.js";
import mongoManager from "./manager.mongo.js";

const userManager = new mongoManager(User);

export default userManager;