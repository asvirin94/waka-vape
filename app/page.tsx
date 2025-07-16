"use client"

import type React from "react"
import dynamic from "next/dynamic";
import HeaderSection from "@/components/sections/HeaderSection"
import { useState } from "react"
import HeroSection from "@/components/sections/HeroSection"
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"), { ssr: false });
const VerificationSection = dynamic(() => import("@/components/sections/VerificationSection"), { ssr: false });
const WhyChooseUsSection = dynamic(() => import("@/components/sections/WhyChooseUsSection"), { ssr: false });
const ProductsSliderSection = dynamic(() => import("@/components/sections/ProductsSliderSection"), { ssr: false });
const PartnershipSection = dynamic(() => import("@/components/sections/PartnershipSection"), { ssr: false });
import FooterSection from "@/components/sections/FooterSection"
import { MarqueeComponent } from "@/components/Marquee"

export default function WakaLanding() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <HeaderSection
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main className="flex-1">
        <MarqueeComponent />
        
        <HeroSection scrollToSection={scrollToSection} />

        <AboutSection />

        <VerificationSection />

        <WhyChooseUsSection />

        <ProductsSliderSection />

        <PartnershipSection />

      </main>

      <FooterSection />

    </div>
  )
}
