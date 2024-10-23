import productManager from "../../data/mongo/managers/product.mongo.js";

async function createProduct(req, res, next) {
    try {
      const product = req.body;
      const responseManager = await productManager.create(product);
      const readAllProducts = await productManager.readAll();
  
      return res.status(201).json({
        successMessage: responseManager.message,
        product: responseManager.product,
        allProducts: readAllProducts,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  
  async function readAllProducts(req, res, next) {
    try {
      let { category } = req.query;
      let products;
      if (category) {
        products = await productManager.readAll(category);
      } else {
        products = await productManager.readAll();
      }
  
      if (products.length > 0) {
        return res
          .status(200)
          .json({ message: "Operational products", products });
      } else {
        return res
          .status(404)
          .json({ message: "There are no products with that category" });
      }
    } catch (error) {
      return next(error);
    }
  }
  
  async function readOneProducts(req, res, next) {
    try {
      const { id } = req.params;
      const product = await productManager.read(id);
      if (product) {
        return res.status(200).json({ message: "Product found", product });
      } else {
        return res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      return next(error);
    }
  }
  
  async function updateProducts(req, res, next) {
    try {
      const { id } = req.params;
      const upProducts = req.body;
      const responseManager = await productManager.update(
        id,
        upProducts
      );
      if (!responseManager) {
        return res.status(404).json({ message: "Product not found" });
      }

      const updateProduct = await productManager.read(id);
  
      return res.status(201).json({
        updateProduct
      });
    } catch (error) {
      return next(error);
    }
  }
  
  async function deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      const responseManager = await productManager.delete(id);
  
      return res
        .status(200)
        .json({
          successMessage: responseManager.message,
          id: responseManager.id,
        });
    } catch (error) {
      return next(error);
    }
  }
  
  
  
  export {
    createProduct,
    readAllProducts,
    readOneProducts,
    updateProducts,
    deleteProduct,
  };