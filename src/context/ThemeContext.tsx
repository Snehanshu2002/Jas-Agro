"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeType = "light" | "emerald" | "cyan" | "harvest";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isDark: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>("light");

  const applyThemeClass = (targetTheme: ThemeType) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.remove("theme-emerald", "theme-cyan", "theme-light", "theme-harvest", "dark");
    root.classList.add(`theme-${targetTheme}`);
    if (targetTheme !== "light") {
      root.classList.add("dark");
    }
  };

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("jas_agro_theme") as ThemeType;
      if (savedTheme && ["light", "emerald", "cyan", "harvest"].includes(savedTheme)) {
        setThemeState(savedTheme);
        applyThemeClass(savedTheme);
      } else {
        setThemeState("light");
        applyThemeClass("light");
      }
    } catch {
      setThemeState("light");
      applyThemeClass("light");
    }
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("jas_agro_theme", newTheme);
    } catch {
      // safe fallback
    }
    applyThemeClass(newTheme);
  };

  const toggleDarkMode = () => {
    if (theme === "light") {
      setTheme("emerald");
    } else {
      setTheme("light");
    }
  };

  const isDark = theme !== "light";

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
