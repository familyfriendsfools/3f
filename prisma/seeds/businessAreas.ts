import { PrismaClient } from "../../src/generated/prisma";

export async function seedBusinessAreas(prisma: PrismaClient) {
  const areaMap = {
    "Produção e Indústria": [
      "Produção de bens",
      "Agroindústria",
      "Mineração",
      "Construção civil",
      "Outro",
    ],
    Comércio: [
      "Retalho: loja física ou e-commerce",
      "Canal grossista",
      "Franquias",
      "Outro",
    ],
    Serviços: [
      "Educação",
      "Saúde e bem-estar",
      "Tecnologia (desenvolvimento, suporte, etc.)",
      "Consultoria e formação",
      "Logística e transporte",
      "Legais",
      "Especializados (limpezas, segurança, manutenção, etc.)",
      "Outro",
    ],
    "Turismo e Hospitalidade": [
      "Hotelaria",
      "Restaurantes e alimentação",
      "Agências de viagens",
      "Eventos",
      "Outro",
    ],
    Financeira: [
      "Área da banca ou créditos",
      "Seguradoras",
      "Fintech",
      "Stock market",
      "Outro",
    ],
    "Media e Comunicação": [
      "Publicidade e marketing",
      "Produção audiovisual",
      "Jornalismo",
      "Plataformas digitais",
      "Agências de marketing",
      "Gestão de informação",
      "Comunicação e relações públicas",
      "Outro",
    ],
    Cultura: [
      "Criação e produção cultural (artes visuais, plásticas, artesanato)",
      "Literatura e publicação",
      "Música e audiovisual",
      "Artes cênicas",
      "Património e museus",
      "Indústria criativa (design, electrónica e VR/AR, publicidade cultural e branded content",
      "Outro",
    ],
  };

  for (const [main, subs] of Object.entries(areaMap)) {
    const parent = await prisma.businessArea.create({ data: { name: main } });

    for (const sub of subs) {
      await prisma.businessArea.create({
        data: { name: sub, parentId: parent.id },
      });
    }
  }

  return await prisma.businessArea.findMany({ where: { parentId: null } });
}
