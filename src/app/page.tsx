import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStatsSection } from "@/components/home/TrustStatsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FarmPipeline } from "@/components/home/FarmPipeline";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ProductExplorer } from "@/components/home/ProductExplorer";
import { SmartFarmEstimator } from "@/components/home/SmartFarmEstimator";
import { RoiCalculatorSection } from "@/components/home/RoiCalculatorSection";
import { MushroomFeature } from "@/components/home/MushroomFeature";
import { IotSimulationDashboard } from "@/components/home/IotSimulationDashboard";
import { BeforeAfterTransformation } from "@/components/home/BeforeAfterTransformation";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { CaseStudiesShowcase } from "@/components/home/CaseStudiesShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { InsightsSection } from "@/components/home/InsightsSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
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
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustStatsSection />
      <AboutSection />
      <FarmPipeline />
      <SolutionsSection />
      <ProductExplorer />
      <SmartFarmEstimator />
      <RoiCalculatorSection />
      <MushroomFeature />
      <IotSimulationDashboard />
      <BeforeAfterTransformation />
      <SustainabilitySection />
      <ImpactSection />
      <CaseStudiesShowcase />
      <WhyChooseUs />
      <InsightsSection />
      <TestimonialSection />
      <CtaSection />
      <Footer />
      <AgriAiAssistant />
    </main>
  );
}
