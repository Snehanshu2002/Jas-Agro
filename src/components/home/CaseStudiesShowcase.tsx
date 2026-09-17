"use client";

import React from "react";
import { ArrowRight, MapPin, CheckCircle2, TrendingUp, Cpu, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const CaseStudiesShowcase: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const caseStudies = [
    {
      id: "commercial-mushroom-estate",
      titleEn: "Commercial Gourmet Mushroom Estate",
      titleHi: "Commercial Oyster Mushroom Farm",
      locationEn: "Gorakhpur, Uttar Pradesh",
      locationHi: "गोरखपुर, उत्तर प्रदेश",
      farmSize: "2,500 sq ft Indoor Shed",
      solution: "Oyster Mushroom Spawn + IoT Climate Node",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      outcomeEn: "Achieved 380 kg/month harvest with 98% humidity precision.",
      outcomeHi: "98% Humidity precision के साथ 380 kg/month harvest हासिल की।",
      metric: "380 kg / Mo",
    },
    {
      id: "dairy-feed-azolla-unit",
      titleEn: "High-Protein Azolla Dairy Unit",
      titleHi: "High-Protein Azolla Dairy Unit",
      locationEn: "Karnal, Haryana",
      locationHi: "करनाल, हरियाणा",
      farmSize: "1,200 sq ft Pond Network",
      solution: "Azolla Micro-Aquatic Super-Fodder Culture",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      outcomeEn: "Reduced cattle feed costs by 28% and boosted milk yield by 14%.",
      outcomeHi: "Cattle feed cost 28% घटाई और milk yield 14% बढ़ाया।",
      metric: "-28% Feed Cost",
    },
    {
      id: "hybrid-napier-greenhouse",
      titleEn: "Super Napier High-Biomass Estate",
      titleHi: "Super Napier High-Yield Farm",
      locationEn: "Patna, Bihar",
      locationHi: "पटना, बिहार",
      farmSize: "5 Acres Perennial Farmland",
      solution: "Hybrid Napier Grass Stem Cuttings",
      image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1200&q=80",
      outcomeEn: "Harvested 180 Tons/Acre/Year for continuous commercial dairy forage.",
      outcomeHi: "Dairy feed के लिए 180 Tons/Acre/Year production प्राप्त की।",
      metric: "180 Tons / Acre",
    },
  ];

  return (
    <section className="py-6 bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-glow">
            <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{isHindi ? "REAL FARM PROJECTS" : "PROJECT SHOWCASE"}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-none">
            {isHindi ? "Real World " : "BUILT FOR THE "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
              {isHindi ? "के लिए Success Stories" : "REAL WORLD."}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isHindi
              ? "JAS Agro smart tech और organic models द्वारा सफल farm projects के real results।"
              : "Explore how JAS Agro smart farming models and precision technology deliver tangible farm outcomes."}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((item) => {
            const title = isHindi ? item.titleHi : item.titleEn;
            const location = isHindi ? item.locationHi : item.locationEn;
            const outcome = isHindi ? item.outcomeHi : item.outcomeEn;

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 rounded-3xl overflow-hidden transition-all duration-500 flex flex-col justify-between group shadow-glass hover:shadow-glow-emerald hover:-translate-y-1.5"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/90 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold backdrop-blur-md shadow-glow-gold">
                      {item.metric}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{location}</span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-extrabold font-heading text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      {title}
                    </h3>

                    <div className="space-y-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                        <span>Solution: {item.solution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>Size: {item.farmSize}</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-slate-950/80 border border-emerald-200 dark:border-emerald-500/30 text-xs text-emerald-900 dark:text-emerald-200 font-medium leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 inline mr-1.5" />
                      {outcome}
                    </div>
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
