import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProductExplorer } from "@/components/home/ProductExplorer";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { IoTDashboardSection } from "@/components/home/IoTDashboardSection";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { AgriAiAssistant } from "@/components/ui/AgriAiAssistant";

export const metadata: Metadata = {
  title: "JAS Agro | Agriculture, Reimagined • Smart Sustainable AgTech",
  description:
    "JAS Agro builds smarter farms through sustainable cultivation, gourmet Oyster Mushrooms, Azolla super-fodder, Hybrid Napier grass, organic vermicompost, and IoT precision telemetry.",
  keywords: [
    "JAS Agro",
    "Smart Farming",
    "Oyster Mushroom Cultivation",
    "Azolla Fodder",
    "Napier Grass",
    "Vermicompost",
    "IoT Farming",
    "Sustainable Agriculture",
  ],
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFBF7] dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <HeroSection />

      {/* 3. JAS Agro Introduction */}
      <AboutSection />

      {/* 4. Core Products */}
      <ProductExplorer />

      {/* 5. Agricultural Solutions */}
      <SolutionsSection />

      {/* 6. Smart Farming / IoT */}
      <IoTDashboardSection />

      {/* 7. Sustainable Agriculture */}
      <SustainabilitySection />

      {/* 8. Facilities / Operations */}
      <FacilitiesSection />

      {/* 9. Insights */}
      <InsightsSection />

      {/* 10. Final CTA */}
      <CtaSection />

      {/* 11. Footer */}
      <Footer />

      {/* Ambient Assistant */}
      <AgriAiAssistant />
    </main>
  );
}

