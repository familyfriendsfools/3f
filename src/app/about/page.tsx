"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import teamClaudia from "@/assets/images/index/teamClaudia.jpeg";

export default function AboutUs() {
    return (
        <div className="min-h-screen w-full bg-white flex flex-col">
            <Navbar />

            <main className="max-w-6xl mx-auto px-6 py-20">
                <h1 className="text-5xl font-bold text-[#E68600]">ABOUT</h1>
                <h2 className="text-xl tracking-widest text-[#E68600] mt-1">US</h2>

                <section className="mt-10 text-lg leading-relaxed text-black space-y-4 max-w-3xl">
                    <p className="text-lg mb-6">
                        <strong>3F</strong> empowers early-stage entrepreneurs
                        with <strong>fast</strong>, <strong>simple</strong>, and <strong>transparent</strong> processes
                        to secure and manage P2P loans.
                    </p>

                    <p className="text-lg mb-6">
                        Bring your ideas to life with our <strong>all-in-one</strong> tool that facilitates fundraising
                        from <strong>Family & Friends</strong>, simplifying every step and fostering a supportive
                        community.
                    </p>

                    <ul className="text-left text-lg space-y-3 mt-8 list-disc list-inside">
                        <li>Information is shared in a <strong>transparent</strong> way with everyone.</li>
                        <li>Contracts are <strong>signed, validated</strong>, and securely stored on the platform.</li>
                        <li>Payments are <strong>quick</strong> and <strong>easy</strong>.</li>
                        <li>No more Excel sheets, Word documents, banking apps, or calendar alerts!</li>
                    </ul>
                </section>

                <section className="grid md:grid-cols-2 gap-8 mt-20">
                    <div className="space-y-6 text-[#E68600] text-base font-medium">
                        <div className="flex items-center gap-3">
                            <span>🧱</span>
                            <p>3F enhances the power of community</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span>🔗</span>
                            <p>Brings formality and accessibility to a familiar process</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span>🛡️</span>
                            <p>It’s accessible and safe</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-[#E68600] font-semibold text-xl mb-4">Meet the team</h3>

                        <div className="flex justify-center gap-10">
                            <div className="flex flex-col items-center">
                                <Image src={teamClaudia} alt="Founder & CEO"
                                       className="rounded-full w-24 h-24 object-cover"/>
                                <p className="text-sm mt-2 italic">Founder & CEO</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <Image src={teamClaudia} alt="Development Team"
                                       className="rounded-full w-24 h-24 object-cover"/>
                                <p className="text-sm mt-2 italic">Development Team</p>
                            </div>
                        </div>
                    </div>

                </section>
            </main>

            <Footer/>
        </div>
    );
}
