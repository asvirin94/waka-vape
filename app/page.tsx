"use client"

import type React from "react"
import HeaderSection from "@/components/sections/HeaderSection"
import { useState } from "react"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import VerificationSection from "@/components/sections/VerificationSection"
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection"
import ProductsSliderSection from "@/components/sections/ProductsSliderSection"
import PartnershipSection from "@/components/sections/PartnershipSection"
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
