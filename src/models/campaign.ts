import {model, models} from "mongoose";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema(
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        category_id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
        name: { type: String, required: true },
        description: { type: String },
        active: { type: Boolean, default: true },
        location: { type: String },
        goal: { type: Number, required: true }
    },
    { timestamps: true }
);

const Campaign = models.Campaign || model('Campaign', CampaignSchema);

export default Campaign;