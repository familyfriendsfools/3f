"use client";
import { JSX, useState } from "react";
import { QuestionI } from "@/lib/types";
import { ElementTypeE, QuestionE } from "@/lib/enums";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import Details from "@/components/campaign/details";
import DetailsPreview from "@/components/DetailsPreview";
import { formAtom } from "@/state";
import { useAtom } from "jotai";

export default function QuestionCarousel() {
    const [form, setForm] = useAtom(formAtom);
    const [userCampaign, setUserCampaign] = useState<Record<string, any>>({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPreview, setIsPreview] = useState(false);

    const BaseQuestions: (QuestionI | { component: JSX.Element })[] = [
        {
            question: "How do you describe your Campaign?",
            key: "campaignType",
            options: ["Industry / Manufacturing", "Commerce", "Services"],
            children: {
                "Industry / Manufacturing": {
                    question: "Within Industry, what do you manufacture?",
                    key: "campaignSubType",
                    options: ["Cosmetics", "Clothing", "Furniture", "Automobiles", "Electronic equipment", "Others"],
                },
                "Commerce": {
                    question: "Within Commerce, what do you sell?",
                    key: "campaignSubType",
                    options: ["Clothing", "Medicines", "Cosmetics, health and beauty", "Food", "Drinks", "Hardware", "Others"],
                },
                "Services": {
                    question: "Within Services, what do you provide?",
                    key: "campaignSubType",
                    options: ["Hotels, tourism", "Wellness", "Psychology", "Law", "Dentistry", "Consulting", "Laundry", "Tattoos", "Education", "Others"],
                },
            },
        },
        {
            question: "Set a goal!",
            key: "goal",
            elementType: QuestionE.input,
            type: ElementTypeE.numeric,
            placeholder: "5000 €"
        },
        {
            question: "How much time will you take to pay back the loan? (months)",
            key: "timeToPayBack",
            elementType: QuestionE.input,
            type: ElementTypeE.numeric,
            placeholder: "24"
        },
        {
            question: "Payback plan?",
            key: "paybackPlan",
            options: ["Weekly", "Biweekly", "Monthly", "Yearly"],
        },
        {
            // {
            //   component: <LoginForm />,
            // },
        },
        {
            component: <Details />,
        },
    ];

    const [questions, setQuestions] = useState(BaseQuestions);
    const currentItem = questions[currentIndex];

    const goToNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleOptionSelect = (option: string) => {
        if ("key" in currentItem) {
            setForm((prev) => ({
                ...prev,
                [currentItem.key as string]: option,
            }));
            setUserCampaign((prev) => ({
                ...prev,
                [currentItem.key as string]: option,
            }));
        }

        if ("children" in currentItem && currentItem.children && currentItem.children?.[option]) {
            const child = {
                ...currentItem.children[option],
                key: "campaignSubType",
            };

            setQuestions((prev) => {
                const newQuestions = [...prev];
                const existingIndex = newQuestions.findIndex(
                    (q, i) => i > currentIndex && "key" in q && q.key === "campaignSubType"
                );
                if (existingIndex !== -1) {
                    newQuestions.splice(existingIndex, 1);
                }
                newQuestions.splice(currentIndex + 1, 0, child);
                return newQuestions;
            });
        }

        goToNext();
    };

    return (
        <div>
            <div className="max-w-2xl mx-auto p-4 h-[80vh] flex flex-col justify-center items-center">
                {"component" in currentItem ? (
                    isPreview && currentIndex === questions.length - 1 ? (
                        <DetailsPreview
                            data={form}
                            onEdit={() => setIsPreview(false)}
                        />
                    ) : (
                        <>
                            {currentItem.component}
                            {currentIndex === questions.length - 1 && (
                                <button
                                    onClick={() => setIsPreview(true)}
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Preview
                                </button>
                            )}
                        </>
                    )
                ) : (
                    <>
                        <h3 className="mb-4 text-lg font-semibold">
                            {currentItem.question}
                        </h3>

                        {currentItem.elementType === QuestionE.input ? (
                            <div>
                                <input
                                    type={currentItem.type ?? ElementTypeE.text}
                                    placeholder={currentItem.placeholder ?? "Enter your answer"}
                                    value={form[currentItem.key]}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setForm((prev) => ({
                                            ...prev,
                                            [currentItem.key as string]: value,
                                        }));
                                        setUserCampaign((prev) => ({
                                            ...prev,
                                            [currentItem.key as string]: value,
                                        }));
                                    }}
                                    className="border p-2 rounded w-full mb-2"
                                />
                            </div>
                        ) : (
                            <div className="flex flex-wrap gap-2 justify-center">
                                {currentItem.options?.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(opt)}
                                        className="border p-2 rounded hover:bg-orange-500 text-black hover:text-white transition-colors duration-200"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Navegação */}
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={goToPrevious}
                    disabled={currentIndex === 0}
                    className="text-sm flex items-center gap-1 text-blue-600 disabled:opacity-30"
                >
                    <ArrowLeft size={16} /> Previous
                </button>
                <span className="text-gray-500 text-sm">
                    {currentIndex + 1}/{questions.length}
                </span>
                <button
                    onClick={goToNext}
                    disabled={currentIndex === questions.length - 1}
                    className="text-sm flex items-center gap-1 text-blue-600 disabled:opacity-30"
                >
                    Next <ArrowRight size={16} />
                </button>
            </div>

            {/* DEBUG: userCampaign */}
            <div className="max-w-2xl mx-auto p-4 text-xs text-gray-600 bg-gray-100 rounded">
                <strong>Debug userCampaign:</strong>
                <pre>{JSON.stringify(userCampaign, null, 2)}</pre>
            </div>
        </div>
    );
}
