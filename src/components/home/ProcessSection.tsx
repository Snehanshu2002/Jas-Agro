"use client";

import React from "react";
import { Search, Compass, Sprout, Radio, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ProcessSection: React.FC = () => {
  const { language } = useLanguage();

  const steps = [
    {
      num: "01",
      titleEn: "Understand",
      titleHi: "Analysis",
      descEn: "We analyze your specific land, climate, water availability, and livestock feed requirements.",
      descHi: "आपकी land, climate, water और cattle feed requirements का analysis।",
      icon: Search,
    },
    {
      num: "02",
      titleEn: "Plan",
      titleHi: "Planning",
      descEn: "Design custom cultivation layouts, select optimal crop species, and plan grow chambers.",
      descHi: "Farm layout design करना और बेस्ट varieties select करना।",
      icon: Compass,
    },
    {
      num: "03",
      titleEn: "Cultivate",
      titleHi: "Cultivation",
      descEn: "Deploy high-purity spawn, rooted fodder slips, or organic vermicompost with bio-safe protocols.",
      descHi: "Pure Mushroom Spawn, Fodder slips और Organic Vermicompost की बुआई।",
      icon: Sprout,
    },
    {
      num: "04",
      titleEn: "Monitor",
      titleHi: "Monitoring",
      descEn: "Install optional ESP32 microcontrollers and sensor probes for continuous telemetry.",
      descHi: "IoT sensors और automation से 24/7 continuous monitoring।",
      icon: Radio,
    },
    {
      num: "05",
      titleEn: "Grow",
      titleHi: "Growth & Profit",
      descEn: "Achieve higher crop yields, reduce feed expenditures, and maintain long-term soil health.",
      descHi: "High crop yield, feed cost में बचत और बेहतर soil health।",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
            {language === "hi" ? "Our Process" : "OUR METHODOLOGY"}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            {language === "hi" ? "From Lab to Field. " : "How We Deliver. "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {language === "hi" ? "End-to-End Success." : "End-to-End Success."}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {language === "hi"
              ? "Organic science और modern tech पर आधारित हमारा 5-step smart farming process।"
              : "A proven, 5-stage agricultural framework combining biological science and technology."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            const title = language === "hi" ? step.titleHi : step.titleEn;
            const desc = language === "hi" ? step.descHi : step.descEn;

            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg mb-2">{title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
