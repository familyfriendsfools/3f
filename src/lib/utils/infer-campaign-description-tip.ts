export type CampaignDescriptionTipInput = {
  area?: string;
  subarea?: string;
  estagio?: string;
};

export function inferCampaignDescriptionTip({ area, subarea, estagio }: CampaignDescriptionTipInput): string | null {
  if (!area || !estagio) return null;

  const is = (val: string, set: string[]) => set.includes(val);

  const statusBC = ["Tenho um conceito/ideia por desenvolver", "Protótipo ou MVP inicial em teste"];
  const statusDF = ["Produto validado com primeiros clientes pagantes", "Preciso de rever modelo de negócio e/ou escalar para não fechar"];

  const normalize = (str: string) => str.toLowerCase();
  const areaMatches = (target: string) => normalize(area).includes(normalize(target));
  const subMatches = (target: string) => subarea && normalize(subarea).includes(normalize(target));


  if (areaMatches("Produção e Indústria")) {
    if (is(estagio, statusBC)) return "Descreve a diferenciação que o teu produto ou método produtivo traz; Enquadra o problema a resolver e mostra como essa ideia vai colmatar a falha, reconfigurar linhas de produção, economizar recursos ou elevar a qualidade do produto";
    if (is(estagio, statusDF)) return "Destaca a conquista do primeiro cliente que pagou e como isso validou tua proposta; Revela o momento crítico ou o insight que obriga a repensar o modelo ou a necessidade de escalar; Explica a urgência de novos recursos para não perder o timing.";
  }

  if (areaMatches("Comércio")) {
    if (subMatches("loja física")) {
      if (is(estagio, statusBC)) return "Cria o cenário do espaço comercial idealizado o mais vividamente possível; Demonstra como este espaço poderá incrementar a vida da comunidade envolvente; adiciona um teaser sobre o produto comercializado.";
      if (is(estagio, statusDF)) return "Conta o primeiro dia com a loja cheia ou elogios espontâneos dos clientes; Explica se houver um momento de estagnação da faturação que exige repensar mix de produtos ou modelo de negócio; Lança o “call to action”: como é que um investimento extra vai atrair um segmento de público inexplorado, por exemplo.";
    }
    if (subMatches("e-commerce")) {
      if (is(estagio, statusBC)) return "Mostra o “por trás das telas” – como é que potenciais clientes se convertem em carrinhos cheios? Como é que esta solução se destaca da concorrência? O que há de especial na experiência para o cliente?";
      if (is(estagio, statusDF)) return "Descreve o momento de celebração da primeira venda; Explica o ponto de viragem que pede ajustes de UX ou do modelo de negócio; Convida à ação: como é que o investimento pode optimizar a plataforma e aumentar conversões.";
    }
    if (subMatches("franquias")) {
      if (is(estagio, statusBC)) return "Apresenta o conceito-piloto: a primeira loja-mãe que provará o modelo replicável; Define o sonho do franqueado: independência, marca forte e suporte contínuo; Explica como a validação regional vai validar o contrato de Masterfranchise em vista.";
      if (is(estagio, statusDF)) return "Narra o sucesso-testemunho: franqueado A já gerou X vendas e é um exemplo; Expõe como a formação inadequada ou falta de fornecedores locais pode travar a expansão; Explica a oportunidade de ouro para novos franqueados.";
    }
  }

  if (
    areaMatches("Serviços") &&
    (subMatches("saúde") || subMatches("educação") || subMatches("consultoria") || subMatches("formação"))
  ) {
    if (is(estagio, statusBC)) return "Retrata a dor do teu público-alvo: o que motiva a busca por saúde, conhecimento ou orientação? Qual é a experiência relevante que demonstra a tua capacidade para levar este projecto adiante? Como será a validação inicial? Por exemplo, sessões grátis, workshops-piloto ou consultas-teste; Conversa na primeira pessoa, apresentando um mentor, terapeuta ou professor como guia na jornada de transformação.";
    if (is(estagio, statusDF)) return "Destaca o depoimento impactante do primeiro cliente transformado; Aponta a barreira atual - falta de escala, licenças ou equipa, por exemplo; Quais seriam os próximos passos? Investimento em tecnologia ou contratação de especialistas para não perder momentum são algumas hipóteses.";
  }

  if (
    areaMatches("Serviços") &&
    (subMatches("tecnologia") || subMatches("logística") || subMatches("transporte"))
  ) {
    if (is(estagio, statusBC)) return "Ilustra o problema identificado - entregas atrasadas, falhas na cadeia ou sistemas pouco flexíveis; Demonstra pontos de diferenciação, como simulações de roteirização, dashboards ou APIs em teste; Demonstra a visão de um sistema fluído e rastreável de ponta a ponta.";
    if (is(estagio, statusDF)) return "Narra a primeira integração bem-sucedida: como é que um cliente real sentiu ganhos de eficiência; Expõe os riscos actuais, como custo elevado de manutenção ou falta de escalabilidade; Como é que um financiamento vai melhorar a infraestrutura e fazer-te ganhar mais uma fatia de mercado?";
  }

  if (areaMatches("Serviços") && subMatches("especializados")) {
    if (is(estagio, statusBC)) return "Pinta o cenário antes da realização do serviço; Explica como é que a tua credibilidade e know-how vai trazer um serviço de excelência aos teus clientes; Descreve um teste-piloto que solucionou um caso-tipo.";
    if (is(estagio, statusDF)) return "Relata casos de sucesso; Descreve a encruzilhada que exige uma mudança da proposta de valor; Explica como uma nova oferta de pacotes ou tecnologia irá diferenciar este projecto num mercado homogêneo.";
  }

  if (areaMatches("Financeira") && subMatches("banca")) {
    if (is(estagio, statusBC)) return "Começa com histórias de quem não conseguia crédito ou se sentia inseguro ao fazer seguros e depois explica o piloto; Destaca a confiança - selos, auditorias e passos iniciais rumo à certificação.";
    if (is(estagio, statusDF)) return "Como é que o primeiro contrato assinado validou confiança no mercado; Identifica o risco de queda ou compliance: número de inadimplentes ou necessidade de ajustes regulatórios; Qual seria o aporte necessário para ampliar o portfólio de produtos e reduzir exposição ao risco?";
  }

  if (areaMatches("Financeira") && (subMatches("fintech") || subMatches("stock"))) {
    if (is(estagio, statusBC)) return "Identifica o problema: altos custos de transação ou falta de transparência em investimentos, por exemplo; Demonstra o mock-up da app ou plataforma de negociação; Conta o momento “ah-ha!” dos fundadores ao perceberem o gap no mercado e como o colmatar.";
    if (is(estagio, statusDF)) return "Celebra a primeira carteira de clientes activos e as rentabilidades entregues; Destaca os potenciais problemas de volatilidade, compliance ou liquidez; Explica como o investimento pode ampliar a base de usuários ou adicionar funcionalidades avançadas.";
  }

  if (areaMatches("Turismo")) {
    if (is(estagio, statusBC)) return "Desperta os sentidos: o aroma do café, a textura dos lençóis, a vista do nascer do sol no hotel; Descreve as iniciativas de penetração no mercado, como uma rota-piloto com influenciadores ou um jantar-teste na casa de família; Identifica um guia, chef ou host que personifica a experiência; comunica como serás um impacto positivo na comunidade local.";
    if (is(estagio, statusDF)) return "Compartilha depoimentos de hóspedes encantados ou reservas esgotadas; Apresenta o desafio enfrentado - sazonalidade, concorrência, custos operacionais ou falta de mão-de-obra qualificada; Demonstra o teu plano: fundos para marketing, reforma de instalações ou integração com plataformas digitais.";
  }

  if (areaMatches("Media") && (subMatches("marketing") || subMatches("jornalismo") || subMatches("comunicação") || subMatches("gestão de informação") || subMatches("relações públicas"))) {
    if (is(estagio, statusBC)) return "Partilha a campanha que nunca viu a luz do dia mas que mostrou potencial viral; Demonstra o trabalho de campo: testes A/B, pilotos regionais ou parcerias com microinfluenciadores; Valoriza a criatividade, usando por exemplo moodboards para exemplificar a direcção pretendida.";
    if (is(estagio, statusDF)) return "Relata o case inicial: aumento de engajamento, menções espontâneas ou cobertura da imprensa; Explica a encruzilhada, como métricas estagnadas, ROI abaixo do esperado ou saturação de canais; Apela ao investimento, mostrando aplicação em novas ferramentas de automação, talentos criativos ou expansão internacional.";
  }

  if (areaMatches("Media") && (subMatches("plataformas") || subMatches("produção audiovisual"))) {
    if (is(estagio, statusBC)) return "Descreve a cena-chave: storyboard de abertura, piloto filmado ou teaser gráfico; Mostra o feedback de um grupo-teste, como risos, arrepios ou aplausos num auditório; Define a missão - contar histórias que transcendam telas e criem um fandom.";
    if (is(estagio, statusDF)) return "Conta o sucesso inicial: número de views, menções em blogs especializados ou prémios locais; Aponta para a dificuldade - estabilidade da plataforma, direitos autorais ou monetização flutuante, por exemplo; Explica como o investimento em tecnologia de streaming, licenciamento ou marketing de conteúdo podem ajudar o negócio.";
  }

  if (areaMatches("Cultura") && subMatches("produção cultural")) {
    if (is(estagio, statusBC)) return "Abre com a faísca criativa: esboço da obra, rascunho de letra ou ensaio performático; Relacciona com comunidade local, como grupos culturais, residências artísticas ou festivais independentes; Detalha as primeiras experiências em salões, pop-ups ou exposições temporárias, como laboratório.";
    if (is(estagio, statusDF)) return "Exibe o reconhecimento já obtido: primeira exposição vendida, crítica favorável ou público cativo; Enuncia o dilema enfrentado, como financiamento raro, escassez de espaços ou dependência de editais; Apresenta as possíveis soluções - edital próprio, patrocínio cultural ou residência internacional.";
  }

  if (areaMatches("Cultura") && subMatches("património")) {
    if (is(estagio, statusBC)) return "Pinta o local: corredores vazios que ecoam histórias não contadas; Descreve o piloto: visita guiada experimental, app de realidade aumentada ou catálogo digital; Identifica a herança em risco - por que é que esse acervo precisa de cuidado urgente?";
    if (is(estagio, statusDF)) return "Descreve a estreia: primeiro tour pago, feedback de pesquisadores ou turistas; Identifica o problema, como os custos de conservação, falta de staff ou digitalização incompleta; Detalha como o financiamento poderá ajudar - fundos para restauro, tecnologia de preservação ou expansão de auditório, por exemplo.";
  }

  if (areaMatches("Cultura") && subMatches("indústria criativa")) {
    if (is(estagio, statusBC)) return "Captura a essência do maker; Detalha a possível rede de colaborações - estúdios independentes, co-working criativo, laboratórios de inovação; Descreve o “proof of concept”: objeto 3D impresso, demo de jogo ou coleção cápsula, são alguns exemplos.";
    if (is(estagio, statusDF)) return "Exibe as primeiras vendas ou licenças; Explica o ponto de inflexão - patentes, escala de produção ou marketing de nicho exigem um novo fôlego; Detalha como o financiamento poderá ajudar: edital de fomento, aceleração ou parcerias internacionais para ganhar escala, por exemplo.";
  }

  return null;
}