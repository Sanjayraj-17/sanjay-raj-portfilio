"use client";

import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

const contactDetails = [
  {
    icon: <Github size={20} />,
    title: "GitHub",
    value: "github.com/Sanjayraj-17",
    href: "https://github.com/Sanjayraj-17",
    color: "group-hover:text-white"
  },
  {
    icon: <Linkedin size={20} />,
    title: "LinkedIn",
    value: "linkedin.com/in/sanjay-raj-m",
    href: "https://linkedin.com/in/sanjay-raj-m-0701042aa",
    color: "group-hover:text-blue-400"
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "rajsanjay4813@gmail.com",
    href: "mailto:rajsanjay4813@gmail.com",
    color: "group-hover:text-red-400"
  },
  {
    icon: <Phone size={20} />,
    title: "Phone",
    value: "+91 93443 28460",
    href: "tel:+919344328460",
    color: "group-hover:text-green-400"
  },
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Tamil Nadu, India",
    href: "#",
    color: "group-hover:text-accent"
  }
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  const validateField = (name: string, value: string) => {
    let errorMsg = "";
    if (!value.trim()) {
      errorMsg = "This field is required";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errorMsg = "Please enter a valid email address";
      }
    }
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
    return errorMsg === "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent duplicate submissions
    if (loading) return;

    // Validate all fields
    const isNameValid = validateField("name", formData.name);
    const isEmailValid = validateField("email", formData.email);
    const isSubjectValid = validateField("subject", formData.subject);
    const isMessageValid = validateField("message", formData.message);

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      showToast("Please correct the errors in the form.", "error");
      return;
    }

    setLoading(true);

    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    try {
      const isPlaceholder =
        !publicKey ||
        !serviceId ||
        !templateId ||
        publicKey === "YOUR_PUBLIC_KEY" ||
        serviceId === "YOUR_SERVICE_ID" ||
        templateId === "YOUR_TEMPLATE_ID";

      if (isPlaceholder) {
        // Simulate network delay for realistic feedback
        await new Promise((resolve) => setTimeout(resolve, 1000));

        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });

        showToast("Demo Send: Please add actual EmailJS keys to .env.local to receive emails.", "success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        if (formRef.current) {
          formRef.current.reset();
        }
        return;
      }

      // Send email via EmailJS API
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });

      showToast("Message sent successfully!", "success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast("Failed to send message. Please verify your connection or try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6 relative">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-radial-[circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%] pointer-events-none" />

      {/* Custom Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-2xl glass-panel border flex items-start gap-3 shadow-2xl max-w-md ${
              toast.type === "success" 
                ? "border-emerald-500/30 bg-emerald-950/20 text-emerald-300"
                : "border-red-500/30 bg-red-950/20 text-red-300"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="shrink-0 text-emerald-400 mt-0.5" size={18} />
            ) : (
              <AlertCircle className="shrink-0 text-red-400 mt-0.5" size={18} />
            )}
            
            <div className="text-xs font-sans leading-relaxed">
              {toast.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-purple-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Social Cards - Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-poppins text-white mb-2">Connect Info</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Feel free to reach out via email, social links, or submit a message directly through the form. Let&apos;s build something great.
            </p>

            <div className="space-y-4">
              {contactDetails.map((detail, idx) => (
                <a
                  key={idx}
                  href={detail.href}
                  target={detail.href !== "#" && detail.href !== "mailto:rajsanjay4813@gmail.com" && detail.href !== "tel:+919344328460" ? "_blank" : undefined}
                  rel={detail.href !== "#" ? "noopener noreferrer" : undefined}
                  className="glass-panel p-4.5 rounded-2xl border border-white/5 flex items-center gap-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03] group block cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 transition-colors duration-300 ${detail.color}`}>
                    {detail.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-medium text-gray-500 uppercase tracking-widest mb-0.5">
                      {detail.title}
                    </h4>
                    <p className="text-sm font-semibold text-gray-300 font-sans group-hover:text-white transition-colors">
                      {detail.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <motion.div 
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow accent */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-accent/10 blur-2xl rounded-full" />
            
            <h3 className="text-xl font-bold font-poppins text-white mb-6">Send Me a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Name field */}
              <div className="space-y-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => validateField("name", formData.name)}
                  placeholder="Your Name"
                  disabled={loading}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                    errors.name 
                      ? "border-red-500/50 focus:ring-red-500/50" 
                      : "border-white/5 focus:border-accent/40 focus:ring-accent/40 focus:bg-white/[0.04]"
                  }`}
                />
                {errors.name && (
                  <span className="text-[10px] text-red-400 font-mono block pl-1">{errors.name}</span>
                )}
              </div>

              {/* Email field */}
              <div className="space-y-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => validateField("email", formData.email)}
                  placeholder="Your Email"
                  disabled={loading}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                    errors.email 
                      ? "border-red-500/50 focus:ring-red-500/50" 
                      : "border-white/5 focus:border-accent/40 focus:ring-accent/40 focus:bg-white/[0.04]"
                  }`}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-400 font-mono block pl-1">{errors.email}</span>
                )}
              </div>

              {/* Subject field */}
              <div className="space-y-1">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={() => validateField("subject", formData.subject)}
                  placeholder="Subject"
                  disabled={loading}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                    errors.subject 
                      ? "border-red-500/50 focus:ring-red-500/50" 
                      : "border-white/5 focus:border-accent/40 focus:ring-accent/40 focus:bg-white/[0.04]"
                  }`}
                />
                {errors.subject && (
                  <span className="text-[10px] text-red-400 font-mono block pl-1">{errors.subject}</span>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => validateField("message", formData.message)}
                  placeholder="Your Message"
                  rows={5}
                  disabled={loading}
                  className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.02] border text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                    errors.message 
                      ? "border-red-500/50 focus:ring-red-500/50" 
                      : "border-white/5 focus:border-accent/40 focus:ring-accent/40 focus:bg-white/[0.04]"
                  }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-400 font-mono block pl-1">{errors.message}</span>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-primary text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-glow-blue hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100 cursor-pointer glow-button"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
