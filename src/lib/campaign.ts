// lib/campaign.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createCampaign(data: {
    userId: string;
    title: string;
    description?: string;
    goal?: number;
    timeToPayBack?: number;
    paybackPlan?: string;
    campaignType?: string;
    campaignSubType?: string;
    picture?: string;
    video?: string;
    urls?: string[];
}) {
    return await prisma.campaign.create({
        data: {
            userId: data.userId,
            title: data.title,
            description: data.description ?? '',
            goal: data.goal ?? 0,
            timeToPayBack: data.timeToPayBack ?? 0,
            paybackPlan: data.paybackPlan ?? '',
            campaignType: data.campaignType ?? '',
            campaignSubType: data.campaignSubType ?? '',
            picture: data.picture ?? '',
            video: data.video ?? '',
            urls: data.urls ?? [],
        },
    });
}

export async function getCampaignsByUser(userId: string) {
    return await prisma.campaign.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
    });
}
