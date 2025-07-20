'use server';
import { type Prisma } from '../generated/prisma';
import { createUser, getUser, updateUser, getCampaignInvestors } from '../lib/db/users';

export async function createUserAction(data: Prisma.UserUncheckedCreateInput) {
  return createUser(data);
}

export async function updateUserAction(id: string, data: Prisma.UserUncheckedUpdateInput) {
  return updateUser(id, data);
}

export async function getUserAction(id: string) {
  return getUser(id);
}

export async function getCampaignInvestorsAction(campaignId: string) {
  return getCampaignInvestors(campaignId);
}