"use client";
import Image from "next/image";
import Link from "next/link";

import CampaignCreation from "../_components/d_campaign-creation";

export default function CreateCampaignPage() {
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
            className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] py-8 lg:py-0"
            width={250}
            height={250}
          />
        </Link>
      </div>

      <div className="flex flex-col relative justify-center items-center">
        <CampaignCreation />
      </div>
    </div>
  );
}
