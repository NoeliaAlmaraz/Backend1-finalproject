import { Router } from "express";
import {    createProduct,
    readAllProducts,
    readOneProducts,
    updateProducts,
    deleteProduct,} from "../../controllers/mongo/products.controller.js";




const productsApiRouter = Router();

productsApiRouter.get("/", readAllProducts);
productsApiRouter.post("/", createProduct);
productsApiRouter.get("/:id", readOneProducts);
productsApiRouter.put("/:id", updateProducts);
productsApiRouter.delete("/:id", deleteProduct);



export default productsApiRouter;