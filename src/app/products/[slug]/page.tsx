"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sprout,
  Thermometer,
  HelpCircle,
  Send,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"specs" | "cultivation" | "faqs">("specs");

  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-agro-darkest text-slate-100 flex flex-col justify-between">
        <Navbar />
        <div className="py-40 text-center space-y-4">
          <h1 className="text-4xl font-bold font-heading">Product Not Found</h1>
          <p className="text-slate-400">The requested agriculture solution does not exist.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-agro-emerald text-agro-darkest font-bold"
          >
            Return to Products Catalog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <div className="pt-28 pb-4 bg-slate-50 dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-slate-900 dark:hover:text-white">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-emerald-700 dark:text-emerald-400 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-12 bg-slate-50 dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Gallery Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-emerald-500/30 shadow-xl">
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/90 text-amber-700 dark:bg-slate-900/80 dark:text-amber-400 border border-amber-500/30 text-xs font-bold backdrop-blur-md shadow-sm">
                  {product.category}
                </div>
              </div>
            </div>

            {/* Product Overview Header */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                COMMERCIAL SOLUTION
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white leading-tight">
                {product.name}
              </h1>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Chhatraka External Portal Callout Banner */}
              {product.externalLink && (
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/40 flex items-center justify-between gap-4 shadow-sm">
                  <div className="space-y-0.5">
                    <div className="text-xs font-extrabold text-amber-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Dedicated Mushroom Portal
                    </div>
                    <div className="text-xs text-slate-700 dark:text-slate-200">
                      Explore detailed Oyster Mushroom cultivation, spawn supplies & research at Chhatraka.
                    </div>
                  </div>
                  <a
                    href={product.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs hover:bg-amber-400 transition-all flex items-center gap-1.5 flex-shrink-0 shadow-md"
                  >
                    Visit Chhatraka <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">Key Highlights:</h4>
                <div className="space-y-1.5">
                  {product.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="px-8 py-3.5 rounded-xl bg-emerald-600 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-emerald-600 text-white dark:text-slate-950 font-bold text-sm hover:bg-emerald-700 dark:hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-md"
                >
                  Request Commercial Quote <Send className="w-4 h-4" />
                </button>

                {product.externalLink && (
                  <a
                    href={product.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-white dark:bg-white/10 text-amber-700 dark:text-amber-400 font-bold text-sm hover:bg-slate-100 dark:hover:bg-white/20 border border-amber-300 dark:border-amber-500/30 transition-all flex items-center gap-2 shadow-sm"
                  >
                    Visit Chhatraka.com <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Specifications & Cultivation Guide Tabs */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
          {/* Tab Controls */}
          <div className="flex items-center gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "specs"
                  ? "bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 shadow-md"
                  : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              Technical Specifications
            </button>

            {product.cultivationGuide && (
              <button
                onClick={() => setActiveTab("cultivation")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "cultivation"
                    ? "bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 shadow-md"
                    : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                Cultivation & Growth Parameters
              </button>
            )}

            <button
              onClick={() => setActiveTab("faqs")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "faqs"
                  ? "bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 shadow-md"
                  : "bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
              }`}
            >
              Frequently Asked Questions ({product.faqs.length})
            </button>
          </div>

          {/* Specs Panel */}
          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg">Product Specifications</h3>
                <div className="divide-y divide-slate-200 dark:divide-white/10">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">{spec.label}</span>
                      <span className="text-slate-900 dark:text-white font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg">Applications & Target Use</h3>
                <ul className="space-y-3 text-xs sm:text-sm">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                      <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Cultivation Panel */}
          {activeTab === "cultivation" && product.cultivationGuide && (
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-amber-300 dark:border-amber-500/30 space-y-6 shadow-sm">
              <h3 className="font-heading font-bold text-slate-900 dark:text-white text-xl flex items-center gap-2">
                Ideal Micro-Climate Parameters <Thermometer className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center shadow-sm">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Target Temp</div>
                  <div className="text-lg font-bold font-mono text-amber-700 dark:text-amber-400 mt-1">
                    {product.cultivationGuide.temperature}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center shadow-sm">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Target Relative Humidity</div>
                  <div className="text-lg font-bold font-mono text-cyan-700 dark:text-cyan-400 mt-1">
                    {product.cultivationGuide.humidity}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center shadow-sm">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Harvest Cycle</div>
                  <div className="text-lg font-bold font-mono text-emerald-700 dark:text-emerald-400 mt-1">
                    {product.cultivationGuide.harvestCycle}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center shadow-sm">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Expected Yield</div>
                  <div className="text-lg font-bold font-mono text-slate-900 dark:text-white mt-1">
                    {product.cultivationGuide.yieldPotential}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQs Panel */}
          {activeTab === "faqs" && (
            <div className="space-y-4 max-w-3xl">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={product.name}
      />
    </main>
  );
}
