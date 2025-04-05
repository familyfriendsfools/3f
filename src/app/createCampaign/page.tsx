"use client";

import QuestionCarousel from "@/components/QuestionCarousel";

export default function createCampaign() {
    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            {/* Left side image section */}
            <div className="relative hidden bg-muted lg:block bg-orange-500">
                <img
                    src="/icon.svg"
                    alt="Image"
                    className="absolute top-1/2 left-1/2 w-[250px] h-[250px] transform -translate-x-1/2 -translate-y-1/2 dark:brightness-[0.2] dark:grayscale"
                />
            </div>

            {/* Right side with the QuestionCarousel */}
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="#" className="flex items-center gap-2 font-medium">
                        {/* Optionally, you can add a link or text here */}
                    </a>
                </div>

                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        {/* Here is where the QuestionCarousel component is rendered */}
                        <QuestionCarousel />
                    </div>
                </div>
            </div>
        </div>
    );
}
