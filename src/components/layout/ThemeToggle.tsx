import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const OPTIONS = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "system", icon: Monitor, label: "System" },
  { value: "dark", icon: Moon, label: "Dark" },
];

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setThemeState] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`inline-flex items-center gap-0.5 rounded-full border border-border bg-surface-2 p-1 ${className}`}>
      {OPTIONS.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => setThemeState(value)}
          aria-label={label}
          title={label}
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors cursor-pointer ${
            theme === value ? "bg-brand text-white" : "text-text-muted hover:text-text"
          }`}
        >
          <Icon size={14} />
        </button>
      ))}
    </div>
  );
}
