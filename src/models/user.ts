import {model, models} from "mongoose";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        email_verified_at: { type: Date, default: null },
        password: { type: String, required: true },
        rememberToken: { type: String, default: null }
    },
    { timestamps: true }
);

const User = models.User || model('User', UserSchema);
export default User;
