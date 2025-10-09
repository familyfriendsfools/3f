import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function ensurePrismaIsBundled() {
  await prisma.$connect();
  await prisma.$disconnect();
}