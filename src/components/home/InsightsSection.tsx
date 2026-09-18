"use client";

import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/insights";
import { ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const InsightsSection: React.FC = () => {
  const { language } = useLanguage();
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-6 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-4 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
              {language === "hi" ? "Blogs & Guides" : "KNOWLEDGE & RESEARCH"}
            </div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
              {language === "hi" ? "Agri " : "Agricultural "}
              <span className="text-emerald-600 dark:text-emerald-400">
                {language === "hi" ? "Insights & Blogs" : "Insights"}
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base max-w-xl">
              {language === "hi"
                ? "Smart farming, Mushroom cultivation और green fodder पर उपयोगी जानकारी और गाइड्स।"
                : "Latest articles on smart farming telemetry, mushroom biology, and fodder optimization."}
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            {language === "hi" ? "सभी Blogs देखें" : "View All Articles"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => {
            const title = language === "hi" ? post.titleHi || post.title : post.title;
            const category = language === "hi" ? post.categoryHi || post.category : post.category;
            const excerpt = language === "hi" ? post.excerptHi || post.excerpt : post.excerpt;
            const readTime = language === "hi" ? post.readTimeHi || post.readTime : post.readTime;

            return (
              <div
                key={post.id}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-emerald-700 dark:bg-slate-900/80 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold backdrop-blur-md shadow-sm">
                      {category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> {readTime}
                      </span>
                      <span>•</span>
                      <span>{post.publishedAt}</span>
                    </div>

                    <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                  >
                    {language === "hi" ? "पूरा लेख पढ़ें" : "Read Full Article"} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
