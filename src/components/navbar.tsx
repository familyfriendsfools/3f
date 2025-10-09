import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-dark-gray py-4 lg:px-20 px-6">
      <Link className="lg:hidden" href="/">
        <Image quality={100} src={"/logo-icon.png"} className="cursor-pointer" alt="Logo" width={30} height={30} />
      </Link>
      <Link className="lg:block hidden" href="/">
        <Image quality={100} src={"/logo-gray.png"} className="cursor-pointer" alt="Logo" width={150} height={50} />
      </Link>
      <div className="flex items-center gap-x-4">
        <Link href="/initial-questionnaire">
          <button className="cursor-pointer bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200">
            Começa aqui
          </button>
        </Link>
        <Link href="/login">
          <button className="cursor-pointer bg-dark-yellow text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-yellow transition duration-200">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
