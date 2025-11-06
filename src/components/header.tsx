import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full flex justify-between items-center bg-dark-gray py-4 lg:px-20 px-6">
      <Link className="lg:hidden" href="/">
        <Image quality={100} src={"/logo-icon.png"} className="cursor-pointer" alt="Logo" width={30} height={30} />
      </Link>
      <Link className="lg:block hidden" href="/">
        <Image quality={100} src={"/logo-gray.png"} className="cursor-pointer" alt="Logo" width={150} height={50} />
      </Link>
      <div className="flex items-center gap-x-4">
      </div>
    </nav>
  );
}
