// ../../components/about-us.tsx (Componente Único)

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs: FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1246px] mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-blue-pastel">
            About Us and Our Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">

          <div>
            <h3 className="font-body font-semibold text-dark-gray mb-4 border-b pb-2 border-dark-orange">
              Who We Are and Why We Exist
            </h3>
            <p className="text-lg text-dark-gray mb-6">
              We are a group of (future) entrepreneurs who want to make life easier for those who have a business idea and need a financial push. We believe in the power of community.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-dark-gray">
              <li>We bring formality and accessibility to a familiar process, in a safe environment that fosters mutual trust.</li>
              <li>3F is a platform to empower entrepreneurs to secure and manage private loans.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-body font-semibold text-dark-gray mb-4 border-b pb-2 border-dark-orange">
              What is the Difference?
            </h3>
            <ul className="space-y-4">
              <li className="p-4 bg-light-orange/10 rounded-lg">
                <h4 className="font-body font-semibold text-dark-orange text-lg">VS. Banks</h4>
                <p className="text-base text-dark-gray">You ask for a loan from people you know, at rates you consider fair, without the usual bureaucracy.</p>
              </li>
              <li className="p-4 bg-light-orange/10 rounded-lg">
                <h4 className="font-body font-semibold text-dark-orange text-lg">VS. Other Platforms</h4>
                <p className="text-base text-dark-gray">It focuses on you (the one who needs the loan), not on the investors. You do not have to give up part of your business to get financing.</p>
              </li>
            </ul>
          </div>
        </div>


        <div className="text-center mb-16">
          <h2 className="text-blue-pastel mb-4">
            The Market Gap and The Missing Piece
          </h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            We provide the structure for the financing that already exists within your network.
          </p>
        </div>

        <Image
          src="/market-gap-diagram.png"
          alt="Diagrama do Gap de Mercado: Onde 3F se encaixa no financiamento"
          width={1000}
          height={500}
          className="w-full h-auto mx-auto rounded-lg mb-20"
        />

        <div className="text-center mb-16">
          <h2 className="text-blue-pastel mb-4">
            Our 4-Step Solution Flow
          </h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            From campaign creation to loan management, we guide you every step of the way.
          </p>
        </div>

        <Image
          src="/Solution.png"
          alt="Fluxo de trabalho da plataforma 3F em 4 passos: Criar, Partilhar, Receber e Gerir."
          width={1000}
          height={600}
          className="w-full h-auto mx-auto mb-10 rounded-lg"
        />
      </div>
      <div className="text-center mb-16">
        <h2 className="text-blue-pastel mb-4">
          Want to see how it works?
        </h2>
        <p className="text-xl text-dark-gray max-w-3xl mx-auto">
          Watch our demo video to see how it works.
        </p>
      </div>

      <Link href="/demo/play" className="cursor-pointer bg-dark-orange text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-light-orange transition duration-200 w-fit block mx-auto mt-4">
        Watch Demo
      </Link>
    </section >
  );
};

export default AboutUs;