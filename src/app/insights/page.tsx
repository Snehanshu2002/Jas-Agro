"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/data/insights";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function InsightsPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden bg-slate-50 dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            {language === "hi" ? "BLOGS & GUIDES" : "KNOWLEDGE & RESEARCH"}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {language === "hi" ? "Agri-Tech & " : "Agri-Tech & "}
            <span className="text-emerald-600 dark:text-emerald-400">
              {language === "hi" ? "Smart Farming Blogs" : "Sustainable Insights"}
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            {language === "hi"
              ? "Mushroom farming, Azolla fodder और IoT automation पर practical guides और updates।"
              : "Practical guides and scientific research on mushroom grow rooms, fodder biomass, and IoT telemetry."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-[#0B0F17]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => {
              const title = language === "hi" ? post.titleHi || post.title : post.title;
              const category = language === "hi" ? post.categoryHi || post.category : post.category;
              const excerpt = language === "hi" ? post.excerptHi || post.excerpt : post.excerpt;
              const readTime = language === "hi" ? post.readTimeHi || post.readTime : post.readTime;

              return (
                <div
                  key={post.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
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
                      {language === "hi" ? "पूरा पढ़ें" : "Read Article"} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
