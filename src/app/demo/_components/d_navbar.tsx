"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { userLoggedAtom } from "../_atoms/d_user-logged";
import { useAtom } from "jotai";

export default function Navbar({ showButtons = true }: { showButtons?: boolean }) {
  const [userLogged] = useAtom(userLoggedAtom);
  return (
    <nav className="w-full flex justify-between items-center bg-dark-gray py-4 lg:px-20 px-6">
      <Link className="lg:hidden" href="/quick-links">
        <Image quality={100} src={"/logo-icon.png"} className="cursor-pointer" alt="Logo" width={30} height={30} />
      </Link>
      <Link className="lg:block hidden" href="/quick-links">
        <Image quality={100} src={"/logo-gray.png"} className="cursor-pointer" alt="Logo" width={150} height={50} />
      </Link>
      {showButtons && (
        <div className="flex items-center gap-x-4">
          {!userLogged.isLogged && (
            <Link href="/demo/d_initial-questionnaire">
              <button className="cursor-pointer bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200">
                Get started
              </button>
            </Link>
          )}
          {userLogged.isLogged ? (
            <Link href="/demo/d_profile" className=" flex items-center gap-x-2 cursor-pointer text-white text-2xl font-semibold px-4 py-2  rounded-md hover:bg-light-orange transition duration-200">
              <CircleUserRound className="w-6 h-6" />
              {userLogged.name}
            </Link>
          ) : (
            <Link href="/demo/d_login">
              <button className="cursor-pointer bg-dark-yellow text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-yellow transition duration-200">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}