"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Thermometer, Droplets, Wind, Sun, Activity, Zap, CheckCircle2, ShieldAlert, Radio } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const IotSimulationDashboard: React.FC = () => {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  // Control Actuators
  const [foggerActive, setFoggerActive] = useState(true);
  const [fanActive, setFanActive] = useState(true);
  const [lightActive, setLightActive] = useState(false);

  // Simulation Telemetry
  const [temp, setTemp] = useState(24.6);
  const [humidity, setHumidity] = useState(82.0);
  const [co2, setCo2] = useState(640);
  const [moisture, setMoisture] = useState(67.0);

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
    }, 2500);

    return () => clearInterval(interval);
  }, [foggerActive, fanActive]);

  return (
    <section className="py-6 bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-white relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      {/* Background Lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Cyber Grid Pattern */}
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/90 border border-cyan-300 dark:border-cyan-500/50 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider shadow-glow">
            <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400 animate-pulse" />
            <span>{isHindi ? "Interactive IoT Simulator" : "INTERACTIVE IOT FARM TELEMETRY"}</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-none">
            {isHindi ? "आपका Farm, " : "YOUR FARM. "}
            <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent">
              {isHindi ? "Smartly Connected।" : "CONNECTED."}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {isHindi
              ? "JAS Agro IoT Sensors के साथ micro-climate control। नीचे दिए switches on/off करके live response देखें।"
              : "Experience automated micro-climate control. Toggle simulation actuators below to observe real-time telemetry adjustments."}
          </p>

          {/* Mandatory Explicit Simulation Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-500/40 text-amber-800 dark:text-amber-300 text-xs font-mono font-bold shadow-sm">
            <Radio className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 animate-pulse" />
            <span>Interactive Simulation (Demo Environment)</span>
          </div>
        </div>

        {/* Telemetry Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 4 Live Sensor Dials */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
            {/* Sensor 1: Temperature */}
            <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 rounded-3xl p-6 shadow-glass hover:shadow-glow-gold transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  {isHindi ? "Temperature" : "Temperature"}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-400 text-[10px] font-mono font-bold">
                  OPTIMAL
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight flex items-baseline gap-2">
                {temp}<span className="text-xl text-amber-500 dark:text-amber-400 font-sans">°C</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-slate-800">
                <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500 shadow-glow" style={{ width: `${(temp / 40) * 100}%` }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>Target: 22.0-26.0°C</span>
                <span className="text-emerald-600 dark:text-emerald-400">ESP32 Probe • OK</span>
              </div>
            </div>

            {/* Sensor 2: Relative Humidity */}
            <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 rounded-3xl p-6 shadow-glass hover:shadow-glow-cyan transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                  {isHindi ? "Humidity (नमी)" : "Humidity"}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${foggerActive ? "bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-500/50 text-cyan-800 dark:text-cyan-300 animate-pulse" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                  {foggerActive ? "FOGGER ACTIVE" : "STABLE"}
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight flex items-baseline gap-2">
                {humidity}<span className="text-xl text-cyan-500 dark:text-cyan-400 font-sans">%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-slate-800">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-300 rounded-full transition-all duration-500 shadow-glow" style={{ width: `${humidity}%` }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>Target: 80.0-90.0%</span>
                <span className="text-cyan-600 dark:text-cyan-400">DHT22 Sensor • OK</span>
              </div>
            </div>

            {/* Sensor 3: CO2 Level */}
            <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 rounded-3xl p-6 shadow-glass hover:shadow-glow-emerald transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <Wind className="w-4 h-4 text-teal-500 dark:text-teal-400" />
                  {isHindi ? "CO2 Level" : "CO2 Level"}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${fanActive ? "bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-400" : "bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300"}`}>
                  {fanActive ? "VENTILATION" : "ACCUMULATING"}
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight flex items-baseline gap-2">
                {co2} <span className="text-sm text-slate-500 dark:text-slate-400 font-sans font-semibold">PPM</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-slate-800">
                <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-500 shadow-glow" style={{ width: `${(co2 / 1200) * 100}%` }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>Target: &lt; 800 PPM</span>
                <span className="text-teal-600 dark:text-teal-400">NDIR Sensor • OK</span>
              </div>
            </div>

            {/* Sensor 4: Soil/Substrate Moisture */}
            <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 shadow-glass hover:shadow-glow-emerald transition-all duration-300 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  {isHindi ? "Substrate Moisture" : "Substrate Moisture"}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-400 text-[10px] font-mono font-bold">
                  IDEAL
                </span>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight flex items-baseline gap-2">
                {moisture}<span className="text-xl text-emerald-500 dark:text-emerald-400 font-sans">%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-slate-800">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-green-300 rounded-full transition-all duration-500 shadow-glow" style={{ width: `${moisture}%` }} />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>Target: 65.0-75.0%</span>
                <span className="text-emerald-600 dark:text-emerald-400">Capacitive • OK</span>
              </div>
            </div>
          </div>

          {/* Right Control Switches Panel */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-heading">
                  {isHindi ? "Automation Actuator Board" : "Automation Actuator Board"}
                </h3>
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-500/40 shadow-glow">
                <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-600 dark:text-emerald-400" /> SIMULATION
              </span>
            </div>

            {/* Switch 1: Ultrasonic Fogger */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  {isHindi ? "Ultrasonic Fogger (मिस्टर)" : "Ultrasonic Fogger"}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {isHindi ? "Humidity 80%+ बनाए रखने के लिए" : "Maintains relative humidity target (>80%)"}
                </p>
              </div>

              <button
                onClick={() => setFoggerActive(!foggerActive)}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  foggerActive ? "bg-gradient-to-r from-cyan-500 to-teal-500 justify-end shadow-glow-cyan" : "bg-slate-300 dark:bg-slate-800 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white shadow-md transition-transform" />
              </button>
            </div>

            {/* Switch 2: Exhaust Air Circulator */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Wind className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  {isHindi ? "Exhaust Air Fan" : "Exhaust Air Circulator"}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {isHindi ? "CO2 level को 800 PPM से नीचे रखता है" : "Flushes CO2 build-up for mushroom pinning"}
                </p>
              </div>

              <button
                onClick={() => setFanActive(!fanActive)}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  fanActive ? "bg-gradient-to-r from-emerald-500 to-green-500 justify-end shadow-glow-emerald" : "bg-slate-300 dark:bg-slate-800 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white shadow-md transition-transform" />
              </button>
            </div>

            {/* Switch 3: Spectrum LED Grow Light */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-all">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                  {isHindi ? "Spectrum LED Grow Light" : "Spectrum LED Grow Light"}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {isHindi ? "Fruiting के लिए 1200 Lux light cycle" : "Provides timed 1200 Lux grow light cycle"}
                </p>
              </div>

              <button
                onClick={() => setLightActive(!lightActive)}
                className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                  lightActive ? "bg-gradient-to-r from-amber-500 to-amber-400 justify-end shadow-glow-gold" : "bg-slate-300 dark:bg-slate-800 justify-start"
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white shadow-md transition-transform" />
              </button>
            </div>

            {/* Hardware Notice */}
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
              <span>
                {isHindi
                  ? "JAS Agro IoT Node Kit Wi-Fi/GSM connectivity और solar backup के साथ आती है।"
                  : "JAS Agro IoT Node Kit features Wi-Fi / GSM cellular modules and optional solar backup."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
