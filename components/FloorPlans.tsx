"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FloorPlansProps {
  onOpenEnquire: (title?: string) => void;
}

export default function FloorPlans({ onOpenEnquire }: FloorPlansProps) {
  const [activeTab, setActiveTab] = useState<"typical" | "stilt" | "basement">("typical");

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
    <section id="plans" className="py-20 lg:py-32 bg-[#FBF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="font-serif text-sm font-semibold tracking-widest text-[#B78D4A] uppercase">
            05 &nbsp;/&nbsp; Architectural Floor Plans
          </span>
          <div className="h-px bg-[#B78D4A]/30 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
              Masterfully Planned Layouts
            </h2>
            <p className="font-sans text-base text-[#241C20]/75 font-light mt-2">
              Designed for optimal Vastu energy flow, natural illumination, and structural privacy.
            </p>
          </div>

          {/* Plain Tab Switcher */}
          <div className="flex bg-[#F8ECEF] p-1.5 rounded-lg border border-[#E88CA4]/30 self-start md:self-auto">
            {(["typical", "stilt", "basement"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-sans font-medium uppercase tracking-wider rounded-md transition-colors ${
                  activeTab === tab
                    ? "bg-[#C74B66] text-[#FBF8F4] shadow-xs"
                    : "text-[#241C20]/80 hover:text-[#C74B66]"
                }`}
              >
                {tab === "typical" ? "Typical Floor" : tab === "stilt" ? "Stilt Floor" : "Basement"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F8ECEF] border border-[#E88CA4]/20 rounded-2xl p-6 sm:p-10">
          
          {/* Details Left */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-sans text-xs font-medium uppercase tracking-widest text-[#B78D4A]">
                {currentPlan.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20] mt-1">
                {currentPlan.title}
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#241C20]/80 font-light leading-relaxed">
              {currentPlan.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {currentPlan.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-[#FBF8F4] border border-[#E88CA4]/30 text-[#C74B66] text-xs font-sans font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenEnquire(`Floor Plan Enquiry - ${currentPlan.title}`)}
                className="px-6 py-3 bg-[#C74B66] hover:bg-[#8E2F47] text-[#FBF8F4] font-sans text-xs font-medium uppercase tracking-widest rounded-md transition-colors"
              >
                Request Architectural Specs
              </button>
            </div>
          </div>

          {/* Image Right */}
          <div className="lg:col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FBF8F4] border border-[#E88CA4]/30">
            <Image
              src={currentPlan.image}
              alt={currentPlan.title}
              fill
              className="object-contain p-4"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
