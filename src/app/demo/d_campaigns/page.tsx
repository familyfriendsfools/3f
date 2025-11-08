"use client";
import { formatCurrency } from "@/lib/formatters";
import { campaignData } from "../_data/d_data";
import { HotkeyBanner } from "../_components/d_hotkey-banner";
import { useState } from "react";
import { Modal } from "../_components/d_modal";
import InvestForm from "../_components/d_invest-form";
import Navbar from "../_components/d_navbar";
import Link from "next/link";

export default function CampaignsPage() {
  const {
    name,
    description,
  } = campaignData;

  return (
    <div className="min-h-screen w-full">
      <Navbar showButtons={true} />
      <div className="py-4 lg:px-20 px-6">
        <h2 className="px-4 py-10 font-semibold text-dark-orange">
          My campaigns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-light-yellow p-6 rounded-xl space-y-4 cursor-pointer hover:border-2 hover:border-dark-orange hover:bg-white hover:shadow-md transition-all duration-300">
            <Link href="/demo/d_campaigns/abcde#investments">
              <h3 className="text-blue-pastel font-semibold">
                {name}
              </h3>
              <p className="text-dark-gray text-sm mt-2 italic">
                {description}
              </p>
            </Link>
          </div>
          <div className="bg-light-yellow p-6 rounded-xl space-y-4 cursor-pointer hover:border-2 hover:border-dark-orange hover:bg-white hover:shadow-md transition-all duration-300">
            <Link href="/demo/d_campaigns/fghij">
              <h3 className="text-blue-pastel font-semibold">
                Sweet Alchemy Catering
              </h3>
              <p className="text-dark-gray text-sm mt-2 italic">
                Sweet Alchemy Catering brings the magic of artisan chocolate to events, celebrations, and corporate gatherings. We specialize in delicate, handcrafted pastries and mini-desserts — all centered around the star ingredient: chocolate.
                Our mission is simple: to make people smile through flavor, design, and a touch of indulgence. From chocolate tarts and truffles to tiered mousse cakes and edible centerpieces, every creation combines the precision of fine pastry with the emotion that only chocolate can evoke.
                Funds raised will support the purchase of professional catering equipment, temperature-controlled delivery boxes, and branding materials to help us scale our operations and reach new clients.
                Because life's sweetest moments deserve to be celebrated — with chocolate.
              </p>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}