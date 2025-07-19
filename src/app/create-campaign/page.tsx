"use client";
import QuestionCarousel from "@/components/QuestionCarousel";

export default function createCampaign() {
    return (
        <div className="grid min-h-screen grid-cols-2">
            {/* Left side image section */}
            <div className="relative hidden lg:block "
                 style={{background: "#545454"}}
            >
                <img
                    src="/icon.svg"
                    alt="Image"
                    className="absolute top-1/2 left-1/2 w-[250px] h-[250px] transform -translate-x-1/2 -translate-y-1/2 dark:brightness-[0.2] dark:grayscale"
                />
            </div>

            {/* Right side with the QuestionCarousel */}
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <QuestionCarousel/>
            </div>
        </div>
    );
}
