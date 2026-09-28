"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cpu,
  Radio,
  Cloud,
  LayoutDashboard,
  Smartphone,
  Thermometer,
  Droplets,
  Sprout,
  Activity,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AgriIntelligenceCalculator } from "@/components/home/AgriIntelligenceCalculator";

export const IoTDashboardSection: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  const [sensors, setSensors] = useState({
    temp: 24.5,
    humidity: 86,
    soilMoisture: 72,
    lightLux: 450,
  });

  const [simulating, setSimulating] = useState(false);

  const triggerSimulatedReadings = () => {
    setSimulating(true);
    setTimeout(() => {
      setSensors({
        temp: Number((23 + Math.random() * 3).toFixed(1)),
        humidity: Math.floor(82 + Math.random() * 8),
        soilMoisture: Math.floor(70 + Math.random() * 8),
        lightLux: Math.floor(400 + Math.random() * 100),
      });
      setSimulating(false);
    }, 800);
  };

  const pipelineSteps = [
    {
      step: "01",
      nameEn: "Sensors & Probes",
      nameHi: "सेंसर एवं प्रोब",
      descEn: "DHT22 & Capacitive Probes measure micro-climate data.",
      descHi: "DHT22 सेंसर तापमान और नमी मापते हैं।",
      icon: Cpu,
    },
    {
      step: "02",
      nameEn: "IoT Gateway",
      nameHi: "IoT गेटवे",
      descEn: "ESP32 & Arduino nodes process real-time signals.",
      descHi: "ESP32 नोड रियल-टाइम सिग्नल प्रोसेस करते हैं।",
      icon: Radio,
    },
    {
      step: "03",
      nameEn: "Cloud Server",
      nameHi: "क्लाउड सर्वर",
      descEn: "Encrypted data transmitted via Wi-Fi / 4G GSM.",
      descHi: "सुरक्षित डेटा क्लाउड सर्वर पर भेजा जाता है।",
      icon: Cloud,
    },
    {
      step: "04",
      nameEn: "Web Dashboard",
      nameHi: "वेब डैशबोर्ड",
      descEn: "Analytics engine compiles telemetry trends.",
      descHi: "डैशबोर्ड टेलीमेट्री डेटा प्रदर्शित करता है।",
      icon: LayoutDashboard,
    },
    {
      step: "05",
      nameEn: "Farmer Mobile App",
      nameHi: "किसान मोबाइल ऐप",
      descEn: "Instant notifications & automated misting triggers.",
      descHi: "अलर्ट और स्वचालित सिंचाई नियंत्रण।",
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#FAFBF7] dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300 border-b border-emerald-950/10 dark:border-slate-800/80">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/90 dark:bg-emerald-950/90 border border-emerald-300/80 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
            <Radio className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 animate-pulse" />
            <span>{isHindi ? "स्मार्ट एग्री-टेक IoT ऑटोमेशन" : "PRECISION AGRI-TECH TELEMETRY"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            {isHindi ? "जहाँ कृषि और " : "Where Agriculture Meets "}
            <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 dark:from-emerald-400 dark:via-teal-300 dark:to-green-300 bg-clip-text text-transparent">
              {isHindi ? "तकनीक मिलती है" : "Intelligence"}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {isHindi
              ? "JAS एग्रो फ़ार्मों को सेंसर नेटवर्क से जोड़ता है। तुरंत क्रॉप एस्टिमेशन निकालें और रियल-टाइम माइक्रो-क्लाइमेट डेटा देखें।"
              : "Connect physical crops to real-time micro-controller networks. Calculate setup requirements and explore real-time telemetry."}
          </p>
        </motion.div>

        {/* 1. FEATURED INTELLIGENCE CALCULATOR (Split-Panel Editorial) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <AgriIntelligenceCalculator />
        </motion.div>

        {/* 2. Live Telemetry Dashboard */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="my-12 lg:my-16 bg-white dark:bg-slate-900/90 border border-emerald-950/10 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8 text-slate-900 dark:text-white transition-colors duration-300"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/40">
                <Activity className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
                  Live Farm Telemetry Center <span className="text-xs font-normal text-emerald-800 dark:text-emerald-400 font-mono bg-emerald-100 dark:bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-500/40">CONNECTED</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  ESP32 Microcontroller Array • Node ID: JAS-IOT-884
                </p>
              </div>
            </div>

            <button
              onClick={triggerSimulatedReadings}
              disabled={simulating}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-200 dark:border-slate-700 transition-all shadow-xs cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 ${simulating ? "animate-spin" : ""}`} />
              <span>Simulate Live Sensor Refresh</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F9F1] dark:bg-slate-950/80 border border-emerald-950/10 dark:border-slate-800 text-center shadow-xs">
              <Thermometer className="w-5 h-5 text-amber-600 dark:text-amber-400 mx-auto mb-1" />
              <div className="text-xs text-slate-600 dark:text-slate-400">Ambient Temp</div>
              <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white mt-1">
                {sensors.temp}°C
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F9F1] dark:bg-slate-950/80 border border-emerald-950/10 dark:border-slate-800 text-center shadow-xs">
              <Droplets className="w-5 h-5 text-teal-600 dark:text-teal-400 mx-auto mb-1" />
              <div className="text-xs text-slate-600 dark:text-slate-400">Air Humidity</div>
              <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white mt-1">
                {sensors.humidity}%
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F9F1] dark:bg-slate-950/80 border border-emerald-950/10 dark:border-slate-800 text-center shadow-xs">
              <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
              <div className="text-xs text-slate-600 dark:text-slate-400">Soil Moisture</div>
              <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white mt-1">
                {sensors.soilMoisture}%
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F9F1] dark:bg-slate-950/80 border border-emerald-950/10 dark:border-slate-800 text-center shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
              <div className="text-xs text-slate-600 dark:text-slate-400">Status</div>
              <div className="text-xl font-bold font-heading text-emerald-700 dark:text-emerald-400 mt-1">
                OPTIMAL
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Pipeline Diagram */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h3 className="text-center font-heading font-bold text-xl text-slate-900 dark:text-white">
            {isHindi ? "IoT आर्किटेक्चर एवं डेटा प्रवाह" : "Architecture Data Pipeline"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {pipelineSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const name = isHindi ? step.nameHi : step.nameEn;
              const desc = isHindi ? step.descHi : step.descEn;

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-emerald-950/10 dark:border-slate-800 hover:border-emerald-500/50 transition-all duration-300 text-center shadow-xs hover:-translate-y-1"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-400 font-bold font-mono text-xs flex items-center justify-center mx-auto mb-3">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white flex items-center justify-center mx-auto mb-2">
                    <StepIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm">{name}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/technology"
            className="btn-reveal-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>{isHindi ? "IoT तकनीक के बारे में जानें" : "Explore IoT Architecture"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

