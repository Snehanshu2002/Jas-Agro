"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IoTDashboardSection } from "@/components/home/IoTDashboardSection";
import { CtaSection } from "@/components/home/CtaSection";
import { useLanguage } from "@/context/LanguageContext";

export default function TechnologyPage() {
  const { language } = useLanguage();

  const techSpecs = [
    {
      labelEn: "Microcontroller Unit",
      labelHi: "Microcontroller Unit",
      valueEn: "ESP32-WROOM-32 32-Bit Dual-Core @ 240MHz",
      valueHi: "ESP32-WROOM-32 32-Bit Dual-Core @ 240MHz",
    },
    {
      labelEn: "Wireless Connectivity",
      labelHi: "Wireless Connectivity",
      valueEn: "Wi-Fi 802.11 b/g/n + 4G GSM SIM Fallback",
      valueHi: "Wi-Fi 802.11 b/g/n + 4G GSM SIM Backup",
    },
    {
      labelEn: "Temperature & Humidity Probe",
      labelHi: "Temperature & Humidity Sensors",
      valueEn: "DHT22 / SHT31 Calibrated Digital Sensor",
      valueHi: "DHT22 / SHT31 Digital Sensors",
    },
    {
      labelEn: "Soil & Water Probe",
      labelHi: "Soil & Water Probes",
      valueEn: "Capacitive Corrosion-Resistant Probe",
      valueHi: "Capacitive Corrosion-Resistant Probes",
    },
    {
      labelEn: "Relay Controller",
      labelHi: "Relay Controller",
      valueEn: "Opto-Isolated 4-Channel Relay Matrix",
      valueHi: "4-Channel Relay Matrix",
    },
    {
      labelEn: "Mobile Notifications",
      labelHi: "Mobile Alerts",
      valueEn: "Automated WhatsApp API & SMS Gateway Alerts",
      valueHi: "Automatic WhatsApp & SMS Alerts",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFBF7] text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 pb-12 overflow-hidden bg-[#FAFBF7] dark:bg-[#0B0F17] border-b border-emerald-950/10 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100/90 dark:bg-cyan-950/80 border border-cyan-300/80 dark:border-cyan-500/40 text-cyan-900 dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
            <span>{language === "hi" ? "SMART AGRI-TECH IOT" : "SMART FARM TELEMETRY"}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            {language === "hi" ? "Smart Tech for " : "Technology That "}
            <span className="bg-gradient-to-r from-teal-700 via-cyan-600 to-emerald-700 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
              {language === "hi" ? "Precision Farming" : "Works With Nature"}
            </span>
          </h1>
          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "hi"
              ? "Sensor network और automation द्वारा climate risks को ख़त्म करना।"
              : "Eliminating climate risk in agriculture with micro-controller telemetry and sensor nodes."}
          </p>
        </div>
      </section>

      <IoTDashboardSection />

      <section className="py-16 bg-[#FAFBF7] dark:bg-[#0B0F17] border-t border-emerald-950/10 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white">
              {language === "hi" ? "Hardware & Controller Specifications" : "Hardware & Controller Specifications"}
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm font-normal">
              {language === "hi" ? "High humidity grow rooms और outdoor farm environments के लिए बने industrial grade components।" : "Industrial-grade components built for high-humidity grow rooms and outdoor farm environments."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSpecs.map((spec, idx) => {
              const label = language === "hi" ? spec.labelHi : spec.labelEn;
              const value = language === "hi" ? spec.valueHi : spec.valueEn;

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900/90 p-6 rounded-3xl border border-emerald-950/10 dark:border-slate-800 space-y-2 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-teal-800 dark:text-cyan-400">
                    {label}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">{value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  );
}
