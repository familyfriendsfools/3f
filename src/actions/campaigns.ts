'use server';
import { type Prisma } from '../generated/prisma';
import { createCampaign, updateCampaign, getCampaign, listCampaignsByUser } from '../lib/db/campaigns';

export async function createCampaignAction(data: Prisma.CampaignUncheckedCreateInput) {
  return createCampaign(data);
}

export async function updateCampaignAction(id: string, data: Prisma.CampaignUncheckedUpdateInput) {
  return updateCampaign(id, data);
}

export async function getCampaignAction(id: string) {
  return getCampaign(id);
}

export async function listCampaignsByUserAction(userId: string) {
  return listCampaignsByUser(userId);
}

export async function deleteCampaignAction(id: string) {
  const campaign = await getCampaign(id);
  if (!campaign) throw new Error('Campaign not found');

  // Perform a soft delete or real delete
  return updateCampaign(id, { status: 'CANCELLED' } as Prisma.CampaignUncheckedUpdateInput); // soft delete
  // Or: return prisma.campaign.delete({ where: { id } });
}