"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Code, Cpu, Database, FileText } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import AuroraBackground from "./reactbits/AuroraBackground";
import Spotlight from "./reactbits/Spotlight";
import GradientText from "./reactbits/GradientText";
import ShinyButton from "./reactbits/ShinyButton";

const GlassOrb = dynamic(() => import("./GlassOrb"), {
  ssr: false,
});

const roles = [
  "Full Stack Developer",
  "Next.js Developer",
  "Software Engineer",
  "AI Enthusiast"
];

// Tech Badges configs
const floatingTechs = [
  {
    icon: <Code size={20} className="text-yellow-400" />,
    styleClass: "top-[15%] left-[5%]",
    animateDelay: 0,
    label: "JavaScript",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-sky-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    styleClass: "bottom-[20%] left-[8%]",
    animateDelay: 1.5,
    label: "Web Dev",
  },
  {
    icon: <Cpu size={20} className="text-purple-400" />,
    styleClass: "top-[20%] right-[10%]",
    animateDelay: 3,
    label: "AI / ML",
  },
  {
    icon: <Database size={20} className="text-green-400" />,
    styleClass: "bottom-[15%] right-[12%]",
    animateDelay: 4.5,
    label: "SQL & NoSQL",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24">
        <path d="M12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm0-8C6.75 3.5 2.5 7.75 2.5 13s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5S17.25 3.5 12 3.5zm0 17c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z" />
      </svg>
    ),
    styleClass: "top-[50%] left-[3%]",
    animateDelay: 2.2,
    label: "React",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-emerald-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    styleClass: "top-[45%] right-[3%]",
    animateDelay: 3.8,
    label: "Python",
  }
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  // Typing Effect
  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTypingSpeed(1800); // Wait on word finish
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // Wait before typing next
        } else {
          setTypingSpeed(45);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  // Mouse Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 35;
      const y = (e.clientY - innerHeight / 2) / 35;
      setParallaxOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToSection = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <AuroraBackground className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(0, 240, 255, 0.3)" />
      
      <div 
        id="home" 
        className="relative max-w-6xl mx-auto px-6 w-full z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
      >
        {/* Left Info Column */}
        <motion.div 
          className="md:col-span-7 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-white/5 text-xs text-accent font-medium tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for Internships & Projects
          </div>

          <h3 className="text-gray-400 font-medium text-lg md:text-xl mb-2 font-poppins">
            Hello, I&apos;m
          </h3>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins text-white tracking-tight mb-4">
            SANJAY RAJ
          </h1>

          <div className="h-12 md:h-16 flex items-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-poppins text-white">
              I am a <GradientText colors={["#00f0ff", "#3b82f6", "#8b5cf6"]}>{currentText}</GradientText>
              <span className="w-1.5 h-8 ml-1 bg-accent inline-block animate-pulse align-middle" />
            </h2>
          </div>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-sans">
            Building scalable, modern web applications using Next.js, React, TypeScript, Supabase, and PostgreSQL.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <ShinyButton onClick={() => handleScrollToSection("#projects")}>
              <Code size={16} /> View Projects <ArrowRight size={14} />
            </ShinyButton>

            <a
              href="/Sanjay_Raj_Resume.pdf"
              download="Sanjay_Raj_Resume.pdf"
              className="px-6 py-3.5 rounded-xl glass-panel text-white font-medium text-sm flex items-center gap-2 transition-all hover:bg-white/10 hover:border-white/20 hover:scale-103 cursor-pointer"
            >
              <FileText size={16} /> Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Visual Column */}
        <motion.div 
          className="md:col-span-5 flex justify-center items-center relative min-h-[360px] sm:min-h-[440px] md:min-h-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {/* Parallax Container for tech badges */}
          <div 
            className="absolute inset-0 pointer-events-none hidden sm:block"
            style={{
              transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            {floatingTechs.map((tech, idx) => (
              <motion.div
                key={idx}
                className={`absolute glass-panel p-3 rounded-2xl flex items-center gap-2 border border-white/5 shadow-2xl ${tech.styleClass} animate-float-medium`}
                style={{
                  animationDelay: `${tech.animateDelay}s`
                }}
              >
                {tech.icon}
                <span className="text-[10px] text-gray-400 font-mono font-medium tracking-wide">{tech.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Premium Floating Glass Orb with Ambient Radial Glows */}
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-2 z-10">
            {/* Pulsing Backlight */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(0,240,255,0.12)_0%,transparent_75%] blur-3xl animate-pulse" />
            
            {/* Glow gradient rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-accent/25 animate-spin" style={{ animationDuration: "50s" }} />
            <div className="absolute inset-4 rounded-full border border-dashed border-purple-accent/30 animate-spin" style={{ animationDuration: "35s", animationDirection: "reverse" }} />
            
            {/* 3D Canvas Container */}
            <div className="w-full h-full flex items-center justify-center">
              <GlassOrb />
            </div>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
