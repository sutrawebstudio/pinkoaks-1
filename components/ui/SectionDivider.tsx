"use client";

import React from "react";
import { motion } from "framer-motion";
import PinkBlossomIcon from "../PinkBlossomIcon";

interface SectionDividerProps {
  number?: string;
  title?: string;
  className?: string;
  icon?: "leaf" | "flower";
}

export default function SectionDivider({
  number,
  title,
  className = "",
  icon = "leaf",
}: SectionDividerProps) {
  return (
    <div className={`flex items-center space-x-3 mb-8 ${className}`}>
      {/* Alternating Brand Bullet: Leaf or Soft 5-Petal Blossom */}
      {icon === "flower" ? (
        <PinkBlossomIcon className="w-4 h-4 text-[#C15F70] shrink-0" />
      ) : (
        <svg
          className="w-4 h-4 text-[#C15F70] shrink-0"
          viewBox="0 0 24 28"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 1C12 1 14.5 4.5 16.5 6C18.5 7.5 21 7 21.5 9.5C22 12 19.5 13.5 19.5 21.5C18 23.5 15.5 22.5 13.5 24.5C12.5 25.5 12 27 12 27C12 27 11.5 25.5 10.5 24.5C8.5 22.5 6 23.5 4.5 21.5C3 19.5 4.5 17.5 4.5 15.5C4.5 13.5 2 12 2.5 9.5C3 7 5.5 7.5 7.5 6C9.5 4.5 12 1 12 1Z" />
        </svg>
      )}
      {(number || title) && (
        <span className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-[#B78D4A] uppercase shrink-0">
          {number && `${number} \u00A0/\u00A0 `}
          {title}
        </span>
      )}

      {/* Width-Grow Animated Gold Line (Round 5: 0% -> 100% width on scroll) */}
      <div className="flex-1 overflow-hidden h-px">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#B78D4A]/50 via-[#B78D4A]/30 to-transparent origin-left"
        />
      </div>
    </div>
  );
}
