import React from "react";
import { Button } from "@/components/ui/button";
import { FaTelegramPlane } from "react-icons/fa";

const FooterSection: React.FC = () => (
  <footer className="bg-black border-t-2 md:border-t-4 border-[#1a41ae] py-8 md:py-12 w-full relative z-10">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-8 md:gap-12 grid-cols-1 lg:grid-cols-4 items-start">
        {/* О компании */}
        <div className="lg:col-span-1 space-y-4 md:space-y-6">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-12 h-12 md:w-16 md:h-16">
              <img
                src="/waka_blue_logo.png"
                alt="Waka logo"
                className="w-full h-full object-contain"
                width={64}
                height={64}
              />
            </div>
            {/* <span className="font-black text-lg md:text-2xl tracking-tight -skew-x-6 text-white">WAKA</span> */}
          </div>
          <p className="font-black text-sm md:text-base text-white leading-tight max-w-md">
            ИННОВАЦИОННЫЕ ОДНОРАЗОВЫЕ ЭЛЕКТРОННЫЕ СИГАРЕТЫ С УЗНАВАЕМЫМ ДИЗАЙНОМ И ВЗРЫВНЫМИ ВКУСАМИ. ДЕЛАЕМ ВЕЙПИНГ
            КРУТЫМ С 2019 ГОДА!
          </p>
        </div>
        {/* География работы */}
        <div className="space-y-3 md:space-y-4">
          <h4 className="font-black text-lg md:text-xl text-white -skew-x-1">ГЕОГРАФИЯ РАБОТЫ</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1a41ae] rotate-45"></div>
              <span className="font-black text-xs md:text-sm text-white">РАБОТАЕМ ПО ВСЕЙ РОССИИ</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1a41ae] rotate-45"></div>
              <span className="font-black text-xs md:text-sm text-white">ДОСТАВКА В СТРАНЫ СНГ</span>
            </div>
          </div>
        </div>
        {/* Гарантии качества */}
        <div className="space-y-3 md:space-y-4">
          <h4 className="font-black text-lg md:text-xl text-white -skew-x-1">ГАРАНТИИ КАЧЕСТВА</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1a41ae] rotate-45"></div>
              <span className="font-black text-xs md:text-sm text-white">ОФИЦИАЛЬНАЯ ДИСТРИБУЦИЯ</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1a41ae] rotate-45"></div>
              <span className="font-black text-xs md:text-sm text-white">СЕРТИФИКАТЫ КАЧЕСТВА</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1a41ae] rotate-45"></div>
              <span className="font-black text-xs md:text-sm text-white">МАРКИРОВКА "ЧЕСТНЫЙ ЗНАК"</span>
            </div>
          </div>
        </div>
        {/* Мы в Telegram */}
          <div className="space-y-3 md:space-y-4">
          <h4 className="font-black text-lg md:text-xl text-white -skew-x-1">МЫ В TELEGRAM</h4>
          <p className="font-black text-sm md:text-base text-white max-w-md">
            СЛЕДИТЕ ЗА НОВОСТЯМИ И АКЦИЯМИ В НАШЕМ КАНАЛЕ HOOSKA LAND.
            </p>
          <Button
            asChild
            className="bg-[#1a41ae] hover:bg-[#153488] text-white font-black text-sm md:text-base px-4 md:px-6 py-2 md:py-3 border-2 border-white shadow-[2px_2px_0px_0px_#ffffff] md:shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#ffffff] md:hover:shadow-[2px_2px_0px_0px_#ffffff] transition-all flex items-center gap-2">
            <a href="https://t.me/+9OgsiUfn-SVhMTE6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FaTelegramPlane className="w-5 h-5" />
              ПОДПИСАТЬСЯ НА TELEGRAM
            </a>
          </Button>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t-2 border-gray-700 text-center">
        <p className="font-black text-white text-sm md:text-base">
          © {new Date().getFullYear()} WAKA. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection; 