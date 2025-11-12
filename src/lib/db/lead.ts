import prisma from '@/lib/prisma'

export type LeadAnswerInput = {
  question: string;
  answer: string;
  value?: number;
};

export type LeadInput = {
  email: string;
  name?: string;
  surnames?: string;
  profile?: string;
  challenge?: string;
  score?: number;
  source?: string;
  answers?: LeadAnswerInput[];
};

export async function createLeadWithAnswers(data: LeadInput) {
  return prisma.lead.create({
    data: {
      email: data.email,
      name: data.name,
      surnames: data.surnames,
      profile: data.profile,
      challenge: data.challenge,
      score: data.score,
      source: data.source,
      answers: data.answers
        ? {
          create: data.answers.map((a) => ({
            question: a.question,
            answer: a.answer,
            value: a.value,
          })),
        }
        : undefined,
    },
    select: { id: true },
  });
}