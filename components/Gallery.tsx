"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";
import PinkBlossomIcon from "./PinkBlossomIcon";
import { Maximize2, X } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    subtitle: string;
    tag?: string;
    category?: string;
  } | null>(null);

  const categories = ["All", "Residences", "Leisure", "Craft Details"];

  const galleryItems = [
    {
      title: "Games Lounge & Family Zone",
      subtitle: "Unwind and play together in style",
      src: "/images/family-games.jpg",
      tag: "Candid Lifestyle",
      category: "Leisure",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-7",
    },
    {
      title: "Tranquil Water Reflection Pool",
      subtitle: "Soft misty light and sage green landscaping",
      src: "/images/detail-water.jpg",
      tag: "Outdoor Amenity",
      category: "Leisure",
      aspect: "aspect-[4/3]",
      gridSpan: "lg:col-span-5",
    },
    {
      title: "Modern Bedroom Sanctuary",
      subtitle: "Your personal peaceful retreat",
      src: "/images/gallery-bedroom.jpg",
      tag: "Private Quarter",
      category: "Residences",
      aspect: "aspect-[4/3]",
      gridSpan: "lg:col-span-5",
    },
    {
      title: "Jaipur Sandstone & Brass Details",
      subtitle: "Handcrafted materiality and finishes",
      src: "/images/detail-sandstone.jpg",
      tag: "Architectural Detail",
      category: "Craft Details",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-7",
    },
    {
      title: "Private Home Theater",
      subtitle: "Cinematic immersion for family evenings",
      src: "/images/gallery-theater.jpg",
      tag: "Entertainment",
      category: "Leisure",
      aspect: "aspect-[4/3]",
      gridSpan: "lg:col-span-4",
    },
    {
      title: "Holistic Yoga Studio",
      subtitle: "Find your inner quiet and peace",
      src: "/images/gallery-yoga.jpg",
      tag: "Wellness",
      category: "Leisure",
      aspect: "aspect-[4/3]",
      gridSpan: "lg:col-span-4",
    },
    {
      title: "Curated Library Room",
      subtitle: "A quiet space for reflection and focus",
      src: "/images/gallery-library.jpg",
      tag: "Quiet Zone",
      category: "Residences",
      aspect: "aspect-[4/3]",
      gridSpan: "lg:col-span-4",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-[#E8E1D3] relative overflow-hidden">
      
      {/* Background Placement Pattern: Soft blossom branch right margin (opacity 0.10) */}
      <div className="absolute top-12 right-6 opacity-10 pointer-events-none select-none z-0 hidden md:block">
        <PinkBlossomIcon size={280} className="text-[#C94F6D] rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="03" title="Visual Gallery & Craft" icon="flower" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <ScrollReveal className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20] leading-tight">
              Experience Luxury Living &amp; Materiality.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <p className="font-sans text-base text-[#241C20]/75 font-light leading-relaxed">
              A visual monograph blending candid multi-generational moments, water features, stone craft, and room geometry.
            </p>
          </ScrollReveal>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2 mb-10 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-sans text-xs font-medium tracking-wider uppercase transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#C94F6D] text-[#E8E1D3] shadow-xs"
                  : "bg-[#F5EEE6] text-[#241C20]/75 hover:bg-[#F5EEE6]/80 border border-[#C94F6D]/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Mosaic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 0.05}
              className={`${item.gridSpan} h-full`}
            >
              <div
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer bg-[#F5EEE6] rounded-2xl overflow-hidden border border-[#C94F6D]/20 shadow-xs hover:border-[#C94F6D]/50 transition-colors h-full flex flex-col justify-between"
              >
                <div className={`relative ${item.aspect} w-full overflow-hidden bg-[#E8E1D3] min-h-[260px]`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#E8E1D3]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-[#A9C4D8]/40 text-[10px] font-sans font-medium uppercase tracking-widest text-[#241C20]">
                    {item.tag}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#241C20]/70 backdrop-blur-xs p-2 rounded-full text-[#E8E1D3] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-5 bg-[#F5EEE6] border-t border-[#C94F6D]/15">
                  <h3 className="font-serif text-lg font-semibold text-[#241C20] group-hover:text-[#C94F6D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#241C20]/70 font-light mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-[#241C20]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#E8E1D3] rounded-2xl overflow-hidden shadow-2xl border border-[#C94F6D]/30"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-[#E8E1D3]/90 text-[#241C20] hover:text-[#C94F6D] rounded-full focus:outline-none shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-[#241C20]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-[#E8E1D3]">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#B78D4A] block mb-1">
                  {selectedImage.tag}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#241C20]">
                  {selectedImage.title}
                </h3>
                <p className="font-sans text-sm text-[#241C20]/75 font-light mt-1">
                  {selectedImage.subtitle}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
