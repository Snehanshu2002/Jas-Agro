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
      titleHi: "एनालिसिस",
      descEn: "We analyze your specific land, climate, water availability, and livestock feed requirements.",
      descHi: "आपकी लैंड, क्लाइमेट, वाटर और कैटल फीड रिक्वायरमेंट्स का एनालिसिस।",
      icon: Search,
    },
    {
      num: "02",
      titleEn: "Plan",
      titleHi: "प्लानिंग",
      descEn: "Design custom cultivation layouts, select optimal crop species, and plan grow chambers.",
      descHi: "फार्म लेआउट डिजाइन करना और बेस्ट वैरायटीज सेलेक्ट करना।",
      icon: Compass,
    },
    {
      num: "03",
      titleEn: "Cultivate",
      titleHi: "कल्टीवेशन",
      descEn: "Deploy high-purity spawn, rooted fodder slips, or organic vermicompost with bio-safe protocols.",
      descHi: "प्योर मशरूम स्पॉन, फॉडर स्लिप्स और ऑर्गेनिक वर्मीकंपोस्ट की बुआई।",
      icon: Sprout,
    },
    {
      num: "04",
      titleEn: "Monitor",
      titleHi: "मॉनिटरिंग",
      descEn: "Install optional ESP32 microcontrollers and sensor probes for continuous telemetry.",
      descHi: "IoT सेंसर्स और ऑटोमेशन से 24/7 कंटीन्यूअस मॉनिटरिंग।",
      icon: Radio,
    },
    {
      num: "05",
      titleEn: "Grow",
      titleHi: "ग्रोथ & प्रॉफिट",
      descEn: "Achieve higher crop yields, reduce feed expenditures, and maintain long-term soil health.",
      descHi: "हाई क्रॉप यील्ड, फीड कॉस्ट में बचत और बेहतर सोइल हेल्थ।",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAFAF5] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] relative overflow-hidden transition-colors duration-300 border-b border-[#123B13]/10 dark:border-[#B8F21B]/15">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-widest">
            {language === "hi" ? "हमारा प्रोसेस" : "OUR METHODOLOGY"}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5]">
            {language === "hi" ? "लैब से खेत तक। " : "How We Deliver. "}
            <span className="bg-gradient-to-r from-[#123B13] via-[#2F7D16] to-[#4F9D1F] dark:from-[#B8F21B] dark:via-[#4F9D1F] dark:to-[#EAF5D8] bg-clip-text text-transparent">
              {language === "hi" ? "एंड-टू-एंड सफलता।" : "End-to-End Success."}
            </span>
          </h2>
          <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-sm sm:text-base">
            {language === "hi"
              ? "ऑर्गेनिक साइंस और मॉडर्न टेक पर आधारित हमारा 5-स्टेप स्मार्ट फार्मिंग प्रोसेस।"
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
                className="bg-[#F4F8EC] dark:bg-[#123B13]/60 p-6 rounded-2xl border border-[#123B13]/10 dark:border-[#1B4D1C] hover:border-[#2F7D16]/50 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#2F7D16] dark:text-[#B8F21B]">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#EAF5D8] dark:bg-[#0D230E] text-[#123B13] dark:text-[#B8F21B] group-hover:bg-[#B8F21B] group-hover:text-[#123B13] transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-lg mb-2">{title}</h3>
                  <p className="text-xs text-[#5A6E59] dark:text-[#A3C2A1] leading-relaxed">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
