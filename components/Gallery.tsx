"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionDivider from "./ui/SectionDivider";
import ScrollReveal from "./ui/ScrollReveal";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    subtitle: string;
    tag?: string;
  } | null>(null);

  const galleryItems = [
    {
      title: "Games Lounge & Family Zone",
      subtitle: "Unwind and play together in style",
      src: "/images/family-games.jpg",
      tag: "Candid Lifestyle",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-7",
    },
    {
      title: "Drawing Room",
      subtitle: "Elegance for every gathering",
      src: "/images/gallery-drawing.jpg",
      tag: "Interior Architecture",
      aspect: "aspect-[4/3]",
      gridSpan: "lg:col-span-5",
    },
    {
      title: "Modern Bedroom Sanctuary",
      subtitle: "Your personal peaceful retreat",
      src: "/images/gallery-bedroom.jpg",
      tag: "Private Quarter",
      aspect: "aspect-[4/3]",
      gridSpan: "lg:col-span-5",
    },
    {
      title: "Jaipur Sandstone & Brass Details",
      subtitle: "Handcrafted materiality and finishes",
      src: "/images/detail-sandstone.jpg",
      tag: "Architectural Detail",
      aspect: "aspect-[16/10]",
      gridSpan: "lg:col-span-7",
    },
    {
      title: "Private Home Theater",
      subtitle: "Cinematic immersion for family evenings",
      src: "/images/gallery-theater.jpg",
      tag: "Entertainment",
      aspect: "aspect-[4/3]",
      gridSpan: "lg:col-span-4",
    },
    {
      title: "Holistic Yoga Studio",
      subtitle: "Find your inner quiet and peace",
      src: "/images/gallery-yoga.jpg",
      tag: "Wellness",
      aspect: "aspect-[4/3]",
      gridSpan: "lg:col-span-4",
    },
    {
      title: "Curated Library Room",
      subtitle: "A quiet space for reflection and focus",
      src: "/images/gallery-library.jpg",
      tag: "Quiet Zone",
      aspect: "aspect-[4/3]",
      gridSpan: "lg:col-span-4",
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-[#FBF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="03" title="Visual Gallery & Materiality" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <ScrollReveal className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#241C20] leading-tight">
              Experience Luxury Living &amp; Craft.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <p className="font-sans text-base text-[#241C20]/75 font-light leading-relaxed">
              A visual monograph blending candid multi-generational moments, room geometry, and tactile material finishes.
            </p>
          </ScrollReveal>
        </div>

        {/* Asymmetric Editorial Mosaic (Replaces Uniform 6-Box Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {galleryItems.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 0.05}
              className={`${item.gridSpan} h-full`}
            >
              <div
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer bg-[#F8ECEF] rounded-2xl overflow-hidden border border-[#E88CA4]/25 shadow-xs hover:border-[#C74B66]/40 transition-colors h-full flex flex-col justify-between"
              >
                <div className={`relative ${item.aspect} w-full overflow-hidden bg-[#E8DCC8]/30 min-h-[260px]`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#FBF8F4]/90 backdrop-blur-xs px-3 py-1 rounded border border-[#E88CA4]/30 text-[10px] font-sans font-medium uppercase tracking-widest text-[#241C20]">
                    {item.tag}
                  </div>
                </div>
                <div className="p-5 bg-[#FBF8F4] border-t border-[#E88CA4]/20">
                  <h3 className="font-serif text-lg font-semibold text-[#241C20] group-hover:text-[#C74B66] transition-colors">
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
          <div className="fixed inset-0 z-50 bg-[#241C20]/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#FBF8F4] rounded-xl overflow-hidden shadow-2xl border border-[#E88CA4]/30"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#FBF8F4]/80 text-[#241C20] hover:text-[#C74B66] rounded-full focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative aspect-[16/10] w-full bg-[#241C20]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-[#FBF8F4]">
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
