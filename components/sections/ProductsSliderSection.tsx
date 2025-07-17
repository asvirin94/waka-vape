'use client'

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { products } from "../../app/products-data";
// Массив вкусов
const tastes = [
  {
    name: "Клубнично-клюквенный морс",
    image: "/tastes/klubnichno-klukvennyi_mors.webp",
    description: "Яркий микс клубники и клюквы — освежает и бодрит с первой затяжки!",
  },
  {
    name: "Ягодный энергетик",
    image: "/tastes/yagodniy_energetik.webp",
    description: "Взрывная энергия ягод и бодрящий вкус — для тех, кто всегда в движении.",
  },
  {
    name: "Черника-малина",
    image: "/tastes/chernika_malina.webp",
    description: "Сладкая черника и сочная малина — классика, которая не надоедает.",
  },
  {
    name: "Черника-малина-ментол",
    image: "/tastes/chernika_malina_mentol.webp",
    description: "Ягодная свежесть с прохладой ментола — идеальный вкус для лета.",
  },
  {
    name: "Черника-арбуз",
    image: "/tastes/chernika_arbuz.webp",
    description: "Сочный арбуз и лесная черника — необычное сочетание для ценителей.",
  },
  {
    name: "Тройная ягода",
    image: "/tastes/troynaya_yagoda.webp",
    description: "Три вида ягод в одной затяжке — максимум вкуса и удовольствия!",
  },
  {
    name: "Sprite",
    image: "/tastes/sprite.webp",
    description: "Лимонадный вкус с пузырьками — освежает и поднимает настроение.",
  },
  {
    name: "Морская соль и лимон",
    image: "/tastes/morskaya_sol_limon.webp",
    description: "Пикантная морская соль и кислый лимон — для настоящих гурманов.",
  },
  {
    name: "Лимонная ледяная кола",
    image: "/tastes/limonnay_ledyanaya_kola.webp",
    description: "Классическая кола с лимоном и льдом — бодрит и освежает!",
  },
  {
    name: "Лимонад кислая ягода",
    image: "/tastes/limonad_kislaya_yagoda.webp",
    description: "Кислый ягодный лимонад — яркий вкус для любителей экспериментов.",
  },
  {
    name: "Клубника-малина-вишня",
    image: "/tastes/klubnika_malina_vishnya.webp",
    description: "Триумф ягод: клубника, малина и вишня в одной затяжке!",
  },
  {
    name: "Клубника-киви",
    image: "/tastes/klubnika_kiwi.webp",
    description: "Сладкая клубника и экзотический киви — гармония вкуса и свежести.",
  },
  {
    name: "Кислое яблоко",
    image: "/tastes/kisloe_yabloko.webp",
    description: "Яркое кислое яблоко — для тех, кто любит насыщенные вкусы.",
  },
  {
    name: "Киви-маракуйя-гуайява",
    image: "/tastes/kiwi_marakuya_guava.webp",
    description: "Экзотика в каждой затяжке: киви, маракуйя и гуайява.",
  },
  {
    name: "Жевательная резинка",
    image: "/tastes/zhevatelnya_rezinka.webp",
    description: "Вкус детства — сладкая и ароматная жвачка!",
  },
  {
    name: "Ежевика-черника-вишня",
    image: "/tastes/ezhevika_chernika_vishnya.webp",
    description: "Ягодный микс: ежевика, черника и вишня — насыщенно и сочно.",
  },
  {
    name: "Гавайский лимонад",
    image: "/tastes/gavaiskyi_limonad.webp",
    description: "Тропический лимонад с нотками ананаса и цитруса — лето всегда с тобой!",
  },
  {
    name: "Вишня",
    image: "/tastes/vishnya.webp",
    description: "Сочная вишня — классика, которая всегда в моде.",
  },
  {
    name: "Виноград",
    image: "/tastes/vinograd.webp",
    description: "Сладкий виноград — насыщенный вкус для настоящих ценителей.",
  },
  {
    name: "Арбуз",
    image: "/tastes/arbuz.webp",
    description: "Сочный арбуз — летний вкус, который всегда с тобой!",
  },
];

// Компонент слайдера вкусов
const TastesSlider: React.FC = () => (
  <Swiper
    loop={true}
    modules={[Navigation, Pagination]}
    navigation={{ prevEl: ".tastes-prev", nextEl: ".tastes-next" }}
    pagination={{ clickable: true, el: ".tastes-pagination" }}
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
    {tastes.map((taste: {name: string, image: string, description: string}, index: number) => (
      <SwiperSlide key={index} className="group cursor-pointer px-2 md:px-4">
        <div className="relative bg-white text-black border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_#000000] md:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 overflow-hidden aspect-[5/8]">
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
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={taste.image}
              alt={taste.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
              {...(index >= 3 ? { loading: "lazy" } : {})}
            />
            {/* Product Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-black text-white transform -skew-x-1">{taste.name}</h3>
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#1a41ae]/95 text-white p-4 md:p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
              <div className="text-center space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-black transform -skew-x-1">{taste.name}</h3>
                <div className="w-16 md:w-20 h-1 md:h-2 bg-white mx-auto transform skew-x-12"></div>
                <p className="font-bold text-sm md:text-base leading-tight px-2">{taste.description}</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const ProductsSliderSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
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
            {products.map((product: {name: string, puffs?: string, image: string, description: string}, index: number) => (
              <SwiperSlide key={index} className="group cursor-pointer px-2 md:px-4">
                <div className="relative bg-white text-black border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_#000000] md:shadow-[8px_8px_0px_0px_#000000] transition-all duration-300 overflow-hidden aspect-[5/8]">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className={
                        "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" +
                        (product.name === "xLand Spike 35000" ? " scale-75 translate-x-8" : "")
                      }
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
      <section className="w-full py-12 bg-black diagonal-stripes text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2 transform -skew-x-2">
              А ЕЩЁ У НАС ЕСТЬ ОГРОМНАЯ КОЛЛЕКЦИЯ ВКУСОВ
            </h2>
            <div className="w-32 md:w-48 h-2 md:h-3 bg-[#1a41ae] mx-auto transform skew-x-12 mb-10"></div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-300 max-w-4xl mx-auto">
              Просто представь, насколько они крутые — каждый вкус создан, чтобы удивлять и радовать снова и снова!
            </p>
          </div>
          {mounted && <TastesSlider />}
          <div className="w-full flex items-center justify-center gap-6 mt-6 mx-auto">
            <button className="tastes-prev bg-white text-black p-2 rounded-full shadow-[2px_2px_0px_0px_#ffffff] md:shadow-[4px_4px_0px_0px_#ffffff] border-2 md:border-4 border-black transform hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="tastes-pagination !w-auto w-fit flex gap-2"></div>
            <button className="tastes-next bg-white text-black p-2 rounded-full shadow-[2px_2px_0px_0px_#ffffff] md:shadow-[4px_4px_0px_0px_#ffffff] border-2 md:border-4 border-black transform hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsSliderSection; 