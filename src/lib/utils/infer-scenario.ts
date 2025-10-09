import { InitialQuestionnaireAnswers } from "@/state/index";

export const inferCenarioFromAnswers = (a: InitialQuestionnaireAnswers): "ONE" | "TWO" | "THREE" | "N/A" => {
  const matches = {
    "ONE": 0,
    "TWO": 0,
    "THREE": 0,
  };

  const cenarioRules = {
    "ONE": {
      motivation: [
        "Liberdade financeira imediata",
        "Realizar um sonho pessoal",
        "Crescer e escalar rapidamente",
      ],
      challenge: [
        "Transformar a minha ideia num produto/serviço viável",
        "Ter financiamento para começar a operar",
        "Encontrar e reter primeiros clientes",
      ],
      customers: [
        "Nenhum",
        "Até 10",
        "De 10 a 100",
        "Centenas ou milhares",
      ],
      businessStage: [
        "Tenho um conceito/ideia por desenvolver",
        "Protótipo ou MVP inicial em teste",
        "Produto validado com primeiros clientes pagantes",
        "Preciso de rever modelo de negócio e/ou escalar para não fechar",
      ],
    },
    "TWO": {
      motivation: [
        "Impactar positivamente a sociedade",
        "Crescer e escalar rapidamente",
      ],
      challenge: [
        "Encontrar e reter primeiros clientes",
        "Melhorar/organizar processos internos e/ou equipa",
        "Escalar para novos mercados rapidamente",
      ],
      customers: [
        "Centenas ou milhares",
      ],
      businessStage: [
        "Produto validado com primeiros clientes pagantes",
        "Operação consolidada, em fase de crescimento",
        "Preciso de rever modelo de negócio e/ou escalar para não fechar",
      ],
    },
    "THREE": {
      motivation: [
        "Liberdade financeira imediata",
        "Realizar um sonho pessoal",
      ],
      challenge: [
        "Ter uma ideia",
        "Transformar a minha ideia num produto/serviço viável",
      ],
      customers: [
        "Nenhum",
      ],
      businessStage: [
        "Não tenho nada ainda, apenas a ambição",
      ],
    },
  };

  // Count how many fields match per scenario
  for (const scenario in cenarioRules) {
    for (const key of ["motivation", "challenge", "customers", "businessStage"] as const) {
      if (cenarioRules[scenario as keyof typeof cenarioRules][key].includes(a[key] ?? "")) {
        matches[scenario as keyof typeof matches]++;
      }
    }
  }

  // Pick best match if at least 2 fields match
  const maxMatch = Math.max(...Object.values(matches));
  if (maxMatch >= 2) {
    return (Object.entries(matches).find(([_, v]) => v === maxMatch) as [string, number])[0] as
      | "ONE"
      | "TWO"
      | "THREE";
  }

  return "N/A";
};