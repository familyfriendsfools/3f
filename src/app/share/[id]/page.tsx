import { getCampaignAction } from "@/actions/campaigns";
import { notFound } from "next/navigation";
import { formatCurrency } from "@/lib/formatters";
import { businessStageReverseMap, interestTypeReverseMap, modelTypeReverseMap, paymentFrequencyReverseMap, repaymentUnitReverseMap } from "@/lib/utils/mapping";
import Footer from "@/components/footer";

type Params = Promise<{ id: string }>

export default async function ShareCampaignPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const campaign = await getCampaignAction(id);
  if (!campaign) return notFound();

  const {
    name,
    description,
    stage: businessStage,
    modelType,
    capitalPlan,
    repaymentPeriod,
    repaymentUnit,
    paymentFrequency,
    gracePeriod,
    interestType,
    interestRate,
    targetValue,
    investments,
  } = campaign;

  const investedAmount = investments?.reduce((sum: any, i: { amount: any; }) => sum + i.amount, 0);
  const progress = Math.min((investedAmount / targetValue) * 100, 100);

  return (
    <div className="min-h-screen w-full">
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 text-dark-gray">
        <h2 className="text-dark-orange">
          Ajuda-me a realizar um sonho!
        </h2>

        <p>
          Tive uma ideia que penso ter potencial mas para a poder implementar
          necessito de investimento. Para não seguir os “métodos tradicionais”
          (são demorados, burocráticos e com pouca probabilidade de sucesso)
          recorri à <a href="/" className="font-semibold font-title text-2xl text-dark-orange">3F</a> para me ajudar a partilhar esta iniciativa e criar uma
          plataforma de investimento entre os meus amigos e familiares.
        </p>
        <p>
          É aqui que terás um papel fundamental: lê a descrição da minha ideia, e
          as condições que defini para te retribuir o investimento e se achares
          que faz sentido... ajuda-me!
        </p>

        <section className="bg-light-yellow p-6 rounded-xl space-y-4">
          <h3 className="text-blue-pastel">{name}</h3>

          <p className="italic text-dark-gray">{description}</p>

          <ul className="space-y-1">
            <li><strong>Estágio:</strong> ({businessStageReverseMap[businessStage]})</li>
            <li><strong>Modelo:</strong> {modelTypeReverseMap[modelType as keyof typeof modelTypeReverseMap]}</li>
            <li><strong>Plano de capital:</strong> {capitalPlan}</li>
            <li>
              <strong>Prazo de reembolso:</strong> {repaymentPeriod}{" "}
              {repaymentUnitReverseMap[repaymentUnit as keyof typeof repaymentUnitReverseMap]}
            </li>
            <li>
              <strong>Frequência de pagamento:</strong>{" "}
              {paymentFrequencyReverseMap[paymentFrequency as keyof typeof paymentFrequencyReverseMap]}
            </li>
            <li>
              <strong>Período de carência:</strong> {gracePeriod}{" "}
              {gracePeriod === 1 ? "mês" : "meses"}
            </li>
            <li>
              <strong>Tipo de juro:</strong> {interestTypeReverseMap[interestType as keyof typeof interestTypeReverseMap]}
            </li>
            <li>
              <strong>Taxa de juro:</strong>{" "}
              {interestRate ? `${interestRate.toFixed(2)}%` : "0%"}
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <p className="text-lg font-medium">
            Para conseguir dar os próximos passos necessito angariar{" "}
            <span className="text-dark-orange font-bold">
              {formatCurrency(targetValue)}
            </span>
          </p>

          <div className="mt-3 h-6 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-dark-orange transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-sm text-right mt-1">
            {formatCurrency(investedAmount ?? 0)} angariados
          </div>
        </section>

        <div className="mt-6 text-center">
          <button className="bg-orange-500 text-white px-6 py-2 font-bold rounded-full hover:bg-orange-600 transition">
            Contribuir
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}