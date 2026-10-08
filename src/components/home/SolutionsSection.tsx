"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";

interface CardData {
  num: string;
  category: string;
  categoryHi: string;
  title: string;
  titleHi: string;
  desc: string;
  descHi: string;
  slug: string;
  image: string;
}

export const SolutionsSection: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | null>(null);

  const cards: CardData[] = [
    {
      num: "01",
      category: "01 • INDOOR SMART FARMING",
      categoryHi: "01 • इन्डोर स्मार्ट फार्मिंग",
      title: "Oyster Mushrooms",
      titleHi: "ऑयस्टर मशरूम",
      desc: "Gourmet Pleurotus species cultivated in climate-controlled micro-environments with automated humidity and spore-density telemetry.",
      descHi: "पाश्चराइज्ड सबस्ट्रेट और क्लाइमेट-कंट्रोल्ड ग्रो रूम्स से तैयार हाई-क्वालिटी ऑयस्टर मशरूम।",
      slug: "oyster-mushroom",
      image: "/media/Industrial Oyster Mushroom Farm.png",
    },
    {
      num: "02",
      category: "02 • LIVESTOCK NUTRITION",
      categoryHi: "02 • लाइवस्टॉक पोषण",
      title: "Azolla Aquatic Fodder",
      titleHi: "अजोला सुपर-चारा",
      desc: "Rapidly multiplying aquatic biomass superfood delivering 25-30% bio-available crude protein to dramatically cut dairy concentrate feed costs.",
      descHi: "25-30% प्रोटीन से भरपूर फास्ट-ग्रोइंग एक्वाटिक सुपर-फूड जो डेयरी फीड कॉस्ट 20-30% कम करता है।",
      slug: "azolla",
      image: "/media/Hands Holding Lush Aquatic Greens.png",
    },
    {
      num: "03",
      category: "03 • PERENNIAL GREEN FODDER",
      categoryHi: "03 • पेरेनियल ग्रीन फॉडर",
      title: "Hybrid Napier Grass",
      titleHi: "हाइब्रिड नेपियर घास",
      desc: "High-biomass perennial forage crop engineered for multi-cut harvesting throughout the year with exceptional palatability for dairy herds.",
      descHi: "डेयरी पशुओं के लिए साल भर भरपूर हरा चारा देने वाली हाई-बायोमास मल्टी-कट फसल (180+ टन/एकड़)।",
      slug: "napier-grass",
      image: "/media/Industrial Oyster Mushroom Farm.png",
    },
    {
      num: "04",
      category: "04 • SOIL HEALTH & FERTILIZER",
      categoryHi: "04 • सोइल फर्टिलिटी",
      title: "Vermicompost Manure",
      titleHi: "ऑर्गेनिक वर्मीकंपोस्ट",
      desc: "100% organic biological vermiculture producing premium microbial humus that restores depleted soil organic carbon and soil water retention.",
      descHi: "केंचुओं द्वारा तैयार 100% शुद्ध ऑर्गेनिक कंपोस्ट जो मिट्टी की ऑर्गेनिक कार्बन और जल धारण क्षमता सुधारता है।",
      slug: "vermicompost",
      image: "/media/Hands Holding Rich Compost.png",
    },
  ];

  return (
    <section
      id="core-offerings"
      className="font-sans py-10 sm:py-12 lg:py-16 bg-[#F6F8EE] dark:bg-[#0B0F17] text-slate-900 dark:text-white relative transition-colors duration-300 select-none"
    >
      {/* Anchor for existing links targeting #solutions */}
      <span id="solutions" className="absolute -top-24 left-0" aria-hidden="true" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[380px] rounded-full bg-[#B8F20A]/10 dark:bg-[#122a16]/35 blur-[130px] pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-1/4 right-1/4 w-[260px] sm:w-[380px] h-[260px] rounded-full bg-[#2F7D16]/8 dark:bg-[#72d919]/10 blur-[100px] pointer-events-none transition-colors duration-300" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1240px] mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
          className="mb-5 sm:mb-6 lg:mb-8 text-left"
        >
          <h2 className="text-xl sm:text-2xl lg:text-[1.85rem] xl:text-[2rem] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.25] whitespace-normal lg:whitespace-nowrap">
            {isHindi
              ? "बेहतर उत्पादन। स्मार्ट फार्मिंग।"
              : "Built to Grow Better. Built to Farm Smarter."}
          </h2>
        </motion.div>

        {/* Responsive 4-Column CSS Grid Card Layout */}
        <div className="jas-grid">
          {cards.map((card) => {
            const title = isHindi ? card.titleHi : card.title;
            const desc = isHindi ? card.descHi : card.desc;

            return (
              <Link
                key={card.num}
                href={`/products/${card.slug}`}
                className="jas-card"
              >
                <div className="jas-img-wrapper">
                  <img
                    src={card.image}
                    alt={title}
                    className="jas-img"
                    loading="lazy"
                  />
                </div>
                <div className="jas-text-wrapper">
                  <div className="jas-content-mover">
                    <h3 className="jas-title">{title}</h3>
                    <p className="jas-desc">{desc}</p>
                  </div>
                  <div className="jas-action-wrapper">
                    <div className="jas-read-more-btn">
                      <span>{isHindi ? "अधिक पढ़ें" : "Read More"}</span>
                      <span className="jas-arrow">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={!!selectedProductForQuote}
        onClose={() => setSelectedProductForQuote(null)}
        defaultProduct={selectedProductForQuote || undefined}
      />

      {/* Scoped CSS for Hover Transitions & Animations */}
      <style jsx>{`
        .jas-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 14px;
          width: 100%;
        }

        @media (min-width: 640px) {
          .jas-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }
        }

        @media (min-width: 1024px) {
          .jas-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 18px;
          }
        }

        .jas-card {
          cursor: pointer;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          background: transparent;
          position: relative;
          border-radius: 14px;
          outline: none;
        }

        /* Image Container */
        .jas-img-wrapper {
          width: 100%;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          border-radius: 10px;
          background: rgba(0, 0, 0, 0.04);
        }

        @media (min-width: 640px) {
          .jas-img-wrapper {
            aspect-ratio: 1 / 1;
          }
        }

        .jas-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.35s ease-out;
        }

        /* Subtle, stable image zoom on card hover */
        .jas-card:hover .jas-img,
        .jas-card:focus-visible .jas-img {
          transform: scale(1.04);
        }

        /* Text Container */
        .jas-text-wrapper {
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
          overflow: hidden; /* Clips the rising button to smoothly reveal from below */
        }

        /* The Mover Div (Handles the upward shift of title & description) */
        .jas-content-mover {
          transition: transform 0.35s ease-out;
          transform: translateY(0);
        }

        .jas-card:hover .jas-content-mover,
        .jas-card:focus-visible .jas-content-mover {
          transform: translateY(-4px);
        }

        .jas-title {
          font-size: 1.08rem;
          font-weight: 700;
          color: #0b1c2c;
          margin: 0 0 5px 0;
          line-height: 1.3;
          transition: color 0.3s ease-out;
        }

        :global(.dark) .jas-title {
          color: #ffffff;
        }

        .jas-card:hover .jas-title {
          color: #2F7D16;
        }
        :global(.dark) .jas-card:hover .jas-title {
          color: #72d919;
        }

        .jas-desc {
          font-size: 0.78rem;
          color: #4a5568;
          line-height: 1.45;
          margin: 0;
        }

        :global(.dark) .jas-desc {
          color: #cbd5e1;
        }

        /* Action Wrapper & Button: Rising smoothly with fade-in */
        .jas-action-wrapper {
          margin-top: 6px;
          height: 28px;
          display: flex;
          align-items: center;
        }

        .jas-read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #123B13;
          background: #EAF5D8;
          border: 1px solid rgba(47, 125, 22, 0.25);
          padding: 4px 10px;
          border-radius: 9999px;
          opacity: 0;
          transform: translateY(18px);
          transition: transform 0.35s ease-out,
                      opacity 0.35s ease-out,
                      background-color 0.25s ease,
                      color 0.25s ease;
          pointer-events: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        :global(.dark) .jas-read-more-btn {
          background: rgba(18, 42, 22, 0.9);
          border-color: rgba(114, 217, 25, 0.4);
          color: #72d919;
        }

        .jas-arrow {
          transition: transform 0.3s ease-out;
          font-size: 0.88rem;
          line-height: 1;
        }

        /* On Desktop Hover: Button smoothly translates upward with subtle fade-in */
        .jas-card:hover .jas-read-more-btn,
        .jas-card:focus-visible .jas-read-more-btn {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .jas-card:hover .jas-read-more-btn {
          background: #2F7D16;
          color: #ffffff;
          border-color: #2F7D16;
        }

        :global(.dark) .jas-card:hover .jas-read-more-btn {
          background: #72d919;
          color: #0b1014;
          border-color: #72d919;
        }

        .jas-card:hover .jas-arrow {
          transform: translateX(3px);
        }

        /* Mobile & Touch Devices: keep button naturally visible without requiring hover */
        @media (max-width: 768px) {
          .jas-read-more-btn {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .jas-img,
          .jas-content-mover,
          .jas-read-more-btn,
          .jas-arrow {
            transition: none !important;
            transform: none !important;
          }
          .jas-read-more-btn {
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};
