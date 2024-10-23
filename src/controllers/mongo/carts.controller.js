import cartManager from "../../data/mongo/managers/cart.mongo.js";



async function createCart(req, res, next) {
    try {
        const { user_id, product_id, quantity, state } = req.body;


        if (!user_id || !product_id || !quantity ) {
            return res.status(400).json({ message: 'Missing required fields' });
        }


        const newCart = await cartManager.create({ user_id, product_id, quantity, state });
        return res.status(201).json({ message: 'Cart created successfully', cart: newCart });
    } catch (error) {
        return next(error);
    }
}

async function readAllCarts(req, res, next) {
    try {
        const { user_id } = req.query; 

        let filter = {};
        if (user_id) {
            filter.user_id = user_id; 
        }

        const carts = await cartManager.readAll(filter); 

        if (carts.length > 0) {
            return res.status(200).json({ message: "Carts found", carts });
        } else {
            return res.status(404).json({ message: "No carts found" });
        }
    } catch (error) {
        return next(error);
    }
}

async function updateCart(req, res, next) {
    try {
        const { id } = req.params; 
        const { quantity, state } = req.body; 

        if (!quantity && !state) {
            return res.status(400).json({ message: 'Nothing to update' });
        }

        const updatedCart = await cartManager.update(id, { quantity, state });
        if (!updatedCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        return res.status(200).json({ message: 'Cart updated successfully', cart: updatedCart });
    } catch (error) {
        return next(error);
    }
}

async function deleteCart(req, res, next) {
    try {
        const { id } = req.params; 

        const deletedCart = await cartManager.delete(id);
        if (!deletedCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        return res.status(200).json({ message: 'Cart deleted successfully', cart: deletedCart });
    } catch (error) {
        return next(error);
    }
}

export { createCart, readAllCarts, updateCart, deleteCart };