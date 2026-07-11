"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Handle scroll hiding/showing and active link spy
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Active Section Spy
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = currentScrollY + 150; // offset for trigger

      sections.forEach(section => {
        if (!section) return;
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).clientHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= top && scrollPosition < top + height) {
          if (id) setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
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
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen ? "bg-background" : "glass-panel"
      }`}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      style={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-purple-accent flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-glow-blue transition-transform duration-300 group-hover:scale-105">
            SR
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white tracking-wider text-sm md:text-base leading-none">Sanjay Raj M</span>
            <span className="text-[10px] text-gray-500 mt-0.5 tracking-widest font-mono">PORTFOLIO</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-white/5 px-6 pb-8 overflow-hidden"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`py-3 text-lg font-medium border-b border-white/5 transition-colors ${
                      isActive ? "text-accent" : "text-gray-400"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
