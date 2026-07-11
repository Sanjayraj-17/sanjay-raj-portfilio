"use client";
import React, { useRef, useState } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spotlightColor?: string;
  spotlightRadius?: number;
}

export default function SpotlightCard({
  children,
  spotlightColor = "rgba(0, 240, 255, 0.1)",
  spotlightRadius = 300,
  className = "",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden glass-panel ${className}`}
      {...props}
    >
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          opacity,
          background: `radial-gradient(${spotlightRadius}px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
