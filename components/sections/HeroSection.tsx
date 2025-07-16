import { Button } from "@/components/ui/button";
import { Handshake, Flame } from "lucide-react";
import React from "react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => (
  <section className="w-full py-12 md:py-20 bg-black diagonal-stripes relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="flex flex-col items-center text-center">
        <div className="inline-block mb-4 md:mb-6">
          <span
            className="group flex items-center gap-2 bg-[#1a41ae] text-white font-black text-sm md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-lg border-2 md:border-4 border-white shadow-[3px_3px_0px_0px_#ffffff] md:shadow-[6px_6px_0px_0px_#ffffff] transform -rotate-3 hover:rotate-0 hover:bg-black transition-all"
          >
            <Flame className="h-4 w-4 md:h-5 md:w-5 transition-colors group-hover:text-orange-400" />
            БРЕНД №1 В РОССИИ
          </span>
        </div>
        <h1 className="mt-2 text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-2">
          <span className="block transform -skew-y-1">СТАНЬ ОПТОВЫМ</span>
          <span className="block text-[#1a41ae] transform skew-y-1 text-stroke">ПАРТНЕРОМ</span>
          <span className="block transform -skew-y-1">БРЕНДА №1</span>
        </h1>
        <div className="w-32 md:w-48 h-2 md:h-3 bg-white transform skew-x-12 mx-auto mb-16 mt-6"></div>
        <div className="max-w-4xl mx-auto mb-8 md:mb-12 border-l-4 md:border-l-8 border-[#1a41ae] pl-4 md:pl-6">
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight text-left">
            ЭЛЕКТРОНКИ, КОТОРЫЕ РАЗЛЕТАЮТСЯ КАК ГОРЯЧИЕ ПИРОЖКИ!
          </p>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight text-left">
            ЗАКАЗЫВАЙ ОРИГИНАЛ ПО ЦЕНЕ ПРОИЗВОДИТЕЛЯ. ПРИСОЕДИНЯЙСЯ К ЛИДЕРАМ РЫНКА!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <Button
            size="lg"
            className="bg-[#1a41ae] hover:bg-[#153488] text-white font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] md:shadow-[8px_8px_0px_0px_#ffffff] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#ffffff] md:hover:shadow-[4px_4px_0px_0px_#ffffff] transition-all"
            onClick={() => scrollToSection("partnership")}
          >
            СТАТЬ ПАРТНЕРОМ
            <Handshake className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Button>
          <Button
            size="lg"
            className="bg-white text-[#1a41ae] hover:bg-[#1a41ae] hover:text-white font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_#1a41ae] md:shadow-[8px_8px_0px_0px_#1a41ae] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#1a41ae] md:hover:shadow-[4px_4px_0px_0px_#1a41ae] transition-all"
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