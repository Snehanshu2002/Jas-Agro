"use client";

import React, { useState } from "react";
import { TrendingUp, Calculator, ShieldCheck, Download, Sparkles, ArrowRight, Sprout, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { QuoteModal } from "@/components/ui/QuoteModal";

export const RoiCalculatorSection: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const [selectedProduct, setSelectedProduct] = useState<"mushroom" | "azolla" | "napier" | "vermicompost">("mushroom");
  const [areaSize, setAreaSize] = useState<number>(500); // sq ft
  const [sellingPrice, setSellingPrice] = useState<number>(180); // ₹/kg
  const [opCostRatio, setOpCostRatio] = useState<number>(35); // 35% operating cost
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const productData = {
    mushroom: {
      nameEn: "Oyster Mushroom Cultivation",
      nameHi: "ऑयस्टर मशरूम फार्मिंग",
      unit: "sq ft",
      minArea: 200,
      maxArea: 5000,
      step: 100,
      defaultPrice: 180,
      yieldMultiplier: 1.8, // kg per sq ft per year
      initialSetupPerSqFt: 140,
      roiMonths: 4,
      descEn: "Climate-controlled gourmet indoor mushroom cultivation with 6-8 harvests annually.",
      descHi: "Indoor setup में ऑयस्टर मशरूम फार्मिंग — साल में 6-8 बार harvests.",
    },
    azolla: {
      nameEn: "Azolla Aquatic Super-Fodder",
      nameHi: "अजोला सुपर-चारा (Azolla Fodder)",
      unit: "sq ft (pond)",
      minArea: 100,
      maxArea: 3000,
      step: 50,
      defaultPrice: 45,
      yieldMultiplier: 4.5,
      initialSetupPerSqFt: 45,
      roiMonths: 3,
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
      defaultPrice: 4,
      yieldMultiplier: 3.2,
      initialSetupPerSqFt: 12,
      roiMonths: 5,
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
      defaultPrice: 12,
      yieldMultiplier: 6.0,
      initialSetupPerSqFt: 65,
      roiMonths: 6,
      descEn: "Premium earthworm bio-conversion topsoil humus restoring organic carbon & soil vigor.",
      descHi: "100% organic केंचुआ खाद जो मिट्टी की fertility और moisture retention बढ़ाती है।",
    },
  };

  const activeData = productData[selectedProduct];

  const initialSetupCost = Math.round(areaSize * activeData.initialSetupPerSqFt);
  const estimatedAnnualYieldKg = Math.round(areaSize * activeData.yieldMultiplier);
  const estimatedMonthlyYieldKg = Math.round(estimatedAnnualYieldKg / 12);
  const estimatedMonthlyRevenue = Math.round(estimatedMonthlyYieldKg * sellingPrice);
  const estimatedMonthlyOpCost = Math.round(estimatedMonthlyRevenue * (opCostRatio / 100));
  const estimatedGrossMargin = estimatedMonthlyRevenue - estimatedMonthlyOpCost;
  const estimatedPaybackMonths = estimatedGrossMargin > 0 ? Math.ceil(initialSetupCost / estimatedGrossMargin) : 0;

  return (
    <section className="py-6 bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80">
      {/* Decorative Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-glow">
            <Calculator className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{isHindi ? "Smart ROI Calculator" : "ROI FINANCIAL MODEL"}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-none">
            {isHindi ? "संभावित " : "ESTIMATED "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
              {isHindi ? "मुनाफा और Payback Period" : "FARM PROFITABILITY & ROI"}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isHindi
              ? "क्रॉप और फार्म एरिया चुनें — हर महीने की संभावित कमाई, खर्च और नेट प्रॉफिट का तुरंत आसान हिसाब लगाएं।"
              : "Project monthly revenue, operating expenses, gross margins, and payback timelines based on crop parameters."}
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Inputs Panel */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-glass flex flex-col justify-between space-y-8">
            
            {/* 1. Crop Selection Tabs */}
            <div className="space-y-4">
              <label className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                {isHindi ? "1. फसल / प्रोजेक्ट मॉडल चुनें:" : "1. Select Agriculture Model:"}
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(Object.keys(productData) as Array<keyof typeof productData>).map((key) => {
                  const item = productData[key];
                  const isSelected = selectedProduct === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedProduct(key);
                        setAreaSize(item.minArea * 2);
                        setSellingPrice(item.defaultPrice);
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
                          : "🪴 Humus"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description Info */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 leading-relaxed font-medium">
              ✨ {isHindi ? activeData.descHi : activeData.descEn}
            </div>

            {/* 2. Area Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400">
                  {isHindi ? "2. उपलब्ध क्षेत्रफल:" : "2. Farm / Shed Area:"}
                </label>
                <div className="px-3 py-1 rounded-xl bg-white dark:bg-slate-950 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-mono font-extrabold text-sm">
                  {areaSize.toLocaleString("en-IN")} {activeData.unit}
                </div>
              </div>
              <input
                type="range"
                min={activeData.minArea}
                max={activeData.maxArea}
                step={activeData.step}
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* 3. Selling Price & Operating Cost Adjusters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                  Estimated Selling Price (₹/kg):
                </label>
                <input
                  type="number"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                  Est. Operating Expense (%):
                </label>
                <input
                  type="number"
                  value={opCostRatio}
                  onChange={(e) => setOpCostRatio(Number(e.target.value))}
                  className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl px-3 py-2 text-xs font-mono text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right Live Results Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between border border-emerald-500/40 relative overflow-hidden">
            
            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  {isHindi ? "Financial Breakdown" : "Projected ROI Breakdown"}
                </span>

                <span className="px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold shadow-glow-gold">
                  ⚡ Payback ~{estimatedPaybackMonths} {isHindi ? "Months" : "Months"}
                </span>
              </div>

              {/* Breakdown Grid */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-400">Initial Setup Cost:</span>
                  <span className="font-bold text-white">₹{initialSetupCost.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-400">Monthly Revenue:</span>
                  <span className="font-bold text-amber-300">₹{estimatedMonthlyRevenue.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between items-center p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-400">Monthly Operating Cost:</span>
                  <span className="font-bold text-red-400">-₹{estimatedMonthlyOpCost.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between items-center p-3.5 rounded-xl bg-emerald-950/90 border border-emerald-500/50 shadow-glow">
                  <span className="text-emerald-300 font-bold">Est. Monthly Gross Margin:</span>
                  <span className="font-extrabold text-white text-base">₹{estimatedGrossMargin.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Mandatory Prompt Disclaimer */}
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[10px] text-slate-400 font-mono flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  Illustrative estimate — actual results vary by crop, location, market price, operating conditions and farm management.
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 relative z-10 space-y-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-glow-gold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-950" />
                {isHindi ? "Custom ROI Model पाएं" : "Request Custom ROI Model"}
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Based on JAS Agro verified yield benchmarks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </section>
  );
};
