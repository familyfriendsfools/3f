import React from "react";
import Image from "next/image";

import { CircleCheckBig } from "lucide-react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductPlans from "@/components/product-plans";
import BottomCta from "@/components/bottom-cta";

const Steps: React.FC = () => {
  return (
    <section id="steps" className="grid gap-12 lg:gap-20 px-6 lg:px-20 py-10 lg:py-20">
      <h2>Os primeiros passos para começares</h2>

      <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-8 max-w-2xl">
          <h3>1.Responde a um questionário inicial</h3>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>É rápido e <strong>gratuito</strong></p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Ajuda-nos a entender melhor o estágio da tua iniciativa</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Recebe feedback e suporte da nossa <a href="https://discord.gg/7D7mMKjZ" target="_blank" className="text-dark-orange hover:text-light-orange transition duration-200">comunidade</a></p>
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
        <Image
          quality={100}
          src="/illustration-step2-create-campaign.png"
          alt="Illustration of woman creating a campaign through the platform"
          width={500}
          height={500}
          style={{ height: "auto" }}
          className="border-2 border-dark-gray rounded-md order-2 lg:order-first"
        />
        <div className="flex flex-col gap-y-8 max-w-2xl">
          <h3>2.Cria a tua iniciativa</h3>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Descreve a tua iniciativa</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Adiciona o máximo de detalhes possível: quanto mais informação, mais fácil é para a nossa comunidade te ajudar</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Define os teus objetivos e o apoio financeiro que precisas</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Define os termos do teu apoio: quanto tempo precisas para devolver o dinheiro, quanto de juros, etc.</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Seleciona o teu plano <span className="font-semibold font-title text-2xl text-dark-orange">3F</span>: sabe mais sobre os nossos planos <a href="#plans" className="text-dark-orange hover:text-light-orange transition duration-200">aqui</a></p>
            </li>
          </ol>
        </div>
      </div>

      <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-8 max-w-2xl">
          <h3>3. Partilha a tua iniciativa com familiares e amigos</h3>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Partilha informação de forma transparente</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Cria uma comunidade de apoio</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Formalidade cria segurança!</p>
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
        <Image
          quality={100}
          src="/illustration-step4-financial-support.png"
          alt="Illustration of woman receiving financial support"
          width={500}
          height={500}
          style={{ height: "auto" }}
          className="border-2 border-dark-gray rounded-md order-2 lg:order-first"
        />
        <div className="flex flex-col gap-y-8 max-w-2xl">
          <h3>4. Recebe financiamento</h3>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Recebe o apoio que precisas através de contratos assinados virtualmente</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Segurança e confiança</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Formas de pagamento ágeis</p>
            </li>
          </ol>
        </div>
      </div>

      <div className="flex flex-col gap-y-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-8 max-w-2xl">
          <h3>5. Gere a tua iniciativa</h3>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Consulta o teu histórico de apoios</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Gere os teus contratos</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Atualiza a informação da tua iniciativa</p>
            </li>
          </ol>
          <a href="/initial-questionnaire" className="cursor-pointer bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200 w-fit self-start">
            Impulsiona os teus sonhos
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

const OurMission: React.FC = () => {
  return (
    <section id="our-mission" className="grid gap-12 lg:gap-20 px-6 lg:px-20 py-10 lg:py-20">
      <h2 className="col-span-full">A nossa missão: transformar ideias em realidade</h2>
      <div className="grid lg:grid-cols-auto-auto gap-y-12 lg:gap-28">
        <Image
          quality={100}
          src="/illustration-make-dreams-come-true.png"
          alt="Illustration of woman happy with her idea coming true"
          width={496}
          height={496}
          className="border-2 border-dark-gray rounded-md"
        />
        <div className="flex flex-col gap-y-4 max-w-2xl">
          <p>Sabias que:</p>
          <ol className="flex flex-col gap-y-4">
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Mais de 99% das start-ups <strong>não</strong> conseguem obter financiamento através de investidores</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Entre 30% a 50% <strong>não</strong> consegue garantir condições necessárias para obter um empréstimo bancário</p>
            </li>
            <li className="grid grid-cols-auto-1fr items-center gap-x-4">
              <CircleCheckBig size={20} />
              <p>Apenas uma pequena percentagem consegue qualificar-se para obter apoios governamentais</p>
            </li>
          </ol>
          <p className="font-italic">E poucos são aqueles que sabem como e têm confiança para recorrer à sua rede de família e amigos…</p>
          <p className="">Na <span className="font-semibold font-title text-2xl text-dark-orange">3F</span> capacitamos empreendedores em início de jornada, com processos <strong>SIMPLES</strong>, <strong>ACESSÍVEIS</strong> e <strong>SEGUROS</strong>, para garantir o primeiro financiamento entre os seus familiares e amigos, criando uma comunidade de apoio para ajudar a impulsionar os seus sonhos.</p>
          <a href="/about" className="cursor-pointer bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200 w-fit self-start mt-4">
            Sabe mais sobre nós
          </a>
        </div>
      </div>

    </section>
  );
};

const HeroHome: React.FC = () => {
  return (
    <section id="hero-homepage" className="grid lg:grid-cols-2 xl:grid-cols-auto-auto bg-dark-orange px-6 lg:px-20 pt-10 lg:pt-20">
      <div className="flex flex-col gap-y-10">
        <h1>3F Community</h1>
        <h2>Family, Friends & Fans</h2>
        <ol className="flex flex-col gap-y-4">
          <li className="grid grid-cols-auto-1fr items-center gap-x-4">
            <CircleCheckBig size={20} />
            <p>Cria a tua iniciativa</p>
          </li>
          <li className="grid grid-cols-auto-1fr items-center gap-x-4">
            <CircleCheckBig size={20} />
            <p>Partilha com familiares e amigos</p>
          </li>
          <li className="grid grid-cols-auto-1fr items-center gap-x-4">
            <CircleCheckBig size={20} />
            <p>Encontra o apoio que precisas</p>
          </li>
          <li className="grid grid-cols-auto-1fr items-center gap-x-4">
            <CircleCheckBig size={20} />
            <p className="font-semibold">Impulsiona os teus sonhos</p>
          </li>
        </ol>
        <a href="/initial-questionnaire" className="cursor-pointer bg-dark-gray text-white font-semibold px-4 py-4 rounded-md shadow-lg hover:bg-gray-green w-fit lg:mb-20">
          Começa aqui
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
      <OurMission />
      <Steps />
      <ProductPlans />
      <BottomCta />
      <Footer />
    </div>
  );
}
