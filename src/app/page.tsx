import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { EcosystemLogoStrip } from "@/components/home/EcosystemLogoStrip";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProductExplorer } from "@/components/home/ProductExplorer";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { IoTDashboardSection } from "@/components/home/IoTDashboardSection";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { AgriAiAssistant } from "@/components/ui/AgriAiAssistant";
import { FAQSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "JAS Agro | Modern Agriculture. Sustainable Growth. Smarter Farming.",
  description:
    "India's premier smart sustainable agriculture enterprise. Commercial Oyster Mushroom cultivation, Azolla aquatic fodder, Super Napier grass, Bio-Vermicompost, and IoT automated grow chambers.",
  keywords: [
    "JAS Agro",
    "Smart Farming Jaipur",
    "Oyster Mushroom Cultivation Rajasthan",
    "Azolla Fodder Seeds",
    "Super Napier Grass",
    "Bio Vermicompost Fertilizer",
    "IoT Smart Farming Telemetry",
    "Sustainable Agriculture India",
    "Tudi Bales Supplier Sangaria",
  ],
  alternates: {
    canonical: "/",
  },
};

const HOME_FAQS = [
  {
    question: "What smart agricultural systems and turnkey setups does JAS Agro provide?",
    answer: "JAS Agro designs and installs commercial controlled-environment Oyster & Button Mushroom grow rooms, automated Azolla aquatic super-fodder cultivation pits, perennial High-Biomass Hybrid Napier grass plantations, and 100% biological Vermicompost production units with optional IoT climate automation.",
  },
  {
    question: "How does the IoT Smart Precision Farming & Telemetry system work?",
    answer: "Our IoT systems integrate industrial-grade soil moisture, relative humidity, temperature, and spore/CO2 telemetry sensors with micro-controllers to automatically trigger foggers, fans, and irrigation pumps when environmental thresholds deviate.",
  },
  {
    question: "Do you offer practical hands-on training for Mushroom Cultivation?",
    answer: "Yes, we conduct intensive practical workshops at our Jaipur Corporate AgTech Hub covering substrate pasteurization, pure culture spawn inoculation, climate regulation, disease management, and commercial market linkages.",
  },
  {
    question: "How do Azolla and Hybrid Napier Grass reduce dairy farming feed costs?",
    answer: "Azolla provides 25-30% bio-available crude protein that directly replaces expensive commercial cattle feed concentrates by 20-30%. Hybrid Napier yields 180+ tonnes per acre annually, ensuring continuous high-yield green fodder.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F8EE] dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      <FAQSchema items={HOME_FAQS} />
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <HeroSection />

      {/* 3. Technology & Ecosystem Logo Strip */}
      <EcosystemLogoStrip />

      {/* 4. JAS Agro Introduction */}
      <AboutSection />

      {/* The JAS Agro Advantage / Why Choose JAS Agro? */}
      <WhyChooseUs />

      {/* 5. Cultivation Systems */}
      <ProductExplorer />

      {/* 6. Core Offerings */}
      <SolutionsSection />

      {/* 7. Smart Farming / IoT */}
      <IoTDashboardSection />

      {/* 8. Sustainable Agriculture */}
      <SustainabilitySection />

      {/* 9. Facilities / Operations */}
      <FacilitiesSection />

      {/* 10. Frequently Asked Questions (FAQ) */}
      <FaqSection />

      {/* 11. Email Subscription / Insights */}
      <InsightsSection />

      {/* 12. Footer */}
      <Footer />

      {/* Ambient Assistant */}
      <AgriAiAssistant />
    </main>
  );
}

