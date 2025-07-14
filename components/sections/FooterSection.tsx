import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const FooterSection: React.FC = () => (
  <footer className="bg-black diagonal-stripes border-t-2 md:border-t-4 border-[#1D4ED8] py-8 md:py-12 relative z-10">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-4">
        {/* О компании */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-[#1D4ED8] border-2 md:border-4 border-white transform rotate-3 flex items-center justify-center shadow-[2px_2px_0px_0px_#ffffff] md:shadow-[4px_4px_0px_0px_#ffffff]">
              <span className="text-white font-black text-sm md:text-xl transform -rotate-3">W</span>
            </div>
            <span className="font-black text-lg md:text-2xl tracking-tight transform -skew-x-6 text-white">
              WAKA
            </span>
          </div>
          <p className="font-bold text-sm md:text-base text-gray-300 leading-tight max-w-md">
            ИННОВАЦИОННЫЕ ОДНОРАЗОВЫЕ ЭЛЕКТРОННЫЕ СИГАРЕТЫ С УЗНАВАЕМЫМ ДИЗАЙНОМ И ВЗРЫВНЫМИ ВКУСАМИ. ДЕЛАЕМ ВЕЙПИНГ
            КРУТЫМ С 2019 ГОДА! 🚀
          </p>
        </div>
        {/* География работы */}
        <div className="space-y-3 md:space-y-4">
          <h4 className="font-black text-lg md:text-xl text-white transform -skew-x-1">ГЕОГРАФИЯ РАБОТЫ</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1D4ED8] transform rotate-45"></div>
              <span className="font-black text-xs md:text-sm text-gray-300">РАБОТАЕМ ПО ВСЕЙ РОССИИ</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1D4ED8] transform rotate-45"></div>
              <span className="font-black text-xs md:text-sm text-gray-300">ДОСТАВКА В СТРАНЫ СНГ</span>
            </div>
          </div>
        </div>
        {/* Гарантии качества */}
        <div className="space-y-3 md:space-y-4">
          <h4 className="font-black text-lg md:text-xl text-white transform -skew-x-1">ГАРАНТИИ КАЧЕСТВА</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1D4ED8] transform rotate-45"></div>
              <span className="font-black text-xs md:text-sm text-gray-300">ОФИЦИАЛЬНАЯ ДИСТРИБУЦИЯ</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1D4ED8] transform rotate-45"></div>
              <span className="font-black text-xs md:text-sm text-gray-300">СЕРТИФИКАТЫ КАЧЕСТВА</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1D4ED8] transform rotate-45"></div>
              <span className="font-black text-xs md:text-sm text-gray-300">МАРКИРОВКА "ЧЕСТНЫЙ ЗНАК"</span>
            </div>
          </div>
        </div>
      </div>
      {/* Telegram и контакты */}
      <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t-2 border-[#1D4ED8]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-black text-lg md:text-xl text-white transform -skew-x-1">МЫ В TELEGRAM</h4>
            <p className="font-bold text-sm md:text-base text-gray-300 max-w-md">
              СЛЕДИТЕ ЗА НОВОСТЯМИ И АКЦИЯМИ В НАШЕМ КАНАЛЕ WAKA LAND.
            </p>
            <Button className="bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-black text-sm md:text-base px-4 md:px-6 py-2 md:py-3 border-2 border-white shadow-[2px_2px_0px_0px_#ffffff] md:shadow-[4px_4px_0px_0px_#ffffff] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#ffffff] md:hover:shadow-[2px_2px_0px_0px_#ffffff] transition-all">
              ПОДПИСАТЬСЯ НА TELEGRAM
            </Button>
          </div>
          <div className="flex items-center gap-3 md:gap-4 bg-[#1D4ED8] text-white px-4 md:px-6 py-2 md:py-3 border-2 md:border-4 border-white shadow-[2px_2px_0px_0px_#ffffff] md:shadow-[4px_4px_0px_0px_#ffffff] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#ffffff] md:hover:shadow-[2px_2px_0px_0px_#ffffff] transition-all">
            <Mail className="h-4 w-4 md:h-5 md:w-5" />
            <a
              href="mailto:info@waka.ru"
              className="font-black text-sm md:text-base hover:text-gray-200 transition-colors"
            >
              INFO@WAKA.RU
            </a>
          </div>
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