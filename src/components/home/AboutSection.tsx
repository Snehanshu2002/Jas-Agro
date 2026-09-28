"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  Leaf,
  Lightbulb,
  Cpu,
  HeartHandshake,
  ArrowDownRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
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
  floatingImage: string;
  imageAlt: string;
}

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  // Default active row: 04 — Smart Technology (index 3)
  const [activeRowIndex, setActiveRowIndex] = useState<number>(3);

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
      floatingImage: "https://www.jasagro.com/assets/img/blog/Masroom.png",
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
      floatingImage: "https://www.jasagro.com/assets/img/blog/Vermicompost.png",
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
      floatingImage: "https://www.jasagro.com/assets/img/blog/Imp-Agri.jpg",
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
      floatingImage: "https://www.jasagro.com/assets/img/blog/Azolla.png",
      imageAlt: "JAS Agro Azolla Aquatic Fodder Ponds",
    },
  ];

  const EDITORIAL_IMAGES = [
    {
      titleEn: "01. Indoor Spawn & Mushroom Grow Rooms",
      titleHi: "01. इंडोर स्पॉन & मशरूम ग्रो रूम्स",
      categoryEn: "Climate Automation",
      categoryHi: "क्लाइमेट ऑटोमेशन",
      src: "https://www.jasagro.com/assets/img/blog/Masroom.png",
      alt: "JAS Agro Mushroom Cultivation Setup",
    },
    {
      titleEn: "02. High-Biomass Napier & Azolla Fodder",
      titleHi: "02. हाई-बायोमास नेपियर & अजोला चारा",
      categoryEn: "Dairy Feed Security",
      categoryHi: "डेयरी फीड सिक्योरिटी",
      src: "https://www.jasagro.com/assets/img/blog/Napior.png",
      alt: "JAS Agro Napier Grass & Green Fodder",
    },
    {
      titleEn: "03. Organic Bio-Vermicompost Soil Health",
      titleHi: "03. ऑर्गेनिक वर्मीकंपोस्ट सोइल हेल्थ",
      categoryEn: "Soil Restoration",
      categoryHi: "सोइल रिस्टोरेशन",
      src: "https://www.jasagro.com/assets/img/blog/Vermicompost.png",
      alt: "JAS Agro Vermicompost Organic Manure",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#FAFBF7] dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden border-b border-emerald-950/10 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Soft Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-lime-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 max-w-[1440px] mx-auto">
        
        {/* 1. EYEBROW */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/90 border border-emerald-300/80 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>{isHindi ? "JAS एग्रो क्यों चुनें?" : "THE JAS AGRO ADVANTAGE"}</span>
          </div>
        </motion.div>

        {/* 2. INTRO HEADER: TWO-COLUMN LAYOUT */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 lg:mb-14"
        >
          {/* Left: Large Editorial Heading */}
          <div className="lg:col-span-7 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              {isHindi ? (
                <>
                  स्मार्ट एग्रीकल्चर की शुरुआत{" "}
                  <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
                    बेहतर सिस्टम्स से होती है
                  </span>
                </>
              ) : (
                <>
                  Why Smart Agriculture Starts With{" "}
                  <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
                    Better Systems
                  </span>
                </>
              )}
            </h2>
          </div>

          {/* Right: Supporting Paragraph */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {isHindi
                ? "JAS Agro कृषि ज्ञान, उच्च-प्रोटीन जैविक संवर्धन और व्यावहारिक IoT तकनीक को मिलाकर किसानों और उद्यमों के लिए बेहतर पैदावार और स्थिरता सुनिश्चित करता है।"
                : "Discover how JAS Agro combines deep agronomic expertise, high-protein biological cultures, and practical IoT micro-climate automation to maximize yield, resource security, and ecological sustainability."}
            </p>
          </div>
        </motion.div>

        {/* 3. THREE LARGE IMAGE CARDS */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
        >
          {EDITORIAL_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-emerald-950/10 dark:border-slate-800 shadow-md aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] flex flex-col justify-end"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Subtle Gradient Veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Minimal Bottom Label */}
              <div className="relative z-10 p-5 sm:p-6 space-y-1.5">
                <span className="inline-block px-3 py-1 rounded-full bg-white/95 text-emerald-950 dark:bg-slate-900/90 dark:text-emerald-400 text-[11px] font-mono font-bold backdrop-blur-md shadow-xs border border-emerald-300/60 dark:border-emerald-500/30">
                  {isHindi ? img.categoryHi : img.categoryEn}
                </span>
                <h3 className="text-white font-heading font-bold text-base sm:text-lg leading-snug">
                  {isHindi ? img.titleHi : img.titleEn}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 4 & 5. FIVE LARGE HORIZONTAL BENEFIT ROWS + ACTIVE ROW */}
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
                className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 transition-all duration-300 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  isActive
                    ? "bg-[#C4F135] text-slate-950 shadow-xl border border-lime-400/80 scale-[1.008] z-20"
                    : "bg-[#F7F9F1] dark:bg-slate-900/80 hover:bg-[#EEF4E3] dark:hover:bg-slate-800/90 text-slate-900 dark:text-white border border-emerald-950/10 dark:border-slate-800/80 hover:border-emerald-500/30 shadow-xs"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
                  
                  {/* LEFT: Icon, Number, Arrow, Large Title */}
                  <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                    {/* Icon Circle */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-white text-slate-950 shadow-md border border-slate-900/10"
                          : "bg-white dark:bg-slate-800 text-slate-800 dark:text-emerald-400 shadow-xs border border-emerald-950/10 dark:border-slate-700"
                      }`}
                    >
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Arrow Indicator */}
                    <ArrowDownRight
                      className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform ${
                        isActive
                          ? "text-slate-950 translate-x-0.5 translate-y-0.5"
                          : "text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                      }`}
                    />

                    {/* Large Editorial Title */}
                    <h3
                      className={`text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading tracking-tight transition-colors ${
                        isActive
                          ? "text-slate-950"
                          : "text-slate-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-emerald-300"
                      }`}
                    >
                      {title}
                    </h3>
                  </div>

                  {/* FLOATING CARD (Desktop: Centered Floating Preview; Mobile: Compact Inline) */}
                  {isActive && (
                    <div className="hidden lg:block relative -my-8 z-30 pointer-events-none">
                      <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9, rotate: -8 }}
                        animate={{ opacity: 1, scale: 1, rotate: -4 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-slate-900"
                      >
                        <img
                          src={row.floatingImage}
                          alt={row.imageAlt}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </div>
                  )}

                  {/* RIGHT: 2-3 Short Supporting Bullet Points */}
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
                          <span className="mt-1 shrink-0 text-xs">
                            {isActive ? "✓" : "•"}
                          </span>
                          <span>{bullet.replace(/^•\s*/, "")}</span>
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
