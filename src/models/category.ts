import {model, models} from "mongoose";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        parent_id: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
        name: { type: String, required: true }
    },
    { timestamps: true }
);

const Category = models.Category || model('Category', CategorySchema);
export default Category;