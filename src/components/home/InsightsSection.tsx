"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BLOG_POSTS } from "@/data/insights";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { InsightCard } from "@/components/ui/InsightCard";

export const InsightsSection: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBF7] dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-emerald-950/10 dark:border-slate-800">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-500/10 border border-emerald-300/80 dark:border-emerald-500/30 text-emerald-900 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
              {language === "hi" ? "Blogs & Guides" : "KNOWLEDGE & RESEARCH"}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
              {language === "hi" ? "Agri " : "Agricultural "}
              <span className="text-emerald-700 dark:text-emerald-400">
                {language === "hi" ? "Insights & Blogs" : "Insights"}
              </span>
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-base max-w-xl">
              {language === "hi"
                ? "Smart farming, Mushroom cultivation और green fodder पर उपयोगी जानकारी और गाइड्स।"
                : "Latest articles on smart farming telemetry, mushroom biology, and fodder optimization."}
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            {language === "hi" ? "सभी Blogs देखें" : "View All Articles"} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, idx) => (
            <InsightCard key={post.id} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

