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
    { name: "Anti-Termite Treatment", icon: ShieldCheck },
    { name: "Well Ventilated & Lighted", icon: Sun },
    { name: "Big Balconies", icon: Maximize2 },
    { name: "Yoga Studio", icon: Heart },
    { name: "Home Theatre", icon: Film },
    { name: "Billiards Table", icon: CircleDot },
    { name: "Library", icon: BookOpen },
    { name: "Kid's Play Area", icon: Smile },
    { name: "Music Room", icon: Music },
    { name: "Temple Space", icon: Landmark },
    { name: "Indoor Games", icon: Gamepad2 },
    { name: "Storage for Flats", icon: Archive },
    { name: "Anti-Skid Tiles", icon: Grid },
    { name: "Pressure Pump System", icon: Activity },
    { name: "Water Softener Plant", icon: Droplets },
    { name: "Pipeline Piped Gas", icon: Flame },
    { name: "EV Charging Provision", icon: BatteryCharging },
    { name: "Smart Washroom Lights", icon: Lightbulb },
    { name: "Telephone & Intercom", icon: PhoneCall },
    { name: "20+ World-Class Amenities", icon: Sparkles },
  ];

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-[#F8ECEF] border-y border-[#E88CA4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="04" title="Thoughtful Amenities" />

        <ScrollReveal className="mb-12 max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
            20+ World-Class Amenities
          </h2>
          <p className="font-sans text-base text-[#241C20]/75 font-light mt-2">
            Every feature is integrated with precision for health, comfort, and seamless daily convenience.
          </p>
        </ScrollReveal>

        {/* Distinct Icon per Amenity Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {amenitiesList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <ScrollReveal key={item.name} delay={idx * 0.03}>
                <div className="bg-[#FBF8F4] p-5 rounded-lg border border-[#E88CA4]/20 flex items-center space-x-4 hover:border-[#C74B66]/40 transition-colors h-full">
                  <div className="p-2.5 rounded-md bg-[#F8ECEF] text-[#C74B66] shrink-0 border border-[#E88CA4]/20">
                    <IconComponent className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <span className="font-sans text-xs sm:text-sm font-medium text-[#241C20] leading-snug block">
                      {item.name}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
