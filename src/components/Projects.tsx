"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import { motion } from "framer-motion";

// CSS Mockup generator representing domains without screenshots
interface ProjectMockupProps {
  id: string;
}

const ProjectMockup: React.FC<ProjectMockupProps> = ({ id }) => {
  switch (id) {
    case "falconx":
      return (
        <div className="w-full h-full relative bg-zinc-950 flex flex-col p-4 rounded-xl overflow-hidden border border-white/5 min-h-[220px]">
          {/* Browser header */}
          <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            <div className="h-4 w-36 bg-white/5 rounded-md mx-2 text-[8px] flex items-center justify-center text-gray-500 font-mono">
              falconx.shop
            </div>
          </div>
          {/* Store items preview */}
          <div className="grid grid-cols-3 gap-3 flex-grow">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 flex flex-col justify-between transition-colors hover:border-accent/20">
                <div className="w-full h-14 rounded-md bg-gradient-to-tr from-accent/20 to-purple-accent/20 animate-pulse" />
                <div className="h-1.5 w-3/4 bg-gray-500/30 rounded mt-2" />
                <div className="h-1 w-1/2 bg-gray-500/20 rounded mt-1" />
                <div className="h-3 w-full bg-accent/20 rounded mt-2 flex items-center justify-center text-[7px] text-accent font-semibold font-mono">
                  BUY
                </div>
              </div>
            ))}
          </div>
          {/* Cart & Total indicator */}
          <div className="mt-2.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-400">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Cart: 1 item</span>
            </div>
            <span className="text-accent font-semibold">$129.00</span>
          </div>
        </div>
      );

    case "emall":
      return (
        <div className="w-full h-full relative bg-zinc-950 flex flex-col p-4 rounded-xl overflow-hidden border border-white/5 min-h-[220px]">
          {/* Database/Inventory screen */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 text-[9px] font-mono text-gray-500">
            <span>DATABASE LEDGER</span>
            <span className="text-purple-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
              ONLINE
            </span>
          </div>
          
          <div className="flex-grow space-y-2.5">
            {[
              { name: "Algorithms & Design", stock: 12, status: "Active" },
              { name: "Intro to MySQL", stock: 0, status: "Sold Out" },
              { name: "Web Dev Handbook", stock: 8, status: "Active" }
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between bg-white/[0.01] border border-white/5 p-2 rounded-lg text-[9px] font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded bg-purple-accent/30 flex items-center justify-center text-[6px] text-purple-accent">DB</div>
                  <span className="text-gray-300 truncate max-w-[140px]">{row.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Q:{row.stock}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[7px] font-semibold uppercase ${
                    row.status === "Active" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                  }`}>
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-500">
            <span>Query: SELECT * FROM textbooks</span>
            <span>0.004s</span>
          </div>
        </div>
      );

    case "disease":
      return (
        <div className="w-full h-full relative bg-zinc-950 flex flex-col p-4 rounded-xl overflow-hidden border border-white/5 min-h-[220px]">
          {/* AI scan screen */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 text-[9px] font-mono text-gray-500">
            <span>AI SCANNING MODULE</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              RUNNING
            </span>
          </div>

          <div className="flex-grow flex gap-4 items-center">
            {/* Holographic scanner */}
            <div className="relative w-18 h-18 rounded-full border border-emerald-500/20 flex items-center justify-center overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 to-transparent animate-spin" style={{ animationDuration: "6s" }} />
              <div className="w-12 h-12 rounded-full border border-purple-500/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-emerald-500/30 animate-ping" />
              </div>
            </div>
            {/* Scan Metrics */}
            <div className="flex-grow space-y-2">
              <div className="text-[10px] font-mono text-gray-300 flex justify-between">
                <span>Model Confidence</span>
                <span className="text-emerald-400 font-bold">96.8%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[96.8%] bg-gradient-to-r from-emerald-500 to-accent" />
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-1.5 rounded text-[8px] font-mono text-gray-400 truncate">
                Log: SVM_Classifier.predict(patient_log)
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-500">
            <span>Features analyzed: 18</span>
            <span className="text-emerald-400 font-semibold">CLASSIFICATION SUCCESS</span>
          </div>
        </div>
      );

    case "coffeeshop":
      return (
        <div className="w-full h-full relative bg-zinc-950 flex flex-col p-4 rounded-xl overflow-hidden border border-white/5 min-h-[220px]">
          {/* Cafe landing mockup */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[8px] font-mono text-gray-500">
            <span>THE BEAN ROASTERY</span>
            <span>RESERVATIONS</span>
          </div>

          <div className="flex-grow flex flex-col justify-center items-center relative py-3">
            <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(245,158,11,0.04)_0%,transparent_60%]" />
            {/* Coffee cup graphic */}
            <div className="w-14 h-11 border-2 border-amber-500/30 rounded-b-xl relative flex items-center justify-center mt-1">
              <div className="absolute -right-3 top-1 w-3 h-6 border-2 border-l-0 border-amber-500/30 rounded-r-md" />
              {/* Steam waves */}
              <div className="absolute -top-3.5 left-1/4 w-1 h-3 bg-amber-500/25 rounded-full animate-pulse" />
              <div className="absolute -top-4.5 left-1/2 w-1 h-4 bg-amber-500/25 rounded-full animate-pulse" />
              <div className="absolute -top-3.5 left-3/4 w-1 h-3 bg-amber-500/25 rounded-full animate-pulse" />
            </div>
            
            <span className="text-[10px] font-mono font-semibold tracking-wider text-amber-300 mt-3 uppercase">Brew & Connect</span>
          </div>

          <div className="mt-1 pt-2 border-t border-white/5 flex justify-between text-[8px] font-mono text-gray-500">
            <span>Menu: Espresso | Latte | Drip</span>
            <span className="text-amber-500">$4.50+</span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

interface ProjectImageProps {
  src: string;
  alt: string;
  projectName: string;
  projectId: string;
}

// Resilient Image Loader that falls back to custom CSS Mockups if missing
function ProjectImage({ src, alt, projectName, projectId }: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src || src === "#" || src === "") {
    return <ProjectMockup id={projectId} />;
  }

  return (
    <div className="w-full h-full relative overflow-hidden rounded-xl border border-white/5">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        onError={() => setHasError(true)}
        sizes="(max-width: 1024px) 100vw, 40vw"
        loading="lazy"
      />
    </div>
  );
}

const projectsData = [
  {
    id: "falconx",
    title: "FalconX E-Commerce Platform",
    category: "Featured Web Application",
    description: "A premium, next-generation e-commerce web application featuring high-performance checkout flows, rich product search indexing, modular structures, and smooth interactive design layouts. Engineered for modern retail platforms.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe API"],
    features: [
      "High-performance shopping cart with local caching",
      "Secure Checkout pipeline utilizing Stripe webhooks",
      "Fuzzy-logic search engine & filter indices",
      "Sleek dashboards for stocks & categories"
    ],
    image: "/projects/falconx.png",
    github: "https://github.com/Sanjayraj-17",
    live: "https://falcon-x-ecommerce.vercel.app/"
  },
  {
    id: "emall",
    title: "E-Mall Management System",
    category: "Database & Inventory",
    description: "A comprehensive digital catalog system built to manage, index, and trade second-hand academic textbooks. Optimized for transactional inventory control.",
    tech: ["HTML5", "CSS3", "JavaScript", "Python", "MySQL"],
    features: [
      "Relational database schema for textbooks",
      "Inventory dashboard with stock alerts",
      "User management and trade listing tools",
      "Optimized SQL queries for fast searching"
    ],
    image: "/projects/emall.png",
    github: "https://github.com/Sanjayraj-17",
    live: "#"
  },
  {
    id: "disease",
    title: "AI Disease Prediction System",
    category: "Machine Learning & AI",
    description: "An intelligent healthcare diagnostics system utilizing supervised machine learning models to analyze patient clinical logs and predict diagnostic classifications.",
    tech: ["Python", "Flask", "Scikit-Learn", "NumPy", "Tailwind CSS"],
    features: [
      "Supervised machine learning algorithms (SVM/RF)",
      "Patient diagnostic reports & risk factor analysis",
      "High precision scoring and dataset indexing",
      "Clean diagnostics logger interface"
    ],
    image: "/projects/disease-prediction.png",
    github: "https://github.com/Sanjayraj-17",
    live: "#"
  },
  {
    id: "coffeeshop",
    title: "Coffee Shop Website",
    category: "Frontend Showcase",
    description: "A modern, highly interactive storefront for a gourmet coffee roastery. Features seamless smooth-scroll navigation and a responsive booking workflow.",
    tech: ["HTML5", "CSS3", "JavaScript", "Framer Motion"],
    features: [
      "Responsive aesthetic user experience",
      "Interactive coffee menu filters",
      "Online table reservation workflow",
      "Smooth scrolling and hover animations"
    ],
    image: "/projects/coffeeshop.png",
    github: "https://github.com/Sanjayraj-17",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 max-w-6xl mx-auto px-6 relative w-full overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-radial-[circle_at_center,rgba(0,240,255,0.01)_0%,transparent_70%] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-radial-[circle_at_center,rgba(139,92,246,0.01)_0%,transparent_70%] pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4 tracking-tight">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mb-4 font-sans leading-relaxed">
            A curated showcase of engineering projects spanning full stack development, machine learning, and modern interfaces.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-accent rounded-full" />
        </div>

        {/* Unified Alternating Projects List */}
        <div className="flex flex-col w-full">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500 p-6 md:p-10 hover:border-white/10 group mb-16 shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                {/* Background soft glow based on project type */}
                <div className={`absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-[0.03] transition-opacity group-hover:opacity-[0.06] ${
                  project.id === "falconx" ? "bg-accent" : 
                  project.id === "disease" ? "bg-emerald-400" : 
                  project.id === "emall" ? "bg-purple-accent" : "bg-amber-500"
                }`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Visual column */}
                  <div className={`lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center p-5 min-h-[260px] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}>
                    {/* Orbit effect background */}
                    <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(255,255,255,0.01)_0%,transparent_80%]" />
                    
                    <div className="w-full h-full relative z-10 flex items-center justify-center">
                      <ProjectImage
                        src={project.image}
                        alt={project.title}
                        projectName={project.title}
                        projectId={project.id}
                      />
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-semibold tracking-wider uppercase bg-white/5 border border-white/5 ${
                          project.id === "falconx" ? "text-accent border-accent/25" : 
                          project.id === "disease" ? "text-emerald-400 border-emerald-400/25" : 
                          project.id === "emall" ? "text-purple-400 border-purple-400/25" : "text-amber-400 border-amber-400/25"
                        }`}>
                          {project.category}
                        </span>
                        {project.id === "falconx" && (
                          <span className="flex items-center gap-1 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                            <Sparkles size={10} className="text-accent" /> Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-white mb-4 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                        {project.description}
                      </p>

                      {/* Feature checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                            <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${
                              project.id === "falconx" ? "text-accent" : 
                              project.id === "disease" ? "text-emerald-400" : 
                              project.id === "emall" ? "text-purple-400" : "text-amber-400"
                            }`} />
                            <span className="font-sans leading-relaxed text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 text-[10px] font-mono font-medium text-gray-400 bg-white/[0.03] border border-white/5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4 pt-5 border-t border-white/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-white/[0.03] border border-white/5 text-white font-medium text-xs sm:text-sm flex items-center gap-2 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 cursor-pointer"
                      >
                        <Github size={14} /> Source Code
                      </a>
                      {project.live && project.live !== "#" ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 rounded-xl bg-gradient-to-r from-accent to-primary text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-glow-blue hover:scale-102 transition-all duration-300 cursor-pointer glow-button"
                        >
                          <ExternalLink size={13} /> Live Demo
                        </a>
                      ) : (
                        <span className="px-5 py-3 rounded-xl bg-white/[0.01] border border-dashed border-white/5 text-gray-500 font-medium text-xs sm:text-sm flex items-center gap-2 cursor-not-allowed select-none">
                          <ExternalLink size={13} /> Development Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
