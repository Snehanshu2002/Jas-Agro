"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
  ArrowDown,
  Zap,
  Feather as FeatherIcon,
  CheckCircle,
  Calendar,
  Compass,
  Target,
  Eye,
  ExternalLink,
  ChevronRight,
  PhoneCall,
  MapPin,
  Award,
  RefreshCw,
  Clock,
  CheckSquare,
  Thermometer,
  Download,
  HelpCircle,
  Tool,
  Truck,
  Grid,
  Bell,
  RotateCcw,
  Sliders,
  CloudRain,
  Share2,
} from "react-feather";

// Feather Icons compatibility mappings
const Sprout = FeatherIcon;
const Leaf = FeatherIcon;
const Trees = FeatherIcon;
const Wheat = FeatherIcon;
const Droplets = Droplet;
const ShieldCheck = Shield;
const ShieldAlert = Shield;
const CheckCircle2 = CheckCircle;
const Sparkles = Sun;
const Flame = Zap;
const FlaskConical = Sliders;
const Recycle = RefreshCw;
const Building2 = Grid;
const Factory = Grid;
const FileDown = Download;
const Waves = Droplet;
const Wrench = Tool;
const GraduationCap = Award;
const Scale = Sliders;
const Bot = Cpu;
const Layers3 = Layers;
const BellRing = Bell;
const Gauge = Sliders;
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";

export default function SustainabilityPage() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeLayer, setActiveLayer] = useState<"all" | "atmosphere" | "foliar" | "soil">("all");

  return (
    <div className="min-h-screen bg-[#f1fdf0] dark:bg-[#071508] text-[#141e17] dark:text-[#E8F4E8] font-['Plus_Jakarta_Sans',sans-serif] antialiased selection:bg-[#a6f85f] selection:text-[#0d2000] transition-colors duration-300">
      <Navbar />

      <main className="w-full pt-20">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#f1fdf0] dark:bg-[#071508] py-12 lg:py-20 border-b border-[#dae6da] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/* Breadcrumb & Protocol Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfebdf] dark:bg-[#163824] text-[#002210] dark:text-[#a6f85f] text-xs font-bold uppercase tracking-wider shadow-sm border border-[#c2c8c0] dark:border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#a6f85f] animate-ping" />
                {isHindi ? "कृषि-पारिस्थितिक सिस्टम्स • क्लोज्ड-लूप रिसोर्स दक्षता" : "Agro-Ecological Systems • Closed-Loop Resource Efficiency"}
              </span>
              <span className="text-xs font-semibold text-[#424843] dark:text-[#E8F4E8]/60 uppercase tracking-widest hidden sm:inline-block">
                {isHindi ? "प्रोटोकॉल: ISO 14064 अनुपालन बायोस्फीयर" : "Protocol: ISO 14064 Compliant Biosphere"}
              </span>
            </div>

            {/* Hero Asymmetric Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Narrative Column */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight leading-[1.08]">
                  {isHindi ? (
                    <>
                      खेती के लिए अधिक <br className="hidden sm:block" />
                      <span className="text-[#376b00] dark:text-[#a6f85f] italic font-serif">टिकाऊ और स्मार्ट</span> तरीके।
                    </>
                  ) : (
                    <>
                      Building More <br className="hidden sm:block" />
                      <span className="text-[#376b00] dark:text-[#a6f85f] italic font-serif">Sustainable Ways</span> to Farm.
                    </>
                  )}
                </h1>
                <p className="text-lg sm:text-xl text-[#424843] dark:text-[#E8F4E8]/80 max-w-2xl leading-relaxed font-light">
                  {isHindi
                    ? "मिट्टी की जैविक उर्वरता को सुरक्षित करना, भूजल की बचत और जैविक खेती, ज़ीरो-वेस्ट रीसाइक्लिंग व IoT टेलीमेट्री के माध्यम से टिकाऊ पैदावार सुनिश्चित करना।"
                    : "Preserving soil biology, conserving finite desert groundwater, and engineering resilient crop yields through biological cultivation, zero-waste cycling, and high-frequency IoT telemetry."}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#circular-cycle"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#a6f85f] text-[#0d2000] font-bold text-xs uppercase tracking-wider hover:bg-[#8cdb46] transition-all duration-200 shadow-md hover:-translate-y-0.5"
                  >
                    <span>{isHindi ? "हमारा मॉडल देखें" : "Explore Our Approach"}</span>
                    <ArrowDown className="w-4 h-4 text-[#0d2000]" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setQuoteModalOpen(true)}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#dfebdf] dark:bg-[#163824] text-[#002210] dark:text-[#a6f85f] font-bold text-xs uppercase tracking-wider hover:bg-[#dae6da] dark:hover:bg-[#1B4D1C] transition-all duration-200 border border-[#c2c8c0] dark:border-white/10"
                  >
                    <span>{isHindi ? "एग्रोनॉमिस्ट से बात करें" : "Talk to JAS Agronomist"}</span>
                    <Sprout className="w-4 h-4 text-[#376b00] dark:text-[#a6f85f]" />
                  </button>
                </div>

                {/* Quick Telemetry Micro-Pill Ribbons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#dae6da] dark:border-white/10">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#e5f1e5] dark:border-white/10 flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase text-[#727972] dark:text-[#A3C2A1]">
                      {isHindi ? "बायोमास रीसाइक्लिंग" : "Biomass Recycled"}
                    </span>
                    <span className="text-2xl font-bold text-[#002210] dark:text-white mt-1">100%</span>
                    <span className="text-[10px] text-[#376b00] dark:text-[#a6f85f] font-medium tracking-tight">
                      {isHindi ? "पराली दहन शून्य" : "Zero Stubble Burning"}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#e5f1e5] dark:border-white/10 flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase text-[#727972] dark:text-[#A3C2A1]">
                      {isHindi ? "मृदा जैविक कार्बन" : "Soil Carbon"}
                    </span>
                    <span className="text-2xl font-bold text-[#002210] dark:text-white mt-1">+2.4%</span>
                    <span className="text-[10px] text-[#376b00] dark:text-[#a6f85f] font-medium tracking-tight">
                      {isHindi ? "ह्यूमस सूचकांक वृद्धि" : "Active Humus Index"}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#e5f1e5] dark:border-white/10 flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase text-[#727972] dark:text-[#A3C2A1]">
                      {isHindi ? "टेलीमेट्री ग्रिड" : "Telemetry Grid"}
                    </span>
                    <span className="text-2xl font-bold text-[#002210] dark:text-white mt-1">12ms</span>
                    <span className="text-[10px] text-[#376b00] dark:text-[#a6f85f] font-medium tracking-tight">
                      {isHindi ? "ESP32 LoRaWAN पल्स" : "ESP32 LoRaWAN Pulse"}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#e5f1e5] dark:border-white/10 flex flex-col justify-between">
                    <span className="text-[11px] font-semibold uppercase text-[#727972] dark:text-[#A3C2A1]">
                      {isHindi ? "सिंथेटिक यूरिया" : "Synthetic Urea"}
                    </span>
                    <span className="text-2xl font-bold text-[#002210] dark:text-white mt-1">0.00</span>
                    <span className="text-[10px] text-[#376b00] dark:text-[#a6f85f] font-medium tracking-tight">
                      {isHindi ? "अजोला द्वारा प्रतिस्थापित" : "Bio-Azolla Substituted"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image & Live Instrument HUD Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-[460px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl bg-[#163824] border border-[#dae6da] dark:border-white/10">
                  <img
                    src="/media/smartagri4.png"
                    alt="Cinematic agricultural landscape in Rajasthan showing modern solar weather telemetry stations"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002210]/95 via-[#002210]/20 to-transparent" />

                  {/* Top Status Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="px-3.5 py-1.5 rounded-full bg-[#002210]/80 backdrop-blur-md text-white flex items-center gap-2 text-xs font-semibold shadow-sm border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-[#a6f85f] animate-pulse" />
                      <span>{isHindi ? "बायो-लूप सक्रिय • पारिस्थितिकी टेस्टबेड" : "Bio-Loop Active • Arid Ecology Testbed"}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                      {isHindi ? "स्टेशन #04" : "Station #04"}
                    </span>
                  </div>

                  {/* Bottom Floating Telemetry Panel */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#163824]/95 backdrop-blur-xl text-white shadow-xl border border-white/10">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Radio className="w-4 h-4 text-[#a6f85f]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#c5ecce]">
                          {isHindi ? "जोधपुर माइक्रोग्रिड रियल-टाइम" : "Jodhpur Micro-Grid Real-Time"}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#aad0b3] font-semibold">{isHindi ? "4 मिनट पहले अपडेट" : "UPDATED 4m AGO"}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2.5 text-left">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-[#aad0b3] uppercase tracking-wider font-semibold">
                          {isHindi ? "सोलर विकिरण" : "Solar Irradiance"}
                        </span>
                        <span className="text-sm font-bold text-white mt-0.5 block">742 W/m²</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-[#aad0b3] uppercase tracking-wider font-semibold">
                          {isHindi ? "कैनोपी VPD" : "Canopy VPD"}
                        </span>
                        <span className="text-sm font-bold text-[#a6f85f] mt-0.5 block">1.18 kPa</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="block text-[10px] text-[#aad0b3] uppercase tracking-wider font-semibold">
                          {isHindi ? "मृदा नमी" : "Loam Hydration"}
                        </span>
                        <span className="text-sm font-bold text-white mt-0.5 block">28.4%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SUSTAINABILITY IS A SYSTEM, NOT AN ESG SLOGAN */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#ebf7eb] dark:bg-[#0D230E] py-16 lg:py-24 border-b border-[#dae6da] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/* Section Header */}
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-[#376b00] dark:text-[#a6f85f] block mb-2">
                {isHindi ? "कृषि-पारिस्थितिक दर्शन" : "Agro-Ecological Philosophy"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight leading-tight">
                {isHindi ? (
                  <>
                    सस्टेनेबिलिटी एक संपूर्ण प्रणाली है, <br />
                    केवल एक ESG स्लोगन नहीं।
                  </>
                ) : (
                  <>
                    Sustainability is a System, <br />
                    Not an ESG Slogan.
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-[#424843] dark:text-[#E8F4E8]/80 mt-3 leading-relaxed">
                {isHindi
                  ? "औद्योगिक मोनोकल्चर कचरे और संसाधनों को अलग मानता है। JAS Agro में हम दिखावे के नारों को अस्वीकार करते हैं। हम प्रत्येक खेत को एक बंद ऊर्जा चक्र मानते हैं जहाँ एक चरण के अवशेष अगले चरण का पोषक आहार बनते हैं।"
                  : "Industrial monoculture treats inputs as disposable and waste as externalities. At JAS Agro, we reject marketing buzzwords. We treat every farm as a closed energetic organism where biological residues from one layer become the nutrient fuel for the next."}
              </p>
            </div>

            {/* 4 Asymmetric Principles */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* 01: Resource Efficiency (Spans 7 cols) */}
              <div className="md:col-span-7 p-8 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-md border border-[#dae6da] dark:border-white/10 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#376b00]/30 dark:text-[#a6f85f]/30">01</span>
                    <span className="px-3 py-1 rounded-full bg-[#dfebdf] dark:bg-[#002210] text-[#002210] dark:text-[#a6f85f] text-xs font-bold uppercase tracking-wider">
                      {isHindi ? "प्रिसिजन फिजिक्स" : "Precision Physics"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002210] dark:text-white">
                    {isHindi ? "संसाधनों का बेहतर उपयोग, न कि सिर्फ कम उपयोग" : "Use Resources Better, Not Just Less"}
                  </h3>
                  <p className="text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "रेगिस्तानी इलाकों में पानी बचाने का मतलब फसलों को प्यासा रखना नहीं है—बल्कि वायुमंडलीय वाष्प दबाव के अनुसार पानी की सटीक आपूर्ति करना है। हमारे स्वचालित माइक्रो-फॉगिंग से पानी का एक भी कतरा व्यर्थ नहीं जाता।"
                      : "Conserving water in the Thar Desert is not about starving crops—it is about synchronizing supply with plant atmospheric demand. By reading leaf stomatal conductance and ambient Vapor Pressure Deficit (VPD), our automated high-pressure micro-fogging ensures zero drops are lost to evaporative desert drift."}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#dae6da] dark:border-white/10 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#376b00] dark:text-[#a6f85f]">
                  <span className="flex items-center gap-1.5">
                    <Droplets className="w-4 h-4" /> {isHindi ? "62% भूजल की बचत" : "62% Groundwater Preserved"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Waves className="w-4 h-4" /> {isHindi ? "वाष्पीकरण हानि शून्य" : "Zero Runoff Evaporation"}
                  </span>
                </div>
              </div>

              {/* 02: Waste Into Value (Spans 5 cols) */}
              <div className="md:col-span-5 p-8 rounded-3xl bg-[#002210] text-white shadow-md border border-[#163824] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#a6f85f]/40">02</span>
                    <span className="px-3 py-1 rounded-full bg-[#163824] text-[#a6f85f] text-xs font-bold uppercase tracking-wider border border-[#a6f85f]/20">
                      {isHindi ? "सर्कुलर कार्बन" : "Circular Carbon"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {isHindi ? "कचरे को उच्च मूल्य संपदा में बदलना" : "Turn Waste into High-Calorie Value"}
                  </h3>
                  <p className="text-sm text-[#aad0b3] leading-relaxed">
                    {isHindi
                      ? "फसल की पराली और गोबर बोझ नहीं हैं। गेहूं का भूसा स्वादिष्ट ऑयस्टर मशरूम उगाने में काम आता है; इसके बाद बचे ब्लॉक समृद्ध केंचुआ खाद बनाने में काम आते हैं।"
                      : "Crop stubble and dairy manure are not liabilities. Spent wheat straw inoculates gourmet oyster mushrooms; their fungal mycelium-rich spent blocks then nourish dense Eisenia fetida vermicomposting trenches."}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-[#a6f85f] flex items-center gap-2">
                  <Recycle className="w-4 h-4" /> {isHindi ? "पार्टनर खेतों पर पराली जलाना 100% बंद" : "Zero Stubble Burned Across Partner Acreage"}
                </div>
              </div>

              {/* 03: Grow Biologically (Spans 5 cols) */}
              <div className="md:col-span-5 p-8 rounded-3xl bg-[#e5f1e5] dark:bg-[#163824]/60 text-[#002210] dark:text-[#E8F4E8] shadow-md border border-[#dae6da] dark:border-white/10 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#376b00]/30 dark:text-[#a6f85f]/30">03</span>
                    <span className="px-3 py-1 rounded-full bg-white dark:bg-[#002210] text-[#376b00] dark:text-[#a6f85f] text-xs font-bold uppercase tracking-wider border border-[#dae6da] dark:border-white/10">
                      {isHindi ? "माइक्रोबियल संश्लेषण" : "Microbial Synthesis"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002210] dark:text-white">
                    {isHindi ? "जैविक विकास, न कि रासायनिक निर्भरता" : "Grow Biologically, Not Chemically"}
                  </h3>
                  <p className="text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "रासायनिक यूरिया मिट्टी के लाभकारी बैक्टीरिया को जला देता है। हम अजोला कल्चर विकसित करते हैं जो हवा से प्राकृतिक नाइट्रोजन सोखकर जैविक खाद और उच्च प्रोटीन पशु आहार बनाता है।"
                      : "Industrial urea burns microbial colonies and volatilizes into greenhouse gas. We cultivate Anabaena azollae microphyte beds that fix ambient elemental nitrogen from desert air directly into biological green manure and high-protein livestock feeds."}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#dae6da] dark:border-white/10 text-xs font-semibold text-[#376b00] dark:text-[#a6f85f] flex items-center gap-2">
                  <Leaf className="w-4 h-4" /> {isHindi ? "30 किग्रा प्राकृतिक नाइट्रोजन / हेक्टेयर / माह" : "30 kg Atmospheric Nitrogen Fixed / Ha / Month"}
                </div>
              </div>

              {/* 04: Measure & Optimize (Spans 7 cols) */}
              <div className="md:col-span-7 p-8 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-md border border-[#dae6da] dark:border-white/10 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#376b00]/30 dark:text-[#a6f85f]/30">04</span>
                    <span className="px-3 py-1 rounded-full bg-[#dfebdf] dark:bg-[#002210] text-[#002210] dark:text-[#a6f85f] text-xs font-bold uppercase tracking-wider">
                      {isHindi ? "सटीक डेटा डायग्नोस्टिक्स" : "In-Situ Diagnostics"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#002210] dark:text-white">
                    {isHindi ? "पहले सटीक मापें, फिर सिंचाई व पोषण दें" : "Measure First, Then Intervene"}
                  </h3>
                  <p className="text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "जिसका माप नहीं, उसका सुधार नहीं। हमारे सोलर संचालित सेंसर हर 120 सेकंड में मिट्टी की नमी, लवणता (EC) और तापमान दर्ज करते हैं ताकि खेत को वही मिले जिसकी ज़रूरत है।"
                      : "You cannot heal what you do not quantify. Our solar-powered micro-stations ping sub-soil capacitance, electrical conductivity (EC), and rhizosphere temperatures every 120 seconds. Interventions occur precisely where soil biology requires replenishment."}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#dae6da] dark:border-white/10 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#002210] dark:text-[#a6f85f]">
                  <span className="flex items-center gap-1.5">
                    <Radio className="w-4 h-4 text-[#376b00] dark:text-[#a6f85f]" /> {isHindi ? "गहन SDI-12 सेंसर लॉगिंग" : "Sub-surface SDI-12 Multi-Depth Logging"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#376b00] dark:text-[#a6f85f]" /> {isHindi ? "अनुमान-मुक्त सटीक ऑटोमेशन" : "Zero Guesswork Injections"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. THE LIVING RESOURCE CYCLE: CIRCULAR CENTERPIECE */}
        {/* ========================================================================= */}
        <section
          id="circular-cycle"
          className="w-full bg-[#002210] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#163824]"
        >
          {/* Ambient Glow Elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#376b00]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#a6f85f]/15 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="px-3.5 py-1.5 rounded-full bg-[#163824] text-[#a6f85f] text-xs font-bold uppercase tracking-wider inline-block mb-3 border border-[#a6f85f]/20">
                {isHindi ? "सर्कुलर एग्रो-इकोलॉजी इंजन" : "Circular Agro-Ecology Engine"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {isHindi ? (
                  <>
                    जीवंत संसाधन चक्र: <br />
                    कुछ भी बेकार नहीं जाता।
                  </>
                ) : (
                  <>
                    The Living Resource Cycle: <br />
                    Nothing Useful Goes to Waste.
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-[#aad0b3] mt-3 font-light">
                {isHindi
                  ? "JAS Agro सिस्टम से निकलने वाला हर उप-उत्पाद अगली उत्पादन इकाई का आधार बनता है। हमारा इंटरैक्टिव बायोलॉजिकल लूप नीचे देखें:"
                  : "Every byproduct generated by JAS Agro systems fuels an adjacent production node. Explore our real-time interactive biological loop below:"}
              </p>
            </div>

            {/* Interactive Biological Strata Visualizer */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0D2115] border border-white/10 mb-12">
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[460px] lg:min-h-[500px] relative">
                {/* Visual Strata Graphic Container */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#a6f85f]/20 via-transparent to-transparent" />
                </div>

                {/* Top Controls Bar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#a6f85f] animate-ping" />
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#a6f85f] font-bold uppercase tracking-wider">
                        {isHindi ? "सक्रिय एग्रो-इकोलॉजिकल सिमुलेशन" : "Active Agro-Ecological Simulation"}
                      </span>
                      <span className="text-xs text-white font-semibold">
                        {isHindi ? "रियल-टाइम बायोलॉजिकल स्ट्रैटा फीडबैक" : "Real-time Biological Strata Feedback"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                    {(
                      [
                        { id: "all", labelEn: "Full Biosphere", labelHi: "संपूर्ण बायोस्फीयर" },
                        { id: "atmosphere", labelEn: "Atmosphere", labelHi: "वायुमंडल" },
                        { id: "foliar", labelEn: "Foliar Canopy", labelHi: "पत्ती कैनोपी" },
                        { id: "soil", labelEn: "Soil Rhizosphere", labelHi: "मृदा राइजोस्फीयर" },
                      ] as const
                    ).map((lvl) => (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setActiveLayer(lvl.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                          activeLayer === lvl.id
                            ? "bg-[#a6f85f] text-[#0d2000] shadow-sm"
                            : "text-[#aad0b3] hover:text-white"
                        }`}
                      >
                        {isHindi ? lvl.labelHi : lvl.labelEn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Strata Layers Center Representation */}
                <div className="relative z-10 my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      activeLayer === "all" || activeLayer === "atmosphere"
                        ? "bg-white/10 border border-[#a6f85f]/40 shadow-lg scale-100"
                        : "bg-white/5 border border-white/5 opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase text-[#a6f85f]">{isHindi ? "लेयर 01" : "Layer 01"}</span>
                      <Sun className="w-4 h-4 text-[#a6f85f]" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{isHindi ? "वायुमंडलीय संतुलन" : "Atmospheric Flux"}</h4>
                    <p className="text-xs text-[#aad0b3] mt-1 leading-relaxed">
                      {isHindi
                        ? "सौर विकिरण (742 W/m²), सापेक्ष आर्द्रता और कैनोपी VPD संतुलन जो पत्तियों को सूखने से बचाता है।"
                        : "Solar radiation (742 W/m²), ambient relative humidity, and canopy VPD equilibrium preventing vegetative desiccation."}
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/10 flex justify-between text-xs">
                      <span className="text-[#aad0b3]">{isHindi ? "कैनोपी VPD:" : "Canopy VPD:"}</span>
                      <strong className="text-[#a6f85f]">{isHindi ? "1.18 kPa (उत्कृष्ट)" : "1.18 kPa (Optimal)"}</strong>
                    </div>
                  </div>

                  <div
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      activeLayer === "all" || activeLayer === "foliar"
                        ? "bg-white/10 border border-[#a6f85f]/40 shadow-lg scale-100"
                        : "bg-white/5 border border-white/5 opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase text-[#a6f85f]">{isHindi ? "लेयर 02" : "Layer 02"}</span>
                      <Leaf className="w-4 h-4 text-[#a6f85f]" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{isHindi ? "हरा चारा एवं प्रोटीन" : "Foliar & Bio-Protein"}</h4>
                    <p className="text-xs text-[#aad0b3] mt-1 leading-relaxed">
                      {isHindi
                        ? "सुपर नेपियर C4 प्रकाश संश्लेषण और अजोला नाइट्रोजन स्थिरीकरण से 25–30% क्रूड प्रोटीन की प्राप्ति।"
                        : "Super Napier C4 photosynthetic canopy & Azolla aquatic nitrogen synthesis yielding 25–30% crude green protein."}
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/10 flex justify-between text-xs">
                      <span className="text-[#aad0b3]">{isHindi ? "बायोमास वृद्धि:" : "Biomass Flux:"}</span>
                      <strong className="text-white">{isHindi ? "+38% बेसलाइन से अधिक" : "+38% vs Baseline"}</strong>
                    </div>
                  </div>

                  <div
                    className={`p-6 rounded-2xl transition-all duration-300 ${
                      activeLayer === "all" || activeLayer === "soil"
                        ? "bg-white/10 border border-[#a6f85f]/40 shadow-lg scale-100"
                        : "bg-white/5 border border-white/5 opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase text-[#a6f85f]">{isHindi ? "लेयर 03" : "Layer 03"}</span>
                      <Layers className="w-4 h-4 text-[#a6f85f]" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{isHindi ? "मृदा राइजोस्फीयर" : "Soil Rhizosphere"}</h4>
                    <p className="text-xs text-[#aad0b3] mt-1 leading-relaxed">
                      {isHindi
                        ? "केंचुआ खाद का ह्यूमिक स्तर, VAM फंगल नेटवर्क और बहु-स्तरीय नमी प्रतिधारण क्षमता।"
                        : "Eisenia fetida humic casting strata, VAM mycorrhizal fungal networks, and multi-depth volumetric water retention."}
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/10 flex justify-between text-xs">
                      <span className="text-[#aad0b3]">{isHindi ? "राइजोस्फीयर EC:" : "Rhizosphere EC:"}</span>
                      <strong className="text-[#a6f85f]">{isHindi ? "1.4 dS/m (सुरक्षित)" : "1.4 dS/m (Safe)"}</strong>
                    </div>
                  </div>
                </div>

                {/* Bottom Strata Status */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-[#aad0b3]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a6f85f]" />
                    <span>{isHindi ? "क्लोज्ड-लूप थर्मोडायनामिक दक्षता: 91.4%" : "Closed Loop Thermodynamic Efficiency: 91.4%"}</span>
                  </div>
                  <div className="flex items-center gap-4 font-semibold uppercase text-[11px] text-[#c5ecce]">
                    <span>{isHindi ? "लेयर 01: वायुमंडल" : "Layer 01: Atmosphere"}</span>
                    <span>•</span>
                    <span>{isHindi ? "लेयर 02: पत्ती कैनोपी" : "Layer 02: Foliar"}</span>
                    <span>•</span>
                    <span>{isHindi ? "लेयर 03: मृदा" : "Layer 03: Soil Pedosphere"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 6-Stage Biological Flow Sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Node 1 */}
              <div className="p-4 rounded-2xl bg-[#163824]/80 backdrop-blur-sm border border-white/10 flex flex-col justify-between hover:bg-[#163824] transition-all">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#a6f85f] uppercase tracking-wider font-bold">
                    {isHindi ? "चरण 01 // बायोमास" : "Step 01 // Biomass"}
                  </span>
                  <div className="text-sm font-bold text-white">{isHindi ? "अनाज की पराली एवं भूसा" : "Cereal Stubble & Residue"}</div>
                  <p className="text-xs text-[#aad0b3] leading-snug">
                    {isHindi ? "बाजरा और गेहूं की कटी हुई सूखी पराली का संग्रह।" : "Chopped bajra & wheat straw harvested after seasonal field cycles."}
                  </p>
                </div>
                <div className="pt-3 text-[#a6f85f] flex items-center gap-1 text-[10px] uppercase font-bold border-t border-white/10 mt-2">
                  <span>{isHindi ? "स्पॉनिंग" : "Inoculate"}</span> <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Node 2 */}
              <div className="p-4 rounded-2xl bg-[#163824]/80 backdrop-blur-sm border border-white/10 flex flex-col justify-between hover:bg-[#163824] transition-all">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#a6f85f] uppercase tracking-wider font-bold">
                    {isHindi ? "चरण 02 // माइकोलॉजी" : "Step 02 // Mycology"}
                  </span>
                  <div className="text-sm font-bold text-white">{isHindi ? "ऑयस्टर मशरूम उत्पादन" : "Oyster Mushroom Harvest"}</div>
                  <p className="text-xs text-[#aad0b3] leading-snug">
                    {isHindi ? "सबस्ट्रेट पाश्चराइजेशन से नियंत्रित अंधेरे कमरों में उच्च प्रोटीन उपज।" : "Substrate fruiting produces high-protein culinary yields in darkness."}
                  </p>
                </div>
                <div className="pt-3 text-[#a6f85f] flex items-center gap-1 text-[10px] uppercase font-bold border-t border-white/10 mt-2">
                  <span>{isHindi ? "अवशेष सबस्ट्रेट" : "Spend Substrate"}</span> <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Node 3 */}
              <div className="p-4 rounded-2xl bg-[#163824]/80 backdrop-blur-sm border border-white/10 flex flex-col justify-between hover:bg-[#163824] transition-all">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#a6f85f] uppercase tracking-wider font-bold">
                    {isHindi ? "चरण 03 // बायो-रूपांतरण" : "Step 03 // Bioconversion"}
                  </span>
                  <div className="text-sm font-bold text-white">{isHindi ? "मशरूम अवशेष (SMS)" : "Spent Substrate (SMS)"}</div>
                  <p className="text-xs text-[#aad0b3] leading-snug">
                    {isHindi ? "माइसीलियम-युक्त बचे हुए ब्लॉक को गोबर के साथ मिलाना।" : "De-lignified fungal blocks blended directly with pre-cured cow dung."}
                  </p>
                </div>
                <div className="pt-3 text-[#a6f85f] flex items-center gap-1 text-[10px] uppercase font-bold border-t border-white/10 mt-2">
                  <span>{isHindi ? "केंचुआ कल्चर" : "Earthworms"}</span> <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Node 4 */}
              <div className="p-4 rounded-2xl bg-[#163824]/80 backdrop-blur-sm border border-white/10 flex flex-col justify-between hover:bg-[#163824] transition-all">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#a6f85f] uppercase tracking-wider font-bold">
                    {isHindi ? "चरण 04 // वर्मीकल्चर" : "Step 04 // Vermiculture"}
                  </span>
                  <div className="text-sm font-bold text-white">{isHindi ? "आइसेनिया फेटिडा खाद" : "Eisenia Fetida Castings"}</div>
                  <p className="text-xs text-[#aad0b3] leading-snug">
                    {isHindi ? "केंचुओं द्वारा जैविक अपशिष्ट का शुद्ध काले जैविक खाद में रूपांतरण।" : "Earthworm digestion converts lignocellulose into bio-active casting loam."}
                  </p>
                </div>
                <div className="pt-3 text-[#a6f85f] flex items-center gap-1 text-[10px] uppercase font-bold border-t border-white/10 mt-2">
                  <span>{isHindi ? "पोषण" : "Fertilize"}</span> <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Node 5 */}
              <div className="p-4 rounded-2xl bg-[#163824]/80 backdrop-blur-sm border border-white/10 flex flex-col justify-between hover:bg-[#163824] transition-all">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#a6f85f] uppercase tracking-wider font-bold">
                    {isHindi ? "चरण 05 // एग्रोनॉमी" : "Step 05 // Agronomy"}
                  </span>
                  <div className="text-sm font-bold text-white">{isHindi ? "सुपर नेपियर एवं अजोला" : "Super Napier & Azolla"}</div>
                  <p className="text-xs text-[#aad0b3] leading-snug">
                    {isHindi ? "वर्मी-खाद से बहु-कटाई हरा चारा व जलीय अजोला का पोषण।" : "Vermi-humus fertilizes multi-cut green fodder plots and nitrogen basins."}
                  </p>
                </div>
                <div className="pt-3 text-[#a6f85f] flex items-center gap-1 text-[10px] uppercase font-bold border-t border-white/10 mt-2">
                  <span>{isHindi ? "डेयरी आहार" : "Dairy Feed"}</span> <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Node 6 */}
              <div className="p-4 rounded-2xl bg-[#163824]/80 backdrop-blur-sm border border-white/10 flex flex-col justify-between hover:bg-[#163824] transition-all">
                <div className="space-y-2">
                  <span className="text-[10px] text-[#a6f85f] uppercase tracking-wider font-bold">
                    {isHindi ? "चरण 06 // डेयरी चक्र" : "Step 06 // Dairy Herd"}
                  </span>
                  <div className="text-sm font-bold text-white">{isHindi ? "डेयरी पशु पोषण" : "Dairy Herd Nutrition"}</div>
                  <p className="text-xs text-[#aad0b3] leading-snug">
                    {isHindi ? "पशु उच्च प्रोटीन चारा खाते हैं; गोबर पुनः कम्पोस्ट में वापस जाता है।" : "Livestock consume green protein; dung returns to compost beds."}
                  </p>
                </div>
                <div className="pt-3 text-[#a6f85f] flex items-center gap-1 text-[10px] uppercase font-bold border-t border-white/10 mt-2">
                  <span>{isHindi ? "चक्र पूर्ण" : "Loop Closes"}</span> <RotateCcw className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. START WITH THE SOIL (Pedological Deep-Dive) */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#f1fdf0] dark:bg-[#071508] py-20 lg:py-28 border-b border-[#dae6da] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photographic Visual */}
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-xl bg-[#311500] border border-[#dae6da] dark:border-white/10">
                  <img
                    src="/media/Hands Holding Rich Compost.png"
                    alt="Fertile moist dark brown compost soil teeming with healthy Eisenia fetida red earthworms"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#311500]/90 via-transparent to-transparent" />

                  {/* In-situ Callout */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#4c290b]/95 backdrop-blur-md text-white shadow-lg border border-white/10">
                    <span className="text-[10px] text-[#ffdcc5] uppercase tracking-wider font-bold block mb-1">
                      {isHindi ? "राइजोस्फीयर टेलीमेट्री लॉग" : "Rhizosphere Telemetry Log"}
                    </span>
                    <div className="flex items-center justify-between text-xs">
                      <span>
                        {isHindi ? "जैविक ह्यूमस सूचकांक: " : "Biological Humus Index: "}
                        <strong className="text-[#ffdcc5] font-bold">{isHindi ? "उत्कृष्ट 1:13 C:N" : "Optimal 1:13 C:N"}</strong>
                      </span>
                      <span>
                        {isHindi ? "माइकोराइजा फैलाव: " : "Mycorrhizal Colonization: "}
                        <strong className="text-[#a6f85f] font-bold">89%</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Narrative Content */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="space-y-2">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#376b00] dark:text-[#a6f85f]">
                    {isHindi ? "मृदा विज्ञान वास्तुकला" : "Pedological Architecture"}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight leading-tight">
                    {isHindi ? (
                      <>
                        शुरुआत मिट्टी से करें: <br />
                        रेगिस्तानी भूमि को फिर से जीवित करना।
                      </>
                    ) : (
                      <>
                        Start with the Soil: <br />
                        Rebuilding the Living Desert Earth.
                      </>
                    )}
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "राजस्थान के शुष्क क्षेत्रों में पारंपरिक खेती ने रासायनिक खादों से मिट्टी के जैविक कार्बन को 0.3% से नीचे गिरा दिया है। हमारा मिशन मिट्टी के जैविक कार्बन और जल-धारण क्षमता को प्राकृतिक रूप से पुनर्स्थापित करना है।"
                    : "In Rajasthan's arid zones, conventional farming treats soil merely as an inert anchor for synthetic chemicals. Years of intensive chemical fertilization have bleached soil organic carbon (SOC) below 0.3%, devastating water-retention capacity and collapsing beneficial microbial populations."}
                </p>

                {/* Key Scientific Facets */}
                <div className="space-y-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#002210] flex items-center justify-center text-[#376b00] dark:text-[#a6f85f] shrink-0 shadow-sm">
                      <Layers3 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#002210] dark:text-white">
                        {isHindi ? "जैविक कार्बन एवं नमी संचयन" : "Organic Carbon Particle Anchoring"}
                      </h4>
                      <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                        {isHindi
                          ? "मिट्टी के जैविक कार्बन में 1% की वृद्धि प्रति एकड़ लगभग 20,000 गैलन अतिरिक्त नमी बनाए रखती है। हमारा वर्मीकंपोस्ट स्पंज की तरह पानी को जड़ों में बांधकर रखता है।"
                          : "Every 1% increase in soil organic matter holds approximately 20,000 gallons of moisture per acre. Our cold-cured vermicast restores sponge-like micro-aggregates that trap precious subterranean water."}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#002210] flex items-center justify-center text-[#376b00] dark:text-[#a6f85f] shrink-0 shadow-sm">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#002210] dark:text-white">
                        {isHindi ? "संतुलित कार्बन-नाइट्रोजन (12:1 - 14:1) अनुपात" : "Balanced Carbon-to-Nitrogen (12:1 - 14:1) Ratio"}
                      </h4>
                      <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                        {isHindi
                          ? "कच्चा गोबर फसलों की जड़ों को जला सकता है। हमारी वैज्ञानिक प्रक्रिया से तैयार खाद पूरी तरह स्थिर होकर पौधों की जड़ों द्वारा तुरंत सोख ली जाती है।"
                          : "Raw uncomposted manure causes nitrogen-lock and burns crop roots. Our managed aerobic digestion guarantees stabilized humus readily absorbable by plant root hair capillaries."}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#002210] flex items-center justify-center text-[#376b00] dark:text-[#a6f85f] shrink-0 shadow-sm">
                      <Sprout className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#002210] dark:text-white">
                        {isHindi ? "सहजीवी माइकोराइजा फंगस" : "Symbiotic Mycorrhizal Colonization"}
                      </h4>
                      <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                        {isHindi
                          ? "प्राकृतिक VAM फंगस जड़ों की पहुंच को 400% तक बढ़ा देता है, जिससे पौधे बिना केमिकल के गहराई से फास्फोरस व सूक्ष्म पोषक तत्व प्राप्त करते हैं।"
                          : "Inoculation of indigenous vesicular-arbuscular mycorrhizal (VAM) fungi extends root reach by up to 400%, extracting deep bound phosphorus and micronutrients without synthetic additives."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. ORGANIC RESIDUES TO HIGH-VALUE BIO-RESOURCE */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#ebf7eb] dark:bg-[#0D230E] py-20 lg:py-28 border-b border-[#dae6da] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#376b00] dark:text-[#a6f85f] block mb-2">
                  {isHindi ? "नियंत्रित बायो-कन्वर्जन" : "Controlled Bioconversion"}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                  {isHindi ? "जैविक अवशेष ➔ मूल्यवान कृषि संसाधन" : "Organic Residues ➔ High-Value Farm Resource"}
                </h2>
              </div>
              <p className="text-sm text-[#424843] dark:text-[#E8F4E8]/80 max-w-md leading-relaxed">
                {isHindi
                  ? "छायादार क्यारियों में जैविक अपघटन खुले खेतों में पराली जलाने की तुलना में पोषक तत्वों और आर्थिक मुनाफे दोनों में कहीं बेहतर है।"
                  : "Why biological decomposition in shaded windrows comprehensively beats toxic open-field biomass incineration in both nutrient retention and economic yield."}
              </p>
            </div>

            {/* 6-Stage Vermicomposting Workflow */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Stage 1 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#dfebdf] dark:bg-[#002210] text-[#002210] dark:text-[#a6f85f] text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <span className="text-[10px] text-[#727972] dark:text-[#A3C2A1] font-semibold uppercase">
                    {isHindi ? "चरण: प्रारंभिक उपचार" : "Phase: Pre-Digestion"}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-white">
                  {isHindi ? "गोबर एवं पराली का प्री-कंडीशनिंग" : "Dung & Biomass Conditioning"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "ताज़ा गोबर को 10-14 दिनों तक ठंडा किया जाता है ताकि मीथेन निकल जाए, फिर 60:40 अनुपात में कटे हुए भूसे के साथ मिलाया जाता है।"
                    : "Fresh dairy manure is solar-cured for 10-14 days to purge methane and heat spikes above 55°C, then blended 60:40 with chopped straw."}
                </p>
              </div>

              {/* Stage 2 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#dfebdf] dark:bg-[#002210] text-[#002210] dark:text-[#a6f85f] text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <span className="text-[10px] text-[#727972] dark:text-[#A3C2A1] font-semibold uppercase">
                    {isHindi ? "चरण: बेड निर्माण" : "Phase: Bed Engineering"}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-white">
                  {isHindi ? "छायादार एलिवेटेड क्यारियां" : "Shaded Elevated Windrows"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "30 मीटर की छायादार क्यारियां ड्रेनेज चैनलों के ऊपर बनाई जाती हैं, जिससे पोषक तत्वों का रिसाव रुके और निरंतर हवा मिलती रहे।"
                    : "30-meter shaded beds built over permeable geo-textile drainage channels prevent nutrient leaching while maintaining continuous aeration."}
                </p>
              </div>

              {/* Stage 3 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#a6f85f] text-[#0d2000] text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <span className="text-[10px] text-[#376b00] dark:text-[#a6f85f] font-bold uppercase">
                    {isHindi ? "चरण: केंचुआ प्रवेश" : "Phase: Inoculation"}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-white">
                  {isHindi ? "आइसेनिया फेटिडा केंचुआ कल्चर" : "Eisenia Fetida Introduction"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "तेज़ी से जैविक कचरा पचाने वाले और तापमान सहन करने वाले लाल केंचुओं की उपयुक्त मात्रा मिलाना।"
                    : "High-density introduction of epigaeic red earthworms possessing voracious feeding capacities and tolerance to semi-arid thermal swings."}
                </p>
              </div>

              {/* Stage 4 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#dfebdf] dark:bg-[#002210] text-[#002210] dark:text-[#a6f85f] text-xs font-bold flex items-center justify-center">
                    4
                  </span>
                  <span className="text-[10px] text-[#727972] dark:text-[#A3C2A1] font-semibold uppercase">
                    {isHindi ? "चरण: सेंसर मॉनिटरिंग" : "Phase: Sensor Feedback"}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-white">
                  {isHindi ? "50-60% नमी नियंत्रण" : "50-60% Moisture Maintenance"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "सेंसर से स्वचालित मिस्टिंग नोजल चालू होते हैं, जिससे बिना जलभराव के केंचुओं के लिए अनुकूल नमी बनी रहती है।"
                    : "Capacitive telemetry sensors ping automated overhead mist nozzles, maintaining strict biological moisture thresholds without waterlogging."}
                </p>
              </div>

              {/* Stage 5 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#dfebdf] dark:bg-[#002210] text-[#002210] dark:text-[#a6f85f] text-xs font-bold flex items-center justify-center">
                    5
                  </span>
                  <span className="text-[10px] text-[#727972] dark:text-[#A3C2A1] font-semibold uppercase">
                    {isHindi ? "चरण: छलना एवं सफाई" : "Phase: Mechanical Trommel"}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-white">
                  {isHindi ? "रोटरी ड्रम सीविंग (4mm)" : "Rotary Drum Sieving (4mm)"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "तैयार दानेदार वर्मीकंपोस्ट को केंचुओं और अंडों से अलग किया जाता है, और केंचुए सुरक्षित नई क्यारियों में लौट जाते हैं।"
                    : "Fine microbial-grade casting granules are separated smoothly from mature worms and cocoons, returning breeders unharmed to fresh beds."}
                </p>
              </div>

              {/* Stage 6 */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#376b00] text-white text-xs font-bold flex items-center justify-center">
                    6
                  </span>
                  <span className="text-[10px] text-[#376b00] dark:text-[#a6f85f] font-bold uppercase">
                    {isHindi ? "चरण: तरल एक्सट्रैक्ट" : "Phase: Liquid Extraction"}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#002210] dark:text-white">
                  {isHindi ? "वर्मी-वॉश तरल खाद संग्रह" : "Liquid Vermi-Wash Harvest"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "ह्यूमिक एसिड और वृद्धि हार्मोन्स से भरपूर तरल वर्मी-वॉश को प्राकृतिक कीट नियंत्रक और टॉनिक स्प्रे के रूप में उपयोग किया जाता है।"
                    : "Leachate rich in plant growth regulators, gibberellins, and soluble humic acid is bottled as a natural foliar pest repellent and spray."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. WATER & RESOURCE EFFICIENCY (Physics of Micro-Misting & VPD) */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#f1fdf0] dark:bg-[#071508] py-20 lg:py-28 border-b border-[#dae6da] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Explanation */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#376b00] dark:text-[#a6f85f]">
                  {isHindi ? "कृषि में वायुमंडलीय भौतिकी" : "Atmospheric Physics in Agriculture"}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight leading-tight">
                  {isHindi ? (
                    <>
                      VPD भौतिकी आधारित जल दक्षता, <br />
                      पारंपरिक टाइमर पर नहीं।
                    </>
                  ) : (
                    <>
                      Water Efficiency Governed by VPD, <br />
                      Not Primitive Timers.
                    </>
                  )}
                </h2>
                <p className="text-base sm:text-lg text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "पारंपरिक सिंचाई घड़ी के आधार पर पानी देती है, जिससे राजस्थान में 70% तक पानी वाष्पीकरण में उड़ जाता है। JAS Agro सिंचाई को VPD (वाष्प दबाव अंतर) द्वारा नियंत्रित करता है—जो पत्तियों की वास्तविक प्यास को मापता है।"
                    : "Traditional irrigation floods fields based on clock hours, losing up to 70% to evaporation in arid Rajasthan. JAS Agro governs irrigation through Vapor Pressure Deficit (VPD)—the precise differential between internal leaf moisture pressure and dry ambient air pressure."}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#376b00] dark:text-[#a6f85f] shrink-0" />
                    <span className="text-sm text-[#141e17] dark:text-[#E8F4E8]">
                      {isHindi ? "स्वचालित 50-माइक्रोन मिस्टिंग बूंदें पत्तियों का तापमान 4-6°C कम करती हैं।" : "Automated micro-droplets (50 microns) lower leaf temperature by 4-6°C."}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#376b00] dark:text-[#a6f85f] shrink-0" />
                    <span className="text-sm text-[#141e17] dark:text-[#E8F4E8]">
                      {isHindi ? "जमीन के नीचे के सेंसर जड़ की संतृप्ति होते ही सिंचाई तुरंत रोक देते हैं।" : "Subterranean TDR probes halt watering instantly once root loam reaches saturation."}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#376b00] dark:text-[#a6f85f] shrink-0" />
                    <span className="text-sm text-[#141e17] dark:text-[#E8F4E8]">
                      {isHindi ? "क्लोज्ड-लूप ड्रेनेज अतिरिक्त पानी को पुनः टैंकों में भेज देता है।" : "Closed-loop recovery catchments divert excess fog condensation back to holding cisterns."}
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual Flow Diagram Card */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-[#e5f1e5] dark:bg-[#163824]/60 shadow-lg border border-[#dae6da] dark:border-white/10">
                <h4 className="text-base font-bold text-[#002210] dark:text-white mb-6 flex items-center justify-between border-b border-[#dae6da] dark:border-white/10 pb-3">
                  <span>{isHindi ? "स्वचालित जल नियंत्रण मेश" : "Automated Hydration Control Mesh"}</span>
                  <span className="text-xs text-[#376b00] dark:text-[#a6f85f] font-bold uppercase tracking-wider">
                    {isHindi ? "प्रतिक्रिया समय: 1.2s" : "Feedback Latency: 1.2s"}
                  </span>
                </h4>

                <div className="space-y-4">
                  {/* Diagram Node 1 */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0D230E] border border-[#dae6da] dark:border-white/10 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#ebf7eb] dark:bg-[#163824] flex items-center justify-center text-[#376b00] dark:text-[#a6f85f] shrink-0">
                        <Thermometer className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-[#002210] dark:text-white">
                          {isHindi ? "1. वायुमंडलीय सेंसर नोड" : "1. Atmospheric Sensor Node"}
                        </span>
                        <span className="text-[11px] text-[#424843] dark:text-[#E8F4E8]/70">
                          {isHindi ? "हवा का तापमान (38.2°C) व नमी (28%) मापता है" : "Measures Air Temp (38.2°C) & Relative Humidity (28%)"}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-[#ba1a1a] dark:text-[#ffdad6] font-bold px-2.5 py-1 rounded bg-[#ffdad6] dark:bg-[#93000a]">
                      VPD 1.9 kPa
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center text-[#727972] dark:text-[#A3C2A1]">
                    <ArrowDown className="w-4 h-4" />
                  </div>

                  {/* Diagram Node 2 */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#0D230E] border border-[#dae6da] dark:border-white/10 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#ebf7eb] dark:bg-[#163824] flex items-center justify-center text-[#376b00] dark:text-[#a6f85f] shrink-0">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-[#002210] dark:text-white">
                          {isHindi ? "2. एज कंप्यूटिंग माइक्रो-हब" : "2. Edge Computing Micro-Hub"}
                        </span>
                        <span className="text-[11px] text-[#424843] dark:text-[#E8F4E8]/70">
                          {isHindi ? "ESP32 जांच: पत्तियों का तनाव स्तर सीमा से अधिक" : "ESP32 algorithmic check: Stomatal stress threshold breached"}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-[#002210] dark:text-[#0d2000] font-bold px-2.5 py-1 rounded bg-[#a6f85f]">
                      {isHindi ? "स्थिति: ट्रिगर" : "STATE: TRIGGER"}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center text-[#727972] dark:text-[#A3C2A1]">
                    <ArrowDown className="w-4 h-4" />
                  </div>

                  {/* Diagram Node 3 */}
                  <div className="p-4 rounded-2xl bg-[#002210] text-white border border-[#163824] flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#a6f85f] shrink-0">
                        <Droplets className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white">
                          {isHindi ? "3. हाई-प्रेशर मिस्टिंग पल्स" : "3. High-Pressure Solenoid Pulse"}
                        </span>
                        <span className="text-[11px] text-[#aad0b3]">
                          {isHindi ? "45-सेकंड मिस्टिंग चालू; VPD को अनुकूल 1.1 kPa पर लाता है" : "Actuates 45-second micro-misting; resets canopy VPD to optimal 1.1 kPa"}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-[#0d2000] font-bold px-2.5 py-1 rounded bg-[#a6f85f]">
                      {isHindi ? "बचत: 84L" : "SAVED: 84L"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. FOUR BIOLOGICAL SYSTEMS IN SYNERGY */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#ebf7eb] dark:bg-[#0D230E] py-20 lg:py-28 border-b border-[#dae6da] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#376b00] dark:text-[#a6f85f] block mb-2">
                {isHindi ? "एकीकृत जैव-उत्पादन" : "Integrated Bioproduction"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "आपसी तालमेल में काम करते चार जैविक सिस्टम" : "Four Biological Systems Working in Synergy"}
              </h2>
              <p className="text-base text-[#424843] dark:text-[#E8F4E8]/80 mt-2">
                {isHindi
                  ? "एकल फसल की जगह, हमारा मॉडल 4 परस्पर जुड़े जैविक सिस्टम्स को जोड़ता है जो एक-दूसरे को मजबूत करते हैं।"
                  : "Rather than isolated monocrops, our model orchestrates four tightly calibrated biological organisms that strengthen and feed each other."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Oyster Mushroom */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-md border border-[#dae6da] dark:border-white/10 flex flex-col justify-between hover:-translate-y-1 transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#ebf7eb] dark:bg-[#002210] flex items-center justify-center text-[#002210] dark:text-[#a6f85f]">
                    <Sprout className="w-6 h-6 text-[#376b00] dark:text-[#a6f85f]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#376b00] dark:text-[#a6f85f] font-bold uppercase tracking-wider">
                      {isHindi ? "स्तंभ 01 // माइको-प्रोटीन" : "Pillar 01 // Myco-Protein"}
                    </span>
                    <h3 className="text-lg font-bold text-[#002210] dark:text-white mt-1">{isHindi ? "ऑयस्टर मशरूम" : "Oyster Mushroom"}</h3>
                  </div>
                  <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "सूखे भूसे से नियंत्रित कमरों में 98% कम पानी के साथ स्वादिष्ट व पौष्टिक प्रोटीन का उत्पादन करता है।"
                      : "Consumes dry farm straw inside humidified dark chambers. Yields gourmet culinary protein with 98% less water than cattle pasture while generating enzymatically decomposed compost substrate."}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#dae6da] dark:border-white/10 mt-4 space-y-1.5 text-xs text-[#002210] dark:text-[#E8F4E8]">
                  <div className="flex justify-between">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "बायो-कन्वर्जन दर:" : "Bio-Conversion Rate:"}</span> <strong>75-90%</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "जल आवश्यकता / किग्रा:" : "Water Need / Kg:"}</span> <strong>12 Liters</strong>
                  </div>
                </div>
              </div>

              {/* Card 2: Azolla Super-Fodder */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-md border border-[#dae6da] dark:border-white/10 flex flex-col justify-between hover:-translate-y-1 transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#ebf7eb] dark:bg-[#002210] flex items-center justify-center text-[#002210] dark:text-[#a6f85f]">
                    <Waves className="w-6 h-6 text-[#376b00] dark:text-[#a6f85f]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#376b00] dark:text-[#a6f85f] font-bold uppercase tracking-wider">
                      {isHindi ? "स्तंभ 02 // जलीय नाइट्रोजन" : "Pillar 02 // Aquatic Nitro-Fix"}
                    </span>
                    <h3 className="text-lg font-bold text-[#002210] dark:text-white mt-1">{isHindi ? "अजोला सुपर-चारा" : "Azolla Pinnata"}</h3>
                  </div>
                  <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "तेज़ी से बढ़ने वाला जलीय फर्न जो हवा से नाइट्रोजन सोखकर 25-30% प्रोटीन युक्त दैनिक हरा चारा देता है।"
                      : "Fast-multiplying aquatic micro-fern housing symbiotic cyanobacteria. Fixes continuous atmospheric nitrogen while producing daily green feed packed with 25-30% bio-available crude protein."}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#dae6da] dark:border-white/10 mt-4 space-y-1.5 text-xs text-[#002210] dark:text-[#E8F4E8]">
                  <div className="flex justify-between">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "दोगुना होने का समय:" : "Doubling Time:"}</span> <strong>3-5 Days</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "क्रूड प्रोटीन अनुपात:" : "Crude Protein:"}</span> <strong>28.4%</strong>
                  </div>
                </div>
              </div>

              {/* Card 3: Hybrid Super Napier */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-md border border-[#dae6da] dark:border-white/10 flex flex-col justify-between hover:-translate-y-1 transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#ebf7eb] dark:bg-[#002210] flex items-center justify-center text-[#002210] dark:text-[#a6f85f]">
                    <Trees className="w-6 h-6 text-[#376b00] dark:text-[#a6f85f]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#376b00] dark:text-[#a6f85f] font-bold uppercase tracking-wider">
                      {isHindi ? "स्तंभ 03 // बारहमासी घास" : "Pillar 03 // Perennial C4 Grass"}
                    </span>
                    <h3 className="text-lg font-bold text-[#002210] dark:text-white mt-1">{isHindi ? "हाइब्रिड नेपियर घास" : "Super Napier Grass"}</h3>
                  </div>
                  <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "सालाना 180-200 टन/एकड़ चारा देने वाली बारहमासी घास। इसकी गहरी जड़ें मिट्टी का कटाव रोकती हैं और कार्बन सोखती हैं।"
                      : "Fast-growing perennial forage yielding up to 200 MT/acre annually. Its deep, fibrous root structure prevents soil erosion in desert winds and continuously sequesters deep-subsoil carbon."}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#dae6da] dark:border-white/10 mt-4 space-y-1.5 text-xs text-[#002210] dark:text-[#E8F4E8]">
                  <div className="flex justify-between">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "सालाना कटाई:" : "Annual Multi-Cut:"}</span> <strong>6-8 Harvests</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "आयु काल:" : "Longevity:"}</span> <strong>5-7 Years</strong>
                  </div>
                </div>
              </div>

              {/* Card 4: Bio-Vermicompost */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-md border border-[#dae6da] dark:border-white/10 flex flex-col justify-between hover:-translate-y-1 transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#ebf7eb] dark:bg-[#002210] flex items-center justify-center text-[#002210] dark:text-[#a6f85f]">
                    <Recycle className="w-6 h-6 text-[#376b00] dark:text-[#a6f85f]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#376b00] dark:text-[#a6f85f] font-bold uppercase tracking-wider">
                      {isHindi ? "स्तंभ 04 // जैविक खाद" : "Pillar 04 // Living Inoculant"}
                    </span>
                    <h3 className="text-lg font-bold text-[#002210] dark:text-white mt-1">{isHindi ? "जैविक वर्मीकंपोस्ट" : "Bio-Vermicompost"}</h3>
                  </div>
                  <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                    {isHindi
                      ? "लाभकारी बैक्टीरिया व एंजाइम से भरपूर केंचुआ खाद। यह रासायनिक खादों की जगह लेती है और मिट्टी को उपजाऊ बनाती है।"
                      : "Cold-cured microbial castings teeming with beneficial bacteria, actinomycetes, and enzymes. Replaces chemical fertilizers, neutralizes soil salts, and builds living, drought-resistant soil beds."}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#dae6da] dark:border-white/10 mt-4 space-y-1.5 text-xs text-[#002210] dark:text-[#E8F4E8]">
                  <div className="flex justify-between">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "माइक्रोबियल CFU/g:" : "Microbial CFU/g:"}</span> <strong>10⁸ CFU</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#727972] dark:text-[#A3C2A1]">{isHindi ? "नमी प्रतिधारण वृद्धि:" : "Moisture Retention:"}</span> <strong>+40%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. SMART AGRICULTURE + IoT TELEMETRY */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#f1fdf0] dark:bg-[#071508] py-20 lg:py-28 border-b border-[#dae6da] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Visual Mast */}
              <div className="lg:col-span-6">
                <div className="relative w-full h-[440px] rounded-3xl overflow-hidden shadow-xl bg-[#002210] border border-[#dae6da] dark:border-white/10">
                  <img
                    src="/media/smartagri4.png"
                    alt="Automated solar powered agronomic telemetry mast in a modern green greenhouse"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002210]/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#002210]/90 text-white backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#a6f85f] animate-ping" />
                      <span className="text-[10px] uppercase tracking-wider text-[#a6f85f] font-bold">
                        {isHindi ? "सेंसर नोड: RIICO-ST02" : "Sensor Node: RIICO-ST02"}
                      </span>
                    </div>
                    <span className="text-xs block mt-0.5 font-bold text-white">
                      LoRa Mesh • Signal: -68 dBm
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 dark:bg-[#163824]/95 backdrop-blur-md text-[#002210] dark:text-white shadow-md border border-transparent dark:border-white/10">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-[#424843] dark:text-[#E8F4E8]/80">{isHindi ? "मृदा विद्युत चालकता (EC):" : "Soil Electrical Conductivity (EC):"}</span>
                      <span className="font-bold text-[#376b00] dark:text-[#a6f85f]">{isHindi ? "0.68 dS/m (सामान्य)" : "0.68 dS/m (Normal)"}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs mt-1.5 pt-1.5 border-t border-[#dae6da] dark:border-white/10">
                      <span className="font-semibold text-[#424843] dark:text-[#E8F4E8]/80">{isHindi ? "कैनोपी तापमान:" : "Canopy Surface Pyrometer:"}</span>
                      <span className="font-bold text-[#002210] dark:text-white">26.2°C</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Telemetry Pipeline Explanation */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-[#376b00] dark:text-[#a6f85f]">
                  {isHindi ? "टेलीमेट्री वास्तुकला" : "Telemetry Architecture"}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight leading-tight">
                  {isHindi ? "सुधारने से पहले सटीक मापें।" : "Measure Before You Optimize."}
                </h2>
                <p className="text-base sm:text-lg text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "जीवविज्ञान के बिना डेटा केवल शोर है; और टेलीमेट्री के बिना जीवविज्ञान केवल अनुमान है। JAS Agro अत्यधिक तापमान के लिए मजबूत फील्ड नोड्स बनाता है।"
                    : "Data without agronomic biology is noise; biology without real-time telemetry is guesswork. JAS Agro builds field telemetry nodes specifically ruggedized for arid thermal stress."}
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#002210] flex items-center justify-center text-[#002210] dark:text-[#a6f85f] font-bold text-xs shadow-sm">
                      A
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#002210] dark:text-white block">
                        {isHindi ? "भूमिगत मल्टी-डेप्थ SDI-12 प्रोब्स" : "Subterranean Multi-Depth SDI-12 Probes"}
                      </span>
                      <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/80">
                        {isHindi ? "15cm, 30cm और 60cm की गहराई पर नमी मापता है।" : "Measures volumetric water content at 15cm, 30cm, and 60cm depths."}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#002210] flex items-center justify-center text-[#002210] dark:text-[#a6f85f] font-bold text-xs shadow-sm">
                      B
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#002210] dark:text-white block">
                        {isHindi ? "IP67 वेदरप्रूफ माइक्रो-हब" : "Arid-Grade IP67 Micro-Hubs"}
                      </span>
                      <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/80">
                        {isHindi ? "सोलर और LiFePO4 बैटरी से चलने वाले अल्ट्रा-लो-पावर चिप्स।" : "ESP32 low-power chips running on mini monocrystalline solar arrays with LiFePO4 batteries."}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-[#002210] flex items-center justify-center text-[#002210] dark:text-[#a6f85f] font-bold text-xs shadow-sm">
                      C
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#002210] dark:text-white block">
                        {isHindi ? "सेकंडों में स्वचालित क्लोज्ड-लूप एक्शन" : "Sub-Second Closed-Loop Actuation"}
                      </span>
                      <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/80">
                        {isHindi ? "क्लाउड इंजन बिना मानवीय देरी के फॉगर्स व वाल्व चालू करता है।" : "Cloud agronomy engines fire solenoid relays without waiting for manual human intervention."}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. THE 6 PILLARS FRAMEWORK */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#ebf7eb] dark:bg-[#0D230E] py-20 lg:py-28 border-b border-[#dae6da] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#376b00] dark:text-[#a6f85f] block mb-2">
                {isHindi ? "बुनियादी मानक" : "Architectural Standards"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "JAS Agro सस्टेनेबिलिटी के 6 मुख्य स्तंभ" : "The 6 JAS Agro Sustainability Pillars"}
              </h2>
              <p className="text-base text-[#424843] dark:text-[#E8F4E8]/80 mt-2">
                {isHindi
                  ? "हमारे हर फार्म इंस्टालेशन, प्रोजेक्ट और रिसर्च केंद्र को नियंत्रित करने वाले प्रमुख नियम।"
                  : "The core operational mandates governing every farm installation, advisory contract, and research station we deploy."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Pillar 01 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#ebf7eb] dark:bg-[#002210] text-[#376b00] dark:text-[#a6f85f] flex items-center justify-center">
                    <Sprout className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-bold text-[#002210] dark:text-white uppercase tracking-wider">
                    {isHindi ? "स्तंभ 01" : "Pillar 01"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#002210] dark:text-white">{isHindi ? "मृदा एवं जैविक स्वास्थ्य" : "Soil & Biological Health"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "केमिकल्स की जगह मिट्टी के सूक्ष्मजीवों और जैविक कार्बन को प्राथमिकता देना, जिससे स्थायी उर्वरता बनी रहे।"
                    : "Prioritizing indigenous microbial biomes and organic carbon replenishment over quick chemical fixes, ensuring perpetual soil fertility."}
                </p>
              </div>

              {/* Pillar 02 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#ebf7eb] dark:bg-[#002210] text-[#376b00] dark:text-[#a6f85f] flex items-center justify-center">
                    <Droplets className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-bold text-[#002210] dark:text-white uppercase tracking-wider">
                    {isHindi ? "स्तंभ 02" : "Pillar 02"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#002210] dark:text-white">{isHindi ? "वायुमंडलीय VPD प्रबंधन" : "Atmospheric VPD Stewardship"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "पारंपरिक बाढ़ सिंचाई की जगह पौधों की वास्तविक मांग के अनुसार सटीक मिस्टिंग से पानी बचाना।"
                    : "Eliminating wasteful flood irrigation through precision sensors that match watering schedules to real-time transpiration physics."}
                </p>
              </div>

              {/* Pillar 03 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#ebf7eb] dark:bg-[#002210] text-[#376b00] dark:text-[#a6f85f] flex items-center justify-center">
                    <Recycle className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-bold text-[#002210] dark:text-white uppercase tracking-wider">
                    {isHindi ? "स्तंभ 03" : "Pillar 03"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#002210] dark:text-white">{isHindi ? "100% बायोमास रीसाइक्लिंग" : "100% Biomass Cycling"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "पराली जलाने पर पूर्ण रोक और हर टन भूसे को मशरूम सबस्ट्रेट या जैविक खाद में बदलना।"
                    : "Enforcing a strict zero-burn protocol by turning every metric ton of crop stubble into mushroom substrates or vermicompost."}
                </p>
              </div>

              {/* Pillar 04 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#ebf7eb] dark:bg-[#002210] text-[#376b00] dark:text-[#a6f85f] flex items-center justify-center">
                    <Leaf className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-bold text-[#002210] dark:text-white uppercase tracking-wider">
                    {isHindi ? "स्तंभ 04" : "Pillar 04"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#002210] dark:text-white">{isHindi ? "टिकाऊ बहु-कटाई चारा" : "Responsible Multi-Cut Forage"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "उच्च पैदावार वाली घास उगाना जो कम जगह में अधिकतम हरा चारा देकर मिट्टी को हवा के कटाव से बचाए।"
                    : "Cultivating high-yield C4 grasses that produce maximum green fodder per square meter while stabilizing arid topsoil."}
                </p>
              </div>

              {/* Pillar 05 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#ebf7eb] dark:bg-[#002210] text-[#376b00] dark:text-[#a6f85f] flex items-center justify-center">
                    <Radio className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-bold text-[#002210] dark:text-white uppercase tracking-wider">
                    {isHindi ? "स्तंभ 05" : "Pillar 05"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#002210] dark:text-white">{isHindi ? "मजबूत ग्रामीण IoT टेलीमेट्री" : "Decentralized Arid Telemetry"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "सोलर पावर्ड हार्डवेयर जो रेगिस्तान की 50°C गर्मी में भी बिना रुकावट सटीक डेटा देता है।"
                    : "Deploying low-power, solar-backed IoT hardware designed to withstand 50°C summer heat without component failure or drift."}
                </p>
              </div>

              {/* Pillar 06 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-[#163824]/60 shadow-sm border border-[#dae6da] dark:border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#ebf7eb] dark:bg-[#002210] text-[#376b00] dark:text-[#a6f85f] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-bold text-[#002210] dark:text-white uppercase tracking-wider">
                    {isHindi ? "स्तंभ 06" : "Pillar 06"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#002210] dark:text-white">{isHindi ? "किसान की आर्थिक संपन्नता" : "Farmer Economic Viability"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi
                    ? "लागत घटाने के साथ-साथ मशरूम और दूध उत्पादन से किसानों के लिए नए मुनाफे के रास्ते खोलना।"
                    : "Designing biological systems that lower recurring chemical input costs while opening high-margin mushroom and milk revenue streams."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. IMPACT THAT CAN BE MEASURED (Ground-Truth Accounting) */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#002210] text-white py-20 lg:py-28 border-b border-[#163824]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#a6f85f] block mb-2">
                {isHindi ? "वास्तविक सत्यापित परिणाम" : "Ground-Truth Accounting"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                {isHindi ? "प्रभाव जिसे मापा जा सकता है।" : "Impact That Can Be Measured."}
              </h2>
              <p className="text-sm text-[#aad0b3] mt-2 font-light">
                {isHindi
                  ? "राजस्थान, हरियाणा और गुजरात में स्थापित परियोजनाओं से सत्यापित वास्तविक आंकड़े।"
                  : "All figures audited across Rajasthan, Haryana, and Gujarat deployments. We state explicit parameters and avoid fabricated carbon offsets."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              {/* Metric 1 */}
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-[#a6f85f] block">
                  2,500+
                </span>
                <span className="text-sm font-bold text-white block">{isHindi ? "किसान व डेयरी फार्म" : "Farms & Dairies Guided"}</span>
                <p className="text-[11px] text-[#aad0b3] leading-snug">
                  {isHindi ? "ऑन-साइट बायो-ऑडिट, केंचुआ खाद और फसल प्रबंधन से जुड़े।" : "Through on-site bio-audits, vermiculture installation, and agronomic plans."}
                </p>
              </div>

              {/* Metric 2 */}
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-white block">450+ MT</span>
                <span className="text-sm font-bold text-white block">{isHindi ? "हरा चारा उत्पादित" : "Green Fodder Managed"}</span>
                <p className="text-[11px] text-[#aad0b3] leading-snug">
                  {isHindi ? "सुपर नेपियर और अजोला से बिना किसी रासायनिक खाद के तैयार चारा।" : "Super Napier & Azolla bio-mass harvested without synthetic chemical additives."}
                </p>
              </div>

              {/* Metric 3 */}
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-[#a6f85f] block">
                  120+ MT
                </span>
                <span className="text-sm font-bold text-white block">{isHindi ? "ऑयस्टर मशरूम" : "Oyster Mushrooms"}</span>
                <p className="text-[11px] text-[#aad0b3] leading-snug">
                  {isHindi ? "फसल अवशेषों से नियंत्रित चैंबरों में सालाना तैयार उच्च गुणवत्ता प्रोटीन।" : "Produced annually from crop residue inside climate-controlled precision chambers."}
                </p>
              </div>

              {/* Metric 4 */}
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-white block">100%</span>
                <span className="text-sm font-bold text-white block">{isHindi ? "यूरिया से मुक्ति" : "Zero Synthetic Urea"}</span>
                <p className="text-[11px] text-[#aad0b3] leading-snug">
                  {isHindi ? "अजोला और वर्मीकंपोस्ट द्वारा रासायनिक यूरिया का पूर्ण प्रतिस्थापन।" : "Biological Azolla and vermicast completely replace chemical nitrogen fertilizers."}
                </p>
              </div>

              {/* Metric 5 */}
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-[#a6f85f] block">
                  12 ms
                </span>
                <span className="text-sm font-bold text-white block">{isHindi ? "टेलीमेट्री रिस्पांस" : "Telemetry Relay"}</span>
                <p className="text-[11px] text-[#aad0b3] leading-snug">
                  {isHindi ? "सेंसर से क्लाउड तक डेटा ट्रांसमिशन की त्वरित गति।" : "Field micro-controller responsiveness from soil sensor detection to cloud logging."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. 6-STAGE IMPLEMENTATION JOURNEY */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#f1fdf0] dark:bg-[#071508] py-20 lg:py-24 border-b border-[#dae6da] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-widest text-[#376b00] dark:text-[#a6f85f] block mb-2">
                {isHindi ? "टर्नकी क्रियान्वयन" : "Turnkey Execution"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "6 चरणों की स्थापना यात्रा" : "The 6-Stage Implementation Journey"}
              </h2>
              <p className="text-base text-[#424843] dark:text-[#E8F4E8]/80 mt-2">
                {isHindi ? "मिट्टी जांच से लेकर संचालन और लाइव क्लाउड मॉनिटरिंग तक।" : "From first soil core sampling to operational handover and ongoing cloud monitoring."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="p-5 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#376b00] dark:text-[#a6f85f]">{isHindi ? "चरण 01" : "STAGE 01"}</span>
                <h4 className="text-sm font-bold text-[#002210] dark:text-white">{isHindi ? "मूल्यांकन" : "Assess"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi ? "मिट्टी परीक्षण, पानी की लवणता जांच और बायोमास ऑडिट।" : "Topsoil lab profiling, well water salinity check, and biomass audit."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#376b00] dark:text-[#a6f85f]">{isHindi ? "चरण 02" : "STAGE 02"}</span>
                <h4 className="text-sm font-bold text-[#002210] dark:text-white">{isHindi ? "डिजाइन" : "Architecture"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi ? "मशरूम रूम्स, अजोला पिट्स और चारा क्यारियों का लेआउट।" : "Closed-loop layout design for mushroom rooms, Azolla pits, and forage beds."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#376b00] dark:text-[#a6f85f]">{isHindi ? "चरण 03" : "STAGE 03"}</span>
                <h4 className="text-sm font-bold text-[#002210] dark:text-white">{isHindi ? "बायो-निर्माण" : "Bio-Build"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi ? "छायादार वर्मीबेड्स, पाइपिंग और फ्रूटिंग रैक की स्थापना।" : "Civil installation of shaded vermibeds, mist piping, and fruiting racks."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#376b00] dark:text-[#a6f85f]">{isHindi ? "चरण 04" : "STAGE 04"}</span>
                <h4 className="text-sm font-bold text-[#002210] dark:text-white">{isHindi ? "सेंसर कैलिब्रेशन" : "Calibration"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi ? "ESP32 टेलीमेट्री और भूमिगत मिट्टी सेंसर्स की स्थापना।" : "ESP32 telemetry masts deployed and subterranean soil sensors tuned."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#376b00] dark:text-[#a6f85f]">{isHindi ? "चरण 05" : "STAGE 05"}</span>
                <h4 className="text-sm font-bold text-[#002210] dark:text-white">{isHindi ? "प्रशिक्षण" : "Training"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi ? "केंचुआ संवर्धन, नमी नियंत्रण और कटाई पर प्रैक्टिकल ट्रेनिंग।" : "Hands-on farmhand training in worm bedding, moisture management, and harvest routines."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#ebf7eb] dark:bg-[#163824]/60 border border-[#dae6da] dark:border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#376b00] dark:text-[#a6f85f]">{isHindi ? "चरण 06" : "STAGE 06"}</span>
                <h4 className="text-sm font-bold text-[#002210] dark:text-white">{isHindi ? "निरंतर निगरानी" : "Stewardship"}</h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed">
                  {isHindi ? "लगातार एग्रोनॉमी सलाह और लाइव क्लाउड टेलीमेट्री निगरानी।" : "Continuous agronomic advisory and live cloud telemetry oversight."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. SCIENTIFIC INTEGRITY */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#ebf7eb] dark:bg-[#0D230E] py-16 lg:py-20 border-b border-[#dae6da] dark:border-white/10 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#376b00] dark:text-[#a6f85f]">
              {isHindi ? "वैज्ञानिक सत्यनिष्ठा" : "Scientific Integrity"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002210] dark:text-white">
              {isHindi ? "हमारा विश्वास: सस्टेनेबिलिटी मापने योग्य होनी चाहिए।" : "We Believe Sustainability Must Be Demonstrable."}
            </h3>
            <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed max-w-2xl mx-auto">
              {isHindi
                ? "आधुनिक कृषि में कई दावे कागजी होते हैं। JAS Agro में हमारा प्रत्येक दावा मिट्टी प्रयोगशाला के परिणामों, सटीक वाटर-फ्लो मीटर और पारदर्शी सेंसर डेटा पर आधारित है। जो खेत में साबित नहीं हो सकता, हम उसका दावा नहीं करते।"
                : "Too much of modern agricultural technology consists of slide decks and greenwashed carbon credits. At JAS Agro, every claim is grounded in physical soil lab results, verifiable water flow meters, and transparent sensor logs accessible to the farm operator. If it cannot be measured in the field, we do not claim it."}
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#002210] dark:text-[#a6f85f] font-bold">
              <span>{isHindi ? "ISO 14064 प्रोटोकॉल" : "ISO 14064 PROTOCOL"}</span>
              <span>•</span>
              <span>{isHindi ? "NPOP जैविक मानक" : "NPOP BIOLOGICAL STANDARDS"}</span>
              <span>•</span>
              <span>{isHindi ? "पारदर्शी टेलीमेट्री लॉग्स" : "OPEN TELEMETRY LOGS"}</span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 13. FINAL IMMERSIVE CALL TO ACTION */}
        {/* ========================================================================= */}
        <section
          id="consultation"
          className="w-full bg-[#002210] py-20 lg:py-28 relative overflow-hidden text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#163824] via-[#002210] to-[#002210] opacity-80 pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center space-y-8">
            <span className="px-4 py-1.5 rounded-full bg-white/10 text-[#a6f85f] text-xs font-bold uppercase tracking-wider inline-block border border-[#a6f85f]/20">
              {isHindi ? "आज ही बदलाव की शुरुआत करें" : "Start Your Transition Today"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {isHindi ? (
                <>
                  अधिक टिकाऊ और स्मार्ट <br />
                  फार्मिंग सिस्टम अपनाएं।
                </>
              ) : (
                <>
                  Build a More Sustainable <br />
                  Farm System.
                </>
              )}
            </h2>
            <p className="text-base sm:text-xl text-[#aad0b3] max-w-2xl mx-auto leading-relaxed font-light">
              {isHindi
                ? "चाहे आप कमर्शियल डेयरी चलाते हों, मशरूम सेटअप लगाना चाहते हों, या महंगे रासायनिक खादों से मुक्ति चाहते हों—आइए अपनी जमीन के लिए एकीकृत जैविक समाधान बनाएं।"
                : "Whether you operate a commercial dairy, are establishing an indoor mushroom facility, or aim to eliminate costly synthetic fertilizer dependency—let's design an integrated biological solution for your acreage."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="px-8 py-4 rounded-full bg-[#a6f85f] text-[#0d2000] text-xs font-bold uppercase tracking-wider hover:bg-[#8cdb46] transition-all shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                {isHindi ? "कस्टम फार्म मूल्यांकन प्राप्त करें" : "Get a Custom Farm Evaluation"}
              </button>
              <a
                href="tel:+917372926623"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all border border-white/15 backdrop-blur-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#a6f85f]" />
                <span>{isHindi ? "JAS एग्रोनॉमिस्ट से बात करें" : "Speak with JAS Agronomist"}</span>
              </a>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-[#aad0b3] text-xs">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#a6f85f]" /> {isHindi ? "रिस्पांस समय: 48 घंटे" : "Turnaround: 48 Hours"}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#a6f85f]" /> {isHindi ? "कवरेज: राजस्थान, पंजाब, हरियाणा, गुजरात" : "Field Coverage: Rajasthan, Haryana, Gujarat"}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#a6f85f]" /> {isHindi ? "प्रत्यक्ष एग्रोनॉमिस्ट परामर्श" : "Direct Agronomist Consultation"}
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
