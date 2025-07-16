import React from "react";
import AdvantageCard from "@/components/common/AdvantageCard";
import { TrendingUp, Rocket, Clock } from "lucide-react";

const advantages = [
  {
    icon: TrendingUp,
    title: "ВЫСОКАЯ ПРИБЫЛЬ",
    desc: "МАКСИМАЛЬНАЯ МАРЖИНАЛЬНОСТЬ И БЫСТРАЯ ОКУПАЕМОСТЬ. ДЕНЬГИ ДЕЛАЮТ ДЕНЬГИ!",
    features: ["КОНКУРЕНТНЫЕ ЦЕНЫ", "ВЫСОКИЙ СПРОС", "БЫСТРАЯ ОБОРАЧИВАЕМОСТЬ", "СТАБИЛЬНЫЙ ДОХОД"],
  },
  {
    icon: Rocket,
    title: "ПОДДЕРЖКА БИЗНЕСА",
    desc: "ПОЛНАЯ ПОДДЕРЖКА 24/7. МЫ С ТОБОЙ НА КАЖДОМ ШАГЕ К УСПЕХУ!",
    features: [
      "МАРКЕТИНГОВЫЕ МАТЕРИАЛЫ",
      "ОБУЧЕНИЕ ПЕРСОНАЛА",
      "ТЕХНИЧЕСКАЯ ПОДДЕРЖКА",
      "КОНСУЛЬТАЦИИ ПО ПРОДАЖАМ",
    ],
  },
  {
    icon: Clock,
    title: "БЫСТРАЯ ДОСТАВКА",
    desc: "МОЛНИЕНОСНАЯ ЛОГИСТИКА ПО ВСЕЙ РОССИИ. ВРЕМЯ — ДЕНЬГИ!",
    features: ["ДОСТАВКА 1-3 ДНЯ", "СКЛАДЫ В РЕГИОНАХ", "ОТСЛЕЖИВАНИЕ ЗАКАЗОВ", "ГАРАНТИЯ КАЧЕСТВА"],
  },
];

const WhyChooseUsSection: React.FC = () => (
  <section className="w-full py-12 md:py-20 lg:py-32 bg-[#1a41ae] text-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-2 transform skew-x-2">
          ПОЧЕМУ ВЫБИРАЮТ <span className="text-white">НАС</span>
        </h2>
        <div className="w-32 md:w-48 h-2 md:h-3 bg-white mx-auto transform -skew-x-12 mb-10"></div>
        <p className="text-lg md:text-xl lg:text-2xl font-bold max-w-4xl mx-auto">
          МЫ НЕ ПРОСТО ПРОДАЕМ — МЫ СОЗДАЕМ ИМПЕРИИ! ТВОЙ УСПЕХ — НАША РЕПУТАЦИЯ
        </p>
      </div>
      <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-3">
        {advantages.map((adv, idx) => (
          <AdvantageCard key={idx} {...adv} />
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection; 