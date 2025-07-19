import { PrismaClient } from '../../src/generated/prisma';
import { faker } from '@faker-js/faker';

export async function seedCampaigns(
  prisma: PrismaClient,
  users: { id: string }[],
  categories: { id: string; name: string }[],
  count = 10
) {
  const allSubtypes = await prisma.campaignCategory.findMany({
    where: { parentId: { not: null } },
  });

  for (let i = 0; i < count; i++) {
    const user = faker.helpers.arrayElement(users);
    const type = faker.helpers.arrayElement(categories);
    const subtypes = allSubtypes.filter((s: { parentId: string | null }) => s.parentId === type.id);
    const subtype = faker.helpers.arrayElement(subtypes);

    await prisma.campaign.create({
      data: {
        name: faker.company.name(),
        description: faker.lorem.paragraph(),
        userId: user.id,
        typeId: type.id,
        subtypeId: (subtype as { id: string })?.id || type.id,
        goal: faker.number.int({ min: 5000, max: 50000 }),
        paybackTime: faker.number.int({ min: 3, max: 24 }),
        paybackPlan: faker.helpers.arrayElement(['Weekly', 'Biweekly', 'Monthly', 'Yearly']),
      },
    });
  }
}