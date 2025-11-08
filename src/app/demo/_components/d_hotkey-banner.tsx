"use client";

import React from "react";

type HotkeyBannerProps = {
  hotkey?: string;      // default: "g"
  text?: string;        // default: "Let’s start"
};

export function HotkeyBanner({ hotkey = "g", text = "Let's start!" }: HotkeyBannerProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const isTyping =
        t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
      if (isTyping) return;

      if (e.key.toLowerCase() === hotkey.toLowerCase()) setOpen(v => !v);
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hotkey]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-neutral-900/30 backdrop-blur-[1px]"
      aria-live="polite"
      role="dialog"
      aria-label={text}
    >
      <div className="relative h-24 w-[140%] -rotate-35 sm:h-28 md:h-32 lg:h-36">
        <div className="absolute inset-0 -skew-x-6">
          <div className="ribbon-fill absolute inset-0 rounded-md bg-white shadow-xl" />
        </div>

        {/* Text fades in after the unroll */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="ribbon-text select-none text-3xl font-semibold leading-none sm:text-4xl md:text-5xl lg:text-6xl">
            {text}
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 text-xs text-white/80">
        Press <kbd className="rounded border border-white/40 px-1">Esc</kbd> to hide
      </div>

      <style jsx>{`
        /* Unroll animation: grow vertically with a tiny overshoot */
        @keyframes unrollY {
          0%   { transform: scaleX(0.05); opacity: 0; }
          60%  { transform: scaleX(1.05); opacity: 1; }
          100% { transform: scaleX(1); }
        }
        /* Text fade/settle */
        @keyframes popIn {
          0%   { opacity: 0; transform: translateY(6px); filter: blur(2px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .ribbon-fill {
          transform-origin: left;
          animation: unrollY 520ms cubic-bezier(.2,.8,.2,1) both;
        }
        .ribbon-text {
          animation: popIn 340ms ease-out 280ms both; /* delayed so it waits for the unroll */
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .ribbon-fill, .ribbon-text { animation: none !important; }
        }
      `}</style>
    </div>
  );
}