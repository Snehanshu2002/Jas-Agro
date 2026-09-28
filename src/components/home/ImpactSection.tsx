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
    <section className="py-12 sm:py-16 bg-[#F4F8EC] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] relative overflow-hidden border-b border-[#123B13]/10 dark:border-[#B8F21B]/15 transition-colors duration-300">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#B8F21B]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-widest shadow-xs">
            <span>{isHindi ? "मेज़रेबल इम्पैक्ट" : "MEASURABLE IMPACT"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5] tracking-tight leading-none">
            {isHindi ? "इम्पैक्ट जो " : "IMPACT "}
            <span className="bg-gradient-to-r from-[#123B13] via-[#2F7D16] to-[#4F9D1F] dark:from-[#B8F21B] dark:via-[#4F9D1F] dark:to-[#EAF5D8] bg-clip-text text-transparent">
              {isHindi ? "हर दिन बढ़ता है" : "THAT GROWS."}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A6E59] dark:text-[#A3C2A1] font-normal leading-relaxed">
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
                className="bg-white dark:bg-[#123B13]/80 backdrop-blur-xl border border-[#123B13]/10 dark:border-[#1B4D1C] hover:border-[#2F7D16]/50 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 space-y-3 group hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-[#EAF5D8] dark:bg-[#0D230E] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  {item.unit && (
                    <span className="text-[10px] font-mono font-bold text-[#123B13] dark:text-[#B8F21B] bg-[#B8F21B] dark:bg-[#B8F21B]/20 px-2 py-0.5 rounded-full border border-[#B8F21B]/50">
                      {item.unit}
                    </span>
                  )}
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#111811] dark:text-[#FAFAF5] tracking-tight group-hover:text-[#2F7D16] dark:group-hover:text-[#B8F21B] transition-colors">
                  {item.value}
                </div>

                <div className="text-xs font-mono font-bold text-[#5A6E59] dark:text-[#A3C2A1] tracking-wider uppercase leading-snug">
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
