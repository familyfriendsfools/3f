import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      

      <div className="max-w-[1246px] mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="max-w-lg">
            
            <h1 className="text-dark-gray mb-6 leading-tight">
              Funding for Entrepreneurs
            </h1>
            
            <p className="text-lg text-dark-gray mb-8">
              Our SaaS platform connects micro-entrepreneurs with fast and accessible loans, without bank barriers. The future of financing starts here.
            </p>
            
            <Link 
        href="/initial-questionnaire" 
        
        className="bg-dark-orange text-white px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition inline-block" // 'inline-block' é crucial para o Link herdar os estilos de botão
      >
        Find Your Credit Limit
            </Link>
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