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
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0B0F17] dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-16 overflow-hidden bg-slate-50 dark:bg-[#0B0F17] border-b border-slate-200 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            {language === "hi" ? "SMART AGRI-TECH IOT" : "SMART FARM TELEMETRY"}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {language === "hi" ? "Smart Tech for " : "Technology That "}
            <span className="text-cyan-600 dark:text-cyan-400">
              {language === "hi" ? "Precision Farming" : "Works With Nature"}
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            {language === "hi"
              ? "Sensor network और automation द्वारा climate risks को ख़त्म करना।"
              : "Eliminating climate risk in agriculture with micro-controller telemetry and sensor nodes."}
          </p>
        </div>
      </section>

      <IoTDashboardSection />

      <section className="py-20 bg-slate-50 dark:bg-[#0B0F17] border-t border-slate-200 dark:border-slate-800/80">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-bold font-heading text-slate-900 dark:text-white">
              {language === "hi" ? "Hardware & Controller Specifications" : "Hardware & Controller Specifications"}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
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
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    {label}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{value}</div>
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
