"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

import { campaignData } from "@/app/demo/_data/d_data";
import Link from "next/link";
import { campaignStatusAtom } from "../_atoms/d_campaign-status";
import { useAtom } from "jotai";
import InvestmentsSummary from "./d_investments-summary";
import { HotkeyBanner } from "./d_hotkey-banner";

export default function UpdateCampaignForm() {

  const [campaignStatus, setCampaignStatus] = useAtom(campaignStatusAtom);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCampaignStatus({ status: "PUBLISHED" });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="px-6 lg:px-20 xl:px-0">
      <h2 className="my-12 text-center text-dark-orange">{campaignStatus.status === "DRAFT" ? "Complete your initiative data" : "Edit your initiative"}</h2>
      {campaignStatus.status === "PUBLISHED" && (
        <div className="mt-6 flex flex-col lg:flex-row justify-center items-center gap-2">
          <p className="font-semibold text-lg mb-2">
            Your initiative has been published successfully!{" "}
            <Link href={`/demo/d_share/abcde`} className="text-dark-orange underline">
              Share it with your family and friends!
            </Link>
          </p>

          <button
            onClick={async () => {
              await navigator.clipboard.writeText(`${window.location.origin}/demo/d_share/abcde`);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className="cursor-pointer inline-flex items-center gap-2 text-sm text-blue-pastel hover:text-blue-pastel/50 transition"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Link copied!" : "Copy link"}
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-full grid gap-6 py-4 xl:w-2/3 mx-auto">
        <div className="grid xl:grid-cols-3 gap-6">
          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Initiative name</span>
            <input name="name" type="text" defaultValue={campaignData.name} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base text-black font-normal" />
          </label>
          <label className="flex flex-col gap-2 items-center">
            <span className="text-center font-semibold text-dark-orange text-lg">Description</span>
            <input name="description" type="textarea" defaultValue={campaignData.description} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base text-black font-normal" />
          </label>
          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-dark-orange text-lg">Initiative stage</p>
            <select
              name="businessStage"
              defaultValue={campaignData.businessStage}
              className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder"
            >
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Select an option</option>
              <option value="Idea">Idea</option>
              <option value="Prototype">Prototype</option>
              <option value="MVP">MVP</option>
              <option value="Product">Product</option>
              <option value="Growth">Growth</option>
              <option value="Scale">Scale</option>
            </select>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-dark-orange text-lg">Business model</p>
            <select
              name="modelType"
              defaultValue={campaignData.modelType}
              className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder"
            >
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Select an option</option>
              <option value="B2B">B2B</option>
              <option value="B2C">B2C</option>
              <option value="B2G">B2G</option>
              <option value="C2C">C2C</option>
              <option value="C2B">C2B</option>
              <option value="B2B2C">B2B2C</option>
              <option value="G2C">G2C</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-dark-orange text-lg">Business area</p>
            <select
              name="businessArea"
              defaultValue={campaignData.businessArea}
              className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder"
            >
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Select an option</option>
              <option value="Industry">Industry</option>
              <option value="Commerce">Commerce</option>
              <option value="Services">Services</option>
              <option value="Finance">Finance</option>
              <option value="Tourism">Tourism</option>
              <option value="Media">Media</option>
              <option value="Culture">Culture</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <p className="font-semibold text-dark-orange text-lg">Business subarea</p>
            <select
              name="businessSubarea"
              defaultValue={campaignData.businessSubarea}
              className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder"
            >
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Select an option</option>
              <option value="Food and beverage">Food and beverage</option>
              <option value="Goods Production">Goods Production</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Mining">Mining</option>
              <option value="Construction">Construction</option>
              <option value="Other Industry">Other Industry</option>
            </select>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-6">
          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Target value</span>
            <input name="targetValue" type="number" defaultValue={campaignData.targetValue} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base" />
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Capital plan</span>
            <input name="capitalPlan" defaultValue={campaignData.capitalPlan} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base" />
          </label>
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Grace period</span>
            <input name="gracePeriod" type="number" defaultValue={campaignData.gracePeriod} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base" />
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Repayment period</span>
            <input name="repaymentPeriod" type="number" defaultValue={campaignData.repaymentPeriod} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base" />
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Repayment unit</span>
            <select name="repaymentUnit" defaultValue={campaignData.repaymentUnit} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder">
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Select an option</option>
              <option value="Months">Months</option>
              <option value="Years">Years</option>
            </select>
          </label>
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Payment frequency</span>
            <select name="paymentFrequency" defaultValue={campaignData.paymentFrequency} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder">
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Select an option</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Interest type</span>
            <select name="interestType" defaultValue={campaignData.interestType} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base select-placeholder">
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Select an option</option>
              <option value="Fixed">Fixed</option>
              <option value="Floating">Floating</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-dark-orange text-lg">Interest rate</span>
            <input type="number" name="interestRate" defaultValue={campaignData.interestRate} className="w-full px-4 py-2 rounded-2xl border-2 border-dark-orange text-center text-base" />
          </label>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="euriborIndexed" defaultValue={campaignData.euriborIndexed ? "true" : "false"} className="w-4 h-4 rounded-2xl border-2 border-dark-orange" />
            <label>Indexed to Euribor?</label>
          </div>
        </div>

        <button type="submit" className="cursor-pointer w-fit  bg-dark-orange text-white font-semibold px-20 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200 mx-auto">
          Save
        </button>
      </form >
      {campaignStatus.status === "PUBLISHED" && (
        <div id="investments" className="my-20 grid gap-2">
          <h3 className="text-center text-dark-orange font-semibold mb-6">Follow the investments of your initiative</h3>
          <InvestmentsSummary campaign={campaignData} />
        </div>
      )}
      <HotkeyBanner text="So easy!" />
    </div>
  );
}