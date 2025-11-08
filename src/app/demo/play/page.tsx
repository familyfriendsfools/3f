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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (key === "escape" || key === "d") {
        router.push("/demo");
      }

      if (key === " " || key === "p") {
        e.preventDefault(); // stop page scroll
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
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <main className="relative h-dvh w-dvw overflow-hidden bg-black">
      <video
        ref={videoRef}
        src="https://ujhnvqbnflcpiwdq.public.blob.vercel-storage.com/3f-mvp-demo-4k.mp4"
        autoPlay
        muted={muted}
        loop
        playsInline
        className="h-full w-full object-cover"
      />

      {muted && (
        <button
          onClick={() => {
            if (!videoRef.current) return;
            videoRef.current.muted = false;
            videoRef.current.play();
            setMuted(false);
          }}
          className="absolute bottom-6 left-6 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-black hover:bg-white"
        >
          🔊 Enable sound
        </button>
      )}

      <div className="absolute bottom-6 right-6 text-xs text-white/80">
        <span className="mr-3">
          <kbd className="rounded border border-white/40 px-1">Space</kbd> /{" "}
          <kbd className="rounded border border-white/40 px-1">P</kbd> pause/play
        </span>
        <kbd className="rounded border border-white/40 px-1">Esc</kbd> exit
      </div>

      {showIcon && (
        <div className="absolute inset-0 flex items-center justify-center text-7xl text-white/90 drop-shadow-lg">
          {paused ? <Pause size={72} /> : <Play size={72} />}
        </div>
      )}
    </main>
  );
}