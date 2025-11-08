"use client";
import { useState } from "react";
import { userData } from "../_data/d_data";

import { useRouter } from "next/navigation";
import { userLoggedAtom } from "../_atoms/d_user-logged";
import { useAtom } from "jotai";

export default function LoginForm() {

  const router = useRouter();
  const [userLogged, setUserLogged] = useAtom(userLoggedAtom);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserLogged({
      isLogged: true,
      email: userData.email,
      name: userData.name,
    });
    router.push(`/demo/d_campaigns`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4 text-left">
      <h4 className="font-body font-semibold mb-4 text-blue-pastel">Welcome back!</h4>

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

      <button
        type="submit"
        className="cursor-pointer w-full bg-light-orange text-white font-bold py-2 rounded-md hover:bg-dark-orange disabled:opacity-50"
      >
        Login
      </button>
    </form>
  );
}