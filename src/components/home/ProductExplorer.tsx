"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PRODUCTS } from "@/data/products";
import { Search, Sparkles } from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { ProductCard } from "@/components/ui/ProductCard";
import { useLanguage } from "@/context/LanguageContext";

export const ProductExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | null>(null);
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    { id: "All", labelEn: "ALL SOLUTIONS", labelHi: "सभी प्रोडक्ट्स" },
    { id: "Mushroom", labelEn: "MUSHROOM", labelHi: "मशरूम" },
    { id: "Azolla", labelEn: "AZOLLA", labelHi: "अजोला" },
    { id: "Napier Grass", labelEn: "NAPIER GRASS", labelHi: "नेपियर घास" },
    { id: "Vermicompost", labelEn: "VERMICOMPOST", labelHi: "वर्मीकंपोस्ट" },
    { id: "IoT Smart Farming", labelEn: "IOT SMART FARMING", labelHi: "IoT स्मार्ट फार्मिंग" },
  ];

  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesCategory = activeCategory === "All" || prod.category === activeCategory;
    const matchesQuery =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F3F6EE] dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-b border-emerald-950/10 dark:border-slate-800/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-4 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/90 border border-emerald-300/80 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>{language === "hi" ? "सॉल्यूशंस & कैटलॉग" : "SOLUTIONS SHOWCASE"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
              {language === "hi" ? "हमारे स्मार्ट " : "EXPLORE OUR "}
              <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
                {language === "hi" ? "प्रोडक्ट्स और सॉल्यूशंस" : "CULTIVATION SYSTEMS."}
              </span>
            </h2>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={language === "hi" ? "प्रोडक्ट सर्च करें..." : "Search solutions..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-600 shadow-sm transition-all placeholder-slate-500 font-mono"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const label = language === "hi" ? cat.labelHi : cat.labelEn;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-sm border border-emerald-600"
                    : "bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-400 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/40 hover:text-slate-900 dark:hover:text-white shadow-sm"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid - Editorial Focus */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-white dark:bg-slate-900/80 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-700 dark:text-slate-400 text-sm">
              {language === "hi" ? "कोई प्रोडक्ट नहीं मिला।" : "No solutions match your search filters."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                index={idx}
                onQuoteRequest={(name) => setSelectedProductForQuote(name)}
              />
            ))}
          </div>
        )}
      </div>

      <QuoteModal
        isOpen={!!selectedProductForQuote}
        onClose={() => setSelectedProductForQuote(null)}
        defaultProduct={selectedProductForQuote || undefined}
      />
    </section>
  );
};
