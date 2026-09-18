"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Cpu, HeartHandshake, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isHindi = language === "hi";

  const principles = [
    {
      titleEn: "Sustainable Cultivation",
      titleHi: "सस्टेनेबल कल्टीवेशन",
      descEn: "Restoring soil fertility and reducing synthetic inputs.",
      descHi: "सोइल फर्टिलिटी बेहतर करना और सिंथेटिक केमिकल्स की निर्भरता कम करना।",
      icon: Leaf,
    },
    {
      titleEn: "Smart Sensor Telemetry",
      titleHi: "स्मार्ट सेंसर टेलीमेट्री",
      descEn: "Precision indoor micro-climate monitoring for gourmet crops.",
      descHi: "क्रॉप्स के लिए इंडोर टेम्परेचर और ह्यूमिडिटी ऑटोमैटिक कंट्रोल करना।",
      icon: Cpu,
    },
    {
      titleEn: "Farmer-Centric Models",
      titleHi: "फार्मर-सेंट्रिक मॉडल",
      descEn: "Cost-effective, high-return setups for small & commercial growers.",
      descHi: "फार्मर्स और कमर्शियल ग्रोअर्स के लिए हाई-रिटर्न सेटअप्स।",
      icon: HeartHandshake,
    },
    {
      titleEn: "Resource Efficiency",
      titleHi: "रिसोर्स एफिशिएंसी",
      descEn: "Optimized water & nutrient usage for zero-waste production.",
      descHi: "वाटर और न्यूट्रिएंट्स का स्मार्ट यूटिलाइजेशन।",
      icon: Zap,
    },
  ];

  return (
    <section className="py-3 bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Full-Height Large Image Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-glass group">
              <img
                src="https://www.jasagro.com/assets/img/blog/Imp-Agri.jpg"
                alt="JAS Agro Biological & Smart Farming"
                className="w-full h-[340px] object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/40 backdrop-blur-xl">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {isHindi ? "JAS एग्रो फार्म - ऑर्गेनिक & डिजिटल" : "JAS AGRO FARM - BIOLOGICAL & DIGITAL"}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {isHindi
                    ? "ऑर्गेनिक प्रोसेस और डिजिटल IoT टेक्नोलॉजी का रियल फार्म व्यू।"
                    : "Real field action of natural organic processes and digital IoT micro-climate automation."}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Headline & Concise Principles List */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest">
                <span>{isHindi ? "अबाउट अस" : "WHO WE ARE"}</span>
              </div>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
                {isHindi ? "फार्मिंग, " : "AGRICULTURE, "}
                <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
                  {isHindi ? "रीइमेजिन्ड फॉर टुमॉरो।" : "REIMAGINED FOR TOMORROW."}
                </span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                {isHindi
                  ? "JAS Agro का मानना है कि फार्मिंग का फ्यूचर नेचुरल ऑर्गेनिक प्रोसेस और डिजिटल IoT टेक्नोलॉजी के सही कॉम्बिनेशन में है।"
                  : "At JAS Agro, we believe the future of farming lies at the intersection of natural biological processes and precision digital telemetry."}
              </p>
            </div>

            {/* 4 Concise Principles List (No heavy cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {principles.map((p, idx) => {
                const IconComp = p.icon;
                const title = isHindi ? p.titleHi : p.titleEn;
                const desc = isHindi ? p.descHi : p.descEn;

                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-extrabold font-heading text-base">
                      <IconComp className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{title}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm shadow-glow transition-all"
              >
                {t("learnMore")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
