"use client";

import React from "react";
import { Search, Cpu, Sprout, Award, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FarmPipeline: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const stages = [
    {
      num: "01",
      titleEn: "SOIL & CLIMATE AUDIT",
      titleHi: "सोइल & क्लाइमेट ऑडिट",
      descEn: "Analyzing land area, water quality, and livestock feed requirements for optimal crop selection.",
      descHi: "लैंड, वाटर क्वालिटी और कैटल फीड रिक्वायरमेंट का सटीक ऑडिट।",
      icon: Search,
      badgeColor: "border-emerald-300/80 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-400 bg-emerald-100/90 dark:bg-emerald-950/80",
    },
    {
      num: "02",
      titleEn: "IoT SENSOR INSTALLATION",
      titleHi: "IoT सेंसर सेटअप",
      descEn: "Deploying ESP32 telemetry nodes, automated fogger misters, and exhaust air circulators.",
      descHi: "ESP32 सेंसर्स, ऑटोमैटिक फॉगर मिस्टर्स और फैंस की इंस्टॉल।",
      icon: Cpu,
      badgeColor: "border-cyan-300/80 dark:border-cyan-500/40 text-cyan-800 dark:text-cyan-400 bg-cyan-100/90 dark:bg-cyan-950/80",
    },
    {
      num: "03",
      titleEn: "ORGANIC CULTIVATION",
      titleHi: "ऑर्गेनिक कल्टीवेशन",
      descEn: "Supplying pure Oyster Mushroom spawn, Azolla aquatic culture, and vermicompost topsoil.",
      descHi: "हाई-क्वालिटी ऑयस्टर मशरुम स्पॉन, अजोला कल्चर और वर्मीकंपोस्ट की शुरुआत।",
      icon: Sprout,
      badgeColor: "border-teal-300/80 dark:border-teal-500/40 text-teal-800 dark:text-teal-400 bg-teal-100/90 dark:bg-teal-950/80",
    },
    {
      num: "04",
      titleEn: "HARVEST & MARKET LINKAGE",
      titleHi: "हार्वेस्ट & मार्केट लिंकेज",
      descEn: "Continuous high-yield harvest guidance, quality control, and direct commercial buyback support.",
      descHi: "हार्वेस्ट गाइडेंस, क्वालिटी चेक और कमर्शियल बायबैक सपोर्ट।",
      icon: Award,
      badgeColor: "border-amber-300/80 dark:border-amber-500/40 text-amber-800 dark:text-amber-400 bg-amber-100/90 dark:bg-amber-950/80",
    },
  ];

  return (
    <section className="py-6 bg-[#F1F5EB] dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden border-b border-emerald-950/10 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/90 border border-emerald-300/80 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
            <span>{isHindi ? "सिस्टम ट्रांसफॉर्मेशन स्टेजेस" : "SYSTEM TRANSFORMATION STAGES"}</span>
          </div>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-none">
            {isHindi ? "सोइल से " : "FROM SOIL "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              {isHindi ? "स्मार्ट सिस्टम तक" : "TO SMART SYSTEMS."}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-normal leading-relaxed">
            {isHindi
              ? "ट्रेडिशनल फार्मिंग को 4 ईजी स्टेप्स में हाई-यील्ड स्मार्ट एग्री-फार्म में बदलें।"
              : "Transform traditional agriculture into a high-yielding, digital agtech farm through four structured phases."}
          </p>
        </div>

        {/* 4-Stage Visual Timeline Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stages.map((stage, idx) => {
            const IconComp = stage.icon;
            const title = isHindi ? stage.titleHi : stage.titleEn;
            const desc = isHindi ? stage.descHi : stage.descEn;

            return (
              <div
                key={idx}
                className="relative bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-emerald-950/10 dark:border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1.5"
              >
                {/* Stage Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold font-mono text-emerald-900/25 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {stage.num}
                    </span>
                    <div className={`p-3 rounded-2xl border ${stage.badgeColor} shadow-sm`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold font-heading text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                    {title}
                  </h3>
                </div>

                {/* Stage Description */}
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {desc}
                </p>

                {/* Step Connector Indicator */}
                {idx < stages.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <ArrowRight className="w-5 h-5 text-emerald-500/40" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
