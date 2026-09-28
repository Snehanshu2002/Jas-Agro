"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaSection } from "@/components/home/CtaSection";
import { SERVICES } from "@/data/services";
import { Sprout, Waves, Wheat, Recycle, Radio, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SolutionsPage() {
  const { language, t } = useLanguage();

  const iconMap: Record<string, any> = {
    Sprout,
    Waves,
    Wheat,
    Recycle,
    Radio,
  };

  return (
    <main className="min-h-screen bg-[#FAFAF5] text-[#111811] dark:bg-[#0D230E] dark:text-[#FAFAF5] transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 pb-12 overflow-hidden bg-[#FAFAF5] dark:bg-[#0D230E] border-b border-[#123B13]/10 dark:border-[#B8F21B]/15">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-wider">
            <span>{language === "hi" ? "कृषि-तकनीक सेवाएं" : "AGRI-TECH SERVICES"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5] tracking-tight leading-tight">
            {language === "hi" ? "कृषि एवं " : "Agriculture & "}
            <span className="bg-gradient-to-r from-[#123B13] via-[#2F7D16] to-[#4F9D1F] dark:from-[#B8F21B] dark:via-[#4F9D1F] dark:to-[#EAF5D8] bg-clip-text text-transparent">
              {language === "hi" ? "स्मार्ट फार्मिंग समाधान" : "Smart Farming Services"}
            </span>
          </h1>
          <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "hi"
              ? "टर्नकी फार्म सेटअप, जैविक कल्चर आपूर्ति, फार्म डिज़ाइन एवं स्मार्ट IoT ऑटोमेशन।"
              : "Turnkey installation, biological culture supply, layout engineering, and IoT telemetry integration."}
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#F4F8EC] dark:bg-[#0B170C]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8 max-w-6xl mx-auto">
          {SERVICES.map((serv, idx) => {
            const IconComp = iconMap[serv.iconName] || Sprout;
            return (
              <div
                key={serv.id}
                className="bg-white dark:bg-[#123B13]/90 p-8 sm:p-10 rounded-3xl border border-[#123B13]/10 dark:border-[#1B4D1C] hover:border-[#2F7D16]/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs hover:shadow-md"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#EAF5D8] dark:bg-[#0D230E] text-[#123B13] dark:text-[#B8F21B] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111811] dark:text-[#FAFAF5]">
                      {language === "hi" && serv.titleHi ? serv.titleHi : serv.title}
                    </h2>
                  </div>

                  <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-sm leading-relaxed">
                    {language === "hi" && serv.fullDescriptionHi ? serv.fullDescriptionHi : serv.fullDescription}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2F7D16] dark:text-[#B8F21B]">
                      {language === "hi" ? "मुख्य विशेषताएं एवं खूबियां:" : "Key Highlights & Features:"}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(language === "hi" && serv.featuresHi ? serv.featuresHi : serv.features).map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-xs text-[#111811]/80 dark:text-[#FAFAF5]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAFAF5] dark:bg-[#0D230E] p-6 rounded-2xl border border-[#123B13]/10 dark:border-[#1B4D1C] space-y-4">
                  <h4 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-sm">
                    {language === "hi" ? "प्रोजेक्ट में क्या-क्या मिलेगा:" : "Project Deliverables:"}
                  </h4>
                  <ul className="space-y-2 text-xs text-[#5A6E59] dark:text-[#A3C2A1]">
                    {(language === "hi" && serv.deliverablesHi ? serv.deliverablesHi : serv.deliverables).map((del, didx) => (
                      <li key={didx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8F21B] mt-1.5 flex-shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-[#B8F21B] hover:bg-[#C8F93B] text-[#123B13] font-bold text-xs transition-all text-center block shadow-glow-lime cursor-pointer"
                  >
                    <span>{t("getQuote")} →</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
