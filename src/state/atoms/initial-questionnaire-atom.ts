import { atomWithStorage } from "jotai/utils";

export type InitialQuestionnaireAnswers = {
  motivacao?: string;
  desafio?: string;
  clientes?: string;
  estagio?: string;
  email?: string;
};

export const initialQuestionnaireAtom =
  atomWithStorage<InitialQuestionnaireAnswers>(
    "initial-questionnaire-answers",
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
