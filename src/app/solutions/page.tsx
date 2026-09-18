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
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-24 pb-8 overflow-hidden bg-slate-50 dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            {language === "hi" ? "कृषि-तकनीक सेवाएं" : "AGRI-TECH SERVICES"}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {language === "hi" ? "कृषि एवं " : "Agriculture & "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {language === "hi" ? "स्मार्ट फार्मिंग समाधान" : "Smart Farming Services"}
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            {language === "hi"
              ? "टर्नकी फार्म सेटअप, जैविक कल्चर आपूर्ति, फार्म डिज़ाइन एवं स्मार्ट IoT ऑटोमेशन।"
              : "Turnkey installation, biological culture supply, layout engineering, and IoT telemetry integration."}
          </p>
        </div>
      </section>

      <section className="py-10 bg-slate-50 dark:bg-[#0B0F17]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-6">
          {SERVICES.map((serv, idx) => {
            const IconComp = iconMap[serv.iconName] || Sprout;
            return (
              <div
                key={serv.id}
                className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
                      {language === "hi" && serv.titleHi ? serv.titleHi : serv.title}
                    </h2>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {language === "hi" && serv.fullDescriptionHi ? serv.fullDescriptionHi : serv.fullDescription}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      {language === "hi" ? "मुख्य विशेषताएं एवं खूबियां:" : "Key Highlights & Features:"}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(language === "hi" && serv.featuresHi ? serv.featuresHi : serv.features).map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-100 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm">
                    {language === "hi" ? "प्रोजेक्ट में क्या-क्या मिलेगा:" : "Project Deliverables:"}
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {(language === "hi" && serv.deliverablesHi ? serv.deliverablesHi : serv.deliverables).map((del, didx) => (
                      <li key={didx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold text-xs hover:bg-emerald-700 dark:hover:bg-emerald-400 transition-colors text-center block shadow-md"
                  >
                    {t("getQuote")} →
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
