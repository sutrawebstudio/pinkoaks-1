"use client";

import { useState, useEffect } from "react";

// UX Note: 5s presentational delay applied to in-page anchor navigation per user request.
// (Note: This introduces a 5000ms delay on clicking anchor links before scrolling to target section).

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [isNavLoading, setIsNavLoading] = useState<boolean>(false);

  // In-Page links ordered per user journey: Overview -> Amenities -> Plans -> Price -> Location -> Download
  const sectionLinks = [
    { name: "Overview", href: "#overview", id: "overview" },
    { name: "Amenities", href: "#amenities", id: "amenities" },
    { name: "Plans", href: "#plans", id: "plans" },
    { name: "Price", href: "#price", id: "price" },
    { name: "Location", href: "#location", id: "location" },
    { name: "Download", href: "#download", id: "download" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (isNavLoading) return; // Disable further nav clicks while loader is active

    setIsNavLoading(true);

    // Dispatch custom event to show branded 5s page loader overlay
    window.dispatchEvent(
      new CustomEvent("pinkoaks_nav_loader", {
        detail: { targetId, duration: 5000 },
      })
    );

    setTimeout(() => {
      setIsNavLoading(false);
    }, 5400);
  };

  return (
    <div className="sticky top-[72px] z-40 h-[64px] pt-4 flex items-center bg-[#E8E1D3]/95 backdrop-blur-md border-b border-[#C15F70]/20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center overflow-x-auto no-scrollbar">
        <nav className="flex items-center space-x-6 sm:space-x-8 text-xs font-sans whitespace-nowrap">
          <span className="text-[10px] font-serif uppercase tracking-widest text-[#B78D4A] font-semibold hidden sm:inline-block pr-3 border-r border-[#C15F70]/20">
            In-Page Nav
          </span>
          {sectionLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                aria-disabled={isNavLoading}
                className={`transition-colors font-medium tracking-wider uppercase text-[11px] py-1.5 relative ${
                  isNavLoading ? "pointer-events-none opacity-60" : "cursor-pointer"
                } ${
                  isActive
                    ? "text-[#C15F70] font-semibold"
                    : "text-[#241C20]/80 hover:text-[#C15F70]"
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
