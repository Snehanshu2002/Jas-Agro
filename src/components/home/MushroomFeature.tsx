"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Thermometer,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Radio,
  Sliders,
  Sparkles,
  ExternalLink,
  Cpu,
  Wifi,
  Server,
  Activity,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const MushroomFeature: React.FC = () => {
  const { language, t } = useLanguage();
  const [temp, setTemp] = useState<number>(24);
  const [humidity, setHumidity] = useState<number>(85);
  const [airflow, setAirflow] = useState<boolean>(true);

  const isTempOptimal = temp >= 22 && temp <= 26;
  const isHumidityOptimal = humidity >= 80 && humidity <= 90;
  const isOptimal = isTempOptimal && isHumidityOptimal && airflow;

  return (
    <section className="py-3 bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              {language === "hi" ? "स्मार्ट मशरूम फार्मिंग & IoT" : "FEATURED CULTIVATION & IOT"}
            </div>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-slate-900 dark:text-white leading-tight">
              {language === "hi" ? "ऑयस्टर मशरूम फार्मिंग & " : "Oyster Mushroom "}
              <span className="text-amber-600 dark:text-amber-400">
                {language === "hi" ? "छत्रक पोर्टल" : "Cultivation & Chhatraka"}
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === "hi"
                ? "ऑयस्टर मशरूम के लिए सही टेम्परेचर (22–28°C) और ह्यूमिडिटी (80–90%) बहुत ज़रूरी है। Arduino, DHT22 सेंसर्स और ESP8266 क्लाउड ऑटोमेशन से फसल की बेहतर यील्ड और सुरक्षा मिलती है।"
                : "Oyster mushrooms (Pleurotus) require controlled temperature (22–28°C) and relative humidity (80–90%). Using Arduino, soil moisture sensors, DHT22 sensors, and ESP8266 cloud computing, JAS Agro eliminates crop failure risks."}
            </p>

            {/* Crisp High-Definition System Architecture Vector Card */}
            <div className="rounded-2xl border border-amber-500/30 shadow-xl bg-gradient-to-br from-white via-slate-50 to-amber-50/20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800/80 p-4 text-slate-900 dark:text-white transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-amber-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                    {language === "hi" ? "स्मार्ट IoT आर्किटेक्चर डायग्राम" : "System Architecture Diagram"}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold">
                  HD VECTOR
                </span>
              </div>

              {/* Interactive Diagram Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
                {/* Node 1: Sensors */}
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-center shadow-sm relative group hover:border-amber-500/50 transition-all">
                  <div className="w-9 h-9 mx-auto rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                    {language === "hi" ? "सेंसर्स" : "Sensors"}
                  </h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    DHT22 & Moisture
                  </p>
                </div>

                {/* Node 2: Microcontroller */}
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-center shadow-sm relative group hover:border-amber-500/50 transition-all">
                  <div className="w-9 h-9 mx-auto rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                    {language === "hi" ? "माइक्रोकंट्रोलर" : "Micro-Controller"}
                  </h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Arduino / ESP8266
                  </p>
                </div>

                {/* Node 3: Wi-Fi Module */}
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-center shadow-sm relative group hover:border-amber-500/50 transition-all">
                  <div className="w-9 h-9 mx-auto rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                    {language === "hi" ? "वाई-फाई क्लाउड" : "Wi-Fi Cloud"}
                  </h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Wireless Telemetry
                  </p>
                </div>

                {/* Node 4: Control System */}
                <div className="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-center shadow-sm relative group hover:border-amber-500/50 transition-all">
                  <div className="w-9 h-9 mx-auto rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2">
                    <Server className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                    {language === "hi" ? "कंट्रोल सिस्टम" : "Control System"}
                  </h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Relays & Chhatraka
                  </p>
                </div>
              </div>

              <div className="mt-3.5 text-center text-[11px] text-slate-600 dark:text-slate-300 font-semibold flex items-center justify-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                {language === "hi" ? "JAS एग्रो स्मार्ट IoT मशरूम सिस्टम आर्किटेक्चर" : "Official JAS Agro Smart IoT Mushroom System Architecture"}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {language === "hi" ? "Arduino & ESP8266 माइक्रोकंट्रोलर्स" : "Arduino & ESP8266 Microcontrollers"}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {language === "hi" ? "क्लाउड सर्वर पर लाइव टेलीमेट्री ट्रांसमिशन।" : "Transmits live telemetry to cloud servers & dashboards."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 mt-1">
                  <Thermometer className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    {language === "hi" ? "DHT22 & मॉइस्चर सेंसर्स" : "DHT22 & Moisture Sensors"}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {language === "hi" ? "ग्रोइंग मीडिया के टेम्परेचर और ह्यूमिडिटी की 24x7 मॉनिटरिंग।" : "Monitors growing media to prevent fungus drying."}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://www.chhatraka.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-sm hover:bg-amber-400 transition-all flex items-center gap-2 shadow-md"
              >
                Chhatraka Portal <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                href="/products/oyster-mushroom"
                className="px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2"
              >
                {t("learnMore")} <ArrowRight className="w-4 h-4 text-emerald-500" />
              </Link>
            </div>
          </div>

          {/* Right Column: Telemetry Dashboard */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bg-white dark:bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden text-slate-900 dark:text-white h-full flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-heading font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                    Grow Room Telemetry <Radio className="w-4 h-4 text-amber-600 dark:text-amber-400 animate-pulse" />
                  </span>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                  NODE-MUSHROOM-01
                </span>
              </div>

              {/* Gauges */}
              <div className="grid grid-cols-3 gap-4">
                <div className={`p-4 rounded-2xl border transition-all text-center ${isTempOptimal ? "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-300 dark:border-emerald-500/40 text-slate-900 dark:text-white" : "bg-amber-50 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/40 text-amber-800 dark:text-amber-300"}`}>
                  <Thermometer className="w-5 h-5 mx-auto mb-1 text-amber-600 dark:text-amber-400" />
                  <div className="text-xs text-slate-600 dark:text-slate-400">Temperature</div>
                  <div className="text-2xl font-extrabold font-mono mt-1">{temp}°C</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Target: 22-28°C</div>
                </div>

                <div className={`p-4 rounded-2xl border transition-all text-center ${isHumidityOptimal ? "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-300 dark:border-emerald-500/40 text-slate-900 dark:text-white" : "bg-amber-50 dark:bg-amber-500/10 border-amber-300 dark:border-amber-500/40 text-amber-800 dark:text-amber-300"}`}>
                  <Droplets className="w-5 h-5 mx-auto mb-1 text-cyan-600 dark:text-cyan-400" />
                  <div className="text-xs text-slate-600 dark:text-slate-400">RH Humidity</div>
                  <div className="text-2xl font-extrabold font-mono mt-1">{humidity}%</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Target: 80-90%</div>
                </div>

                <div className={`p-4 rounded-2xl border transition-all text-center ${isOptimal ? "bg-emerald-100 dark:bg-emerald-500/20 border-emerald-400 dark:border-emerald-500 text-emerald-800 dark:text-emerald-400" : "bg-red-50 dark:bg-red-500/20 border-red-300 dark:border-red-500/40 text-red-800 dark:text-red-300"}`}>
                  <Sparkles className="w-5 h-5 mx-auto mb-1" />
                  <div className="text-xs text-slate-600 dark:text-slate-400">Status</div>
                  <div className="text-lg font-bold font-heading mt-1">
                    {isOptimal ? "OPTIMAL" : "ATTENTION"}
                  </div>
                  <div className="text-[10px] opacity-80 mt-0.5">
                    {isOptimal ? "Fruiting Active" : "Adjust Sensors"}
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-800 dark:text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-amber-600 dark:text-amber-400" /> Test Environment Controls
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Live Simulation</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1">
                    <span>Adjust Temperature (°C):</span>
                    <span className="font-mono font-bold text-amber-600 dark:text-amber-400">{temp}°C</span>
                  </div>
                  <input
                    type="range"
                    min={18}
                    max={32}
                    value={temp}
                    onChange={(e) => setTemp(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 mb-1">
                    <span>Adjust Relative Humidity (%):</span>
                    <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">{humidity}%</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={98}
                    value={humidity}
                    onChange={(e) => setHumidity(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
