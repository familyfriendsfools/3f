import type { Prisma } from "@/generated/prisma";
import prisma from '@/lib/prisma'

export async function createCampaign(
  data: Prisma.CampaignUncheckedCreateInput
) {
  return prisma.campaign.create({ data });
}

export async function updateCampaign(
  id: string,
  data: Prisma.CampaignUncheckedUpdateInput
) {
  return prisma.campaign.update({
    where: { id },
    data,
  });
}

export async function getCampaign(id: string) {
  return prisma.campaign.findUnique({
    where: { id },
    include: {
      user: true,
      investments: true,
    },
  });
}

export async function listCampaignsByUser(userId: string) {
  return prisma.campaign.findMany({
    where: { userId },
    include: {
      investments: true,
    },
    orderBy: { createdAt: "desc" },
  });
}
