"use client";
import Image from "next/image";
import Link from "next/link";

export default function QuickLinksPage() {
  return (
    <div className="grid lg:min-h-screen lg:grid-cols-2 items-center">
      <div
        className="flex relative items-center justify-center h-full"
        style={{ background: "#545454" }}
      >
        <Link href="/demo">
          <Image
            src="/logo-gray-round.png"
            alt="3F Logo"
            className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
            width={250}
            height={250}
          />
        </Link>
      </div>

      <ul className="mt-10 flex flex-col relative justify-center items-center gap-y-4">
        <li className="w-3/4">
          <Link href="/landing" target="_blank" className="cursor-pointer text-center bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200 w-full block">
            Get to know us
          </Link>
        </li>
        <li className="w-3/4">
          <Link href="/demo/play" target="_blank" className="cursor-pointer text-center bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200 w-full block">
            Watch our demo
          </Link>
        </li>
        <li className="w-3/4">
          <Link href="https://form.typeform.com/to/MSbY1kZB" target="_blank" className="cursor-pointer text-center bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200 w-full block">
            Give us feedback
          </Link>
        </li>
        <li className="w-3/4">
          <Link href="https://discord.com/invite/nZ6bxGeK" target="_blank" className="cursor-pointer text-center bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200 w-full block">
            Join our community
          </Link>
        </li>
        <li className="w-3/4">
          <p className="cursor-not-allowed text-center text-dark-gray font-semibold px-4 py-2 rounded-md shadow-md bg-gray-200 hover:bg-gray-300 transition duration-200 w-full block">
            Assess your idea (coming soon)
          </p>
        </li>
      </ul>
    </div>
  );
}
