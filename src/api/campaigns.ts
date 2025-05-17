// pages/api/users/[id]/campaigns.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Invalid user ID' });
    }

    try {
        const campaigns = await prisma.campaign.findMany({
            where: { userId: id },
            orderBy: { createdAt: 'desc' },
        });

        return res.status(200).json({ success: true, campaigns });
    } catch (error) {
        console.error('[GET /api/users/[id]/campaigns]', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

