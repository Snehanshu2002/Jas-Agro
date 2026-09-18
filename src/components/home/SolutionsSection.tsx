"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sprout, Sparkles, Waves, Recycle, ExternalLink } from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";

export const SolutionsSection: React.FC = () => {
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const solutions = [
    {
      titleEn: "Oyster Mushrooms",
      titleHi: "ऑयस्टर मशरूम (Oyster Mushroom)",
      slug: "oyster-mushroom",
      categoryEn: "Indoor Smart Farming",
      categoryHi: "इन्डोर स्मार्ट फार्मिंग",
      descriptionEn: "Oyster mushroom (Pleurotus) is a gourmet species grown using pasteurized substrate and climate-controlled grow rooms.",
      descriptionHi: "पाश्चराइज्ड सबस्ट्रेट और क्लाइमेट-कंट्रोल्ड ग्रो रूम्स से तैयार हाई-क्वालिटी ऑयस्टर मशरूम।",
      image: "https://www.jasagro.com/assets/img/blog/Masroom.png",
      badgeEn: "High Efficiency",
      badgeHi: "हाई एफिशिएंसी",
      icon: Sprout,
      externalLink: "https://www.chhatraka.com/",
    },
    {
      titleEn: "Azolla Aquatic Fodder",
      titleHi: "अजोला सुपर-चारा (Azolla Fodder)",
      slug: "azolla",
      categoryEn: "Livestock Nutrition",
      categoryHi: "लाइवस्टॉक फीड & न्यूट्रिशन",
      descriptionEn: "Considered one of the planet's super-foods. Fast-growing aquatic biomass with 25-30% crude protein.",
      descriptionHi: "25-30% प्रोटीन से भरपूर फास्ट-ग्रोइंग एक्वाटिक सुपर-फूड जो डेयरी फीड कॉस्ट कम करता है।",
      image: "https://www.jasagro.com/assets/img/blog/Azolla.png",
      badgeEn: "25-30% Protein",
      badgeHi: "25-30% प्रोटीन",
      icon: Waves,
    },
    {
      titleEn: "Hybrid Napier Grass",
      titleHi: "हाइब्रिड नेपियर घास (Napier Grass)",
      slug: "napier-grass",
      categoryEn: "Perennial Green Fodder",
      categoryHi: "पेरेनियल ग्रीन फॉडर",
      descriptionEn: "High-biomass green forage crop producing green grass for cattle & livestock year-round.",
      descriptionHi: "डेयरी पशुओं के लिए साल भर भरपूर हरा चारा देने वाली हाई-बायोमास फसल।",
      image: "https://www.jasagro.com/assets/img/blog/Napior.png",
      badgeEn: "180+ Tons/Acre",
      badgeHi: "180+ टन/एकड़",
      icon: Sparkles,
    },
    {
      titleEn: "Vermicompost Manure",
      titleHi: "ऑर्गेनिक वर्मीकंपोस्ट (Vermicompost)",
      slug: "vermicompost",
      categoryEn: "Soil Health & Fertilizer",
      categoryHi: "सोइल फर्टिलिटी & खाद",
      descriptionEn: "Organic biological process using earthworms to convert organic matter into nutrient-rich soil manure.",
      descriptionHi: "केंचुओं द्वारा तैयार 100% ऑर्गेनिक कंपोस्ट जो मिट्टी की ऑर्गेनिक कार्बन और मॉइस्चर सुधारता है।",
      image: "https://www.jasagro.com/assets/img/blog/Vermicompost.png",
      badgeEn: "100% Organic",
      badgeHi: "100% ऑर्गेनिक",
      icon: Recycle,
    },
  ];

  return (
    <section className="py-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-widest">
            {language === "hi" ? "कोर ऑफरिंग्स" : "CORE OFFERINGS"}
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
            {language === "hi" ? "स्मार्ट सॉल्यूशंस। " : "What We Grow. "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {language === "hi" ? "हाई प्रोडक्टिविटी।" : "What We Solve."}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {language === "hi"
              ? "हाई यील्ड, लाइवस्टॉक फीड सिक्योरिटी और सोइल हेल्थ के लिए इंजीनियर्ड सॉल्यूशंस।"
              : "Engineered agricultural solutions designed for optimal biomass production, livestock security, and ecological sustainability."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((sol, idx) => {
            const IconComp = sol.icon;
            const title = language === "hi" ? sol.titleHi : sol.titleEn;
            const category = language === "hi" ? sol.categoryHi : sol.categoryEn;
            const desc = language === "hi" ? sol.descriptionHi : sol.descriptionEn;
            const badge = language === "hi" ? sol.badgeHi : sol.badgeEn;

            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl shadow-sm"
              >
                {/* Top Image Box */}
                <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4">
                  <img
                    src={sol.image}
                    alt={title}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-emerald-700 dark:bg-slate-900/90 dark:text-emerald-400 border border-emerald-500/40 text-xs font-bold backdrop-blur-md shadow-sm">
                    {badge}
                  </div>

                  <div className="absolute bottom-3 left-4 p-2 rounded-xl bg-emerald-500 text-slate-950 shadow-md">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider flex items-center justify-between">
                      <span>{category}</span>
                      {sol.externalLink && (
                        <a
                          href={sol.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-amber-500 hover:underline flex items-center gap-0.5"
                        >
                          Chhatraka <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mt-2">
                      {desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-1">
                    <Link
                      href={`/products/${sol.slug}`}
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      {t("learnMore")} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {sol.externalLink ? (
                      <a
                        href={sol.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/40 hover:bg-amber-500 hover:text-slate-950 text-[11px] font-bold transition-all flex items-center gap-1"
                      >
                        Chhatraka <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProductForQuote(title)}
                        className="px-3 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-[11px] font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                      >
                        {t("getQuote")}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <QuoteModal
        isOpen={!!selectedProductForQuote}
        onClose={() => setSelectedProductForQuote(null)}
        defaultProduct={selectedProductForQuote || undefined}
      />
    </section>
  );
};
