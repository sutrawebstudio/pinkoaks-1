"use client";

import { useState } from "react";
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
  Search,
} from "lucide-react";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";

export default function Amenities() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Wellness & Leisure", "Infrastructure & Tech", "Safety & Finishes"];

  const amenitiesList = [
    { name: "Anti-Termite Treatment", category: "Infrastructure & Tech", icon: ShieldCheck, theme: "forest" },
    { name: "Well Ventilated & Lighted", category: "Wellness & Leisure", icon: Sun, theme: "sage" },
    { name: "Big Balconies", category: "Wellness & Leisure", icon: Maximize2, theme: "taborosa" },
    { name: "Yoga Studio", category: "Wellness & Leisure", icon: Heart, theme: "taborosa" },
    { name: "Home Theatre", category: "Wellness & Leisure", icon: Film, theme: "misty" },
    { name: "Billiards Table", category: "Wellness & Leisure", icon: CircleDot, theme: "misty" },
    { name: "Library", category: "Wellness & Leisure", icon: BookOpen, theme: "forest" },
    { name: "Kid's Play Area", category: "Wellness & Leisure", icon: Smile, theme: "sage" },
    { name: "Music Room", category: "Wellness & Leisure", icon: Music, theme: "taborosa" },
    { name: "Temple Space", category: "Wellness & Leisure", icon: Landmark, theme: "sage" },
    { name: "Indoor Games", category: "Wellness & Leisure", icon: Gamepad2, theme: "misty" },
    { name: "Storage for Flats", category: "Safety & Finishes", icon: Archive, theme: "forest" },
    { name: "Anti-Skid Tiles", category: "Safety & Finishes", icon: Grid, theme: "forest" },
    { name: "Pressure Pump System", category: "Infrastructure & Tech", icon: Activity, theme: "misty" },
    { name: "Water Softener Plant", category: "Infrastructure & Tech", icon: Droplets, theme: "misty" },
    { name: "Pipeline Piped Gas", category: "Infrastructure & Tech", icon: Flame, theme: "taborosa" },
    { name: "EV Charging Provision", category: "Infrastructure & Tech", icon: BatteryCharging, theme: "sage" },
    { name: "Smart Washroom Lights", category: "Infrastructure & Tech", icon: Lightbulb, theme: "misty" },
    { name: "Telephone & Intercom", category: "Safety & Finishes", icon: PhoneCall, theme: "forest" },
    { name: "20+ World-Class Amenities", category: "Wellness & Leisure", icon: Sparkles, theme: "taborosa" },
  ];

  const filteredAmenities = amenitiesList.filter((item) => {
    const matchesTab = activeTab === "All" || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-[#F5EEE6] border-y border-[#C15F70]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="04" title="Thoughtful Amenities & Landscaping" icon="flower" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <ScrollReveal className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20] leading-tight">
              20+ Integrated Amenities, Rooted in Natural Wellness.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="lg:col-span-6">
            <p className="font-sans text-base text-[#241C20]/75 font-light leading-relaxed">
              Harmonizing indoor sanctuaries with outdoor sage green walkways, water features, and sustainable living infrastructure.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-medium tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#C15F70] text-[#E8E1D3] shadow-xs"
                    : "bg-[#E8E1D3] text-[#241C20]/75 hover:bg-[#E8E1D3]/80 border border-[#C15F70]/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#241C20]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search amenity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#E8E1D3] border border-[#C15F70]/25 rounded-full font-sans text-xs text-[#241C20] placeholder-[#241C20]/50 focus:outline-none focus:border-[#C15F70]"
            />
          </div>
        </div>

        {/* Architectural Spec Matrix List */}
        <ScrollReveal>
          <div className="bg-[#E8E1D3] border border-[#C15F70]/25 rounded-2xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 lg:divide-x divide-[#C15F70]/15">
              {filteredAmenities.map((item) => {
                const IconComponent = item.icon;
                
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
                    className="p-4 sm:px-6 sm:py-4.5 flex items-center justify-between hover:bg-[#F5EEE6]/80 transition-colors border-b border-[#C15F70]/15"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className={`p-2.5 rounded-lg border ${iconColor} shrink-0`}>
                        <IconComponent className="w-4 h-4 stroke-[1.5]" />
                      </div>
                      <div>
                        <span className="font-sans text-xs font-semibold text-[#241C20] block">
                          {item.name}
                        </span>
                        <span className="font-sans text-[10px] uppercase tracking-wider text-[#B78D4A] font-medium block">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <span className="font-serif text-[10px] font-semibold text-[#C15F70] bg-[#F5EEE6] px-2.5 py-1 rounded-full uppercase tracking-wider border border-[#C15F70]/20">
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
