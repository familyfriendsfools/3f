export const initialQuestionnaireQuestions = [
  {
    title: "Qual a tua maior motivação para empreender?",
    type: "radio",
    key: "motivation",
    options: [
      "Liberdade financeira imediata",
      "Realizar um sonho pessoal",
      "Impactar positivamente a sociedade",
      "Crescer e escalar rapidamente",
    ],
  },
  {
    title: "Principal desafio actual?",
    type: "radio",
    key: "challenge",
    options: [
      "Ter uma ideia",
      "Transformar a minha ideia num produto/serviço viável",
      "Ter financiamento para começar a operar",
      "Encontrar e reter primeiros clientes",
      "Melhorar/organizar processos internos e/ou equipa",
      "Escalar para novos mercados rapidamente",
    ],
  },
  {
    title: "Quantos clientes pagantes já tens?",
    type: "radio",
    key: "customers",
    options: ["Nenhum", "Até 10", "De 10 a 100", "Centenas ou milhares"],
  },
  {
    title: "Em que estágio está a tua solução?",
    type: "radio",
    key: "businessStage",
    options: [
      "Não tenho nada ainda, apenas a ambição",
      "Tenho um conceito/ideia por desenvolver",
      "Protótipo ou MVP inicial em teste",
      "Produto validado com primeiros clientes pagantes",
      "Operação consolidada, em fase de crescimento",
      "Preciso de rever modelo de negócio e/ou escalar para não fechar",
    ],
  },
  {
    title: "Email",
    type: "email",
    key: "email",
    placeholder: "teuemail@exemplo.com",
  },
];
