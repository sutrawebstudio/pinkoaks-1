"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import Button from "./ui/Button";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ["All", "Family Living", "Architecture", "Craft Details", "Amenities"];

  const galleryItems = [
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
    {
      title: "Extended Family Dining Pavilion",
      subtitle: "Expansive dining space accommodating three generations comfortably",
      src: "/images/PLACEHOLDER_family_dining.jpg",
      tag: "Family Celebrations",
      category: "Family Living",
      aspect: "aspect-[21/9]",
      gridSpan: "lg:col-span-12",
    },
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
        
        <SectionDivider number="03" title="Visual Gallery & Craft" icon="flower" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <ScrollReveal className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20] leading-tight">
              Experience Family Living &amp; Crafted Materiality.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <p className="font-sans text-base text-[#241C20]/80 font-light leading-relaxed">
              A curated visual monograph blending multi-generational family moments, architectural geometry, and Jaipur stone &amp; jaali craft details.
            </p>
          </ScrollReveal>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2.5 mb-10 overflow-x-auto no-scrollbar pb-2" role="tablist" aria-label="Gallery categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIndex(null);
              }}
              className={`min-h-[44px] px-5 py-2.5 rounded-full font-sans text-xs font-medium tracking-wider uppercase transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#C15F70] text-[#E8E1D3] shadow-xs"
                  : "bg-[#F5EEE6] text-[#241C20]/80 hover:bg-[#F5EEE6]/80 border border-[#C15F70]/20"
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
                tabIndex={0}
                role="button"
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedIndex(index);
                  }
                }}
                className="group cursor-pointer bg-[#F5EEE6] rounded-2xl overflow-hidden border border-[#C15F70]/20 shadow-xs hover:border-[#C15F70]/50 hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70]"
              >
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
                    <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>

                <div className="p-5 bg-[#F5EEE6] border-t border-[#C15F70]/15 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-[#241C20] group-hover:text-[#C15F70] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-sans text-[#B78D4A] uppercase tracking-wider font-medium">
                      {item.category}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#241C20]/80 font-light leading-relaxed">
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
              <Sparkles className="w-3.5 h-3.5 text-[#C15F70]" aria-hidden="true" />
              <span>Jaipur Materiality &amp; Architectural Craft</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241C20]">
              Crafted Details: Pierced Jaali Screens &amp; Sandstone Texture
            </h3>
            <p className="font-sans text-sm text-[#241C20]/80 font-light leading-relaxed">
              Every Pink Oaks residence integrates authentic Rajasthani architectural elements — carved stone lattice screens for natural breeze and shade, honed sandstone flooring, and custom brass hardware built to age gracefully across generations.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Button
              variant="primary"
              onClick={() => setActiveCategory("Craft Details")}
            >
              Filter Craft Details
            </Button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div
            className="fixed inset-0 z-[60] bg-[#241C20]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-w-5xl w-full bg-[#E8E1D3] rounded-2xl overflow-hidden shadow-2xl border border-[#C15F70]/30"
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-20 min-h-[44px] min-w-[44px] p-2.5 bg-[#E8E1D3]/90 text-[#241C20] hover:text-[#C15F70] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] shadow-md transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 min-h-[44px] min-w-[44px] p-3 bg-[#241C20]/75 hover:bg-[#C15F70] text-[#E8E1D3] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] transition-colors shadow-lg cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" aria-hidden="true" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 min-h-[44px] min-w-[44px] p-3 bg-[#241C20]/75 hover:bg-[#C15F70] text-[#E8E1D3] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C15F70] transition-colors shadow-lg cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" aria-hidden="true" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-[#241C20]">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                />
              </div>

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
                  <p className="font-sans text-sm text-[#241C20]/80 font-light mt-0.5">
                    {activeItem.subtitle}
                  </p>
                </div>

                <div className="text-xs font-sans font-medium text-[#241C20]/70 shrink-0">
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

