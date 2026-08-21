"use client";

import {
  ShieldCheck,
  Sun,
  Maximize2,
  Heart,
  Film,
  CircleDot,
  BookOpen,
  Smile,
  Music,
  Landmark,
  Gamepad2,
  Archive,
  Grid,
  Activity,
  Droplets,
  Flame,
  BatteryCharging,
  Lightbulb,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";

export default function Amenities() {
  const amenitiesList = [
    { name: "Anti-Termite Treatment", category: "Structure & Care", icon: ShieldCheck },
    { name: "Well Ventilated & Lighted", category: "Micro-Climate", icon: Sun },
    { name: "Big Balconies", category: "Architecture", icon: Maximize2 },
    { name: "Yoga Studio", category: "Wellness", icon: Heart },
    { name: "Home Theatre", category: "Leisure", icon: Film },
    { name: "Billiards Table", category: "Recreation", icon: CircleDot },
    { name: "Library", category: "Quiet Spaces", icon: BookOpen },
    { name: "Kid's Play Area", category: "Family Zone", icon: Smile },
    { name: "Music Room", category: "Acoustics", icon: Music },
    { name: "Temple Space", category: "Sanctuary", icon: Landmark },
    { name: "Indoor Games", category: "Recreation", icon: Gamepad2 },
    { name: "Storage for Flats", category: "Utility", icon: Archive },
    { name: "Anti-Skid Tiles", category: "Finishes", icon: Grid },
    { name: "Pressure Pump System", category: "Plumbing", icon: Activity },
    { name: "Water Softener Plant", category: "Utilities", icon: Droplets },
    { name: "Pipeline Piped Gas", category: "Kitchen Infrastructure", icon: Flame },
    { name: "EV Charging Provision", category: "Sustainability", icon: BatteryCharging },
    { name: "Smart Washroom Lights", category: "Automation", icon: Lightbulb },
    { name: "Telephone & Intercom", category: "Security", icon: PhoneCall },
    { name: "20+ World-Class Amenities", category: "Comprehensive", icon: Sparkles },
  ];

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-[#F8ECEF] border-y border-[#E88CA4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="04" title="Thoughtful Amenities" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <ScrollReveal className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] leading-tight">
              20+ Integrated Amenities, Crafted for Daily Harmony.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="lg:col-span-6">
            <p className="font-sans text-base text-[#241C20]/75 font-light leading-relaxed">
              Rather than superficial additions, every specification is engineered directly into the residential structure for long-term health, convenience, and low maintenance.
            </p>
          </ScrollReveal>
        </div>

        {/* Dense Compact Architectural Spec List/Matrix (Replaces Card Grid) */}
        <ScrollReveal>
          <div className="bg-[#FBF8F4] border border-[#E88CA4]/30 rounded-2xl overflow-hidden shadow-xs divide-y divide-[#E88CA4]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-x divide-[#E88CA4]/20">
              {amenitiesList.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="p-4 sm:px-6 sm:py-5 flex items-center justify-between hover:bg-[#F8ECEF]/50 transition-colors border-b border-[#E88CA4]/20 last:border-b-0"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2 rounded bg-[#F8ECEF] text-[#C74B66] shrink-0 border border-[#E88CA4]/20">
                        <IconComponent className="w-4 h-4 stroke-[1.5]" />
                      </div>
                      <div>
                        <span className="font-sans text-xs font-medium text-[#241C20] block">
                          {item.name}
                        </span>
                        <span className="font-sans text-[10px] uppercase tracking-wider text-[#B78D4A] font-light block">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <span className="font-serif text-[10px] font-semibold text-[#C74B66] bg-[#F8ECEF] px-2 py-0.5 rounded uppercase tracking-wider">
                      Included
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
