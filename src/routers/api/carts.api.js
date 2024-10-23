import { Router } from 'express';
import { createCart, readAllCarts, updateCart, deleteCart } from '../../controllers/mongo/carts.controller.js';

const cartsApiRouter = Router();

cartsApiRouter.get('/', readAllCarts);
cartsApiRouter.post('/', createCart);
cartsApiRouter.put('/:id', updateCart);
cartsApiRouter.delete('/:id', deleteCart);

export default cartsApiRouter;