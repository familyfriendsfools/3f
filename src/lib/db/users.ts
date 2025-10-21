import type { Prisma } from "@prisma/client";
import prisma from '@/lib/prisma'

export async function createUser(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({ data });
}

export async function updateUser(
  id: string,
  data: Prisma.UserUncheckedUpdateInput
) {
  return prisma.user.update({
    where: { id },
    data,
  });
}

export async function getUser(id: string) {
  return prisma.user.findUnique({
    where: { id },
    include: {
      campaigns: true,
      investments: true,
    },
  });
}

export async function getCampaignInvestors(campaignId: string) {
  return await prisma.user.findMany({
    where: {
      investments: {
        some: { campaignId },
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      investments: {
        where: { campaignId },
        select: {
          amount: true,
          interestRate: true,
          repaymentPlan: true,
          createdAt: true,
        },
      },
    },
  });
}
