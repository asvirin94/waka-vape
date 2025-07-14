import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import React from "react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => (
  <section className="w-full py-12 md:py-20 lg:py-32 bg-black diagonal-stripes relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="flex flex-col items-center space-y-6 md:space-y-8 text-center">
        <div className="space-y-4 md:space-y-6">
          <div className="inline-block">
            <span className="group mb-4 md:mb-6 bg-[#1D4ED8] text-white font-black text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 border-2 md:border-4 border-white shadow-[3px_3px_0px_0px_#ffffff] md:shadow-[6px_6px_0px_0px_#ffffff] transform rotate-1 hover:rotate-0 transition-all">
              БРЕНД №1 В РОССИИ
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none">
            <span className="block transform -skew-y-1">СТАНЬ ОПТОВЫМ</span>
            <span className="block text-[#1D4ED8] transform skew-y-1 text-stroke">ПАРТНЕРОМ</span>
            <span className="block transform -skew-y-1">БРЕНДА №1</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-300 leading-tight border-l-4 md:border-l-8 border-[#1D4ED8] pl-4 md:pl-6 text-left">
              ЭЛЕКТРОНКИ, КОТОРЫЕ РАЗЛЕТАЮТСЯ КАК ГОРЯЧИЕ ПИРОЖКИ! ЗАКАЗЫВАЙ ОРИГИНАЛ ПО ЦЕНЕ ПРОИЗВОДИТЕЛЯ.
              ПРИСОЕДИНЯЙСЯ К ЛИДЕРАМ РЫНКА!
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <Button
            size="lg"
            className="bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] md:shadow-[8px_8px_0px_0px_#ffffff] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#ffffff] md:hover:shadow-[4px_4px_0px_0px_#ffffff] transition-all"
            onClick={() => scrollToSection("partnership")}
          >
            СТАТЬ ПАРТНЕРОМ
            <Handshake className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 md:border-4 border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 shadow-[4px_4px_0px_0px_#1D4ED8] md:shadow-[8px_8px_0px_0px_#1D4ED8] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#1D4ED8] md:hover:shadow-[4px_4px_0px_0px_#1D4ED8] transition-all bg-transparent"
            onClick={() => scrollToSection("products")}
          >
            СМОТРЕТЬ ПРОДУКЦИЮ
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection; 