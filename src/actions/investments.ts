'use server';
import { type Prisma } from '../generated/prisma';
import { createInvestment, getInvestment, updateInvestment, listInvestmentsByCampaign, listUserInvestments } from '../lib/db/investments';

export async function createInvestmentAction(data: Prisma.InvestmentUncheckedCreateInput) {
  return createInvestment(data);
}

export async function updateInvestmentAction(id: string, data: Prisma.InvestmentUncheckedUpdateInput) {
  return updateInvestment(id, data);
}

export async function getInvestmentAction(id: string) {
  return getInvestment(id);
}

export async function listInvestmentsByCampaignAction(campaignId: string) {
  return listInvestmentsByCampaign(campaignId);
}

export async function listUserInvestmentsAction(userId: string) {
  return listUserInvestments(userId);
}