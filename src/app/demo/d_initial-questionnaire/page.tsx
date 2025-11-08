"use client";
import type { InitialQuestionnaireAnswers } from "@/state/index";

import { useState } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAtom } from "jotai";

import { initialQuestionnaireQuestions } from "../_data/d_initial-questionnaire-questions";
import { initialQuestionnaireAtom } from "@/state/index";
import Navbar from "../_components/d_navbar";

export default function InitialQuestionnaire() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useAtom(initialQuestionnaireAtom);

  const question = initialQuestionnaireQuestions[currentIndex];

  const handleSelect = (option: string) => {
    const nextAnswers = { ...answers, [question.key as keyof InitialQuestionnaireAnswers]: option };
    setAnswers(nextAnswers);
  };

  return (
    <section className="flex flex-col gap-y-6 bg-dark-gray/20 lg:min-h-screen">
      <Navbar showButtons={false} />
      <div className="p-4 md:px-8 w-full max-w-2xl mx-auto text-center flex flex-col justify-center">
        {currentIndex < initialQuestionnaireQuestions.length ? (
          <>
            <h2 className="font-body text-xl font-semibold text-blue-pastel mb-4">{question.title}</h2>

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
                    <div className="border-2 border-light-orange rounded-2xl px-4 py-2 transition-colors peer-checked:bg-light-orange hover:bg-light-orange active:bg-light-orange text-black hover:text-white">
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
                  className="w-full px-4 py-2 rounded-2xl border-2 border-light-orange text-center text-base"
                  autoComplete="email"
                />
              </div>
            ) : null}

            <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
              <button
                onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-2 cursor-pointer text-dark-orange hover:text-orange-600 active:text-orange-600 font-semibold text-xl text-shadow-lg disabled:opacity-30"
              >
                <ChevronLeft strokeWidth={3} /> Previous
              </button>
              <span>
                {currentIndex + 1}/{initialQuestionnaireQuestions.length}
              </span>
              {currentIndex === initialQuestionnaireQuestions.length - 1 ? (
                <button
                  disabled={!answers.email || !answers.email.includes('@')}
                  onClick={() => setCurrentIndex(i => i + 1)}
                  className="flex items-center gap-2 cursor-pointer text-dark-orange hover:text-orange-600 active:text-orange-600 font-semibold text-xl text-shadow-lg disabled:opacity-30"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={() =>
                    setCurrentIndex(i => Math.min(initialQuestionnaireQuestions.length - 1, i + 1))
                  }
                  disabled={!answers[question.key as keyof InitialQuestionnaireAnswers]}
                  className="flex items-center gap-2 cursor-pointer text-dark-orange hover:text-orange-600 active:text-orange-600 font-semibold text-xl text-shadow-lg disabled:opacity-30"
                >
                  Next <ChevronRight strokeWidth={3} />
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-y-6">
            <h2 className="font-body text-2xl font-semibold text-dark-orange">Are you ready to start?</h2>
            <p>Create your initiative here for free and find the support you need in our <a className="font-semibold text-[#5865f2] hover:text-black inline-flex items-center gap-2 cursor-pointer" href="https://discord.gg/7D7mMKjZ" target="_blank">Community <Image src="/discord-logo.svg" alt="Discord Logo" width={24} height={24} /></a></p>
            <a
              href="/demo/d_create-campaign"
              className="cursor-pointer bg-dark-orange hover:bg-light-orange text-white font-semibold px-6 py-3 rounded-md shadow-lg text-lg w-fit"
            >
              Create your initiative
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
