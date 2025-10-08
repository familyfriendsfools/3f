export const createCampaignQuestions = [
  {
    key: "intro",
    type: "group",
    fields: [
      { key: "email", type: "email", required: true, title: "Email", placeholder: "exemplo@email.com" },
      { key: "name", type: "text", required: true, title: "Nome da iniciativa", description: "O nome da iniciativa que queres criar", placeholder: "Exemplo: 'Minha Empresa'" },
      { key: "businessType", type: "select", required: true, options: ["Produto", "Serviço", "Subscrição, clube, comunidade, membership", "Plataforma, marketplace", "Licenciamento, franquia", "Aluguer, leasing, rental", "Economia colaborativa, compartilhada", "Publicidade, marketing de recomendação", "Economia circular, impacto social"], title: "Tipo de negócio", description: "Escolhe a opção que melhor caracteriza o teu projecto", placeholder: "Seleciona uma opção" },
    ],
    required: true,
    hasTip: false,
  },
  {
    key: "businessArea",
    type: "cascading",
    title: "Área de negócio",
    description: "Qual é a área em que pretendes desenvolver o teu projecto?",
    fields: ["businessArea", "businessSubarea"],
    required: true,
    hasTip: false,
  },
  {
    key: "businessStage",
    title: "Estágio da iniciativa",
    description: "Qual o estágio do teu projecto?",
    type: "radio",
    required: false,
    options: ["Não tenho nada ainda, apenas a ambição", "Tenho um conceito/ideia por desenvolver", "Protótipo ou MVP inicial em teste", "Produto validado com primeiros clientes pagantes", "Operação consolidada, em fase de crescimento", "Preciso de rever modelo de negócio e/ou escalar para não fechar"],
    hasTip: false,
  },
  {
    key: "description",
    type: "textarea",
    title: "Descrição",
    description: "Conta a tua história e partilha o que achares relevante para contextualizar os teus amigos e família no teu projecto",
    maxLength: 1000,
    required: false,
    hasTip: true,
    tipName: "descriptionTip"
  },
  {
    key: "targetValue",
    type: "number",
    title: "Valor alvo",
    placeholder: "Coloca um valor numérico (€)",
    description: "Qual o valor de investimento que precisas de angariar?",
    required: true,
    hasTip: true,
    tipName: "fundingTip"
  },
];