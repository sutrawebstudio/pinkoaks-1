"use client";

import ScrollReveal from "./ui/ScrollReveal";

export default function OverviewStats() {
  const stats = [
    { label: "Property Type", value: "Residential" },
    { label: "Floors", value: "11 Floors" },
    { label: "RERA Registration", value: "RAJ/P/2025/3489" },
    { label: "Key Lifestyle Zones", value: "Kids Play Area" },
    { label: "Entertainment", value: "Home Theater & Music Room" },
    { label: "Community", value: "Multipurpose Hall" },
  ];

  return (
    <section id="overview" className="py-8 sm:py-10 bg-[#F8ECEF] border-y border-[#E88CA4]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* CSS Grid with 6 equal-width columns on desktop, 2-3 equal columns on mobile/tablet */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 divide-[#E88CA4]/30">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center p-3 sm:p-4 lg:px-4 lg:py-2 space-y-1.5 min-h-[85px] ${
                  idx % 2 !== 0 ? "border-l sm:border-l-0 border-[#E88CA4]/30" : ""
                } ${
                  idx % 3 !== 0 ? "md:border-l md:border-[#E88CA4]/30" : "md:border-l-0"
                } ${
                  idx !== 0 ? "lg:border-l lg:border-[#E88CA4]/30" : "lg:border-l-0"
                }`}
              >
                <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#B78D4A] font-medium leading-tight text-center block">
                  {stat.label}
                </span>
                <span className="font-serif text-sm sm:text-base lg:text-lg font-semibold text-[#241C20] leading-snug text-center block">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


