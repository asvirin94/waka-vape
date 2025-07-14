import React from "react";
import StepCard from "@/components/common/StepCard";
import { Search, QrCode, Shield, Package } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "СТИРАЕМ ЗАЩИТНЫЙ СЛОЙ",
    desc: "НАХОДИМ 14-ЗНАЧНЫЙ КОД ИЛИ QR-КОД НА УПАКОВКЕ",
  },
  {
    step: "02",
    icon: QrCode,
    title: "СКАНИРУЕМ КОД",
    desc: "ВВОДИМ КОД НА ОФИЦИАЛЬНОМ САЙТЕ WAKAVAPING.COM",
  },
  {
    step: "03",
    icon: Shield,
    title: "ПРОВЕРЯЕМ ЛОГОТИП",
    desc: "УБЕЖДАЕМСЯ В СООТВЕТСТВИИ ЛОГОТИПА, ШРИФТА, ГОЛОГРАММЫ",
  },
  {
    step: "04",
    icon: Package,
    title: "КАЧЕСТВО СБОРКИ",
    desc: "ПРОВЕРЯЕМ ВЕС, КАЧЕСТВО ПЕЧАТИ И СБОРКИ УСТРОЙСТВА",
  },
];

const VerificationSection: React.FC = () => (
  <section id="verification" className="w-full py-12 md:py-20 lg:py-32 bg-black diagonal-stripes text-white">
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 md:mb-6 transform -skew-x-2">
          ОСТЕРЕГАЙТЕСЬ <span className="text-white">ПОДДЕЛОК</span>
        </h2>
        <div className="w-32 md:w-48 h-2 md:h-3 bg-[#1D4ED8] mx-auto transform skew-x-12 mb-4 md:mb-6"></div>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-300 max-w-4xl mx-auto mb-8 md:mb-12">
          НЕ ДАЙТЕ СЕБЯ ОБМАНУТЬ! ПРОВЕРЯЙ ОРИГИНАЛЬНОСТЬ КАК НАСТОЯЩИЙ ПРО
        </p>
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="relative bg-gray-800 border-2 md:border-4 border-[#1D4ED8] shadow-[4px_4px_0px_0px_#1D4ED8] md:shadow-[8px_8px_0px_0px_#1D4ED8] transform hover:translate-x-1 md:hover:translate-x-2 hover:translate-y-1 md:hover:translate-y-2 hover:shadow-[2px_2px_0px_0px_#1D4ED8] md:hover:shadow-[4px_4px_0px_0px_#1D4ED8] transition-all">
            <video
              className="w-full h-48 md:h-64 lg:h-96 object-cover"
              controls
              poster="/placeholder.svg?height=400&width=800&text=WAKA+Verification+Video"
            >
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
            <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-[#1D4ED8] text-white px-2 md:px-4 py-1 md:py-2 font-black text-xs md:text-base border-1 md:border-2 border-white transform -rotate-2">
              ВИДЕО ИНСТРУКЦИЯ
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, idx) => (
          <StepCard key={idx} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default VerificationSection; 