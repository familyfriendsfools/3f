import { BusinessArea, BusinessSubarea } from "@/generated/prisma";

export const businessTypeMap: Record<string, "PRODUCT" | "SERVICE" | "SUBSCRIPTION" | "PLATFORM" | "LICENSING" | "RENTAL" | "SHARING" | "ADVERTISING" | "IMPACT"> = {
  "Produto": "PRODUCT",
  "Serviço": "SERVICE",
  "Subscrição, clube, comunidade, membership": "SUBSCRIPTION",
  "Plataforma, marketplace": "PLATFORM",
  "Licenciamento, franquia": "LICENSING",
  "Aluguer, leasing, rental": "RENTAL",
  "Economia colaborativa, compartilhada": "SHARING",
  "Publicidade, marketing de recomendação": "ADVERTISING",
  "Economia circular, impacto social": "IMPACT",
};

export const businessStageMap: Record<string, "IDEA" | "CONCEPT" | "MVP" | "VALIDATED" | "GROWTH" | "PIVOTING"> = {
  "Não tenho nada ainda, apenas a ambição": "IDEA",
  "Tenho um conceito/ideia por desenvolver": "CONCEPT",
  "Protótipo ou MVP inicial em teste": "MVP",
  "Produto validado com primeiros clientes pagantes": "VALIDATED",
  "Operação consolidada, em fase de crescimento": "GROWTH",
  "Preciso de rever modelo de negócio e/ou escalar para não fechar": "PIVOTING",
};

export const businessAreaMap: Record<string, "INDUSTRY" | "COMMERCE" | "SERVICES" | "FINANCE" | "TOURISM" | "MEDIA" | "CULTURE"> = {
  "Produção e Indústria": "INDUSTRY",
  "Comércio": "COMMERCE",
  "Serviços": "SERVICES",
  "Financeira": "FINANCE",
  "Turismo e Hospitalidade": "TOURISM",
  "Media e Comunicação": "MEDIA",
  "Cultura": "CULTURE",
};

export const businessSubareaMap: Record<
  keyof typeof BusinessArea,
  Record<string, keyof typeof BusinessSubarea>
> = {
  INDUSTRY: {
    "Produção de bens": "GOODS_PRODUCTION",
    "Agroindústria": "AGRIBUSINESS",
    "Mineração": "MINING",
    "Construção Civil": "CONSTRUCTION",
    "Outro": "OTHER_INDUSTRY",
  },
  COMMERCE: {
    "Retalho: loja física ou e-commerce": "RETAIL",
    "Canal grossista": "WHOLESALE",
    "Franquias": "FRANCHISE",
    "Outro": "OTHER_COMMERCE",
  },
  SERVICES: {
    "Saúde e Bem-Estar": "HEALTH_WELLNESS",
    "Educação": "EDUCATION",
    "Consultoria e Formação": "CONSULTING",
    "Tecnologia (desenvolvimento, suporte, etc)": "TECHNOLOGY",
    "Logística e Transporte": "LOGISTICS",
    "Legais": "LEGAL",
    "Especializados (limpezas, segurança, manutenção, etc)": "SPECIALIZED",
    "Outros": "OTHER_SERVICES",
  },
  FINANCE: {
    "Área da banca ou créditos": "BANKING",
    "Seguradoras": "INSURANCE",
    "Fintech": "FINTECH",
    "Stock market": "STOCK_MARKET",
    "Outros": "OTHER_FINANCE",
  },
  TOURISM: {
    "Hotelaria": "HOSPITALITY",
    "Restaurantes e alimentação": "FOOD",
    "agências de viagem": "TRAVEL_AGENCY",
    "Eventos": "EVENTS",
    "Outros": "OTHER_TOURISM",
  },
  MEDIA: {
    "Publicidade e marketing": "ADVERTISING",
    "Produção audiovisual": "AUDIOVISUAL",
    "Jornalismo": "JOURNALISM",
    "Plataformas digitais": "DIGITAL_PLATFORMS",
    "Gestão de informação": "INFO_MANAGEMENT",
    "Comunicação e Relações públicas": "PR",
    "Outros": "OTHER_MEDIA",
  },
  CULTURE: {
    "Criação e produção cultural (artes visuais, plásticas, artesanato)":
      "ART_PRODUCTION",
    "Literatura e publicação": "LITERATURE",
    "Música e audiovisual": "MUSIC_AUDIO",
    "Artes cênicas": "PERFORMING_ARTS",
    "Património e museus": "HERITAGE",
    "Indústria criativa (design, eletrónica e VR/AR, publicidade cultural e branded content)":
      "CREATIVE_INDUSTRY",
    "Outro": "OTHER_CULTURE",
  },
};

export const modelTypeMap: Record<string, "B2B" | "B2C" | "B2G" | "C2C" | "C2B" | "B2B2C" | "G2C"> = {
  "Business to Business": "B2B",
  "Business to Consumer": "B2C",
  "Business to Government": "B2G",
  "Consumer to Consumer": "C2C",
  "Consumer to Business": "C2B",
  "Business to Business to Consumer": "B2B2C",
  "Government to Consumer": "G2C",
};

export const repaymentUnitMap: Record<string, "WEEKS" | "MONTHS" | "YEARS"> = {
  "Semanas": "WEEKS",
  "Meses": "MONTHS",
  "Anos": "YEARS",
};

export const paymentFrequencyMap: Record<string, "WEEKLY" | "MONTHLY" | "BIMONTHLY" | "QUARTERLY" | "FOURMONTHLY" | "SEMIANNUAL" | "ANNUAL" | "NONE"> = {
  "Semanal": "WEEKLY",
  "Mensal": "MONTHLY",
  "Bimensal": "BIMONTHLY",
  "Trimestral": "QUARTERLY",
  "Quatrimestral": "FOURMONTHLY",
  "Semestral": "SEMIANNUAL",
  "Anual": "ANNUAL",
  "Nenhum": "NONE",
};

export const interestTypeMap: Record<string, "FIXED" | "VARIABLE" | "MIXED" | "NONE"> = {
  "Fixo": "FIXED",
  "Variável": "VARIABLE",
  "Mixto": "MIXED",
  "Nenhum": "NONE",
};

export const interestTypeReverseMap = Object.fromEntries(
  Object.entries(interestTypeMap).map(([label, enumVal]) => [enumVal, label])
);

export const paymentFrequencyReverseMap = Object.fromEntries(
  Object.entries(paymentFrequencyMap).map(([label, enumVal]) => [enumVal, label])
);

export const businessTypeReverseMap = Object.fromEntries(
  Object.entries(businessTypeMap).map(([label, enumVal]) => [enumVal, label])
);

export const businessStageReverseMap = Object.fromEntries(
  Object.entries(businessStageMap).map(([label, enumVal]) => [enumVal, label])
);

export const businessAreaReverseMap = Object.fromEntries(
  Object.entries(businessAreaMap).map(([label, enumVal]) => [enumVal, label])
);

export const businessSubareaReverseMap: Record<BusinessSubarea, string> = Object.fromEntries(
  Object.entries(businessSubareaMap)
    .flatMap(([, subMap]) =>
      Object.entries(subMap).map(([label, enumVal]) => [enumVal, label])
    )
) as Record<BusinessSubarea, string>;

export const modelTypeReverseMap = Object.fromEntries(
  Object.entries(modelTypeMap).map(([label, enumVal]) => [enumVal, label])
);

export const repaymentUnitReverseMap = Object.fromEntries(
  Object.entries(repaymentUnitMap).map(([label, enumVal]) => [enumVal, label])
);