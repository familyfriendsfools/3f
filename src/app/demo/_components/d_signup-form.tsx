"use client";
import { useState } from "react";
import { userData } from "../_data/d_data";

import { useRouter } from "next/navigation";
export default function SignupForm() {


  const [accountCreated, setAccountCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setAccountCreated(true);
      setLoading(false);
    }, 1000);
  };

  const handleSubmitPersonalInformation = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    router.push(`/demo/d_campaigns/abcde`);
  };
  return !accountCreated ? (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
      <h4 className="font-body font-semibold mb-4 text-blue-pastel">Create account to continue</h4>

      <div>
        <label className="block mb-1">Name</label>
        <input
          name="name"
          defaultValue={userData.name}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">Surnames</label>
        <input
          name="surnames"
          defaultValue={userData.surnames}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={userData.email}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"

        />
      </div>

      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          name="password"
          defaultValue={userData.password}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"

        />
      </div>

      <div>
        <label className="block mb-1">Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          defaultValue={userData.confirmPassword}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full bg-light-orange text-white font-bold py-2 rounded-md hover:bg-dark-orange disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Creating account..." : "Create account"}
      </button>
    </form>
  ) : (
    <form onSubmit={handleSubmitPersonalInformation} className="max-w-md mx-auto space-y-4 text-left">
      <h4 className="font-body font-semibold mb-4 text-blue-pastel">Add your personal information</h4>

      <div>
        <label className="block mb-1">Fiscal identification number</label>
        <input
          name="nif"
          defaultValue={userData.nif}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">Identification document number</label>
        <input
          name="identificationDocNumber"
          defaultValue={userData.identificationDocNumber}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">Address</label>
        <input
          name="address"
          defaultValue={userData.address}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">Postal code</label>
        <input
          type="password"
          name="postalCode"
          defaultValue={userData.postalCode}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <div>
        <label className="block mb-1">IBAN</label>
        <input
          type="password"
          name="iban"
          defaultValue={userData.iban}
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="cursor-pointer w-full bg-light-orange text-white font-bold py-2 rounded-md hover:bg-dark-orange disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Adding personal information..." : "Add personal information"}
      </button>
    </form>
  );
}