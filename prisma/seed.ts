import { PrismaClient } from '../src/generated/prisma';
import { seedBusinessAreas } from './seeds/businessAreas';
import { seedUsers } from './seeds/users';
import { seedCampaigns } from './seeds/campaigns';
import { seedInvestments } from './seeds/investments';

const prisma = new PrismaClient();

async function main() {
  console.log('🔥 Clearing DB...');
  await prisma.investment.deleteMany();
  await prisma.campaign.deleteMany();
  await prisma.user.deleteMany();
  await prisma.businessArea.deleteMany();

  console.log('🌱 Seeding...');
  const areas = await seedBusinessAreas(prisma);
  const users = await seedUsers(prisma, 5);
  await seedCampaigns(prisma, users, areas, 10);
  await seedInvestments(prisma);
  console.log('✅ Seed complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });