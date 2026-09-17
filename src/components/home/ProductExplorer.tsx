"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { useLanguage } from "@/context/LanguageContext";

export const ProductExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const categories = [
    { id: "All", labelEn: "ALL SOLUTIONS", labelHi: "सभी Products" },
    { id: "Mushroom", labelEn: "MUSHROOM", labelHi: "मशरूम" },
    { id: "Azolla", labelEn: "AZOLLA", labelHi: "अजोला" },
    { id: "Napier Grass", labelEn: "NAPIER GRASS", labelHi: "नेपियर घास" },
    { id: "Vermicompost", labelEn: "VERMICOMPOST", labelHi: "वर्मीकंपोस्ट" },
    { id: "IoT Smart Farming", labelEn: "IOT SMART FARMING", labelHi: "IoT Smart Farming" },
  ];

  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesCategory = activeCategory === "All" || prod.category === activeCategory;
    const matchesQuery =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="py-6 bg-white dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-b border-slate-200 dark:border-slate-800/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-4 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/90 border border-emerald-300 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest shadow-glow">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>{language === "hi" ? "SOLUTIONS & CATALOG" : "SOLUTIONS SHOWCASE"}</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-none">
              {language === "hi" ? "हमारे Smart " : "EXPLORE OUR "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-600 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
                {language === "hi" ? "Products और Solutions" : "CULTIVATION SYSTEMS."}
              </span>
            </h2>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-emerald-500 dark:text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={language === "hi" ? "Product search करें..." : "Search solutions..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-emerald-500 shadow-glass transition-all placeholder-slate-500 font-mono"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const label = language === "hi" ? cat.labelHi : cat.labelEn;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-glow border border-emerald-400/40"
                    : "bg-slate-100 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-800 hover:border-emerald-500/40 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid - Editorial Focus */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-slate-100 dark:bg-slate-900/80 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-glass">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {language === "hi" ? "कोई product नहीं मिला।" : "No solutions match your search filters."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-50 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 rounded-3xl overflow-hidden transition-all duration-500 flex flex-col justify-between group shadow-glass hover:shadow-glow-emerald hover:-translate-y-1.5"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden bg-slate-950">
                    <img
                      src={product.heroImage}
                      alt={language === "hi" ? product.nameHi : product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/90 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold backdrop-blur-md shadow-glow-gold">
                      {language === "hi" ? product.categoryHi || product.category : product.category}
                    </div>
                  </div>

                  {/* Body Content - Short Copy & Single Metric */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-extrabold font-heading text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                      {language === "hi" ? product.nameHi || product.name : product.name}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2 font-normal">
                      {language === "hi" ? product.shortDescriptionHi || product.shortDescription : product.shortDescription}
                    </p>

                    {/* Single Key Metric Highlight */}
                    <div className="pt-2">
                      <span className="inline-block text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-300 dark:border-emerald-500/30">
                        {product.keyFeatures[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 py-3 rounded-2xl bg-slate-200/80 dark:bg-slate-800/90 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold text-center border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                  >
                    {t("learnMore")} <ArrowRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </Link>

                  <button
                    onClick={() => setSelectedProductForQuote(product.name)}
                    className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-xs hover:from-emerald-400 hover:to-teal-500 transition-all shadow-glow cursor-pointer"
                  >
                    {t("getQuote")}
                  </button>
                </div>
              </div>
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
