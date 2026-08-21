"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import { Maximize2, X, Download, Compass } from "lucide-react";

interface FloorPlansProps {
  onOpenEnquire: (title?: string) => void;
}

export default function FloorPlans({ onOpenEnquire }: FloorPlansProps) {
  const [activeTab, setActiveTab] = useState<"typical" | "stilt" | "basement">("typical");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const plans = {
    typical: {
      title: "Typical Floor Plan",
      subtitle: "Floors 1 through 11",
      description:
        "Experience expansive living with our typical floor plan, designed to maximize space and natural light. Every corner is crafted with precision to offer unmatched comfort and elegance for your family.",
      tags: ["Spacious Bedrooms", "Modern Kitchen Setup", "Premium Flooring"],
      image: "/images/plan-typical.jpg",
    },
    stilt: {
      title: "Stilt Floor Plan",
      subtitle: "Ground Entrance Level",
      description:
        "The stilt floor is dedicated to convenient and secure parking while maintaining a grand entrance lobby. It perfectly balances utility and aesthetics to welcome you home.",
      tags: ["Ample Parking Space", "Grand Entrance Lobby", "EV Charging Provisions"],
      image: "/images/plan-stilt.jpg",
    },
    basement: {
      title: "Basement Floor Plan",
      subtitle: "Sub-Level Utilities & Parking",
      description:
        "Our meticulously designed basement floor provides state-of-the-art utility spaces and additional parking facilities, ensuring every practical need is seamlessly met.",
      tags: ["Secure Storage Areas", "Advanced Maintenance Systems", "Extra Guest Parking"],
      image: "/images/plan-basement.jpg",
    },
  };

  const currentPlan = plans[activeTab];

  return (
    <section id="plans" className="py-20 lg:py-32 bg-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="05" title="Architectural Floor Plans" icon="leaf" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20]">
              Masterfully Planned Layouts
            </h2>
            <p className="font-sans text-base text-[#241C20]/75 font-light mt-2 max-w-xl">
              Designed for optimal Vastu energy flow, natural illumination, and structural privacy.
            </p>
          </ScrollReveal>

          {/* Luxury Tab Switcher */}
          <div className="flex bg-[#F5EEE6] p-1.5 rounded-full border border-[#C15F70]/25 self-start md:self-auto shadow-xs">
            {(["typical", "stilt", "basement"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs font-sans font-medium uppercase tracking-wider rounded-full transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#C15F70] text-[#E8E1D3] shadow-xs font-semibold"
                    : "text-[#241C20]/75 hover:text-[#C15F70]"
                }`}
              >
                {tab === "typical" ? "Typical Floor" : tab === "stilt" ? "Stilt Floor" : "Basement"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Box */}
        <ScrollReveal variant="scale-up">
          <div className="bg-[#F5EEE6] border border-[#C15F70]/25 rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
              >
                {/* Details Left */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-1">
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-[#B78D4A] flex items-center space-x-1.5">
                      <Compass className="w-3.5 h-3.5" />
                      <span>{currentPlan.subtitle}</span>
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20]">
                      {currentPlan.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#241C20]/80 font-light leading-relaxed">
                    {currentPlan.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentPlan.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 bg-[#E8E1D3] border border-[#C15F70]/25 text-[#C15F70] text-xs font-sans font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenEnquire(`Floor Plan Enquiry - ${currentPlan.title}`)}
                      className="px-6 py-3.5 bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] font-sans text-xs font-medium uppercase tracking-widest rounded-lg transition-colors shadow-xs"
                    >
                      Request Architectural Specs
                    </button>
                    
                    <button
                      onClick={() => setLightboxOpen(true)}
                      className="px-4 py-3.5 border border-[#C15F70]/30 text-[#C15F70] hover:bg-[#E8E1D3] rounded-lg transition-colors flex items-center space-x-2 text-xs font-sans uppercase font-medium tracking-wider"
                    >
                      <Maximize2 className="w-4 h-4" />
                      <span>Expand View</span>
                    </button>
                  </div>
                </div>

                {/* Interactive High-Res Floorplan Image Right */}
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="lg:col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden bg-[#E8E1D3] border border-[#C15F70]/25 cursor-pointer group shadow-xs"
                >
                  <Image
                    src={currentPlan.image}
                    alt={currentPlan.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 right-4 bg-[#241C20]/80 backdrop-blur-xs text-[#E8E1D3] px-3 py-1.5 rounded-md text-[11px] font-sans flex items-center space-x-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C15F70]" />
                    <span>Click to Enlarge Layout</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </ScrollReveal>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-[#241C20]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full bg-[#E8E1D3] rounded-2xl overflow-hidden shadow-2xl border border-[#C15F70]/30 p-6"
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-[#E8E1D3]/90 text-[#241C20] hover:text-[#C15F70] rounded-full focus:outline-none shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-4">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#B78D4A]">
                  Architectural Blueprint Layout
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#241C20]">
                  {currentPlan.title}
                </h3>
              </div>

              <div className="relative aspect-[16/10] w-full bg-[#F5EEE6] rounded-xl overflow-hidden border border-[#C15F70]/20 p-4">
                <Image
                  src={currentPlan.image}
                  alt={currentPlan.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 flex justify-between items-center">
                <p className="font-sans text-xs text-[#241C20]/75 font-light">
                  {currentPlan.description}
                </p>
                <button
                  onClick={() => onOpenEnquire(`Floor Plan Download - ${currentPlan.title}`)}
                  className="px-5 py-2.5 bg-[#C15F70] text-[#E8E1D3] font-sans text-xs uppercase font-medium tracking-wider rounded-lg flex items-center space-x-2 shrink-0 ml-4"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Blueprint</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
