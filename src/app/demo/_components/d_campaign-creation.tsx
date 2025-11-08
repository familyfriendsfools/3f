"use client";
import type { CreateCampaignAnswers } from "@/state/atoms/create-campaign-atom";

import { useState, useEffect } from "react";

import { useAtom } from "jotai";
import { ChevronLeft, ChevronRight, Lightbulb, X } from "lucide-react";

import { initialQuestionnaireAtom, createCampaignAtom } from "@/state/index";
import { createCampaignQuestions } from "../_data/d_create-campaign-questions";
import SignupForm from "./d_signup-form";

type Field = {
  key: keyof CreateCampaignAnswers;
  type: string;
  required?: boolean;
  title: string;
  description?: string;
  options?: string[];
  placeholder?: string;
};

type Question = {
  key: string;
  type: "group" | "cascading" | "select" | "textarea" | "number" | "radio";
  title?: string;
  description?: string;
  required?: boolean;
  fields?: Field[];
  options?: string[];
  maxLength?: number;
  placeholder?: string;
  hasTip?: boolean;
  tip?: string;
};

export default function CampaignQuestionnaire() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initial] = useAtom(initialQuestionnaireAtom);
  const [form, setForm] = useAtom(createCampaignAtom);

  // Pre-fill logic
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      email: prev.email || initial.email,
    }));
  }, [initial]);

  const step = createCampaignQuestions[currentIndex] as Question;
  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Helper function to safely get form value
  const getFormValue = (key: string): string => {
    return (form as Record<string, string>)[key] || "";
  };

  const nextDisabled = () => {
    if (!step.required) return false;
    if (step.type === "group") {
      return step?.fields?.some((f: Field) => f.required && !getFormValue(f.key));
    } else {
      return !getFormValue(step.key);
    }
  };

  const [showTip, setShowTip] = useState(false);

  return (
    <div className="p-4 md:px-16 w-full text-center lg:min-h-[80vh] flex flex-col justify-center">
      {currentIndex < createCampaignQuestions.length ? (
        <>
          {step.title && (
            <div className="flex items-center justify-center mb-4 gap-2">
              <h2 className="font-body text-xl font-semibold text-blue-pastel ">{step.title}</h2>
              {step.hasTip && (
                <button
                  type="button"
                  onClick={() => setShowTip(prev => !prev)}
                  className="text-light-orange hover:text-orange-700 cursor-pointer"
                  aria-label="Show tip"
                >
                  <Lightbulb size={30} />
                </button>
              )}
              {showTip && step.hasTip && (
                <div className="absolute z-10 bg-light-orange border-2 border-orange-700 shadow-lg rounded-lg p-4 lg:pr-5 lg:pt-5 text-left text-sm max-w-md m-2 top-1/2 -translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
                  <button
                    onClick={() => setShowTip(false)}
                    className="cursor-pointer absolute top-2 right-2 text-white"
                    aria-label="Close tip"
                  >
                    <X size={20} />
                  </button>
                  <p className="text-white mt-2">{step.tip}</p>
                </div>
              )}
            </div>
          )}
          {step.description && <p className="mb-4 text-lg text-gray-500">{step.description}</p>}

          {step.type === "group" && step?.fields?.map((field: Field) => (
            <div key={field.key} className="mb-4">
              <div className="block font-semibold mb-1">{field.title}</div>
              {field.description && <p className="text-sm text-gray-500 mb-1">{field.description}</p>}
              {field.type === "select" ? (
                <select
                  name={field.key}
                  value={getFormValue(field.key)}
                  onChange={(e) => update(field.key, e.target.value)}
                  className="w-full px-4 py-2 rounded-2xl border-2 border-light-orange text-center text-base select-placeholder"
                  required={field.required}
                >
                  <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Select an option</option>
                  {field.options?.map((opt: string) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  name={field.key}
                  type={field.type}
                  value={getFormValue(field.key)}
                  placeholder={field.placeholder}
                  onChange={(e) => update(field.key, e.target.value)}
                  className="w-full px-4 py-2 rounded-2xl border-2 border-light-orange text-center text-base"
                  required={field.required}
                />
              )}
            </div>
          ))}

          {step.type === "select" && (
            <select
              name={step.key}
              value={getFormValue(step.key)}
              onChange={(e) => update(step.key, e.target.value)}
              className="w-full px-4 py-2 rounded-2xl border-2 border-light-orange text-center text-base select-placeholder"            >
              <option value="" className="text-[oklch(0.6898 0.0014 286.36)]">Seleciona uma opção</option>
              {step.options?.map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          )}

          {step.type === 'radio' && (
            <div className="grid gap-3">
              {step.options?.map((opt) => (
                <label
                  key={opt}
                  className="relative flex-none cursor-pointer"
                >
                  <input
                    name={step.key}
                    type="radio"
                    value={opt}
                    checked={form[step.key as keyof CreateCampaignAnswers] === opt}
                    onChange={(e) => update(step.key, e.target.value)} className="peer hidden"
                  />
                  <div className="border-2 border-light-orange rounded-2xl px-4 py-2 transition-colors peer-checked:bg-light-orange hover:bg-light-orange active:bg-light-orange text-black hover:text-white">
                    {opt}
                  </div>
                </label>
              ))}
            </div>
          )}
          {step.type === "textarea" && (
            <textarea
              name={step.key}
              value={getFormValue(step.key)}
              onChange={(e) => update(step.key, e.target.value)}
              className="w-full px-4 py-2 rounded-2xl border-2 border-light-orange text-center text-base"
              maxLength={step.maxLength}
              placeholder={step.placeholder}
            />
          )}

          {step.type === "number" && (
            <input
              name={step.key}
              type="number"
              value={getFormValue(step.key)}
              onChange={(e) => update(step.key, e.target.value)}
              className="w-full px-4 py-2 rounded-2xl border-2 border-light-orange text-center text-base"
              placeholder={step.placeholder}
            />
          )}

          <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
            <button
              onClick={() => {
                setCurrentIndex(i => Math.max(0, i - 1))
                setShowTip(false)
              }}
              disabled={currentIndex === 0}
              className="flex items-center gap-2 cursor-pointer text-dark-orange hover:text-orange-600 active:text-orange-600 font-semibold text-xl text-shadow-lg disabled:opacity-30"
            >
              <ChevronLeft strokeWidth={3} /> Previous
            </button>
            <span>
              {currentIndex + 1}/{createCampaignQuestions.length}
            </span>
            {currentIndex === createCampaignQuestions.length - 1 ? (
              <button
                disabled={nextDisabled()}
                onClick={() => {
                  setCurrentIndex(i => i + 1)
                  setShowTip(false)
                }}
                className="flex items-center gap-2 cursor-pointer text-dark-orange hover:text-orange-600 active:text-orange-600 font-semibold text-xl text-shadow-lg disabled:opacity-30"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => {
                  setCurrentIndex(i => Math.min(createCampaignQuestions.length - 1, i + 1))
                  setShowTip(false)
                }}
                disabled={nextDisabled()}
                className="flex items-center gap-2 cursor-pointer text-dark-orange hover:text-orange-600 active:text-orange-600 font-semibold text-xl text-shadow-lg disabled:opacity-30"
              >
                Next <ChevronRight strokeWidth={3} />
              </button>
            )}
          </div>
        </>
      ) : (
        <div>
          <SignupForm />
        </div>
      )}
    </div>
  );
}