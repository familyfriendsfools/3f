"use client";
import Image from "next/image";
import Link from "next/link";

import InitialQuestionnaire from "@/components/initial-questionnaire";

export default function InitialQuestionnairePage() {
  return (
    <div className="grid lg:min-h-screen lg:grid-cols-2 items-center">
      <div
        className="flex relative items-center justify-center h-full"
        style={{ background: "#545454" }}
      >
        <Link href="/">
          <Image
            src="/logo-gray-round.png"
            alt="3F Logo"
            className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] dark:grayscale py-8 lg:py-0"
            width={250}
            height={250}
          />
        </Link>
        <Link
          href="/login"
          className="underline underline-offset-2 text-orange-500 hover:text-orange-700 lg:hidden absolute top-4 right-4"
        >
          Entrar
        </Link>
      </div>

      <div className="flex flex-col relative justify-center items-center">
        <InitialQuestionnaire />
        <Link
          href="/login"
          className="underline underline-offset-2 text-orange-500 hover:text-orange-700 hidden lg:block absolute top-4 right-16"
        >
          Entrar
        </Link>
      </div>
    </div>
  );
}
