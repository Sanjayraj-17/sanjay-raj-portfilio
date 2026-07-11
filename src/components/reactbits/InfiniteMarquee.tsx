"use client";
import React, { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: string;
  pauseOnHover?: boolean;
  className?: string;
}

export default function InfiniteMarquee({
  children,
  direction = "left",
  speed = "30s",
  pauseOnHover = true,
  className = "",
}: InfiniteMarqueeProps) {
  const directionClass = direction === "right" ? "reverse" : "normal";
  
  return (
    <div className={`overflow-hidden flex w-full relative select-none ${className}`}>
      {/* Fade Gradients for visual edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div
        className={`flex gap-4 shrink-0 animate-marquee min-w-full ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animationDuration: speed,
          animationDirection: directionClass,
        }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex gap-4 shrink-0 animate-marquee min-w-full ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animationDuration: speed,
          animationDirection: directionClass,
        }}
      >
        {children}
      </div>
    </div>
  );
}
