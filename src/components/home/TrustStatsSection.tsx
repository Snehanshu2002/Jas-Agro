"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const TrustStatsSection: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const stats = [
    { value: "2,500+", labelEn: "FARMERS & DAIRIES EMPOWERED", labelHi: "फार्मर्स & डेयरी फार्म्स जुड़े" },
    { value: "450+", unit: "TONNES", labelEn: "OF AZOLLA & NAPIER HARVESTED", labelHi: "अजोला & नेपियर ग्रीन फॉडर" },
    { value: "120+", unit: "TONNES", labelEn: "OF GOURMET MUSHROOMS PRODUCED", labelHi: "ऑयस्टर मशरुम्स यील्ड" },
    { value: "35%", labelEn: "CARBON & ECO FOOTPRINT SAVED", labelHi: "इको फुटप्रिंट & कार्बन सेविंग्स" },
  ];

  return (
    <section className="relative py-3.5 bg-[#F4F8EC] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] border-b border-[#123B13]/10 dark:border-[#B8F21B]/15 transition-colors duration-300 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#B8F21B]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#123B13]/10 dark:divide-[#B8F21B]/15">
          {stats.map((stat, idx) => {
            const label = isHindi ? stat.labelHi : stat.labelEn;

            return (
              <div
                key={idx}
                className="pt-6 sm:pt-0 sm:px-6 first:px-0 space-y-2 group"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading bg-gradient-to-r from-[#123B13] via-[#2F7D16] to-[#4F9D1F] dark:from-[#B8F21B] dark:via-[#4F9D1F] dark:to-[#EAF5D8] bg-clip-text text-transparent font-mono tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#5A6E59] dark:text-[#A3C2A1] uppercase leading-snug">
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
