"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { BlogPost } from "@/data/insights";

export interface InsightCardProps {
  post: BlogPost;
  index?: number;
}

export const InsightCard: React.FC<InsightCardProps> = ({
  post,
  index = 0,
}) => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const title = isHindi ? post.titleHi || post.title : post.title;
  const category = isHindi ? post.categoryHi || post.category : post.category;
  const excerpt = isHindi ? post.excerptHi || post.excerpt : post.excerpt;
  const readTime = isHindi ? post.readTimeHi || post.readTime : post.readTime;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-white dark:bg-[#123B13] border border-[#2F7D16]/15 dark:border-[#1B4D1C] rounded-3xl overflow-hidden hover:border-[#B8F21B]/70 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#B8F21B]"
    >
      <div>
        {/* Cover Image Frame */}
        <div className="relative h-48 w-full overflow-hidden bg-[#0D230E]">
          <img
            src={post.image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[#123B13] dark:bg-[#123B13]/90 dark:text-[#B8F21B] border border-[#2F7D16]/30 dark:border-[#B8F21B]/40 text-xs font-bold backdrop-blur-md shadow-sm">
            {category}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-4 text-xs text-[#5A6E59] dark:text-[#A3C2A1]">
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B]" /> {readTime}
            </span>
            <span>•</span>
            <span className="font-mono">{post.publishedAt}</span>
          </div>

          <h3 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-lg group-hover:text-[#2F7D16] dark:group-hover:text-[#B8F21B] transition-colors line-clamp-2">
            {title}
          </h3>

          <p className="text-xs text-[#5A6E59] dark:text-[#A3C2A1] line-clamp-3 leading-relaxed font-normal">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0">
        <Link
          href={`/insights/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F7D16] dark:text-[#B8F21B] hover:text-[#123B13] dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B8F21B] rounded p-1"
        >
          <span>{isHindi ? "पूरा लेख पढ़ें" : "Read Full Article"}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
