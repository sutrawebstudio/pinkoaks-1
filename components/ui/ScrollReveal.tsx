"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  variant?: "fade-up" | "slide-left" | "slide-right" | "scale-up";
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.35,
  variant = "fade-up",
  className = "",
}: ScrollRevealProps) {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
  }, []);

  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: isReducedMotion ? 0 : 16 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: isReducedMotion ? 0 : -20 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: isReducedMotion ? 0 : 20 },
      visible: { opacity: 1, x: 0 },
    },
    "scale-up": {
      hidden: { opacity: 0, scale: isReducedMotion ? 1 : 0.97 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants[variant]}
      transition={{
        duration: isReducedMotion ? 0 : duration,
        delay: isReducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1], // Vercel-style snappy cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

