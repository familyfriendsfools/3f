"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function HotkeyRedirect({ hotkey = "j", to = "/demo" }: { hotkey?: string; to?: string }) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
      if (isTyping) return;

      if (e.key.toLowerCase() === hotkey.toLowerCase()) {
        e.preventDefault();
        router.push(to);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hotkey, to, router]);

  return null;
}