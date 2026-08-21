"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OverviewStats from "@/components/OverviewStats";
import BrandStatement from "@/components/BrandStatement";
import EditorialQuote from "@/components/EditorialQuote";
import Leadership from "@/components/Leadership";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import FloorPlans from "@/components/FloorPlans";
import UnitConfigurations from "@/components/UnitConfigurations";
import Pricing from "@/components/Pricing";
import EmiCalculator from "@/components/EmiCalculator";
import Neighbourhood from "@/components/Neighbourhood";
import Downloads from "@/components/Downloads";
import EnquireForm from "@/components/EnquireForm";
import Footer from "@/components/Footer";
import FloatingMobileCTA from "@/components/FloatingMobileCTA";
import EnquireModal from "@/components/EnquireModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Enquire Now");

  const handleOpenEnquire = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FBF8F4] text-[#241C20] relative">
      {/* Primary Sticky Header */}
      <Navbar onOpenEnquire={handleOpenEnquire} />

      {/* Hero Section */}
      <Hero onOpenEnquire={handleOpenEnquire} />

      {/* Overview Stats (Equal 6-column grid) */}
      <OverviewStats />

      {/* Philosophy & Vastu Harmony */}
      <BrandStatement />

      {/* Bespoke Full-Width Monograph Pull-Quote Band */}
      <EditorialQuote />

      {/* Leadership & Heritage since 1990 */}
      <Leadership />

      {/* Asymmetric Visual Monograph Gallery */}
      <Gallery />

      {/* Architectural Spec Matrix Amenities */}
      <Amenities />

      {/* Architectural Floor Plans */}
      <FloorPlans onOpenEnquire={handleOpenEnquire} />

      {/* Photo-Forward Unit Configurations */}
      <UnitConfigurations onOpenEnquire={handleOpenEnquire} />

      {/* Structured Comparison Pricing Strip */}
      <Pricing onOpenEnquire={handleOpenEnquire} />

      {/* Instant Live EMI Estimator */}
      <EmiCalculator onOpenEnquire={handleOpenEnquire} />

      {/* Location & Connectivity */}
      <Neighbourhood />

      {/* E-Brochure Downloads */}
      <Downloads onOpenEnquire={handleOpenEnquire} />

      {/* Direct Contact Form Section */}
      <section className="py-20 lg:py-28 bg-[#FBF8F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquireForm title="Get in Touch with Pink Oaks" />
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenEnquire={handleOpenEnquire} />

      {/* Persistent Mobile Actions Bar */}
      <FloatingMobileCTA onOpenEnquire={handleOpenEnquire} />

      {/* Lead Capture Modal */}
      <EnquireModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </main>
  );
}
