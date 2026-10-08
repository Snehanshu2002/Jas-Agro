"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Layers,
  Cpu,
  Radio,
  Sun,
  Droplet,
  Shield,
  TrendingUp,
  ArrowRight,
  Feather as FeatherIcon,
  CheckCircle,
  Calendar,
  Compass,
  Zap,
  Target,
  Eye,
  ChevronRight,
  PhoneCall,
  MapPin,
  Award,
  RefreshCw,
  Sliders,
} from "react-feather";

// Feather Icons compatibility mappings
const Sprout = FeatherIcon;
const Leaf = FeatherIcon;
const Trees = FeatherIcon;
const Droplets = Droplet;
const ShieldCheck = Shield;
const CheckCircle2 = CheckCircle;
const Flame = Zap;
const FlaskConical = Sliders;
const Recycle = RefreshCw;
const Scale = Sliders;
const Waves = Droplet;
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { LivingStrataSimulator } from "@/components/about/LivingStrataSimulator";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1FDF0] dark:bg-[#071508] text-[#141E17] dark:text-[#E8F4E8] font-['Jost',sans-serif] antialiased selection:bg-[#A6F85F] selection:text-[#0D2000] transition-colors duration-300">
      {/* Global Navigation */}
      <Navbar />

      <main className="w-full pt-20 sm:pt-24">
        {/* =========================================================================
            1. HERO SECTION — 'WHO WE ARE'
           ========================================================================= */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Headline & Narrative (7 Cols) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFEBDF] dark:bg-[#163824] text-[#002210] dark:text-[#A6F85F] border border-[#C2C8C0]/50 dark:border-white/10 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#376B00] dark:bg-[#A6F85F] animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-bold">
                  {isHindi
                    ? "JAS एग्रो परिचय • सतत कृषि एवं जैविक सिस्टम्स"
                    : "About JAS Agro • Sustainable Agri-Tech & Biology"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight leading-[1.1]">
                {isHindi ? (
                  <>
                    कृषि के भविष्य का निर्माण,{" "}
                    <span className="text-[#376B00] dark:text-[#A6F85F] font-medium italic">
                      जमीन से लेकर तकनीक तक।
                    </span>
                  </>
                ) : (
                  <>
                    Building the Future of Farming,{" "}
                    <span className="text-[#376B00] dark:text-[#A6F85F] font-medium italic">
                      From the Ground Up.
                    </span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-[#424843] dark:text-[#E8F4E8]/80 max-w-2xl leading-relaxed font-normal">
                {isHindi
                  ? "हम प्राकृतिक जैविक मृदा सुधार, उच्च-प्रोटीन जैविक चारा संवर्धन और सौर IoT ऑटोमेशन को एकजुट कर भारतीय किसानों को मजबूत और टिकाऊ उत्पादकता प्रदान करते हैं।"
                  : "We unite living soil biology, high-protein forage cultivation, and solar IoT telemetry to help Indian farms build resilient, high-yield agricultural systems."}
              </p>

              {/* Live Telemetry Grid Ribbon */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-between shadow-xs">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#727972] dark:text-[#A3C2A1]">
                    {isHindi ? "कुल बायोमास" : "Biomass Grown"}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight mt-1">
                    42,000+
                  </span>
                  <span className="text-xs text-[#376B00] dark:text-[#A6F85F] font-semibold mt-0.5">
                    {isHindi ? "MT जैविक उत्पादन" : "MT Harvested"}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-between shadow-xs">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#727972] dark:text-[#A3C2A1]">
                    {isHindi ? "सेंसर अपटाइम" : "Active Nodes"}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight mt-1">
                    120+
                  </span>
                  <span className="text-xs text-[#376B00] dark:text-[#A6F85F] font-semibold mt-0.5">
                    {isHindi ? "IoT प्रोब्स लाइव" : "LoRa Telemetry"}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-between shadow-xs">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#727972] dark:text-[#A3C2A1]">
                    {isHindi ? "चारा लागत बचत" : "Feed Cost Cut"}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight mt-1">
                    30–38%
                  </span>
                  <span className="text-xs text-[#376B00] dark:text-[#A6F85F] font-semibold mt-0.5">
                    {isHindi ? "डेयरी राशन में" : "Livestock Feed"}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-between shadow-xs">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#727972] dark:text-[#A3C2A1]">
                    {isHindi ? "रासायनिक यूरिया" : "Zero Synthetic"}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight mt-1">
                    100%
                  </span>
                  <span className="text-xs text-[#376B00] dark:text-[#A6F85F] font-semibold mt-0.5">
                    {isHindi ? "पूर्ण जैविक शुद्धता" : "Residue Free"}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Visual Anchor (5 Cols) */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 relative mt-4 lg:mt-0"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DAE6DA] dark:border-white/10 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-[#002210]">
                <img
                  src="/media/Industrial Oyster Mushroom Farm.png"
                  alt="JAS Agro Research Facility and Field Operations"
                  className="w-full h-full object-cover"
                />

                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002210]/90 via-[#002210]/20 to-transparent pointer-events-none" />

                {/* Micro-Metric Floating Spec Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#002210]/95 text-white backdrop-blur-md border border-white/15 flex items-center justify-between shadow-2xl">
                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#A6F85F] animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#A6F85F]">
                        {isHindi ? "लाइव फील्ड नोड #04" : "Field Research Station #04"}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-white font-medium">
                      {isHindi ? "राजस्थान केंद्र • 26°55'N 75°49'E" : "Rajasthan Facility • 26°55'N 75°49'E"}
                    </p>
                    <p className="text-xs text-[#AAD0B3]">
                      Ambient: 24.8°C | VPD: 1.18 kPa | Sync: Live
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#A6F85F] shrink-0 border border-white/10">
                    <Radio className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            2. OPERATIONAL PILLARS (Clean Light in Light, Deep Forest in Dark)
           ========================================================================= */}
        <section className="w-full bg-[#EBF7EB] dark:bg-[#0D230E] py-16 sm:py-20 lg:py-24 border-y border-[#DAE6DA] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs uppercase tracking-widest text-[#376B00] dark:text-[#A6F85F] font-bold">
                  {isHindi ? "परिचालन आधारस्तंभ" : "OPERATIONAL PILLARS"}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                  {isHindi ? "जहाँ जीवविज्ञान और तकनीक मिलते हैं" : "Where Biology Meets Applied Technology"}
                </h2>
                <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "उच्च-उपज बायोमास उत्पादन, टिकाऊ चारा सुरक्षा और खेत टेलीमेट्री के लिए पांच परस्पर जुड़े हुए सिस्टम।"
                    : "Five interconnected biological and technological systems engineered for farm resilience and resource efficiency."}
                </p>
              </div>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              {/* Pillar 1: Oyster Mushroom Cultivation (7 Cols with Image) */}
              <div className="lg:col-span-7 bg-white dark:bg-[#163824]/60 rounded-3xl p-6 sm:p-8 border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-between shadow-sm text-left">
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] font-bold">
                      01 // High-Value Mycology
                    </span>
                    <span className="text-xs text-[#727972] dark:text-[#A3C2A1] font-semibold">
                      CO₂ 850ppm • RH 93.5%
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "ऑयस्टर मशरूम कल्टीवेशन" : "Oyster Mushroom Cultivation"}
                  </h3>
                  <p className="text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "कृषि भूसे का उपयोग कर इंसुलेटेड कमरों में उच्च-गुणवत्ता वाले मशरूम का उत्पादन। अल्ट्रासोनिक फॉगिंग से वर्ष भर स्थिर पैदावार।"
                      : "Climate-controlled fruiting chambers converting cereal straw into premium culinary protein with 98% less water than traditional pasture."}
                  </p>
                </div>

                <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9] relative border border-[#DAE6DA] dark:border-white/10 bg-[#002210]">
                  <img
                    src="/media/mush1.png"
                    alt="Controlled Oyster Mushroom Chambers"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#002210]/85 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A6F85F] animate-pulse" />
                    {isHindi ? "स्टेरिल बायो-फ्रूटिंग जोन" : "Sterile Fruiting Zone"}
                  </div>
                </div>
              </div>

              {/* Pillar 2: Super Napier (5 Cols) */}
              <div className="lg:col-span-5 bg-white dark:bg-[#163824]/60 rounded-3xl p-6 sm:p-8 border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-between shadow-sm text-left">
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] font-bold">
                      02 // Green Forage
                    </span>
                    <span className="text-xs text-[#376B00] dark:text-[#A6F85F] font-bold">
                      16–18% Crude Protein
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "हाइब्रिड सुपर नेपियर घास" : "Hybrid Super Napier Forage"}
                  </h3>
                  <p className="text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "प्रति एकड़ सालाना 200+ टन पैदावार देने वाली बहुवर्षीय चारा घास, जो डेयरी पशुओं की राशन लागत 35% तक कम करती है।"
                      : "Perennial forage yielding over 200 tonnes per acre annually. Replaces expensive commercial concentrates for dairy livestock."}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#DAE6DA] dark:border-white/10 space-y-2.5 text-xs text-[#141E17] dark:text-[#E8F4E8]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "कटाई चक्र" : "Cutting Cycle"}</span>
                    <span className="text-[#002210] dark:text-white font-bold">{isHindi ? "हर 45-50 दिन" : "Every 45–50 Days"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "वार्षिक बायोमास" : "Annual Biomass"}</span>
                    <span className="text-[#376B00] dark:text-[#A6F85F] font-bold">200+ MT / Acre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "जीवनकाल" : "Ratoon Longevity"}</span>
                    <span className="text-[#002210] dark:text-white font-bold">5 Continuous Years</span>
                  </div>
                </div>
              </div>

              {/* Pillar 3: Azolla (4 Cols) */}
              <div className="lg:col-span-4 bg-white dark:bg-[#163824]/60 rounded-3xl p-6 sm:p-7 border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-between shadow-sm text-left">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] font-bold">
                      03 // Bio-Nitrogen
                    </span>
                    <Sprout className="w-5 h-5 text-[#376B00] dark:text-[#A6F85F]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "अजोला जलीय कल्चर" : "Azolla Aquatic Bio-Culture"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "25-30% क्रूड प्रोटीन वाला जलीय फर्न जो हर 48 घंटे में बायोमास दोगुना करता है और प्राकृतिक नाइट्रोजन फिक्स करता है।"
                      : "Nitrogen-fixing aquatic micro-fern doubling biomass every 48 hours to supply daily high-protein live feed."}
                  </p>
                </div>
                <div className="mt-5 p-3 rounded-xl bg-[#F1FDF0] dark:bg-[#002210] text-xs text-[#376B00] dark:text-[#A6F85F] font-semibold flex items-center gap-2 border border-[#DAE6DA] dark:border-white/10">
                  <Leaf className="w-4 h-4 shrink-0" />
                  <span>{isHindi ? "दूध उत्पादन में 10-15% वृद्धि" : "Boosts dairy milk yield by 10–15%"}</span>
                </div>
              </div>

              {/* Pillar 4: Vermicompost (4 Cols) */}
              <div className="lg:col-span-4 bg-white dark:bg-[#163824]/60 rounded-3xl p-6 sm:p-7 border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-between shadow-sm text-left">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] font-bold">
                      04 // Living Soil Humus
                    </span>
                    <Recycle className="w-5 h-5 text-[#376B00] dark:text-[#A6F85F]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "जैविक वर्मीकंपोस्ट" : "Bio-Vermicomposting"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "गोबर और मशरूम अवशेषों को जीवित ह्यूमस में बदलना। मिट्टी में नमी धारण क्षमता और जैविक कार्बन को बढ़ाता है।"
                      : "Converts farm dung and crop waste into living microbial castings and liquid vermi-wash for root nourishment."}
                  </p>
                </div>
                <div className="mt-5 p-3 rounded-xl bg-[#F1FDF0] dark:bg-[#002210] text-xs text-[#376B00] dark:text-[#A6F85F] font-semibold flex items-center gap-2 border border-[#DAE6DA] dark:border-white/10">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{isHindi ? "100% गैर-रासायनिक शुद्धता" : ">16% Organic Carbon (SOC)"}</span>
                </div>
              </div>

              {/* Pillar 5: Smart Agriculture / IoT (4 Cols) */}
              <div className="lg:col-span-4 bg-white dark:bg-[#163824]/60 rounded-3xl p-6 sm:p-7 border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-between shadow-sm text-left">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] font-bold">
                      05 // Telemetry & IoT
                    </span>
                    <Cpu className="w-5 h-5 text-[#376B00] dark:text-[#A6F85F]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "स्मार्ट एग्री टेलीमेट्री" : "Smart Agri & IoT Telemetry"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "सौर ऊर्जा संचालित ESP32 स्टेशन जो मृदा नमी और वाष्प दबाव घाटे (VPD) के आधार पर सिंचाई को स्वचालित करते हैं।"
                      : "Solar LoRaWAN masts tracking root moisture and canopy VPD to automate irrigation valves and misting lines."}
                  </p>
                </div>
                <div className="mt-5 p-3 rounded-xl bg-[#F1FDF0] dark:bg-[#002210] text-xs text-[#376B00] dark:text-[#A6F85F] font-semibold flex items-center gap-2 border border-[#DAE6DA] dark:border-white/10">
                  <Sun className="w-4 h-4 shrink-0" />
                  <span>{isHindi ? "सिंचाई जल में 42% तक बचत" : "Saves up to 42% irrigation water"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. CONNECTED SYSTEM ARCHITECTURE
           ========================================================================= */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="space-y-3 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#376B00] dark:text-[#A6F85F] font-bold">
              {isHindi ? "एकीकृत चक्र" : "INTEGRATED LOOP"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
              {isHindi ? "मृदा जीवविज्ञान से माइक्रोकंट्रोलर टेलीमेट्री तक" : "From Soil Biology to Micro-Controller Telemetry"}
            </h2>
            <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
              {isHindi
                ? "हमारा मॉडल एक शून्य-अपशिष्ट चक्र बनाता है जहाँ प्रत्येक मॉड्यूल का उपोत्पाद अगले चरण का प्राथमिक पोषक तत्व बनता है।"
                : "A self-sustaining biological loop where byproducts from one production layer become the nutrient foundation for the next."}
            </p>
          </div>

          {/* Connected Flow Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {/* Node 1 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-3 shadow-xs hover:border-[#376B00] dark:hover:border-[#A6F85F] transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] flex items-center justify-center text-[#376B00] dark:text-[#A6F85F] font-bold text-sm">
                01
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "मृदा एवं बायो-ह्यूमस" : "Soil & Bio-Humus"}
              </h4>
              <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "अजोला तालाब जैविक नाइट्रोजन बनाते हैं और केंचुआ खाद रेतीली मिट्टी में जैविक कार्बन स्थापित करती है।"
                  : "Azolla fixes biological nitrogen while earthworms condition sandy loam with stable humic matter."}
              </p>
              <div className="pt-2 text-xs text-[#376B00] dark:text-[#A6F85F] font-bold flex items-center gap-1">
                <span>Organic Carbon +0.8%</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Node 2 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-3 shadow-xs hover:border-[#376B00] dark:hover:border-[#A6F85F] transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] flex items-center justify-center text-[#376B00] dark:text-[#A6F85F] font-bold text-sm">
                02
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "फसलें एवं प्रोटीन" : "Forage & Protein"}
              </h4>
              <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "सुपर नेपियर उच्च-प्रोटीन हरा चारा देती है और ऑयस्टर मशरूम सूखे भूसे को खाद्य प्रोटीन में बदलते हैं।"
                  : "Super Napier yields dense forage while mushroom grow rooms convert spent straw into culinary yield."}
              </p>
              <div className="pt-2 text-xs text-[#376B00] dark:text-[#A6F85F] font-bold flex items-center gap-1">
                <span>Yield: 200+ MT/acre</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Node 3 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-3 shadow-xs hover:border-[#376B00] dark:hover:border-[#A6F85F] transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] flex items-center justify-center text-[#376B00] dark:text-[#A6F85F] font-bold text-sm">
                03
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "IoT टेलीमेट्री ग्रिड" : "IoT Telemetry Grid"}
              </h4>
              <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "मृदा नमी प्रोब और वेदर सेंसर हर 15 सेकंड में फसल जल-तनाव और वाष्पीकरण डेटा मापते हैं।"
                  : "Multi-depth SDI-12 probes and micro-stations read root tension and canopy vapor deficit in real time."}
              </p>
              <div className="pt-2 text-xs text-[#376B00] dark:text-[#A6F85F] font-bold flex items-center gap-1">
                <span>Pings every 15s</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Node 4 */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-3 shadow-xs hover:border-[#376B00] dark:hover:border-[#A6F85F] transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] flex items-center justify-center text-[#376B00] dark:text-[#A6F85F] font-bold text-sm">
                04
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "स्वचालित निर्णय" : "Closed-Loop Actions"}
              </h4>
              <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "सेंसर आधारित स्वचालित ड्रिप और मिस्टिंग से पानी की बचत और फसल पैदावार दोनों सुनिश्चित होती हैं।"
                  : "Autonomous solenoid valves actuate misting and irrigation dynamically to preserve groundwater."}
              </p>
              <div className="pt-2 text-xs text-[#376B00] dark:text-[#A6F85F] font-bold flex items-center gap-1">
                <span>Water Saved: -42%</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#376B00] dark:text-[#A6F85F]" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. THE LIVING BIOLOGICAL STRATA (Intentional Dark 3D Section)
           ========================================================================= */}
        <section className="w-full bg-[#002210] py-16 sm:py-20 lg:py-24 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163824] text-[#A6F85F] text-xs font-bold uppercase tracking-wider border border-[#A6F85F]/20">
                  <span className="w-2 h-2 rounded-full bg-[#A6F85F] animate-pulse" />
                  {isHindi ? "इंटरएक्टिव 3D स्थानिक मॉडल" : "INTERACTIVE 3D SPATIAL MODEL"}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {isHindi ? "द लिविंग बायोलॉजिकल स्ट्रेटा" : "The Living Biological Strata"}
                </h2>
                <p className="text-sm text-[#AAD0B3] leading-relaxed">
                  {isHindi
                    ? "JAS Agro टेस्टबेड के बहुस्तरीय जैविक और डिजिटल नेटवर्क का अन्वेषण करें।"
                    : "Explore the continuum of the JAS Agro testbed: from soil microbes to atmospheric micro-climate."}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs uppercase tracking-wider border border-white/10">
                  {isHindi ? "इंटरएक्टिव 3D दृश्य" : "INTERACTIVE 3D VIEW"}
                </span>
              </div>
            </div>

            {/* Canvas Interactive Simulation */}
            <LivingStrataSimulator />
          </div>
        </section>

        {/* =========================================================================
            5. THE EVOLUTION OF JAS AGRO (Clean Cards with Dark Mode Support)
           ========================================================================= */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="space-y-2 text-left max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#376B00] dark:text-[#A6F85F] font-bold">
              {isHindi ? "उपलब्धियां एवं सफर" : "MILESTONES & TRAJECTORY"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
              {isHindi ? "JAS एग्रो का विकास सफर" : "The Evolution of JAS Agro"}
            </h2>
            <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
              {isHindi
                ? "राजस्थान में जैविक अनुसंधान से लेकर आज राज्यव्यापी स्मार्ट कृषि क्लस्टर तक।"
                : "From arid-soil biological trials in Rajasthan to regional IoT-automated smart farming clusters."}
            </p>
          </div>

          {/* Clean Horizontal Timeline Strip */}
          <div className="mt-10 space-y-4 text-left">
            {/* 2016 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 items-center shadow-xs">
              <div className="md:col-span-2">
                <span className="text-3xl font-extrabold text-[#002210] dark:text-[#FAFAF5]">2016</span>
                <span className="block text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold mt-0.5">
                  {isHindi ? "स्थापना एवं आरएंडडी" : "Inception"}
                </span>
              </div>
              <div className="md:col-span-6 space-y-1">
                <h4 className="text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "स्थापना एवं जैविक चारा अनुसंधान" : "Founding & Organic Fodder Biology"}
                </h4>
                <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "राजस्थान की शुष्क मिट्टी पर केंचुआ खाद और कम पानी वाले अजोला तालाबों का विकास।"
                    : "Initiated field trials on arid Rajasthan soil, formulating low-water Azolla aquatic culture beds and vermicomposting."}
                </p>
              </div>
              <div className="md:col-span-4 bg-[#F1FDF0] dark:bg-[#002210] p-4 rounded-2xl border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-center">
                <span className="text-xs text-[#727972] dark:text-[#A3C2A1] uppercase tracking-wider font-semibold">
                  {isHindi ? "प्रारंभिक उपलब्धि" : "Key Milestone"}
                </span>
                <span className="text-sm font-bold text-[#002210] dark:text-white mt-0.5">
                  100% Organic Soil Restoration
                </span>
              </div>
            </div>

            {/* 2018 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 items-center shadow-xs">
              <div className="md:col-span-2">
                <span className="text-3xl font-extrabold text-[#002210] dark:text-[#FAFAF5]">2018</span>
                <span className="block text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold mt-0.5">
                  {isHindi ? "चारा विस्तार" : "Forage Scale"}
                </span>
              </div>
              <div className="md:col-span-6 space-y-1">
                <h4 className="text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "हाइब्रिड सुपर नेपियर का प्रसार" : "Hybrid Super Napier Multiplication"}
                </h4>
                <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "डेयरी किसानों में गर्मियों के हरे चारे की कमी दूर करने हेतु सुपर नेपियर तनों का वितरण।"
                    : "Scaled commercial distribution of high-tiller Super Napier slips to resolve acute summer green-fodder deficits."}
                </p>
              </div>
              <div className="md:col-span-4 bg-[#F1FDF0] dark:bg-[#002210] p-4 rounded-2xl border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-center">
                <span className="text-xs text-[#727972] dark:text-[#A3C2A1] uppercase tracking-wider font-semibold">
                  {isHindi ? "क्षेत्रीय प्रभाव" : "Regional Impact"}
                </span>
                <span className="text-sm font-bold text-[#002210] dark:text-white mt-0.5">
                  1.2M+ Root Slips Supplied
                </span>
              </div>
            </div>

            {/* 2020 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 items-center shadow-xs">
              <div className="md:col-span-2">
                <span className="text-3xl font-extrabold text-[#002210] dark:text-[#FAFAF5]">2020</span>
                <span className="block text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold mt-0.5">
                  {isHindi ? "माइकोलॉजी सिस्टम" : "Mycology"}
                </span>
              </div>
              <div className="md:col-span-6 space-y-1">
                <h4 className="text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "नियंत्रित ऑयस्टर मशरूम चैंबर्स" : "Controlled Oyster Mushroom Chambers"}
                </h4>
                <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "कृषि भूसे पर आधारित इंसुलेटेड इंडोर फ्रूटिंग रूम्स और अल्ट्रासोनिक मिस्टिंग प्रोटोकॉल की स्थापना।"
                    : "Pioneered climate-insulated indoor fruiting rooms converting cereal straw residues into high-margin gourmet mushroom yield."}
                </p>
              </div>
              <div className="md:col-span-4 bg-[#F1FDF0] dark:bg-[#002210] p-4 rounded-2xl border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-center">
                <span className="text-xs text-[#727972] dark:text-[#A3C2A1] uppercase tracking-wider font-semibold">
                  {isHindi ? "उत्पादन क्षमता" : "Yield Capacity"}
                </span>
                <span className="text-sm font-bold text-[#002210] dark:text-white mt-0.5">
                  18 MT Monthly Fungi Capacity
                </span>
              </div>
            </div>

            {/* 2023 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 items-center shadow-xs">
              <div className="md:col-span-2">
                <span className="text-3xl font-extrabold text-[#002210] dark:text-[#FAFAF5]">2023</span>
                <span className="block text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold mt-0.5">
                  {isHindi ? "अप्लाइड IoT" : "Smart IoT"}
                </span>
              </div>
              <div className="md:col-span-6 space-y-1">
                <h4 className="text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "ESP32 टेलीमेट्री नोड्स का रोलआउट" : "Commercialization of ESP32 Telemetry"}
                </h4>
                <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "सौर-संचालित सेंसर नोड्स और वाष्प दबाव घाटे (VPD) आधारित स्वचालित सिंचाई नियंत्रण की तैनाती।"
                    : "Deployed solar-powered field sensors with automated valve actuation governed by real-time plant transpiration."}
                </p>
              </div>
              <div className="md:col-span-4 bg-[#F1FDF0] dark:bg-[#002210] p-4 rounded-2xl border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-center">
                <span className="text-xs text-[#727972] dark:text-[#A3C2A1] uppercase tracking-wider font-semibold">
                  {isHindi ? "कनेक्टेड ग्रिड" : "Connected Grid"}
                </span>
                <span className="text-sm font-bold text-[#002210] dark:text-white mt-0.5">
                  120+ Micro-Stations Active
                </span>
              </div>
            </div>

            {/* 2026 / Present */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border-2 border-[#376B00] dark:border-[#A6F85F] items-center shadow-sm">
              <div className="md:col-span-2">
                <span className="text-3xl font-extrabold text-[#376B00] dark:text-[#A6F85F]">2026</span>
                <span className="block text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold mt-0.5">
                  {isHindi ? "वर्तमान व भविष्य" : "Present Arc"}
                </span>
              </div>
              <div className="md:col-span-6 space-y-1">
                <h4 className="text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "नेक्स्ट-जेन एग्रो-इकोलॉजिकल नेटवर्क" : "Next-Gen Agro-Ecological Network"}
                </h4>
                <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "5,000+ एकड़ में विकेंद्रीकृत जैविक चारा और स्मार्ट कृषि टेलीमेट्री का विस्तार।"
                    : "Expanding integrated biological micro-farms across 5,000+ acres with predictive weather automation."}
                </p>
              </div>
              <div className="md:col-span-4 bg-[#EBF7EB] dark:bg-[#002210] p-4 rounded-2xl border border-[#DAE6DA] dark:border-white/10 flex flex-col justify-center">
                <span className="text-xs text-[#376B00] dark:text-[#A6F85F] uppercase tracking-wider font-bold">
                  {isHindi ? "लक्ष्य विस्तार" : "Active Deployment"}
                </span>
                <span className="text-sm font-bold text-[#002210] dark:text-white mt-0.5">
                  5,000 Acres Under Telemetry
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. OUR SYSTEMIC APPROACH (Process Cards with Dark Mode Support)
           ========================================================================= */}
        <section className="w-full bg-[#EBF7EB] dark:bg-[#0D230E] py-16 sm:py-20 lg:py-24 border-y border-[#DAE6DA] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#376B00] dark:text-[#A6F85F] font-bold">
                {isHindi ? "मानक संचालन प्रोटोकॉल" : "STANDARD OPERATING PROTOCOL"}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "टिकाऊ खेती। सटीक माप। सशक्त भविष्य।" : "Grow Sensibly. Measure Intelligently. Build for the Future."}
              </h2>
              <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "हमारा छह-चरणीय वर्कफ़्लो बिना किसी जैविक समझौते के टिकाऊ कृषि परिणाम सुनिश्चित करता है।"
                  : "A structured engineering workflow delivering measurable yield improvements without biological compromise."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
              {/* Step 1 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] flex items-center justify-center font-bold text-xs">
                  1
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "मृदा एवं माइक्रॉक्लाइमेट का विश्लेषण" : "Understand Soil & Micro-climate"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "मृदा लवणता, जल गुणवत्ता और स्थानीय सौर विकिरण का सटीक रासायनिक व भौतिक परीक्षण।"
                    : "Soil chemistry testing, water salinity check, and local VPD irradiance mapping before planning."}
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "अनुकूल जैविक सिस्टम का चयन" : "Select Custom Biological System"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "फार्म के अनुसार अजोला तालाब, वर्मीकंपोस्ट बेड और सुपर नेपियर प्लॉट्स का लेआउट।"
                    : "Tailoring the combination of Azolla ponds, vermicompost windrows, and forage acreage to your farm."}
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "सटीक खेती एवं फ्रूटिंग सेटअप" : "Implement Turnkey Infrastructure"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "मशरूम ग्रो रूम इंसुलेशन, ड्रिप नेटवर्क और शेड हाउस का ऑन-साइट निर्माण।"
                    : "On-site construction of shaded grow beds, mushroom fruiting panels, and micro-misting lines."}
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] flex items-center justify-center font-bold text-xs">
                  4
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "पर्यावरणीय IoT ग्रिड की स्थापना" : "Deploy Environmental IoT Grid"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "सौर-संचालित ESP32 नोड्स और मल्टी-डेप्थ मृदा प्रोब्स की स्थापना।"
                    : "Installation of off-grid solar telemetry micro-stations and subterranean root sensors."}
                </p>
              </div>

              {/* Step 5 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] flex items-center justify-center font-bold text-xs">
                  5
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "निरंतर वीपीडी एवं नमी अनुकूलन" : "Continuously Optimize VPD"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "पौधे की वास्तविक मांग के आधार पर स्वचालित मिस्टिंग और ड्रिप सिंचाई।"
                    : "Automated solenoid misting driven by plant transpiration thresholds rather than rigid timers."}
                </p>
              </div>

              {/* Step 6 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] flex items-center justify-center font-bold text-xs">
                  6
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "व्यावसायिक लाभप्रदता का विस्तार" : "Scale Commercial Viability"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "उत्पादित बायोमास और उच्च-प्रोटीन चारे से इनपुट लागत कम कर मुनाफा बढ़ाना।"
                    : "Reducing feed and fertilizer overheads while unlocking high-margin mushroom and dairy revenue."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. WHY INDIAN AGRICULTURE RELIES ON JAS AGRO (Dark Mode Support)
           ========================================================================= */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#376B00] dark:text-[#A6F85F] font-bold">
              {isHindi ? "अडिग सिद्धांत" : "CONCRETE PROOF POINTS"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
              {isHindi ? "भारतीय कृषि क्यों करती है JAS Agro पर भरोसा" : "Why Indian Agriculture Relies on JAS Agro"}
            </h2>
            <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
              {isHindi
                ? "हम वास्तविक खेत की मिट्टी में जैविक समाधान और टिकाऊ हार्डवेयर तैयार करते हैं।"
                : "We engineer rugged hardware and verified biology right inside real farm soil."}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] flex items-center justify-center">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "खेत में परीक्षित जीवविज्ञान, केवल लैब सिद्धांत नहीं" : "Field-Tested Soil Biology, Not Lab Theory"}
              </h3>
              <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "हमारे द्वारा अनुशंसित प्रत्येक फसल और बायो-इनोकुलम को राजस्थान के शुष्क मौसम और खारे पानी में परखा गया है।"
                  : "Every microbial inoculum and forage crop hybrid is stressed and proven in arid climates with water salinity up to 4.2 dS/m."}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#376B00] dark:text-[#A6F85F] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thar Desert Proven Under 48°C Heat</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "शून्य रसायन, पूर्ण जैविक सत्यनिष्ठा" : "Zero-Chemical, Zero-Compromise Integrity"}
              </h3>
              <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "अजोला नाइट्रोजन फिक्सेशन और वर्मीकास्ट से भूजल को नुकसान पहुँचाए बिना बेहतर फसल बायोमास।"
                  : "Leveraging Azolla bio-fixation and cold-cured vermicast to achieve superior yields without contaminating water tables."}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#376B00] dark:text-[#A6F85F] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>NPOP & Organic Compliant Standards</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "भारतीय मौसम के अनुकूल निर्मित इंडस्ट्रियल हार्डवेयर" : "Industrial Hardware Built for Indian Weather"}
              </h3>
              <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "48°C की धूल भरी आंधियों में चलने वाले IP67 एनक्लोजर और मोनोक्रिस्टलाइन सोलर व LiFePO4 बैटरी से निरंतर बैकअप।"
                  : "Potted in IP67 weatherproof enclosures with monocrystalline solar panels and LiFePO4 batteries for 7-day reserve."}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#376B00] dark:text-[#A6F85F] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Operational Range: -5°C to 55°C</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#EBF7EB] dark:bg-[#002210] text-[#376B00] dark:text-[#A6F85F] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "खेत में प्रत्यक्ष विशेषज्ञ मार्गदर्शन एवं सहयोग" : "End-to-End Farm Stewardship"}
              </h3>
              <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "हमारे कृषि वैज्ञानिक खेत की तैयारी, रोपण और लाइव टेलीमेट्री कैलिब्रेशन के दौरान खेत पर साथ रहते हैं।"
                  : "Our agronomy engineers assist with land grading, seed rootstock planting, and live telemetry tuning on-site."}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#376B00] dark:text-[#A6F85F] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Dedicated Field Agronomist Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. MISSION & VISION (Intentional Deep Forest Section)
           ========================================================================= */}
        <section className="w-full bg-[#163824] text-[#FAFAF5] py-16 sm:py-20 lg:py-24 relative overflow-hidden text-left border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#A6F85F] font-bold">
                  {isHindi ? "हमारा मूल उद्देश्य" : "OUR CORE PURPOSE"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {isHindi ? "JAS एग्रो का अधिदेश" : "The JAS Agro Mandate"}
                </h2>
                <div className="h-1 w-14 bg-[#A6F85F] rounded-full mt-3" />
              </div>

              <div className="lg:col-span-8 space-y-8">
                {/* Mission */}
                <div className="space-y-2.5">
                  <span className="text-xs uppercase tracking-wider text-[#A6F85F] font-bold block">
                    01 // {isHindi ? "लक्ष्य (MISSION)" : "MISSION"}
                  </span>
                  <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-snug">
                    {isHindi
                      ? "“किसानों, डेयरी फार्मों और कृषि उद्यमों को उच्च-दक्षता वाले जैविक समाधान, उच्च-प्रोटीन पशु आहार और सटीक माइक्रॉक्लाइमेट तकनीक से सशक्त बनाना।”"
                      : "“To equip farmers, dairies, and agricultural enterprises with high-efficiency organic solutions, high-protein livestock feeds, and precision micro-climate technology.”"}
                  </p>
                  <p className="text-xs sm:text-sm text-[#AAD0B3] max-w-xl leading-relaxed">
                    {isHindi
                      ? "मापने योग्य बायोमास वृद्धि, रासायनिक निर्भरता का उन्मूलन, और भूजल की सुरक्षा।"
                      : "Delivering quantifiable biomass increases, eliminating chemical reliance, and protecting ground aquifers."}
                  </p>
                </div>

                <div className="w-full h-px bg-white/15" />

                {/* Vision */}
                <div className="space-y-2.5">
                  <span className="text-xs uppercase tracking-wider text-[#A6F85F] font-bold block">
                    02 // {isHindi ? "दृष्टि (VISION)" : "VISION"}
                  </span>
                  <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-snug">
                    {isHindi
                      ? "“इंटेलिजेंट और शून्य-रसायन कृषि की दिशा में क्रांति लाना, जहाँ माइक्रोकंट्रोलर और जैविक विज्ञान मिलकर काम करें।”"
                      : "“To lead the transformation toward intelligent, zero-chemical agriculture where micro-controllers and biological science work seamlessly together.”"}
                  </p>
                  <p className="text-xs sm:text-sm text-[#AAD0B3] max-w-xl leading-relaxed">
                    {isHindi
                      ? "यह सिद्ध करना कि उच्च-उत्पादक व्यावसायिक खेती और मृदा का कायाकल्प एक साथ संभव है।"
                      : "Proving that high-yield commercial farming and living soil rejuvenation actively reinforce each other."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. ECOLOGICAL & ECONOMIC IMPACT (Dark Mode Support)
           ========================================================================= */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#376B00] dark:text-[#A6F85F] font-bold">
              {isHindi ? "सत्यापित परिणाम" : "AUDITED IMPACT"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
              {isHindi ? "पारिस्थितिक एवं आर्थिक प्रभाव" : "Ecological & Economic Impact"}
            </h2>
            <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
              {isHindi
                ? "सक्रिय JAS Agro फील्ड इंस्टॉलेशन में दर्ज किए गए ठोस संसाधन संरक्षण और किसान आय संवर्धन के आंकड़े।"
                : "Real resource conservation and rural cost reduction recorded across active partner farms."}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-2 shadow-xs">
              <Droplets className="w-7 h-7 text-[#376B00] dark:text-[#A6F85F]" />
              <span className="text-3xl sm:text-4xl font-extrabold text-[#002210] dark:text-[#FAFAF5] block mt-2">
                -42%
              </span>
              <h4 className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "जल संरक्षण" : "Water Conservation"}
              </h4>
              <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "पारंपरिक बाढ़ सिंचाई की तुलना में VPD आधारित मिस्टिंग द्वारा पानी की बचत।"
                  : "Driven by real-time VPD transpirational triggers vs. traditional flood irrigation."}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-2 shadow-xs">
              <TrendingUp className="w-7 h-7 text-[#376B00] dark:text-[#A6F85F]" />
              <span className="text-3xl sm:text-4xl font-extrabold text-[#002210] dark:text-[#FAFAF5] block mt-2">
                2.4×
              </span>
              <h4 className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "डेयरी मुनाफा वृद्धि" : "Dairy Margin Gain"}
              </h4>
              <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "महंगे दाने के स्थान पर खेत में उगाई गई नेपियर और अजोला प्रोटीन के उपयोग से।"
                  : "Achieved by replacing expensive commercial concentrates with on-farm forage."}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-2 shadow-xs">
              <Sprout className="w-7 h-7 text-[#376B00] dark:text-[#A6F85F]" />
              <span className="text-3xl sm:text-4xl font-extrabold text-[#002210] dark:text-[#FAFAF5] block mt-2">
                1,850 MT
              </span>
              <h4 className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "मृदा कार्बन संचय" : "Soil Carbon Added"}
              </h4>
              <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "निरंतर जैविक खाद और बायो-ह्यूमस के प्रयोग से ऊपरी मिट्टी में सुधार।"
                  : "Restored to depleted topsoil matrices through continuous bio-humus applications."}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#DAE6DA] dark:border-white/10 space-y-2 shadow-xs">
              <Sun className="w-7 h-7 text-[#376B00] dark:text-[#A6F85F]" />
              <span className="text-3xl sm:text-4xl font-extrabold text-[#002210] dark:text-[#FAFAF5] block mt-2">
                100%
              </span>
              <h4 className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                {isHindi ? "ऑफ-ग्रिड सोलर IoT" : "Off-Grid Solar IoT"}
              </h4>
              <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                {isHindi
                  ? "धूल भरी आंधियों में भी बैटरी बैकअप के साथ ग्रिड-मुक्त संचालन।"
                  : "Zero rural grid dependency with continuous lithium battery uptime during dust storms."}
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            10. FINAL IMMERSIVE CTA
           ========================================================================= */}
        <section className="w-full bg-[#002210] text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#163824]/80 border border-white/15 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#A6F85F] text-xs font-bold uppercase tracking-wider border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#A6F85F]" />
                  {isHindi ? "अपनी कृषि संरचना को बदलें" : "READY FOR TURNKEY EXECUTION"}
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {isHindi ? "क्या आप अधिक स्मार्ट फार्म बनाने के लिए तैयार हैं?" : "Ready to Build a Smarter Farm?"}
                </h2>

                <p className="text-sm sm:text-base text-[#AAD0B3] leading-relaxed font-normal">
                  {isHindi
                    ? "चाहे आप कमर्शियल डेयरी संचालित करते हों, इनडोर मशरूम ग्रो हाउस, अथवा अपने फार्म को 100% रसायन-मुक्त जैविक मॉडल में बदलना चाहते हों — JAS Agro आपको सत्यापित उत्पाद एवं तकनीकी मार्गदर्शन प्रदान करता है।"
                    : "Whether you run a commercial dairy, an indoor mushroom facility, or are transitioning acreage to zero-chemical soil biology — JAS Agro provides the validated biology and hardware to succeed."}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#AAD0B3]">
                  <span className="flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#A6F85F]" /> Agronomist Desk: +91 73729 26623
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#A6F85F]" /> Jaipur & Sangaria Facilities
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#A6F85F] text-[#002210] text-xs font-bold uppercase tracking-wider hover:bg-[#8cdb46] transition-all text-center shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>{isHindi ? "कस्टम फार्म मूल्यांकन प्राप्त करें" : "Request Farm Proposal"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/solutions"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors text-center"
                >
                  {isHindi ? "सॉल्यूशंस देखें" : "Explore Solutions"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer & Quote Modal */}
      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
