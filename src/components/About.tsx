"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Award, Briefcase, CheckCircle, Code, Lightbulb, Users, Terminal, Cpu, Database, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedBeam } from "./magicui/AnimatedBeam";

const stats = [
  {
    icon: <Briefcase className="text-accent" size={24} />,
    title: "Projects Completed",
    value: "5+ Projects",
    description: "Full stack web & ML systems",
  },
  {
    icon: <Code className="text-purple-accent" size={24} />,
    title: "Technologies Learned",
    value: "12+ Technologies",
    description: "Python, JavaScript, Next.js, SQL",
  },
  {
    icon: <Award className="text-yellow-500" size={24} />,
    title: "Certifications",
    value: "2+ Industry Certs",
    description: "Great Learning, MongoDB",
  },
  {
    icon: <CheckCircle className="text-emerald-400" size={24} />,
    title: "Current Status",
    value: "Open to Internships",
    description: "Seeking software engineering roles",
  },
];

const highlights = [
  {
    icon: <Lightbulb className="text-yellow-400" size={20} />,
    title: "Problem Solver",
    text: "Analytical approach to solving algorithmic challenges.",
  },
  {
    icon: <Users className="text-blue-400" size={20} />,
    title: "Team Player",
    text: "Collaborative mindset with strong communications.",
  },
  {
    icon: <Briefcase className="text-purple-400" size={20} />,
    title: "Innovative Thinker",
    text: "Constantly researching & building side projects.",
  },
];

function TechBeamDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftTopRef = useRef<HTMLDivElement>(null);
  const leftBottomRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[200px] flex items-center justify-between px-8 bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden mb-6 py-4"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(139,92,246,0.015)_0%,transparent_70%] pointer-events-none" />

      {/* Left side nodes */}
      <div className="flex flex-col justify-between h-full py-4 z-10">
        <div ref={leftTopRef} className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-[#3776AB] shadow-lg shadow-blue-500/5 hover:border-[#3776AB]/30 transition-colors">
          <Terminal size={18} />
        </div>
        <div ref={leftBottomRef} className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-[#00f0ff] shadow-lg shadow-cyan-500/5 hover:border-[#00f0ff]/30 transition-colors">
          <Globe size={18} />
        </div>
      </div>

      {/* Center node - Profile Photo Integration */}
      <div className="z-10">
        <div ref={centerRef} className="w-14 h-14 rounded-full bg-gradient-to-tr from-accent to-purple-accent border-2 border-white/10 flex items-center justify-center shadow-xl shadow-glow-purple overflow-hidden relative">
          <Image
            src="/profile.jpg"
            alt="Sanjay Raj"
            fill
            className="object-cover object-center scale-105"
            sizes="56px"
          />
        </div>
      </div>

      {/* Right side nodes */}
      <div className="flex flex-col justify-between h-full py-4 z-10">
        <div ref={rightTopRef} className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-[#8b5cf6] shadow-lg shadow-purple-500/5 hover:border-[#8b5cf6]/30 transition-colors">
          <Cpu size={18} />
        </div>
        <div ref={rightBottomRef} className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center text-green-400 shadow-lg shadow-green-500/5 hover:border-green-400/30 transition-colors">
          <Database size={18} />
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam containerRef={containerRef} fromRef={leftTopRef} toRef={centerRef} color="#3776AB" duration={3} delay={0} />
      <AnimatedBeam containerRef={containerRef} fromRef={leftBottomRef} toRef={centerRef} color="#00f0ff" duration={2.5} delay={0.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={rightTopRef} toRef={centerRef} color="#8b5cf6" duration={2.8} delay={0.2} />
      <AnimatedBeam containerRef={containerRef} fromRef={rightBottomRef} toRef={centerRef} color="#4ade80" duration={3.2} delay={0.7} />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-radial-[circle_at_center,rgba(139,92,246,0.02)_0%,transparent_70%] pointer-events-none" />

      <div className="relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Text content & Profile Image - Left Column */}
          <motion.div 
            className="lg:col-span-8 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Bio text */}
              <div className="md:col-span-8 space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
                <p>
                  I am a passionate <strong className="text-white font-semibold">Software Developer</strong> with specialized skills in Python Full Stack development. Currently pursuing my B.E. in Computer Science and Engineering, I focus on building efficient, secure solutions to real-world business challenges.
                </p>
                <p>
                  With a strong interest in UI/UX and a user-first engineering mindset, I strive to create web platforms that perform exceptionally well and feel premium. I love exploring state-of-the-art architectures and building clean interfaces.
                </p>
              </div>

              {/* Profile Image Frame */}
              <div className="md:col-span-4 flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-[220px] md:max-w-none rounded-2xl border border-white/10 p-1.5 bg-gradient-to-b from-white/10 to-transparent shadow-2xl overflow-hidden group">
                  {/* Inner shadow/gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-white/5 z-10 pointer-events-none rounded-xl" />
                  
                  {/* Soft backing glow */}
                  <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-accent/20 blur-2xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* The profile image */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden aspect-square border border-white/5">
                    <Image
                      src="/profile.jpg"
                      alt="Sanjay Raj M"
                      fill
                      className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-102 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 250px"
                      priority
                    />
                  </div>
                  
                  {/* Tech badge/Overlay */}
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-white">PORTFOLIO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((h, i) => (
                <div 
                  key={i} 
                  className="glass-panel p-4 rounded-xl border border-white/5 flex flex-col gap-2 transition-all duration-300 hover:border-white/10 hover:-translate-y-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    {h.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm font-poppins">{h.title}</h4>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side Bio Card - Right Column */}
          <motion.div 
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {/* Tech stack animated beam graph */}
            <TechBeamDiagram />

            {/* Quick Profile Panel */}
            <div className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
              {/* Corner accent glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/10 blur-xl rounded-full transition-opacity duration-300 group-hover:opacity-100" />
              
              <h3 className="text-xl font-bold font-poppins text-white mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-accent to-purple-accent" />
                Quick Profile
              </h3>
              
              <ul className="space-y-4 font-sans text-sm md:text-base">
                <li className="flex justify-between py-2.5 border-b border-white/5">
                  <span className="text-gray-500 font-medium">Domain Focus:</span>
                  <span className="text-gray-300 font-semibold text-right">Web Applications & AI Systems</span>
                </li>
                <li className="flex justify-between py-2.5 border-b border-white/5">
                  <span className="text-gray-500 font-medium">Pursuing:</span>
                  <span className="text-gray-300 font-semibold text-right">B.E. Computer Science & Engineering</span>
                </li>
                <li className="flex justify-between py-2.5 border-b border-white/5">
                  <span className="text-gray-500 font-medium">Target Role:</span>
                  <span className="text-gray-300 font-semibold text-right">Full Stack / Software Engineer</span>
                </li>
                <li className="flex justify-between py-2.5">
                  <span className="text-gray-500 font-medium">Languages:</span>
                  <span className="text-gray-300 font-semibold text-right">English, Tamil</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Statistic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex flex-col items-start gap-4 transition-all duration-300 cursor-default group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:bg-white/10">
                {stat.icon}
              </div>
              <div>
                <h4 className="text-xs font-mono font-medium text-gray-500 uppercase tracking-wider mb-1">
                  {stat.title}
                </h4>
                <p className="text-2xl font-bold font-poppins text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 font-sans">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
