"use client";
import { formatCurrency } from "@/lib/formatters";
import { campaignData } from "../../_data/d_data";
import { HotkeyBanner } from "../../_components/d_hotkey-banner";
import { useState } from "react";
import { Modal } from "../../_components/d_modal";
import InvestForm from "../../_components/d_invest-form";
import Navbar from "../../_components/d_navbar";
import { HotkeyRedirect } from "../../_components/d_hotkey-redirect";

export default function ShareCampaignPage() {
  const {
    name,
    description,
    businessStage,
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
  } = campaignData;

  const investedAmount = investments?.reduce((sum: any, i: { amount: any; }) => sum + i.amount, 0);
  const progress = Math.min((investedAmount / targetValue) * 100, 100);

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      <Navbar showButtons={false} />
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6 text-dark-gray">
        <h2 className="text-dark-orange">
          Help me realize a dream!
        </h2>

        <p>
          I had an idea that I think has potential but to implement it
          I need investment. To avoid the “traditional methods”
          (they are slow, bureaucratic and with low probability of success)
          I turned to <a href="/" className="font-semibold font-title text-2xl text-dark-orange">3F</a> to help me share this initiative and create a
          investment platform between my friends and family.
        </p>
        <p>
          Here you will play a fundamental role: read the description of my idea, and
          the conditions I defined to repay the investment and if you think it makes sense... help me!
        </p>

        <section className="bg-light-yellow p-6 rounded-xl space-y-4">
          <h3 className="text-blue-pastel">{name}</h3>

          <p className="italic text-dark-gray">{description}</p>

          <ul className="space-y-1">
            <li><strong>Stage:</strong> {businessStage}</li>
            <li><strong>Model:</strong> {modelType}</li>
            <li><strong>Capital plan:</strong> {capitalPlan}</li>
            <li>
              <strong>Repayment period:</strong> {repaymentPeriod}{" "}{repaymentUnit}
            </li>
            <li>
              <strong>Payment frequency:</strong>{" "}{paymentFrequency}
            </li>
            <li>
              <strong>Grace period:</strong> {gracePeriod}{" "}{gracePeriod === 1 ? "month" : "months"}
            </li>
            <li>
              <strong>Interest type:</strong> {interestType}
            </li>
            <li>
              <strong>Interest rate:</strong>{" "}
              {interestRate ? `${interestRate.toFixed(2)}%` : "0%"}
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <p className="text-lg font-medium">
            To achieve the next steps I need to raise{" "}
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
            {formatCurrency(investedAmount ?? 0)} raised
          </div>
        </section>

        <div className="mt-6 text-center">
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-orange-500 text-white px-6 py-2 font-bold rounded-full hover:bg-orange-600 transition">
            Invest
          </button>
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <InvestForm />
        </Modal>
      </div>
      <HotkeyBanner text="I want to invest!" />
      <HotkeyRedirect hotkey="j" to="/demo" />
    </div>
  );
}