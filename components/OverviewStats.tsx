"use client";

import { useEffect, useState, useRef } from "react";
import ScrollReveal from "./ui/ScrollReveal";

interface CountUpStatProps {
  label: string;
  value: string;
  isNumeric?: boolean;
  targetNumber?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

function CountUpStat({
  label,
  value,
  isNumeric = false,
  targetNumber = 0,
  suffix = "",
  prefix = "",
  delay = 0,
}: CountUpStatProps) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isNumeric) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1200; // 1.2s smooth count-up
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = targetNumber / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
              setDisplayNumber(targetNumber);
              clearInterval(timer);
            } else {
              setDisplayNumber(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isNumeric, targetNumber, hasAnimated]);

  return (
    <ScrollReveal delay={delay}>
      <div
        ref={ref}
        className="flex flex-col items-center justify-center text-center p-3 sm:p-4 lg:px-4 lg:py-3 space-y-1.5 min-h-[90px]"
      >
        <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#B78D4A] font-medium leading-tight text-center block">
          {label}
        </span>
        <span className="font-serif text-sm sm:text-base lg:text-lg font-semibold text-[#241C20] leading-snug text-center block">
          {isNumeric
            ? `${prefix}${displayNumber}${suffix}`
            : value}
        </span>
      </div>
    </ScrollReveal>
  );
}

export default function OverviewStats() {
  const stats = [
    { label: "Property Type", value: "Residential", isNumeric: false },
    { label: "Floors", value: "11 Floors", isNumeric: true, targetNumber: 11, suffix: " Floors" },
    { label: "RERA Registration", value: "RAJ/P/2025/3489", isNumeric: false },
    { label: "Key Lifestyle Zones", value: "Kids Play Area", isNumeric: false },
    { label: "Entertainment", value: "Home Theater & Music", isNumeric: false },
    { label: "Community", value: "Multipurpose Hall", isNumeric: false },
  ];

  return (
    <section id="overview" className="py-8 sm:py-10 bg-[#F5EEE6] border-y border-[#C15F70]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CSS Grid with 6 equal-width columns on desktop, 2-3 equal columns on mobile/tablet */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 divide-[#C15F70]/20">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`${
                idx % 2 !== 0 ? "border-l sm:border-l-0 border-[#C15F70]/20" : ""
              } ${
                idx % 3 !== 0 ? "md:border-l md:border-[#C15F70]/20" : "md:border-l-0"
              } ${
                idx !== 0 ? "lg:border-l lg:border-[#C15F70]/20" : "lg:border-l-0"
              }`}
            >
              <CountUpStat
                label={stat.label}
                value={stat.value}
                isNumeric={stat.isNumeric}
                targetNumber={stat.targetNumber}
                suffix={stat.suffix}
                delay={idx * 0.15}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
