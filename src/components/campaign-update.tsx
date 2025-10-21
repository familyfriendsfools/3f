"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

import { Campaign, ModelType, RepaymentUnit, PaymentFrequency, InterestType, BusinessType, BusinessSubarea, BusinessArea, BusinessStage, CampaignStatus } from "@prisma/client";

import { updateCampaignAction } from "@/actions/campaigns";
import { useRouter } from "next/navigation";
import { businessAreaReverseMap, businessStageReverseMap, businessSubareaReverseMap, businessTypeReverseMap, interestTypeReverseMap, modelTypeReverseMap, paymentFrequencyReverseMap, repaymentUnitReverseMap } from "@/lib/utils/mapping";
import Link from "next/link";

export default function UpdateCampaignForm({ campaign }: { campaign: Campaign }) {
  const [form, setForm] = useState({
    name: campaign.name ?? "",
    businessType: campaign.businessType ?? "",
    businessArea: campaign.businessArea ?? "",
    businessSubarea: campaign.businessSubarea ?? "",
    businessStage: campaign.stage ?? "",
    description: campaign.description ?? "",
    targetValue: campaign.targetValue ?? 0,
    modelType: campaign.modelType ?? "",
    capitalPlan: campaign.capitalPlan ?? "",
    pitchLinks: campaign.pitchLinks.join(", "),
    mediaUrls: campaign.mediaUrls.join(", "),
    pitchDeckFiles: campaign.pitchDeckFiles.join(", "),
    repaymentPeriod: campaign.repaymentPeriod,
    repaymentUnit: campaign.repaymentUnit,
    paymentFrequency: campaign.paymentFrequency,
    gracePeriod: campaign.gracePeriod ?? 0,
    interestType: campaign.interestType,
    interestRate: campaign.interestRate ?? 0,
    euriborIndexed: campaign.euriborIndexed ?? false,
    status: campaign.status,
  });

  const [status, setStatus] = useState(campaign.status);
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await updateCampaignAction(campaign.id, {
      name: form.name,
      description: form.description,
      targetValue: Number(form.targetValue),
      modelType: form.modelType as ModelType,
      capitalPlan: form.capitalPlan,
      pitchLinks: form.pitchLinks.split(",").map(link => link.trim()),
      mediaUrls: form.mediaUrls.split(",").map(url => url.trim()),
      pitchDeckFiles: form.pitchDeckFiles.split(",").map(file => file.trim()),
      repaymentPeriod: Number(form.repaymentPeriod),
      repaymentUnit: form.repaymentUnit as RepaymentUnit,
      paymentFrequency: form.paymentFrequency as PaymentFrequency,
      gracePeriod: Number(form.gracePeriod),
      interestType: form.interestType as InterestType,
      interestRate: Number(form.interestRate),
      euriborIndexed: form.euriborIndexed,
      status: "PUBLISHED" as CampaignStatus,
      stage: form.businessStage as BusinessStage,
      businessType: form.businessType as BusinessType,
      businessArea: form.businessArea as BusinessArea,
      businessSubarea: form.businessSubarea as BusinessSubarea,
    });
    setStatus("PUBLISHED");
  };

  return (
    <div className="px-6 lg:px-20 xl:px-0">
      <h2 className="my-12 text-center text-dark-orange">{campaign.status === "DRAFT" ? "Completa os detalhes da tua iniciativa" : "Edita a tua iniciativa"}</h2>
      {status === "PUBLISHED" && (
        <div className="mt-6 flex flex-col lg:flex-row justify-center items-center gap-2">
          <p className="font-semibold text-lg mb-2">
            A tua iniciativa foi publicada com sucesso!{" "}
            <Link href={`/share/${campaign.id}`} className="text-dark-orange underline">
              Partilha-a com os teus familiares e amigos!
            </Link>
          </p>

          <button
            onClick={async () => {
              await navigator.clipboard.writeText(`${window.location.origin}/share/${campaign.id}`);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="cursor-pointer inline-flex items-center gap-2 text-sm text-blue-pastel hover:text-blue-pastel/50 transition"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Link copiado!" : "Copiar link"}
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full grid gap-6 py-4 xl:w-2/3 mx-auto">
        <div className="grid xl:grid-cols-3 gap-6">
          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Nome da Iniciativa</span>
            <input required name="name" type="text" value={form.name} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base text-black font-normal" />
          </label>
          <label className="flex flex-col gap-2 items-center">
            <span className="text-center font-semibold text-dark-orange text-lg">Descrição</span>
            <input required name="description" type="textarea" value={form.description} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base text-black font-normal" />
          </label>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-dark-orange text-lg">Estágio da Iniciativa</p>
            <select
              required
              name="businessStage"
              value={form.businessStage}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder"
            >
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Seleciona uma opção</option>
              {Object.values(BusinessStage).map((opt: BusinessStage) => (
                <option key={opt} value={opt}>{businessStageReverseMap[opt as keyof typeof businessStageReverseMap]}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-dark-orange text-lg">Modelo de Negócio</p>
            <select
              required
              name="modelType"
              value={form.modelType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder"
            >
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Seleciona uma opção</option>
              {Object.values(ModelType).map((opt: ModelType) => (
                <option key={opt} value={opt}>{modelTypeReverseMap[opt as keyof typeof modelTypeReverseMap]}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-dark-orange text-lg">Área</p>
            <select
              required
              name="businessArea"
              value={form.businessArea}
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder"
            >
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Seleciona uma área</option>
              {Object.keys(BusinessArea).map((area) => (
                <option key={area} value={area}>{businessAreaReverseMap[area as keyof typeof businessAreaReverseMap]}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-dark-orange text-lg">Sub-área</p>
            <select
              required
              name="businessSubarea"
              value={form.businessSubarea}
              onChange={(e) => handleChange(e)}
              className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder"
            >
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Seleciona uma sub-área</option>
              {Object.values(BusinessSubarea).map((sub) => (
                <option key={sub} value={sub}>{businessSubareaReverseMap[sub as keyof typeof businessSubareaReverseMap]}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Valor alvo</span>
            <input required name="targetValue" type="number" value={form.targetValue} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base" />
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Plano de Capital</span>
            <input required name="capitalPlan" value={form.capitalPlan} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base" />
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Período de Carência</span>
            <input required name="gracePeriod" type="number" value={form.gracePeriod} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base" />
          </label>
        </div>

        <div className="grid xl:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Período de Reembolso</span>
            <input required name="repaymentPeriod" type="number" value={form.repaymentPeriod} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base" />
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Unidade de Reembolso</span>
            <select required name="repaymentUnit" value={form.repaymentUnit} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder">
              {Object.values(RepaymentUnit).map((opt: RepaymentUnit) => (
                <option key={opt} value={opt}>{repaymentUnitReverseMap[opt as keyof typeof repaymentUnitReverseMap]}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Frequência de Pagamento</span>
            <select required name="paymentFrequency" value={form.paymentFrequency} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder">
              {Object.values(PaymentFrequency).map((opt: PaymentFrequency) => (
                <option key={opt} value={opt}>{paymentFrequencyReverseMap[opt as keyof typeof paymentFrequencyReverseMap]}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Tipo de Juros</span>
            <select required name="interestType" value={form.interestType} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder">
              {Object.values(InterestType).map((opt: InterestType) => (
                <option key={opt} value={opt}>{interestTypeReverseMap[opt as keyof typeof interestTypeReverseMap]}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Taxa de Juros</span>
            <input required type="number" name="interestRate" value={form.interestRate} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base" />
          </label>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="euriborIndexed" checked={form.euriborIndexed} onChange={handleChange} className="w-4 h-4 rounded-2xl border-2 border-dark-orange" />
            <label>Indexado ao Euribor?</label>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Links para Pitch</span>
            <input disabled name="pitchLinks" value={form.pitchLinks} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base disabled:opacity-50" />
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Links para Media</span>
            <input disabled name="mediaUrls" value={form.mediaUrls} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base disabled:opacity-50" />
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Ficheiros Pitch Deck</span>
            <input disabled name="pitchDeckFiles" value={form.pitchDeckFiles} onChange={handleChange} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base disabled:opacity-50" />
          </label>
        </div>

        <button type="submit" className="cursor-pointer bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200 w-full mx-auto">
          Guardar
        </button>
      </form >
    </div>
  );
}