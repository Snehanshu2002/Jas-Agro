"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface SolutionItem {
  titleEn: string;
  titleHi: string;
  slug: string;
  categoryEn: string;
  categoryHi: string;
  descriptionEn: string;
  descriptionHi: string;
  image: string;
  badgeEn: string;
  badgeHi: string;
  icon: LucideIcon;
  externalLink?: string;
}

export interface SolutionCardProps {
  solution: SolutionItem;
  onQuoteRequest?: (solutionName: string) => void;
  index?: number;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  onQuoteRequest,
  index = 0,
}) => {
  const { language, t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const IconComp = solution.icon;
  const title = isHindi ? solution.titleHi : solution.titleEn;
  const category = isHindi ? solution.categoryHi : solution.categoryEn;
  const desc = isHindi ? solution.descriptionHi : solution.descriptionEn;
  const badge = isHindi ? solution.badgeHi : solution.badgeEn;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.07, 0.3),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-950 border border-emerald-950/10 dark:border-slate-800 hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl shadow-sm focus-within:ring-2 focus-within:ring-emerald-500"
    >
      {/* Top Media / Icon Box */}
      <div className="relative h-56 w-full overflow-hidden bg-[#eef4ea] dark:bg-slate-900 flex items-center justify-center p-4">
        <img
          src={solution.image}
          alt={title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Feature/Yield Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-emerald-800 dark:bg-slate-900/90 dark:text-emerald-400 border border-emerald-500/40 text-xs font-bold backdrop-blur-md shadow-sm">
          {badge}
        </div>

        {/* Floating Sector Icon Badge */}
        <div className="absolute bottom-3 left-4 p-2 rounded-xl bg-emerald-600 text-white shadow-md">
          <IconComp className="w-5 h-5" />
        </div>
      </div>

      {/* Content Box */}
      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs text-amber-700 dark:text-amber-400 font-semibold uppercase tracking-wider flex items-center justify-between">
            <span>{category}</span>
            {solution.externalLink && (
              <a
                href={solution.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-0.5 font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
              >
                Chhatraka <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
          </span>

          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mt-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
            {title}
          </h3>

          <p className="text-slate-700 dark:text-slate-300 text-xs leading-relaxed mt-2 font-normal line-clamp-2">
            {desc}
          </p>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-emerald-950/10 dark:border-slate-800 flex items-center justify-between gap-2">
          <Link
            href={`/products/${solution.slug}`}
            className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <span>{t("learnMore")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {solution.externalLink ? (
            <a
              href={solution.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-800 dark:text-amber-400 border border-amber-500/40 hover:bg-amber-500 hover:text-slate-950 text-[11px] font-bold transition-all flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>Chhatraka</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          ) : (
            onQuoteRequest && (
              <button
                type="button"
                onClick={() => onQuoteRequest(title)}
                className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-[11px] font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
              >
                <span>{t("getQuote")}</span>
              </button>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};
