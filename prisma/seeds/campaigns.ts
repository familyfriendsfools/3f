import {
  PrismaClient,
  BusinessStage,
  BusinessType,
  ModelType,
  RepaymentUnit,
  InterestType,
  PaymentFrequency,
  CampaignStatus,
  BusinessArea,
  BusinessSubarea,
} from "@prisma/client";
import { faker } from "@faker-js/faker";

const areaToSubareas: Record<BusinessArea, BusinessSubarea[]> = {
  INDUSTRY: [
    "GOODS_PRODUCTION",
    "AGRIBUSINESS",
    "MINING",
    "CONSTRUCTION",
    "OTHER_INDUSTRY",
  ],
  COMMERCE: [
    "RETAIL",
    "WHOLESALE",
    "FRANCHISE",
    "OTHER_COMMERCE",
  ],
  SERVICES: [
    "HEALTH_WELLNESS",
    "EDUCATION",
    "CONSULTING",
    "TECHNOLOGY",
    "LOGISTICS",
    "LEGAL",
    "SPECIALIZED",
    "OTHER_SERVICES",
  ],
  FINANCE: [
    "BANKING",
    "INSURANCE",
    "FINTECH",
    "STOCK_MARKET",
    "OTHER_FINANCE",
  ],
  TOURISM: [
    "HOSPITALITY",
    "FOOD",
    "TRAVEL_AGENCY",
    "EVENTS",
    "OTHER_TOURISM",
  ],
  MEDIA: [
    "ADVERTISING",
    "AUDIOVISUAL",
    "JOURNALISM",
    "DIGITAL_PLATFORMS",
    "INFO_MANAGEMENT",
    "PR",
    "OTHER_MEDIA",
  ],
  CULTURE: [
    "ART_PRODUCTION",
    "LITERATURE",
    "MUSIC_AUDIO",
    "PERFORMING_ARTS",
    "HERITAGE",
    "CREATIVE_INDUSTRY",
  ],
};

export async function seedCampaigns(
  prisma: PrismaClient,
  users: { id: string }[],
  count = 10
) {
  for (let i = 0; i < count; i++) {
    const user = faker.helpers.arrayElement(users);
    const area = faker.helpers.arrayElement(Object.values(BusinessArea));
    const subareas = areaToSubareas[area];
    const subarea = faker.helpers.arrayElement(subareas);

    await prisma.campaign.create({
      data: {
        name: faker.company.name(),
        email: faker.internet.email(),
        description: faker.lorem.paragraph(),
        userId: user.id,
        businessType: faker.helpers.arrayElement(Object.values(BusinessType)),
        businessArea: area,
        businessSubarea: subarea,
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
