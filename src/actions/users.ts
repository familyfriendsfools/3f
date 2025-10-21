"use server";
import { type Prisma } from "@prisma/client";
import {
  createUser,
  getUser,
  updateUser,
  getCampaignInvestors,
} from "../lib/db/users";
import bcrypt from "bcrypt";


export async function createUserAction(data: Prisma.UserUncheckedCreateInput) {
  const user = await createUser({ ...data, password: await bcrypt.hash(data.password, 10) });
  return user.id;
}

export async function updateUserAction(
  id: string,
  data: Prisma.UserUncheckedUpdateInput
) {
  return updateUser(id, data);
}

export async function getUserAction(id: string) {
  return getUser(id);
}

export async function getCampaignInvestorsAction(campaignId: string) {
  return getCampaignInvestors(campaignId);
}
