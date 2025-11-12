"use client";
import { useEffect, useState } from "react";
import { createLeadAction } from "@/actions/lead";
import Link from "next/link";

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-2xl flex-col justify-center px-4 py-8">
      {!submitted ? (
        <div className="flex flex-col items-center gap-4">
          <h2 className="mb-2 font-body text-2xl uppercase tracking-wider text-gray-500">
            Do you think this might be helpful for you?
          </h2>
          <div className="mb-3 font-body text-xl text-dark-orange">
            Please leave your email - We will only contact you to let you know that the platform is available or to offer you a <strong>free trial!</strong></div>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border-2 border-dark-orange p-3 text-center"
            autoComplete="email"
            required
          />
          <button
            disabled={!(/\S+@\S+\.\S+/.test(email))}
            onClick={async () => {
              await createLeadAction({
                email,
                source: "lead-form",
              });

              setSubmitted(true);
            }}
            className="cursor-pointer w-fit mx-auto rounded-lg bg-dark-orange px-5 py-2 font-semibold text-white hover:bg-orange-600 disabled:opacity-30"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h2 className="mb-2 font-body text-2xl uppercase tracking-wider text-gray-500">
            Thank you for your interest!
          </h2>
          <div className="mb-3 font-body text-xl text-dark-orange text-center">
            We will contact you soon to let you know that the platform is available or to offer you a <strong>free trial!</strong></div>
          <Link href="/quick-links" className="cursor-pointer w-fit mx-auto rounded-lg bg-dark-orange px-5 py-2 font-semibold text-white hover:bg-orange-600 disabled:opacity-30">
            Back to quick links
          </Link>
        </div>
      )}
    </main >
  );
}