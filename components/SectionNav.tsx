"use client";

import { useState, useEffect } from "react";

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  const sectionLinks = [
    { name: "Overview", href: "#overview", id: "overview" },
    { name: "Location", href: "#location", id: "location" },
    { name: "Plans", href: "#plans", id: "plans" },
    { name: "Price", href: "#price", id: "price" },
    { name: "Amenities", href: "#amenities", id: "amenities" },
    { name: "Download", href: "#download", id: "download" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      sectionLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-[72px] z-40 bg-[#E8E1D3]/95 backdrop-blur-xs border-b border-[#C15F70]/20 shadow-2xs py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-start overflow-x-auto no-scrollbar">
        <nav className="flex items-center space-x-6 sm:space-x-8 text-xs font-sans whitespace-nowrap">
          <span className="text-[10px] font-serif uppercase tracking-widest text-[#B78D4A] font-semibold hidden sm:inline-block pr-2 border-r border-[#C15F70]/20">
            In-Page Nav
          </span>
          {sectionLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors font-medium tracking-wider uppercase text-[11px] py-1 relative ${
                  isActive
                    ? "text-[#C15F70] font-semibold"
                    : "text-[#241C20]/75 hover:text-[#C15F70]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C15F70] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
