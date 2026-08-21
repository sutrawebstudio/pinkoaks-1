"use client";

import React from "react";
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
  duration = 0.7,
  variant = "fade-up",
  className = "",
}: ScrollRevealProps) {
  // Motion variant presets (Round 5: Paced, visible entrance without bounce)
  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 28 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: -36 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: 36 },
      visible: { opacity: 1, x: 0 },
    },
    "scale-up": {
      hidden: { opacity: 0, scale: 0.96 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Smooth, stately ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
