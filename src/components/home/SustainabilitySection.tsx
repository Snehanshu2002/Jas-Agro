"use client";

import React from "react";
import { Leaf, Droplets, Recycle, Sun, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const SustainabilitySection: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const ecoPillars = [
    {
      titleEn: "Bio-Waste Conversion",
      titleHi: "बायो-वेस्ट कन्वर्जन",
      descEn: "Converting agricultural crop residues into premium vermicompost topsoil.",
      descHi: "क्रॉप रेजिड्यूस और एग्री वेस्ट को ऑर्गेनिक वर्मीकंपोस्ट में बदलना।",
      icon: Recycle,
    },
    {
      titleEn: "Water Efficiency",
      titleHi: "वाटर कन्जर्वेशन",
      descEn: "Closed-loop hydroponic & misting systems saving up to 70% water.",
      descHi: "क्लोज्ड-लूप मिस्टिंग सिस्टम्स से 70% तक पानी की बचत।",
      icon: Droplets,
    },
    {
      titleEn: "Soil Health Restoration",
      titleHi: "सोइल हेल्थ रेस्टोरेशन",
      descEn: "Replenishing natural organic carbon without synthetic chemical runoff.",
      descHi: "बिना केमिकल्स के सोइल ऑर्गेनिक कार्बन और फर्टिलिटी में सुधार।",
      icon: Leaf,
    },
    {
      titleEn: "Clean Energy & Tech",
      titleHi: "क्लीन टेक & एनर्जी",
      descEn: "Solar-ready IoT sensor telemetry nodes for carbon-neutral operations.",
      descHi: "सोलर-रेडी IoT सेंसर्स से इको-फ्रेंडली स्मार्ट फार्मिंग।",
      icon: Sun,
    },
  ];

  return (
    <section className="py-6 bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Full-Bleed Editorial Visual Box */}
        <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-glass">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
            alt="JAS Agro Sustainable Agriculture & Bio-Farming"
            className="w-full h-[540px] object-cover filter brightness-[0.75] contrast-[1.10]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/80 via-transparent to-[#0B0F17]/80" />

          {/* Editorial Content Overlay */}
          <div className="absolute inset-0 p-8 sm:p-14 flex flex-col justify-between text-left">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{isHindi ? "सस्टेनेबल एग्रीटेक" : "SUSTAINABLE AGTECH"}</span>
              </div>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-white tracking-tight leading-none drop-shadow-lg">
                {isHindi ? "ज़्यादा प्रोडक्शन। " : "GROWING MORE. "}
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-300 bg-clip-text text-transparent">
                  {isHindi ? "शून्य बर्बादी।" : "WASTING LESS."}
                </span>
              </h2>

              <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed drop-shadow-md">
                {isHindi
                  ? "नेचुरल इकोलॉजी को नुक़सान पहुँचाए बिना मैक्सिमम क्रॉप यील्ड्स पाना।"
                  : "Harvesting maximum agricultural potential while preserving topsoil ecological balance."}
              </p>
            </div>

            {/* 4 Overlay Pillars Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-700/60 backdrop-blur-md">
              {ecoPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                const title = isHindi ? pillar.titleHi : pillar.titleEn;
                const desc = isHindi ? pillar.descHi : pillar.descEn;

                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm font-heading">
                      <IconComp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-normal">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
