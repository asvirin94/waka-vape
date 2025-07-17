'use client'

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    name: "Жидкости",
    puffs: "",
    image: "/products/waka_zhidkost.jpeg",
    description: "Жидкости Waka — идеальное дополнение для вашего устройства, насыщенный вкус и максимальное удовольствие.",
  },
  {
    name: "E.T. Cyber 35000",
    puffs: "35000",
    image: "/products/waka_E.T._cyber_35000.jpeg",
    description: "E.T. Cyber 35000 — футуристический дизайн и 35000 затяжек для тех, кто стремится к новым ощущениям.",
  },
  {
    name: "Burst 41000",
    puffs: "41000",
    image: "/products/waka_burst_41000.jpeg",
    description: "Burst 41000 — всплеск аромата и максимальная автономность для истинных гурманов.",
  },
  {
    name: "Blast 38000",
    puffs: "38000",
    image: "/products/waka_blast_38000.jpeg",
    description: "Blast 38000 — взрывной вкус и рекордная автономность для самых требовательных.",
  },
  {
    name: "xLand Spike 35000",
    puffs: "35000",
    image: "/products/waka_xLand_Spike_35000.jpeg",
    description: "xLand Spike 35000 — экстремальная производительность и уникальный стиль для настоящих лидеров.",
  },
  {
    name: "Jupiter 30000",
    puffs: "30000",
    image: "/products/waka_jupiter_30000.jpeg",
    description: "Jupiter 30000 — космическое количество затяжек и незабываемый вкус в каждой из них.",
  },
  {
    name: "SoPro 20000",
    puffs: "20000",
    image: "/products/waka_soPro_20000.jpeg",
    description: "SoPro 20000 — профессиональная линейка для длительного и стабильного парения.",
  },
  {
    name: "xLand 15000",
    puffs: "15000",
    image: "/products/waka_xLand_15000.jpeg",
    description: "xLand 15000 — дальний путь вкуса и насыщенности для самых требовательных пользователей.",
  },
  {
    name: "SoPro PA10000",
    puffs: "10000",
    image: "/products/waka_soPro_PA10000.jpeg",
    description: "SoPro PA10000 — 10000 затяжек для тех, кто выбирает максимум вкуса и стиля.",
  },
  {
    name: "SoPro 10000",
    puffs: "10000",
    image: "/products/waka_soPro_10000.jpeg",
    description: "SoPro 10000 — 10000 затяжек профессионального вкуса и надёжности.",
  },
  {
    name: "DM 8000i",
    puffs: "8000",
    image: "/products/waka_dm_8000i.jpeg",
    description: "DM 8000i — инновации и 8000 затяжек ярких впечатлений для требовательных пользователей.",
  },
  {
    name: "DM 8000",
    puffs: "8000",
    image: "/products/waka_dm_8000.jpg",
    description: "DM 8000 — современный дизайн и 8000 затяжек для долгого наслаждения любимым вкусом.",
  },
  {
    name: "SoPro PA7000",
    puffs: "7000",
    image: "/products/waka_soPro_PA7000.jpeg",
    description: "SoPro PA7000 — 7000 затяжек насыщенного вкуса и комфорта в каждом вдохе.",
  },
  {
    name: "Smash 6000",
    puffs: "6000",
    image: "/products/waka_smash_6000.jpg",
    description: "Smash на 6000 затяжек — взрывной вкус и максимальное удовольствие в каждой затяжке.",
  },
  {
    name: "soFit FA4500",
    puffs: "4500",
    image: "/products/waka_soFit_FA4500.jpeg",
    description: "SoFit FA4500 — 4500 затяжек чистого вкуса и комфорта для тех, кто ценит качество.",
  },
  {
    name: "Mirror 4500",
    puffs: "4500",
    image: "/products/waka_mirror_4500.jpeg",
    description: "Mirror на 4500 затяжек — отражение баланса аромата и удовольствия в каждом вдохе.",
  },
  {
    name: "Slam 2300",
    puffs: "2300",
    image: "/products/waka_slam_2300.jpg",
    description: "Slam на 2300 затяжек — мощный заряд вкуса и энергии для настоящих ценителей насыщенности.",
  },
  {
    name: "Solo 1800",
    puffs: "1800",
    image: "/products/waka_solo.jpeg",
    description: "Лёгкая и стильная Solo на 1800 затяжек — идеальный спутник для динамичной жизни и ярких вкусовых ощущений.",
  },
];

const ProductsSliderSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="products" className="w-full py-12 md:py-20 lg:py-32 bg-black diagonal-stripes text-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-2 transform -skew-x-2">
            ЛИНЕЙКИ <span className="text-white">БРЕНДА</span>
          </h2>
          <div className="w-32 md:w-48 h-2 md:h-3 bg-[#1a41ae] mx-auto transform skew-x-12 mb-10"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-300 max-w-4xl mx-auto">
            КАЖДАЯ МОДЕЛЬ — ЭТО ШЕДЕВР! ВЫБИРАЙ СВОЕ ОРУЖИЕ МАССОВОГО ПОРАЖЕНИЯ
          </p>
        </div>
        {mounted && (
        <Swiper
          loop={true}
          modules={[Navigation, Pagination]}
          navigation={{ prevEl: ".products-prev", nextEl: ".products-next" }}
          pagination={{ clickable: true, el: ".products-pagination" }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          slidesPerGroup={1}
          className="pb-8"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="group cursor-pointer px-2 md:px-4">
              <div className="relative bg-black text-white border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_#000000] md:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 overflow-hidden aspect-[5/8]">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    {...(index >= 3 ? { loading: "lazy" } : {})}
                  />
                  <div className="absolute top-2 left-2 z-20 w-8 h-8 md:w-12 md:h-12">
                    <Image
                      src="/waka_black_logo.png"
                      alt="Waka logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                      priority={false}
                    />
                  </div>
                  {/* Puffs Badge - Top Right */}
                  {product.puffs && (
                    <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-[#1a41ae] text-white px-2 md:px-3 py-1 md:py-2 font-black text-xs md:text-sm border-1 md:border-2 border-white transform rotate-3 shadow-[2px_2px_0px_0px_#000000] md:shadow-[3px_3px_0px_0px_#000000]">
                      {product.puffs}
                    </div>
                  )}
                  {/* Product Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-black text-white transform -skew-x-1">{product.name}</h3>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1a41ae]/95 text-white p-4 md:p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                    <div className="text-center space-y-4 md:space-y-6">
                      <h3 className="text-2xl md:text-3xl font-black transform -skew-x-1">{product.name}</h3>
                      <div className="w-16 md:w-20 h-1 md:h-2 bg-white mx-auto transform skew-x-12"></div>
                      <p className="font-bold text-sm md:text-base leading-tight px-2">{product.description}</p>
                      <div className="bg-white text-[#1a41ae] px-4 md:px-6 py-2 md:py-3 font-black text-lg md:text-xl border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_#000000] md:shadow-[4px_4px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#000000] md:hover:shadow-[2px_2px_0px_0px_#000000] transition-all">
                        {product.puffs} ЗАТЯЖЕК
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        )}

        {/* Навигация и пагинация */}
        <div className="w-full flex items-center justify-center gap-6 mt-6 mx-auto">
          <button className="products-prev bg-white text-black p-2 rounded-full shadow-[2px_2px_0px_0px_#ffffff] md:shadow-[4px_4px_0px_0px_#ffffff] border-2 md:border-4 border-black transform hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="products-pagination !w-auto w-fit flex gap-2"></div>
          <button className="products-next bg-white text-black p-2 rounded-full shadow-[2px_2px_0px_0px_#ffffff] md:shadow-[4px_4px_0px_0px_#ffffff] border-2 md:border-4 border-black transform hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSliderSection; 