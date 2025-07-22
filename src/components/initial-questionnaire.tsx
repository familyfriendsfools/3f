"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAtom } from "jotai";

import { initialQuestionnaireQuestions } from "@/lib/data/initial-questionnaire";
import { inferCenarioFromAnswers } from "@/lib/utils/infer-scenario";
import { initialQuestionnaireAtom, InitialQuestionnaireAnswers } from "@/state/index";


export default function InitialQuestionnaire() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useAtom(initialQuestionnaireAtom);
  const router = useRouter();

  const question = initialQuestionnaireQuestions[currentIndex];

  const scenario: "ONE" | "TWO" | "THREE" | "N/A" = inferCenarioFromAnswers(answers);

  const handleSelect = (option: string) => {
    const nextAnswers = { ...answers, [question.key as keyof InitialQuestionnaireAnswers]: option };
    setAnswers(nextAnswers);
  };

  return (
    <div className="p-4 md:px-16 w-full text-center lg:min-h-[80vh] flex flex-col justify-center">
      {currentIndex < initialQuestionnaireQuestions.length ? (
        <>
          <h2 className="text-xl font-semibold text-orange-500 mb-4">{question.title}</h2>

          {question.type === 'radio' ? (
            <div className="grid gap-3">
              {question.options?.map((opt) => (
                <label
                  key={opt}
                  className="relative flex-none cursor-pointer"
                >
                  <input
                    type="radio"
                    name={question.key}
                    value={opt}
                    checked={answers[question.key as keyof InitialQuestionnaireAnswers] === opt}
                    onChange={() => handleSelect(opt)}
                    className="peer hidden"
                  />
                  <div className="border-2 border-orange-500 rounded-2xl px-4 py-2 transition-colors peer-checked:bg-orange-500 hover:bg-orange-500 active:bg-orange-500 text-black hover:text-white">
                    {opt}
                  </div>
                </label>
              ))}
            </div>
          ) : question.type === 'email' ? (
            <div className="grid gap-3">
              <input
                type="email"
                name={question.key}
                placeholder={question.placeholder}
                required
                value={answers[question.key as keyof InitialQuestionnaireAnswers] || ''}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [question.key as keyof InitialQuestionnaireAnswers]: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 rounded-2xl border-2 border-orange-500 text-center text-base"
                autoComplete="email"
              />
            </div>
          ) : null}

          <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
            <button
              onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 cursor-pointer text-orange-800 hover:text-orange-600 active:text-orange-600 font-semibold text-xl text-shadow-lg disabled:opacity-30"
            >
              <ChevronLeft strokeWidth={3} /> Anterior
            </button>
            <span>
              {currentIndex + 1}/{initialQuestionnaireQuestions.length}
            </span>
            {currentIndex === initialQuestionnaireQuestions.length - 1 ? (
              <button
                disabled={!answers.email || !answers.email.includes('@')}
                onClick={() => setCurrentIndex(i => i + 1)}
                className="flex items-center gap-2 cursor-pointer text-orange-800 hover:text-orange-600 active:text-orange-600 font-semibold text-xl text-shadow-lg disabled:opacity-30"
              >
                Submeter
              </button>
            ) : (
              <button
                onClick={() =>
                  setCurrentIndex(i => Math.min(initialQuestionnaireQuestions.length - 1, i + 1))
                }
                disabled={!answers[question.key as keyof InitialQuestionnaireAnswers]}
                className="flex items-center gap-2 cursor-pointer text-orange-800 hover:text-orange-600 active:text-orange-600 font-semibold text-xl text-shadow-lg disabled:opacity-30"
              >
                Próximo <ChevronRight strokeWidth={3} />
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-y-6">
          {scenario === "ONE" && (
            <>
              <h2 className="text-2xl font-semibold text-orange-500">Estás pront@ para começar</h2>
              <p>Cria aqui gratuitamente a tua iniciativa e encontra o apoio que precisas na nossa <a className="font-semibold text-[#5865f2] hover:text-black inline-flex items-center gap-2 cursor-pointer" href="https://discord.gg/7D7mMKjZ" target="_blank">Comunidade <Image src="/discord-logo.svg" alt="Discord Logo" width={24} height={24} /></a></p>
              <a
                href="/create-campaign"
                className="cursor-pointer bg-orange-500 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg text-lg w-fit"
              >
                Criar iniciativa
              </a>
            </>
          )}

          {scenario === "TWO" && (
            <>
              <h2 className="text-2xl font-semibold text-orange-500">A tua jornada começa aqui</h2>
              <p>Avalia se esta será a melhor ferramenta para te ajudar a atingir os teus objectivos. Descobre um pouco mais <a href="/#mission" className="underline text-lg font-semibold text-orange-500 hover:text-orange-700 inline-block cursor-pointer">sobre nós</a></p>
            </>
          )}

          {scenario === "THREE" && (
            <>
              <h2 className="text-2xl font-semibold text-orange-500">Tens uma ideia?</h2>
              <p>Antes de criares a tua iniciativa, vê como a nossa <a className="font-semibold text-[#5865f2] hover:text-black inline-flex items-center gap-2 cursor-pointer" href="https://discord.gg/7D7mMKjZ" target="_blank">Comunidade <Image src="/discord-logo.svg" alt="Discord Logo" width={24} height={24} /></a> te poderá ajudar a desenvolver o teu projecto</p>
            </>
          )}

          {scenario === "N/A" && (
            <>
              <h2 className="text-2xl font-semibold text-orange-500">Obrigado por preencheres o questionário</h2>
              <p>Vamos analisar as tuas respostas e entraremos em contacto em breve.</p>
            </>
          )}
          <button
            onClick={() => setCurrentIndex(0)}
            className="flex items-center gap-1 cursor-pointer text-orange-800 hover:text-orange-600 active:text-orange-600 font-semibold text-base text-shadow-lg w-fit mx-auto"
          >
            <ChevronLeft strokeWidth={2} className="w-4 h-4" /> Quero responder novamente
          </button>
        </div>
      )}
    </div>
  );
}
