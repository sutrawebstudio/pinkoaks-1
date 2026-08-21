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
  } | null>(null);

  const galleryItems = [
    {
      title: "Games Lounge & Family Zone",
      subtitle: "Unwind and play together in style",
      src: "/images/family-games.jpg",
    },
    {
      title: "Home Theater",
      subtitle: "Private cinematic experiences",
      src: "/images/gallery-theater.jpg",
    },
    {
      title: "Modern Bedroom",
      subtitle: "Your personal sanctuary",
      src: "/images/gallery-bedroom.jpg",
    },
    {
      title: "Drawing Room",
      subtitle: "Elegance for every gathering",
      src: "/images/gallery-drawing.jpg",
    },
    {
      title: "Yoga Studio",
      subtitle: "Find your inner peace",
      src: "/images/gallery-yoga.jpg",
    },
    {
      title: "Library",
      subtitle: "A quiet space for reflection",
      src: "/images/gallery-library.jpg",
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-[#FBF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hand-set Section Number & Divider */}
        <SectionDivider number="03" title="Visual Gallery" />

        <ScrollReveal className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241C20]">
            Experience Luxury Living
          </h2>
          <p className="font-sans text-base text-[#241C20]/70 font-light mt-2">
            Curated spaces designed for elegance, quiet relaxation, and cherished family moments.
          </p>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 0.06}
            >
              <div
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer bg-[#F8ECEF] rounded-xl overflow-hidden border border-[#E88CA4]/20 shadow-xs hover:border-[#C74B66]/40 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DCC8]/30">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
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
