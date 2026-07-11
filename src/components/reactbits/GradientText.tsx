"use client";
import React, { ReactNode } from "react";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationDuration?: string;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#00f0ff", "#3b82f6", "#8b5cf6"],
  animationDuration = "8s",
  ...props
}: GradientTextProps) {
  const gradient = `linear-gradient(90deg, ${colors.join(", ")}, ${colors[0]})`;
  
  return (
    <span
      className={`inline-block text-transparent bg-clip-text animate-shimmer-text bg-[length:200%_auto] ${className}`}
      style={{
        backgroundImage: gradient,
        animationDuration: animationDuration,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite"
      }}
      {...props}
    >
      {children}
    </span>
  );
}
