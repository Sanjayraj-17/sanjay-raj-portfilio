"use client";

import React from "react";
import { GraduationCap, Award, CheckCircle2, Calendar, Star, FileText } from "lucide-react";
import { motion } from "framer-motion";

const educationHistory = [
  {
    year: "2023 - 2027",
    degree: "B.E Computer Science and Engineering",
    institution: "PSNA College of Engineering and Technology",
    performance: "CGPA: 7.7",
    highlight: true,
  },
  {
    year: "2021 - 2022",
    degree: "Higher Secondary",
    institution: "State Board Syllabus",
    performance: "Percentage: 85.5%",
    highlight: false,
  },
  {
    year: "2019 - 2020",
    degree: "SSLC",
    institution: "State Board Syllabus",
    performance: "Percentage: 98%",
    highlight: false,
  },
];

const certifications = [
  {
    title: "Generative AI for Beginners",
    issuer: "Great Learning",
    logoText: "GL",
    color: "from-blue-600 to-sky-400",
    link: "#",
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    logoText: "MDB",
    color: "from-emerald-600 to-teal-400",
    link: "#",
  },
];

const strengths = [
  {
    title: "Good Communication",
    description: "Articulating complex ideas clearly in teams.",
  },
  {
    title: "Team Work",
    description: "Collaborative mindset focused on mutual progress.",
  },
  {
    title: "Adaptability",
    description: "Quick learning curve for new frameworks and tech.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-6 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-radial-[circle_at_center,rgba(0,240,255,0.03)_0%,transparent_70%] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Education Timeline - Left Column */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-md shadow-glow-blue">
              <GraduationCap size={20} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white">
              Education <span className="text-gray-500 font-normal">Timeline</span>
            </h2>
          </div>

          <div className="relative border-l border-white/5 pl-6 ml-5 space-y-12">
            {educationHistory.map((edu, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Bullet node marker */}
                <div 
                  className={`absolute -left-[31px] top-1.5 w-[11px] h-[11px] rounded-full border-2 ${
                    edu.highlight 
                      ? "bg-accent border-accent shadow-md shadow-glow-blue scale-125" 
                      : "bg-background border-white/20"
                  }`} 
                />

                <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row justify-between items-start gap-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03]">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-medium text-gray-500 mb-2">
                      <Calendar size={12} /> {edu.year}
                    </div>
                    <h3 className="text-lg font-bold font-poppins text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                  </div>

                  {/* Highlights/CGPA */}
                  <div className={`px-3 py-1.5 rounded-xl border text-xs font-semibold font-mono tracking-wider shrink-0 ${
                    edu.highlight
                      ? "bg-accent/10 border-accent/30 text-accent"
                      : "bg-white/5 border-white/5 text-gray-400"
                  }`}>
                    {edu.performance}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Strengths - Right Column */}
        <div className="lg:col-span-5 space-y-16">
          
          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-purple-accent/10 border border-purple-accent/20 flex items-center justify-center text-purple-accent shadow-md shadow-glow-purple">
                <Award size={20} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white">
                Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 flex items-center gap-5 group transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Decorative Issuer Logo Placeholder */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${cert.color} flex items-center justify-center font-bold text-sm text-white font-mono tracking-wider shrink-0 shadow-lg shadow-black/30 group-hover:scale-105 transition-transform duration-300`}>
                    {cert.logoText}
                  </div>

                  <div className="flex-1 flex flex-col justify-between items-start min-w-0">
                    <div className="w-full">
                      <h3 className="text-base font-bold font-poppins text-white mb-0.5 truncate group-hover:text-accent transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-gray-500 text-xs font-mono font-medium mb-3">
                        {cert.issuer}
                      </p>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-mono font-semibold text-gray-300 flex items-center gap-1.5 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                    >
                      <FileText size={12} /> View Certificate
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Strengths */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shadow-md">
                <Star size={20} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white">
                Key Strengths
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {strengths.map((str, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white font-poppins mb-0.5">
                      {str.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {str.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
