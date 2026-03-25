"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 dark:bg-white/10 p-2 text-gray-800 dark:text-white border border-black/10 dark:border-white/20 shadow-sm transition-colors hover:bg-black/10 dark:hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 dark:-rotate-90 dark:scale-0 transition-all text-orange-500 dark:text-white" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all text-blue-400" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
