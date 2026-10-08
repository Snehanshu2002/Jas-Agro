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
  Grid,
} from "react-feather";

// Feather Icons compatibility mappings
const Sprout = FeatherIcon;
const Leaf = FeatherIcon;
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
import { Sliders } from "react-feather";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";

type SolutionTab = "dairy" | "commercial" | "organic" | "arid";

export default function SolutionsPage() {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const [activeTab, setActiveTab] = useState<SolutionTab>("dairy");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F9F4] dark:bg-[#071508] text-[#141E17] dark:text-[#E8F4E8] font-['Jost',sans-serif] antialiased selection:bg-[#A6F85F] selection:text-[#0D2000] transition-colors duration-300">
      {/* Global Navigation */}
      <Navbar />

      <main className="w-full pt-16 sm:pt-20">

        {/* =========================================================================
            1. HERO SECTION — 'FROM FARM SETUP TO SMART AGRICULTURE'
           ========================================================================= */}
        <section
          data-hero-section
          className="relative w-full overflow-hidden bg-[#002210] text-[#E8F4E8] py-12 sm:py-16 lg:py-24 transition-colors duration-300"
        >
          {/* Background Cinematic Agricultural Image with Scrim */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="/media/Lush Green Forage Grass Field.png"
              alt="JAS Agro Agricultural Ecosystem Field"
              className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002210] via-[#002210]/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002210] via-transparent to-[#002210]/60" />
            
            {/* Subtle Tech Grid Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(rgba(166, 248, 95, 0.4) 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-between text-left">
            
            {/* Breadcrumb & Status Pill */}
            <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#A6F85F] text-xs font-medium uppercase tracking-wider border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A6F85F] animate-ping" />
                {isHindi ? "एकीकृत कृषि-पारिस्थितिक सिस्टम्स" : "Integrated Agro-Ecological Systems"}
              </span>
              <span className="text-[#E8F4E8]/40 text-xs hidden sm:inline">•</span>
              <span className="text-xs font-medium uppercase tracking-widest text-[#E8F4E8]/70 hidden sm:inline">
                {isHindi ? "टर्नकी फार्म इंफ्रास्ट्रक्चर" : "Turnkey Farm Infrastructure"}
              </span>
            </div>

            {/* Main Headline Stack & Floating HUD */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
              
              <div className="lg:col-span-8 space-y-5 sm:space-y-6">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]">
                  {isHindi ? (
                    <>
                      फार्म सेटअप से लेकर{" "}
                      <span className="text-[#A6F85F] italic font-normal">स्मार्ट एग्रीकल्चर तक।</span>
                    </>
                  ) : (
                    <>
                      From Farm Setup to{" "}
                      <span className="text-[#A6F85F] italic font-normal">Smart Agriculture.</span>
                    </>
                  )}
                </h1>

                <p className="text-base sm:text-lg text-[#E8F4E8]/85 max-w-2xl font-light leading-relaxed">
                  {isHindi
                    ? "व्यावहारिक जैविक, चारा एवं स्वचालन समाधान जो शुष्क जलवायु में भी खेतों को लाभदायक और टिकाऊ बनाते हैं।"
                    : "Practical biological, cultivation, and automation solutions engineered to help farms grow efficiently, sustainably, and intelligently under real climatic constraints."}
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href="#ecosystem"
                    className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#A6F85F] text-[#002210] font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:bg-[#8cdb46] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    <span>{isHindi ? "एकीकृत समाधान देखें" : "Explore Integrated Solutions"}</span>
                    <ArrowDown className="w-4 h-4" />
                  </a>

                  <a
                    href="tel:+917372926623"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#163824] text-white font-medium text-xs sm:text-sm hover:bg-[#163824]/80 border border-white/10 transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-[#A6F85F]" />
                    <span>{isHindi ? "परामर्श: +91 73729 26623" : "Consult Agronomist: +91 73729 26623"}</span>
                  </a>
                </div>
              </div>

              {/* Floating Real-Time Thar Agro-Mesh HUD Panel */}
              <div className="lg:col-span-4 w-full">
                <div className="bg-[#163824]/90 backdrop-blur-xl p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/15 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#A6F85F] animate-pulse" />
                      <span className="text-xs uppercase tracking-wider text-white font-semibold">
                        {isHindi ? "थार एग्रो-मेश लाइव टेलीमेट्री" : "Real-Time Thar Agro-Mesh"}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#A6F85F] font-bold">SYNC ACTIVE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left">
                    <div className="space-y-1">
                      <span className="text-[11px] text-[#E8F4E8]/60 uppercase">Solar Radiation</span>
                      <p className="text-lg sm:text-xl font-bold text-white">
                        720 <span className="text-xs font-normal text-[#E8F4E8]/60">W/m²</span>
                      </p>
                      <div className="w-full bg-[#002210] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#A6F85F] h-full w-[72%]" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] text-[#E8F4E8]/60 uppercase">Canopy VPD</span>
                      <p className="text-lg sm:text-xl font-bold text-white">
                        1.18 <span className="text-xs font-normal text-[#E8F4E8]/60">kPa</span>
                      </p>
                      <div className="w-full bg-[#002210] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#A6F85F] h-full w-[59%]" />
                      </div>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] text-[#E8F4E8]/60 uppercase">Biomass Flux</span>
                      <p className="text-base sm:text-lg font-bold text-[#A6F85F]">
                        +38% <span className="text-[11px] font-normal text-[#E8F4E8]/60">vs Base</span>
                      </p>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] text-[#E8F4E8]/60 uppercase">Rhizosphere EC</span>
                      <p className="text-base sm:text-lg font-bold text-white">
                        1.4 <span className="text-[11px] font-normal text-[#E8F4E8]/60">dS/m</span>
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 text-xs text-[#E8F4E8]/60 flex items-center justify-between border-t border-white/10">
                    <span>Jodhpur-Bikaner Station</span>
                    <span>15s Pings</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Micro Live Stats Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-left">
              <div className="flex flex-col px-3 py-1.5 border-r border-white/10 last:border-none">
                <span className="text-xl sm:text-2xl font-bold text-white">
                  42,000+ <span className="text-[#A6F85F] font-normal text-sm">MT</span>
                </span>
                <span className="text-xs uppercase tracking-wider text-[#E8F4E8]/70">
                  {isHindi ? "कुल जैविक बायोमास" : "Biological Biomass"}
                </span>
              </div>

              <div className="flex flex-col px-3 py-1.5 border-r border-white/10 last:border-none">
                <span className="text-xl sm:text-2xl font-bold text-white">
                  120+ <span className="text-[#A6F85F] font-normal text-sm">Nodes</span>
                </span>
                <span className="text-xs uppercase tracking-wider text-[#E8F4E8]/70">
                  {isHindi ? "लाइव LoRaWAN सेंसर" : "LoRaWAN Probes Live"}
                </span>
              </div>

              <div className="flex flex-col px-3 py-1.5 border-r border-white/10 last:border-none">
                <span className="text-xl sm:text-2xl font-bold text-white">
                  -42%
                </span>
                <span className="text-xs uppercase tracking-wider text-[#E8F4E8]/70">
                  {isHindi ? "सिंचाई जल मांग में कमी" : "Irrigation Water Cut"}
                </span>
              </div>

              <div className="flex flex-col px-3 py-1.5">
                <span className="text-xl sm:text-2xl font-bold text-white">
                  35% <span className="text-[#A6F85F] font-normal text-sm">Cut</span>
                </span>
                <span className="text-xs uppercase tracking-wider text-[#E8F4E8]/70">
                  {isHindi ? "पशु आहार खर्च में बचत" : "Livestock Feed Savings"}
                </span>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            2. THE PROBLEM WE SOLVE: CHALLENGE MATRIX
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-[#EBF7EB] dark:bg-[#0D230E] text-[#141E17] dark:text-[#E8F4E8] border-b border-[#C2C8C0]/40 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-12 text-left">
            
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase px-3 py-1 rounded bg-[#002210] dark:bg-[#163824] text-[#A6F85F] font-semibold tracking-wider">
                  {isHindi ? "डायग्नोस्टिक एग्रोनॉमी" : "Diagnostic Agronomy"}
                </span>
                <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase tracking-wider font-medium">
                  {isHindi ? "खेत की वास्तविक चुनौतियाँ" : "Field Realities"}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "आधुनिक खेती की समस्या केवल एक नहीं है।" : "Modern Farming Has More Than One Problem."}
              </h2>
              <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-normal">
                {isHindi
                  ? "कृषि एक परस्पर-जुड़ा जैविक तंत्र है। एक समस्या का एकाकी समाधान अक्सर दूसरी जगह नई रुकावटें पैदा करता है।"
                  : "Addressing one farming issue in isolation inevitably creates bottlenecks elsewhere without an integrated biological system."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Problem 01 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-[#376B00] dark:text-[#A6F85F] uppercase tracking-wider block">
                    01 // Climate & Heat Volatility
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "अत्यधिक गर्मी एवं गिरता भूजल" : "Severe Heat Stress & Depleting Water Tables"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "48°C की ग्रीष्मकालीन लू और गहरे होते ट्यूबवेल पारंपरिक फसल चक्रों को भारी वित्तीय जोखिम में डालते हैं।"
                      : "Prolonged summer heat spikes and depleting borewells turn open-field crop cycles into severe financial risks."}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#C2C8C0]/30 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#BA1A1A] dark:text-[#FFDAD6] font-semibold uppercase">Stress Factor: 8.9/10</span>
                  <Thermometer className="w-4 h-4 text-[#424843] dark:text-[#E8F4E8]/60" />
                </div>
              </div>

              {/* Problem 02 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-[#376B00] dark:text-[#A6F85F] uppercase tracking-wider block">
                    02 // Escalating Input Costs
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "महंगे रासायनिक उर्वरक व चारा" : "Skyrocketing Synthetic Fertilizers & Feed"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "लगातार बढ़ते दाना-चारा और रासायनिक खाद के खर्च किसान के शुद्ध मुनाफे को घटा देते हैं।"
                      : "Escalating commercial cattle feed pellets and recurring chemical NPK inputs squeeze net producer margins."}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#C2C8C0]/30 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#BA1A1A] dark:text-[#FFDAD6] font-semibold uppercase">Margin Leakage: -38%</span>
                  <TrendingUp className="w-4 h-4 text-[#424843] dark:text-[#E8F4E8]/60 rotate-180" />
                </div>
              </div>

              {/* Problem 03 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-[#376B00] dark:text-[#A6F85F] uppercase tracking-wider block">
                    03 // Biomass Waste
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "कृषि अवशेषों व पराली का अपव्यय" : "Squandered Residues & Burned Biomass"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "लाखों टन गेहूं की तूड़ी और गोबर का उपयोग मशरूम उत्पादन या जैविक खाद में होने की बजाय बर्बाद हो जाता है।"
                      : "Crop straw and cattle manure are frequently wasted rather than converted to mushroom yield and rich humus."}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#C2C8C0]/30 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#653D1E] dark:text-[#FFDCC5] font-semibold uppercase">Lost Biomass: High</span>
                  <Recycle className="w-4 h-4 text-[#424843] dark:text-[#E8F4E8]/60" />
                </div>
              </div>

              {/* Problem 04 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-[#376B00] dark:text-[#A6F85F] uppercase tracking-wider block">
                    04 // Sub-Surface Blind Spots
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "जड़ों की नमी का अंधा अनुमान" : "Invisible Sub-Surface Moisture Deficit"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "मृदा नमी डेटा के अभाव में किसान बिना आवश्यकता के पानी बहाते हैं या फसलें सूखने देते हैं।"
                      : "Without active root moisture tracking, growers routinely over-irrigate or underwater crops blindly."}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#C2C8C0]/30 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#BA1A1A] dark:text-[#FFDAD6] font-semibold uppercase">Water Loss: ~45%</span>
                  <ShieldAlert className="w-4 h-4 text-[#424843] dark:text-[#E8F4E8]/60" />
                </div>
              </div>

              {/* Problem 05 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-[#376B00] dark:text-[#A6F85F] uppercase tracking-wider block">
                    05 // Fragmented Hardware
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "असंगठित उपकरण एवं अधूरा समाधान" : "Disconnected Gadgets Without Agronomy"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "अलग सोलर पंप और स्टैंडअलोन गैजेट्स जो जैविक खेती से नहीं जुड़ते, किसान को भ्रमित करते हैं।"
                      : "Standalone gadgets that do not integrate with real biological farm cycles fail to produce ROI."}
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-[#C2C8C0]/30 dark:border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#424843] dark:text-[#E8F4E8]/60 font-semibold uppercase">Adoption Failure: Common</span>
                  <Layers className="w-4 h-4 text-[#424843] dark:text-[#E8F4E8]/60" />
                </div>
              </div>

              {/* JAS Solution Summary Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#002210] text-white shadow-lg flex flex-col justify-between border border-white/10">
                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-[#A6F85F] uppercase tracking-wider block">
                    {isHindi ? "JAS एग्रो समाधान" : "The JAS Agro Synthesis"}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {isHindi ? "जैविक और डिजिटल का संपूर्ण एकीकरण" : "Closed-Loop Biological & Digital Unity"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "बायोमास, चारा उत्पादन, मशरूम कल्टीवेशन और LoRaWAN IoT टेलीमेट्री का आत्मनिर्भर चक्र।"
                      : "We link biomass conversion, fodder generation, mushroom production, and LoRaWAN IoT telemetry into a synchronized resilient farm economy."}
                  </p>
                </div>
                <a
                  href="#ecosystem"
                  className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-2 text-[#A6F85F] font-bold text-xs sm:text-sm hover:underline cursor-pointer"
                >
                  <span>{isHindi ? "नीचे संपूर्ण सिस्टम देखें" : "Explore The System Below"}</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            3. INTERCONNECTED ECOSYSTEM ARCHITECTURE (Circular Bio-Economy)
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-[#F6F9F4] dark:bg-[#071508] text-[#141E17] dark:text-[#E8F4E8] transition-colors duration-300" id="ecosystem">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-14 text-left">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase px-3.5 py-1 rounded-full bg-[#DFEBDF] dark:bg-[#163824] text-[#002210] dark:text-[#A6F85F] font-semibold tracking-wider border border-[#C2C8C0]/40 dark:border-white/10">
                {isHindi ? "सर्कुलर बायो-इकोनॉमी मॉडल" : "Circular Bio-Economy Model"}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "परस्पर जुड़ा जीवित फार्म इकोसिस्टम।" : "The Interconnected Living Farm."}
              </h2>
              <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                {isHindi
                  ? "एक शून्य-अपशिष्ट चक्र जहाँ एक मॉड्यूल का उपोत्पाद अगले मॉड्यूल के लिए उच्च-शक्ति इनपुट बनता है।"
                  : "A zero-waste regenerative cycle where the byproduct of one module serves as the input for the next."}
              </p>
            </div>

            {/* Ecosystem Architecture Flow Diagram */}
            <div className="relative bg-white dark:bg-[#163824]/40 p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#C2C8C0]/40 dark:border-white/10 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                
                {/* Node 1 */}
                <div className="bg-[#EBF7EB] dark:bg-[#002210] p-6 rounded-2xl space-y-2.5 hover:bg-[#DFEBDF] dark:hover:bg-[#163824] transition-colors border border-[#C2C8C0]/30 dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#4C290B] text-[#FFDCC5] flex items-center justify-center">
                    <Recycle className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#424843] dark:text-[#E8F4E8]/60 font-semibold uppercase">Node 01 // Soil Base</span>
                    <ArrowRight className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "फार्म बायोमास एवं गोबर" : "Farm Biomass & Dung"}
                  </h4>
                  <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "उच्च दक्षता वाले Eisenia fetida वर्मीकंपोस्ट बेड में ह्यूमस और तरल बायो-फर्टिलाइजर तैयार करना।"
                      : "Fed into high-efficiency Eisenia fetida beds to generate humus and liquid bio-fertilizer."}
                  </p>
                </div>

                {/* Node 2 */}
                <div className="bg-[#EBF7EB] dark:bg-[#002210] p-6 rounded-2xl space-y-2.5 hover:bg-[#DFEBDF] dark:hover:bg-[#163824] transition-colors border border-[#C2C8C0]/30 dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#376B00] text-white flex items-center justify-center">
                    <Waves className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#424843] dark:text-[#E8F4E8]/60 font-semibold uppercase">Node 02 // Aquatic Bed</span>
                    <ArrowRight className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "अजोला जलीय कल्चर तालाब" : "Azolla Micro-Fern Ponds"}
                  </h4>
                  <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "25-30% कच्चा प्रोटीन युक्त जलीय पौधा, जो हर 48 घंटे में 100% दोगुना होता है।"
                      : "25–30% crude protein aquatic plant multiplying 100% every 48 hours for livestock feed."}
                  </p>
                </div>

                {/* Node 3 */}
                <div className="bg-[#EBF7EB] dark:bg-[#002210] p-6 rounded-2xl space-y-2.5 hover:bg-[#DFEBDF] dark:hover:bg-[#163824] transition-colors border border-[#C2C8C0]/30 dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#002210] text-[#A6F85F] flex items-center justify-center">
                    <Wheat className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#424843] dark:text-[#E8F4E8]/60 font-semibold uppercase">Node 03 // Green Forage</span>
                    <ArrowDown className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "हाइब्रिड सुपर नेपियर घास" : "Hybrid Super Napier"}
                  </h4>
                  <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "सालाना 200+ टन प्रति एकड़ पैदावार देने वाला 5-वर्षीय बहुवर्षीय हरा चारा।"
                      : "Perennial forage yielding 200+ tonnes/acre annually with rapid 45-day cutting cycles."}
                  </p>
                </div>

                {/* Node 4 */}
                <div className="bg-[#EBF7EB] dark:bg-[#002210] p-6 rounded-2xl space-y-2.5 hover:bg-[#DFEBDF] dark:hover:bg-[#163824] transition-colors border border-[#C2C8C0]/30 dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#163824] text-[#A6F85F] flex items-center justify-center">
                    <Sprout className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#424843] dark:text-[#E8F4E8]/60 font-semibold uppercase">Node 04 // High-Value Crop</span>
                    <ArrowRight className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] rotate-180" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "ऑयस्टर मशरूम ग्रो चैंबर्स" : "Oyster Mushroom Chambers"}
                  </h4>
                  <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "गेहूं और धान की तूड़ी को नियंत्रित इनडोर चैंबर्स में प्रीमियम मशरूम में बदलना।"
                      : "Turn agricultural crop straw into high-margin gourmet harvest with zero climate risk."}
                  </p>
                </div>

                {/* Node 5: Central Feedback */}
                <div className="bg-[#002210] text-white p-6 rounded-2xl space-y-2.5 shadow-md border border-[#A6F85F]/30">
                  <div className="w-10 h-10 rounded-xl bg-[#A6F85F] text-[#002210] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#A6F85F] font-bold uppercase">Core // Regeneration</span>
                    <Recycle className="w-4 h-4 text-[#A6F85F]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {isHindi ? "स्पेंट मशरूम सबस्ट्रेट (SMS)" : "Spent Substrate (SMS)"}
                  </h4>
                  <p className="text-xs text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "मशरूम कटाई के बाद बचा सबस्ट्रेट वर्मीकंपोस्ट में लौटकर उच्च-गुणवत्ता भोजन बनता है।"
                      : "Used mushroom blocks return to vermicompost beds to rapidly multiply earthworms."}
                  </p>
                </div>

                {/* Node 6: IoT Nervous System */}
                <div className="bg-[#EBF7EB] dark:bg-[#002210] p-6 rounded-2xl space-y-2.5 hover:bg-[#DFEBDF] dark:hover:bg-[#163824] transition-colors border border-[#C2C8C0]/30 dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#376B00] text-white flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#424843] dark:text-[#E8F4E8]/60 font-semibold uppercase">Node 06 // Telemetry</span>
                    <ArrowRight className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] -rotate-90" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "IoT टेलीमेट्री एवं एक्चुएटर्स" : "IoT Telemetry & Actuators"}
                  </h4>
                  <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "सेंसर सभी इकाइयों में मिस्टिंग, फर्टिगेशन और वेंटिलेशन को स्वचालित रूप से नियंत्रित करते हैं।"
                      : "ESP32 sensors dynamically control misting, fertigation, and ventilation across units."}
                  </p>
                </div>

              </div>

              {/* Bottom Result Strip */}
              <div className="mt-8 pt-5 border-t border-[#C2C8C0]/30 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#376B00] dark:text-[#A6F85F]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi
                      ? "परिणाम: 100% संसाधन उपयोग • शून्य रासायनिक अवशेष • न्यूनतम परिचालन लागत"
                      : "Result: 100% Resource Utilization • Zero Chemical Residuals • Reduced Overhead"}
                  </span>
                </div>
                <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase tracking-wider">
                  Thermodynamic Efficiency: 91.4%
                </span>
              </div>
            </div>

          </div>
        </section>


        {/* =========================================================================
            4. FEATURED PILLAR 01: OYSTER MUSHROOM TURNKEY FARM SETUP
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-white dark:bg-[#0D230E] text-[#141E17] dark:text-[#E8F4E8] border-b border-[#C2C8C0]/40 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Text & Specs Column */}
              <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase px-3 py-1 rounded bg-[#A6F85F] text-[#002210] font-semibold tracking-wider">
                    {isHindi ? "पिलर 01 // उच्च-उपज माइकोलॉजी" : "Pillar 01 // High-Yield Mycology"}
                  </span>
                  <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase tracking-wider">
                    Commercial Production
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight leading-tight">
                  {isHindi ? "औद्योगिक ऑयस्टर मशरूम एवं फ्रूटिंग चैंबर।" : "Industrial Gourmet Mycology & Controlled Fruiting."}
                </h2>

                <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  {isHindi
                    ? "कृषि तूड़ी को उच्च-मार्जिन वाले मासिक आय स्रोत में बदलें। हम शुष्क जलवायु के अनुकूल जलवायु-नियंत्रित मशरूम ग्रो रूम्स तैयार करते हैं।"
                    : "Turn crop straw into a steady high-margin monthly harvest with climate-regulated fruiting chambers engineered for harsh desert environments."}
                </p>

                {/* Technical Spec List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-4 rounded-xl bg-[#EBF7EB] dark:bg-[#163824]/60 border border-[#C2C8C0]/30 dark:border-white/10 space-y-1">
                    <span className="text-xs uppercase font-bold text-[#376B00] dark:text-[#A6F85F]">
                      Climate Control
                    </span>
                    <p className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">22°C – 26°C Stable</p>
                    <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/70 font-light">
                      PUF insulated panels maintain strict fruiting equilibrium in 46°C heat.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#EBF7EB] dark:bg-[#163824]/60 border border-[#C2C8C0]/30 dark:border-white/10 space-y-1">
                    <span className="text-xs uppercase font-bold text-[#376B00] dark:text-[#A6F85F]">
                      Aerosol Misting
                    </span>
                    <p className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">90–95% RH</p>
                    <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/70 font-light">
                      Ultrasonic atomizers produce dry fog with zero bag water soaking.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#EBF7EB] dark:bg-[#163824]/60 border border-[#C2C8C0]/30 dark:border-white/10 space-y-1">
                    <span className="text-xs uppercase font-bold text-[#376B00] dark:text-[#A6F85F]">
                      Spore Biosecurity
                    </span>
                    <p className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">HEPA Overpressure</p>
                    <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/70 font-light">
                      Positive pressure ventilation cycles prevent green mold outbreaks.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#EBF7EB] dark:bg-[#163824]/60 border border-[#C2C8C0]/30 dark:border-white/10 space-y-1">
                    <span className="text-xs uppercase font-bold text-[#376B00] dark:text-[#A6F85F]">
                      Turnkey Sizing
                    </span>
                    <p className="text-base font-bold text-[#002210] dark:text-[#FAFAF5]">500 to 5,000 sq.ft</p>
                    <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/70 font-light">
                      Monthly harvest from 350 kg to over 3.2 metric tons of fresh mushrooms.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setQuoteModalOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#002210] dark:bg-[#A6F85F] text-white dark:text-[#002210] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#163824] dark:hover:bg-[#8cdb46] transition-colors shadow-md cursor-pointer"
                  >
                    <span>{isHindi ? "मशरूम ब्लूप्रिंट एवं ROI मॉडल प्राप्त करें" : "Download Mushroom Blueprint & ROI Model"}</span>
                    <ArrowRight className="w-4 h-4 text-[#A6F85F] dark:text-[#002210]" />
                  </button>
                </div>
              </div>

              {/* Visual Chamber Column */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#002210] border border-[#C2C8C0]/40 dark:border-white/10">
                  <img
                    src="/media/Industrial Oyster Mushroom Farm.png"
                    alt="Indoor Climate-Controlled Oyster Mushroom Chamber"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#002210]/85 backdrop-blur-md text-white text-xs uppercase border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#A6F85F] animate-pulse" />
                    Sangaria Plant Unit
                  </div>

                  <div className="absolute bottom-4 right-4 left-4 p-4 rounded-2xl bg-white/95 dark:bg-[#002210]/95 backdrop-blur-md flex items-center justify-between border border-[#C2C8C0]/40 dark:border-white/10 shadow-lg">
                    <div className="space-y-0.5">
                      <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase font-bold">
                        Substrate Efficiency
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-[#002210] dark:text-[#FAFAF5]">
                        100 kg Wheat Straw = 80–100 kg Fresh Harvest
                      </p>
                    </div>
                    <Award className="w-6 h-6 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            5. FEATURED PILLARS 02 & 03: LIVESTOCK NUTRITION (AZOLLA & SUPER NAPIER)
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-[#EBF7EB] dark:bg-[#071508] text-[#141E17] dark:text-[#E8F4E8] border-b border-[#C2C8C0]/40 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-14 text-left">
            
            <div className="max-w-3xl space-y-3">
              <span className="text-xs uppercase px-3 py-1 rounded bg-[#376B00] text-white font-semibold tracking-wider">
                {isHindi ? "पिलर्स 02 & 03 // निरंतर चारा सुरक्षा" : "Pillars 02 & 03 // Perpetual Fodder Security"}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "पशु आहार लागत में भारी कटौती।" : "Radically Cut Livestock Feeding Overhead."}
              </h2>
              <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                {isHindi
                  ? "30–40% दाने के स्थान पर खेत में ही उगाए जाने वाले 100% जैविक, उच्च-प्रोटीन हरे चारे की स्थापना।"
                  : "Replace 30–40% of commercial dry grain concentrates with zero-chemical, high-protein living feed grown on your farm."}
              </p>
            </div>

            {/* Two Split Architectural Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Pillar 02: Azolla */}
              <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold">
                      Aquatic Biotechnology
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#DFEBDF] dark:bg-[#002210] text-[#002210] dark:text-[#A6F85F] text-xs font-bold">
                      25-30% CRUDE PROTEIN
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "प्राकृतिक प्रोटीन संवर्धन: अजोला जलीय कल्चर।" : "Grow Better Feed, Naturally: Azolla Aquatic Culture."}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "अजोला एक तेजी से बढ़ने वाला जलीय पौधा है जो नाइट्रोजन सोखता है और हर 48 घंटे में बायोमास दोगुना करता है।"
                      : "Azolla fixes atmospheric nitrogen rapidly in modular HDPE beds, doubling fresh biomass every 48 hours for daily feeding."}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckSquare className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-[#002210] dark:text-[#FAFAF5]">HDPE Pond Architecture: </span>
                        <span className="text-[#424843] dark:text-[#E8F4E8]/80 font-light">Heavy-duty 500 GSM UV ponds with shade netting.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckSquare className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-[#002210] dark:text-[#FAFAF5]">Rapid Multiplication: </span>
                        <span className="text-[#424843] dark:text-[#E8F4E8]/80 font-light">Starter culture doubles biomass every 48 hours, 1.5–2 kg daily per bed.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckSquare className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-[#002210] dark:text-[#FAFAF5]">Dairy Performance: </span>
                        <span className="text-[#424843] dark:text-[#E8F4E8]/80 font-light">Increases milk yield 10–15% and fat solids while lowering feed costs 30%.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] flex items-center justify-between border border-[#C2C8C0]/30 dark:border-white/10">
                  <span className="text-xs sm:text-sm font-semibold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "टर्नकी पॉन्ड किट उपलब्ध" : "Turnkey Pond Setup Kits Available"}
                  </span>
                  <span className="text-xs text-[#376B00] dark:text-[#A6F85F] font-bold">READY TO SHIP</span>
                </div>
              </div>

              {/* Pillar 03: Super Napier */}
              <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold">
                      Perennial Field Forage
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#DFEBDF] dark:bg-[#002210] text-[#002210] dark:text-[#A6F85F] text-xs font-bold">
                      200+ TONNES/ACRE/YEAR
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "सदाबहार हरा चारा: हाइब्रिड सुपर नेपियर एस्टेट।" : "Perpetual Green Forage: Hybrid Super Napier Estate."}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "शुष्क क्षेत्रों में चारे के संकट को खत्म करने के लिए विकसित। 5 साल तक हर 45 दिन में निरंतर कटाई।"
                      : "Eliminates green fodder deficits with succulent, fast-regenerating stands lasting 5 straight years."}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckSquare className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-[#002210] dark:text-[#FAFAF5]">Nutritional Density: </span>
                        <span className="text-[#424843] dark:text-[#E8F4E8]/80 font-light">16–18% crude protein and soft leaves free from abrasive trichome hairs.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckSquare className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-[#002210] dark:text-[#FAFAF5]">Multi-Cut Cycle: </span>
                        <span className="text-[#424843] dark:text-[#E8F4E8]/80 font-light">First cut in 75 days; consecutive cuts every 45–50 days for 5 straight years.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckSquare className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-[#002210] dark:text-[#FAFAF5]">Silage Integration: </span>
                        <span className="text-[#424843] dark:text-[#E8F4E8]/80 font-light">Complete silage preservation protocol for vacuum-sealed storage.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] flex items-center justify-between border border-[#C2C8C0]/30 dark:border-white/10">
                  <span className="text-xs sm:text-sm font-semibold text-[#002210] dark:text-[#FAFAF5]">
                    {isHindi ? "जड़-युक्त तनों की आपूर्ति" : "Purified Rooted Slips Supplied"}
                  </span>
                  <span className="text-xs text-[#376B00] dark:text-[#A6F85F] font-bold">100% PURIFIED SLIPS</span>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            6. FEATURED PILLAR 04: BIOLOGICAL SOIL REJUVENATION & VERMICOMPOSTING
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-[#002210] text-white transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#163824]/70 border border-white/15 relative overflow-hidden shadow-2xl text-left">
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase px-3 py-1 rounded-full bg-[#A6F85F] text-[#002210] font-semibold tracking-wider">
                      {isHindi ? "पिलर 04 // सजीव मृदा रसायन" : "Pillar 04 // Living Soil Chemistry"}
                    </span>
                    <span className="text-xs text-[#E8F4E8]/60 uppercase tracking-wider">
                      Zero Chemical Dependence
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                    {isHindi ? "कचरा कचरा नहीं है। यह आपकी अगली फसल की नींव है।" : "Waste Is Not Waste. It Is Your Next Harvest’s Foundation."}
                  </h2>

                  <p className="text-sm sm:text-base text-[#E8F4E8]/80 leading-relaxed font-light">
                    {isHindi
                      ? "शुष्क मिट्टी को सक्रिय जैविक कार्बन, ह्यूमिक मैट्रिक्स और माइक्रोबियल जीवन चाहिए। हमारी प्रणालियाँ गोबर व अवशेषों को सजीव खाद में बदलती हैं।"
                      : "Arid soils require active microbial carbon and humic matrix. Our vermicompost systems convert crop waste and animal manure into living soil nutrition."}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                    <div className="p-3.5 rounded-xl bg-[#002210] border border-white/10 space-y-1">
                      <span className="text-[11px] uppercase text-[#A6F85F] font-semibold">Organism Core</span>
                      <p className="text-sm sm:text-base font-bold text-white">Eisenia Fetida</p>
                      <p className="text-xs text-[#E8F4E8]/70 font-light">Colonies adapted to desert heat.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#002210] border border-white/10 space-y-1">
                      <span className="text-[11px] uppercase text-[#A6F85F] font-semibold">Soil Carbon</span>
                      <p className="text-sm sm:text-base font-bold text-white">&gt; 18% Humic Acid</p>
                      <p className="text-xs text-[#E8F4E8]/70 font-light">Restores moisture retention 2.8x.</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#002210] border border-white/10 space-y-1">
                      <span className="text-[11px] uppercase text-[#A6F85F] font-semibold">Liquid Extract</span>
                      <p className="text-sm sm:text-base font-bold text-white">Pure Vermi-Wash</p>
                      <p className="text-xs text-[#E8F4E8]/70 font-light">Zero-burn foliar nutrient spray.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#002210]/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3.5">
                  <span className="text-xs uppercase tracking-wider text-[#A6F85F] font-bold block">
                    {isHindi ? "मानक 10-बेड मॉड्यूल ब्लूप्रिंट" : "Standard 10-Bed Module Blueprint"}
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#E8F4E8] font-light">
                    <li className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#A6F85F] shrink-0" />
                      <span>30 ft × 4 ft UV-treated raised bed design</span>
                    </li>
                    <li className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#A6F85F] shrink-0" />
                      <span>Gravity-fed vermi-wash drainage & collection sump</span>
                    </li>
                    <li className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#A6F85F] shrink-0" />
                      <span>75% agro-green shade netting against direct sunlight</span>
                    </li>
                    <li className="flex items-center gap-2.5 pb-2 border-b border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#A6F85F] shrink-0" />
                      <span>Inoculation of 250 kg earthworms per standard unit</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#A6F85F] shrink-0" />
                      <span>Yields 12–15 tonnes of premium castings every 60 days</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            7. FEATURED PILLAR 05: SMART AGRICULTURE & ESP32 IoT TELEMETRY
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-white dark:bg-[#0D230E] text-[#141E17] dark:text-[#E8F4E8] border-b border-[#C2C8C0]/40 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Visual Tower Column */}
              <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#002210] border border-[#C2C8C0]/40 dark:border-white/10">
                  <img
                    src="/media/smartagri4.png"
                    alt="Solar-Powered Agricultural IoT Weather Station in Field"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002210]/95 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#002210]/95 text-white backdrop-blur-md border border-white/10 space-y-2.5 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#A6F85F] animate-ping" />
                        <span className="text-xs text-[#A6F85F] uppercase tracking-wider font-bold">
                          Sub-Surface Telemetry Active
                        </span>
                      </div>
                      <span className="text-xs text-white/60">LoRa Node #07</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center pt-1.5 border-t border-white/10">
                      <div className="p-1.5 rounded bg-white/5">
                        <span className="text-[10px] text-white/60 block uppercase">Zone 15cm</span>
                        <p className="text-sm font-bold text-white">28.4% <span className="text-[10px] font-normal">VWC</span></p>
                      </div>
                      <div className="p-1.5 rounded bg-white/5">
                        <span className="text-[10px] text-white/60 block uppercase">Zone 30cm</span>
                        <p className="text-sm font-bold text-white">34.1% <span className="text-[10px] font-normal">VWC</span></p>
                      </div>
                      <div className="p-1.5 rounded bg-white/5">
                        <span className="text-[10px] text-white/60 block uppercase">Zone 60cm</span>
                        <p className="text-sm font-bold text-white">39.2% <span className="text-[10px] font-normal">VWC</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-6 space-y-5 sm:space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase px-3 py-1 rounded bg-[#376B00] text-white font-semibold tracking-wider">
                    {isHindi ? "पिलर 05 // कम्प्यूटेशनल एग्रोनॉमी" : "Pillar 05 // Computational Agronomy"}
                  </span>
                  <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase tracking-wider">
                    Edge Hardware
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight leading-tight">
                  {isHindi ? "अपनी मिट्टी की जरूरत को रियल-टाइम में समझें।" : "Know What Your Soil Feels in Real Time."}
                </h2>

                <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  {isHindi
                    ? "ESP32-संचालित टावर जड़ क्षेत्र में पानी के तनाव को मापते हैं और केवल जरूरत पड़ने पर ही सोलर पंप शुरू करते हैं।"
                    : "ESP32-powered telemetry towers read root-zone water tension and trigger solar irrigation only when the crop transpires."}
                </p>

                <div className="space-y-3.5 pt-1">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#EBF7EB] dark:bg-[#163824]/50 border border-[#C2C8C0]/30 dark:border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#002210] text-[#A6F85F] flex items-center justify-center shrink-0">
                      <Radio className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm sm:text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                        Multi-Depth SDI-12 Moisture & Salinity Probes
                      </h4>
                      <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                        Continuous measurements at 15cm, 30cm, and 60cm depths detect water infiltration and fertilizer leeching.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#EBF7EB] dark:bg-[#163824]/50 border border-[#C2C8C0]/30 dark:border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#002210] text-[#A6F85F] flex items-center justify-center shrink-0">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm sm:text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                        Off-Grid Solar LoRaWAN Mast Infrastructure
                      </h4>
                      <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                        Zero reliance on grid power or local WiFi. Long-range LoRa radio transmits up to 5 km line-of-sight.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#EBF7EB] dark:bg-[#163824]/50 border border-[#C2C8C0]/30 dark:border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#002210] text-[#A6F85F] flex items-center justify-center shrink-0">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm sm:text-base font-bold text-[#002210] dark:text-[#FAFAF5]">
                        Autonomous Solenoid Actuation
                      </h4>
                      <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                        Relays open drip valves and high-pressure mist lines dynamically based on vapor pressure deficit (VPD) thresholds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            8. INTERACTIVE SOLUTION FINDER (Decision Matrix)
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-[#EBF7EB] dark:bg-[#071508] text-[#141E17] dark:text-[#E8F4E8] border-b border-[#C2C8C0]/40 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 sm:space-y-10 text-left">
            
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <span className="text-xs uppercase px-3 py-1 rounded-full bg-[#DFEBDF] dark:bg-[#163824] text-[#002210] dark:text-[#A6F85F] font-semibold tracking-wider border border-[#C2C8C0]/40 dark:border-white/10">
                {isHindi ? "निर्णय मैट्रिक्स" : "DECISION MATRIX"}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "अपने फार्म के लिए सही सेटअप चुनें।" : "Find Your Farm’s Optimal Setup."}
              </h2>
              <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                {isHindi
                  ? "अनुकूलित समाधान ब्लूप्रिंट देखने के लिए अपने फार्म का प्राथमिक कार्य चुनें।"
                  : "Select your primary agricultural operation below to inspect the tailored solution blueprint."}
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setActiveTab("dairy")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "dairy"
                    ? "bg-[#002210] dark:bg-[#A6F85F] text-[#A6F85F] dark:text-[#002210] shadow-md scale-105 border border-[#A6F85F]/30 dark:border-transparent"
                    : "bg-white dark:bg-[#163824]/60 text-[#424843] dark:text-[#E8F4E8]/80 hover:bg-[#DFEBDF] dark:hover:bg-[#163824] border border-[#C2C8C0]/40 dark:border-white/10"
                }`}
              >
                {isHindi ? "डेयरी एवं पशुपालन फार्म" : "Dairy & Livestock Farms"}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("commercial")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "commercial"
                    ? "bg-[#002210] dark:bg-[#A6F85F] text-[#A6F85F] dark:text-[#002210] shadow-md scale-105 border border-[#A6F85F]/30 dark:border-transparent"
                    : "bg-white dark:bg-[#163824]/60 text-[#424843] dark:text-[#E8F4E8]/80 hover:bg-[#DFEBDF] dark:hover:bg-[#163824] border border-[#C2C8C0]/40 dark:border-white/10"
                }`}
              >
                {isHindi ? "कमर्शियल मशरूम निवेशक" : "Commercial Mushroom Investors"}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("organic")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "organic"
                    ? "bg-[#002210] dark:bg-[#A6F85F] text-[#A6F85F] dark:text-[#002210] shadow-md scale-105 border border-[#A6F85F]/30 dark:border-transparent"
                    : "bg-white dark:bg-[#163824]/60 text-[#424843] dark:text-[#E8F4E8]/80 hover:bg-[#DFEBDF] dark:hover:bg-[#163824] border border-[#C2C8C0]/40 dark:border-white/10"
                }`}
              >
                {isHindi ? "जैविक उत्पादक एवं बागवानी" : "Organic Growers & Orchards"}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("arid")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === "arid"
                    ? "bg-[#002210] dark:bg-[#A6F85F] text-[#A6F85F] dark:text-[#002210] shadow-md scale-105 border border-[#A6F85F]/30 dark:border-transparent"
                    : "bg-white dark:bg-[#163824]/60 text-[#424843] dark:text-[#E8F4E8]/80 hover:bg-[#DFEBDF] dark:hover:bg-[#163824] border border-[#C2C8C0]/40 dark:border-white/10"
                }`}
              >
                {isHindi ? "शुष्क एवं जल-सीमित क्षेत्र" : "Arid & Water-Scarce Lands"}
              </button>
            </div>

            {/* Tab Content Display */}
            <div className="bg-white dark:bg-[#163824]/60 p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#C2C8C0]/40 dark:border-white/10 shadow-sm">
              <AnimatePresence mode="wait">
                {activeTab === "dairy" && (
                  <motion.div
                    key="dairy"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
                  >
                    <div className="lg:col-span-7 space-y-3.5">
                      <span className="text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold block">
                        Recommended Architecture // Dairy 50–500 Cattle
                      </span>
                      <h3 className="text-xl sm:text-3xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                        Azolla Pond Battery + Super Napier Estate
                      </h3>
                      <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                        Designed to lower commercial dry concentrate expenses with continuous high-protein green fodder and manure recycling.
                      </p>
                      <div className="grid grid-cols-2 gap-3.5 pt-1">
                        <div className="p-3.5 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] border border-[#C2C8C0]/30 dark:border-white/10">
                          <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase">Feed Bill Reduction</span>
                          <p className="text-lg sm:text-xl font-bold text-[#376B00] dark:text-[#A6F85F]">30% to 38%</p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] border border-[#C2C8C0]/30 dark:border-white/10">
                          <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase">Typical Payback</span>
                          <p className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">5 to 7 Months</p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setQuoteModalOpen(true)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#002210] dark:bg-[#A6F85F] text-white dark:text-[#002210] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#163824] dark:hover:bg-[#8cdb46] transition-colors shadow-md cursor-pointer"
                        >
                          <span>{isHindi ? "डेयरी पोषण ब्लूप्रिंट मांगें" : "Request Dairy Nutrition Blueprint"}</span>
                          <ArrowRight className="w-4 h-4 text-[#A6F85F] dark:text-[#002210]" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#EBF7EB] dark:bg-[#002210] p-6 rounded-2xl border border-[#C2C8C0]/30 dark:border-white/10 space-y-3">
                      <span className="text-xs uppercase font-bold text-[#002210] dark:text-[#A6F85F] block">
                        Included Modules:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#141E17] dark:text-[#E8F4E8] font-light">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>6 to 20 Custom HDPE Azolla ponds</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Super Napier rooted slips (10,000 / acre)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Sub-surface drip line network & filter station</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Silage compaction drum kit & inoculant culture</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === "commercial" && (
                  <motion.div
                    key="commercial"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
                  >
                    <div className="lg:col-span-7 space-y-3.5">
                      <span className="text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold block">
                        Recommended Architecture // Commercial Mycology
                      </span>
                      <h3 className="text-xl sm:text-3xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                        Climate-Regulated Oyster Fruiting Facility
                      </h3>
                      <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                        Industrialized high-density cultivation in insulated PUF rooms with automated humidity and HEPA fresh air.
                      </p>
                      <div className="grid grid-cols-2 gap-3.5 pt-1">
                        <div className="p-3.5 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] border border-[#C2C8C0]/30 dark:border-white/10">
                          <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase">Monthly Fresh Harvest</span>
                          <p className="text-lg sm:text-xl font-bold text-[#376B00] dark:text-[#A6F85F]">800 – 3,200 kg</p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] border border-[#C2C8C0]/30 dark:border-white/10">
                          <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase">Est. Rate of Return</span>
                          <p className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">42.8% IRR</p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setQuoteModalOpen(true)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#002210] dark:bg-[#A6F85F] text-white dark:text-[#002210] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#163824] dark:hover:bg-[#8cdb46] transition-colors shadow-md cursor-pointer"
                        >
                          <span>{isHindi ? "मशरूम फैसिलिटी प्रस्ताव मांगें" : "Request Facility Proposal"}</span>
                          <ArrowRight className="w-4 h-4 text-[#A6F85F] dark:text-[#002210]" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#EBF7EB] dark:bg-[#002210] p-6 rounded-2xl border border-[#C2C8C0]/30 dark:border-white/10 space-y-3">
                      <span className="text-xs uppercase font-bold text-[#002210] dark:text-[#A6F85F] block">
                        Included Modules:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#141E17] dark:text-[#E8F4E8] font-light">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>PUF insulated grow structure (60mm walls)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Industrial ultrasonic cold-fogging system</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>HEPA positive-pressure fresh air intake</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Certified high-vigor spawn strain delivery</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === "organic" && (
                  <motion.div
                    key="organic"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
                  >
                    <div className="lg:col-span-7 space-y-3.5">
                      <span className="text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold block">
                        Recommended Architecture // Zero-Chemical Estates
                      </span>
                      <h3 className="text-xl sm:text-3xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                        Vermi-Bio-Reactor & Humus Foundation
                      </h3>
                      <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                        Transform high-salinity or degraded farm soils into living, moisture-retaining loam with solid compost and vermi-wash.
                      </p>
                      <div className="grid grid-cols-2 gap-3.5 pt-1">
                        <div className="p-3.5 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] border border-[#C2C8C0]/30 dark:border-white/10">
                          <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase">Organic Carbon Boost</span>
                          <p className="text-lg sm:text-xl font-bold text-[#376B00] dark:text-[#A6F85F]">+1.2% in 18 Mos</p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] border border-[#C2C8C0]/30 dark:border-white/10">
                          <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase">Chemical NPK Phase-Out</span>
                          <p className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">100% Zero-Burn</p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setQuoteModalOpen(true)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#002210] dark:bg-[#A6F85F] text-white dark:text-[#002210] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#163824] dark:hover:bg-[#8cdb46] transition-colors shadow-md cursor-pointer"
                        >
                          <span>{isHindi ? "मृदा पुनरुद्धार योजना मांगें" : "Request Soil Restoration Plan"}</span>
                          <ArrowRight className="w-4 h-4 text-[#A6F85F] dark:text-[#002210]" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#EBF7EB] dark:bg-[#002210] p-6 rounded-2xl border border-[#C2C8C0]/30 dark:border-white/10 space-y-3">
                      <span className="text-xs uppercase font-bold text-[#002210] dark:text-[#A6F85F] block">
                        Included Modules:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#141E17] dark:text-[#E8F4E8] font-light">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>10–50 Bed shaded vermicomposting setup</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Colony-certified Eisenia fetida breeding stock</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Gravity vermi-wash filtration barrels</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Foliar bio-pesticide fermentation training</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === "arid" && (
                  <motion.div
                    key="arid"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
                  >
                    <div className="lg:col-span-7 space-y-3.5">
                      <span className="text-xs uppercase tracking-wider text-[#376B00] dark:text-[#A6F85F] font-bold block">
                        Recommended Architecture // Arid & Desert Zones
                      </span>
                      <h3 className="text-xl sm:text-3xl font-bold text-[#002210] dark:text-[#FAFAF5]">
                        Off-Grid Solar IoT Irrigation & VPD Network
                      </h3>
                      <p className="text-xs sm:text-sm text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                        Solar LoRa telemetry masts, soil moisture probes, and autonomous latching valves to optimize scarce water.
                      </p>
                      <div className="grid grid-cols-2 gap-3.5 pt-1">
                        <div className="p-3.5 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] border border-[#C2C8C0]/30 dark:border-white/10">
                          <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase">Water Conservation</span>
                          <p className="text-lg sm:text-xl font-bold text-[#376B00] dark:text-[#A6F85F]">38% to 45%</p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#EBF7EB] dark:bg-[#002210] border border-[#C2C8C0]/30 dark:border-white/10">
                          <span className="text-xs text-[#424843] dark:text-[#E8F4E8]/60 uppercase">Radio Coverage</span>
                          <p className="text-lg sm:text-xl font-bold text-[#002210] dark:text-[#FAFAF5]">5 km Line-of-Sight</p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setQuoteModalOpen(true)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#002210] dark:bg-[#A6F85F] text-white dark:text-[#002210] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#163824] dark:hover:bg-[#8cdb46] transition-colors shadow-md cursor-pointer"
                        >
                          <span>{isHindi ? "स्मार्ट सिंचाई सेटअप मांगें" : "Request Smart Irrigation Setup"}</span>
                          <ArrowRight className="w-4 h-4 text-[#A6F85F] dark:text-[#002210]" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#EBF7EB] dark:bg-[#002210] p-6 rounded-2xl border border-[#C2C8C0]/30 dark:border-white/10 space-y-3">
                      <span className="text-xs uppercase font-bold text-[#002210] dark:text-[#A6F85F] block">
                        Included Modules:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#141E17] dark:text-[#E8F4E8] font-light">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Solar-powered LoRa telemetry mast stations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>3-Depth SDI-12 soil moisture & salinity probes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Automated 2-inch solar latching valve actuators</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#376B00] dark:text-[#A6F85F] shrink-0" />
                          <span>Mobile cloud dashboard & SMS alerts</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </section>


        {/* =========================================================================
            9. TURNKEY IMPLEMENTATION ROADMAP: 7 STAGES
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-[#F6F9F4] dark:bg-[#0D230E] text-[#141E17] dark:text-[#E8F4E8] border-b border-[#C2C8C0]/40 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-14 text-left">
            
            <div className="max-w-3xl space-y-2.5">
              <span className="text-xs uppercase px-3 py-1 rounded bg-[#DFEBDF] dark:bg-[#163824] text-[#002210] dark:text-[#A6F85F] font-semibold tracking-wider border border-[#C2C8C0]/40 dark:border-white/10">
                {isHindi ? "सिस्टमैटिक परिनियोजन" : "Systematic Deployment"}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "मृदा परीक्षण से लेकर पहली कटाई तक।" : "From Soil Assessment to First Harvest."}
              </h2>
              <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                {isHindi
                  ? "JAS Agro हर प्रोजेक्ट को सात सुव्यवस्थित इंजीनियरिंग और जैविक चरणों में पूरा करता है।"
                  : "We guide every installation through seven structured biological and engineering milestones."}
              </p>
            </div>

            {/* 7 Stage Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Stage 01 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs space-y-2.5 border-l-4 border-l-[#002210] dark:border-l-[#A6F85F]">
                <span className="text-xs font-bold text-[#376B00] dark:text-[#A6F85F] uppercase block">
                  Stage 01 // Baseline
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "टोपोग्राफी एवं जल विश्लेषण" : "Topography & Water Analysis"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  On-site audit of soil conductivity (EC), pH, borewell flow, and local microclimate.
                </p>
              </div>

              {/* Stage 02 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs space-y-2.5 border-l-4 border-l-[#002210] dark:border-l-[#A6F85F]">
                <span className="text-xs font-bold text-[#376B00] dark:text-[#A6F85F] uppercase block">
                  Stage 02 // Engineering
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "जैविक सिस्टम आर्किटेक्चर" : "Biological System Architecture"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  Custom layout blueprints integrating pond units, PUF chambers, and fodder land allocation.
                </p>
              </div>

              {/* Stage 03 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs space-y-2.5 border-l-4 border-l-[#002210] dark:border-l-[#A6F85F]">
                <span className="text-xs font-bold text-[#376B00] dark:text-[#A6F85F] uppercase block">
                  Stage 03 // Civil Build
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "फैब्रिकेशन एवं असेंबली" : "Fabrication & Assembly"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  Precision grading, bed fabrication, shade canopy rigging, and PUF chamber erection.
                </p>
              </div>

              {/* Stage 04 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs space-y-2.5 border-l-4 border-l-[#002210] dark:border-l-[#A6F85F]">
                <span className="text-xs font-bold text-[#376B00] dark:text-[#A6F85F] uppercase block">
                  Stage 04 // Inoculation
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "सीड स्टॉक एवं स्पॉन आपूर्ति" : "Seed Stock & Spawn Delivery"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  Certified Eisenia fetida colonies, laboratory spawn, and purified Super Napier slips.
                </p>
              </div>

              {/* Stage 05 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs space-y-2.5 border-l-4 border-l-[#376B00] dark:border-l-[#A6F85F]">
                <span className="text-xs font-bold text-[#376B00] dark:text-[#A6F85F] uppercase block">
                  Stage 05 // Automation
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "IoT टेलीमेट्री कैलिब्रेशन" : "IoT Telemetry Calibration"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  Solar LoRa masts, multi-depth soil probes, solenoid relays, and cloud dashboard linkage.
                </p>
              </div>

              {/* Stage 06 */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs space-y-2.5 border-l-4 border-l-[#376B00] dark:border-l-[#A6F85F]">
                <span className="text-xs font-bold text-[#376B00] dark:text-[#A6F85F] uppercase block">
                  Stage 06 // Capability
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "स्टाफ का व्यावहारिक प्रशिक्षण" : "Staff Hands-on Training"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  Practical on-farm training covering harvest SOPs, hygiene rules, and fodder feeding protocols.
                </p>
              </div>

              {/* Stage 07 (Spanning 2 cols on desktop) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 shadow-xs space-y-2.5 border-l-4 border-l-[#376B00] dark:border-l-[#A6F85F] lg:col-span-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#376B00] dark:text-[#A6F85F] uppercase">
                    Stage 07 // Continuous Advisory
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#DFEBDF] dark:bg-[#002210] text-xs font-bold text-[#002210] dark:text-[#A6F85F]">
                    LONG TERM
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  {isHindi ? "निरंतर कृषि परामर्श एवं उपज ऑडिट" : "Ongoing Agronomic Stewardship & Yield Audits"}
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  Biomass yield audits, sensor recalibration, and direct agronomist desk support for sustained performance.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            10. WHY JAS AGRO — CONCRETE PROOF POINTS
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-[#EBF7EB] dark:bg-[#071508] text-[#141E17] dark:text-[#E8F4E8] border-b border-[#C2C8C0]/40 dark:border-white/10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10 sm:space-y-14 text-left">
            
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <span className="text-xs uppercase px-3 py-1 rounded-full bg-[#DFEBDF] dark:bg-[#163824] text-[#002210] dark:text-[#A6F85F] font-semibold tracking-wider border border-[#C2C8C0]/40 dark:border-white/10">
                {isHindi ? "ठोस प्रमाण" : "Grounded Proof"}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#002210] dark:text-[#FAFAF5] tracking-tight">
                {isHindi ? "कठिन परिस्थितियों के लिए निर्मित।" : "Engineered for Arid Hardship."}
              </h2>
              <p className="text-sm sm:text-base text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                {isHindi
                  ? "अग्रणी कृषि फार्म कठिन परिस्थितियों में भी JAS Agro सिस्टम पर भरोसा क्यों करते हैं।"
                  : "Why leading agricultural estates trust JAS Agro systems in challenging field conditions."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              
              <div className="p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-[#002210] text-[#A6F85F] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  Thar Desert Proven
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  Tested in soils with salinity up to 4.2 dS/m and ambient summer temperatures reaching 48°C.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-[#002210] text-[#A6F85F] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  IP67 Enclosures
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  UV-resistant, dust-sealed field hardware engineered to operate reliably through desert dust storms.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-[#002210] text-[#A6F85F] flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  Zero-Chemical Purity
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  100% compliant with NPOP organic standards. Cultivate residue-free foods with high market value.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#163824]/60 border border-[#C2C8C0]/40 dark:border-white/10 space-y-2.5 shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-[#002210] text-[#A6F85F] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#002210] dark:text-[#FAFAF5]">
                  Field Agronomists
                </h4>
                <p className="text-xs text-[#424843] dark:text-[#E8F4E8]/80 leading-relaxed font-light">
                  Experienced agricultural technicians visit your acreage—never distant call center agents.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================================
            11. IMMERSIVE FINAL CTA BLOCK
           ========================================================================= */}
        <section className="w-full py-14 sm:py-18 lg:py-24 bg-[#002210] text-white relative overflow-hidden transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="p-6 sm:p-10 lg:p-14 rounded-3xl bg-[#163824]/80 border border-white/15 backdrop-blur-md shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                
                <div className="lg:col-span-8 space-y-5">
                  <span className="text-xs uppercase px-3 py-1 rounded-full bg-[#A6F85F] text-[#002210] font-semibold tracking-wider">
                    {isHindi ? "टर्नकी क्रियान्वयन के लिए तैयार" : "Ready for Turnkey Execution"}
                  </span>

                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                    {isHindi ? "हमें बताएं कि आप क्या बनाना चाहते हैं।" : "Tell Us What You Want to Build."}
                  </h2>

                  <p className="text-sm sm:text-base text-[#E8F4E8]/80 max-w-2xl leading-relaxed font-light">
                    {isHindi
                      ? "चाहे आपको कमर्शियल मशरूम सेटअप चाहिए, डेयरी के लिए हरा चारा, अथवा सोलर IoT ऑटोमेशन — हम सम्पूर्ण सिस्टम तैयार करते हैं।"
                      : "Whether you need an industrial oyster mushroom facility, sustainable green fodder for your dairy, or off-grid solar IoT automation."}
                  </p>

                  <div className="flex flex-wrap items-center gap-3.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setQuoteModalOpen(true)}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#A6F85F] text-[#002210] font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:bg-[#8cdb46] transition-all cursor-pointer active:scale-95"
                    >
                      <span>{isHindi ? "टर्नकी फार्म प्रस्ताव मांगें" : "Request Turnkey Farm Proposal"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href="tel:+917372926623"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#002210] text-white font-medium text-xs sm:text-sm hover:bg-[#002210]/80 border border-white/20 transition-colors"
                    >
                      <PhoneCall className="w-4 h-4 text-[#A6F85F]" />
                      <span>Direct Desk: +91 73729 26623</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#002210]/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 space-y-3.5">
                  <span className="text-xs uppercase tracking-wider text-[#A6F85F] font-bold block">
                    {isHindi ? "फास्ट-ट्रैक परामर्श" : "Fast-Track Consultation"}
                  </span>
                  <p className="text-xs text-[#E8F4E8]/80 leading-relaxed font-light">
                    Share your land coordinates, soil type, and target goals for a rapid feasibility assessment within 48 hours.
                  </p>
                  <div className="space-y-2 text-xs text-white/90 pt-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#A6F85F] shrink-0" />
                      <span>Response Window: &lt; 24 Working Hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#A6F85F] shrink-0" />
                      <span>Head Office: Jaipur, Rajasthan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Factory className="w-4 h-4 text-[#A6F85F] shrink-0" />
                      <span>Processing Plant: Sangaria, RJ</span>
                    </div>
                  </div>
                </div>

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
