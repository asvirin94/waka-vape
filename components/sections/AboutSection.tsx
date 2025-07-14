import React from "react";
import FeatureCard from "@/components/common/FeatureCard";
import { Award, Users, Zap, Star } from "lucide-react";

const features = [
  { icon: Award, title: "КАЧЕСТВО", desc: "СТРОГИЙ КОНТРОЛЬ КАЧЕСТВА", color: "bg-black text-white" },
  { icon: Users, title: "ОПЫТ", desc: "ПРОФЕССИОНАЛЫ С ОПЫТОМ RELX", color: "bg-white text-black" },
  { icon: Zap, title: "ДИЗАЙН", desc: "ПРОГРЕССИВНЫЙ ДИЗАЙН", color: "bg-white text-black" },
  { icon: Star, title: "ВКУСЫ", desc: "ШИРОКИЙ АССОРТИМЕНТ", color: "bg-black text-white" },
];

const AboutSection: React.FC = () => (
  <section id="about" className="w-full py-12 md:py-20 lg:py-32 bg-[#1D4ED8] text-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none transform -skew-x-3">
              О <span className="text-white">БРЕНДЕ</span> WAKA
            </h2>
            <div className="w-24 md:w-32 h-2 bg-white transform skew-x-12"></div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
              WAKA — НЕ ПРОСТО БРЕНД, А РЕВОЛЮЦИЯ В МИРЕ ОДНОРАЗОВЫХ ЭЛЕКТРОНОК! СОЗДАН КОМАНДОЙ ФАНАТОВ ВЕЙПИНГА,
              КОТОРЫЕ ЗНАЮТ ТОЛК В СТИЛЕ И ВКУСЕ.
            </p>
            <p className="text-base md:text-lg font-bold leading-tight opacity-90">
              Мы даем не просто устройство — мы даем возможность выделиться из толпы! Каждая модель — это
              сочетание убойного дизайна и взрывного вкуса.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 