"use client";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "./_components/lead-form";

export default function LeadFormPage() {
  return (
    <div className="grid lg:min-h-screen lg:grid-cols-2 items-center">
      <div
        className="flex relative items-center justify-center h-full"
        style={{ background: "#545454" }}
      >
        <Link href="/quick-links">
          <Image
            src="/logo-gray-round.png"
            alt="3F Logo"
            className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
            width={250}
            height={250}
          />
        </Link>
      </div>
      <LeadForm />
    </div>
  );
}