const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        parent_id: { type: Schema.Types.ObjectId, ref: 'Category', default: null },
        name: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Category', CategorySchema);
