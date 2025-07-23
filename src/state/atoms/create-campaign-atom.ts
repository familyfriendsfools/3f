import { atomWithStorage } from "jotai/utils";

export type CreateCampaignAnswers = {
  email?: string;
  nome?: string;
  tipo?: string;
  area?: string;
  subarea?: string;
  estagio?: string;
  descricao?: string;
  valor?: string;
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