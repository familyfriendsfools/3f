import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import QuestionCarousel from "@/components/QuestionCarousel"; // Import your carousel component

export default function Home() {
    return (
        <div className="min-h-screen w-full">
            <Navbar />
            <div className="px-20">
                <div className="py-4">HomePage</div>
                {/* Insert the carousel component here */}
                <div className="my-8">
                    <QuestionCarousel />
                </div>
                <div id="primeira" className="h-[500px] bg-black">primeira parte</div>
                <div id="segunda" className="h-[500px] bg-red-100">segunda parte</div>
                <div id="terceira" className="h-[500px] bg-blue-100">terceira parte</div>
            </div>
            <Footer />
        </div>
    );
}
