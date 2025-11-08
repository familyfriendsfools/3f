import { FC } from 'react';
import Image from 'next/image';

const Hero: FC = () => {
  return (
    <section className="py-10 md:py-24 bg-gray-50">
      <div className="max-w-[1246px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="max-w-lg">
            <h1 className="text-dark-orange mb-6 leading-tight">
              Funding for Entrepreneurs
            </h1>
            <p className="text-lg text-dark-gray mb-8">
              Our platform connects micro-entrepreneurs with fast and accessible loans, without bank barriers. The future of financing starts here.
            </p>
          </div>
          <div className="w-full max-w-xs mt-10 md:mt-0">
            <Image
              src="/pitch.png"
              alt="Mockup da Aplicação 3F"
              width={225}
              height={275}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;