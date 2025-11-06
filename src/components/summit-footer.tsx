import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Summit() {
  return (
    <footer className="w-full flex justify-between items-start lg:items-center flex-wrap bg-dark-gray py-4 lg:px-20 px-6">
      <div className="flex flex-col lg:flex-row gap-y-2 gap-x-4 lg:gap-x-8">
        <Image quality={100} src={"/logo-icon.png"} className="" alt="Logo" width={20} height={20} />
      </div>
      <div className="flex flex-col lg:flex-row gap-y-2 gap-x-4 lg:gap-x-8">
      </div>
      <div className="flex flex-row gap-4">
        <a className="cursor-pointer" href="https://discord.gg/nZ6bxGeK" target="_blank"><Image src="/discord-logo.svg" alt="Discord Logo" width={30} height={30} /></a>
      </div>
    </footer>
  );
}
