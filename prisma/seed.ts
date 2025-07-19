import { PrismaClient } from '../src/generated/prisma';
import { seedCategories } from './seeds/categories';
import { seedUsers } from './seeds/users';
import { seedCampaigns } from './seeds/campaigns';

const prisma = new PrismaClient();

async function main() {
  console.log('🔥 Clearing DB...');
  await prisma.campaign.deleteMany();
  await prisma.user.deleteMany();
  await prisma.campaignCategory.deleteMany();

  console.log('🌱 Seeding...');
  const categories = await seedCategories(prisma);
  const users = await seedUsers(prisma, 5);
  await seedCampaigns(prisma, users, categories, 20);

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