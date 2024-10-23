import mongoController from "./mongo.controller.js";

const productController = new mongoController(Product)

export default productController