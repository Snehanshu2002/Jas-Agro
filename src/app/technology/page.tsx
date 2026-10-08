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
      labelHi: "माइक्रोकंट्रोलर यूनिट",
      valueEn: "ESP32-WROOM-32 32-Bit Dual-Core @ 240MHz",
      valueHi: "ESP32-WROOM-32 32-Bit डुअल-कोर @ 240MHz",
    },
    {
      labelEn: "Wireless Connectivity",
      labelHi: "वायरलेस कनेक्टिविटी",
      valueEn: "Wi-Fi 802.11 b/g/n + 4G GSM SIM Fallback",
      valueHi: "Wi-Fi 802.11 b/g/n + 4G GSM सिम फॉलबैक",
    },
    {
      labelEn: "Temperature & Humidity Probe",
      labelHi: "तापमान व आर्द्रता सेंसर",
      valueEn: "DHT22 / SHT31 Calibrated Digital Sensor",
      valueHi: "DHT22 / SHT31 कैलिब्रेटेड डिजिटल सेंसर",
    },
    {
      labelEn: "Soil & Water Probe",
      labelHi: "मृदा व जल प्रोब",
      valueEn: "Capacitive Corrosion-Resistant Probe",
      valueHi: "कैपेसिटिव जंग-रोधी प्रोब (EC / नमी)",
    },
    {
      labelEn: "Relay Controller",
      labelHi: "रिले नियंत्रक मैट्रिक्स",
      valueEn: "Opto-Isolated 4-Channel Relay Matrix",
      valueHi: "ऑप्टो-आइसोलेटेड 4-चैनल रिले मैट्रिक्स",
    },
    {
      labelEn: "Mobile Notifications",
      labelHi: "मोबाइल अलर्ट व सूचनाएं",
      valueEn: "Automated WhatsApp API & SMS Gateway Alerts",
      valueHi: "स्वचालित व्हाट्सएप API एवं SMS गेटवे अलर्ट",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF5] text-[#111811] dark:bg-[#0D230E] dark:text-[#FAFAF5] transition-colors duration-300 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-28 pb-12 overflow-hidden bg-[#FAFAF5] dark:bg-[#0D230E] border-b border-[#123B13]/10 dark:border-[#B8F21B]/15">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF5D8] dark:bg-[#123B13] border border-[#2F7D16]/30 dark:border-[#B8F21B]/30 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold uppercase tracking-wider">
            <span>{language === "hi" ? "स्मार्ट एग्री-टेक आईओटी" : "SMART FARM TELEMETRY"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5] tracking-tight leading-tight">
            {language === "hi" ? "प्रकृति के साथ तालमेल बिठाने वाली " : "Technology That "}
            <span className="bg-gradient-to-r from-[#123B13] via-[#2F7D16] to-[#4F9D1F] dark:from-[#B8F21B] dark:via-[#4F9D1F] dark:to-[#EAF5D8] bg-clip-text text-transparent">
              {language === "hi" ? "सटीक तकनीक" : "Works With Nature"}
            </span>
          </h1>
          <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {language === "hi"
              ? "सेंसर नेटवर्क और ऑटोमेशन द्वारा जलवायु और माइक्रो-क्लाइमेट जोखिमों को पूरी तरह समाप्त करना।"
              : "Eliminating climate risk in agriculture with micro-controller telemetry and sensor nodes."}
          </p>
        </div>
      </section>

      <IoTDashboardSection />

      <section className="py-16 bg-[#F4F8EC] dark:bg-[#0B170C] border-t border-[#123B13]/10 dark:border-[#B8F21B]/15">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#111811] dark:text-[#FAFAF5]">
              {language === "hi" ? "हार्डवेयर और कंट्रोलर स्पेसिफिकेशन्स" : "Hardware & Controller Specifications"}
            </h2>
            <p className="text-[#5A6E59] dark:text-[#A3C2A1] text-sm font-normal">
              {language === "hi" ? "अत्यधिक नमी वाले ग्रो रूम्स और खुले कृषि वातावरण के लिए विशेष रूप से निर्मित इंडस्ट्रियल-ग्रेड उपकरण।" : "Industrial-grade components built for high-humidity grow rooms and outdoor farm environments."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSpecs.map((spec, idx) => {
              const label = language === "hi" ? spec.labelHi : spec.labelEn;
              const value = language === "hi" ? spec.valueHi : spec.valueEn;

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#123B13]/80 p-6 rounded-3xl border border-[#123B13]/10 dark:border-[#1B4D1C] space-y-2 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#2F7D16] dark:text-[#B8F21B]">
                    {label}
                  </div>
                  <div className="text-sm font-bold text-[#111811] dark:text-[#FAFAF5]">{value}</div>
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
