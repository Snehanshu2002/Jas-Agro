"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { CtaSection } from "@/components/home/CtaSection";
import { useLanguage } from "@/context/LanguageContext";

export default function SustainabilityPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FAFBF7] text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 pb-12 overflow-hidden bg-[#FAFBF7] dark:bg-[#0B0F17] border-b border-emerald-950/10 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-950/80 border border-emerald-300/80 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
            <span>{language === "hi" ? "ECO-FRIENDLY AGRICULTURE" : "ECO-FRIENDLY AGRICULTURE"}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            {language === "hi" ? "Sustainability at " : "Sustainability at "}
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
              {language === "hi" ? "JAS Agro" : "JAS Agro"}
            </span>
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "hi"
              ? "Soil organic carbon सुधार, पानी की बचत और 100% organic high-yield farming।"
              : "Preserving soil carbon, conserving water resources, and producing organic high-yield crops."}
          </p>
        </div>
      </section>

      <SustainabilitySection />
      <ImpactSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
