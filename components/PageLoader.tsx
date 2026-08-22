"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PinkOaksLogo from "./PinkOaksLogo";
import PinkBlossomIcon from "./PinkBlossomIcon";

// UX Note: 5s presentational delay applied to in-page anchor navigation per user request.
// (Note: This introduces a 5000ms delay on clicking anchor links before scrolling to target section).

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion OS setting
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    // Initial session load check
    const hasSeenLoader = sessionStorage.getItem("pinkoaks_loader_seen");
    if (hasSeenLoader) {
      setIsLoading(false);
    } else {
      document.body.setAttribute("aria-busy", "true");
      document.body.style.overflow = "hidden";

      const MIN_LOADER_TIME = 10000;
      const startTime = Date.now();

      const handleInitialComplete = () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(MIN_LOADER_TIME - elapsed, 0);

        setTimeout(() => {
          setIsLoading(false);
          document.body.removeAttribute("aria-busy");
          document.body.style.overflow = "";
          sessionStorage.setItem("pinkoaks_loader_seen", "true");
        }, remaining);
      };

      if (document.readyState === "complete") {
        handleInitialComplete();
      } else {
        window.addEventListener("load", handleInitialComplete, { once: true });
      }
    }

    // In-page nav transition event listener (5000ms delay per spec)
    const handleNavLoader = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetId?: string; duration?: number }>;
      const duration = customEvent.detail?.duration || 5000;
      const targetId = customEvent.detail?.targetId;

      setIsLoading(true);
      document.body.setAttribute("aria-busy", "true");
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
        setIsLoading(false);
        document.body.removeAttribute("aria-busy");
        document.body.style.overflow = "";
      }, duration);
    };

    window.addEventListener("pinkoaks_nav_loader", handleNavLoader);

    return () => {
      window.removeEventListener("pinkoaks_nav_loader", handleNavLoader);
      document.body.removeAttribute("aria-busy");
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: isReducedMotion ? 0 : 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-[#241C20] flex flex-col items-center justify-center select-none"
        >
          <div className="relative flex flex-col items-center space-y-6 px-6">
            {/* Ambient Blossom Motif Watermark Pulse */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: isReducedMotion ? 1 : [0.9, 1.1, 0.9], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-14"
            >
              <PinkBlossomIcon size={200} className="text-[#C15F70]" />
            </motion.div>

            {/* Logo Lockup Center Entrance inside Holding Card */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: isReducedMotion ? 0 : 0.6, ease: "easeOut" }}
              className="bg-[#E8E1D3] p-5 rounded-xl border border-[#C15F70]/40 shadow-xl relative z-10"
            >
              <PinkOaksLogo size="md" />
            </motion.div>

            {/* Thin Champagne Gold Progress Line */}
            <div className="w-36 h-[2px] bg-[#E8E1D3]/15 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: isReducedMotion ? 0 : 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-[#B78D4A] via-[#C15F70] to-[#B78D4A]"
              />
            </div>

            {/* Brand Sign-off Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isReducedMotion ? 0 : 0.5, delay: isReducedMotion ? 0 : 0.4 }}
              className="font-serif text-xs text-[#E8E1D3]/90 tracking-[0.25em] uppercase font-medium"
            >
              Bani Park, Jaipur &nbsp;·&nbsp; <span className="font-script text-sm text-[#C15F70] normal-case tracking-normal">Live Rooted</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
