"use client";

import React, { useState } from "react";
import { useTheme, ThemeType } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Palette, X, Check, Sun, Moon, Languages } from "lucide-react";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, isDark, toggleDarkMode } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions: { id: ThemeType; nameEn: string; nameHi: string; descEn: string; descHi: string; colors: string[] }[] = [
    {
      id: "emerald",
      nameEn: "Dark Emerald",
      nameHi: "डार्क एमराल्ड",
      descEn: "Original Deep Forest & Gold",
      descHi: "डीप फॉरेस्ट और गोल्ड थीम",
      colors: ["#040e0a", "#10b981", "#f59e0b"],
    },
    {
      id: "cyan",
      nameEn: "Cyber Agri-Tech",
      nameHi: "साइबर एग्री-टेक",
      descEn: "Neon Cyan & Slate Navy",
      descHi: "नियॉन सयान और स्लेट नेवी",
      colors: ["#030712", "#06b6d4", "#38bdf8"],
    },
    {
      id: "light",
      nameEn: "Fresh Forest Light",
      nameHi: "लाइट फ्रेश फ़ॉरेस्ट",
      descEn: "Clean White & Mint Green",
      descHi: "क्लीन व्हाइट और मिंट ग्रीन",
      colors: ["#f4f9f5", "#059669", "#16a34a"],
    },
    {
      id: "harvest",
      nameEn: "Harvest Amber",
      nameHi: "हार्वेस्ट एम्बर",
      descEn: "Warm Terracotta & Gold",
      descHi: "वार्म टेराकोटा और गोल्ड",
      colors: ["#0f0d0b", "#f59e0b", "#ea580c"],
    },
  ];

  return (
    <div className="fixed bottom-20 left-6 z-50">
      {isOpen ? (
        <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/20 rounded-3xl p-5 shadow-2xl space-y-4 max-w-xs animate-fadeIn text-slate-900 dark:text-white transition-colors duration-300">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
            <div className="flex items-center gap-2 text-sm font-bold font-heading text-slate-900 dark:text-white">
              <Palette className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> {t("changeTheme")}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg bg-slate-100 dark:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Mode & Language Toggles */}
          <div className="grid grid-cols-2 gap-2 pb-1">
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-900 dark:text-white transition-all shadow-sm"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500" /> {t("lightMode")}
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-700" /> {t("darkMode")}
                </>
              )}
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-900 dark:text-white transition-all shadow-sm"
            >
              <Languages className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              {language === "en" ? "हिंदी" : "English"}
            </button>
          </div>

          <div className="space-y-2">
            {themeOptions.map((opt) => {
              const isSelected = theme === opt.id;
              const name = language === "hi" ? opt.nameHi : opt.nameEn;
              const desc = language === "hi" ? opt.descHi : opt.descEn;

              return (
                <button
                  key={opt.id}
                  onClick={() => setTheme(opt.id)}
                  className={`w-full p-3 rounded-2xl text-left border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-emerald-50 dark:bg-white/15 border-emerald-500 shadow-sm"
                      : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      {name}
                      {isSelected && <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">{desc}</div>
                  </div>

                  <div className="flex items-center gap-1">
                    {opt.colors.map((c, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-sm"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-amber-500 text-slate-950 font-extrabold text-xs shadow-glow hover:scale-105 transition-all flex items-center gap-2 border border-white/30"
          aria-label="Toggle Color Theme"
        >
          <Palette className="w-4 h-4" /> {t("changeTheme")}
        </button>
      )}
    </div>
  );
};
