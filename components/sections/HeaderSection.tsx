import Link from "next/link";
import { Menu, X } from "lucide-react";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

interface HeaderSectionProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }) => (
  <header className="h-16 md:h-20 bg-black relative z-50">
    <div className="container mx-auto px-4 lg:px-6 flex items-center h-full">
      <Link href="/" className="flex items-center justify-center">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-[#1a41ae] border-2 md:border-4 border-white transform rotate-3 flex items-center justify-center shadow-[2px_2px_0px_0px_#ffffff] md:shadow-[4px_4px_0px_0px_#ffffff]">
            <span className="text-white font-black text-sm md:text-xl transform -rotate-3">W</span>
          </div>
          <span className="font-black text-lg md:text-2xl tracking-tight transform -skew-x-6">WAKA</span>
        </div>
      </Link>
      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-8 items-center">
        <button
          onClick={() => scrollToSection("about")}
          className="text-lg font-black hover:text-[#1a41ae] transition-colors border-b-2 border-transparent hover:border-[#001e73] pb-1"
        >
          О БРЕНДЕ
        </button>
        <button
          onClick={() => scrollToSection("verification")}
          className="text-lg font-black hover:text-[#1a41ae] transition-colors border-b-2 border-transparent hover:border-[#001e73] pb-1"
        >
          ПРОВЕРКА
        </button>
        <button
          onClick={() => scrollToSection("products")}
          className="text-lg font-black hover:text-[#1a41ae] transition-colors border-b-2 border-transparent hover:border-[#001e73] pb-1"
        >
          ПРОДУКЦИЯ
        </button>
        <button
          onClick={() => scrollToSection("partnership")}
          className="text-lg font-black hover:text-[#1a41ae] transition-colors border-b-2 border-transparent hover:border-[#001e73] pb-1"
        >
          ПАРТНЕРСТВО
        </button>
        <a href="https://t.me/+9OgsiUfn-SVhMTE6" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#1a41ae] transition-colors ml-2 flex items-center" title="Telegram">
          <FaTelegramPlane className="w-6 h-6" />
        </a>
      </nav>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="ml-auto md:hidden text-white hover:text-[#1a41ae] transition-colors"
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
    {/* Mobile Menu */}
    <div
      className={`mobile-menu ${mobileMenuOpen ? "open" : ""} fixed top-16 left-0 w-full h-screen bg-black border-t-4 border-[#1a41ae] md:hidden z-40`}
    >
      <nav className="flex flex-col p-6 space-y-6">
        <button
          onClick={() => scrollToSection("about")}
          className="text-xl font-black text-left hover:text-[#1a41ae] transition-colors border-b-2 border-transparent hover:border-[#001e73] pb-2"
        >
          О БРЕНДЕ
        </button>
        <button
          onClick={() => scrollToSection("verification")}
          className="text-xl font-black text-left hover:text-[#1a41ae] transition-colors border-b-2 border-transparent hover:border-[#001e73] pb-2"
        >
          ПРОВЕРКА
        </button>
        <button
          onClick={() => scrollToSection("products")}
          className="text-xl font-black text-left hover:text-[#1a41ae] transition-colors border-b-2 border-transparent hover:border-[#001e73] pb-2"
        >
          ПРОДУКЦИЯ
        </button>
        <button
          onClick={() => scrollToSection("partnership")}
          className="text-xl font-black text-left hover:text-[#1a41ae] transition-colors border-b-2 border-transparent hover:border-[#001e73] pb-2"
        >
          ПАРТНЕРСТВО
        </button>
        {!mobileMenuOpen && (
          <a href="https://t.me/+9OgsiUfn-SVhMTE6" target="_blank" rel="noopener noreferrer" className="ml-4 md:hidden text-white hover:text-[#1a41ae] transition-colors flex items-center" title="Telegram">
            <FaTelegramPlane className="w-6 h-6" />
          </a>
        )}
      </nav>
    </div>
  </header>
);

export default HeaderSection; 