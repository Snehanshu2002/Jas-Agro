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
    <main className="min-h-screen bg-[#FAFAF5] text-[#111811] dark:bg-[#0D230E] dark:text-[#FAFAF5] transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <div className="pt-28 pb-4 bg-[#FAFAF5] dark:bg-[#0D230E] border-b border-[#123B13]/10 dark:border-[#B8F21B]/15">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#5A6E59] dark:text-[#A3C2A1]">
            <Link href="/" className="hover:text-[#2F7D16] dark:hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5A6E59]" />
            <Link href="/products" className="hover:text-[#2F7D16] dark:hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5A6E59]" />
            <span className="text-[#2F7D16] dark:text-[#B8F21B] font-bold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero Section */}
      <section className="py-12 bg-[#FAFAF5] dark:bg-[#0D230E] border-b border-[#123B13]/10 dark:border-[#B8F21B]/15">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Gallery Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#123B13]/10 dark:border-[#1B4D1C] shadow-md bg-[#EAF5D8] dark:bg-[#123B13]">
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-white/95 text-[#123B13] dark:bg-[#0D230E]/90 dark:text-[#B8F21B] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-xs font-bold backdrop-blur-md shadow-xs">
                  {product.category}
                </div>
              </div>
            </div>

            {/* Product Overview Header */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-wider">
                <span>COMMERCIAL SOLUTION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5] leading-tight">
                {product.name}
              </h1>

              <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-base leading-relaxed font-normal">
                {product.fullDescription}
              </p>

              {/* Chhatraka External Portal Callout Banner */}
              {product.externalLink && (
                <div className="p-4 rounded-2xl bg-[#EAF5D8]/70 dark:bg-[#123B13]/80 border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 flex items-center justify-between gap-4 shadow-xs">
                  <div className="space-y-0.5">
                    <div className="text-xs font-extrabold text-[#123B13] dark:text-[#B8F21B] uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <Sparkles className="w-3.5 h-3.5" /> Dedicated Mushroom Portal
                    </div>
                    <div className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">
                      Explore detailed Oyster Mushroom cultivation, spawn supplies & research at Chhatraka.
                    </div>
                  </div>
                  <a
                    href={product.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#B8F21B] text-[#123B13] font-extrabold text-xs hover:bg-[#C8F93B] transition-all flex items-center gap-1.5 flex-shrink-0 shadow-glow-lime"
                  >
                    Visit Chhatraka <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-[#2F7D16] dark:text-[#B8F21B] uppercase tracking-wider">Key Highlights:</h4>
                <div className="space-y-1.5">
                  {product.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#111811]/90 dark:text-[#FAFAF5]/90">
                      <CheckCircle2 className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="px-8 py-3.5 rounded-xl bg-[#B8F21B] hover:bg-[#C8F93B] text-[#123B13] font-bold text-sm transition-all flex items-center gap-2 shadow-glow-lime cursor-pointer"
                >
                  <span>Request Commercial Quote</span> <Send className="w-4 h-4" />
                </button>

                {product.externalLink && (
                  <a
                    href={product.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-white dark:bg-[#123B13] text-[#123B13] dark:text-[#B8F21B] font-bold text-sm border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 hover:border-[#B8F21B] transition-all flex items-center gap-2 shadow-xs"
                  >
                    <span>Visit Chhatraka.com</span> <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Specifications & Cultivation Guide Tabs */}
      <section className="py-16 bg-[#F4F8EC] dark:bg-[#0B170C] border-t border-[#123B13]/10 dark:border-[#B8F21B]/15">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8 max-w-6xl mx-auto">
          {/* Tab Controls */}
          <div className="flex flex-wrap items-center gap-3 border-b border-[#123B13]/10 dark:border-[#1B4D1C] pb-4">
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "specs"
                  ? "bg-[#B8F21B] text-[#123B13] shadow-glow-lime font-extrabold"
                  : "bg-white dark:bg-[#123B13] text-[#111811] dark:text-[#FAFAF5] border border-[#123B13]/10 dark:border-[#1B4D1C] hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C]"
              }`}
            >
              Technical Specifications
            </button>

            {product.cultivationGuide && (
              <button
                onClick={() => setActiveTab("cultivation")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "cultivation"
                    ? "bg-[#B8F21B] text-[#123B13] shadow-glow-lime font-extrabold"
                    : "bg-white dark:bg-[#123B13] text-[#111811] dark:text-[#FAFAF5] border border-[#123B13]/10 dark:border-[#1B4D1C] hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C]"
                }`}
              >
                Cultivation & Growth Parameters
              </button>
            )}

            <button
              onClick={() => setActiveTab("faqs")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "faqs"
                  ? "bg-[#B8F21B] text-[#123B13] shadow-glow-lime font-extrabold"
                  : "bg-white dark:bg-[#123B13] text-[#111811] dark:text-[#FAFAF5] border border-[#123B13]/10 dark:border-[#1B4D1C] hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C]"
              }`}
            >
              Frequently Asked Questions ({product.faqs.length})
            </button>
          </div>

          {/* Specs Panel */}
          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-[#123B13]/90 p-6 sm:p-8 rounded-3xl border border-[#123B13]/10 dark:border-[#1B4D1C] space-y-4 shadow-xs">
                <h3 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-lg">Product Specifications</h3>
                <div className="divide-y divide-[#123B13]/10 dark:divide-[#1B4D1C]">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="py-3 flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-[#5A6E59] dark:text-[#A3C2A1] font-medium">{spec.label}</span>
                      <span className="text-[#111811] dark:text-[#FAFAF5] font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-[#123B13]/90 p-6 sm:p-8 rounded-3xl border border-[#123B13]/10 dark:border-[#1B4D1C] space-y-4 shadow-xs">
                <h3 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-lg">Applications & Target Use</h3>
                <ul className="space-y-3 text-xs sm:text-sm">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[#111811]/90 dark:text-[#FAFAF5]/90 font-normal">
                      <Sprout className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] mt-0.5 flex-shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Cultivation Panel */}
          {activeTab === "cultivation" && product.cultivationGuide && (
            <div className="bg-white dark:bg-[#123B13]/90 p-8 rounded-3xl border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 space-y-6 shadow-xs">
              <h3 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-xl flex items-center gap-2">
                Ideal Micro-Climate Parameters <Thermometer className="w-5 h-5 text-[#2F7D16] dark:text-[#B8F21B]" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#123B13]/10 dark:border-[#1B4D1C] text-center shadow-xs">
                  <div className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">Target Temp</div>
                  <div className="text-lg font-bold font-mono text-[#2F7D16] dark:text-[#B8F21B] mt-1">
                    {product.cultivationGuide.temperature}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#123B13]/10 dark:border-[#1B4D1C] text-center shadow-xs">
                  <div className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">Target Relative Humidity</div>
                  <div className="text-lg font-bold font-mono text-[#2F7D16] dark:text-[#B8F21B] mt-1">
                    {product.cultivationGuide.humidity}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#123B13]/10 dark:border-[#1B4D1C] text-center shadow-xs">
                  <div className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">Harvest Cycle</div>
                  <div className="text-lg font-bold font-mono text-[#2F7D16] dark:text-[#B8F21B] mt-1">
                    {product.cultivationGuide.harvestCycle}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#123B13]/10 dark:border-[#1B4D1C] text-center shadow-xs">
                  <div className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">Expected Yield</div>
                  <div className="text-lg font-bold font-mono text-[#111811] dark:text-[#FAFAF5] mt-1">
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
                <div key={idx} className="bg-white dark:bg-[#123B13]/90 p-6 rounded-2xl border border-[#123B13]/10 dark:border-[#1B4D1C] space-y-2 shadow-xs">
                  <h4 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B]" /> {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A6E59] dark:text-[#A3C2A1] leading-relaxed pl-6 font-normal">
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
