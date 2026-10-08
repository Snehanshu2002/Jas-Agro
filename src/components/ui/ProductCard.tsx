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
      className="h-full bg-white dark:bg-[#123B13]/90 backdrop-blur-xl border border-[#2F7D16]/15 dark:border-[#1B4D1C] hover:border-[#B8F21B]/70 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#B8F21B]"
    >
      <div>
        {/* Media Frame */}
        <div className="relative h-60 w-full overflow-hidden bg-[#0D230E]">
          <img
            src={product.heroImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 filter brightness-95"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D230E]/90 via-[#0D230E]/20 to-transparent pointer-events-none" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#123B13]/90 text-[#B8F21B] border border-[#B8F21B]/40 text-xs font-mono font-bold backdrop-blur-md shadow-sm">
            {category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold font-heading text-[#111811] dark:text-[#FAFAF5] group-hover:text-[#2F7D16] dark:group-hover:text-[#B8F21B] transition-colors line-clamp-1">
            {title}
          </h3>

          <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-xs leading-relaxed line-clamp-2 font-normal">
            {shortDesc}
          </p>

          {/* Key Feature Pill */}
          {primaryFeature && (
            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono font-bold text-[#123B13] dark:text-[#B8F21B] bg-[#EAF5D8] dark:bg-[#1B4D1C] px-3 py-1 rounded-lg border border-[#2F7D16]/20 dark:border-[#B8F21B]/30 line-clamp-1">
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
          className="flex-1 py-3 rounded-2xl bg-[#F4F8EC] hover:bg-[#EAF5D8] dark:bg-[#1B4D1C] dark:hover:bg-[#123B13] text-[#111811] dark:text-[#FAFAF5] text-xs font-bold text-center border border-[#2F7D16]/15 dark:border-[#1B4D1C] transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#B8F21B] focus-visible:outline-none"
        >
          <span>{t("learnMore")}</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B] group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {onQuoteRequest && (
          <button
            type="button"
            onClick={() => onQuoteRequest(product.name)}
            className="px-5 py-3 rounded-2xl bg-[#B8F21B] hover:bg-[#C8F93B] text-[#123B13] font-extrabold text-xs transition-all duration-200 shadow-md border border-[#A6E015] hover:scale-[1.02] active:scale-[0.98] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B8F21B] focus-visible:outline-none"
          >
            <span>{t("getQuote")}</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};
