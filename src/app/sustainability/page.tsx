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
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden bg-slate-50 dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            {language === "hi" ? "ECO-FRIENDLY AGRICULTURE" : "ECO-FRIENDLY AGRICULTURE"}
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {language === "hi" ? "Sustainability at " : "Sustainability at "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {language === "hi" ? "JAS Agro" : "JAS Agro"}
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
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
