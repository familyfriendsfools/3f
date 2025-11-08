import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-start lg:items-center flex-wrap bg-dark-gray py-4 lg:px-20 px-6">
      <div className="flex flex-col lg:flex-row gap-y-2 gap-x-4 lg:gap-x-8">
        <Image quality={100} src={"/logo-icon.png"} className="" alt="Logo" width={20} height={20} />
        <Link className="text-sm lg:text-lg font-semibold" href="/about">About us</Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-2 gap-x-4 lg:gap-x-8">
        <Link className="text-sm lg:text-lg" href="/terms">Terms and Conditions</Link>
        <Link className="text-sm lg:text-lg" href="/privacy">Privacy Policy</Link>
      </div>
      <div className="flex flex-row gap-4">
        <a className="cursor-pointer" href="https://discord.gg/7D7mMKjZ" target="_blank"><Image src="/discord-logo.svg" alt="Discord Logo" width={30} height={30} /></a>
      </div>
    </footer>
  );
}
