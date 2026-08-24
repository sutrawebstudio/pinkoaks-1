"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ["All", "Family Living", "Architecture", "Craft Details", "Amenities"];

  // Strictly grouped by size tier & row pairings for architectural rhythm
  const galleryItems = [
    // ROW TYPE A1: 2 Landscape Cards (6/6 split)
    {
      title: "Dusk Exterior Facade",
      subtitle: "Stately 11-floor residence lit in warm evening twilight",
      src: "/images/PLACEHOLDER_building_dusk.jpg",
      tag: "Jaipur Landmark",
      category: "Architecture",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-6",
    },
    {
      title: "Grandparents & Grandchildren Terrace",
      subtitle: "Quiet morning breeze on the private single-floor terrace",
      src: "/images/PLACEHOLDER_family_balcony.jpg",
      tag: "Multi-Gen Sanctuary",
      category: "Family Living",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-6",
    },

    // ROW TYPE A2: 2 Landscape Cards (6/6 split)
    {
      title: "Kids Playing in Courtyard",
      subtitle: "Secure green courtyard with child-safe landscaped play zones",
      src: "/images/PLACEHOLDER_kids_garden.jpg",
      tag: "Outdoor Recreation",
      category: "Family Living",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-6",
    },
    {
      title: "Family Evening Living Room",
      subtitle: "Spacious sunlit living quarters built for multi-generational gatherings",
      src: "/images/PLACEHOLDER_family_living.jpg",
      tag: "Drawing Room",
      category: "Family Living",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-6",
    },

    // ROW TYPE D1: Landscape Pair (6/6 split, Jaali cropped to 16/10 landscape)
    {
      title: "Carved Stone Jaali Screens",
      subtitle: "Hand-pierced lattice screens providing natural climate control",
      src: "/images/PLACEHOLDER_craft_jaali_screen.jpg",
      tag: "Rajasthani Heritage",
      category: "Craft Details",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-6",
    },
    {
      title: "Private Arrival Lobby",
      subtitle: "High-ceilinged arrival foyer with private elevator access",
      src: "/images/PLACEHOLDER_private_lobby.jpg",
      tag: "Single-Floor Privacy",
      category: "Architecture",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-6",
    },

    // ROW TYPE C: 3 Equal Square Cards (4/4/4 split)
    {
      title: "Natural Stone Flooring Texture",
      subtitle: "Honed Jaipur sandstone with hand-set brass inlay details",
      src: "/images/PLACEHOLDER_craft_stone_flooring.jpg",
      tag: "Materiality",
      category: "Craft Details",
      aspect: "aspect-square",
      gridSpan: "lg:col-span-4",
    },
    {
      title: "Tranquil Reflection Pool",
      subtitle: "Cascading water lounge surrounded by sage green foliage",
      src: "/images/detail-water.jpg",
      tag: "Water Feature",
      category: "Amenities",
      aspect: "aspect-square",
      gridSpan: "lg:col-span-4",
    },
    {
      title: "Patinated Brass Hardware",
      subtitle: "Custom patinated hardware and polished rose metal accents",
      src: "/images/PLACEHOLDER_craft_brass_fixtures.jpg",
      tag: "Bespoke Finishes",
      category: "Craft Details",
      aspect: "aspect-square",
      gridSpan: "lg:col-span-4",
    },

    // ROW TYPE B: 1 Large Feature Card (Full 12-col width)
    {
      title: "Extended Family Dining Pavilion",
      subtitle: "Expansive dining space accommodating three generations comfortably",
      src: "/images/PLACEHOLDER_family_dining.jpg",
      tag: "Family Celebrations",
      category: "Family Living",
      aspect: "aspect-[21/9]",
      gridSpan: "lg:col-span-12",
    },

    // ROW TYPE A3: 2 Landscape Cards (6/6 split)
    {
      title: "Master Bedroom Suite",
      subtitle: "Walk-in wardrobe, wooden flooring, and sunlit private balcony",
      src: "/images/PLACEHOLDER_master_bedroom.jpg",
      tag: "Master Quarters",
      category: "Architecture",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-6",
    },
    {
      title: "Handcrafted Wooden Doors",
      subtitle: "Solid teak main entrance door with traditional Rajasthani motifs",
      src: "/images/PLACEHOLDER_craft_wooden_doors.jpg",
      tag: "Door Craftsmanship",
      category: "Craft Details",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-6",
    },

    // ROW TYPE A4: 2 Landscape Cards (6/6 split)
    {
      title: "Rooftop Yoga & Wellness Deck",
      subtitle: "Open-air zen lounge overlooking the Bani Park skyline",
      src: "/images/PLACEHOLDER_rooftop_terrace.jpg",
      tag: "Holistic Health",
      category: "Amenities",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-6",
    },
    {
      title: "Elderly Couple Sanctuary Retreat",
      subtitle: "Quiet corner nook with ergonomic seating and warm morning sunlight",
      src: "/images/PLACEHOLDER_elderly_sanctuary.jpg",
      tag: "Peaceful Living",
      category: "Family Living",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-6",
    },

    // ROW TYPE B2: Full Width Landmark Panoramic Feature (12-col width)
    {
      title: "Balcony Panoramic Skyline View",
      subtitle: "Unobstructed views over Bani Park's low-density greenery",
      src: "/images/PLACEHOLDER_balcony_view.jpg",
      tag: "Bani Park Vistas",
      category: "Architecture",
      aspect: "aspect-[21/9]",
      gridSpan: "lg:col-span-12",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [selectedIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % filteredItems.length
    );
  }, [selectedIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-[#E8E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="03" title="Visual Gallery & Craft" icon="flower" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <ScrollReveal className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20] leading-tight">
              Experience Family Living &amp; Crafted Materiality.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <p className="font-sans text-base text-[#241C20]/75 font-light leading-relaxed">
              A curated visual monograph blending multi-generational family moments, architectural geometry, and Jaipur stone &amp; jaali craft details.
            </p>
          </ScrollReveal>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2.5 mb-10 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-medium tracking-wider uppercase transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#C15F70] text-[#E8E1D3] shadow-xs"
                  : "bg-[#F5EEE6] text-[#241C20]/75 hover:bg-[#F5EEE6]/80 border border-[#C15F70]/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Architecturally Grouped Row Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 0.03}
              className={`${item.gridSpan}`}
            >
              <div
                onClick={() => setSelectedIndex(index)}
                className="group cursor-pointer bg-[#F5EEE6] rounded-2xl overflow-hidden border border-[#C15F70]/20 shadow-xs hover:border-[#C15F70]/50 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between"
              >
                {/* Image Container: Paired aspect ratio per row tier, edge-to-edge fill */}
                <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#E8E1D3] shrink-0`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-700 block"
                  />
                  <div className="absolute top-4 left-4 bg-[#E8E1D3]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#A9C4D4]/40 text-[10px] font-sans font-medium uppercase tracking-widest text-[#241C20]">
                    {item.tag}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#241C20]/70 backdrop-blur-xs p-2 rounded-full text-[#E8E1D3] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Caption Block: Directly flush underneath image */}
                <div className="p-5 bg-[#F5EEE6] border-t border-[#C15F70]/15 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-[#241C20] group-hover:text-[#C15F70] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-sans text-[#B78D4A] uppercase tracking-wider font-medium">
                      {item.category}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#241C20]/70 font-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Craft Details Highlight Band */}
        <div className="mt-16 bg-[#F5EEE6] rounded-2xl p-8 lg:p-10 border border-[#C15F70]/25 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-sans font-medium uppercase tracking-widest text-[#B78D4A]">
              <Sparkles className="w-3.5 h-3.5 text-[#C15F70]" />
              <span>Jaipur Materiality &amp; Architectural Craft</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20]">
              Crafted Details: Pierced Jaali Screens &amp; Sandstone Texture
            </h3>
            <p className="font-sans text-sm text-[#241C20]/75 font-light leading-relaxed">
              Every Pink Oaks residence integrates authentic Rajasthani architectural elements — carved stone lattice screens for natural breeze and shade, honed sandstone flooring, and custom brass hardware built to age gracefully across generations.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={() => setActiveCategory("Craft Details")}
              className="px-6 py-3 bg-[#C15F70] hover:bg-[#A34A5A] text-[#E8E1D3] font-sans text-xs font-medium uppercase tracking-widest rounded-lg transition-colors shadow-xs"
            >
              Filter Craft Details
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal with High Z-Index (z-[60]) to cover sticky header */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-[60] bg-[#241C20]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full bg-[#E8E1D3] rounded-2xl overflow-hidden shadow-2xl border border-[#C15F70]/30"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-[#E8E1D3]/90 text-[#241C20] hover:text-[#C15F70] rounded-full focus:outline-none shadow-md transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#241C20]/75 hover:bg-[#C15F70] text-[#E8E1D3] rounded-full transition-colors shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-[#241C20]/75 hover:bg-[#C15F70] text-[#E8E1D3] rounded-full transition-colors shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image View */}
              <div className="relative aspect-[16/10] w-full bg-[#241C20]">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Lightbox Info Bar */}
              <div className="p-6 bg-[#E8E1D3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#C15F70]/20">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#B78D4A]">
                      {activeItem.tag}
                    </span>
                    <span className="text-[10px] font-sans text-[#241C20]/50">•</span>
                    <span className="font-sans text-[10px] font-medium uppercase tracking-widest text-[#C15F70]">
                      {activeItem.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#241C20]">
                    {activeItem.title}
                  </h3>
                  <p className="font-sans text-sm text-[#241C20]/75 font-light mt-0.5">
                    {activeItem.subtitle}
                  </p>
                </div>

                <div className="text-xs font-sans font-medium text-[#241C20]/60 shrink-0">
                  Image {selectedIndex! + 1} of {filteredItems.length}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
