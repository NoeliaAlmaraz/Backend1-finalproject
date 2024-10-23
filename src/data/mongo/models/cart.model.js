import {Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const collection = 'carts';

const schema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1 
    },
    state: {
        type: String,
        enum: ['reserved', 'paid', 'delivered'],
        default: 'reserved' 
    }
})

const Cart = model(collection,schema)

export default Cart;