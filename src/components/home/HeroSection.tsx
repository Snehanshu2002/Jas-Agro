"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Sprout, Sparkles, Activity, ShieldCheck, Cpu, FlaskConical, Leaf, Droplets, Recycle } from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const HERO_VIDEOS = [
    {
      id: "warehouse",
      titleEn: "Warehouse & Spawn Lab",
      titleHi: "वेयरहाउस & लैब",
      icon: FlaskConical,
      type: "video" as const,
      src: "/media/hero/warehouse-drone-shot.mp4",
      headlineEnPart1: "Controlled Cultivation",
      headlineEnPart2: "Starts With ",
      headlineEnAccent: "Better Systems",
      headlineHiPart1: "नियंत्रित खेती",
      headlineHiPart2: "शुरू होती है ",
      headlineHiAccent: "बेहतर सिस्टम से",
      supportingEn:
        "From spawn preparation to controlled growing environments, JAS Agro builds practical systems for consistent agricultural production.",
      supportingHi:
        "स्पॉन तैयार करने से लेकर नियंत्रित ग्रोइंग रूम तक, JAS Agro विश्वसनीय कृषि उत्पादन के लिए व्यावहारिक सिस्टम बनाता है।",
      badgeEn: "Precision Infrastructure",
      badgeHi: "प्रिसिजन इंफ्रास्ट्रक्चर",
      stat1Val: "100%",
      stat1LabelEn: "Sterile Cleanroom Standard",
      stat1LabelHi: "स्टेरिल क्लीनरूम मानक",
      stat2Val: "24/7",
      stat2LabelEn: "Micro-Climate Telemetry",
      stat2LabelHi: "माइक्रो-क्लाइमेट टेलीमेट्री",
    },
    {
      id: "mushroom",
      titleEn: "Mushrooms",
      titleHi: "मशरूम",
      icon: Sprout,
      type: "video" as const,
      src: "/media/hero/chhatraka-mushroom-training.mp4",
      headlineEnPart1: "Smart Mushroom",
      headlineEnPart2: "Cultivation ",
      headlineEnAccent: "Systems",
      headlineHiPart1: "स्मार्ट मशरूम",
      headlineHiPart2: "कल्टीवेशन ",
      headlineHiAccent: "सिस्टम्स",
      supportingEn:
        "Practical cultivation systems designed around controlled environments, better monitoring and sustainable mushroom production.",
      supportingHi:
        "सटीक क्लाइमेट कंट्रोल, मॉनिटरिंग और टिकाऊ मशरूम उत्पादन के लिए तैयार किए गए व्यावहारिक सिस्टम्स।",
      badgeEn: "Gourmet Fungi Tech",
      badgeHi: "मशरूम कल्टीवेशन टेक",
      stat1Val: "99.8%",
      stat1LabelEn: "Spawn Batch Viability",
      stat1LabelHi: "स्पॉन बैच गुणवत्ता",
      stat2Val: "100%",
      stat2LabelEn: "Controlled Humidity & Temp",
      stat2LabelHi: "नियंत्रित नमी व तापमान",
    },
    {
      id: "napier",
      titleEn: "Hybrid Napier Grass",
      titleHi: "नेपियर घास",
      icon: Leaf,
      type: "video" as const,
      src: "/media/hero/napier-grass-video.mp4",
      headlineEnPart1: "High-Yield Fodder",
      headlineEnPart2: "For Better ",
      headlineEnAccent: "Farm Productivity",
      headlineHiPart1: "उच्च पैदावार हरा चारा",
      headlineHiHiPart2: "अधिक ",
      headlineHiAccent: "फार्म उत्पादकता के लिए",
      supportingEn:
        "Hybrid Napier cultivation designed to support reliable green fodder production and efficient farm resource use.",
      supportingHi:
        "डेयरी पशुओं के लिए साल भर पौष्टिक हरा चारा और फार्म संसाधनों का कुशल उपयोग।",
      badgeEn: "Perennial Green Fodder",
      badgeHi: "बारहमासी हरा चारा",
      stat1Val: "350-400T",
      stat1LabelEn: "Annual Yield Per Acre",
      stat1LabelHi: "वार्षिक पैदावार प्रति एकड़",
      stat2Val: "18-20%",
      stat2LabelEn: "Crude Protein Content",
      stat2LabelHi: "क्रूड प्रोटीन अनुपात",
    },
    {
      id: "azolla",
      titleEn: "Azolla Aquatic Fodder",
      titleHi: "अजोला चारा",
      icon: Droplets,
      type: "video" as const,
      src: "/media/hero/azolla-fodder-video.mp4",
      headlineEnPart1: "Natural Fodder",
      headlineEnPart2: "From ",
      headlineEnAccent: "Aquatic Farming",
      headlineHiPart1: "प्राकृतिक हरा चारा",
      headlineHiPart2: "जलीय ",
      headlineHiAccent: "फार्मिंग से",
      supportingEn:
        "Azolla cultivation systems that turn a compact aquatic growing space into a practical source of nutrient-rich farm feed.",
      supportingHi:
        "कम जगह में अजोला जलीय चारा उत्पादन जो पशु आहार की लागत 25-30% तक घटाता है।",
      badgeEn: "Aquatic Bio-Fodder",
      badgeHi: "जलीय बायो-चारा",
      stat1Val: "25-30%",
      stat1LabelEn: "Feed Cost Reduction",
      stat1LabelHi: "आहार लागत में कमी",
      stat2Val: "25-35%",
      stat2LabelEn: "Digestible Bio-Protein",
      stat2LabelHi: "पाचन योग्य प्रोटीन",
    },
    {
      id: "vermicompost",
      titleEn: "Vermicompost Manure",
      titleHi: "वर्मीकंपोस्ट",
      icon: Recycle,
      type: "image" as const,
      src: "/media/hero/vermicompost-manure-visual.jpg",
      headlineEnPart1: "Turning Organic Waste",
      headlineEnPart2: "Into ",
      headlineEnAccent: "Better Soil",
      headlineHiPart1: "ऑर्गेनिक वेस्ट से",
      headlineHiPart2: "उपजाऊ ",
      headlineHiAccent: "मिट्टी का निर्माण",
      supportingEn:
        "Vermicompost systems that transform organic matter into nutrient-rich manure for healthier and more sustainable cultivation.",
      supportingHi:
        "कृषि अवशेषों को पोषक तत्वों से भरपूर जैविक खाद में बदलकर मिट्टी की उर्वरता बढ़ाना।",
      badgeEn: "Organic Soil Biology",
      badgeHi: "ऑर्गेनिक मृदा संवर्धन",
      stat1Val: "100%",
      stat1LabelEn: "Pure Microbial Castings",
      stat1LabelHi: "शुद्ध जैविक वर्मी कम्पोस्ट",
      stat2Val: "40%",
      stat2LabelEn: "Soil Water Retention Boost",
      stat2LabelHi: "मिट्टी की जलधारण क्षमता",
    },
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Auto-switch video element or timer when index changes
  useEffect(() => {
    const currentItem = HERO_VIDEOS[currentVideoIndex];
    if (currentItem.type === "video") {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(() => { });
      }
    } else {
      const timer = setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [currentVideoIndex]);

  // Handle Video End -> Next Video in Playlist
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  const currentItem = HERO_VIDEOS[currentVideoIndex];

  return (
    <section data-hero-section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0D230E] text-white select-none">

      {/* 1. FULL-SCREEN CINEMATIC VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Active Video / Image */}
        {!prefersReducedMotion && (
          currentItem.type === "video" ? (
            <video
              key={currentItem.id}
              ref={videoRef}
              src={currentItem.src}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              onLoadedData={(e) => {
                setVideoError(false);
                e.currentTarget.play().catch(() => { });
              }}
              onError={() => setVideoError(true)}
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.05] saturate-[1.08] transition-opacity duration-700"
            />
          ) : (
            <motion.img
              key={currentItem.id}
              src={currentItem.src}
              alt={currentItem.titleEn}
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.05] saturate-[1.08]"
            />
          )
        )}

        {/* Cinematic Film Grain Texture */}
        <div
          className="absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Multi-tier Light Cinematic Overlay (Noticeably brighter while preserving contrast) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0D230E]/80 via-[#0D230E]/15 to-[#0D230E]/35" />
        <div className="absolute inset-0 z-10 bg-black/10" />
      </div>


      {/* 3. VERTICAL CATEGORY SELECTOR PILL (RIGHT RAIL - REFERENCE COMPOSITION) */}
      <div className="absolute right-2 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-full bg-[#0D230E]/85 dark:bg-[#0D230E]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
        {HERO_VIDEOS.map((vid, idx) => {
          const isActive = currentVideoIndex === idx;
          const Icon = vid.icon;
          return (
            <button
              key={vid.id}
              type="button"
              onClick={() => setCurrentVideoIndex(idx)}
              title={isHindi ? vid.titleHi : vid.titleEn}
              aria-label={isHindi ? vid.titleHi : vid.titleEn}
              className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer relative group ${isActive
                  ? "bg-[#B8F21B] text-[#123B13] shadow-lg shadow-[#B8F21B]/40 scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />

              {/* Hover Tooltip (Left Side) */}
              <span role="tooltip" className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#0D230E]/95 text-white text-xs font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 border border-white/10 shadow-xl hidden sm:block">
                {isHindi ? vid.titleHi : vid.titleEn}
              </span>
            </button>
          );
        })}
      </div>

      {/* 4. MAIN HERO EDITORIAL CONTENT & TELEMETRY CARDS (POSITIONED FURTHER DOWN) */}
      <div className="relative z-20 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 pt-20 sm:pt-14 pb-8 sm:pb-16 lg:pb-20 mt-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-6 sm:gap-8 lg:gap-14">

          {/* LEFT COLUMN: EDITORIAL HEADLINE, SUPPORTING TEXT & LIME CTA (SLIGHTLY FURTHER LEFT & DOWN) */}
          <div className="w-full lg:max-w-2xl xl:max-w-3xl space-y-4 sm:space-y-6 pr-10 sm:pr-0">

            {/* Social Trust / Category Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-[11px] sm:text-xs font-medium shadow-sm"
            >
              <div className="flex -space-x-1.5 items-center">
                <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#2F7D16] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white border border-black/30">
                  <Sprout className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#B8F21B]" />
                </span>
                <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#1B4D1C] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-white border border-black/30">
                  <Cpu className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-300" />
                </span>
                <span className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#B8F21B] flex items-center justify-center text-[8px] sm:text-[9px] font-bold text-[#123B13] border border-black/30">
                  +
                </span>
              </div>
              <span className="text-[#B8F21B] font-semibold">
                {isHindi ? currentItem.badgeHi : currentItem.badgeEn}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-white/80 font-mono text-[10px] sm:text-[11px]">
                {isHindi ? "स्मार्ट • सस्टेनेबल" : "Smart • Sustainable"}
              </span>
            </motion.div>

            {/* DYNAMIC EDITORIAL HEADLINE (SONAR COMPOSITION: THIN SANS + ITALIC LIME ACCENT) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id + "-headline"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-3 sm:space-y-4"
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-[4.75rem] font-light text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                  {isHindi ? (
                    <>
                      <span>{currentItem.headlineHiPart1}</span>
                      <br />
                      <span>{currentItem.headlineHiPart2}</span>
                      <span className="font-normal italic text-[#B8F21B] drop-shadow-[0_0_20px_rgba(184,242,27,0.4)]">
                        {currentItem.headlineHiAccent}
                      </span>
                    </>
                  ) : (
                    <>
                      <span>{currentItem.headlineEnPart1}</span>
                      <br />
                      <span>{currentItem.headlineEnPart2}</span>
                      <span className="font-normal italic text-[#B8F21B] drop-shadow-[0_0_20px_rgba(184,242,27,0.4)]">
                        {currentItem.headlineEnAccent}
                      </span>
                    </>
                  )}
                </h1>

                {/* Supporting Editorial Paragraph */}
                <p className="text-sm sm:text-base lg:text-lg text-white/90 font-normal leading-relaxed max-w-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                  {isHindi ? currentItem.supportingHi : currentItem.supportingEn}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA: SINGLE PREMIUM "LEARN MORE" BUTTON WITH CIRCULAR ARROW HOVER EFFECT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-2"
            >
              <Link
                href="/solutions"
                className="group relative inline-flex items-center justify-between gap-4 pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-1.5 sm:py-2 rounded-full bg-[#B8F21B] text-[#111811] font-black text-xs sm:text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] shadow-[0_0_30px_rgba(184,242,27,0.4)] hover:shadow-[0_0_45px_rgba(184,242,27,0.65)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {/* Expanding Dark Backdrop from Icon on Hover */}
                <span
                  className="absolute right-2 sm:right-2.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#111811] -z-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-[15] pointer-events-none origin-center"
                />

                {/* Rolling Text Reveal (Dual Marquee Slide) */}
                <span className="relative z-10 block overflow-hidden h-[1.3em] pointer-events-none">
                  <span className="block font-black tracking-widest text-[#111811] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    {isHindi ? "और जानें" : "LEARN MORE"}
                  </span>
                  <span className="block font-black tracking-widest text-[#B8F21B] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-0 group-hover:-translate-y-full">
                    {isHindi ? "और जानें" : "LEARN MORE"}
                  </span>
                </span>

                {/* Dark Circle with Dual Sliding Arrow */}
                <span className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#111811] group-hover:bg-[#B8F21B] text-[#B8F21B] group-hover:text-[#111811] flex items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] shrink-0">
                  <ArrowRight className="w-4 h-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] transform group-hover:translate-x-6 group-hover:opacity-0" />
                  <ArrowRight className="w-4 h-4 absolute transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] transform -translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: TRANSLUCENT GLASS METRIC & TELEMETRY CARDS (SLIGHTLY FURTHER RIGHT & DOWN) */}
          <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id + "-telemetry"}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {/* Top Frosted Glass Stat Cards Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/[0.08] backdrop-blur-xl border border-white/15 shadow-xl">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                      {currentItem.stat1Val}
                    </div>
                    <div className="text-xs text-white/70 font-medium mt-1 leading-snug">
                      {isHindi ? currentItem.stat1LabelHi : currentItem.stat1LabelEn}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/[0.08] backdrop-blur-xl border border-white/15 shadow-xl">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#B8F21B] tracking-tight">
                      {currentItem.stat2Val}
                    </div>
                    <div className="text-xs text-white/70 font-medium mt-1 leading-snug">
                      {isHindi ? currentItem.stat2LabelHi : currentItem.stat2LabelEn}
                    </div>
                  </div>
                </div>

                {/* Bottom Verified Technical Credentials Banner */}
                <div className="p-4 rounded-2xl bg-white/[0.05] backdrop-blur-lg border border-white/10 flex items-center justify-between text-center gap-2">
                  <div className="flex-1">
                    <div className="text-sm sm:text-base font-bold text-white tracking-tight">ISO 9001</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">
                      {isHindi ? "गुणवत्ता मानक" : "Quality Standard"}
                    </div>
                  </div>
                  <div className="w-px h-6 bg-white/20" />
                  <div className="flex-1">
                    <div className="text-sm sm:text-base font-bold text-[#B8F21B] tracking-tight">IoT Active</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">
                      {isHindi ? "स्मार्ट ऑटोमेशन" : "Smart Automation"}
                    </div>
                  </div>
                  <div className="w-px h-6 bg-white/20" />
                  <div className="flex-1">
                    <div className="text-sm sm:text-base font-bold text-white tracking-tight">100% Bio</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">
                      {isHindi ? "प्राकृतिक चक्र" : "Natural Cycle"}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Global Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </section>
  );
};



