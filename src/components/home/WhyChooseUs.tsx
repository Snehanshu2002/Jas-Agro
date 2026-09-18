"use client";

import React from "react";
import { Award, Leaf, Lightbulb, Cpu, ShieldCheck, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();

  const points = [
    {
      titleEn: "Agriculture Expertise",
      titleHi: "Agri Expertise",
      descEn: "Deep knowledge in spawn multiplication, aquatic bio-cultures, and fodder crop agronomy.",
      descHi: "Mushroom cultivation, Azolla fodder और organic farming में ख़ास expertise।",
      icon: Award,
    },
    {
      titleEn: "Sustainable Approach",
      titleHi: "Sustainable Approach",
      descEn: "Zero reliance on harmful chemicals; focus on organic matter restoration and water conservation.",
      descHi: "Zero chemicals, soil health सुधार और पानी की बचत पर ध्यान।",
      icon: Leaf,
    },
    {
      titleEn: "Innovative Solutions",
      titleHi: "Innovative Solutions",
      descEn: "High-yielding crop varieties and compact bio-reactors for max yield per square foot.",
      descHi: "High-yield fodder crops और smart farming setups।",
      icon: Lightbulb,
    },
    {
      titleEn: "Smart Technology",
      titleHi: "Smart Tech",
      descEn: "Custom ESP32 microcontrollers, DHT22 sensor arrays, and instant mobile cloud telemetry.",
      descHi: "ESP32 microcontrollers, Sensors और instant mobile alerts।",
      icon: Cpu,
    },
    {
      titleEn: "Quality Focus",
      titleHi: "Quality First",
      descEn: "Rigorously tested pure culture strains, pasteurization protocols, and certified earthworm beds.",
      descHi: "Tested Mushroom Spawn, pure cultures और certified Vermicompost beds।",
      icon: ShieldCheck,
    },
    {
      titleEn: "Farmer-Centric Thinking",
      titleHi: "Farmer-Centric",
      descEn: "Practical, cost-effective solutions engineered to maximize profit margins for farm owners.",
      descHi: "Farmers और Dairy owners की income बढ़ाने वाले cost-effective solutions।",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-widest">
            {language === "hi" ? "JAS एग्रो क्यों चुनें?" : "THE JAS AGRO ADVANTAGE"}
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
            {language === "hi" ? "JAS Agro ही " : "Why Choose "}
            <span className="text-amber-600 dark:text-amber-400">
              {language === "hi" ? "क्यों?" : "JAS Agro?"}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            {language === "hi"
              ? "हम Traditional farming experience और Modern Smart AgTech का बेहतरीन संगम देते हैं।"
              : "We bridge the gap between traditional agricultural wisdom and modern precision agri-tech."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const IconComp = pt.icon;
            const title = language === "hi" ? pt.titleHi : pt.titleEn;
            const desc = language === "hi" ? pt.descHi : pt.descEn;

            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all space-y-4 hover:-translate-y-1 group shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">{title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
