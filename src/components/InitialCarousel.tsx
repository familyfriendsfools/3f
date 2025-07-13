"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BaseQuestions = [
    {
        question: "What is your main motivation to become an entrepreneur?",
        key: "motivation",
        options: [
            "Immediate financial security",
            "Fulfilling a personal dream",
            "Making a positive impact on society",
            "Growing and scaling quickly"
        ]
    },
    {
        question: "What is your biggest current challenge?",
        key: "challenge",
        options: [
            "Turning your idea into a viable product",
            "Finding and retaining first customers",
            "Organizing internal processes and team",
            "Scaling to new markets quickly"
        ]
    },
    {
        question: "How many paying customers do you already have?",
        key: "customers",
        options: [
            "None",
            "Up to 10",
            "Between 10 and 100",
            "Hundreds or thousands"
        ]
    },
    {
        question: "What stage is your solution currently at?",
        key: "stage",
        options: [
            "Just a concept/idea",
            "Initial MVP or prototype in testing",
            "Validated product with first paying customers",
            "Established operations, aiming for strong growth"
        ]
    }
];

export default function InitialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const router = useRouter();

    const current = BaseQuestions[currentIndex];

    const handleSelect = (option: string) => {
        const nextAnswers = { ...answers, [current.key]: option };
        setAnswers(nextAnswers);

        setCurrentIndex((i) => i + 1); // Avança mesmo se for a última
    };


    const handleStartCampaign = () => {
        router.push("/createCampaign");
    };

    return (
        <div className="p-8 max-w-xl mx-auto text-center min-h-[80vh] flex flex-col justify-center">
            {currentIndex < BaseQuestions.length ? (
                <>
                    <h2 className="text-xl font-semibold mb-4">{current.question}</h2>

                    <div className="grid gap-3">
                        {current.options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSelect(opt)}
                                className="border p-3 rounded hover:bg-orange-500 hover:text-white transition"
                            >
                                {String.fromCharCode(65 + idx)}. {opt}
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-between mt-6 text-sm text-gray-600">
                        <button
                            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                            disabled={currentIndex === 0}
                            className="text-blue-600 disabled:opacity-30"
                        >
                            <ArrowLeft size={16} className="inline" /> Previous
                        </button>
                        <span>
              {currentIndex + 1}/{BaseQuestions.length}
            </span>
                        <button
                            onClick={() =>
                                setCurrentIndex((i) =>
                                    Math.min(BaseQuestions.length - 1, i + 1)
                                )
                            }
                            disabled={currentIndex === BaseQuestions.length - 1}
                            className="text-blue-600 disabled:opacity-30"
                        >
                            Next <ArrowRight size={16} className="inline" />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-bold text-orange-600 mb-6">
                        You’re ready to launch!
                    </h2>
                    <p className="mb-4">Thank you for completing the questionnaire.</p>
                    <button
                        onClick={handleStartCampaign}
                        className="bg-[#ff9800] hover:bg-orange-600 text-white px-6 py-3 rounded shadow-lg text-lg"
                    >
                        🚀 Let’s Start Your Campaign
                    </button>
                </>
            )}
        </div>
    );
}
