import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductExplorer } from "@/components/home/ProductExplorer";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Products Catalog | Organic Fodder, Mushroom Spawn & IoT Controllers",
  description:
    "Explore JAS Agro's organic product catalog: Oyster Mushroom spawn bags, Azolla fodder cultures, Super Napier slips, organic vermicompost, and ESP32 smart farming controllers.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products Catalog | JAS Agro Cultivation Systems",
    description:
      "Explore certified Oyster Mushroom spawn, high-protein Azolla culture, Super Napier stems, and IoT climate controllers.",
    url: "https://www.jasagro.com/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FAFBF7] text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ProductExplorer />
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
