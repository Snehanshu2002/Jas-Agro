"use client";

import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/insights";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronRight, Clock, ArrowLeft, Tag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface InsightDetailProps {
  params: {
    slug: string;
  };
}

export default function InsightDetailPage({ params }: InsightDetailProps) {
  const { language } = useLanguage();
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col justify-between">
        <Navbar />
        <div className="py-40 text-center space-y-4">
          <h1 className="text-4xl font-bold font-heading">
            {language === "hi" ? "लेख नहीं मिला" : "Article Not Found"}
          </h1>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold"
          >
            {language === "hi" ? "सभी लेखों पर वापस जाएँ" : "Back to Insights"}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const title = language === "hi" ? post.titleHi || post.title : post.title;
  const category = language === "hi" ? post.categoryHi || post.category : post.category;
  const readTime = language === "hi" ? post.readTimeHi || post.readTime : post.readTime;
  const content = language === "hi" && post.contentHi ? post.contentHi : post.content;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <div className="pt-28 pb-4 bg-slate-50 dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white">
              {language === "hi" ? "मुख्य पृष्ठ" : "Home"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/insights" className="hover:text-slate-900 dark:hover:text-white">
              {language === "hi" ? "अंतर्दृष्टि" : "Insights"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-emerald-700 dark:text-emerald-400 font-medium truncate">{title}</span>
          </div>
        </div>
      </div>

      <article className="py-16 max-w-4xl mx-auto px-4 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
              {category}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> {readTime}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">• {post.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white leading-tight">
            {title}
          </h1>
        </div>

        <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl h-80 sm:h-96">
          <img src={post.image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 text-slate-700 dark:text-slate-300 text-base leading-relaxed shadow-sm">
          {content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-4">
          <Tag className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="pt-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 dark:hover:bg-white/10 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "hi" ? "सभी लेखों की सूची पर वापस जाएँ" : "Back to Insights Catalog"}
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
