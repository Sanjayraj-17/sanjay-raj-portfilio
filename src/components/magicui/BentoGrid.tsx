import React, { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 w-full ${className}`}>
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export function BentoCard({ children, className = "" }: BentoCardProps) {
  return (
    <div
      className={`glass-panel rounded-3xl border border-white/5 overflow-hidden group relative flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02] ${className}`}
    >
      {children}
    </div>
  );
}
