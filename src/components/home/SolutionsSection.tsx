"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sprout, Sparkles, Waves, Recycle } from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { SolutionCard, SolutionItem } from "@/components/ui/SolutionCard";
import { useLanguage } from "@/context/LanguageContext";

export const SolutionsSection: React.FC = () => {
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | null>(null);
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const solutions: SolutionItem[] = [
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
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBF7] dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden border-b border-emerald-950/10 dark:border-slate-800/80 transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 dark:bg-amber-500/10 border border-amber-300/80 dark:border-amber-500/30 text-amber-900 dark:text-amber-400 text-xs font-bold uppercase tracking-widest">
            {language === "hi" ? "कोर ऑफरिंग्स" : "CORE OFFERINGS"}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            {language === "hi" ? "स्मार्ट सॉल्यूशंस। " : "What We Grow. "}
            <span className="text-emerald-700 dark:text-emerald-400">
              {language === "hi" ? "हाई प्रोडक्टिविटी।" : "What We Solve."}
            </span>
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
            {language === "hi"
              ? "हाई यील्ड, लाइवस्टॉक फीड सिक्योरिटी और सोइल हेल्थ के लिए इंजीनियर्ड सॉल्यूशंस।"
              : "Engineered agricultural solutions designed for optimal biomass production, livestock security, and ecological sustainability."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((sol, idx) => (
            <SolutionCard
              key={sol.slug}
              solution={sol}
              index={idx}
              onQuoteRequest={(name) => setSelectedProductForQuote(name)}
            />
          ))}
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
