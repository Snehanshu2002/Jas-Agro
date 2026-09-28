"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Product } from "@/data/products";

export interface ProductCardProps {
  product: Product;
  onQuoteRequest?: (productName: string) => void;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuoteRequest,
  index = 0,
}) => {
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const title = isHindi ? product.nameHi || product.name : product.name;
  const category = isHindi ? product.categoryHi || product.category : product.category;
  const shortDesc = isHindi ? product.shortDescriptionHi || product.shortDescription : product.shortDescription;
  const primaryFeature = isHindi && product.keyFeaturesHi ? product.keyFeaturesHi[0] : product.keyFeatures[0];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.06, 0.3),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-white dark:bg-slate-900/90 backdrop-blur-xl border border-emerald-950/10 dark:border-slate-800 hover:border-emerald-500/50 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-emerald-500"
    >
      <div>
        {/* Media Frame */}
        <div className="relative h-60 w-full overflow-hidden bg-slate-950">
          <img
            src={product.heroImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 filter brightness-95"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/90 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold backdrop-blur-md shadow-glow-gold">
            {category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors line-clamp-1">
            {title}
          </h3>

          <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed line-clamp-2 font-normal">
            {shortDesc}
          </p>

          {/* Key Feature Pill */}
          {primaryFeature && (
            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono font-bold text-emerald-900 dark:text-emerald-400 bg-emerald-100/90 dark:bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-300/80 dark:border-emerald-500/30 line-clamp-1">
                {primaryFeature}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Action CTA Row */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3">
        <Link
          href={`/products/${product.slug}`}
          className="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold text-center border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
        >
          <span>{t("learnMore")}</span>
          <ArrowRight className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {onQuoteRequest && (
          <button
            type="button"
            onClick={() => onQuoteRequest(product.name)}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-xs transition-all duration-200 shadow-glow hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
          >
            <span>{t("getQuote")}</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};
