"use client";

import React, { useState } from "react";
import localFont from "next/font/local";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Load Futura Cyrillic Medium font strictly from public/media/Jost/
const futuraPt = localFont({
  src: "../../../public/media/futura-pt/FuturaCyrillicMedium.ttf",
  weight: "500",
  display: "swap",
});

interface CollageCardData {
  id: string;
  number: string;
  linesEn: string[];
  linesHi: string[];
  src: string;
  alt: string;
}

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  // Navigation state for carousel buttons
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  // Four Agricultural Collage Images (Easily customizable by user)
  const COLLAGE_CARDS: CollageCardData[] = [
    {
      id: "01",
      number: "01.",
      linesEn: ["Indoor Spawn", "& Mushroom", "Grow Rooms"],
      linesHi: ["इंडोर स्पॉन", "& मशरूम", "ग्रो रूम्स"],
      src: "/media/mush1.png",
      alt: "JAS Agro Oyster Mushroom Spawn & Cultivation",
    },
    {
      id: "02",
      number: "02.",
      linesEn: ["High-Biomass", "Napier & Azolla", "Fodder"],
      linesHi: ["हाई-बायोमास", "नेपियर & अजोला", "चारा फसलें"],
      src: "/media/sun2.png",
      alt: "JAS Agro High Biomass Hybrid Napier & Azolla",
    },
    {
      id: "03",
      number: "03.",
      linesEn: ["Organic Bio-Vermicompost", "Soil Health"],
      linesHi: ["ऑर्गेनिक वर्मीकंपोस्ट", "सोइल हेल्थ"],
      src: "/media/soil3.png",
      alt: "JAS Agro Organic Vermicompost Soil Enrichment",
    },
    {
      id: "04",
      number: "04.",
      linesEn: ["Smart", "Farming", "Automation"],
      linesHi: ["स्मार्ट", "फार्मिंग", "ऑटोमेशन"],
      src: "/media/smartagri4.png",
      alt: "JAS Agro Precision IoT & Smart Farming Automation",
    },
  ];

  const handlePrev = () => {
    setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : COLLAGE_CARDS.length - 1));
  };

  const handleNext = () => {
    setActiveCardIndex((prev) => (prev < COLLAGE_CARDS.length - 1 ? prev + 1 : 0));
  };

  const card1 = COLLAGE_CARDS[0];
  const card2 = COLLAGE_CARDS[1];
  const card3 = COLLAGE_CARDS[2];
  const card4 = COLLAGE_CARDS[3];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F6F8EE] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] relative overflow-hidden transition-colors duration-300 select-none">
      
      {/* Background Soft Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#B8F21B]/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#4F9D1F]/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20 2xl:px-24 relative z-10 max-w-[1600px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* =========================================================================
              LEFT EDITORIAL PANEL (Icon + Futura PT Heading + Navigation Controls)
             ========================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 xl:col-span-3.5 flex flex-col justify-between space-y-8 sm:space-y-12 py-2 lg:pl-2 xl:pl-4"
          >
            {/* Top: Small Circular JAS Agro Agriculture Node Badge */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#D7EBC1] dark:bg-[#1E4D22] text-[#123B13] dark:text-[#B8F21B] flex items-center justify-center shadow-xs">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-none stroke-current stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
                <circle cx="12" cy="3" r="1.5" />
                <circle cx="12" cy="21" r="1.5" />
                <circle cx="3" cy="12" r="1.5" />
                <circle cx="21" cy="12" r="1.5" />
              </svg>
            </div>

            {/* Middle: Editorial Display Heading in Futura PT */}
            <div className="space-y-4">
              <div className="flex items-end gap-3 sm:gap-4 flex-wrap">
                <h2
                  className={`${futuraPt.className} text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight leading-[0.95] text-[#111811] dark:text-[#FAFAF5]`}
                >
                  <span className="block">{isHindi ? "कृषि संभावनाओं" : "Elevates"}</span>
                  <span className="block mt-1 sm:mt-2">{isHindi ? "को नए स्तर" : "agricultural"}</span>
                  <span className="block mt-1 sm:mt-2 text-[#1E5E1B] dark:text-[#B8F21B]">
                    {isHindi ? "पर ले जाता है" : "possibilities"}
                  </span>
                </h2>

                {/* Small circular green arrow button beside/near the heading */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B8F21B] hover:bg-[#C8F93B] text-[#123B13] flex items-center justify-center shadow-sm mb-1 transition-transform hover:scale-110 cursor-pointer">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>

            {/* Bottom: Two Circular Navigation Arrow Buttons */}
            <div className="flex items-center gap-3 pt-4 lg:pt-8">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#111811]/30 dark:border-white/30 flex items-center justify-center text-[#111811] dark:text-[#FAFAF5] hover:bg-[#111811] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#111811]/30 dark:border-white/30 flex items-center justify-center text-[#111811] dark:text-[#FAFAF5] hover:bg-[#111811] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              </button>
            </div>
          </motion.div>

          {/* =========================================================================
              RIGHT 4-IMAGE ASYMMETRIC COLLAGE COMPOSITION
             ========================================================================= */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-8.5"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch">
              
              {/* 
                CARD 01: Large Vertical Portrait Card on the LEFT
              */}
              <div className="md:col-span-5 flex flex-col">
                <div className="relative w-full h-[260px] sm:h-[340px] md:h-full md:min-h-[460px] lg:min-h-[540px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.18)] group transition-transform duration-500 hover:scale-[1.01]">
                  <img
                    src={card1.src}
                    alt={card1.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Dark Gradient behind caption for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />

                  {/* Caption Overlay (Times New Roman Serif) */}
                  <div className="absolute top-0 left-0 p-5 sm:p-7 z-10 text-white">
                    <div
                      className="text-sm sm:text-base font-normal opacity-90 tracking-wide mb-1"
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    >
                      {card1.number} —
                    </div>
                    <h3
                      className="text-xl sm:text-2xl lg:text-[1.75rem] font-normal leading-snug tracking-tight"
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    >
                      {(isHindi ? card1.linesHi : card1.linesEn).map((line, idx) => (
                        <span key={idx} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>
              </div>

              {/* 
                RIGHT COLUMN: Card 02 (Top Landscape) + Cards 03 & 04 (Bottom Split)
              */}
              <div className="md:col-span-7 flex flex-col gap-4 sm:gap-5 lg:gap-6">
                
                {/* CARD 02: Large Horizontal Landscape Card at the TOP-RIGHT */}
                <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[270px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.18)] group transition-transform duration-500 hover:scale-[1.01]">
                  <img
                    src={card2.src}
                    alt={card2.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />

                  <div className="absolute top-0 left-0 p-5 sm:p-7 z-10 text-white">
                    <div
                      className="text-sm sm:text-base font-normal opacity-90 tracking-wide mb-1"
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    >
                      {card2.number} —
                    </div>
                    <h3
                      className="text-xl sm:text-2xl lg:text-[1.65rem] font-normal leading-snug tracking-tight"
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    >
                      {(isHindi ? card2.linesHi : card2.linesEn).map((line, idx) => (
                        <span key={idx} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>

                {/* BOTTOM ROW: Card 03 (Bottom-Center) and Card 04 (Bottom-Right) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 flex-1">
                  
                  {/* CARD 03: Smaller Horizontal Card at the BOTTOM-CENTER */}
                  <div className="sm:col-span-7 relative h-[170px] sm:h-[200px] lg:h-[250px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.18)] group transition-transform duration-500 hover:scale-[1.01]">
                    <img
                      src={card3.src}
                      alt={card3.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />

                    <div className="absolute top-0 left-0 p-4 sm:p-6 z-10 text-white">
                      <div
                        className="text-xs sm:text-sm font-normal opacity-90 tracking-wide mb-1"
                        style={{ fontFamily: '"Times New Roman", Times, serif' }}
                      >
                        {card3.number} —
                      </div>
                      <h3
                        className="text-lg sm:text-xl lg:text-[1.35rem] font-normal leading-snug tracking-tight"
                        style={{ fontFamily: '"Times New Roman", Times, serif' }}
                      >
                        {(isHindi ? card3.linesHi : card3.linesEn).map((line, idx) => (
                          <span key={idx} className="block">
                            {line}
                          </span>
                        ))}
                      </h3>
                    </div>
                  </div>

                  {/* CARD 04: Smaller Vertical Card at the BOTTOM-RIGHT */}
                  <div className="sm:col-span-5 relative h-[170px] sm:h-[200px] lg:h-[250px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.18)] group transition-transform duration-500 hover:scale-[1.01]">
                    <img
                      src={card4.src}
                      alt={card4.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />

                    <div className="absolute top-0 left-0 p-4 sm:p-6 z-10 text-white">
                      <div
                        className="text-xs sm:text-sm font-normal opacity-90 tracking-wide mb-1"
                        style={{ fontFamily: '"Times New Roman", Times, serif' }}
                      >
                        {card4.number} —
                      </div>
                      <h3
                        className="text-lg sm:text-xl lg:text-[1.35rem] font-normal leading-snug tracking-tight"
                        style={{ fontFamily: '"Times New Roman", Times, serif' }}
                      >
                        {(isHindi ? card4.linesHi : card4.linesEn).map((line, idx) => (
                          <span key={idx} className="block">
                            {line}
                          </span>
                        ))}
                      </h3>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
