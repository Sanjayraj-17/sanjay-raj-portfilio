import React from "react";
import BackgroundGrid from "@/components/BackgroundGrid";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";
import ScrollReveal from "@/components/reactbits/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-purple-accent/30 text-foreground overflow-hidden">
      {/* Premium Spotlight and Grid Background */}
      <BackgroundGrid />

      {/* Navigation */}
      <Navbar />

      {/* Floating social sidebar links */}
      <FloatingSocials />

      {/* Page Sections */}
      <main className="w-full flex flex-col items-center">
        {/* Hero Section */}
        <Hero />

        {/* Divider */}
        <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* About Section */}
        <ScrollReveal className="w-full flex justify-center">
          <About />
        </ScrollReveal>

        {/* Divider */}
        <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Skills Section */}
        <ScrollReveal className="w-full flex justify-center">
          <Skills />
        </ScrollReveal>

        {/* Divider */}
        <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Projects Section */}
        <ScrollReveal className="w-full flex justify-center">
          <Projects />
        </ScrollReveal>

        {/* Divider */}
        <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Education, Certifications and Strengths */}
        <ScrollReveal className="w-full flex justify-center">
          <Education />
        </ScrollReveal>

        {/* Divider */}
        <div className="w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Contact Section */}
        <ScrollReveal className="w-full flex justify-center">
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
