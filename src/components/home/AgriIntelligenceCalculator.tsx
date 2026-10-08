"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Sprout,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Clock,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Waves,
  Wheat,
  Recycle,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { QuoteModal } from "@/components/ui/QuoteModal";

type CropType = "mushroom" | "azolla" | "napier" | "vermicompost" | "iot";
type TimeframeType = "month" | "harvest" | "annual" | "fiveYear";
type GoalType = "pilot" | "feedSave" | "commercial" | "turnkey";
type AutomationLevel = "basic" | "smart" | "full";

export const AgriIntelligenceCalculator: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";
  const shouldReduceMotion = useReducedMotion();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Core Calculator State
  const [selectedCrop, setSelectedCrop] = useState<CropType>("mushroom");
  const [areaSize, setAreaSize] = useState<number>(500); // in sq ft
  const [goal, setGoal] = useState<GoalType>("commercial");
  const [automationLevel, setAutomationLevel] = useState<AutomationLevel>("smart");
  const [timeframe, setTimeframe] = useState<TimeframeType>("month");
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const CROP_CONFIG = {
    mushroom: {
      nameEn: "Oyster Mushroom",
      nameHi: "ऑयस्टर मशरूम",
      icon: Sprout,
      unit: "sq ft",
      minArea: 200,
      maxArea: 5000,
      defaultArea: 500,
      step: 100,
      baseSetupPerSqFt: 140, // ₹
      baseYieldPerSqFtMonth: 0.16, // kg/sqft/mo
      pricePerKg: 190, // ₹
      timeline: "3-4 Weeks",
      harvestsPerYear: 7,
      descEn: "Climate-controlled gourmet indoor grow rooms with high bio-conversion efficiency.",
      descHi: "क्लाइमेट-कंट्रोल्ड इंडोर ग्रो रूम्स — साल में 6-8 बार फ्रेश ऑयस्टर हार्वेस्ट।",
      suggestedProducts: [
        {
          name: "Fresh Oyster Spawn Culture",
          desc: "High-virulence Pleurotus Florida / Sajor-Caju spawn packets.",
          image: "https://www.jasagro.com/assets/img/blog/Masroom.png",
          href: "/products/oyster-mushroom",
        },
        {
          name: "IoT Climate Node (ESP32)",
          desc: "Automated ultrasonic fogger and exhaust ventilation trigger.",
          image: "https://www.jasagro.com/assets/img/blog/Imp-Agri.jpg",
          href: "/technology",
        },
      ],
    },
    azolla: {
      nameEn: "Azolla Aquatic Fodder",
      nameHi: "अजोला सुपर-चारा",
      icon: Waves,
      unit: "sq ft pond",
      minArea: 100,
      maxArea: 3000,
      defaultArea: 300,
      step: 50,
      baseSetupPerSqFt: 45,
      baseYieldPerSqFtMonth: 0.40,
      pricePerKg: 18, // Equivalent feed value
      timeline: "1-2 Weeks",
      harvestsPerYear: 52, // Weekly harvests
      descEn: "25-30% crude protein aquatic biomass reducing concentrated dairy feed costs up to 30%.",
      descHi: "25-30% क्रूड प्रोटीन युक्त जलीय चारा जिससे डेयरी पशुओं की फीड लागत 30% घटती है।",
      suggestedProducts: [
        {
          name: "Azolla Microphylla Starter Strain",
          desc: "Fast-multiplying acclimatized green bio-culture strain.",
          image: "https://www.jasagro.com/assets/img/blog/Azolla.png",
          href: "/products/azolla",
        },
        {
          name: "Modular Silpaulin Pond Kits",
          desc: "UV-stabilized durable layered pond liners with drainage fittings.",
          image: "https://www.jasagro.com/assets/img/blog/Imp-Agri.jpg",
          href: "/solutions",
        },
      ],
    },
    napier: {
      nameEn: "Hybrid Super Napier",
      nameHi: "हाइब्रिड सुपर नेपियर",
      icon: Wheat,
      unit: "sq ft",
      minArea: 1000,
      maxArea: 40000,
      defaultArea: 4000,
      step: 1000,
      baseSetupPerSqFt: 12,
      baseYieldPerSqFtMonth: 0.28,
      pricePerKg: 3.5, // Green forage value
      timeline: "4-6 Weeks",
      harvestsPerYear: 7, // 6-8 cuts/year for 5 years
      descEn: "Perennial high-biomass forage grass yielding 150-200 tons/acre/year for 4-5 continuous years.",
      descHi: "साल भर हरा चारा देने वाली बहुवर्षीय फसल — 150-200 टन/एकड़ वार्षिक पैदावार।",
      suggestedProducts: [
        {
          name: "Certified Super Napier Slips",
          desc: "Rooted 2-node stems with 98%+ field germination vigor.",
          image: "https://www.jasagro.com/assets/img/blog/Napior.png",
          href: "/products/napier-grass",
        },
        {
          name: "Drip Irrigation Regulators",
          desc: "Precision root-zone drip manifold kits for zero water wastage.",
          image: "https://www.jasagro.com/assets/img/blog/Imp-Agri.jpg",
          href: "/solutions",
        },
      ],
    },
    vermicompost: {
      nameEn: "Bio-Active Vermicompost",
      nameHi: "ऑर्गेनिक वर्मीकंपोस्ट",
      icon: Recycle,
      unit: "sq ft bed",
      minArea: 300,
      maxArea: 10000,
      defaultArea: 800,
      step: 100,
      baseSetupPerSqFt: 65,
      baseYieldPerSqFtMonth: 0.52,
      pricePerKg: 14,
      timeline: "2-3 Weeks",
      harvestsPerYear: 8,
      descEn: "Premium earthworm bio-decomposition bed producing nutrient-rich organic humus.",
      descHi: "100% शुद्ध केंचुआ खाद जो मिट्टी के ऑर्गेनिक कार्बन और नमी को सुधारती है।",
      suggestedProducts: [
        {
          name: "Eisenia Fetida Earthworm Stock",
          desc: "High-activity composting red wriggler breeder colonies.",
          image: "https://www.jasagro.com/assets/img/blog/Vermicompost.png",
          href: "/products/vermicompost",
        },
        {
          name: "HDPE Breathable Shade Beds",
          desc: "Aero-ventilated compost containment beds with moisture covers.",
          image: "https://www.jasagro.com/assets/img/blog/Imp-Agri.jpg",
          href: "/solutions",
        },
      ],
    },
    iot: {
      nameEn: "IoT Farm Automation",
      nameHi: "IoT स्मार्ट ऑटोमेशन",
      icon: Cpu,
      unit: "sq ft area",
      minArea: 500,
      maxArea: 20000,
      defaultArea: 1500,
      step: 500,
      baseSetupPerSqFt: 55,
      baseYieldPerSqFtMonth: 0,
      pricePerKg: 0,
      timeline: "1-2 Weeks",
      harvestsPerYear: 12,
      descEn: "ESP32 microcontrollers, DHT22 sensors, capacitive soil probes, and cloud telemetry dashboard.",
      descHi: "सेंसर्स, ऑटोमैटिक फॉगर्स और 24/7 क्लाउड टेलीमेट्री से सुसज्जित स्मार्ट सिस्टम।",
      suggestedProducts: [
        {
          name: "ESP32 Dual-Core Master Node",
          desc: "Wi-Fi + 4G GSM failover agricultural telemetry gateway.",
          image: "https://www.jasagro.com/assets/img/blog/Imp-Agri.jpg",
          href: "/technology",
        },
        {
          name: "Industrial 4-Relay Actuator",
          desc: "Opto-isolated 220V triggers for automated foggers and fans.",
          image: "https://www.jasagro.com/assets/img/blog/Masroom.png",
          href: "/technology",
        },
      ],
    },
  };

  const currentCrop = CROP_CONFIG[selectedCrop];

  // Multipliers based on Goal & Automation Level
  const goalMultiplier =
    goal === "pilot"
      ? 0.85
      : goal === "feedSave"
      ? 1.0
      : goal === "commercial"
      ? 1.15
      : 1.3;

  const autoMultiplier =
    automationLevel === "basic"
      ? 1.0
      : automationLevel === "smart"
      ? 1.18
      : 1.35;

  // Setup Cost (Indicative)
  const estSetupMin = Math.round(areaSize * currentCrop.baseSetupPerSqFt * 0.9 * (automationLevel === "full" ? 1.25 : 1.0));
  const estSetupMax = Math.round(areaSize * currentCrop.baseSetupPerSqFt * 1.15 * (automationLevel === "full" ? 1.35 : 1.0));

  // Monthly Yield (kg)
  const baseMonthlyYield = Math.round(areaSize * currentCrop.baseYieldPerSqFtMonth * goalMultiplier * (automationLevel === "full" ? 1.15 : 1.0));

  // Timeframe-adjusted Value / Revenue Equivalent (₹)
  let timeframeYield = baseMonthlyYield;
  let timeframeRevenue = Math.round(baseMonthlyYield * currentCrop.pricePerKg);

  if (timeframe === "harvest") {
    timeframeYield = Math.round((baseMonthlyYield * 12) / currentCrop.harvestsPerYear);
    timeframeRevenue = Math.round(timeframeYield * currentCrop.pricePerKg);
  } else if (timeframe === "annual") {
    timeframeYield = baseMonthlyYield * 12;
    timeframeRevenue = Math.round(timeframeYield * currentCrop.pricePerKg);
  } else if (timeframe === "fiveYear") {
    timeframeYield = baseMonthlyYield * 60;
    timeframeRevenue = Math.round(timeframeYield * currentCrop.pricePerKg);
  }

  // Handle Calculate Button Pulse
  const handleCalculateClick = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
    }, 400);
  };

  const handleReset = () => {
    setSelectedCrop("mushroom");
    setAreaSize(500);
    setGoal("commercial");
    setAutomationLevel("smart");
    setTimeframe("month");
  };

  return (
    <div className="w-full my-8 lg:my-12">
      {/* Container Frame */}
      <div className="rounded-3xl overflow-hidden shadow-2xl border border-emerald-950/10 dark:border-emerald-500/30 bg-white dark:bg-slate-900 transition-all duration-300">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* =========================================================================
              LEFT PANEL: Inputs & Parameters (Vibrant/Deep Emerald Editorial Surface)
             ========================================================================= */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0F5132] via-[#0A4127] to-[#062919] text-white p-4 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden">
            
            {/* Ambient Background Radial */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-400/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="space-y-5 sm:space-y-6 relative z-10">
              
              {/* Header Badge & Title */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                  <Calculator className="w-3.5 h-3.5 text-lime-400" />
                  <span>{isHindi ? "सिस्टम पैरामीटर्स" : "SYSTEM PARAMETERS"}</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
                  {isHindi ? "फार्म एस्टिमेशन इंजन" : "Farm Estimation Engine"}
                </h3>
              </div>

              {/* 1. TOP SOLUTION SELECTOR TABS */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-emerald-200/90 uppercase tracking-wider flex items-center gap-1.5">
                  <Sprout className="w-3.5 h-3.5 text-lime-400" />
                  <span>{isHindi ? "1. फसल / सिस्टम मॉडल चुनें" : "1. Select AgTech Model"}</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                  {(Object.keys(CROP_CONFIG) as CropType[]).map((key) => {
                    const item = CROP_CONFIG[key];
                    const isSelected = selectedCrop === key;
                    const IconComp = item.icon;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setSelectedCrop(key);
                          setAreaSize(item.defaultArea);
                        }}
                        className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between space-y-1 sm:space-y-1.5 cursor-pointer ${
                          isSelected
                            ? "bg-[#C4F135] text-slate-950 border-[#C4F135] shadow-lg font-bold scale-[1.02]"
                            : "bg-white/10 hover:bg-white/15 text-white border-white/15 hover:border-emerald-400/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <IconComp className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isSelected ? "text-slate-950" : "text-emerald-300"}`} />
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                        </div>
                        <span className="text-[11px] sm:text-xs font-extrabold leading-snug">
                          {isHindi ? item.nameHi : item.nameEn}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. NUMERIC INPUTS / STAT PILLS */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 pt-1">
                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 text-center">
                  <div className="text-[9px] sm:text-[10px] font-mono text-emerald-200 uppercase">{isHindi ? "एरिया" : "Area"}</div>
                  <div className="text-xs sm:text-base font-extrabold font-mono text-white mt-0.5">
                    {areaSize} <span className="text-[9px] sm:text-[10px] text-emerald-300 font-sans">sq ft</span>
                  </div>
                </div>

                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 text-center">
                  <div className="text-[9px] sm:text-[10px] font-mono text-emerald-200 uppercase">{isHindi ? "टाइमलाइन" : "Timeline"}</div>
                  <div className="text-[11px] sm:text-sm font-extrabold font-mono text-lime-300 mt-0.5">
                    {currentCrop.timeline}
                  </div>
                </div>

                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/15 text-center">
                  <div className="text-[9px] sm:text-[10px] font-mono text-emerald-200 uppercase">{isHindi ? "हार्वेस्ट/साल" : "Cuts/Yr"}</div>
                  <div className="text-xs sm:text-base font-extrabold font-mono text-white mt-0.5">
                    {currentCrop.harvestsPerYear}x
                  </div>
                </div>
              </div>

              {/* 3. AREA SLIDER CONTROL */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] sm:text-xs font-mono font-bold text-emerald-200 uppercase tracking-wider">
                    {isHindi ? "2. उपलब्ध स्पेस / शेड साइज" : "2. Available Space / Shed Area"}
                  </label>
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl bg-emerald-950/80 border border-emerald-400/40 font-mono font-extrabold text-lime-300 text-xs sm:text-sm">
                    {areaSize.toLocaleString("en-IN")} {currentCrop.unit}
                  </span>
                </div>

                <input
                  type="range"
                  min={currentCrop.minArea}
                  max={currentCrop.maxArea}
                  step={currentCrop.step}
                  value={areaSize}
                  onChange={(e) => setAreaSize(Number(e.target.value))}
                  className="w-full h-2 sm:h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#C4F135] focus:outline-none"
                />

                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-emerald-300/80">
                  <span>Min: {currentCrop.minArea} {currentCrop.unit}</span>
                  <span>Max: {currentCrop.maxArea.toLocaleString("en-IN")} {currentCrop.unit}</span>
                </div>
              </div>

              {/* 4. GOALS / OPERATING MODE TABS */}
              <div className="space-y-2">
                <label className="text-[11px] sm:text-xs font-mono font-bold text-emerald-200 uppercase tracking-wider">
                  {isHindi ? "3. ऑपरेटिंग मॉडल / लक्ष्य" : "3. Operating Scale & Goal"}
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                  {[
                    { id: "pilot", labelEn: "PILOT", labelHi: "पायलट" },
                    { id: "feedSave", labelEn: "COST CUT", labelHi: "लागत कमी" },
                    { id: "commercial", labelEn: "COMMERCIAL", labelHi: "व्यापारिक" },
                    { id: "turnkey", labelEn: "MAX YIELD", labelHi: "अधिकतम" },
                  ].map((g) => {
                    const isSelected = goal === g.id;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => setGoal(g.id as GoalType)}
                        className={`py-1.5 sm:py-2 px-1.5 sm:px-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-mono font-bold transition-all text-center cursor-pointer ${
                          isSelected
                            ? "bg-slate-950 text-lime-300 border border-lime-400/80 shadow-md scale-[1.03]"
                            : "bg-white/10 hover:bg-white/20 text-emerald-100 border border-white/15"
                        }`}
                      >
                        {isHindi ? g.labelHi : g.labelEn}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* ACTION BAR: Clear & Calculate */}
            <div className="pt-3 sm:pt-4 border-t border-emerald-400/20 flex items-center justify-between gap-3 sm:gap-4 relative z-10">
              <button
                type="button"
                onClick={handleReset}
                className="text-[11px] sm:text-xs font-mono font-bold text-emerald-200 hover:text-white uppercase tracking-wider underline underline-offset-4 cursor-pointer transition-colors"
              >
                {isHindi ? "रीसेट करें" : "CLEAR"}
              </button>

              <button
                type="button"
                onClick={handleCalculateClick}
                className="px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#C4F135] to-[#99E316] text-slate-950 font-extrabold text-[11px] sm:text-sm uppercase tracking-wider shadow-xl hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-lime-300"
              >
                <RefreshCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isCalculating ? "animate-spin" : ""}`} />
                <span>{isHindi ? "कैलकुलेट करें" : "CALCULATE"}</span>
              </button>
            </div>

          </div>

          {/* =========================================================================
              RIGHT PANEL: Results Display, Sliders & Suggested Solutions (Editorial)
             ========================================================================= */}
          <div className="lg:col-span-6 bg-[#FAFBF7] dark:bg-slate-900 p-4 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 sm:space-y-8 text-slate-900 dark:text-white transition-colors">
            
            <div className="space-y-5 sm:space-y-6">
              
              {/* Result Header & Timeframe Tabs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4">
                <div className="space-y-0.5">
                  <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    {isHindi ? "प्रोजेक्टेड आउटकम" : "YOUR PROJECTED OUTCOME"}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold font-heading text-slate-900 dark:text-white">
                    {isHindi ? currentCrop.nameHi : currentCrop.nameEn}
                  </h4>
                </div>

                {/* Timeframe selector pills */}
                <div className="flex items-center gap-1 p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-slate-200/80 dark:bg-slate-800 text-[10px] sm:text-[11px] font-mono font-bold">
                  <button
                    type="button"
                    onClick={() => setTimeframe("month")}
                    className={`px-2 sm:px-2.5 py-1 rounded-md sm:rounded-lg transition-all ${
                      timeframe === "month"
                        ? "bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    1 MO
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeframe("harvest")}
                    className={`px-2 sm:px-2.5 py-1 rounded-md sm:rounded-lg transition-all ${
                      timeframe === "harvest"
                        ? "bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    1 HARVEST
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeframe("annual")}
                    className={`px-2 sm:px-2.5 py-1 rounded-md sm:rounded-lg transition-all ${
                      timeframe === "annual"
                        ? "bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    1 YR
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeframe("fiveYear")}
                    className={`px-2 sm:px-2.5 py-1 rounded-md sm:rounded-lg transition-all ${
                      timeframe === "fiveYear"
                        ? "bg-slate-900 text-white dark:bg-emerald-500 dark:text-slate-950 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    5 YR
                  </button>
                </div>
              </div>

              {/* HERO RESULT DISPLAY (Large Numbers Inspired by Reference GIF) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center bg-white dark:bg-slate-950 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-emerald-950/10 dark:border-slate-800 shadow-sm">
                
                {/* Primary Number */}
                <div className="sm:col-span-7 space-y-1">
                  <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight font-mono">
                    {selectedCrop === "iot" ? (
                      <span>₹{estSetupMin.toLocaleString("en-IN")}</span>
                    ) : (
                      <span>{timeframeYield.toLocaleString("en-IN")} <span className="text-base sm:text-2xl font-sans text-emerald-600 dark:text-emerald-400">kg</span></span>
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {selectedCrop === "iot"
                      ? (isHindi ? "अनुमानित टर्नकी IoT इंस्टॉलेशन बजट" : "Estimated Turnkey IoT Integration Budget")
                      : (isHindi ? `अनुमानित उत्पादन क्षमता (${timeframe === "month" ? "प्रति माह" : timeframe === "annual" ? "प्रति वर्ष" : timeframe})` : `Suggested yield capacity (${timeframe === "month" ? "per month" : timeframe === "annual" ? "per year" : timeframe})`)}
                  </p>
                </div>

                {/* Secondary Breakdown Metric */}
                <div className="sm:col-span-5 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 pt-3 sm:pt-0 sm:pl-6 space-y-1.5 sm:space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span>{isHindi ? "सेटअप बजट:" : "Setup Range:"}</span>
                    <span className="font-bold text-slate-900 dark:text-white">₹{Math.round(estSetupMin / 1000)}k–{Math.round(estSetupMax / 1000)}k</span>
                  </div>

                  {selectedCrop !== "iot" && (
                    <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                      <span>{isHindi ? "मूल्य समतुल्य:" : "Valuation:"}</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400">~₹{timeframeRevenue.toLocaleString("en-IN")}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                    <span>{isHindi ? "टाइमलाइन:" : "Setup Time:"}</span>
                    <span className="font-bold text-amber-700 dark:text-amber-400">{currentCrop.timeline}</span>
                  </div>
                </div>

              </div>

              {/* SECONDARY SLIDER: ADJUST AUTOMATION LEVEL */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    {isHindi ? "IoT ऑटोमेशन टियर एडजस्ट करें" : "Adjust IoT Automation Level"}
                  </label>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                    {isHindi
                      ? (automationLevel === "basic" ? "मैनुअल सेंसर्स" : automationLevel === "smart" ? "स्मार्ट ESP32 नोड्स" : "फुल ऑटो फॉगर्स व रिले")
                      : (automationLevel === "basic" ? "Manual Sensors" : automationLevel === "smart" ? "Smart ESP32 Nodes" : "Full Auto Foggers & Relays")}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { id: "basic", labelEn: "Basic", labelHi: "बेसिक" },
                    { id: "smart", labelEn: "Smart Nodes", labelHi: "स्मार्ट नोड्स" },
                    { id: "full", labelEn: "Full Auto", labelHi: "फुल ऑटो" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAutomationLevel(item.id as AutomationLevel)}
                      className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-mono font-bold transition-all text-center cursor-pointer border ${
                        automationLevel === item.id
                          ? "bg-emerald-800 text-white border-emerald-700 dark:bg-emerald-500 dark:text-slate-950 dark:border-emerald-400 shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-500/40"
                      }`}
                    >
                      {isHindi ? item.labelHi : item.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* SUGGESTED PRODUCTS / ECOSYSTEM CARDS (Inspired by Reference Footer) */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {isHindi ? "सुझाए गए उत्पाद एवं उपकरण" : "Suggested Components & Solutions"}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {currentCrop.suggestedProducts.map((prod, idx) => (
                    <Link
                      key={idx}
                      href={prod.href}
                      className="group p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 flex items-center gap-2.5 sm:gap-3 transition-all shadow-xs hover:shadow-md"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl object-cover border border-slate-100 dark:border-slate-800 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-heading font-semibold text-xs sm:text-sm text-slate-900 dark:text-white truncate group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {prod.name}
                        </h5>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                          {prod.desc}
                        </p>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-emerald-600 transition-all flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* BOTTOM CTA: REQUEST COMMERCIAL QUOTE */}
            <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>{isHindi ? "निःशुल्क वाणिज्यिक कोटेशन एवं कृषि सलाह।" : "Zero-obligation commercial quote & agronomy advisory."}</span>
              </div>

              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-extrabold text-[11px] sm:text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <span>{isHindi ? "विस्तृत कोटेशन प्राप्त करें" : "Request Detailed Quote"}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={currentCrop.nameEn}
      />
    </div>
  );
};
