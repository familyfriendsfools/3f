import { PrismaClient, type Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function createInvestment(
  data: Prisma.InvestmentUncheckedCreateInput
) {
  return prisma.investment.create({ data });
}

export async function updateInvestment(
  id: string,
  data: Prisma.InvestmentUncheckedUpdateInput
) {
  return prisma.investment.update({
    where: { id },
    data,
  });
}

export async function getInvestment(id: string) {
  return prisma.investment.findUnique({
    where: { id },
    include: {
      campaign: true,
      investor: true,
    },
  });
}

export async function listInvestmentsByCampaign(campaignId: string) {
  return prisma.investment.findMany({
    where: { campaignId },
    include: {
      campaign: true,
      investor: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function listUserInvestments(userId: string) {
  return await prisma.investment.findMany({
    where: { investorId: userId },
    include: {
      campaign: {
        select: {
          id: true,
          name: true,
          status: true,
          targetValue: true,
        },
      },
    },
  });
}
