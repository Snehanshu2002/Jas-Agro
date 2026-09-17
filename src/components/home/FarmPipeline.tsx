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
      titleHi: "Soil & Climate Audit",
      descEn: "Analyzing land area, water quality, and livestock feed requirements for optimal crop selection.",
      descHi: "Land, water quality और cattle feed requirement का सटीक audit।",
      icon: Search,
      badgeColor: "border-emerald-500/40 text-emerald-400 bg-emerald-950/80",
    },
    {
      num: "02",
      titleEn: "IoT SENSOR INSTALLATION",
      titleHi: "IoT Sensor Setup",
      descEn: "Deploying ESP32 telemetry nodes, automated fogger misters, and exhaust air circulators.",
      descHi: "ESP32 sensors, automatic fogger misters और fans की installation।",
      icon: Cpu,
      badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-950/80",
    },
    {
      num: "03",
      titleEn: "ORGANIC CULTIVATION",
      titleHi: "Organic Cultivation",
      descEn: "Supplying pure Oyster Mushroom spawn, Azolla aquatic culture, and vermicompost topsoil.",
      descHi: "High-quality Oyster Mushroom Spawn, Azolla culture और Vermicompost की शुरुआत।",
      icon: Sprout,
      badgeColor: "border-teal-500/40 text-teal-400 bg-teal-950/80",
    },
    {
      num: "04",
      titleEn: "HARVEST & MARKET LINKAGE",
      titleHi: "Harvest & Market Linkage",
      descEn: "Continuous high-yield harvest guidance, quality control, and direct commercial buyback support.",
      descHi: "Harvest guidance, quality check और commercial buyback support।",
      icon: Award,
      badgeColor: "border-amber-500/40 text-amber-400 bg-amber-950/80",
    },
  ];

  return (
    <section className="py-6 bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-glow">
            <span>{isHindi ? "SYSTEM TRANSFORMATION STAGES" : "SYSTEM TRANSFORMATION STAGES"}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-none">
            {isHindi ? "Soil से " : "FROM SOIL "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              {isHindi ? "Smart System तक" : "TO SMART SYSTEMS."}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isHindi
              ? "Traditional farming को 4 easy steps में high-yield smart agri-farm में बदलें।"
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
                className="relative bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 shadow-glass hover:shadow-glow-emerald transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1.5"
              >
                {/* Stage Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold font-mono text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                      {stage.num}
                    </span>
                    <div className={`p-3 rounded-2xl border ${stage.badgeColor} shadow-sm`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold font-heading text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                    {title}
                  </h3>
                </div>

                {/* Stage Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
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
