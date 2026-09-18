"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaSection } from "@/components/home/CtaSection";
import { Target, Eye, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  const milestones = [
    {
      year: "2016",
      titleEn: "Founding & Organic Fodder Research",
      titleHi: "स्थापना एवं जैविक चारा अनुसंधान",
      descEn: "JAS Agro was established with a focus on bio-organic manure decomposition and high-protein Azolla culture ponds.",
      descHi: "JAS एग्रो की स्थापना जैविक खाद और उच्च प्रोटीन अजोला संवर्धन पर शोध के साथ हुई।",
    },
    {
      year: "2018",
      titleEn: "Hybrid Napier Fodder Expansion",
      titleHi: "हाइब्रिड नेपियर घास का विस्तार",
      descEn: "Introduced high-yield Super Napier slips to commercial dairies, cutting green fodder deficit by over 30%.",
      descHi: "डेयरी फार्मों के लिए सुपर नेपियर घास पेश की, जिससे हरे चारे की कमी 30% से अधिक घटी।",
    },
    {
      year: "2020",
      titleEn: "Oyster Mushroom Grow Room Setup",
      titleHi: "ऑयस्टर मशरूम ग्रो रूम सेटअप",
      descEn: "Designed indoor thermal grow chambers for year-round gourmet mushroom harvesting using sterilized straw substrate.",
      descHi: "वर्ष भर मशरूम उत्पादन के लिए तापमान-नियंत्रित इंडोर ग्रो चैंबर डिज़ाइन किए।",
    },
    {
      year: "2023",
      titleEn: "ESP32 IoT Sensor Telemetry Launch",
      titleHi: "ESP32 IoT सेंसर टेलीमेट्री लॉन्च",
      descEn: "Engineered micro-controller sensor nodes for continuous temperature, humidity, and soil moisture cloud logging.",
      descHi: "तापमान, नमी और मिट्टी के सटीक डेटा के लिए IoT सेंसर नेटवर्क विकसित किया।",
    },
    {
      year: "2026",
      titleEn: "Next-Gen Agri-Tech Ecosystem",
      titleHi: "नेक्स्ट-जेन एग्री-टेक इकोसिस्टम",
      descEn: "Empowering farmers, enterprises, and institutions across India with data-driven, sustainable agricultural solutions.",
      descHi: "पूरे भारत में किसानों और कृषि उद्यमों को टिकाऊ और स्मार्ट कृषि तकनीकों से सशक्त बनाना।",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-24 pb-8 overflow-hidden bg-slate-50 dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            {language === "hi" ? "हमारे बारे में" : "WHO WE ARE"}
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {language === "hi" ? "हमारी कहानी, लक्ष्य एवं " : "Our Story, Vision & "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {language === "hi" ? "दर्शन" : "Philosophy"}
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            {language === "hi"
              ? "टिकाऊ कृषि पद्धतियां, उच्च प्रोटीन पशु चारा और स्मार्ट IoT पर्यावरण निगरानी तकनीक।"
              : "Pioneering sustainable farming methodologies, high-biomass livestock fodder, and smart IoT environmental monitoring."}
          </p>
        </div>
      </section>

      {/* Vision & Mission Split */}
      <section className="py-10 bg-slate-50 dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                {language === "hi" ? "हमारा लक्ष्य (Mission)" : "Our Mission"}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {language === "hi"
                  ? "किसानों और डेयरी फार्मों को उच्च गुणवत्ता वाले जैविक उत्पाद, उच्च प्रोटीन पशु आहार और सटीक IoT तकनीक प्रदान करना जिससे उत्पादकता बढ़े और पर्यावरण सुरक्षित रहे।"
                  : "To equip farmers, dairies, and agricultural enterprises with high-efficiency organic solutions, high-protein livestock feeds, and precision micro-climate technology."}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                {language === "hi" ? "हमारी दृष्टि (Vision)" : "Our Vision"}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {language === "hi"
                  ? "रसायन-मुक्त कृषि की दिशा में क्रांति लाना जहाँ जैविक विज्ञान और स्मार्ट तकनीक मिलकर खाद्य सुरक्षा और पारिस्थितिक समृद्धि सुनिश्चित करें।"
                  : "To lead the transformation toward intelligent, zero-chemical agriculture where micro-controllers and biological science work seamlessly together."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Storytelling */}
      <section className="py-12 bg-slate-50 dark:bg-[#0B0F17] relative overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              {language === "hi" ? "उपलब्धियां एवं सफर" : "JOURNEY & MILESTONES"}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
              {language === "hi" ? "JAS एग्रो का " : "The Evolution of "}
              <span className="text-emerald-600 dark:text-emerald-400">
                {language === "hi" ? "विकास सफर" : "JAS Agro"}
              </span>
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto relative before:absolute before:left-4 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-emerald-500/30">
            {milestones.map((m, idx) => {
              const title = language === "hi" ? m.titleHi : m.titleEn;
              const desc = language === "hi" ? m.descHi : m.descEn;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    idx % 2 === 0 ? "sm:flex-row-reverse" : ""
                  } gap-6 sm:gap-12`}
                >
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-md z-10">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>

                  <div className="ml-12 sm:ml-0 sm:w-1/2 bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                      {m.year}
                    </span>
                    <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg">{title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
