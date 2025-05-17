import mongoose, { Schema, model, models } from 'mongoose';

const CampaignSchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    description: String,
    goal: Number,
    timeToPayBack: Number,
    paybackPlan: String,
    campaignType: String,
    campaignSubType: String,
    picture: String, // ou Buffer / File ID se usares cloud
    video: String,
    urls: [String],
    createdAt: { type: Date, default: Date.now }
});

export const Campaign = models.Campaign || model('Campaign', CampaignSchema);
