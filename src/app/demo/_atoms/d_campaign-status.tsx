import { atomWithStorage } from "jotai/utils";

export type CampaignStatus = {
  status: "DRAFT" | "PUBLISHED" | "COMPLETED" | "CANCELLED";
};

export const campaignStatusAtom = atomWithStorage<CampaignStatus>(
  "campaign-status",
  {
    status: "DRAFT",
  },
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