"use client";

import { Github, Linkedin } from "@/components/BrandIcons";
import { motion } from "framer-motion";

export default function FloatingSocials() {
  return (
    <motion.div
      className="fixed bottom-0 left-8 z-40 hidden md:flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/Sanjayraj-17"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl glass-panel border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 duration-300"
          aria-label="GitHub Profile"
        >
          <Github size={18} />
        </a>
        
        <a
          href="https://linkedin.com/in/sanjay-raj-m-0701042aa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl glass-panel border-white/5 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1 duration-300"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={18} />
        </a>
      </div>
      
      {/* Decorative vertical line */}
      <div className="w-[1px] h-24 bg-gradient-to-t from-white/10 to-transparent" />
    </motion.div>
  );
}
