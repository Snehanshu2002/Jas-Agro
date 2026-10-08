"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CultivationSystem {
  num: string;
  slug: string;
  titleEn: string;
  titleHi: string;
  categoryEn: string;
  categoryHi: string;
  descriptionEn: string;
  descriptionHi: string;
  image: string;
  bgPosition: string;
}

export const ProductExplorer: React.FC = () => {
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const cultivationSystems: CultivationSystem[] = [
    {
      num: "01",
      slug: "oyster-mushroom",
      titleEn: "Oyster Mushroom Cultivation",
      titleHi: "ऑयस्टर मशरूम कल्टीवेशन",
      categoryEn: "Indoor Bio-Security",
      categoryHi: "इन्डोर फार्मिंग",
      descriptionEn:
        "Climate-controlled indoor grow rooms with automated micro-misting and pure culture spawn for rapid harvest cycles.",
      descriptionHi:
        "क्लाइमेट-कंट्रोल्ड ग्रो रूम्स और ऑटोमेटेड मिस्टिंग के साथ उच्च जैविक उपज ऑयस्टर मशरूम।",
      image: "https://www.jasagro.com/assets/img/slide/slide-1.jpg",
      bgPosition: "center 35%",
    },
    {
      num: "02",
      slug: "azolla",
      titleEn: "Azolla Aquatic Fodder",
      titleHi: "अजोला जलीय सुपर-चारा",
      categoryEn: "Livestock Nutrition",
      categoryHi: "लाइवस्टॉक पोषण",
      descriptionEn:
        "Fast-growing nitrogen-fixing aquatic biomass with 25-30% crude protein, reducing dairy concentrate feed costs.",
      descriptionHi:
        "25-30% प्रोटीन से भरपूर फास्ट-ग्रोइंग एक्वाटिक सुपर-फूड जो डेयरी फीड लागत 20-30% कम करता है।",
      image: "https://www.jasagro.com/assets/img/slide/slide-2.jpg",
      bgPosition: "center center",
    },
    {
      num: "03",
      slug: "napier-grass",
      titleEn: "Hybrid Napier Grass",
      titleHi: "हाइब्रिड नेपियर घास",
      categoryEn: "Perennial Green Forage",
      categoryHi: "पेरेनियल ग्रीन फॉडर",
      descriptionEn:
        "High-biomass perennial forage producing 180+ tons/acre green fodder annually with continuous 4-5 year multi-cuts.",
      descriptionHi:
        "डेयरी पशुओं के लिए साल भर भरपूर हरा चारा देने वाली हाई-बायोमास फसल (180+ टन/एकड़)।",
      image: "https://www.jasagro.com/assets/img/slide/slide-3.jpg",
      bgPosition: "center center",
    },
    {
      num: "04",
      slug: "vermicompost",
      titleEn: "Organic Bio-Vermicompost",
      titleHi: "ऑर्गेनिक वर्मीकंपोस्ट",
      categoryEn: "Living Soil Fertility",
      categoryHi: "सोइल फर्टिलिटी",
      descriptionEn:
        "100% pure earthworm castings enriched with beneficial soil microbes and bio-available NPK to revitalize soil humus.",
      descriptionHi:
        "केंचुओं द्वारा तैयार 100% शुद्ध जैविक कंपोस्ट जो मिट्टी की ऑर्गेनिक कार्बन और उर्वरता सुधारता है।",
      image: "https://www.jasagro.com/assets/img/slide/slide-4.jpg",
      bgPosition: "center 60%",
    },
    {
      num: "05",
      slug: "iot-farm-controller",
      titleEn: "Smart Farming IoT Telemetry",
      titleHi: "स्मार्ट IoT फार्मिंग टेलीमेट्री",
      categoryEn: "Precision Automation",
      categoryHi: "स्मार्ट ऑटोमेशन",
      descriptionEn:
        "ESP32-powered micro-climate sensor array with automated misting relays, soil probes, and real-time cloud analytics.",
      descriptionHi:
        "ESP32 Microcontroller, सेंसर और real-time Cloud Telemetry के साथ स्वचालित फार्मिंग सिस्टम।",
      image: "https://www.jasagro.com/assets/img/blog/IOT.jpg",
      bgPosition: "center center",
    },
  ];

  return (
    <section
      id="cultivation-systems"
      className="py-16 sm:py-20 lg:py-24 bg-[#F6F8EE] dark:bg-[#0D230E] text-slate-900 dark:text-white relative transition-colors duration-300"
    >
      {/* Scoped CSS for smooth monochrome to full-color horizontal accordion expansion */}
      <style>{`
        .jas-cult-card {
          position: relative;
          flex: 1 1 0%;
          min-width: 110px;
          height: 100%;
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .jas-cult-card:hover,
        .jas-cult-card:focus-within {
          flex: 3.5 1 0%;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
        }

        .jas-cult-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-repeat: no-repeat;
          filter: grayscale(100%) contrast(1.05) brightness(0.85);
          transition: filter 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .jas-cult-card:hover .jas-cult-bg,
        .jas-cult-card:focus-within .jas-cult-bg {
          filter: grayscale(0%) contrast(1) brightness(0.95);
          transform: scale(1.03);
        }

        .jas-cult-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11, 46, 30, 0.48);
          transition: background 0.6s ease;
        }

        .jas-cult-card:hover .jas-cult-overlay,
        .jas-cult-card:focus-within .jas-cult-overlay {
          background: rgba(11, 46, 30, 0.18);
        }

        .jas-cult-vertical-title {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
          letter-spacing: 2.5px;
          transition: letter-spacing 0.3s ease, opacity 0.3s ease;
        }

        .jas-cult-card:hover .jas-cult-vertical-title {
          letter-spacing: 4.5px;
        }
      `}</style>

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 max-w-7xl mx-auto">
        {/* Minimal Section Header: Strictly FuturaCyrillicMedium font */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
          >
            {isHindi ? "एक्सप्लोर करें हमारे कल्टीवेशन सिस्टम्स" : "Explore Our Cultivation Systems"}
          </h2>
        </motion.div>

        {/* DESKTOP / TABLET: 5 Rectangular Cards with Monochrome-to-Color Accordion Expansion (>= 768px) */}
        <div className="hidden md:flex gap-3 lg:gap-3.5 w-full h-[480px] lg:h-[520px] items-stretch">
          {cultivationSystems.map((item, idx) => {
            const title = isHindi ? item.titleHi : item.titleEn;
            const category = isHindi ? item.categoryHi : item.categoryEn;
            const desc = isHindi ? item.descriptionHi : item.descriptionEn;

            // First & last card have larger outer corners; middle cards have sharper reduced radius
            const cornerClasses =
              idx === 0
                ? "rounded-l-[28px] rounded-r-[10px]"
                : idx === cultivationSystems.length - 1
                  ? "rounded-r-[28px] rounded-l-[10px]"
                  : "rounded-[10px]";

            return (
              <div
                key={item.slug}
                tabIndex={0}
                className={`jas-cult-card group border border-black/10 dark:border-white/10 hover:border-[#B8F20A] focus:border-[#B8F20A] focus:outline-none ${cornerClasses}`}
              >
                {/* Background image with grayscale -> full-color transition */}
                <div
                  className="jas-cult-bg"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundPosition: item.bgPosition,
                  }}
                />

                {/* Dark overlay */}
                <div className="jas-cult-overlay" />

                {/* Bottom text protection gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                {/* Top accent line indicator on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full bg-[#B8F20A] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 z-20" />

                {/* COLLAPSED STATE (Default visible, hidden on hover) */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between items-center py-7 px-2.5 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 group-hover:pointer-events-none group-focus-within:pointer-events-none">
                  {/* Number Tag */}
                  <span className="text-xs font-mono font-bold tracking-widest text-[#B8F20A] px-2.5 py-1 rounded-full bg-[#0B2E1E]/80 backdrop-blur-md border border-[#B8F20A]/30">
                    {item.num}
                  </span>

                  {/* Vertical Title */}
                  <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
                    <h3 className="jas-cult-vertical-title text-sm lg:text-base font-bold font-heading text-white drop-shadow-md truncate">
                      {title}
                    </h3>
                  </div>

                  {/* Bottom Indicator Dot */}
                  <div className="w-2 h-2 rounded-full bg-[#B8F20A]/70" />
                </div>

                {/* EXPANDED STATE (Revealed on hover/focus) */}
                <div className="absolute inset-0 z-20 p-6 lg:p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 delay-75 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto overflow-hidden">
                  {/* Top: Number & Category */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-extrabold text-[#0B2E1E] bg-[#B8F20A] px-2.5 py-1 rounded-full shadow-sm">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                      {category}
                    </span>
                  </div>

                  {/* Bottom: Title, Description & Action */}
                  <div className="space-y-3.5 pt-6">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-extrabold font-heading text-white tracking-tight leading-snug drop-shadow-md line-clamp-2">
                        {title}
                      </h3>
                      <p className="text-slate-200 text-xs lg:text-sm leading-relaxed mt-1.5 font-normal line-clamp-3 drop-shadow">
                        {desc}
                      </p>
                    </div>

                    <div className="pt-1">
                      <Link
                        href={`/products/${item.slug}`}
                        className="group relative inline-flex items-center justify-between min-w-[136px] h-[38px] px-4 rounded-full bg-[#B8F20A] border border-[#A6E015] overflow-hidden cursor-pointer select-none transition-all duration-300 shadow-md active:scale-95"
                      >
                        {/* Dark Sweep Layer from Right */}
                        <span
                          className="absolute inset-0 bg-[#0B2E1E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none"
                        />

                        {/* Dual Sliding Text */}
                        <span className="relative z-10 block pr-2">
                          <span className="block font-extrabold text-xs text-[#0B2E1E] transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 whitespace-nowrap">
                            {t("learnMore")}
                          </span>
                          <span className="absolute inset-0 block font-extrabold text-xs text-[#B8F20A] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                            {t("learnMore")}
                          </span>
                        </span>

                        {/* Right Arrow in Expanding Circle */}
                        <span className="relative z-10 flex items-center justify-center w-5 h-5 shrink-0 pointer-events-none">
                          <ArrowRight
                            className="w-3.5 h-3.5 text-[#0B2E1E] transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0"
                            strokeWidth={2.5}
                          />
                          <span
                            className="absolute inset-0 rounded-full bg-[#B8F20A] text-[#0B2E1E] flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] delay-75 shadow-sm"
                          >
                            <ArrowRight className="w-3 h-3 text-[#0B2E1E]" strokeWidth={2.5} />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE: Clean Vertical Stack Layout (< 768px) */}
        <div className="flex md:hidden flex-col gap-4 w-full">
          {cultivationSystems.map((item) => {
            const title = isHindi ? item.titleHi : item.titleEn;
            const category = isHindi ? item.categoryHi : item.categoryEn;
            const desc = isHindi ? item.descriptionHi : item.descriptionEn;

            return (
              <div
                key={item.slug}
                className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-md min-h-[190px] flex flex-col justify-between p-5"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: item.bgPosition,
                }}
              >
                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-[#0B2E1E]/65" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Top Row: Number & Category */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-extrabold text-[#0B2E1E] bg-[#B8F20A] px-2.5 py-1 rounded-full">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8F20A] bg-[#0B2E1E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#B8F20A]/30">
                    {category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2 pt-4">
                  <h3 className="text-lg font-bold font-heading text-white">{title}</h3>
                  <p className="text-slate-200 text-xs leading-relaxed line-clamp-2">{desc}</p>
                  <div className="pt-1">
                    <Link
                      href={`/products/${item.slug}`}
                      className="group relative inline-flex items-center justify-between min-w-[130px] h-[36px] px-4 rounded-full bg-[#B8F20A] border border-[#A6E015] overflow-hidden cursor-pointer select-none transition-all duration-300 shadow-md active:scale-95"
                    >
                      <span
                        className="absolute inset-0 bg-[#0B2E1E] origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none"
                      />
                      <span className="relative z-10 block pr-2">
                        <span className="block font-extrabold text-xs text-[#0B2E1E] transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-2 whitespace-nowrap">
                          {t("learnMore")}
                        </span>
                        <span className="absolute inset-0 block font-extrabold text-xs text-[#B8F20A] opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 whitespace-nowrap">
                          {t("learnMore")}
                        </span>
                      </span>
                      <span className="relative z-10 flex items-center justify-center w-5 h-5 shrink-0 pointer-events-none">
                        <ArrowRight
                          className="w-3.5 h-3.5 text-[#0B2E1E] transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0"
                          strokeWidth={2.5}
                        />
                        <span
                          className="absolute inset-0 rounded-full bg-[#B8F20A] text-[#0B2E1E] flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.76,0,0.24,1)] delay-75 shadow-sm"
                        >
                          <ArrowRight className="w-3 h-3 text-[#0B2E1E]" strokeWidth={2.5} />
                        </span>
                      </span>
                    </Link>
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



