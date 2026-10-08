"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteModal } from "@/components/ui/QuoteModal";
import { ProductSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { useLanguage } from "@/context/LanguageContext";
import {
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Feather as FeatherIcon,
  Thermometer,
  HelpCircle,
  Send,
  ExternalLink,
  Sun,
} from "react-feather";

interface ProductDetailProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const { language } = useLanguage();
  const isHindi = language === "hi";
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"specs" | "cultivation" | "faqs">("specs");

  const slugAliases: Record<string, string> = {
    "azolla-farming": "azolla",
    "azolla-super-fodder": "azolla",
    "azolla-production-system": "azolla",
    "hybrid-napier": "napier-grass",
    "hybrid-napier-grass": "napier-grass",
    "hybrid-napier-system": "napier-grass",
    "bio-vermicompost": "vermicompost",
    "vermicompost-system": "vermicompost",
    "smart-farming-iot": "iot-farm-controller",
    "iot-monitoring-system": "iot-farm-controller",
    "iot-telemetry-nodes": "iot-farm-controller",
    "oyster-mushroom-system": "oyster-mushroom",
  };
  const resolvedSlug = slugAliases[params.slug] || params.slug;
  const product = PRODUCTS.find((p) => p.slug === resolvedSlug);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#071508] text-slate-100 flex flex-col justify-between">
        <Navbar />
        <div className="py-40 text-center space-y-4">
          <h1 className="text-4xl font-bold font-heading">
            {isHindi ? "उत्पाद नहीं मिला" : "Product Not Found"}
          </h1>
          <p className="text-slate-400">
            {isHindi ? "अनुरोधित कृषि समाधान उपलब्ध नहीं है।" : "The requested agriculture solution does not exist."}
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#B8F21B] text-[#123B13] font-bold"
          >
            {isHindi ? "उत्पाद कैटलॉग पर लौटें" : "Return to Products Catalog"}
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const breadcrumbs = [
    { name: isHindi ? "मुख्य पृष्ठ" : "Home", url: "/" },
    { name: isHindi ? "उत्पाद" : "Products", url: "/products" },
    { name: product.name, url: `/products/${product.slug}` },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF5] text-[#111811] dark:bg-[#0D230E] dark:text-[#FAFAF5] transition-colors duration-300 overflow-x-hidden">
      <ProductSchema
        name={product.name}
        description={product.shortDescription}
        image={product.heroImage}
        sku={product.slug}
        url={`/products/${product.slug}`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Navbar />

      {/* Breadcrumb Navigation (Issue 2 fix: accessible text-xs sm:text-sm font) */}
      <div className="pt-28 pb-4 bg-[#FAFAF5] dark:bg-[#0D230E] border-b border-[#123B13]/10 dark:border-[#B8F21B]/15">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#5A6E59] dark:text-[#A3C2A1]">
            <Link href="/" className="hover:text-[#2F7D16] dark:hover:text-white transition-colors">
              {isHindi ? "मुख्य पृष्ठ" : "Home"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5A6E59]" />
            <Link href="/products" className="hover:text-[#2F7D16] dark:hover:text-white transition-colors">
              {isHindi ? "उत्पाद" : "Products"}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5A6E59]" />
            <span className="text-[#2F7D16] dark:text-[#B8F21B] font-bold" aria-current="page">{product.name}</span>
          </nav>
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
              {/* Issue 3 fix: Sentence/Title Case */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B] text-xs font-semibold">
                <span>{isHindi ? "व्यावसायिक कृषि समाधान" : "Commercial Solution"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5] leading-tight">
                {product.name}
              </h1>

              <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-base leading-relaxed font-normal">
                {product.fullDescription}
              </p>

              {/* Issue 5 fix: Natural placement of callout banner */}
              {product.externalLink && (
                <div className="p-4 rounded-2xl bg-[#EAF5D8]/70 dark:bg-[#123B13]/80 border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-[#123B13] dark:text-[#B8F21B] flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5" /> {isHindi ? "समर्पित मशरूम पोर्टल" : "Dedicated Mushroom Portal"}
                    </div>
                    <div className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">
                      {isHindi
                        ? "छत्रका पोर्टल पर ऑयस्टर मशरूम खेती, स्पॉन आपूर्ति एवं विस्तृत शोध देखें।"
                        : "Explore detailed Oyster Mushroom cultivation, spawn supplies & research at Chhatraka."}
                    </div>
                  </div>
                  <a
                    href={product.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#B8F21B] text-[#123B13] font-bold text-xs hover:bg-[#C8F93B] transition-all flex items-center gap-1.5 shrink-0 shadow-glow-lime self-start sm:self-auto"
                  >
                    {isHindi ? "छत्रका देखें" : "Visit Chhatraka"} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Issue 2 fix: Accessible min 12-14px font size for key highlights */}
              <div className="space-y-2 pt-2">
                <h2 className="text-xs font-bold text-[#2F7D16] dark:text-[#B8F21B] uppercase tracking-wider">
                  {isHindi ? "मुख्य विशेषताएं:" : "Key Highlights:"}
                </h2>
                <div className="space-y-2">
                  {product.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#111811]/90 dark:text-[#FAFAF5]/90">
                      <CheckCircle className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="px-8 py-3.5 rounded-full bg-[#B8F21B] hover:bg-[#C8F93B] text-[#123B13] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-glow-lime cursor-pointer"
                >
                  <span>{isHindi ? "व्यावसायिक कोटेशन प्राप्त करें" : "Request Commercial Quote"}</span> <Send className="w-4 h-4" />
                </button>

                {product.externalLink && (
                  <a
                    href={product.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full bg-white dark:bg-[#123B13] text-[#123B13] dark:text-[#B8F21B] font-bold text-xs sm:text-sm border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 hover:border-[#B8F21B] transition-all flex items-center gap-2 shadow-xs"
                  >
                    <span>Visit Chhatraka.com</span> <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Specifications & Cultivation Guide Tabs (Issue 7 fix: unified container connecting tabs to content) */}
      <section className="py-16 bg-[#F4F8EC] dark:bg-[#0B170C] border-t border-[#123B13]/10 dark:border-[#B8F21B]/15">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-[#123B13]/90 rounded-3xl border border-[#123B13]/10 dark:border-[#1B4D1C] p-6 sm:p-8 shadow-xs space-y-6">
            {/* Tab Controls */}
            <div className="flex flex-wrap items-center gap-3 border-b border-[#123B13]/10 dark:border-[#1B4D1C] pb-4">
              <button
                onClick={() => setActiveTab("specs")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "specs"
                    ? "bg-[#B8F21B] text-[#123B13] shadow-glow-lime font-extrabold"
                    : "bg-[#F4F8EC] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] border border-[#123B13]/10 dark:border-[#1B4D1C] hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C]"
                }`}
              >
                {isHindi ? "तकनीकी विशिष्टताएँ" : "Technical Specifications"}
              </button>

              {product.cultivationGuide && (
                <button
                  onClick={() => setActiveTab("cultivation")}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "cultivation"
                      ? "bg-[#B8F21B] text-[#123B13] shadow-glow-lime font-extrabold"
                      : "bg-[#F4F8EC] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] border border-[#123B13]/10 dark:border-[#1B4D1C] hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C]"
                  }`}
                >
                  {isHindi ? "खेती एवं विकास मानक" : "Cultivation & Growth Parameters"}
                </button>
              )}

              <button
                onClick={() => setActiveTab("faqs")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "faqs"
                    ? "bg-[#B8F21B] text-[#123B13] shadow-glow-lime font-extrabold"
                    : "bg-[#F4F8EC] dark:bg-[#0D230E] text-[#111811] dark:text-[#FAFAF5] border border-[#123B13]/10 dark:border-[#1B4D1C] hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C]"
                }`}
              >
                {isHindi ? `अक्सर पूछे जाने वाले प्रश्न (${product.faqs.length})` : `Frequently Asked Questions (${product.faqs.length})`}
              </button>
            </div>

          {/* Specs Panel */}
          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-[#123B13]/90 p-6 sm:p-8 rounded-3xl border border-[#123B13]/10 dark:border-[#1B4D1C] space-y-4 shadow-xs">
                <h3 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-lg">
                  {isHindi ? "उत्पाद विशिष्टताएँ (Specifications)" : "Product Specifications"}
                </h3>
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
                <h3 className="font-heading font-bold text-[#111811] dark:text-[#FAFAF5] text-lg">
                  {isHindi ? "अनुप्रयोग एवं लक्षित उपयोग" : "Applications & Target Use"}
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[#111811]/90 dark:text-[#FAFAF5]/90 font-normal">
                      <FeatherIcon className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] mt-0.5 flex-shrink-0" />
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
                {isHindi ? "आदर्श माइक्रो-क्लाइमेट मानक" : "Ideal Micro-Climate Parameters"} <Thermometer className="w-5 h-5 text-[#2F7D16] dark:text-[#B8F21B]" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#123B13]/10 dark:border-[#1B4D1C] text-center shadow-xs">
                  <div className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">
                    {isHindi ? "लक्षित तापमान" : "Target Temp"}
                  </div>
                  <div className="text-lg font-bold font-mono text-[#2F7D16] dark:text-[#B8F21B] mt-1">
                    {product.cultivationGuide.temperature}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#123B13]/10 dark:border-[#1B4D1C] text-center shadow-xs">
                  <div className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">
                    {isHindi ? "सापेक्ष आर्द्रता (RH)" : "Target Relative Humidity"}
                  </div>
                  <div className="text-lg font-bold font-mono text-[#2F7D16] dark:text-[#B8F21B] mt-1">
                    {product.cultivationGuide.humidity}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#123B13]/10 dark:border-[#1B4D1C] text-center shadow-xs">
                  <div className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">
                    {isHindi ? "फसल चक्र" : "Harvest Cycle"}
                  </div>
                  <div className="text-lg font-bold font-mono text-[#2F7D16] dark:text-[#B8F21B] mt-1">
                    {product.cultivationGuide.harvestCycle}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFAF5] dark:bg-[#0D230E] border border-[#123B13]/10 dark:border-[#1B4D1C] text-center shadow-xs">
                  <div className="text-xs text-[#5A6E59] dark:text-[#A3C2A1]">
                    {isHindi ? "अनुमानित उपज" : "Expected Yield"}
                  </div>
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
