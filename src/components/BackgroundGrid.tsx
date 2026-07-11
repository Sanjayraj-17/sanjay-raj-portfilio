"use client";

import React, { useEffect, useState } from "react";

export default function BackgroundGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
      {/* Ambient background glows */}
      <div 
        className="ambient-glow bg-[rgba(0,240,255,0.06)] animate-pulse-glow w-[500px] h-[500px] -top-40 -left-40" 
        style={{ animationDelay: "0s" }}
      />
      <div 
        className="ambient-glow bg-[rgba(139,92,246,0.06)] animate-pulse-glow w-[500px] h-[500px] -bottom-40 -right-40" 
        style={{ animationDelay: "2s" }}
      />

      {/* Grid Overlay */}
      <div className="grid-bg-overlay absolute inset-0 opacity-50" />

      {/* Mask fade for the grid to look premium */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, #030303 90%)"
        }}
      />

      {/* Interactive Mouse Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-80"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.06) 0%, rgba(0, 240, 255, 0.03) 50%, transparent 80%)`,
        }}
      />
    </div>
  );
}
