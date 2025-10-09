import React from "react";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

const BottomCta: React.FC = () => {
  return (
    <section
      id="bottom-cta"
      className="
          bg-[url('/holding-hands-opacity60.png')]
          bg-center bg-cover
          px-6 py-16">
      <div
        className="
          flex flex-col gap-y-10 items-center justify-center"
      >
        <h2 className='font-title font-semibold text-center'>Junta-te à nossa comunidade</h2>
        <h3 className="max-w-3xl font-body text-center">Do que estás à espera para começares a jornada que pode mudar a tua vida?</h3>
        <a href="/initial-questionnaire" className="cursor-pointer bg-dark-gray text-white font-semibold px-4 py-4 rounded-md shadow-lg hover:bg-gray-green w-fit">
          Começa aqui!
        </a>
      </div>
    </section>
  );
};

export default BottomCta;