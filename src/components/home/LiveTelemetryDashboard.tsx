"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Activity,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Sprout,
  Sliders,
  RefreshCw,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Layers,
  Zap,
  Radio,
  Clock,
  Compass,
  LayoutGrid,
  ChevronDown,
  Info,
  Maximize2,
  Filter,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type CategoryType = "overview" | "temp" | "humidity" | "air" | "soil" | "light" | "automation";
type ZoneId = "mushroom" | "azolla" | "napier" | "vermicompost" | "gateway";
type FarmSite = "jaipur" | "sangaria" | "bikaner";
type TrendTimeframe = "hourly" | "daily" | "weekly";

interface ZoneData {
  id: ZoneId;
  nameEn: string;
  nameHi: string;
  nodeId: string;
  temp: number;
  humidity: number;
  soilMoisture: number;
  lightLux: number;
  co2: number;
  statusEn: "OPTIMAL" | "STABLE" | "ACTIVE" | "MONITORED";
  statusHi: "उत्कृष्ट" | "स्थिर" | "सक्रिय" | "निगरानी";
  statusColor: string;
  pinX: number; // percentage on map
  pinY: number;
  descriptionEn: string;
  descriptionHi: string;
}

export const LiveTelemetryDashboard: React.FC = () => {
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const isHindi = language === "hi";

  // Dashboard Navigation State
  const [activeCategory, setActiveCategory] = useState<CategoryType>("overview");
  const [selectedFarm, setSelectedFarm] = useState<FarmSite>("jaipur");
  const [selectedZone, setSelectedZone] = useState<ZoneId>("mushroom");
  const [timeframe, setTimeframe] = useState<TrendTimeframe>("hourly");
  const [simulating, setSimulating] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<ZoneId | null>(null);
  const [hoveredHour, setHoveredHour] = useState<number | null>(null);
  const [farmDropdownOpen, setFarmDropdownOpen] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>("Just now");

  // Actuator control states
  const [foggerActive, setFoggerActive] = useState(true);
  const [ventilationActive, setVentilationActive] = useState(true);

  // Live Zone Telemetry Definitions
  const [zones, setZones] = useState<Record<ZoneId, ZoneData>>({
    mushroom: {
      id: "mushroom",
      nameEn: "Mushroom Grow Unit",
      nameHi: "मशरूम ग्रो यूनिट",
      nodeId: "ESP32-01",
      temp: 24.2,
      humidity: 86.4,
      soilMoisture: 78.0,
      lightLux: 420,
      co2: 580,
      statusEn: "OPTIMAL",
      statusHi: "उत्कृष्ट",
      statusColor: "emerald",
      pinX: 28,
      pinY: 34,
      descriptionEn: "Climate-controlled pasteurized substrate room with automatic micro-misting.",
      descriptionHi: "स्वचालित माइक्रो-मिस्टिंग से नियंत्रित पाश्चराइज्ड सबस्ट्रेट रूम।",
    },
    azolla: {
      id: "azolla",
      nameEn: "Azolla Aquatic Bio-Ponds",
      nameHi: "अजोला एक्वाटिक बायो-पॉन्ड्स",
      nodeId: "ESP32-02",
      temp: 26.1,
      humidity: 78.5,
      soilMoisture: 94.0,
      lightLux: 680,
      co2: 440,
      statusEn: "STABLE",
      statusHi: "स्थिर",
      statusColor: "lime",
      pinX: 52,
      pinY: 26,
      descriptionEn: "Shallow aquatic bio-culture beds with mineral & water recirculation.",
      descriptionHi: "खनिज एवं जल पुनर्चक्रण युक्त उथले जलीय बायो-कल्चर तालाब।",
    },
    napier: {
      id: "napier",
      nameEn: "Hybrid Napier Plantation",
      nameHi: "हाइब्रिड नेपियर बायोमास फ़ील्ड",
      nodeId: "ESP32-03",
      temp: 28.4,
      humidity: 65.2,
      soilMoisture: 68.5,
      lightLux: 890,
      co2: 410,
      statusEn: "ACTIVE",
      statusHi: "सक्रिय",
      statusColor: "teal",
      pinX: 74,
      pinY: 42,
      descriptionEn: "High-density biomass field with sub-surface drip irrigation telemetry.",
      descriptionHi: "सब-सरफेस ड्रिप सिंचाई टेलीमेट्री युक्त सघन चारा क्षेत्र।",
    },
    vermicompost: {
      id: "vermicompost",
      nameEn: "Organic Vermicompost Unit",
      nameHi: "ऑर्गेनिक वर्मीकंपोस्ट यूनिट",
      nodeId: "ESP32-04",
      temp: 23.8,
      humidity: 74.0,
      soilMoisture: 72.0,
      lightLux: 310,
      co2: 620,
      statusEn: "OPTIMAL",
      statusHi: "उत्कृष्ट",
      statusColor: "emerald",
      pinX: 44,
      pinY: 62,
      descriptionEn: "Earthworm microbial composting beds with capacitive moisture monitoring.",
      descriptionHi: "कैपेसिटिव मॉइस्चर सेंसर्स युक्त केंचुआ जैविक खाद क्यारियाँ।",
    },
    gateway: {
      id: "gateway",
      nameEn: "Central IoT Gateway Mast",
      nameHi: "सेंट्रल IoT गेटवे मस्ट",
      nodeId: "JAS-HUB-01",
      temp: 25.0,
      humidity: 76.0,
      soilMoisture: 70.0,
      lightLux: 720,
      co2: 480,
      statusEn: "ACTIVE",
      statusHi: "सक्रिय",
      statusColor: "amber",
      pinX: 50,
      pinY: 48,
      descriptionEn: "4G GSM & LoRaWAN telemetry coordinator transmitting sensor packets to cloud.",
      descriptionHi: "क्लाउड पर डेटा संचारित करने वाला 4G GSM एवं LoRaWAN टेलीमेट्री हब।",
    },
  });

  const currentZone = zones[selectedZone];

  // Live simulation handler
  const handleSimulateRefresh = () => {
    setSimulating(true);
    setTimeout(() => {
      setZones((prev) => {
        const next = { ...prev };
        (Object.keys(next) as ZoneId[]).forEach((zKey) => {
          const z = next[zKey];
          const tempDelta = Number((Math.random() * 0.6 - 0.3).toFixed(1));
          const humDelta = Number((Math.random() * 1.2 - 0.6).toFixed(1));
          const smDelta = Number((Math.random() * 0.8 - 0.4).toFixed(1));
          next[zKey] = {
            ...z,
            temp: Number(Math.max(18, Math.min(36, z.temp + tempDelta)).toFixed(1)),
            humidity: Number(Math.max(50, Math.min(95, z.humidity + humDelta)).toFixed(1)),
            soilMoisture: Number(Math.max(40, Math.min(98, z.soilMoisture + smDelta)).toFixed(1)),
          };
        });
        return next;
      });
      setLastSyncTime("Live (Just now)");
      setSimulating(false);
    }, 600);
  };

  // Nav Items definition matching the reference
  const NAV_ITEMS = [
    { id: "overview" as CategoryType, icon: LayoutGrid, labelEn: "Overview", labelHi: "अवलोकन" },
    { id: "temp" as CategoryType, icon: Thermometer, labelEn: "Temperature", labelHi: "तापमान" },
    { id: "humidity" as CategoryType, icon: Droplets, labelEn: "Humidity", labelHi: "नमी" },
    { id: "air" as CategoryType, icon: Wind, labelEn: "Air Quality", labelHi: "वायु गुणवत्ता" },
    { id: "soil" as CategoryType, icon: Sprout, labelEn: "Soil Moisture", labelHi: "मिट्टी नमी" },
    { id: "light" as CategoryType, icon: Sun, labelEn: "Light / Lux", labelHi: "प्रकाश" },
    { id: "automation" as CategoryType, icon: Sliders, labelEn: "Actuators", labelHi: "नियंत्रण" },
  ];

  // Farm Sites
  const FARMS = [
    { id: "jaipur" as FarmSite, nameEn: "JAS Agro Jaipur AgTech Hub", nameHi: "जयपुर एग्री-टेक हब" },
    { id: "sangaria" as FarmSite, nameEn: "Sangaria Biomass Facility", nameHi: "संगरिया बायोमास प्लांट" },
    { id: "bikaner" as FarmSite, nameEn: "Bikaner Fodder Field", nameHi: "बीकानेर चारा फार्म" },
  ];

  // Hourly Environmental Data Points for Bottom Chart (8 AM to 4 PM)
  const HOURLY_TRENDS = [
    { hour: "8 AM", temp: 21.5, humidity: 88, soil: 74, status: "Good", heightGood: 45, heightMod: 20, heightHigh: 10 },
    { hour: "9 AM", temp: 22.8, humidity: 86, soil: 73, status: "Good", heightGood: 52, heightMod: 22, heightHigh: 12 },
    { hour: "10 AM", temp: 24.2, humidity: 84, soil: 72, status: "Good", heightGood: 48, heightMod: 26, heightHigh: 15 },
    { hour: "11 AM", temp: 25.4, humidity: 80, soil: 70, status: "Moderate", heightGood: 40, heightMod: 32, heightHigh: 18 },
    { hour: "12 PM", temp: 26.8, humidity: 76, soil: 69, status: "Moderate", heightGood: 35, heightMod: 38, heightHigh: 22 },
    { hour: "1 PM", temp: 27.2, humidity: 74, soil: 68, status: "Moderate", heightGood: 38, heightMod: 36, heightHigh: 20 },
    { hour: "2 PM", temp: 26.5, humidity: 77, soil: 70, status: "Good", heightGood: 44, heightMod: 28, heightHigh: 16 },
    { hour: "3 PM", temp: 25.1, humidity: 81, soil: 71, status: "Good", heightGood: 50, heightMod: 24, heightHigh: 14 },
    { hour: "4 PM", temp: 24.2, humidity: 84, soil: 72, status: "Good", heightGood: 55, heightMod: 20, heightHigh: 10 },
  ];

  return (
    <div className="w-full my-8 lg:my-14 select-none">
      {/* 
        MAIN DASHBOARD CONTAINER
        Warm ivory/light canvas matching the reference structure
      */}
      <div className="bg-[#F8FAF2] dark:bg-[#0B1A0E] rounded-2xl sm:rounded-[2.5rem] border border-[#2F7D16]/20 dark:border-[#1B4D1C] shadow-2xl p-3 sm:p-5 lg:p-7 transition-all duration-300 relative overflow-hidden">
        
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8F21B]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4F9D1F]/10 blur-[140px] rounded-full pointer-events-none" />

        {/* =========================================================================
            1. TOP STATUS BAR (Matching Reference Header Layout)
           ========================================================================= */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-[#2F7D16]/15 dark:border-[#1B4D1C] px-1 sm:px-4">
          
          {/* LEFT: Live Status Indicator & Node ID */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white dark:bg-[#123B13] border border-[#2F7D16]/25 dark:border-[#B8F21B]/30 flex items-center justify-center shadow-xs text-[#2F7D16] dark:text-[#B8F21B] shrink-0">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h3 className="text-sm sm:text-lg font-extrabold font-heading text-[#111811] dark:text-[#FAFAF5] truncate">
                  {isHindi ? "लाइव फार्म टेलीमेट्री सेंटर" : "Live Farm Telemetry Center"}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] text-[#123B13] dark:text-[#B8F21B] font-mono text-[9px] sm:text-xs font-bold border border-[#2F7D16]/30 dark:border-[#B8F21B]/40 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F7D16] dark:bg-[#B8F21B] animate-ping" />
                  <span>{isHindi ? "सक्रिय" : "CONNECTED"}</span>
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-mono text-[#5A6E59] dark:text-[#A3C2A1] mt-0.5 flex items-center gap-1.5 truncate">
                <span>ESP32 Microcontroller Array</span>
                <span className="opacity-40">•</span>
                <span>Node ID: JAS-IOT-884</span>
              </p>
            </div>
          </div>

          {/* RIGHT: Farm Site Selector & Telemetry Refresh */}
          <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* Farm Location Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setFarmDropdownOpen(!farmDropdownOpen)}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-white dark:bg-[#123B13] border border-[#2F7D16]/20 dark:border-[#1B4D1C] text-[#111811] dark:text-[#FAFAF5] text-[11px] sm:text-xs font-semibold shadow-xs hover:border-[#2F7D16]/50 transition-all cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#2F7D16] dark:text-[#B8F21B] shrink-0" />
                <span className="truncate max-w-[125px] sm:max-w-[190px]">
                  {FARMS.find((f) => f.id === selectedFarm)?.[isHindi ? "nameHi" : "nameEn"]}
                </span>
                <ChevronDown className="w-3 h-3 text-[#5A6E59] dark:text-[#A3C2A1] shrink-0" />
              </button>

              {farmDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-[#123B13] border border-[#2F7D16]/20 dark:border-[#1B4D1C] rounded-2xl shadow-xl p-2 z-50 animate-fadeIn">
                  {FARMS.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => {
                        setSelectedFarm(f.id);
                        setFarmDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        selectedFarm === f.id
                          ? "bg-[#EAF5D8] dark:bg-[#1B4D1C] text-[#123B13] dark:text-[#B8F21B] font-bold"
                          : "text-[#111811] dark:text-[#FAFAF5] hover:bg-[#F4F8EC] dark:hover:bg-[#1B4D1C]/50"
                      }`}
                    >
                      {isHindi ? f.nameHi : f.nameEn}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Ambient Condition Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/70 dark:bg-[#123B13]/70 border border-[#2F7D16]/15 dark:border-[#1B4D1C] text-xs font-mono text-[#111811] dark:text-[#FAFAF5]">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              <span>{currentZone.temp}°C, {currentZone.humidity}% RH</span>
            </div>

            {/* Refresh Simulated Reading Button */}
            <button
              type="button"
              onClick={handleSimulateRefresh}
              disabled={simulating}
              title={isHindi ? "सेंसर रिफ्रेश करें" : "Simulate Sensor Sync"}
              className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white dark:bg-[#123B13] hover:bg-[#EAF5D8] dark:hover:bg-[#1B4D1C] border border-[#2F7D16]/20 dark:border-[#1B4D1C] text-[#123B13] dark:text-[#B8F21B] shadow-xs transition-all cursor-pointer shrink-0"
            >
              <RefreshCw className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${simulating ? "animate-spin" : ""}`} />
            </button>
          </div>

        </div>

        {/* =========================================================================
            2. MAIN DASHBOARD BODY (LEFT RAIL + CENTRAL VISUALIZATION + FLOATING ORBS)
           ========================================================================= */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-6 pt-4 sm:pt-6">
          
          {/* 
            LEFT SENSOR NAVIGATION RAIL
            Vertical on Desktop / Horizontal on Mobile
          */}
          <div className="w-full lg:w-16 xl:w-18 flex lg:flex-col items-center justify-between lg:justify-start gap-1.5 sm:gap-2 bg-white/90 dark:bg-[#123B13]/90 backdrop-blur-md p-1.5 sm:p-2 rounded-xl sm:rounded-3xl border border-[#2F7D16]/15 dark:border-[#1B4D1C] shadow-sm shrink-0 overflow-x-auto lg:overflow-visible scrollbar-none">
            {NAV_ITEMS.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeCategory === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.id)}
                  title={isHindi ? item.labelHi : item.labelEn}
                  className={`relative p-2.5 sm:p-3 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#B8F21B] text-[#123B13] shadow-md scale-105"
                      : "text-[#5A6E59] dark:text-[#A3C2A1] hover:text-[#123B13] dark:hover:text-white hover:bg-[#F4F8EC] dark:hover:bg-[#1B4D1C]"
                  }`}
                >
                  <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  {isActive && (
                    <motion.div
                      layoutId="activeRailPill"
                      className="hidden lg:block absolute -right-3 w-1 h-5 rounded-full bg-[#2F7D16] dark:bg-[#B8F21B]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* 
            CENTRAL SPATIAL FARM VISUALIZATION AREA
            With 2.5D Isometric AgTech Field Matrix, Telemetry Heatmap Ribbon & Floating Glass Metric Orbs
          */}
          <div className="flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-[#0D230E] border border-[#2F7D16]/15 dark:border-[#1B4D1C] shadow-inner min-h-[320px] sm:min-h-[500px] lg:min-h-[540px] flex flex-col justify-between">
            
            {/* TOP OVERLAY: Active Zone Badge & Preview Tag */}
            <div className="relative z-20 p-4 sm:p-6 flex items-center justify-between gap-4 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#123B13]/95 backdrop-blur-md border border-[#2F7D16]/25 dark:border-[#B8F21B]/40 text-[#123B13] dark:text-[#B8F21B] text-xs font-mono font-bold shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#2F7D16] dark:bg-[#B8F21B] animate-pulse" />
                <span>{isHindi ? currentZone.nameHi : currentZone.nameEn}</span>
                <span className="opacity-50">[{currentZone.nodeId}]</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md text-[11px] font-mono text-[#5A6E59] dark:text-[#A3C2A1]">
                <Info className="w-3 h-3 text-[#2F7D16] dark:text-[#B8F21B]" />
                <span>{isHindi ? "सिम्युलेटेड एग्री-टेक टेलीमेट्री" : "Interactive Spatial Telemetry"}</span>
              </div>
            </div>

            {/* =========================================================================
                SVG 2.5D ISOMETRIC FARM VISUALIZATION & CONTINUOUS HEATMAP RIBBON
               ========================================================================= */}
            <div className="absolute inset-0 z-0 pointer-events-auto flex items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 1000 650"
                className="w-full h-full object-cover select-none"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  {/* Subtle Grid Pattern for Farm Map Floor */}
                  <pattern id="farmGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-[#2F7D16]/10 dark:text-white/5"
                    />
                  </pattern>

                  {/* Continuous Telemetry Heat Ribbon Gradient (Lush Green -> Neon Lime -> Warm Amber) */}
                  <linearGradient id="heatRibbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#15803d" stopOpacity="0.88" />
                    <stop offset="35%" stopColor="#4ade80" stopOpacity="0.90" />
                    <stop offset="70%" stopColor="#b8f21b" stopOpacity="0.92" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.85" />
                  </linearGradient>

                  <linearGradient id="heatRibbonSide" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#166534" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#0f3d1e" stopOpacity="0.98" />
                  </linearGradient>

                  <linearGradient id="cropPatch" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2F7D16" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#B8F21B" stopOpacity="0.25" />
                  </linearGradient>

                  {/* Radial Node Glow */}
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#B8F21B" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#B8F21B" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* 1. Base Isometric Grid Surface */}
                <rect width="1000" height="650" fill="url(#farmGrid)" />

                {/* 2. Abstract Stylized Farm Plot Polygons */}
                {/* Zone A: Mushroom Grow Facility Plots */}
                <g className="transition-opacity duration-300">
                  <polygon
                    points="120,240 320,130 420,190 220,300"
                    fill="url(#cropPatch)"
                    stroke="#2F7D16"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="opacity-60"
                  />
                  {/* Isometric Building Blocks (Mushroom Chambers) */}
                  <path d="M 220,210 L 290,170 L 290,210 L 220,250 Z" fill="#E2EAD2" className="dark:fill-[#163818]" />
                  <path d="M 290,170 L 350,205 L 350,245 L 290,210 Z" fill="#C8D8B0" className="dark:fill-[#1E4D22]" />
                  <path d="M 220,210 L 280,175 L 350,205 L 290,240 Z" fill="#F4F8EC" className="dark:fill-[#2A662F]" />
                  <text x="210" y="320" className="text-[11px] font-mono font-bold fill-[#2F7D16] dark:fill-[#B8F21B]">
                    ZONE 01 • MUSHROOMS
                  </text>
                </g>

                {/* Zone B: Azolla Aquatic Bio-Ponds */}
                <g className="transition-opacity duration-300">
                  <polygon
                    points="440,180 640,70 740,130 540,240"
                    fill="#0ea5e9"
                    fillOpacity="0.15"
                    stroke="#0284c7"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  {/* Stepped Water Terraces */}
                  <path d="M 480,160 L 580,105 L 680,160 L 580,215 Z" fill="#38bdf8" fillOpacity="0.25" />
                  <path d="M 500,175 L 580,130 L 650,170 L 570,215 Z" fill="#0284c7" fillOpacity="0.35" />
                  <text x="500" y="255" className="text-[11px] font-mono font-bold fill-[#0284c7] dark:fill-[#38bdf8]">
                    ZONE 02 • AZOLLA PONDS
                  </text>
                </g>

                {/* Zone C: Hybrid Napier Biomass Field */}
                <g className="transition-opacity duration-300">
                  <polygon
                    points="620,320 840,200 960,270 740,390"
                    fill="url(#cropPatch)"
                    stroke="#84cc16"
                    strokeWidth="1.5"
                  />
                  {/* Crop furrow lines */}
                  <line x1="660" y1="310" x2="880" y2="190" stroke="#84cc16" strokeWidth="1.5" strokeOpacity="0.5" />
                  <line x1="690" y1="330" x2="910" y2="210" stroke="#84cc16" strokeWidth="1.5" strokeOpacity="0.5" />
                  <line x1="720" y1="350" x2="940" y2="230" stroke="#84cc16" strokeWidth="1.5" strokeOpacity="0.5" />
                  <text x="730" y="410" className="text-[11px] font-mono font-bold fill-[#65a30d] dark:fill-[#a3e635]">
                    ZONE 03 • NAPIER BIOMASS
                  </text>
                </g>

                {/* Zone D: Organic Vermicompost Beds */}
                <g className="transition-opacity duration-300">
                  <polygon
                    points="320,440 520,330 620,390 420,500"
                    fill="#a16207"
                    fillOpacity="0.12"
                    stroke="#ca8a04"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <text x="330" y="520" className="text-[11px] font-mono font-bold fill-[#a16207] dark:fill-[#fbbf24]">
                    ZONE 04 • VERMICOMPOST
                  </text>
                </g>

                {/* 
                  3. CONTINUOUS ISOMETRIC TELEMETRY HEATMAP RIBBON (Directly inspired by reference screenshot)
                  Extruded 3D geometric ribbon connecting cultivation zones with heat gradients
                */}
                <g className="filter drop-shadow-[0_12px_24px_rgba(47,125,22,0.25)]">
                  {/* Ribbon Extruded Top Surface */}
                  <path
                    d="M 260,250 
                       C 360,200 460,210 540,290 
                       C 620,370 720,330 820,380 
                       L 790,440 
                       C 690,390 590,430 510,350 
                       C 430,270 340,260 230,310 Z"
                    fill="url(#heatRibbonGrad)"
                    opacity="0.92"
                  />

                  {/* Ribbon Extruded Side Walls for 3D Isometric Depth */}
                  <path
                    d="M 230,310 
                       C 340,260 430,270 510,350 
                       C 590,430 690,390 790,440 
                       L 790,465 
                       C 690,415 590,455 510,375 
                       C 430,295 340,285 230,335 Z"
                    fill="url(#heatRibbonSide)"
                  />

                  {/* Extruded Isometric Bar Columns on Top of Heatmap (matching reference 3D columns) */}
                  {/* Column 1: Mushroom Climate Node */}
                  <path d="M 330,190 L 370,165 L 410,190 L 370,215 Z" fill="#bbf7d0" />
                  <path d="M 330,190 L 370,215 L 370,275 L 330,250 Z" fill="#86efac" />
                  <path d="M 370,215 L 410,190 L 410,250 L 370,275 Z" fill="#4ade80" />

                  {/* Column 2: Central Tower Node */}
                  <path d="M 480,240 L 520,215 L 560,240 L 520,265 Z" fill="#fef08a" />
                  <path d="M 480,240 L 520,265 L 520,345 L 480,320 Z" fill="#facc15" />
                  <path d="M 520,265 L 560,240 L 560,320 L 520,345 Z" fill="#eab308" />

                  {/* Column 3: Napier Solar Node */}
                  <path d="M 670,300 L 710,275 L 750,300 L 710,325 Z" fill="#fed7aa" />
                  <path d="M 670,300 L 710,325 L 710,385 L 670,360 Z" fill="#fb923c" />
                  <path d="M 710,325 L 750,300 L 750,360 L 710,385 Z" fill="#ea580c" />
                </g>

                {/* 4. Interactive Connected Sensor Node Pins on Map */}
                {(Object.keys(zones) as ZoneId[]).map((zKey) => {
                  const z = zones[zKey];
                  const isSelected = selectedZone === zKey;
                  const isHovered = hoveredNode === zKey;

                  // Map pixel coordinates from percentages
                  const cx = (z.pinX / 100) * 1000;
                  const cy = (z.pinY / 100) * 650;

                  return (
                    <g
                      key={z.id}
                      onClick={() => setSelectedZone(zKey)}
                      onMouseEnter={() => setHoveredNode(zKey)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse Radar Rings */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? "26" : "18"}
                        fill="none"
                        stroke="#B8F21B"
                        strokeWidth="2"
                        className="animate-ping opacity-60 origin-center"
                      />
                      
                      {/* Node Glow Disc */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? "22" : "14"}
                        fill="url(#nodeGlow)"
                      />

                      {/* White Core Pin */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? "11" : "8"}
                        fill="#FFFFFF"
                        stroke="#123B13"
                        strokeWidth="3"
                        className="transition-all duration-300 group-hover:scale-125"
                      />

                      {/* Small Pin Dot */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? "5" : "3.5"}
                        fill={isSelected ? "#2F7D16" : "#123B13"}
                      />

                      {/* Floating Node Label Tooltip */}
                      {(isSelected || isHovered) && (
                        <g transform={`translate(${cx}, ${cy - 24})`}>
                          <rect
                            x="-65"
                            y="-28"
                            width="130"
                            height="26"
                            rx="13"
                            fill="#123B13"
                            stroke="#B8F21B"
                            strokeWidth="1.5"
                            className="filter drop-shadow-md"
                          />
                          <text
                            x="0"
                            y="-11"
                            textAnchor="middle"
                            fill="#FFFFFF"
                            className="text-[11px] font-mono font-bold"
                          >
                            {z.nodeId}: {z.temp}°C
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* =========================================================================
                5. FLOATING LIVE METRIC ORBS / CARDS (Matching Reference Layout & Style)
               ========================================================================= */}
            <div className="relative z-20 p-4 sm:p-6 pointer-events-none">
              
              {/* Desktop / Laptop Spatial Floating Orbs */}
              <div className="hidden md:block absolute inset-0 pointer-events-none">
                
                {/* ORB 1: Humidity (Top Left / Reference Position) */}
                <motion.div
                  initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  onClick={() => setActiveCategory("humidity")}
                  className={`pointer-events-auto absolute top-[18%] left-[24%] p-4 sm:p-5 rounded-[2rem] bg-white/95 dark:bg-[#123B13]/95 backdrop-blur-xl border border-white/80 dark:border-[#B8F21B]/40 shadow-2xl flex flex-col items-center justify-center text-center w-36 sm:w-40 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    activeCategory === "humidity" ? "ring-2 ring-[#2F7D16] dark:ring-[#B8F21B]" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] flex items-center justify-center text-[#2F7D16] dark:text-[#B8F21B] mb-2 shadow-xs">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#111811] dark:text-[#FAFAF5]">
                    {currentZone.humidity}%
                  </div>
                  <div className="text-[11px] font-mono font-semibold text-[#5A6E59] dark:text-[#A3C2A1] mt-0.5">
                    {isHindi ? "वायु नमी" : "Air Humidity"}
                  </div>
                </motion.div>

                {/* ORB 2: Temperature (Center-Left / Reference Position) */}
                <motion.div
                  initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  onClick={() => setActiveCategory("temp")}
                  className={`pointer-events-auto absolute top-[50%] left-[16%] p-4 sm:p-5 rounded-[2rem] bg-white/95 dark:bg-[#123B13]/95 backdrop-blur-xl border border-white/80 dark:border-[#B8F21B]/40 shadow-2xl flex flex-col items-center justify-center text-center w-36 sm:w-40 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    activeCategory === "temp" ? "ring-2 ring-[#2F7D16] dark:ring-[#B8F21B]" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] flex items-center justify-center text-[#2F7D16] dark:text-[#B8F21B] mb-2 shadow-xs">
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#111811] dark:text-[#FAFAF5]">
                    {currentZone.temp}°C
                  </div>
                  <div className="text-[11px] font-mono font-semibold text-[#5A6E59] dark:text-[#A3C2A1] mt-0.5">
                    {isHindi ? "परिवेश तापमान" : "Ambient Temp"}
                  </div>
                </motion.div>

                {/* ORB 3: Soil Moisture / Visibility (Center-Right / Reference Position) */}
                <motion.div
                  initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, y: [0, -7, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  onClick={() => setActiveCategory("soil")}
                  className={`pointer-events-auto absolute top-[44%] right-[22%] p-4 sm:p-5 rounded-[2rem] bg-white/95 dark:bg-[#123B13]/95 backdrop-blur-xl border border-white/80 dark:border-[#B8F21B]/40 shadow-2xl flex flex-col items-center justify-center text-center w-36 sm:w-40 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    activeCategory === "soil" ? "ring-2 ring-[#2F7D16] dark:ring-[#B8F21B]" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#EAF5D8] dark:bg-[#1B4D1C] flex items-center justify-center text-[#2F7D16] dark:text-[#B8F21B] mb-2 shadow-xs">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#111811] dark:text-[#FAFAF5]">
                    {currentZone.soilMoisture}%
                  </div>
                  <div className="text-[11px] font-mono font-semibold text-[#5A6E59] dark:text-[#A3C2A1] mt-0.5">
                    {isHindi ? "मिट्टी नमी" : "Soil Moisture"}
                  </div>
                </motion.div>

                {/* ORB 4: Light & Radiation (Top Right) */}
                <motion.div
                  initial={shouldReduceMotion ? false : { scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, y: [0, 6, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  onClick={() => setActiveCategory("light")}
                  className={`pointer-events-auto absolute top-[15%] right-[10%] p-3.5 sm:p-4 rounded-[1.75rem] bg-white/95 dark:bg-[#123B13]/95 backdrop-blur-xl border border-white/80 dark:border-[#B8F21B]/40 shadow-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    activeCategory === "light" ? "ring-2 ring-[#2F7D16] dark:ring-[#B8F21B]" : ""
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                    <Sun className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-extrabold font-mono text-[#111811] dark:text-[#FAFAF5]">
                      {currentZone.lightLux} Lux
                    </div>
                    <div className="text-[10px] font-mono text-[#5A6E59] dark:text-[#A3C2A1]">
                      {isHindi ? "फोटो-स्पेक्ट्रम" : "Photosynthetic Lux"}
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Mobile Fallback 2-Column Metric Orbs Grid (Ensures Zero Overflow) */}
              <div className="md:hidden grid grid-cols-2 gap-2.5 pt-4 pointer-events-auto">
                <div className="p-3.5 rounded-2xl bg-white/95 dark:bg-[#123B13]/95 backdrop-blur-md border border-[#2F7D16]/20 text-center shadow-md">
                  <Thermometer className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] mx-auto mb-1" />
                  <div className="text-xl font-bold font-mono text-[#111811] dark:text-[#FAFAF5]">
                    {currentZone.temp}°C
                  </div>
                  <div className="text-[10px] text-[#5A6E59] dark:text-[#A3C2A1]">Temperature</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/95 dark:bg-[#123B13]/95 backdrop-blur-md border border-[#2F7D16]/20 text-center shadow-md">
                  <Droplets className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] mx-auto mb-1" />
                  <div className="text-xl font-bold font-mono text-[#111811] dark:text-[#FAFAF5]">
                    {currentZone.humidity}%
                  </div>
                  <div className="text-[10px] text-[#5A6E59] dark:text-[#A3C2A1]">Humidity</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/95 dark:bg-[#123B13]/95 backdrop-blur-md border border-[#2F7D16]/20 text-center shadow-md">
                  <Sprout className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] mx-auto mb-1" />
                  <div className="text-xl font-bold font-mono text-[#111811] dark:text-[#FAFAF5]">
                    {currentZone.soilMoisture}%
                  </div>
                  <div className="text-[10px] text-[#5A6E59] dark:text-[#A3C2A1]">Soil Moisture</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/95 dark:bg-[#123B13]/95 backdrop-blur-md border border-[#2F7D16]/20 text-center shadow-md">
                  <ShieldCheck className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] mx-auto mb-1" />
                  <div className="text-lg font-bold font-heading text-[#2F7D16] dark:text-[#B8F21B]">
                    {currentZone.statusEn}
                  </div>
                  <div className="text-[10px] text-[#5A6E59] dark:text-[#A3C2A1]">System Status</div>
                </div>
              </div>

            </div>

            {/* BOTTOM VISUALIZATION CONTROLS */}
            <div className="relative z-20 p-4 sm:p-6 flex items-center justify-between gap-4 pointer-events-auto">
              {/* Active Zone Description Pill */}
              <div className="hidden lg:block max-w-md px-4 py-2 rounded-2xl bg-white/90 dark:bg-[#123B13]/90 backdrop-blur-md border border-[#2F7D16]/15 text-xs text-[#5A6E59] dark:text-[#A3C2A1] shadow-sm">
                <span className="font-bold text-[#111811] dark:text-white mr-1">
                  {isHindi ? currentZone.nameHi : currentZone.nameEn}:
                </span>
                <span>{isHindi ? currentZone.descriptionHi : currentZone.descriptionEn}</span>
              </div>

              {/* Sync Status Info */}
              <div className="ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-[#123B13]/90 backdrop-blur-md border border-[#2F7D16]/15 text-[11px] font-mono text-[#111811] dark:text-[#FAFAF5] shadow-xs">
                <Clock className="w-3 h-3 text-[#2F7D16] dark:text-[#B8F21B]" />
                <span>Last Sync: {lastSyncTime}</span>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            3. BOTTOM ANALYTICS PANELS (3-Column Layout Matching Reference Bottom)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 pt-5 sm:pt-6">
          
          {/* 
            PANEL A (5 cols): ENVIRONMENT & AIR QUALITY TREND CHART
            Matching the multi-tier stacked bar & threshold chart in reference
          */}
          <div className="lg:col-span-5 bg-white dark:bg-[#123B13] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#2F7D16]/15 dark:border-[#1B4D1C] shadow-sm flex flex-col justify-between space-y-4">
            
            {/* Header with Timeframe Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
              <div>
                <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#111811] dark:text-[#FAFAF5]">
                  {isHindi ? "माइक्रो-क्लाइमेट इंडेक्स एवं ट्रेंड" : "Micro-Climate Trend Index"}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#5A6E59] dark:text-[#A3C2A1]">
                  {isHindi ? "तापमान एवं नमी का 24-घंटे का लॉग" : "Hourly sensor status & telemetry threshold"}
                </p>
              </div>

              <div className="flex items-center gap-1 bg-[#F4F8EC] dark:bg-[#0D230E] p-0.5 sm:p-1 rounded-lg sm:rounded-xl border border-[#2F7D16]/15 text-[10px] sm:text-[11px] font-mono font-bold self-start sm:self-auto">
                {(["hourly", "daily", "weekly"] as TrendTimeframe[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-2 sm:px-2.5 py-1 rounded-md sm:rounded-lg capitalize transition-colors cursor-pointer ${
                      timeframe === t
                        ? "bg-white dark:bg-[#123B13] text-[#123B13] dark:text-[#B8F21B] shadow-xs font-extrabold"
                        : "text-[#5A6E59] dark:text-[#A3C2A1] hover:text-[#111811]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Threshold Legend */}
            <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 text-[9px] sm:text-[10px] font-mono text-[#5A6E59] dark:text-[#A3C2A1]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-[#4ade80]" />
                <span>Good (&lt;25°C)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-[#facc15]" />
                <span>Moderate (26-28°C)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-[#f43f5e]" />
                <span>Peak (&gt;28°C)</span>
              </span>
            </div>

            {/* Multi-Tier Stacked Vertical Bar Chart */}
            <div className="h-36 sm:h-44 w-full flex items-end justify-between gap-1 sm:gap-1.5 pt-3 sm:pt-4 pb-2 border-b border-dashed border-[#2F7D16]/15">
              {HOURLY_TRENDS.map((item, idx) => {
                const isHovered = hoveredHour === idx;

                return (
                  <div
                    key={item.hour}
                    onMouseEnter={() => setHoveredHour(idx)}
                    onMouseLeave={() => setHoveredHour(null)}
                    className="flex-1 flex flex-col items-center justify-end h-full group relative cursor-pointer"
                  >
                    {/* Hover Value Tooltip */}
                    {isHovered && (
                      <div className="absolute -top-10 z-30 px-2 py-1 rounded-md bg-[#123B13] text-white text-[10px] font-mono whitespace-nowrap shadow-md border border-[#B8F21B]/40">
                        {item.temp}°C • {item.humidity}%
                      </div>
                    )}

                    {/* Stacked Vertical Segment Bar */}
                    <div className="w-full max-w-[10px] sm:max-w-[14px] flex flex-col justify-end gap-0.5 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-110">
                      <div
                        style={{ height: `${Math.round(item.heightHigh * 0.85)}px` }}
                        className="w-full bg-[#f43f5e] rounded-t-sm"
                      />
                      <div
                        style={{ height: `${Math.round(item.heightMod * 0.85)}px` }}
                        className="w-full bg-[#facc15]"
                      />
                      <div
                        style={{ height: `${Math.round(item.heightGood * 0.85)}px` }}
                        className="w-full bg-[#4ade80] rounded-b-sm"
                      />
                    </div>

                    <span className="text-[8px] sm:text-[9px] font-mono text-[#5A6E59] dark:text-[#A3C2A1] mt-1.5 sm:mt-2 group-hover:text-[#123B13] dark:group-hover:text-[#B8F21B] font-bold">
                      {item.hour.replace(":00", "")}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* 
            PANEL B (4 cols): FARM ZONE TELEMETRY STATUS
            Matching the category breakdown list in reference
          */}
          <div className="lg:col-span-4 bg-white dark:bg-[#123B13] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#2F7D16]/15 dark:border-[#1B4D1C] shadow-sm flex flex-col justify-between space-y-3">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#2F7D16]/10">
              <div>
                <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#111811] dark:text-[#FAFAF5]">
                  {isHindi ? "फार्म ज़ोन स्थिति" : "Cultivation Zone Status"}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#5A6E59] dark:text-[#A3C2A1]">
                  {isHindi ? "नोड्स एवं सक्रिय टेलीमेट्री" : "Real-time sensor micro-clusters"}
                </p>
              </div>
              <span className="p-1.5 rounded-xl bg-[#EAF5D8] dark:bg-[#1B4D1C] text-[#2F7D16] dark:text-[#B8F21B]">
                <Cpu className="w-4 h-4" />
              </span>
            </div>

            {/* List of Cultivation Zones with click to focus */}
            <div className="space-y-1.5 sm:space-y-2">
              {(Object.keys(zones) as ZoneId[]).slice(0, 4).map((zKey) => {
                const z = zones[zKey];
                const isSelected = selectedZone === zKey;

                return (
                  <div
                    key={z.id}
                    onClick={() => setSelectedZone(zKey)}
                    className={`p-2 sm:p-2.5 rounded-xl sm:rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#F4F8EC] dark:bg-[#1B4D1C] border-[#2F7D16]/40 dark:border-[#B8F21B]/40 shadow-xs"
                        : "bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? "bg-[#2F7D16] dark:bg-[#B8F21B] animate-ping" : "bg-slate-400"}`} />
                      <div className="min-w-0">
                        <div className="text-[11px] sm:text-xs font-bold text-[#111811] dark:text-[#FAFAF5] truncate">
                          {isHindi ? z.nameHi : z.nameEn}
                        </div>
                        <div className="text-[9px] sm:text-[10px] font-mono text-[#5A6E59] dark:text-[#A3C2A1] truncate">
                          {z.nodeId} • {z.temp}°C
                        </div>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-white dark:bg-[#0D230E] text-[9px] sm:text-[10px] font-mono font-bold text-[#2F7D16] dark:text-[#B8F21B] border border-[#2F7D16]/20 shrink-0">
                      {z.humidity}% RH
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* 
            PANEL C (3 cols): SYSTEM HEALTH & MESH TELEMETRY
            Matching the compass/dial widget in reference
          */}
          <div className="lg:col-span-3 bg-white dark:bg-[#123B13] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#2F7D16]/15 dark:border-[#1B4D1C] shadow-sm flex flex-col justify-between space-y-4">
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#111811] dark:text-[#FAFAF5]">
                  {isHindi ? "सिस्टम हेल्थ" : "Telemetry Mesh"}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#5A6E59] dark:text-[#A3C2A1]">
                  {isHindi ? "माइक्रोकंट्रोलर कनेक्टिविटी" : "ESP32 mesh sync status"}
                </p>
              </div>
              <Radio className="w-4 h-4 text-[#2F7D16] dark:text-[#B8F21B] animate-pulse" />
            </div>

            {/* Circular Telemetry Dial (Matching the reference compass/dial) */}
            <div className="relative flex items-center justify-center py-2">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-[#2F7D16]/30 dark:border-[#B8F21B]/40 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-extrabold font-mono text-[#111811] dark:text-[#FAFAF5]">
                    4/4
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-mono text-[#5A6E59] dark:text-[#A3C2A1] uppercase">
                    {isHindi ? "नोड्स सक्रिय" : "Nodes Active"}
                  </div>
                </div>
                {/* Rotating Beacon Needle */}
                <div className="absolute inset-0 flex items-center justify-center animate-[spin_8s_linear_infinite] pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8F21B] absolute top-1" />
                </div>
              </div>
            </div>

            {/* Health Checklist */}
            <div className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-[11px] font-mono">
              <div className="flex items-center justify-between text-[#5A6E59] dark:text-[#A3C2A1]">
                <span>{isHindi ? "सिग्नल सामर्थ्य" : "GSM / LoRa Signal"}</span>
                <span className="font-bold text-[#2F7D16] dark:text-[#B8F21B]">100% (-58 dBm)</span>
              </div>
              <div className="flex items-center justify-between text-[#5A6E59] dark:text-[#A3C2A1]">
                <span>{isHindi ? "डेटा पैकेट शुद्धता" : "Packet Integrity"}</span>
                <span className="font-bold text-[#111811] dark:text-[#FAFAF5]">99.8%</span>
              </div>
              <div className="flex items-center justify-between text-[#5A6E59] dark:text-[#A3C2A1]">
                <span>{isHindi ? "मिस्टिंग रिले" : "Misting Relays"}</span>
                <span className="font-bold text-[#2F7D16] dark:text-[#B8F21B]">{isHindi ? "सक्रिय ऑटो" : "AUTO-ARMED"}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
