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
    { name: "Anti-Termite Treatment", category: "Structure & Care", icon: ShieldCheck, theme: "forest" },
    { name: "Well Ventilated & Lighted", category: "Micro-Climate", icon: Sun, theme: "sage" },
    { name: "Big Balconies", category: "Architecture", icon: Maximize2, theme: "taborosa" },
    { name: "Yoga Studio", category: "Wellness", icon: Heart, theme: "taborosa" },
    { name: "Home Theatre", category: "Leisure", icon: Film, theme: "misty" },
    { name: "Billiards Table", category: "Recreation", icon: CircleDot, theme: "misty" },
    { name: "Library", category: "Quiet Spaces", icon: BookOpen, theme: "forest" },
    { name: "Kid's Play Area", category: "Landscaping", icon: Smile, theme: "sage" },
    { name: "Music Room", category: "Acoustics", icon: Music, theme: "taborosa" },
    { name: "Temple Space", category: "Sanctuary", icon: Landmark, theme: "sage" },
    { name: "Indoor Games", category: "Recreation", icon: Gamepad2, theme: "misty" },
    { name: "Storage for Flats", category: "Utility", icon: Archive, theme: "forest" },
    { name: "Anti-Skid Tiles", category: "Finishes", icon: Grid, theme: "forest" },
    { name: "Pressure Pump System", category: "Plumbing", icon: Activity, theme: "misty" },
    { name: "Water Softener Plant", category: "Utilities", icon: Droplets, theme: "misty" },
    { name: "Pipeline Piped Gas", category: "Kitchen Infrastructure", icon: Flame, theme: "taborosa" },
    { name: "EV Charging Provision", category: "Sustainability", icon: BatteryCharging, theme: "sage" },
    { name: "Smart Washroom Lights", category: "Automation", icon: Lightbulb, theme: "misty" },
    { name: "Telephone & Intercom", category: "Security", icon: PhoneCall, theme: "forest" },
    { name: "20+ World-Class Amenities", category: "Comprehensive", icon: Sparkles, theme: "taborosa" },
  ];

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-[#F5EEE6] border-y border-[#C15F70]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="04" title="Thoughtful Amenities & Landscaping" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <ScrollReveal className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20] leading-tight">
              20+ Integrated Amenities, Rooted in Natural Wellness.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="lg:col-span-6">
            <p className="font-sans text-base text-[#241C20]/75 font-light leading-relaxed">
              Harmonizing indoor sanctuaries with outdoor sage green walkways, water features, and sustainable living infrastructure.
            </p>
          </ScrollReveal>
        </div>

        {/* Dense Compact Architectural Spec List/Matrix with Brand Kit v2 Swatches */}
        <ScrollReveal>
          <div className="bg-[#E8E1D3] border border-[#C15F70]/25 rounded-2xl overflow-hidden shadow-xs divide-y divide-[#C15F70]/15">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-x divide-[#C15F70]/15">
              {amenitiesList.map((item) => {
                const IconComponent = item.icon;
                
                // Color badge logic based on Brand Kit v2
                const iconColor =
                  item.theme === "sage"
                    ? "text-[#33422F] bg-[#9CAA8C]/20 border-[#9CAA8C]/40"
                    : item.theme === "misty"
                    ? "text-[#241C20] bg-[#A9C4D4]/30 border-[#A9C4D4]/50"
                    : item.theme === "forest"
                    ? "text-[#33422F] bg-[#33422F]/10 border-[#33422F]/20"
                    : "text-[#C15F70] bg-[#C15F70]/15 border-[#C15F70]/25";

                return (
                  <div
                    key={item.name}
                    className="p-4 sm:px-6 sm:py-5 flex items-center justify-between hover:bg-[#F5EEE6]/60 transition-colors border-b border-[#C15F70]/15 last:border-b-0"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className={`p-2 rounded border ${iconColor} shrink-0`}>
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
                    <span className="font-serif text-[10px] font-semibold text-[#C15F70] bg-[#F5EEE6] px-2 py-0.5 rounded uppercase tracking-wider border border-[#C15F70]/20">
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
