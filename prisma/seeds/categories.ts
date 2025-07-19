import { PrismaClient } from '../../src/generated/prisma';

export async function seedCategories(prisma: PrismaClient) {
  const categoryMap = {
    'Industry / Manufacturing': [
      'Cosmetics', 'Clothing', 'Furniture', 'Automobiles', 'Electronic equipment', 'Others',
    ],
    Commerce: [
      'Food', 'Drinks', 'Medicines', 'Cosmetics, health and beauty', 'Hardware', 'Others',
    ],
    Services: [
      'Hotels, tourism', 'Wellness', 'Psychology', 'Law', 'Dentistry',
      'Consulting', 'Laundry', 'Tattoos', 'Education', 'Others',
    ],
  };

  const categories = [];

  for (const [parentName, children] of Object.entries(categoryMap)) {
    const parent = await prisma.campaignCategory.create({
      data: { name: parentName },
    });

    for (const childName of children) {
      await prisma.campaignCategory.create({
        data: { name: childName, parentId: parent.id },
      });
    }

    categories.push(parent);
  }

  return categories; // All top-level categories
}