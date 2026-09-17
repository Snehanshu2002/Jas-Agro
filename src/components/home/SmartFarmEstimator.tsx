"use client";

import React, { useState } from "react";
import { Calculator, Sprout, ShieldCheck, Download, ArrowRight, Sparkles, Clock, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { QuoteModal } from "@/components/ui/QuoteModal";

export const SmartFarmEstimator: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const [selectedCrop, setSelectedCrop] = useState<"mushroom" | "azolla" | "napier" | "vermicompost" | "iot">("mushroom");
  const [areaSize, setAreaSize] = useState<number>(500); // sq ft
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const estimatorData = {
    mushroom: {
      nameEn: "Oyster Mushroom Cultivation",
      nameHi: "ऑयस्टर मशरूम फार्मिंग",
      unit: "sq ft",
      minArea: 200,
      maxArea: 5000,
      step: 100,
      setupCostPerSqFt: 140, // ₹ per sq ft setup
      monthlyYieldPerSqFt: 0.15, // kg/sqft/month
      timelineWeeks: "3-4 Weeks",
      descEn: "Climate-controlled gourmet indoor mushroom cultivation with 6-8 harvests annually.",
      descHi: "Indoor setup में ऑयस्टर मशरूम फार्मिंग — साल में 6-8 बार harvests।",
    },
    azolla: {
      nameEn: "Azolla Aquatic Super-Fodder",
      nameHi: "अजोला सुपर-चारा (Azolla Fodder)",
      unit: "sq ft (pond)",
      minArea: 100,
      maxArea: 3000,
      step: 50,
      setupCostPerSqFt: 45,
      monthlyYieldPerSqFt: 0.38,
      timelineWeeks: "1-2 Weeks",
      descEn: "High-protein (25-30%) daily harvested aquatic fodder lowering dairy feed costs up to 30%.",
      descHi: "High protein (25-30%) जलीय चारा जिससे Dairy feed cost 30% तक कम होती है।",
    },
    napier: {
      nameEn: "Hybrid Napier Grass Forage",
      nameHi: "हाइब्रिड नेपियर घास (Napier Grass)",
      unit: "sq ft",
      minArea: 1000,
      maxArea: 40000,
      step: 1000,
      setupCostPerSqFt: 12,
      monthlyYieldPerSqFt: 0.27,
      timelineWeeks: "4-6 Weeks",
      descEn: "Perennial high-biomass green forage yielding 150-200 tons/acre/year for 4-5 continuous years.",
      descHi: "मल्टी-ईयर हरा चारा जो प्रति साल 150-200 टन/एकड़ yield देता है।",
    },
    vermicompost: {
      nameEn: "Bio-Active Vermicompost Unit",
      nameHi: "ऑर्गेनिक वर्मीकंपोस्ट (Vermicompost)",
      unit: "sq ft (bed area)",
      minArea: 300,
      maxArea: 10000,
      step: 100,
      setupCostPerSqFt: 65,
      monthlyYieldPerSqFt: 0.50,
      timelineWeeks: "2-3 Weeks",
      descEn: "Premium earthworm bio-conversion topsoil humus restoring organic carbon & soil vigor.",
      descHi: "100% organic केंचुआ खाद जो मिट्टी की fertility और moisture retention बढ़ाती है।",
    },
    iot: {
      nameEn: "IoT Smart Farm Automation",
      nameHi: "IoT स्मार्ट फार्म ऑटोमेशन",
      unit: "sq ft (covered area)",
      minArea: 500,
      maxArea: 20000,
      step: 500,
      setupCostPerSqFt: 55,
      monthlyYieldPerSqFt: 0.0, // N/A
      timelineWeeks: "1-2 Weeks",
      descEn: "ESP32 micro-climate telemetry nodes, automated fogger relays, and cloud dashboard.",
      descHi: "ESP32 micro-climate sensors, automatic fogger relays और live cloud dashboard।",
    },
  };

  const active = estimatorData[selectedCrop];
  const estSetupMin = Math.round(areaSize * active.setupCostPerSqFt * 0.9);
  const estSetupMax = Math.round(areaSize * active.setupCostPerSqFt * 1.15);
  const estMonthlyYield = Math.round(areaSize * active.monthlyYieldPerSqFt);

  return (
    <section className="py-6 bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80">
      {/* Decorative Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-glow">
            <Calculator className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{isHindi ? "Smart Farm Estimator" : "SMART FARM ESTIMATOR"}</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-none">
            {isHindi ? "Farm Size और " : "PROJECT "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
              {isHindi ? "कमाई का अनुमान लगाएं" : "ESTIMATION ENGINE"}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isHindi
              ? "Crop model और available space चुनें — तुरंत setup budget, monthly yield और timeline का सही अंदाज़ा पाएं।"
              : "Select your farming solution and available area to calculate indicative setup budgets, monthly yield capacity, and timeline."}
          </p>
        </div>

        {/* Main Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Controls Card */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-glass flex flex-col justify-between space-y-8">
            
            {/* 1. Solution Selection */}
            <div className="space-y-4">
              <label className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                {isHindi ? "1. समाधान / फसल मॉडल चुनें:" : "1. Select AgTech Solution:"}
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {(Object.keys(estimatorData) as Array<keyof typeof estimatorData>).map((key) => {
                  const item = estimatorData[key];
                  const isSelected = selectedCrop === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedCrop(key);
                        setAreaSize(item.minArea * 2);
                      }}
                      className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between space-y-2 cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-br from-emerald-600 to-teal-700 text-white border-emerald-400 shadow-glow scale-[1.02]"
                          : "bg-slate-100 dark:bg-slate-950/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-emerald-500/40"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold leading-snug">
                        {isHindi ? item.nameHi.split(" ")[0] : item.nameEn.split(" ")[0]}
                      </span>
                      <span className={`text-[10px] font-mono ${isSelected ? "text-emerald-100" : "text-slate-500"}`}>
                        {key === "mushroom"
                          ? "🍄 Gourmet"
                          : key === "azolla"
                          ? "🌿 Fodder"
                          : key === "napier"
                          ? "🌾 Grass"
                          : key === "vermicompost"
                          ? "🪴 Humus"
                          : "⚡ Automation"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description Info Box */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 leading-relaxed font-medium">
              ✨ {isHindi ? active.descHi : active.descEn}
            </div>

            {/* 2. Area Range Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-400">
                  {isHindi ? "2. उपलब्ध शेड / भूमि का आकार:" : "2. Available Farm / Shed Space:"}
                </label>

                <div className="px-4 py-2 rounded-2xl bg-slate-950 border border-emerald-500/40 text-emerald-400 font-mono font-extrabold text-base sm:text-lg shadow-glow">
                  {areaSize.toLocaleString("en-IN")} <span className="text-xs font-sans text-slate-400">{active.unit}</span>
                </div>
              </div>

              <input
                type="range"
                min={active.minArea}
                max={active.maxArea}
                step={active.step}
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none"
              />

              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Min: {active.minArea} {active.unit}</span>
                <span>Max: {active.maxArea.toLocaleString("en-IN")} {active.unit}</span>
              </div>
            </div>
          </div>

          {/* Right Outcomes Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between border border-emerald-500/40 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  {isHindi ? "अनुमानित परिणाम (Indicative Metrics)" : "Indicative Project Outcome"}
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-950 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
                  <Clock className="w-3 h-3 inline mr-1 text-amber-400" /> {active.timelineWeeks}
                </span>
              </div>

              {/* Metric 1: Setup Cost Range */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-emerald-200/90">
                  {isHindi ? "अनुमानित सेटअप बजट सीमा (Estimated Setup Range):" : "Estimated Setup Range:"}
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-300 tracking-tight font-mono">
                  ₹{estSetupMin.toLocaleString("en-IN")} – ₹{estSetupMax.toLocaleString("en-IN")}
                </div>
              </div>

              {/* Metric 2: Monthly Yield */}
              {active.monthlyYieldPerSqFt > 0 && (
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-emerald-200/90">
                    {isHindi ? "अनुमानित मासिक उत्पादन (Monthly Yield):" : "Estimated Monthly Yield:"}
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-mono">
                    {estMonthlyYield.toLocaleString("en-IN")} <span className="text-lg font-sans text-emerald-400">kg / month</span>
                  </div>
                </div>
              )}

              {/* Operating Considerations Box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Operating Considerations:</span>
                </div>
                <ul className="text-[11px] text-slate-400 space-y-1 list-disc list-inside">
                  <li>Indoor humidity & ventilation node requirements</li>
                  <li>Pure organic spawn / culture sourcing</li>
                  <li>Power backup & automated mist schedule</li>
                </ul>
              </div>

              {/* Mandatory Disclaimer Tag */}
              <p className="text-[10px] text-slate-400 font-mono leading-normal pt-1">
                ⚠️ *Indicative estimate — actual results vary by crop, location, market price, operating conditions and farm management.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6 relative z-10 space-y-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-green-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm shadow-glow hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-white" />
                {isHindi ? "विस्तृत कोटेशन का अनुरोध करें" : "Request Detailed Quote"}
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified by JAS Agro AgTech Benchmarking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </section>
  );
};
