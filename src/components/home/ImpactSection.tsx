"use client";

import React from "react";
import { TrendingUp, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ImpactSection: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const impactMetrics = [
    {
      value: "2,500+",
      labelEn: "FARMERS & DAIRIES ASSISTED",
      labelHi: "फार्मर्स & डेयरी जुड़े",
      icon: HeartHandshake,
    },
    {
      value: "450+",
      unit: "TONS",
      labelEn: "ORGANIC FODDER HARVESTED",
      labelHi: "अजोला & नेपियर पैदावार",
      icon: TrendingUp,
    },
    {
      value: "120+",
      unit: "TONS",
      labelEn: "GOURMET MUSHROOMS PRODUCED",
      labelHi: "ऑयस्टर मशरूम पैदावार",
      icon: Award,
    },
    {
      value: "100%",
      labelEn: "ORGANIC TOP SOIL CERTIFIED",
      labelHi: "ऑर्गेनिक सोइल सर्टिफाइड",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-6 bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest shadow-glow">
            <span>{isHindi ? "मेज़रेबल इम्पैक्ट" : "MEASURABLE IMPACT"}</span>
          </div>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-none">
            {isHindi ? "इम्पैक्ट जो " : "IMPACT "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
              {isHindi ? "हर दिन बढ़ता है" : "THAT GROWS."}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isHindi
              ? "JAS एग्रो प्रिसिजन टेक्नोलॉजी और ऑर्गेनिक मॉडल्स से हासिल किए गए रियल रिजल्ट्स।"
              : "Verifiable agriculture metrics achieved through JAS Agro precision technology and organic cultivation."}
          </p>
        </div>

        {/* Editorial Impact Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((item, idx) => {
            const IconComp = item.icon;
            const label = isHindi ? item.labelHi : item.labelEn;

            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 shadow-glass hover:shadow-glow-emerald transition-all duration-300 space-y-3 group hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  {item.unit && (
                    <span className="text-[10px] font-mono font-bold text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-500/40">
                      {item.unit}
                    </span>
                  )}
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.value}
                </div>

                <div className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 tracking-wider uppercase leading-snug">
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
