import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SHOP_PRODUCTS } from "@/data/shopProducts";
import { PRODUCTS } from "@/data/products";
import { BLOG_POSTS } from "@/data/insights";
import {
  Compass,
  ShoppingBag,
  Layers,
  Building2,
  Scale,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Tag,
  Package,
  FileCode,
  ShieldCheck,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "HTML Sitemap | JAS Agro - Full Website & Products Directory",
  description:
    "Explore the complete website structure of JAS Agro. Browse our e-commerce shop, organic foods, mushroom cultivation supplies, fodder crops, smart IoT solutions, and company information.",
  keywords: [
    "JAS Agro Sitemap",
    "Website Directory",
    "Shop Products List",
    "AgTech Solutions",
    "Organic Products Jaipur",
  ],
};

export default function SitemapPage() {
  const shopCategories = [
    { name: "All Store Products", href: "/shop", count: SHOP_PRODUCTS.length },
    {
      name: "Biscuits & Cookies",
      href: "/shop?category=Biscuits+%26+Cookies",
      count: SHOP_PRODUCTS.filter((p) => p.category === "Biscuits & Cookies").length,
    },
    {
      name: "Snacks & Khakhra",
      href: "/shop?category=Snacks+%26+Khakhra",
      count: SHOP_PRODUCTS.filter((p) => p.category === "Snacks & Khakhra").length,
    },
    {
      name: "Oyster Mushrooms",
      href: "/shop?category=Oyster+Mushrooms",
      count: SHOP_PRODUCTS.filter((p) => p.category === "Oyster Mushrooms").length,
    },
    {
      name: "Azolla Fodder",
      href: "/shop?category=Azolla+Fodder",
      count: SHOP_PRODUCTS.filter((p) => p.category === "Azolla Fodder").length,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-28 pb-12 sm:pb-16 bg-white dark:bg-[#0E131F] border-b border-slate-200 dark:border-slate-800/80 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold" aria-current="page">
              Sitemap
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold tracking-wider">
              <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>WEBSITE DIRECTORY & NAVIGATION MAP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
              Website Sitemap
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Quickly discover all pages, store products, agricultural solutions, company documentation, research articles, and customer care resources across JAS Agro.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>XML Search Engine Sitemap (sitemap.xml)</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sitemap Content */}
      <main className="py-12 sm:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* SECTION 1: Shop & Product Catalog */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    Shop & Retail Products
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Online store catalog, gourmet foods, and cultivation supplies
                  </p>
                </div>
              </div>

              <Link
                href="/shop"
                className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-bold hover:underline hidden sm:flex items-center gap-1"
              >
                <span>Visit Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Shop Categories Quick Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {shopCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="p-3.5 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group shadow-2xs flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cat.name}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 mt-2">
                    {cat.count} {cat.count === 1 ? "Product" : "Products"}
                  </span>
                </Link>
              ))}
            </div>

            {/* Dynamic Store Products Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                <span>All Store Product Pages ({SHOP_PRODUCTS.length})</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                {SHOP_PRODUCTS.map((prod) => (
                  <Link
                    key={prod.id}
                    href={`/shop/product/${prod.slug}`}
                    className="p-3.5 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 transition-all group shadow-2xs flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 p-1 shrink-0 border border-slate-100 dark:border-slate-800/80 flex items-center justify-center overflow-hidden">
                      <img
                        src={prod.img}
                        alt={prod.title}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {prod.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
                          ₹{prod.price}
                        </span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500 truncate">
                          {prod.unit}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Store Utilities */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <Link
                href="/shop/favourites"
                className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    Saved Favourites & Wishlist
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    View bookmarked farm products
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/shop"
                className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    Active Shopping Cart
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Manage cart quantities and order items
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/shop"
                className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    Express Checkout
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Fast 3-step secure order completion
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>

          {/* SECTION 2: B2B Commercial Cultivation & AgTech Solutions */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    Commercial Cultivation & AgTech Solutions
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Turnkey mushroom units, high-protein livestock fodder, and IoT telemetry
                  </p>
                </div>
              </div>

              <Link
                href="/solutions"
                className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-bold hover:underline hidden sm:flex items-center gap-1"
              >
                <span>View Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRODUCTS.map((sol) => (
                <Link
                  key={sol.id}
                  href={`/products/${sol.slug}`}
                  className="p-5 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group shadow-2xs space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        {sol.category}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {sol.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
                      {sol.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    <span>Explore Solution Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* AgTech Category Pages */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/solutions"
                className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    Commercial Solutions
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Turnkey farm pipelines & ROI models
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/products"
                className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    B2B Systems Directory
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Cultivation inputs & wholesale fodder
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/technology"
                className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    IoT Microclimate Automation
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Sensor nodes & cloud telemetry
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>

          {/* SECTION 3: Company & Research Insights */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    Company & Research Insights
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    About our mission, processing warehouse, sustainability, and knowledge articles
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Navigation Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <Link
                href="/"
                className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group shadow-2xs"
              >
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  Home (Corporate Overview)
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Introduction to sustainable farming and IoT solutions.
                </p>
              </Link>

              <Link
                href="/about"
                className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group shadow-2xs"
              >
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  About JAS Agro
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Our agricultural heritage, leadership, and facilities.
                </p>
              </Link>

              <Link
                href="/sustainability"
                className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group shadow-2xs"
              >
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  Sustainability & Carbon
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Eco-friendly practices, water saving, and soil restoration.
                </p>
              </Link>

              <Link
                href="/contact"
                className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group shadow-2xs"
              >
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  Contact & Locations
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Jaipur headquarters and Sangaria processing plant.
                </p>
              </Link>
            </div>

            {/* Research & Knowledge Articles */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Insights & Guides ({BLOG_POSTS.length} Articles)</span>
                </h3>
                <Link href="/insights" className="text-xs text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                  View All Insights →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {BLOG_POSTS.map((post) => (
                  <Link
                    key={post.id}
                    href={`/insights/${post.slug}`}
                    className="p-4 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group shadow-2xs space-y-1.5"
                  >
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                      {post.category} • {post.readTime}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: Legal & Policy Documentation */}
          <section className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                    Legal, Privacy & Compliance
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Statutory disclosures, consumer protection policies, and customer terms
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/privacy"
                className="p-5 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group shadow-2xs space-y-2"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  Privacy Policy
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  How we process and protect personal information under DPDP Act 2023.
                </p>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold inline-flex items-center gap-1 pt-1">
                  <span>Read Policy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/terms"
                className="p-5 rounded-2xl bg-white dark:bg-[#121826] border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group shadow-2xs space-y-2"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Scale className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  Terms of Service
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  E-commerce ordering, pricing, shipping, returns, and refunds terms.
                </p>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold inline-flex items-center gap-1 pt-1">
                  <span>Read Terms</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/sitemap"
                className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 transition-all group shadow-2xs space-y-2"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  HTML Sitemap
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Active directory of all public routes and retail listings on JAS Agro.
                </p>
                <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold inline-flex items-center gap-1 pt-1">
                  <span>Current Page</span>
                </span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
