"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { createLeadAction } from "@/actions/lead";

type Answer = { label: string; value: number };
type Q = { id: string; question: string; section: string; answers: Answer[] };
type Profile = "dreamer" | "builder" | "hustler" | "strategist" | "sage";

const QUESTIONS: Q[] = [
  {
    id: "q1", section: "Vision & Strategy", question: "How clearly defined is your business idea or product?", answers: [
      { label: "Still floating", value: 1 }, { label: "Somewhat structured", value: 2 },
      { label: "Defined & focused", value: 3 }, { label: "Clear plan & roadmap", value: 4 },
    ]
  },
  {
    id: "q2", section: "Vision & Strategy", question: "How confident are you about where your business will be in one year?", answers: [
      { label: "No clue", value: 1 }, { label: "Some ideas", value: 2 },
      { label: "Measurable goals", value: 3 }, { label: "Reviewed roadmap", value: 4 },
    ]
  },
  {
    id: "q3", section: "Market Validation", question: "Have you tested your idea with real people?", answers: [
      { label: "Not yet", value: 1 }, { label: "A few friends", value: 2 },
      { label: "Early tests/sales", value: 3 }, { label: "Paying customers", value: 4 },
    ]
  },
  {
    id: "q4", section: "Market Validation", question: "How well do you understand your competitors?", answers: [
      { label: "Haven't looked", value: 1 }, { label: "Know some", value: 2 },
      { label: "Mapped key ones", value: 3 }, { label: "Clear differentiation", value: 4 },
    ]
  },
  {
    id: "q5", section: "Operations & Finances", question: "How do you currently manage your finances?", answers: [
      { label: "Chaos", value: 1 }, { label: "Rough notes", value: 2 },
      { label: "Basic tools", value: 3 }, { label: "Accounting system", value: 4 },
    ]
  },
  {
    id: "q6", section: "Operations & Finances", question: "Do you have processes to keep things running smoothly?", answers: [
      { label: "Improvise", value: 1 }, { label: "Notes/checklists", value: 2 },
      { label: "Some systems", value: 3 }, { label: "Organized workflows", value: 4 },
    ]
  },
  {
    id: "q7", section: "Operations & Finances", question: "Is your business model scalable?", answers: [
      { label: "Depends on me", value: 1 }, { label: "Possibly", value: 2 },
      { label: "Partially scalable", value: 3 }, { label: "Fully designed for growth", value: 4 },
    ]
  },
  {
    id: "q8", section: "Team & Network", question: "Who helps you in your venture?", answers: [
      { label: "Solo", value: 1 }, { label: "Friends/family", value: 2 },
      { label: "Collaborators", value: 3 }, { label: "Solid team", value: 4 },
    ]
  },
  {
    id: "q9", section: "Team & Network", question: "Do you have the right mix of skills on your team?", answers: [
      { label: "Not yet", value: 1 }, { label: "Few contacts", value: 2 },
      { label: "Skilled collaborators", value: 3 }, { label: "Strong team", value: 4 },
    ]
  },
  {
    id: "q10", section: "Mindset & Influence", question: "When challenges hit, you…", answers: [
      { label: "Panic", value: 1 }, { label: "Recover slowly", value: 2 },
      { label: "Reflect & adapt", value: 3 }, { label: "Push through", value: 4 },
    ]
  },
  {
    id: "q11", section: "Mindset & Influence", question: "How comfortable are you networking?", answers: [
      { label: "Avoid it", value: 1 }, { label: "Try sometimes", value: 2 },
      { label: "Good connections", value: 3 }, { label: "Natural networker", value: 4 },
    ]
  },
  {
    id: "q12", section: "Mindset & Influence", question: "How influential are you when sharing ideas?", answers: [
      { label: "Struggle", value: 1 }, { label: "Somewhat convincing", value: 2 },
      { label: "Engaging", value: 3 }, { label: "Inspiring", value: 4 },
    ]
  },
  {
    id: "q13", section: "Mindset & Influence", question: "How would you rate your technical or professional skills?", answers: [
      { label: "Beginner", value: 1 }, { label: "Competent enough", value: 2 },
      { label: "Confident", value: 3 }, { label: "Expert", value: 4 },
    ]
  },
  {
    id: "q14", section: "Mindset & Influence", question: "How confident are you in asking for help or funding?", answers: [
      { label: "Awkward", value: 1 }, { label: "Shy but willing", value: 2 },
      { label: "Comfortable with a plan", value: 3 }, { label: "Confident and proactive", value: 4 },
    ]
  },
];

function getProfile(score: number): Profile {
  if (score <= 26) return "dreamer";
  if (score <= 34) return "builder";
  if (score <= 44) return "hustler";
  if (score <= 53) return "strategist";
  return "sage";
}

const PROFILE_META: Record<Profile, {
  title: string;
  colorFrom: string; colorTo: string;
  textColor: string;
  avatar: string;
  description: string;
  pdf: string;
}> = {
  dreamer: {
    title: "Dreamer",
    colorFrom: "#5B5FC7", colorTo: "#B1B4F5", textColor: "#ffffff",
    avatar: "/assessment/moon-phases.svg",
    description:
      "Imaginative, curious, and full of potential — you're a visionary at the idea stage. You see opportunities where others see gaps, and your mind is always crafting “what if” scenarios. Your challenge isn't creativity — it's focus and follow-through.",
    pdf: "/assessment/dreamer_profile.pdf",
  },
  builder: {
    title: "Builder",
    colorFrom: "#FBB13C", colorTo: "#FFE0B0", textColor: "#1a1a1a",
    avatar: "/assessment/tools-wrench.svg",
    description:
      "You're hands-on, practical, and learning fast by doing. You've moved from “what if” to “let's build it.” You thrive on momentum and love seeing things come to life — but systems and structure are still catching up to your ambition.",
    pdf: "/assessment/builder_profile.pdf",
  },
  hustler: {
    title: "Hustler",
    colorFrom: "#E4572E", colorTo: "#F3A490", textColor: "#ffffff",
    avatar: "/assessment/thunder.svg",
    description:
      "Dynamic, bold, and unafraid of the grind — you're gaining traction fast. You make things happen through energy and determination. The danger? Becoming the bottleneck of your own business.",
    pdf: "/assessment/hustler_profile.pdf",
  },
  strategist: {
    title: "Strategist",
    colorFrom: "#00A6A6", colorTo: "#9FE3E3", textColor: "#063b3b",
    avatar: "/assessment/owl.svg",
    description:
      "Analytical and deliberate, you think in frameworks and numbers. You've built a foundation and now focus on sustainable growth. You're comfortable with complexity and ready to expand — but sometimes analysis slows your action.",
    pdf: "/assessment/strategist_profile.pdf",
  },
  sage: {
    title: "Sage",
    colorFrom: "#E5C07B", colorTo: "#0A0E27", textColor: "#ffffff",
    avatar: "/assessment/crystal-ball.svg",
    description:
      "Seasoned and insightful, you've walked the path — maybe more than once. You now find fulfillment in guiding others, sharing wisdom, or investing in new generations of founders. Your legacy lies in multiplying your impact.",
    pdf: "/assessment/sage_profile.pdf",
  },
};

export default function AssessmentQuiz() {
  const OPEN_INDEX = QUESTIONS.length;
  const EMAIL_INDEX = QUESTIONS.length + 1;
  const LAST_INDEX = EMAIL_INDEX;

  const [index, setIndex] = useState(0);
  const [radioAnswers, setRadioAnswers] = useState<Record<string, number>>({});
  const [openText, setOpenText] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const progressPct = useMemo(() => Math.round(((index) / (LAST_INDEX + 1)) * 100), [index, LAST_INDEX]);

  const current = index < QUESTIONS.length ? QUESTIONS[index] : null;

  const canNext = useMemo(() => {
    if (index < QUESTIONS.length) {
      return typeof radioAnswers[QUESTIONS[index].id] === "number";
    }
    if (index === OPEN_INDEX) return true; // optional
    if (index === EMAIL_INDEX) return /\S+@\S+\.\S+/.test(email);
    return false;
  }, [index, radioAnswers, email]);

  const score = useMemo(
    () => Object.values(radioAnswers).reduce((a, b) => a + (b || 0), 0),
    [radioAnswers]
  );
  const profile = submitted ? getProfile(score) : null;
  const meta = profile ? PROFILE_META[profile] : null;

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-2xl flex-col justify-center px-4 py-8">
      {!submitted ? (
        <div className="text-center">
          <div className="mb-6">
            <div className="mb-2 text-sm text-gray-600">Progress: {progressPct}%</div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-dark-orange transition-[width]"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {index < QUESTIONS.length && current && (
            <>
              <div className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                {current.section}
              </div>
              <h2 className="mb-5 font-body text-xl font-semibold text-dark-orange">
                {`Q${index + 1}. ${current.question}`}
              </h2>

              <div className="grid gap-3">
                {current.answers.map((a) => {
                  const checked = radioAnswers[current.id] === a.value;
                  return (
                    <label key={a.label} className="block">
                      <input
                        type="radio"
                        name={current.id}
                        value={a.value}
                        checked={checked}
                        onChange={() =>
                          setRadioAnswers((s) => ({ ...s, [current.id]: a.value }))
                        }
                        className="peer hidden"
                      />
                      <div className={`rounded-2xl border-2 px-4 py-3 text-center cursor-pointer transition
                        ${checked ? "border-dark-orange bg-dark-orange text-white" : "border-dark-orange hover:bg-dark-orange/10"}
                      `}>
                        {a.label}
                      </div>
                    </label>
                  );
                })}
              </div>
            </>
          )}

          {index === OPEN_INDEX && (
            <>
              <div className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                Reflection
              </div>
              <h2 className="mb-3 font-body text-xl font-semibold text-dark-orange">
                What’s your biggest current challenge? (optional)
              </h2>
              <textarea
                value={openText}
                onChange={(e) => setOpenText(e.target.value)}
                rows={5}
                placeholder="Type your thoughts here…"
                className="w-full rounded-2xl border-2 border-dark-orange p-3"
              />
            </>
          )}

          {index === EMAIL_INDEX && (
            <>
              <div className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                Receive your profile & tips
              </div>
              <h2 className="mb-3 font-body text-xl font-semibold text-dark-orange">
                Share your email to receive your profile & tips
              </h2>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border-2 border-dark-orange p-3 text-center"
                autoComplete="email"
                required
              />
            </>
          )}

          <div className="mt-6 flex items-center justify-between text-sm text-gray-700">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="cursor-pointer flex items-center gap-2 font-semibold text-orange-800 hover:text-orange-600 disabled:opacity-30"
            >
              <ChevronLeft strokeWidth={3} /> Back
            </button>

            <span className="text-gray-500">
              {Math.min(index + 1, LAST_INDEX + 1)}/{LAST_INDEX + 1}
            </span>

            {index === LAST_INDEX ? (
              <button
                disabled={!canNext}
                onClick={async () => {
                  const profileSlug = getProfile(score);

                  await createLeadAction({
                    email,
                    profile: profileSlug,
                    challenge: openText || undefined,
                    score,
                    source: "venture-assessment",
                    answers: QUESTIONS.map((q) => ({
                      question: q.question,
                      answer: q.answers.find(a => a.value === radioAnswers[q.id])?.label || "",
                      value: radioAnswers[q.id],
                    })),
                  });

                  setSubmitted(true);
                }}
                className="cursor-pointer flex items-center gap-2 rounded-full bg-dark-orange px-5 py-2 font-semibold text-white hover:bg-orange-600 disabled:opacity-30"
              >
                See my profile <ChevronRight strokeWidth={3} />
              </button>
            ) : (
              <button
                disabled={!canNext}
                onClick={() => setIndex((i) => Math.min(LAST_INDEX, i + 1))}
                className="cursor-pointer flex items-center gap-2 rounded-full bg-dark-orange px-5 py-2 font-semibold text-white hover:bg-orange-600 disabled:opacity-30"
              >
                Next <ChevronRight strokeWidth={3} />
              </button>
            )}
          </div>
        </div>
      ) : (
        <section className="mx-auto w-full max-w-3xl">
          {meta && (
            <div
              className="relative overflow-hidden rounded-3xl p-6 md:p-8"
              style={{
                backgroundImage: `linear-gradient(135deg, ${meta.colorFrom} 0%, ${meta.colorTo} 100%)`,
                color: meta.textColor,
              }}
            >
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <div className="mb-2 text-sm opacity-80">Your founder profile</div>
                  <h2 className="text-2xl font-semibold md:text-3xl">
                    You're a {meta.title}!
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed md:text-base">{meta.description}</p>
                </div>

                <div className="shrink-0">
                  <Image
                    src={meta.avatar}
                    alt={`${meta.title} avatar`}
                    width={120}
                    height={120}
                    className="drop-shadow-xl"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={meta.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur-sm hover:bg-white/30"
                >
                  <Download size={18} />
                  Open full report (PDF)
                </a>
                <a
                  href={meta.pdf}
                  download={`${meta.title.replace(/\s+/g, "-")}.pdf`}
                  className="inline-flex items-center gap-2 rounded-full bg-black/30 px-5 py-2 text-white hover:bg-black/40"
                >
                  <Download size={18} />
                  Download
                </a>
              </div>

              <div className="mt-4 text-xs opacity-80">
                Score: <b>{score}</b> · Thanks for taking the quiz!
              </div>
            </div>
          )}

          <div className="mx-auto mt-6 flex max-w-3xl justify-center">
            <button
              onClick={() => {
                setIndex(0);
                setRadioAnswers({});
                setOpenText("");
                setEmail("");
                setSubmitted(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="cursor-pointer flex items-center gap-2 text-orange-800 hover:text-orange-600"
            >
              <ChevronLeft strokeWidth={3} /> Take the quiz again
            </button>
          </div>
        </section>
      )}
    </main>
  );
}