"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Zap,
  Users,
  Rocket,
  Mail,
  Shield,
  Award,
  Star,
  Clock,
  Target,
  Flame,
  QrCode,
  Search,
  Package,
  TrendingUp,
  Handshake,
  Menu,
  X,
} from "lucide-react"
import HeaderSection from "@/components/sections/HeaderSection"
import { useState, useEffect } from "react"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import VerificationSection from "@/components/sections/VerificationSection"
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection"
import ProductsSliderSection from "@/components/sections/ProductsSliderSection"
import PartnershipSection from "@/components/sections/PartnershipSection"
import FooterSection from "@/components/sections/FooterSection"

export default function WakaLanding() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Здесь будет логика отправки формы
  }

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
