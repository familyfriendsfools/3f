"use client";
import {JSX, useState} from "react";
import {QuestionI} from "@/lib/types";
import {ElementTypeE, QuestionE} from "@/lib/enums";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {LoginForm} from "@/components/login-form";
import Details from "@/components/campaign/details";

const questions: (QuestionI | { component: JSX.Element })[] = [
    {
        question: "How do you describe your Campaign?",
        key: "campaignType",
        options: ["Industry / Manufacturing", "Commerce", "Services"],
        children: {
            "Industry / Manufacturing": {
                question: "Within Industry, what do you manufacture?",
                key: "industryType",
                options: ["Cosmetics", "Clothing", "Furniture", "Automobiles", "Electronic equipment", "Others"],
            },
            "Commerce": {
                question: "Within Commerce, what do you sell?",
                key: "commerceType",
                options: ["Clothing", "Medicines", "Cosmetics, health and beauty", "Food", "Drinks", "Hardware", "Others"],
            },
            "Services": {
                question: "Within Services, what do you provide?",
                key: "servicesType",
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
        key: "percentage",
        elementType: QuestionE.input,
        type: ElementTypeE.numeric,
        placeholder: "24"
    },
    {
        question: "Payback plan?",
        key: "paymentPlan",
        options: ["Weekly", "Biweekly", "Monthly", "Yearly"],
    },
    {
        component: <LoginForm/>,
    },
    {
        component: <Details/>,
    },
];

export default function QuestionCarousel() {
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");

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
            setAnswers((prev) => ({...prev, [currentItem.key]: option}));
        }

        // Adiciona pergunta filha se existir
        if ("children" in currentItem && currentItem.children?.[option]) {
            const child = currentItem.children[option];
            questions.splice(currentIndex + 1, 0, child); // insere logo a seguir
        }

        goToNext();
    };

    const handleInputSubmit = () => {
        if (!inputValue.trim() || !("key" in currentItem)) return;

        setAnswers((prev) => ({...prev, [currentItem.key]: inputValue}));
        setInputValue("");
        goToNext();
    };

    return (
        <div>
        <div className="max-w-2xl mx-auto p-4 h-[80vh] flex flex-col justify-center items-center">

            {/* Render pergunta ou componente */}
            {"component" in currentItem ? (
                currentItem.component
            ) : (
                <>
                    <h3 className="mb-4 text-lg font-semibold">{currentItem.question}</h3>

                    {currentItem.elementType === QuestionE.input ? (
                        <div>
                            <input
                                type={currentItem.type ?? ElementTypeE.text}
                                placeholder={currentItem.placeholder ?? "Enter your answer"}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="border p-2 rounded w-full mb-2"
                            />
                            <button onClick={handleInputSubmit} className="w-full bg-blue-600 text-white p-2 rounded bg-orange-500">
                                Submit
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2 justify-center">
                            {currentItem.options?.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(opt)}
                                    className="border p-2 rounded hover:bg-gray-100 bg-orange-500 text-white"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    {/* Navegação */
    }
    <div className="flex justify-between items-center mb-4">
        <button onClick={goToPrevious} disabled={currentIndex === 0}
                className="text-sm flex items-center gap-1 text-blue-600 disabled:opacity-30">
            <ArrowLeft size={16}/> Previous
        </button>
        <span className="text-gray-500 text-sm">
                    {currentIndex + 1}/{questions.length}
                </span>
        <button onClick={goToNext} disabled={currentIndex === questions.length - 1}
                className="text-sm flex items-center gap-1 text-blue-600 disabled:opacity-30">
            Next <ArrowRight size={16}/>
        </button>
    </div>
</div>
)
    ;
}