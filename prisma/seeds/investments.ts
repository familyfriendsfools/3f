import {
  PrismaClient,
  InterestType,
  PaymentFrequency,
  RepaymentUnit,
} from "../../src/generated/prisma";
import { faker } from "@faker-js/faker";

export async function seedInvestments(prisma: PrismaClient) {
  const campaigns = await prisma.campaign.findMany({ include: { user: true } });
  const users = await prisma.user.findMany();

  const otherUsers = (campaignOwnerId: string) =>
    users.filter(u => u.id !== campaignOwnerId);

  for (const campaign of campaigns) {
    const possibleInvestors = faker.helpers.arrayElements(
      otherUsers(campaign.userId),
      2
    );

    for (const investor of possibleInvestors) {
      await prisma.investment.create({
        data: {
          campaignId: campaign.id,
          investorId: investor.id,
          amount: faker.number.int({ min: 500, max: 5000 }),
          interestRate: parseFloat(
            faker.number.float({ min: 1.0, max: 10.0 }).toFixed(1)
          ),
          repaymentPlan: faker.lorem.sentence(),
          paymentFrequency: faker.helpers.arrayElement(
            Object.values(PaymentFrequency)
          ),
          repaymentPeriod: faker.number.int({ min: 3, max: 12 }),
          repaymentUnit: faker.helpers.arrayElement(
            Object.values(RepaymentUnit)
          ),
          interestType: faker.helpers.arrayElement(Object.values(InterestType)),
        },
      });
    }
  }
}
