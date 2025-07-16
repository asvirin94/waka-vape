import HeaderSection from "@/components/sections/HeaderSection";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VerificationSection from "@/components/sections/VerificationSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProductsSliderSection from "@/components/sections/ProductsSliderSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import FooterSection from "@/components/sections/FooterSection";
import ClientMarquee from "@/components/ClientMarquee";

export default function WakaLanding() {
  // scrollToSection и mobileMenuOpen/setMobileMenuOpen нужны только для Header/Hero, их можно реализовать через use client в HeaderSection/HeroSection при необходимости интерактива
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <HeaderSection />
      <main className="flex-1">
        <ClientMarquee />
        <HeroSection />
        <AboutSection />
        <VerificationSection />
        <WhyChooseUsSection />
        <ProductsSliderSection />
        <PartnershipSection />
      </main>
      <FooterSection />
    </div>
  );
}
