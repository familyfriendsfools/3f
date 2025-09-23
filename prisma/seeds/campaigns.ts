import {
  PrismaClient,
  BusinessStage,
  BusinessType,
  ModelType,
  RepaymentUnit,
  InterestType,
  PaymentFrequency,
  CampaignStatus,
} from "../../src/generated/prisma";
import { faker } from "@faker-js/faker";

export async function seedCampaigns(
  prisma: PrismaClient,
  users: { id: string }[],
  areas: { id: string; name: string }[],
  count = 10
) {
  const subareas = await prisma.businessArea.findMany({
    where: { parentId: { not: null } },
  });

  for (let i = 0; i < count; i++) {
    const user = faker.helpers.arrayElement(users);
    const area = faker.helpers.arrayElement(areas);
    const subarea = faker.helpers.arrayElement(
      subareas.filter(s => s.parentId === area.id)
    );

    await prisma.campaign.create({
      data: {
        name: faker.company.name(),
        email: faker.internet.email(),
        description: faker.lorem.paragraph(),
        userId: user.id,
        businessType: faker.helpers.arrayElement(Object.values(BusinessType)),
        businessAreaId: area.id,
        businessSubareaId: subarea.id,
        stage: faker.helpers.arrayElement(Object.values(BusinessStage)),
        modelType: faker.helpers.arrayElement(Object.values(ModelType)),
        capitalPlan: faker.lorem.paragraph(),
        pitchLinks: [faker.internet.url()],
        mediaUrls: [faker.image.url()],
        pitchDeckFiles: [],
        targetValue: faker.number.int({ min: 10000, max: 50000 }),
        repaymentPeriod: faker.number.int({ min: 3, max: 24 }),
        repaymentUnit: faker.helpers.arrayElement(Object.values(RepaymentUnit)),
        paymentFrequency: faker.helpers.arrayElement(
          Object.values(PaymentFrequency)
        ),
        gracePeriod: faker.number.int({ min: 0, max: 6 }),
        interestType: faker.helpers.arrayElement(Object.values(InterestType)),
        interestRate: parseFloat(
          faker.number.float({ min: 1.0, max: 10.0 }).toFixed(1)
        ),
        euriborIndexed: faker.datatype.boolean(),
        status: CampaignStatus.PUBLISHED,
      },
    });
  }
}
