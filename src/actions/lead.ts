"use server";
import { createLeadWithAnswers, type LeadInput } from "@/lib/db/lead";

export async function createLeadAction(data: LeadInput) {
  const lead = await createLeadWithAnswers(data);
  return lead.id;

}