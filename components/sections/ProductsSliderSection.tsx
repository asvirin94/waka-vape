'use client'

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    name: "Solo",
    puffs: "1800",
    image: "/products/waka_solo.jpg",
    description:
      "Компактный и стильный Solo на 1800 затяжек — идеальный выбор для тех, кто ценит мобильность и насыщенный вкус.",
  },
  {
    name: "Slam",
    puffs: "2300",
    image: "/products/waka_slam.jpg",
    description:
      "Мощный Slam с 2300 затяжками — ударная доза вкуса для настоящих ценителей интенсивных ощущений.",
  },
  {
    name: "Mirror",
    puffs: "4500",
    image: "/products/waka_mirror.jpg",
    description:
      "Mirror на 4500 затяжек — отражение идеального баланса аромата и табачного кайфа в вашем кармане.",
  },
  {
    name: "SoPro 4500",
    puffs: "4500",
    image: "/products/waka_so_pro.jpg",
    description:
      "SoPro с 4500 затяжками — профессиональный уровень вкуса и надежности в компактном формате.",
  },
  {
    name: "Smash",
    puffs: "6000",
    image: "/products/waka_smash_6000.jpg",
    description:
      "Разрушительная мощь Smash на 6000 затяжек подарит вам взрыв ароматов и впечатлений.",
  },
  {
    name: "6000 (картриджная версия)",
    puffs: "6000",
    image: "/products/waka_6000_cart.jpg",
    description:
      "Картриджная версия на 6000 затяжек — просто меняйте картриджи и наслаждайтесь любимым вкусом без лишних хлопот.",
  },
  {
    name: "DM",
    puffs: "8000",
    image: "/products/waka_dm_8000.jpg",
    description:
      "DM на 8000 затяжек — ультрасовременный дизайн и глубокие ноты вкуса для вашего комфорта.",
  },
  {
    name: "i8000",
    puffs: "8000",
    image: "/products/waka_i8000.webp",
    description:
      "Инновационный i8000 с 8000 затяжками — сочетание передовых технологий и яркого вкуса.",
  },
  {
    name: "SoPro 10000",
    puffs: "10000",
    image: "/products/waka_sopro_10000.jpg",
    description:
      "SoPro на 10000 затяжек — для тех, кто хочет максимально долго наслаждаться чистым и насыщенным вкусом.",
  },
  {
    name: "Xland 15000",
    puffs: "15000",
    image: "/products/waka_xland.jpg",
    description:
      "Xland с 15000 затяжками — экстремальная дальность аромата для самых требовательных пользователей.",
  },
  {
    name: "SoPro 20000",
    puffs: "20000",
    image: "/products/waka_sopro_20000.jpg",
    description:
      "SoPro на 20000 затяжек — профессиональная линейка для длительного и стабильного парения.",
  },
  {
    name: "Xland 25000",
    puffs: "25000",
    image: "/products/waka_xland_25000.jpg",
    description:
      "Xland с 25000 затяжками — рекордные показатели вкуса и объёма для настоящих рекордсменов.",
  },
  {
    name: "SoPro 28000",
    puffs: "28000",
    image: "/products/waka_sopro_28000.jpg",
    description:
      "SoPro на 28000 затяжек — бескомпромиссный выбор для тех, кто хочет больше и дольше.",
  },
  {
    name: "Upiter",
    puffs: "30000",
    image: "/products/waka_upiter.webp",
    description:
      "Космический Upiter с 30000 затяжками — отправляйтесь в межгалактическое путешествие вкуса.",
  },
  {
    name: "Xland 35000",
    puffs: "35000",
    image: "/products/waka_xland_35000.webp",
    description:
      "Xland на 35000 затяжек — экстремальная производительность и фантастический вкус в каждом вдохе.",
  },
  {
    name: "Blast 36000",
    puffs: "36000",
    image: "/products/waka_blast_36000.jpg",
    description:
      "Взрывной Blast с 36000 затяжками — максимальная отдача аромата и длительность работы.",
  },
  {
    name: "Blast 38000",
    puffs: "38000",
    image: "/products/waka_blast_38000.webp",
    description:
      "Новая версия Blast на 38000 затяжек — ещё больше взрывных впечатлений и насыщенности.",
  },
  {
    name: "Burst",
    puffs: "41000",
    image: "/products/waka_burst.webp",
    description:
      "Burst с 41000 затяжками — всплеск ароматов и максимальная автономность для истинных гурманов.",
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
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          slidesPerGroup={1}
          className="pb-8"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="group cursor-pointer px-2 md:px-4">
              <div className="relative bg-black text-white border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_#000000] md:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 overflow-hidden aspect-[5/8]">
                {/* Product Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Puffs Badge - Top Right */}
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-[#1a41ae] text-white px-2 md:px-3 py-1 md:py-2 font-black text-xs md:text-sm border-1 md:border-2 border-white transform rotate-3 shadow-[2px_2px_0px_0px_#000000] md:shadow-[3px_3px_0px_0px_#000000]">
                    {product.puffs}
                  </div>
                  {/* Product Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-black text-white transform -skew-x-1">{product.name}</h3>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1a41ae]/95 text-white p-4 md:p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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