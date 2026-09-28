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
    <main className="min-h-screen bg-[#FAFAF5] text-[#111811] dark:bg-[#0D230E] dark:text-[#FAFAF5] transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 pb-12 overflow-hidden bg-[#FAFAF5] dark:bg-[#0D230E] border-b border-[#123B13]/10 dark:border-[#B8F21B]/15">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-wider">
            <span>{language === "hi" ? "ECO-FRIENDLY AGRICULTURE" : "ECO-FRIENDLY AGRICULTURE"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5] tracking-tight leading-tight">
            {language === "hi" ? "Sustainability at " : "Sustainability at "}
            <span className="bg-gradient-to-r from-[#123B13] via-[#2F7D16] to-[#4F9D1F] dark:from-[#B8F21B] dark:via-[#4F9D1F] dark:to-[#EAF5D8] bg-clip-text text-transparent">
              {language === "hi" ? "JAS Agro" : "JAS Agro"}
            </span>
          </h1>
          <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
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
