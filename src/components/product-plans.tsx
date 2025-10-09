'use client';
import React, { JSX } from 'react';
import { Check, X, Infinity as InfinityIcon, Minus } from 'lucide-react';

type Cell =
  | { type: 'check' }
  | { type: 'x' }
  | { type: 'text'; value: string | number | JSX.Element }
  | { type: 'dash' };

type Feature = {
  label: string;
  shortLabel?: string; // optional shorter label for mobile
  basic: Cell;
  premium: Cell;
};

const features: Feature[] = [
  {
    label: 'Preço anual',
    shortLabel: 'Preço anual',
    basic: { type: 'dash' },
    premium: { type: 'text', value: '0,99 €/ano' },
  },
  {
    label: 'Perfil do empreendedor',
    shortLabel: 'Perfil',
    basic: { type: 'check' },
    premium: { type: 'check' },
  },
  {
    label: 'Criação de iniciativas',
    shortLabel: 'Iniciativas',
    basic: { type: 'text', value: 'Até 2' },
    premium: { type: 'text', value: <InfinityIcon aria-label="Infinitas" className="h-5 w-5 inline-flex justify-center items-center text-gray-green" /> },
  },
  {
    label: 'Dashboard de progressão',
    shortLabel: 'Dashboard',
    basic: { type: 'check' },
    premium: { type: 'check' },
  },
  {
    label: 'Acesso à comunidade 3F',
    shortLabel: 'Comunidade 3F',
    basic: { type: 'check' },
    premium: { type: 'check' },
  },
  {
    label: 'Centro de recursos 3F',
    shortLabel: 'Recursos 3F',
    basic: { type: 'x' },
    premium: { type: 'check' },
  },
  {
    label: 'Histórico de apoios',
    shortLabel: 'Histórico',
    basic: { type: 'x' },
    premium: { type: 'check' },
  },
  {
    label: 'Planos de pagamento',
    shortLabel: 'Planos de pagamento',
    basic: { type: 'x' },
    premium: { type: 'check' },
  },
];

function CellRenderer({ cell }: { cell: Cell }) {
  if (cell.type === 'check') {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-blue-pastel/15">
        <Check strokeWidth={4} className="h-4 w-4 text-blue-pastel" aria-hidden />
        <span className="sr-only">Incluído</span>
      </span>
    );
  }
  if (cell.type === 'x') {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-dark-gray/15">
        <X strokeWidth={4} className="h-4 w-4 text-dark-gray" aria-hidden />
        <span className="sr-only">Não incluído</span>
      </span>
    );
  }
  if (cell.type === 'dash') {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center font-medium text-gray-green">
        <Minus strokeWidth={4} className="h-4 w-4" aria-hidden />
        <span className="sr-only">Não aplicável</span>
      </span>
    );
  }
  return typeof cell.value === 'string' || typeof cell.value === 'number' ? (
    <span className="font-medium text-gray-green">{cell.value}</span>
  ) : (
    cell.value
  );
}

export default function ProductPlans() {
  return (
    <section id="plans" className="w-full py-4 lg:px-20 px-6">
      <h2 className="mb-8 md:mb-12">Conhece os nossos planos</h2>
      <div className="max-w-6xl rounded-lg bg-amber-50 border-2 border-dark-gray p-4 sm:p-6 md:p-8">
        <div className="hidden grid-cols-[1fr_1fr_1fr] items-end gap-6 md:grid mb-6 border-b-2 border-dark-gray pb-4">
          <div className="col-start-2 rounded-xl bg-light-yellow shadow-md p-4 text-center ring-1 ring-inset ring-light-yellow/30">
            <h3 className="mt-1 text-xl font-semibold">BÁSICO</h3>
          </div>
          <div className="col-start-3 rounded-xl bg-dark-orange shadow-md p-4 text-center ring-1 ring-inset ring-dark-orange/30">
            <h3 className="mt-1 text-xl font-semibold">PREMIUM</h3>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] md:gap-6">
          {features.map((f, i) => {
            const isLast = i === features.length - 1;
            return (

              <div
                key={f.label}
                className={[
                  'contents',
                ].join(' ')}
              >
                <div
                  className={`py-4 md:py-5`}
                >
                  <div className="px-3 md:px-0">
                    <p className="text-lg font-medium">{f.label}</p>
                  </div>
                </div>
                <div className={`py-4 text-center md:py-5`}>
                  <CellRenderer cell={f.basic} />
                </div>
                <div className={`py-4 text-center md:py-5`}>
                  <CellRenderer cell={f.premium} />
                </div>
                {!isLast && (
                  <span className="col-span-3 border-b-1 border-blue-pastel"></span>
                )}
              </div>


            )
          })}
        </div>

        <div className="md:hidden">
          <div className="sticky top-0 z-10 grid grid-cols-2 gap-3 border-b-2 border-dark-gray pt-4 pb-4 bg-amber-50">
            <h3 className="rounded-lg bg-light-yellow shadow-md px-3 py-2 text-center text-sm font-semibold ring-1 ring-inset ring-light-yellow/30">
              BÁSICO
            </h3>
            <h3 className="rounded-lg bg-dark-orange shadow-md px-3 py-2 text-center text-sm font-semibold ring-1 ring-inset ring-dark-orange/30">
              PREMIUM
            </h3>
          </div>

          <ul className="space-y-3">
            {features.map((f, i) => {
              const isLast = i === features.length - 1;
              return (
                <li
                  key={f.label}
                  className={`p-4 ${isLast ? 'border-b-0' : 'border-b-1 border-blue-pastel'}`}
                >
                  <p className="mb-3 text-base text-center font-medium">
                    {f.shortLabel ?? f.label}
                  </p>
                  <div className="grid grid-cols-2 items-center gap-2">
                    <div className="flex items-center justify-center gap-2">
                      <CellRenderer cell={f.basic} />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CellRenderer cell={f.premium} />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}