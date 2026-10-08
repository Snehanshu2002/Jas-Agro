"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/data/insights";
import Link from "next/link";
import { ArrowRight, Clock } from "react-feather";
import { useLanguage } from "@/context/LanguageContext";

export default function InsightsPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FAFAF5] text-[#111811] dark:bg-[#0D230E] dark:text-[#FAFAF5] transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 pb-12 overflow-hidden bg-[#FAFAF5] dark:bg-[#0D230E] border-b border-[#123B13]/10 dark:border-[#B8F21B]/15">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-wider">
            <span>{language === "hi" ? "BLOGS & GUIDES" : "KNOWLEDGE & RESEARCH"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5] tracking-tight leading-tight">
            {language === "hi" ? "Agri-Tech & " : "Agri-Tech & "}
            <span className="bg-gradient-to-r from-[#123B13] via-[#2F7D16] to-[#4F9D1F] dark:from-[#B8F21B] dark:via-[#4F9D1F] dark:to-[#EAF5D8] bg-clip-text text-transparent">
              {language === "hi" ? "Smart Farming Blogs" : "Sustainable Insights"}
            </span>
          </h1>
          <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "hi"
              ? "Mushroom farming, Azolla fodder और IoT automation पर practical guides और updates।"
              : "Practical guides and scientific research on mushroom grow rooms, fodder biomass, and IoT telemetry."}
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F4F8EC] dark:bg-[#0B170C]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => {
              const title = language === "hi" ? post.titleHi || post.title : post.title;
              const category = language === "hi" ? post.categoryHi || post.category : post.category;
              const excerpt = language === "hi" ? post.excerptHi || post.excerpt : post.excerpt;
              const readTime = language === "hi" ? post.readTimeHi || post.readTime : post.readTime;

              return (
                <div
                  key={post.id}
                  className="bg-white dark:bg-[#123B13]/90 border border-[#123B13]/10 dark:border-[#1B4D1C] rounded-3xl overflow-hidden hover:border-[#2F7D16]/50 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-[#EAF5D8] dark:bg-[#0D230E]">
                      <img
                        src={post.image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[#123B13] dark:bg-[#0D230E]/90 dark:text-[#B8F21B] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-xs font-mono font-bold backdrop-blur-md shadow-xs">
                        {category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-4 text-xs font-mono text-[#5A6E59] dark:text-[#A3C2A1]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B]" /> {readTime}
                        </span>
                        <span>•</span>
                        <span>{post.publishedAt}</span>
                      </div>

                      <h3 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-lg group-hover:text-[#2F7D16] dark:group-hover:text-[#B8F21B] transition-colors line-clamp-2">
                        {title}
                      </h3>

                      <p className="text-xs text-[#5A6E59] dark:text-[#A3C2A1] line-clamp-3 leading-relaxed font-normal">
                        {excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F7D16] dark:text-[#B8F21B] hover:text-[#123B13] dark:hover:text-white transition-colors"
                    >
                      <span>{language === "hi" ? "पूरा पढ़ें" : "Read Article"}</span> <ArrowRight className="w-3.5 h-3.5" />
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
