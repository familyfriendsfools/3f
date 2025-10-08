import { atomWithStorage } from "jotai/utils";

export type CreateCampaignAnswers = {
  email?: string;
  name?: string;
  businessType?: string;
  businessArea?: string;
  businessSubarea?: string;
  businessStage?: string;
  description?: string;
  targetValue?: number;
  repaymentPeriod?: number;
  repaymentUnit?: string;
  paymentFrequency?: string;
  gracePeriod?: number;
  interestType?: string;
  interestRate?: number;
  euriborIndexed?: boolean;
  status?: string;
};

export const createCampaignAtom = atomWithStorage<CreateCampaignAnswers>(
  "create-campaign-answers",
  {},
  {
    getItem: key => {
      const stored = sessionStorage.getItem(key);
      return stored ? JSON.parse(stored) : {};
    },
    setItem: (key, value) =>
      sessionStorage.setItem(key, JSON.stringify(value)),
    removeItem: key => sessionStorage.removeItem(key),
  }
);