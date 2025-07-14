import React, { useState, useEffect } from "react";

const products = [
  {
    name: "WAKA CLASSIC",
    puffs: "600",
    image: "/placeholder.svg?height=400&width=250&text=WAKA+CLASSIC",
    description:
      "Идеальный старт для новичков! Компактный размер, насыщенный вкус и стильный дизайн. Твой первый шаг в мир WAKA!",
  },
  {
    name: "WAKA PRO",
    puffs: "1500",
    image: "/placeholder.svg?height=400&width=250&text=WAKA+PRO",
    description:
      "Для тех, кто знает толк в качестве! Увеличенная емкость и профессиональный подход к каждой затяжке.",
  },
  {
    name: "WAKA MAX",
    puffs: "2500",
    image: "/placeholder.svg?height=400&width=250&text=WAKA+MAX",
    description: "Максимум удовольствия в одном устройстве! Долгоиграющий хит для истинных ценителей вейпинга.",
  },
  {
    name: "WAKA ULTRA",
    puffs: "5000",
    image: "/placeholder.svg?height=400&width=250&text=WAKA+ULTRA",
    description:
      "Ультра мощность, ультра вкус! Для тех, кто не привык довольствоваться малым. Это уже не просто вейп — это стиль жизни!",
  },
  {
    name: "WAKA MEGA",
    puffs: "8000",
    image: "/placeholder.svg?height=400&width=250&text=WAKA+MEGA",
    description:
      "Мега размер, мега вкус, мега впечатления! Топовая модель для настоящих гурманов и профессионалов своего дела.",
  },
];

const ProductsSliderSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const extendedProducts = [...products, ...products, ...products];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= products.length * 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(products.length);
            setTimeout(() => {
              setIsTransitioning(true);
            }, 50);
          }, 500);
        }
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const cardWidth = typeof window !== "undefined" && window.innerWidth < 768 ? 272 : 336;

  return (
    <section id="products" className="w-full py-12 md:py-20 lg:py-32 bg-black diagonal-stripes text-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 md:mb-6 transform -skew-x-2">
            ЛИНЕЙКИ <span className="text-white">БРЕНДА</span>
          </h2>
          <div className="w-32 md:w-48 h-2 md:h-3 bg-[#1D4ED8] mx-auto transform skew-x-12 mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-300 max-w-4xl mx-auto">
            КАЖДАЯ МОДЕЛЬ — ЭТО ШЕДЕВР! ВЫБИРАЙ СВОЕ ОРУЖИЕ МАССОВОГО ПОРАЖЕНИЯ
          </p>
        </div>
        <div className="slider-container">
          <div
            className={`infinite-slider ${!isTransitioning ? "no-transition" : ""}`}
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {extendedProducts.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-64 md:w-80 mx-2 md:mx-4 group cursor-pointer">
                <div className="relative bg-white border-2 md:border-4 border-[#1D4ED8] shadow-[4px_4px_0px_0px_#1D4ED8] md:shadow-[8px_8px_0px_0px_#1D4ED8] transform group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:translate-y-1 md:group-hover:translate-y-2 group-hover:shadow-[2px_2px_0px_0px_#1D4ED8] md:group-hover:shadow-[4px_4px_0px_0px_#1D4ED8] transition-all duration-300 overflow-hidden">
                  {/* Product Image */}
                  <div className="relative h-96 md:h-[450px] overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Puffs Badge - Top Right */}
                    <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-[#1D4ED8] text-white px-2 md:px-3 py-1 md:py-2 font-black text-xs md:text-sm border-1 md:border-2 border-white transform rotate-3 shadow-[2px_2px_0px_0px_#000000] md:shadow-[3px_3px_0px_0px_#000000]">
                      {product.puffs}
                    </div>
                    {/* Product Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6">
                      <h3 className="text-xl md:text-2xl font-black text-white transform -skew-x-1">{product.name}</h3>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#1D4ED8]/95 text-white p-4 md:p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center space-y-4 md:space-y-6">
                        <h3 className="text-2xl md:text-3xl font-black transform -skew-x-1">{product.name}</h3>
                        <div className="w-16 md:w-20 h-1 md:h-2 bg-white mx-auto transform skew-x-12"></div>
                        <p className="font-bold text-sm md:text-base leading-tight px-2">{product.description}</p>
                        <div className="bg-white text-[#1D4ED8] px-4 md:px-6 py-2 md:py-3 font-black text-lg md:text-xl border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_#000000] md:shadow-[4px_4px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#000000] md:hover:shadow-[2px_2px_0px_0px_#000000] transition-all">
                          {product.puffs} ЗАТЯЖЕК
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSliderSection; 