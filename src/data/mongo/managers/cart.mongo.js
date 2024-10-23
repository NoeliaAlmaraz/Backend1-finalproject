import Cart from "../models/cart.model.js";

import mongoManager from "./manager.mongo.js";

const cartManager = new mongoManager(Cart);

export default cartManager;