"use client";

import React, { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Cpu, Radio, Sun, Layers, Shield } from "react-feather";
const Sparkles = Sun;
const ShieldCheck = Shield;
import { useLanguage } from "@/context/LanguageContext";

export const LivingStrataSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const [hoverAngle, setHoverAngle] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeLayer, setActiveLayer] = useState<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const parent = containerRef.current;
      if (!parent || !canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = parent.clientWidth;
      const height = parent.clientHeight || 520;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Particle seed
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * 320,
      y: (Math.random() - 0.5) * 160 + 40,
      z: (Math.random() - 0.5) * 320,
      speed: 0.4 + Math.random() * 0.8,
      size: 1.2 + Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.6,
    }));

    // Render 3D Strata Simulation
    const render = () => {
      if (!canvas || !ctx) return;
      const width = parseFloat(canvas.style.width) || 800;
      const height = parseFloat(canvas.style.height) || 520;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 + 30;
      const rotationSpeed = shouldReduceMotion ? 0 : 0.005;
      time += rotationSpeed;

      const tilt = 0.42 + hoverAngle.y * 0.08;
      const pan = time + hoverAngle.x * 0.35;

      // Draw subtle background radial grid
      ctx.save();
      ctx.strokeStyle = "rgba(166, 248, 95, 0.06)";
      ctx.lineWidth = 1;
      for (let r = 80; r <= 280; r += 50) {
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, r, r * tilt, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // 1. Lower Sub-Soil Sandy Loam Disc (Dark Humic Strata)
      const baseRadius = Math.min(width * 0.32, 220);
      const discYOffset = 35;

      ctx.save();
      ctx.fillStyle = "#1E140C";
      ctx.strokeStyle = "rgba(139, 94, 60, 0.4)";
      ctx.lineWidth = 1.5;

      // Cylinder Extrusion
      const cylinderHeight = 24;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + discYOffset + cylinderHeight, baseRadius, baseRadius * tilt, 0, 0, Math.PI);
      ctx.ellipse(centerX, centerY + discYOffset, baseRadius, baseRadius * tilt, 0, Math.PI, 0, true);
      ctx.fill();
      ctx.stroke();

      // Cylinder Base Top
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + discYOffset, baseRadius, baseRadius * tilt, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#2D1D12";
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // 2. Middle Biome Root / Bio-Humus Layer
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + 10, baseRadius * 0.98, baseRadius * 0.98 * tilt, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#143319";
      ctx.strokeStyle = "rgba(79, 157, 31, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // 3. Top Vegetative Green Biome Turf
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - 6, baseRadius * 0.95, baseRadius * 0.95 * tilt, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#1E5E22";
      ctx.strokeStyle = "rgba(166, 248, 95, 0.5)";
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // 4. Digital Field Telemetry Rings (Expanding Radar Waves)
      ctx.save();
      const wavePhase = (time * 1.5) % 1;
      const waveRadius = baseRadius * 0.3 + wavePhase * baseRadius * 0.65;
      const waveAlpha = Math.max(0, 1 - wavePhase);

      ctx.beginPath();
      ctx.ellipse(centerX, centerY - 6, waveRadius, waveRadius * tilt, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(166, 248, 95, ${waveAlpha * 0.7})`;
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.stroke();
      ctx.restore();

      // 5. Render Projected Super Napier Stalks around the perimeter
      const stalkCount = 20;
      for (let i = 0; i < stalkCount; i++) {
        const angle = pan + (i / stalkCount) * Math.PI * 2;
        const rad = baseRadius * 0.68 + ((i % 3) * 12);
        const px = centerX + Math.cos(angle) * rad;
        const pz = Math.sin(angle) * rad;
        const py = centerY - 6 + pz * tilt;

        // Skip drawing when behind lower layers if needed, or depth-sort
        const stalkHeight = 32 + (i % 5) * 8;
        const stalkSway = Math.sin(time * 2 + i) * 3;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.quadraticCurveTo(px + stalkSway, py - stalkHeight * 0.6, px + stalkSway * 1.5, py - stalkHeight);
        ctx.strokeStyle = (i % 2 === 0) ? "#72BF2B" : "#4F9D1F";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Stalk leaves
        ctx.beginPath();
        ctx.moveTo(px + stalkSway * 0.7, py - stalkHeight * 0.5);
        ctx.lineTo(px + stalkSway * 0.7 + 8, py - stalkHeight * 0.5 - 4);
        ctx.strokeStyle = "#8CD738";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // 6. Central Industrial ESP32 IoT Telemetry Mast
      const mastHeight = 110;
      const mastBaseY = centerY - 8;

      ctx.save();
      // Stainless Steel Mast Pole
      ctx.beginPath();
      ctx.moveTo(centerX, mastBaseY);
      ctx.lineTo(centerX, mastBaseY - mastHeight);
      ctx.strokeStyle = "#CAD2C5";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Mast Guywires
      ctx.beginPath();
      ctx.moveTo(centerX, mastBaseY - mastHeight * 0.65);
      ctx.lineTo(centerX - 24, mastBaseY + 4);
      ctx.moveTo(centerX, mastBaseY - mastHeight * 0.65);
      ctx.lineTo(centerX + 24, mastBaseY + 4);
      ctx.strokeStyle = "rgba(202, 210, 197, 0.35)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Solar Panel Unit atop Mast
      ctx.save();
      ctx.translate(centerX, mastBaseY - mastHeight + 12);
      ctx.rotate(0.2);
      ctx.fillStyle = "#0F2537";
      ctx.strokeStyle = "#A6F85F";
      ctx.lineWidth = 1;
      ctx.fillRect(-18, -6, 36, 12);
      ctx.strokeRect(-18, -6, 36, 12);
      ctx.restore();

      // Weatherproof Control Enclosure
      ctx.fillStyle = "#FAFAF5";
      ctx.strokeStyle = "rgba(0, 34, 16, 0.4)";
      ctx.lineWidth = 1;
      ctx.fillRect(centerX - 9, mastBaseY - mastHeight + 32, 18, 22);
      ctx.strokeRect(centerX - 9, mastBaseY - mastHeight + 32, 18, 22);

      // Flashing LED Status Beacon on Top of Mast
      const beaconPulse = Math.sin(time * 6) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(centerX, mastBaseY - mastHeight, 5 + beaconPulse * 2, 0, Math.PI * 2);
      ctx.fillStyle = "#A6F85F";
      ctx.shadowColor = "#A6F85F";
      ctx.shadowBlur = 14 + beaconPulse * 8;
      ctx.fill();
      ctx.restore();

      // 7. Drifting Nutrient / Telemetry Particles
      ctx.save();
      particles.forEach((p, idx) => {
        p.y -= p.speed * 0.4;
        if (p.y < -120) p.y = 120;

        const ang = pan + idx;
        const dist = Math.sqrt(p.x * p.x + p.z * p.z);
        const px = centerX + Math.cos(ang) * dist * 0.7;
        const py = centerY + p.y * 0.7 + Math.sin(ang) * dist * 0.7 * tilt;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(166, 248, 95, ${p.opacity * (1 - Math.abs(p.y) / 140)})`;
        ctx.shadowColor = "#A6F85F";
        ctx.shadowBlur = 6;
        ctx.fill();
      });
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseMove = (e: MouseEvent) => {
      const parent = containerRef.current;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setHoverAngle({ x, y });
    };

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (containerEl) containerEl.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoverAngle, shouldReduceMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[440px] sm:h-[580px] lg:h-[620px] rounded-2xl sm:rounded-3xl bg-[#08170D] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center select-none"
    >
      {/* Background Ambient Glow & Star Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,56,36,0.5)_0%,rgba(8,23,13,0.98)_75%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(166, 248, 95, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* HTML5 Canvas Simulation Canvas */}
      <canvas ref={canvasRef} className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* FLOATING HUD OVERLAY — TOP LEFT (Strata Layer Specification) */}
      <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 max-w-[220px] sm:max-w-xs p-3 sm:p-4 rounded-xl bg-[#002210]/90 backdrop-blur-md border border-white/10 shadow-xl space-y-1 sm:space-y-1.5 pointer-events-none text-left">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#A6F85F] animate-ping" />
          <span className="text-[9px] sm:text-[11px] font-mono uppercase tracking-widest text-[#A6F85F] font-bold">
            {isHindi ? "बायो-स्ट्रेटा 01" : "STRATA LAYER 01"}
          </span>
        </div>
        <h4 className="text-[11px] sm:text-sm font-bold text-white tracking-tight">
          {isHindi ? "सैंडी-दोमट एवं सूक्ष्मजीवी मैट्रिक्स" : "Sandy-Loam & Microbial Matrix"}
        </h4>
        <p className="text-[10px] sm:text-xs text-white/70 leading-relaxed hidden sm:block">
          {isHindi
            ? "नाइट्रोजन स्थिरीकरण और उपसतह जल प्रतिधारण के लिए शुद्ध वर्मी-ह्यूमस और अजोला संवर्धन।"
            : "Bio-humus inoculated with nitrogen-fixing microbes, maintaining sub-surface water retention in arid conditions."}
        </p>
      </div>

      {/* FLOATING HUD OVERLAY — BOTTOM RIGHT (Active Telemetry Beacon) */}
      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-20 max-w-[220px] sm:max-w-xs p-3 sm:p-4 rounded-xl bg-[#002210]/90 backdrop-blur-md border border-white/10 shadow-xl space-y-1 sm:space-y-1.5 pointer-events-none text-left">
        <div className="flex items-center justify-between">
          <span className="text-[9px] sm:text-[11px] font-mono uppercase tracking-widest text-[#A6F85F] font-bold">
            {isHindi ? "टेलीमेट्री नोड #03" : "TELEMETRY BEACON 03"}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono text-white/60">12s TICK</span>
        </div>
        <h4 className="text-[11px] sm:text-sm font-bold text-white tracking-tight">
          {isHindi ? "ESP32 सोलर स्टेशन" : "ESP32 Solar Telemetry Grid"}
        </h4>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-0.5 sm:pt-1 text-[10px] sm:text-[11px] font-mono">
          <div className="p-1 sm:p-1.5 rounded bg-white/5 border border-white/5 text-white/80">
            <span className="block text-[8px] sm:text-[9px] text-white/50">SOIL MOISTURE</span>
            <span className="font-bold text-[#A6F85F]">74.2% VWC</span>
          </div>
          <div className="p-1 sm:p-1.5 rounded bg-white/5 border border-white/5 text-white/80">
            <span className="block text-[8px] sm:text-[9px] text-white/50">CANOPY VPD</span>
            <span className="font-bold text-[#A6F85F]">1.12 kPa</span>
          </div>
        </div>
      </div>

      {/* Bottom Center Interaction Guide */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] font-mono text-white/60 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#A6F85F]" />
        <span>{isHindi ? "इंटरएक्टिव 3D: माउस घुमाकर देखें" : "INTERACTIVE 3D: MOVE CURSOR TO ORBIT STRATA"}</span>
      </div>
    </div>
  );
};
