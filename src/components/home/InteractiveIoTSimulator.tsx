"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Thermometer, Droplets, Wind, Sun, Activity, Zap, CheckCircle2, ShieldAlert, Radio } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const InteractiveIoTSimulator: React.FC = () => {
  const { language } = useLanguage();

  // Control System Toggles
  const [foggerActive, setFoggerActive] = useState(true);
  const [fanActive, setFanActive] = useState(true);
  const [lightActive, setLightActive] = useState(false);

  // Dynamic Telemetry Metrics
  const [temp, setTemp] = useState(24.2);
  const [humidity, setHumidity] = useState(84.5);
  const [co2, setCo2] = useState(620);
  const [moisture, setMoisture] = useState(74.0);

  // Live simulation tick
  useEffect(() => {
    const interval = setInterval(() => {
      setTemp((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      setHumidity((prev) => {
        let delta = foggerActive ? 0.3 : -0.2;
        let nextVal = prev + delta + (Math.random() * 0.4 - 0.2);
        return +Math.min(95, Math.max(60, nextVal)).toFixed(1);
      });
      setCo2((prev) => {
        let delta = fanActive ? -8 : 12;
        let nextVal = prev + delta + Math.floor(Math.random() * 10 - 5);
        return Math.min(1200, Math.max(400, nextVal));
      });
      setMoisture((prev) => +(prev + (Math.random() * 0.2 - 0.1)).toFixed(1));
    }, 2000);

    return () => clearInterval(interval);
  }, [foggerActive, fanActive]);

  return (
    <section className="py-6 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800/80">
      {/* Background Ambient Glows & Cyan Mesh */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Tech Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-glow">
            <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>{language === "hi" ? "लाइव IoT एग्री-टेलीमेट्री सिम्युलेटर" : "Live IoT Telemetry Simulator"}</span>
          </div>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-heading text-white tracking-tight">
            {language === "hi" ? (
              <>
                स्मार्ट इंडोर <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">माइक्रो-क्लाइमेट</span> कंट्रोल
              </>
            ) : (
              <>
                Experience Smart <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">Micro-Climate</span> Automation
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {language === "hi"
              ? "JAS Agro IoT नोड सेंसर द्वारा नियंत्रित कमरे का तापमान, नमी और CO2 स्तर। नीचे दिए स्विच ऑन/ऑफ करके लाइव रिस्पांस देखें!"
              : "Interactive indoor environment telemetry powered by ESP32 sensors. Toggle automation controls below to observe real-time climate adjustments."}
          </p>
        </div>

        {/* Telemetry Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 4 Live Sensor Gauges */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Gauge 1: Temperature */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-amber-500/50 rounded-3xl p-6 shadow-glass hover:shadow-glow-gold transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-amber-400" />
                  {language === "hi" ? "तापमान (Temp)" : "Temperature"}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-[10px] font-extrabold shadow-sm">
                  OPTIMAL
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight flex items-baseline gap-2">
                {temp}<span className="text-xl text-amber-400 font-sans">°C</span>
              </div>
              <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500 shadow-glow" style={{ width: `${(temp / 40) * 100}%` }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>Target: 22-26°C</span>
                <span className="text-emerald-400">ESP32 Probe • OK</span>
              </div>
            </div>

            {/* Gauge 2: Relative Humidity */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-6 shadow-glass hover:shadow-glow-cyan transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  {language === "hi" ? "आर्द्रता (Humidity)" : "Humidity"}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${foggerActive ? "bg-cyan-950 border border-cyan-500/50 text-cyan-300 animate-pulse" : "bg-slate-800 text-slate-400"}`}>
                  {foggerActive ? "FOGGER ACTIVE" : "STABLE"}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight flex items-baseline gap-2">
                {humidity}<span className="text-xl text-cyan-400 font-sans">%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-300 rounded-full transition-all duration-500 shadow-glow" style={{ width: `${humidity}%` }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>Target: 80-90%</span>
                <span className="text-cyan-400">DHT22 Sensor • OK</span>
              </div>
            </div>

            {/* Gauge 3: CO2 Level */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-teal-500/50 rounded-3xl p-6 shadow-glass hover:shadow-glow-emerald transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Wind className="w-4 h-4 text-teal-400" />
                  {language === "hi" ? "CO2 सांद्रता" : "CO2 Level"}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${fanActive ? "bg-emerald-950 border border-emerald-500/40 text-emerald-400" : "bg-amber-950 text-amber-300"}`}>
                  {fanActive ? "VENTILATION" : "ACCUMULATING"}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight flex items-baseline gap-2">
                {co2} <span className="text-sm text-slate-400 font-sans font-semibold">PPM</span>
              </div>
              <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-500 shadow-glow" style={{ width: `${(co2 / 1200) * 100}%` }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>Target: &lt; 800 PPM</span>
                <span className="text-teal-400">NDIR Sensor • OK</span>
              </div>
            </div>

            {/* Gauge 4: Soil/Substrate Moisture */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 shadow-glass hover:shadow-glow-emerald transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  {language === "hi" ? "सबस्ट्रेट नमी" : "Substrate Moisture"}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-[10px] font-extrabold">
                  IDEAL
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight flex items-baseline gap-2">
                {moisture}<span className="text-xl text-emerald-400 font-sans">%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-green-300 rounded-full transition-all duration-500 shadow-glow" style={{ width: `${moisture}%` }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>Target: 70-80%</span>
                <span className="text-emerald-400">Capacitive • OK</span>
              </div>
            </div>
          </div>

          {/* Right Control Switches Panel */}
          <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
            {/* Ambient Top Glow Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-teal-500" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-amber-400" />
                <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                  {language === "hi" ? "ऑटोमेशन स्विच बोर्ड (Live Overrides)" : "Automation Actuator Board"}
                </h3>
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/40 shadow-glow">
                <Radio className="w-3.5 h-3.5 animate-pulse" /> LIVE
              </span>
            </div>

            {/* Switch 1: Automated Ultrasonic Fogger */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  {language === "hi" ? "अल्ट्रासोनिक मिस्टर (High Fogger)" : "Ultrasonic Mister / Fogger"}
                </div>
                <p className="text-xs text-slate-400">
                  {language === "hi" ? "आर्द्रता 85% बनाए रखने हेतु स्वचालित फॉगर" : "Maintains relative humidity target (>80%)"}
                </p>
              </div>

              <button
                onClick={() => setFoggerActive(!foggerActive)}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  foggerActive ? "bg-gradient-to-r from-cyan-500 to-teal-500 justify-end shadow-glow-cyan" : "bg-slate-800 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white shadow-md transition-transform" />
              </button>
            </div>

            {/* Switch 2: Exhaust Ventilation Fan */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition-all">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Wind className="w-4 h-4 text-teal-400" />
                  {language === "hi" ? "एग्जॉस्ट फैन (Fresh Air Exchange)" : "Exhaust Air Circulator"}
                </div>
                <p className="text-xs text-slate-400">
                  {language === "hi" ? "CO2 स्तर को 800 PPM से नीचे बनाए रखता है" : "Flushes CO2 build-up for mushroom pinning"}
                </p>
              </div>

              <button
                onClick={() => setFanActive(!fanActive)}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  fanActive ? "bg-gradient-to-r from-emerald-500 to-green-500 justify-end shadow-glow-emerald" : "bg-slate-800 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white shadow-md transition-transform" />
              </button>
            </div>

            {/* Switch 3: LED Grow Light */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-400" />
                  {language === "hi" ? "स्पेक्ट्रम LED ग्रोलाइट" : "Spectrum LED Grow Light"}
                </div>
                <p className="text-xs text-slate-400">
                  {language === "hi" ? "फसल विकास चक्र हेतु 1200 Lux प्रकाश" : "Provides timed 1200 Lux light cycle"}
                </p>
              </div>

              <button
                onClick={() => setLightActive(!lightActive)}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  lightActive ? "bg-gradient-to-r from-amber-500 to-amber-400 justify-end shadow-glow-gold" : "bg-slate-800 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white shadow-md transition-transform" />
              </button>
            </div>

            {/* Hardware spec info */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>
                {language === "hi"
                  ? "JAS Agro IoT नोड किट Wi-Fi/GSM कनेक्टिविटी और सोलर पावर बैकअप के साथ आती है।"
                  : "JAS Agro IoT Node Kit features dual Wi-Fi / GSM cellular modules and optional solar backup."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
