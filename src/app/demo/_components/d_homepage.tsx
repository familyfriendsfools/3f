"use client";

import React from "react";
import Image from "next/image";

import { CircleCheckBig } from "lucide-react";

import Navbar from "./d_navbar";
import Footer from "./d_footer";
import { HotkeyBanner } from "./d_hotkey-banner";

const Steps: React.FC = () => {
  return (
    <section id="steps" className="grid gap-12 lg:gap-20 px-6 lg:px-20 py-10 lg:py-20">
      <h2>The first steps to get started</h2>

      <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-8 max-w-2xl">
          <button type="button" className="cursor-pointer font-header font-semibold text-xl lg:text-3xl w-fit text-left">1. Answer an initial questionnaire</button>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>It's quick and <strong>free</strong></p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Help us understand the stage of your initiative better</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Receive feedback and support from our <a href="https://discord.gg/7D7mMKjZ" target="_blank" className="text-dark-orange hover:text-light-orange transition duration-200">community</a></p>
            </li>
          </ol>
        </div>
        <Image
          quality={100}
          src="/illustration-step1-initial-questionnaire.png"
          alt="Illustration of woman answering a questionnaire"
          width={500}
          height={500}
          style={{ height: "auto" }}
          className="border-2 border-dark-gray rounded-md"
        />
      </div>

      <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-8 max-w-2xl">
          <button type="button" className="cursor-pointer font-header font-semibold text-xl lg:text-3xl w-fit text-left">2. Create your initiative</button>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Describe your initiative</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Add as much details as possible: the more information, the easier it is for our community to help you</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Define your goals and the financial support you need</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Define the terms of your support: how long you need to return the money, how much interest, etc.</p>
            </li>
          </ol>
        </div>
        <Image
          quality={100}
          src="/illustration-step2-create-campaign.png"
          alt="Illustration of woman creating a campaign through the platform"
          width={500}
          height={500}
          style={{ height: "auto" }}
          className="border-2 border-dark-gray rounded-md"
        />
      </div>

      <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-8 max-w-2xl">
          <button type="button" className="cursor-pointer font-header font-semibold text-xl lg:text-3xl w-fit text-left">3. Share your initiative with family and friends</button>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Share information in a transparent way</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Create a support community</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Formality creates security!</p>
            </li>
          </ol>
        </div>
        <Image
          quality={100}
          src="/illustration-step3-share-campaign.png"
          alt="Illustration of woman sharing a campaign through the platform"
          width={500}
          height={500}
          style={{ height: "auto" }}
          className="border-2 border-dark-gray rounded-md"
        />
      </div>

      <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-8 max-w-2xl">
          <button type="button" className="cursor-pointer font-header font-semibold text-xl lg:text-3xl w-fit text-left">4. Receive financial support</button>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Receive the support you need through virtual signed contracts</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Security and confidence</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Agile payment methods</p>
            </li>
          </ol>
        </div>
        <Image
          quality={100}
          src="/illustration-step4-financial-support.png"
          alt="Illustration of woman receiving financial support"
          width={500}
          height={500}
          style={{ height: "auto" }}
          className="border-2 border-dark-gray rounded-md"
        />
      </div>

      <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-8 max-w-2xl">
          <button type="button" className="cursor-pointer font-header font-semibold text-xl lg:text-3xl w-fit text-left">5. Manage your initiative</button>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Consult your investors history</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Manage your contracts</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Update your initiative information</p>
            </li>
          </ol>
          <a href="/demo/d_initial-questionnaire" className="cursor-pointer bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200 w-fit self-start">
            Impulse your dreams
          </a>
        </div>
        <Image
          quality={100}
          src="/illustration-step5-manage-campaign.png"
          alt="Illustration of woman managing a campaign"
          width={500}
          height={500}
          style={{ height: "auto" }}
          className="border-2 border-dark-gray rounded-md"
        />
      </div>
    </section>
  );
};

const HeroHome: React.FC = () => {
  return (
    <section id="hero-homepage" className="grid lg:grid-cols-2 xl:grid-cols-auto-auto bg-dark-orange px-6 lg:px-20 pt-10 lg:pt-20">
      <div className="flex flex-col gap-y-10">
        <h1>3F Community</h1>
        <h2>Family, Friends & Fun</h2>
        <ol className="flex flex-col gap-y-4">
          <li className="grid grid-cols-auto-1fr items-center gap-x-4">
            <CircleCheckBig size={20} />
            <p>Create your initiative</p>
          </li>
          <li className="grid grid-cols-auto-1fr items-center gap-x-4">
            <CircleCheckBig size={20} />
            <p>Share with family and friends</p>
          </li>
          <li className="grid grid-cols-auto-1fr items-center gap-x-4">
            <CircleCheckBig size={20} />
            <p>Find the support you need</p>
          </li>
          <li className="grid grid-cols-auto-1fr items-center gap-x-4">
            <CircleCheckBig size={20} />
            <p className="font-semibold">Impulse your dreams!</p>
          </li>
        </ol>
        <a href="/demo/d_initial-questionnaire" className="cursor-pointer bg-dark-gray text-white font-semibold px-4 py-4 rounded-md shadow-lg hover:bg-gray-green w-fit lg:mb-20">
          Get started
        </a>
      </div>
      <Image
        quality={100}
        src="/hero-homepage.png"
        alt="3F Community Hero Home Image"
        width={650}
        height={434}
        className="self-end"
      />
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroHome />
      <Steps />
      <Footer />
      <HotkeyBanner />
    </div>
  );
}
