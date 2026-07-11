"use client";
import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
}

export default function ShinyButton({
  children,
  className = "",
  ...props
}: ShinyButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent to-primary text-white font-medium text-sm overflow-hidden flex items-center justify-center gap-2 border border-white/10 shadow-lg shadow-glow-blue cursor-pointer group ${className}`}
      {...props}
    >
      {/* Glare Shine */}
      <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 translate-x-[-150%] group-hover:animate-shiny-glare pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
