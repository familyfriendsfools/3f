"use client";
import { useState } from "react";
import { campaignData, userData } from "../_data/d_data";
import { Download } from "lucide-react";

export default function InvestForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setFormSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return !formSubmitted ? (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
      <h4 className="font-body font-semibold mb-4 text-blue-pastel">Invest in this initiative</h4>

      <div>
        <label className="block mb-1">Amount</label>
        <input
          name="amount"
          defaultValue={campaignData.investments[0].amount}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={campaignData.investments[0].user.name}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"

        />
      </div>

      <div>
        <label className="block mb-1">Fiscal identification number</label>
        <input
          name="nif"
          defaultValue={campaignData.investments[0].user.nif}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">Identification document number</label>
        <input
          name="identificationDocNumber"
          defaultValue={campaignData.investments[0].user.identificationDocNumber}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">Address</label>
        <input
          name="address"
          defaultValue={campaignData.investments[0].user.address}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">Postal code</label>
        <input
          type="text"
          name="postalCode"
          defaultValue={campaignData.investments[0].user.postalCode}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full bg-light-orange text-white font-bold py-2 rounded-md hover:bg-dark-orange disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Generating contract..." : "Invest"}
      </button>
    </form>
  ) : (
    <div className="max-w-md mx-auto space-y-4 text-left">
      <h4 className="font-body font-semibold mb-4 text-blue-pastel">Thank you for helping me achieve my dream!</h4>
      <p className="text-sm text-gray-500">You can download the contract by clicking the button below.</p>
      <div className="flex justify-center">
        <a
          href="/demo/d_agreement-henrique.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 cursor-pointer w-fit text-center bg-light-orange text-white font-bold px-4 py-2 rounded-md hover:bg-dark-orange disabled:opacity-50"
        >
          <Download size={18} />
          Download contract
        </a>
      </div>
    </div>
  );
}