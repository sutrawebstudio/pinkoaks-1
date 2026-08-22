"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PinkOaksLogo from "./PinkOaksLogo";
import PinkBlossomIcon from "./PinkBlossomIcon";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Session storage check so it only plays once per session on fresh load
    const hasSeenLoader = sessionStorage.getItem("pinkoaks_loader_seen");
    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("pinkoaks_loader_seen", "true");
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#E8E1D3] flex flex-col items-center justify-center pointer-events-none select-none"
        >
          <div className="relative flex flex-col items-center space-y-5 px-6">
            {/* Soft Blossom Watermark Ambient Pulse */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 0.15 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute -top-12 opacity-15"
            >
              <PinkBlossomIcon size={180} className="text-[#C15F70]" />
            </motion.div>

            {/* Logo Lockup Center Entrance */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-[#E8E1D3] p-5 rounded-2xl border border-[#C15F70]/30 shadow-xs relative z-10"
            >
              <PinkOaksLogo size="md" />
            </motion.div>

            {/* Drawing Gold Rule Underneath */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#B78D4A] to-transparent"
            />

            {/* Brand Sign-off Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-serif text-xs text-[#241C20]/80 tracking-[0.2em] uppercase font-medium"
            >
              Jaipur &nbsp;·&nbsp; <span className="font-script text-sm text-[#C15F70] normal-case tracking-normal">Live Rooted</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
