"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — next-themes needs client mount before reading theme
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // placeholder to prevent layout shift
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-9 h-9 flex items-center justify-center rounded-full
                 border border-black/10 dark:border-white/10
                 hover:border-glow-blue/50 transition-colors duration-300
                 dark:hover:shadow-[0_0_15px_rgba(59,167,255,0.4)]"
    >
      {isDark ? (
        <Sun size={18} className="text-glow-blue" />
      ) : (
        <Moon size={18} className="text-black/70" />
      )}
    </button>
  );
}