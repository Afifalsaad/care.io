"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded transition-all">
      {theme === "dark" ? (
        <>
          <Sun className="h-6 w-6" />
        </>
      ) : (
        <>
          <Moon className="h-6 w-6" />
        </>
      )}
    </button>
  );
}
