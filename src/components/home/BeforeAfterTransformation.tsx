"use client";

import React, { useState, useRef } from "react";
import { Sparkles, Sliders, CheckCircle2, XCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const BeforeAfterTransformation: React.FC = () => {
  const { language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-6 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{language === "hi" ? "जैविक रूपांतरण परिणाम" : "Bio-Transformation Impact"}</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {language === "hi" ? (
              <>
                पारंपरिक रसायन बनाम <span className="text-emerald-600 dark:text-emerald-400">JAS Agro जैविक क्रांति</span>
              </>
            ) : (
              <>
                Chemical Degradation vs. <span className="text-emerald-600 dark:text-emerald-400">Bio-Active Restoration</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {language === "hi"
              ? "नीचे दिए गए विज़ुअल स्लाइडर को बाएं-दाएं ड्रैग करके देखें कि कैसे वर्मीकंपोस्ट और सुपर-चारा भूमि और मवेशी स्वास्थ्य को बदलते हैं।"
              : "Drag the interactive slider below to compare soil topsoil vitality and fodder productivity outcomes."}
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto space-y-6">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 select-none cursor-ew-resize"
          >
            {/* AFTER Image (Background - JAS Agro Bio-Active) */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
                alt="JAS Agro Organic Bio Transformation"
                className="w-full h-full object-cover filter brightness-105 saturate-125"
              />
              {/* After Overlay Badge */}
              <div className="absolute top-6 right-6 bg-emerald-600/90 text-white backdrop-blur-md px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm shadow-xl flex items-center gap-2 border border-emerald-400/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-200" />
                <span>
                  {language === "hi"
                    ? "✨ JAS Agro वर्मीकंपोस्ट व अजोला (100% जैविक)"
                    : "✨ JAS Agro Organic Bio-Restored Soil"}
                </span>
              </div>
            </div>

            {/* BEFORE Image (Clipped Overlay - Chemical Farming) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80"
                alt="Chemical Depleted Soil"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                style={{ width: containerRef.current?.offsetWidth || "100%" }}
              />
              {/* Before Overlay Badge */}
              <div className="absolute top-6 left-6 bg-red-900/90 text-white backdrop-blur-md px-4 py-2 rounded-2xl font-bold text-xs sm:text-sm shadow-xl flex items-center gap-2 border border-red-500/40">
                <XCircle className="w-4 h-4 text-red-300" />
                <span>
                  {language === "hi"
                    ? "⚠️ रासायनिक खाद व घटती उर्वरता"
                    : "⚠️ Chemical Depleted & Compacted Soil"}
                </span>
              </div>
            </div>

            {/* Slider Handle Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-emerald-600 text-white shadow-2xl border-2 border-white flex items-center justify-center">
                <Sliders className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Key Comparison Grid Below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2">
              <h4 className="text-sm font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                {language === "hi" ? "रासायनिक उर्वरक के नुकसान:" : "Impact of Chemical Fertilizers:"}
              </h4>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside font-medium">
                <li>{language === "hi" ? "मिट्टी के मित्र जीवाणुओं और केंचुआ जीवन का विनाश" : "Destruction of earthworms and beneficial soil micro-biome"}</li>
                <li>{language === "hi" ? "पशु आहार लागत में 35-40% तक की भारी वृद्धि" : "High commercial feed expenses cutting livestock margins"}</li>
                <li>{language === "hi" ? "जमीन की जल-धारण क्षमता (Water Retention) में गिरावट" : "Poor topsoil moisture retention during summer dry spells"}</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-md space-y-2">
              <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                {language === "hi" ? "JAS Agro जैविक समाधान के लाभ:" : "Benefits of JAS Agro Bio-Restoration:"}
              </h4>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside font-medium">
                <li>{language === "hi" ? "100% शुद्ध जीवित ह्यूमस द्वारा मिट्टी का पुनर्जीवन" : "Living earthworm humus restoring organic carbon balance"}</li>
                <li>{language === "hi" ? "अजोला चारे से दूध उत्पादन में 15-20% की वृद्धि" : "15-20% boost in daily dairy milk yield via Azolla feed"}</li>
                <li>{language === "hi" ? "कम पानी और शून्य रासायनिक दवाइयों से शुद्ध पैदावार" : "Zero synthetic growth agents or pesticide residues"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
