"use client";
import type { BusinessArea, BusinessStage, BusinessSubarea, BusinessType, InterestType, PaymentFrequency, ProductPlan, RepaymentUnit } from "@/generated/prisma";

import { useState } from "react";
import { useAtom } from "jotai";
import { createCampaignAtom } from "@/state/index";
import { createUserAction } from "@/actions/users";
import { createCampaignAction } from "@/actions/campaigns";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function SignupForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    surnames: "",
    productPlan: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [campaign] = useAtom(createCampaignAtom); // prefill email
  const router = useRouter();

  // Prefill email on mount
  useState(() => {
    setForm((prev) => ({
      ...prev,
      email: campaign.email || "",
    }));
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (form.password !== form.confirmPassword) {
      setError("As passwords não coincidem.");
      setLoading(false);
      return;
    }

    try {
      // 1. Create user
      const userId = await createUserAction({
        email: form.email,
        name: form.name,
        surnames: form.surnames,
        password: form.password,
        productPlan: form.productPlan as ProductPlan,
        emailVerified: false,
      });

      // 2. Auto-login
      await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      // 3. Create campaign
      const campaignId = await createCampaignAction({
        userId: userId,
        status: "DRAFT",
        stage: campaign?.businessStage as BusinessStage || "IDEA",
        name: campaign?.name || "",
        email: campaign?.email || "",
        description: campaign?.description || "",
        businessType: campaign?.businessType as BusinessType,
        businessArea: campaign?.businessArea as BusinessArea,
        businessSubarea: campaign?.businessSubarea as BusinessSubarea,
        targetValue: Number(campaign?.targetValue) || 0,
        repaymentPeriod: campaign?.repaymentPeriod || 0,
        repaymentUnit: campaign?.repaymentUnit as RepaymentUnit || "MONTHS",
        paymentFrequency: campaign?.paymentFrequency as PaymentFrequency || "MONTHLY",
        gracePeriod: campaign?.gracePeriod || 0,
        interestType: campaign?.interestType as InterestType || "FIXED",
        interestRate: campaign?.interestRate || 0,
        euriborIndexed: campaign?.euriborIndexed || false,
      });
      // 4. Redirect to campaign creation
      router.push(`/campaigns/${campaignId}`);
    } catch (err) {
      console.error(err);
      setError("Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
      <h4 className="font-semibold mb-4 text-dark-orange">Cria conta para continuar</h4>

      <div>
        <label className="block mb-1">Nome</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Apelido(s)</label>
        <input
          name="surnames"
          value={form.surnames}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Confirmar password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Plano <span className="text-sm text-gray-500">(Sabe mais sobre os planos <Link href="/#plans" target="_blank" className="underline text-light-orange">aqui</Link>)</span></label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="productPlan"
              value="BASIC"
              checked={form.productPlan === "BASIC"}
              onChange={handleChange}
              required
            />
            <span className="ml-2">Básico <span className="text-sm text-gray-500">(sem subscrição)</span></span>
          </label>
          <label>
            <input
              type="radio"
              name="productPlan"
              value="PREMIUM"
              checked={form.productPlan === "PREMIUM"}
              onChange={handleChange}
              required
            />
            <span className="ml-2">Premium <span className="text-sm text-gray-500">(0,99 €/ano)</span></span>
          </label>
        </div>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "A criar conta..." : "Criar conta"}
      </button>
    </form>
  );
}