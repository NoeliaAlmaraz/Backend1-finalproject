import { Schema, model } from "mongoose";

const collection = "products";

const schema = new Schema({
    title : { type: String, required: true },
    author : {type: String, default: "Anonymous"},
    price : {type : Number, default: 1},
    stock : {type : Number, default: 1},
    category : {type : String, default: "default"},
    photo : {type : String, default: "/public/assets/photo.jpg"},
})

const Product = model(collection, schema);

export default Product;