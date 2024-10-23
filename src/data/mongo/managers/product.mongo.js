import Product from "../models/product.model.js";

import mongoManager from "./manager.mongo.js";

const productManager = new mongoManager(Product);

export default productManager;