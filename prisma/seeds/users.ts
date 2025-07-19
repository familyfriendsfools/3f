import { PrismaClient } from '../../src/generated/prisma';
import { faker } from '@faker-js/faker';

export async function seedUsers(prisma: PrismaClient, count = 5) {
  const users = [];

  for (let i = 0; i < count; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        password: faker.internet.password(),
        rememberToken: faker.string.uuid(),
        emailVerified: true,
      },
    });
    users.push(user);
  }

  return users;
}