"use client";
import { Download } from "lucide-react";
import * as React from "react";

type Campaign = typeof import("../_data/d_data").campaignData;

function euro(n: number) {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}
const sum = (arr: any[], sel: (x: any) => number) =>
  arr.reduce((acc, it) => acc + sel(it), 0);

function firstNameSlug(fullName: string) {
  const first = (fullName.split(" ")[0] || "").normalize("NFD").replace(/\p{Diacritic}/gu, "");
  return first.toLowerCase();
}
function contractHref(investorName: string) {
  const slug = firstNameSlug(investorName);
  return `/demo/d_agreement-${slug}.pdf`;
}

export default function InvestmentsSummary({ campaign }: { campaign: Campaign }) {
  const goal = campaign.targetValue;
  const raised = sum(campaign.investments, (i) => i.amount);
  const pct = Math.min(100, Math.round((raised / goal) * 100));

  // Donut chart math
  const size = 140;          // SVG viewport
  const stroke = 18;         // ring thickness
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;

  return (
    <section className="bg-gray-200 py-4 lg:px-20 px-6 md:py-8">
      <div className="grid items-start gap-6 md:grid-cols-auto-auto">
        <div className="max-w-2xl">
          <h2 className="mb-6 text-2xl font-semibold">
            You have already raised <span className="text-4xl font-semibold text-dark-orange">{pct}%</span> of your goal
          </h2>

          <div className="space-y-6">
            <h3 className="font-body text-xl font-semibold">Investors:</h3>

            <div className="space-y-5">
              {campaign.investments.map((inv) => {
                const widthPct = Math.min(100, (inv.amount / goal) * 100);
                return (
                  <div key={inv.id} className="grid grid-cols-[160px,1fr,80px] items-center gap-4">
                    <div className="text-sm md:text-base">{inv.user.name}</div>
                    <div className="relative h-4 rounded-full bg-amber-200">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-amber-600"
                        style={{ width: `${widthPct}%` }}
                      />
                    </div>
                    <div className="text-right text-sm md:text-base">{euro(inv.amount)}</div>
                  </div>
                );
              })}

              <div className="grid grid-cols-[160px,1fr,80px] items-center gap-4">
                <div className="text-sm md:text-base">Target</div>
                <div className="relative h-4 rounded-full bg-slate-500/30">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-blue-pastel"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="text-right text-sm md:text-base">{euro(goal)}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center md:justify-start">
          <div className="flex flex-col items-center">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mb-3">
              <circle cx={size / 2} cy={size / 2} r={r} fill="#FBF9F6" />
              <circle cx={size / 2} cy={size / 2} r={r} fill="transparent" stroke="#787461" strokeWidth={stroke} />
              <circle
                cx={size / 2} cy={size / 2} r={r} fill="transparent"
                stroke="#D08718" strokeWidth={stroke} strokeLinecap="round"
                strokeDasharray={`${dash} ${c - dash}`}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
              />
            </svg>

            <div className="mb-4 flex items-center gap-2 text-sm">
              <span className="inline-block h-3 w-3 rounded-sm bg-amber-600" />
              <span>Investments</span>
            </div>

            <div className="w-full mt-10 rounded-lg bg-white p-3 text-sm shadow-sm">
              <div className="mb-2 font-medium">Contracts</div>
              <ul className="space-y-2">
                {campaign.investments.map((inv) => (
                  <li key={inv.id} className="flex items-center justify-between gap-3">
                    <span className="truncate">{inv.user.name}</span>
                    <a
                      href={contractHref(inv.user.name)}
                      download
                      className="shrink-0 rounded-md border px-2 py-1 text-xs hover:bg-gray-50"
                    >
                      Download
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  campaign.investments.forEach((inv, idx) => {
                    const a = document.createElement("a");
                    a.href = contractHref(inv.user.name);
                    a.download = "";
                    a.rel = "noopener";
                    a.style.display = "none";
                    document.body.appendChild(a);
                    setTimeout(() => {
                      a.click();
                      a.remove();
                    }, idx * 200); // stagger a bit
                  });
                }}
                className="cursor-pointer flex items-center justify-center gap-2 mt-3 w-full rounded-md bg-amber-600 py-1.5 text-center text-white hover:bg-amber-700"
              >
                <Download size={18} />
                Download all
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}