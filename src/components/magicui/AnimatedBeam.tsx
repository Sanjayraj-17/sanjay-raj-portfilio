"use client";
import React, { RefObject, useEffect, useState } from "react";

interface AnimatedBeamProps {
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  className?: string;
  color?: string;
  duration?: number;
  delay?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  className = "",
  color = "#8b5cf6",
  duration = 3,
  delay = 0,
  gradientStartColor = "#00f0ff",
  gradientStopColor = "#8b5cf6",
}: AnimatedBeamProps) {
  const [path, setPath] = useState("");

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const fromX = fromRect.left - containerRect.left + fromRect.width / 2;
      const fromY = fromRect.top - containerRect.top + fromRect.height / 2;
      const toX = toRect.left - containerRect.left + toRect.width / 2;
      const toY = toRect.top - containerRect.top + toRect.height / 2;

      // Draw a smooth bezier curve (C)
      const controlX = (fromX + toX) / 2;
      setPath(`M ${fromX} ${fromY} C ${controlX} ${fromY}, ${controlX} ${toY}, ${toX} ${toY}`);
    };

    // Initial calculation and listeners
    updatePath();
    
    const resizeObserver = new ResizeObserver(() => updatePath());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    window.addEventListener("resize", updatePath);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [containerRef, fromRef, toRef]);

  if (!path) return null;

  return (
    <svg
      className={`absolute inset-0 pointer-events-none w-full h-full z-0 ${className}`}
    >
      <path
        d={path}
        stroke={color}
        strokeWidth="2"
        strokeOpacity="0.12"
        fill="none"
      />
      <path
        d={path}
        stroke={`url(#beam-grad)`}
        strokeWidth="2"
        fill="none"
        strokeDasharray="8, 15"
        className="animate-[beam-flow_10s_linear_infinite]"
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
      <defs>
        <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
