"use client";

import React, { useState } from "react";
import Link from "next/link";
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

export const IoTDashboardSection: React.FC = () => {
  const { language, t } = useLanguage();
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
    <section className="py-6 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Radio className="w-3.5 h-3.5 animate-pulse" /> {language === "hi" ? "स्मार्ट एग्री-टेक IoT ऑटोमेशन" : "PRECISION AGRI-TECH TELEMETRY"}
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
            {language === "hi" ? "जहाँ कृषि और " : "Where Agriculture Meets "}
            <span className="text-cyan-600 dark:text-cyan-400">
              {language === "hi" ? "तकनीक मिलती है" : "Intelligence"}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            {language === "hi"
              ? "JAS एग्रो फ़ार्मों को सेंसर नेटवर्क से जोड़ता है। तापमान और नमी के सटीक आँकड़ों से स्वचालित सिंचाई नियंत्रण।"
              : "JAS Agro connects physical crops to real-time micro-controller networks. Sensor data enables automated misting, fogging, and irrigation."}
          </p>
        </div>

        {/* Live Telemetry Dashboard */}
        <div className="mb-16 bg-white dark:bg-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 text-slate-900 dark:text-white transition-colors duration-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/40">
                <Activity className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
                  Live Farm Telemetry Center <span className="text-xs font-normal text-emerald-700 dark:text-emerald-400 font-mono bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30 dark:border-emerald-500/40">CONNECTED</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  ESP32 Microcontroller Array • Node ID: JAS-IOT-884
                </p>
              </div>
            </div>

            <button
              onClick={triggerSimulatedReadings}
              disabled={simulating}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-300 dark:border-white/10 transition-all shadow-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 ${simulating ? "animate-spin" : ""}`} />
              Simulate Live Sensor Refresh
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-amber-500/30 text-center shadow-sm">
              <Thermometer className="w-5 h-5 text-amber-600 dark:text-amber-400 mx-auto mb-1" />
              <div className="text-xs text-slate-600 dark:text-slate-400">Ambient Temp</div>
              <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white mt-1">
                {sensors.temp}°C
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-cyan-500/30 text-center shadow-sm">
              <Droplets className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mx-auto mb-1" />
              <div className="text-xs text-slate-600 dark:text-slate-400">Air Humidity</div>
              <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white mt-1">
                {sensors.humidity}%
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-emerald-500/30 text-center shadow-sm">
              <Sprout className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
              <div className="text-xs text-slate-600 dark:text-slate-400">Soil Moisture</div>
              <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white mt-1">
                {sensors.soilMoisture}%
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
              <div className="text-xs text-slate-600 dark:text-slate-400">Status</div>
              <div className="text-xl font-bold font-heading text-emerald-600 dark:text-emerald-400 mt-1">
                OPTIMAL
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Diagram */}
        <div className="space-y-6">
          <h3 className="text-center font-heading font-bold text-xl text-slate-900 dark:text-white">
            {language === "hi" ? "IoT आर्किटेक्चर एवं डेटा प्रवाह" : "Architecture Data Pipeline"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {pipelineSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const name = language === "hi" ? step.nameHi : step.nameEn;
              const desc = language === "hi" ? step.descHi : step.descEn;

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all text-center shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-600 dark:text-cyan-400 font-bold font-mono text-xs flex items-center justify-center mx-auto mb-3">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white flex items-center justify-center mx-auto mb-2">
                    <StepIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm">{name}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold text-sm hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all shadow-md"
          >
            {language === "hi" ? "IoT तकनीक के बारे में जानें" : "Explore IoT Architecture"} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
