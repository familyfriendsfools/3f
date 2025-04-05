"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for page navigation

const questions = [
    {
        question: "How do you describe your Campaign?",
        options: ["Industry/Manufacturing", "Commerce", "Services"],
        key: "campaignType",
    },
    {
        question: "Within Commerce, which one do you identify with?",
        options: ["Medicines", "Cosmetics", "Food", "Drinks", "Hardware", "Clothes", "Others"],
        key: "commerceType",
    },
    {
        question: "Set a goal!",
        type: "input",
        key: "goal",
    },
    {
        question: "How much time will you take to pay back the loan?",
        type: "input",
        key: "percentage",
    },
    {
        question: "Payback plan?",
        options: ["Weekly", "Biweekly", "Monthly", "Yearly"],
        key: "paymentPlan",
    },
];

export default function QuestionCarousel() {
    // Track the current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // Store all answers using the question's key
    const [answers, setAnswers] = useState<{ [key: string]: string }>({});
    // Input state for questions that need an input value
    const [inputValue, setInputValue] = useState("");
    const router = useRouter(); // Initialize useRouter

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionSelect = (option: string) => {
        setAnswers({
            ...answers,
            [currentQuestion.key]: option,
        });
        goToNextQuestion();
    };

    const handleInputSubmit = () => {
        if (inputValue.trim() === "") return;
        setAnswers({
            ...answers,
            [currentQuestion.key]: inputValue,
        });
        setInputValue("");
        goToNextQuestion();
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // After the last question, navigate to the login page
            router.push("/login");
        }
    };

    const renderQuestion = () => {
        if (currentQuestion.type === "input") {
            // Set the placeholder text conditionally based on the question key
            const placeholder =
                currentQuestion.key === "percentage" ? "%" : "Enter your goal";
            return (
                <div>
                    <h3>{currentQuestion.question}</h3>
                    <input
                        type="number"
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <button onClick={handleInputSubmit} className="ml-2 border p-2 rounded">
                        Submit
                    </button>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>{currentQuestion.question}</h3>
                    {currentQuestion.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleOptionSelect(option)}
                            className="mr-2 my-1 border p-2 rounded"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            );
        }
    };

    return (
        <div>
            {currentQuestionIndex < questions.length ? (
                renderQuestion()
            ) : (
                <div>
                    <h3>All questions answered!</h3>
                    <pre>{JSON.stringify(answers, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
