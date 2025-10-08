import React from "react";
import Image from "next/image";

import { CircleCheckBig } from "lucide-react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BottomCta from "@/components/bottom-cta";


const HeroAbout: React.FC = () => {
  return (
    <section id="hero-homepage" className="grid lg:grid-cols-2 xl:grid-cols-auto-auto bg-dark-orange px-6 lg:px-20 pt-10 lg:pt-20 items-center">
      <div className="flex flex-col gap-y-10">
        <h1>Quem somos?</h1>
        <p>Somos uma comunidade de empreendedores que acredita que o apoio financeiro entre familiares e amigos é a chave para o sucesso de qualquer iniciativa.</p>
        <a href="/initial-questionnaire" className="cursor-pointer bg-dark-gray text-white font-semibold px-4 py-4 rounded-md shadow-lg hover:bg-gray-green w-fit lg:mb-20">
          Começa aqui
        </a>
      </div>
      <Image
        quality={100}
        src="/hero-about.jpg"
        alt="3F Community Hero About Image"
        width={600}
        height={600}
        className="rounded-md opacity-90 shadow-md"
      />
    </section>
  );
};

export default function About() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroAbout />
      <BottomCta />
      <Footer />
    </div>
  );
}