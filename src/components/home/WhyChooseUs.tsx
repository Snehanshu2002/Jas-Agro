"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sprout,
  Leaf,
  Lightbulb,
  Cpu,
  HeartHandshake,
  ArrowDownRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BenefitRow {
  id: string;
  number: string;
  titleEn: string;
  titleHi: string;
  bulletsEn: string[];
  bulletsHi: string[];
  icon: React.ElementType;
  videoSrc: string;
  floatingImage: string;
  imageAlt: string;
}

export const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  // Row 0 ("Agriculture Expertise") active by default as shown in reference screenshot
  const [activeRowIndex, setActiveRowIndex] = useState<number>(0);

  const BENEFIT_ROWS: BenefitRow[] = [
    {
      id: "agri-expertise",
      number: "01",
      titleEn: "Agriculture Expertise",
      titleHi: "कृषि विशेषज्ञता",
      bulletsEn: [
        "Deep agronomic knowledge in pure spawn multiplication",
        "Optimized aquatic bio-culture pond management",
        "Scientific fodder crop agronomy & yield protocols",
      ],
      bulletsHi: [
        "शुद्ध स्पॉन मल्टीप्लिकेशन में गहरा कृषि ज्ञान",
        "अजोला जलीय बायो-कल्चर का वैज्ञानिक प्रबंधन",
        "उच्च-पैदावार चारा फसल उगाने के सटीक प्रोटोकॉल",
      ],
      icon: Sprout,
      videoSrc: "/media/hover-video/Professional_inspecting_cultivat%E2%80%A6_20261005122638.mp4",
      floatingImage: "/media/mush1.png",
      imageAlt: "JAS Agro Oyster Mushroom Spawn & Cultivation",
    },
    {
      id: "sustainable-approach",
      number: "02",
      titleEn: "Sustainable Approach",
      titleHi: "सस्टेनेबल अप्रोच",
      bulletsEn: [
        "100% biological processes with zero synthetic chemicals",
        "Active soil organic carbon restoration via earthworms",
        "90%+ water conservation with closed-loop systems",
      ],
      bulletsHi: [
        "100% जैविक प्रक्रिया, ज़ीरो हानिकारक केमिकल्स",
        "केंचुओं द्वारा मिट्टी के ऑर्गेनिक कार्बन का सुधार",
        "क्लोज्ड-लूप सिस्टम से 90%+ पानी की बचत",
      ],
      icon: Leaf,
      videoSrc: "/media/hover-video/Farmer_examining_sustainable_agr%E2%80%A6_20261005123222.mp4",
      floatingImage: "/media/soil3.png",
      imageAlt: "JAS Agro Organic Vermicompost Manure",
    },
    {
      id: "innovative-solutions",
      number: "03",
      titleEn: "Innovative Solutions",
      titleHi: "इनोवेटिव सॉल्यूशंस",
      bulletsEn: [
        "180+ Tons/Acre perennial Hybrid Napier grass slips",
        "25-30% crude protein Azolla dairy super-food",
        "Compact modular grow rooms for maximum yield/sq ft",
      ],
      bulletsHi: [
        "180+ टन/एकड़ साल भर हरा चारा देने वाली नेपियर घास",
        "25-30% प्रोटीन युक्त अजोला सुपर-चारा",
        "प्रति वर्ग फुट अधिकतम पैदावार देने वाले ग्रो रूम्स",
      ],
      icon: Lightbulb,
      videoSrc: "/media/hover-video/Innovative_agricultural_solution%E2%80%A6_20261005125127.mp4",
      floatingImage: "https://www.jasagro.com/assets/img/blog/Napior.png",
      imageAlt: "JAS Agro Hybrid Napier Grass",
    },
    {
      id: "smart-technology",
      number: "04",
      titleEn: "Smart Technology",
      titleHi: "स्मार्ट IoT टेक्नोलॉजी",
      bulletsEn: [
        "Custom ESP32 microcontrollers & DHT22 sensor nodes",
        "Automated foggers & ventilation relay triggers",
        "24/7 cloud micro-climate telemetry & WhatsApp alerts",
      ],
      bulletsHi: [
        "कस्टम ESP32 माइक्रोकंट्रोलर्स और DHT22 सेंसर नोड्स",
        "ऑटोमैटिक फॉगर्स और वेंटिलेशन रिले ट्रिगर्स",
        "24/7 क्लाउड माइक्रो-क्लाइमेट टेलीमेट्री और अलर्ट्स",
      ],
      icon: Cpu,
      videoSrc: "/media/hover-video/Smart_IoT_mushroom_cultivation_m%E2%80%A6_20261005125130.mp4",
      floatingImage: "/media/smartagri4.png",
      imageAlt: "JAS Agro IoT Telemetry & Farm Automation",
    },
    {
      id: "farmer-centric",
      number: "05",
      titleEn: "Farmer-Centric Thinking",
      titleHi: "फार्मर-सेंट्रिक सोच",
      bulletsEn: [
        "Practical, low capital-expenditure farm designs",
        "25-35% reduction in commercial livestock feed costs",
        "Direct agronomist guidance with zero lock-in contracts",
      ],
      bulletsHi: [
        "व्यावहारिक और कम लागत वाले फार्म डिज़ाइन्स",
        "डेयरी पशुओं की फीड लागत में 25-35% तक की कमी",
        "समर्पित एग्रीटेक विशेषज्ञों से सीधी सलाह और मार्गदर्शन",
      ],
      icon: HeartHandshake,
      videoSrc: "/media/hover-video/Farmer_inspecting_crop_in_field_20261005125257.mp4",
      floatingImage: "https://www.jasagro.com/assets/img/blog/Azolla.png",
      imageAlt: "JAS Agro Azolla Aquatic Fodder Ponds",
    },
  ];

  return (
    <section
      id="advantage"
      className="font-sans py-8 sm:py-12 lg:py-16 bg-[#F6F8EE] dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 select-none"
    >
      {/* Anchor for external links */}
      <span id="why-choose-us" className="absolute -top-24 left-0" aria-hidden="true" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#B8F20A]/10 dark:bg-[#122a16]/30 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#2F7D16]/8 dark:bg-[#72d919]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 max-w-[1320px] mx-auto relative z-10">
        

        {/* 5 Large Horizontal Editorial Benefit Rows */}
        <div className="space-y-3.5 sm:space-y-4">
          {BENEFIT_ROWS.map((row, idx) => {
            const isActive = activeRowIndex === idx;
            const IconComp = row.icon;
            const title = isHindi ? row.titleHi : row.titleEn;
            const bullets = isHindi ? row.bulletsHi : row.bulletsEn;

            return (
              <div
                key={row.id}
                onMouseEnter={() => setActiveRowIndex(idx)}
                onClick={() => setActiveRowIndex(idx)}
                onFocus={() => setActiveRowIndex(idx)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                className={`group relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D16] ${
                  isActive
                    ? "bg-[#B8F20A] text-slate-950 shadow-xl border border-[#B8F20A] scale-[1.008] z-20"
                    : "bg-[#F7F9F1] dark:bg-[#122a16]/60 hover:bg-[#EEF4E3] dark:hover:bg-[#122a16]/90 text-slate-900 dark:text-white border border-[#2F7D16]/15 dark:border-white/10 hover:border-[#2F7D16]/30 shadow-xs"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 lg:gap-8">
                  
                  {/* LEFT: Icon, Arrow, Title */}
                  <div className="flex items-center gap-3 sm:gap-6 w-full lg:w-auto min-w-0">
                    {/* Icon Circle */}
                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-white text-slate-950 shadow-md border border-slate-900/10"
                          : "bg-white dark:bg-[#0B0F17] text-slate-800 dark:text-[#72d919] shadow-xs border border-[#2F7D16]/15 dark:border-white/10"
                      }`}
                    >
                      <IconComp className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Arrow Indicator */}
                    <ArrowDownRight
                      className={`w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0 transition-transform ${
                        isActive
                          ? "text-slate-950 translate-x-0.5 translate-y-0.5"
                          : "text-slate-400 dark:text-slate-500 group-hover:text-[#2F7D16] dark:group-hover:text-[#72d919]"
                      }`}
                    />

                    {/* Large Editorial Title */}
                    <h3
                      className={`text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight transition-colors break-words ${
                        isActive
                          ? "text-slate-950 font-extrabold"
                          : "text-slate-900 dark:text-white group-hover:text-[#2F7D16] dark:group-hover:text-[#72d919]"
                      }`}
                    >
                      {title}
                    </h3>
                  </div>

                  {/* FLOATING PREVIEW VIDEO (Active Row: Centered Preview on Desktop Hover with Scale Effect) */}
                  {isActive && (
                    <div className="hidden lg:block relative -my-10 z-30 pointer-events-none">
                      <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95, y: 4 }}
                        animate={{ opacity: 1, scale: 1.18, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-[124px] lg:h-[124px] xl:w-[136px] xl:h-[136px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4),0_0_24px_rgba(184,242,10,0.25)] border-2 border-white dark:border-white/90 bg-slate-900 transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]"
                      >
                        <video
                          key={row.videoSrc}
                          src={row.videoSrc}
                          muted
                          autoPlay
                          loop
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  )}

                  {/* RIGHT: Supporting Bullet Points */}
                  <div className="w-full lg:w-auto lg:max-w-md xl:max-w-lg">
                    <ul className="space-y-1.5 text-xs sm:text-sm">
                      {bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className={`font-medium leading-relaxed flex items-start gap-2 ${
                            isActive
                              ? "text-slate-900 font-semibold"
                              : "text-slate-600 dark:text-slate-300"
                          }`}
                        >
                          <span className={`mt-0.5 shrink-0 text-xs font-bold ${isActive ? "text-slate-950" : "text-slate-400 dark:text-slate-500"}`}>
                            {isActive ? "✓" : "•"}
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
