'use server';
import type { CampaignI } from '@/types/campaign';
import { createCampaign, updateCampaign, getCampaign } from '@/lib/db/campaigns';

export async function createCampaignAction(data: Omit<CampaignI, 'id' | 'isActive' | 'createdAt' | 'updatedAt'>) {
  return createCampaign(data);
}

export async function updateCampaignAction(id: string, data: Partial<CampaignI>) {
  return updateCampaign(id, data);
}

export async function deleteCampaignAction(id: string) {
  const campaign = await getCampaign(id);
  if (!campaign) throw new Error('Campaign not found');

  // Perform a soft delete or real delete
  return updateCampaign(id, { isActive: false }); // soft delete
  // Or: return prisma.campaign.delete({ where: { id } });
}