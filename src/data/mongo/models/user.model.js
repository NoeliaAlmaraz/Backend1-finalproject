import { Schema, model } from "mongoose";

const collection = "users";

const schema = new Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true,
        unique: true,  
        match: [/^\S+@\S+\.\S+$/, 'Por favor, ingresa un email válido'] 
    },
    password: { type: String, required: true },
    photo: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
    },
    role: { type: String, default: "user" },
    isOnline: { type: Boolean, default: false },
});

const User = model(collection, schema);

export default User;
