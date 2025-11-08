"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Pause, Play } from "lucide-react";

export default function DemoPlayPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [paused, setPaused] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [muted, setMuted] = useState(true);
  const [fit, setFit] = useState<"cover" | "contain">("cover");

  useEffect(() => {
    const setVH = () => {
      const vh = (window.visualViewport?.height ?? window.innerHeight) * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVH();
    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", setVH);
    return () => {
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);
    };
  }, []);

  useEffect(() => {
    const decide = () => setFit(window.innerWidth < 768 ? "contain" : "cover");
    decide();
    window.addEventListener("resize", decide);
    return () => window.removeEventListener("resize", decide);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (key === "escape" || key === "d") {
        router.push("/demo");
      }

      if (key === " " || key === "p") {
        e.preventDefault();
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
          videoRef.current.play();
          setPaused(false);
        } else {
          videoRef.current.pause();
          setPaused(true);
        }
        setShowIcon(true);
        setTimeout(() => setShowIcon(false), 800);
      }

      if (key === "f") {
        setFit((f) => (f === "cover" ? "contain" : "cover"));
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
    setShowIcon(true);
    setTimeout(() => setShowIcon(false), 800);
  };

  return (
    <main
      // fill visual viewport with safe-area padding
      className="relative w-dvw overflow-hidden bg-black"
      style={{
        height: "calc(var(--vh, 1vh) * 100)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <video
        ref={videoRef}
        src="https://ujhnvqbnflcpiwdq.public.blob.vercel-storage.com/3f-mvp-demo-4k.mp4"
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} select-none`}
        // iOS sometimes needs an explicit play() once ready
        onCanPlay={() => {
          videoRef.current?.play().catch(() => { });
        }}
        onClick={togglePlay}
      />

      {muted && (
        <button
          onClick={() => {
            const v = videoRef.current;
            if (!v) return;
            v.muted = false;
            v.play().catch(() => { });
            setMuted(false);
          }}
          className="absolute left-6 bottom-6 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-black hover:bg-white"
          style={{ transform: "translateZ(0)" }}
        >
          🔊 Enable sound
        </button>
      )}

      <button
        onClick={() => setFit((f) => (f === "cover" ? "contain" : "cover"))}
        className="absolute left-6 bottom-6 translate-y-[-52px] rounded-full bg-white/70 px-3 py-1.5 text-xs font-medium text-black hover:bg-white"
        aria-label="Toggle fit"
      >
        Fit: {fit === "cover" ? "Cover" : "Contain"} (F)
      </button>

      {/* Hints */}
      <div className="absolute right-6 bottom-6 text-xs text-white/80">
        <span className="mr-3">
          <kbd className="rounded border border-white/40 px-1">Space</kbd> /{" "}
          <kbd className="rounded border border-white/40 px-1">P</kbd> pause/play ·{" "}
          <kbd className="rounded border border-white/40 px-1">F</kbd> fit
        </span>
        <kbd className="rounded border border-white/40 px-1">Esc</kbd> exit
      </div>

      {/* Play/Pause feedback */}
      {showIcon && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-white/90 drop-shadow-lg">
          <div className="rounded-full bg-black/40 p-4">
            {paused ? <Pause size={56} /> : <Play size={56} />}
          </div>
        </div>
      )}
    </main>
  );
}