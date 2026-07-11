"use client";

import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-black/40 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 z-10 relative">
        {/* Left info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-bold text-white text-sm tracking-wide font-poppins">Sanjay Raj M</span>
          </div>
          <p className="text-xs text-gray-500 font-sans mt-0.5">
            Designed & Developed by Sanjay Raj
          </p>
        </div>

        {/* Middle Info & Social */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Sanjayraj-17"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/sanjay-raj-m-0701042aa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:rajsanjay4813@gmail.com"
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-white/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
          <p className="text-[10px] text-gray-600 font-mono">
            &copy; 2026 All Rights Reserved.
          </p>
        </div>

        {/* Right - Back to Top */}
        <button
          onClick={handleScrollToTop}
          className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all flex items-center gap-2 text-xs font-mono font-medium tracking-wide cursor-pointer"
          aria-label="Back to Top"
        >
          <ArrowUp size={14} /> Back to Top
        </button>
      </div>
    </footer>
  );
}
