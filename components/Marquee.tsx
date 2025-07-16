"use client"

import Marquee from "react-fast-marquee"

interface MarqueeProps {
  speed?: number
  className?: string
}

export function MarqueeComponent({ speed = 100, className = "" }: MarqueeProps) {
  return (
    <div className={`bg-[#1a41ae] text-white py-3 overflow-hidden ${className}`}>
      <Marquee
        delay={1.5}
        speed={speed}
        gradient={false}
        pauseOnHover={false}
        className="text-lg font-medium tracking-wide"
      >
        {Array.from({ length: 15 }, (_, index) => (
          <span 
            key={index} 
            className="px-4 hover:underline transition-all duration-300 cursor-pointer"
            onClick={() => window.open("https://t.me/+9OgsiUfn-SVhMTE6", "_blank")}
          >
            Хотите быть в курсе эксклюзивных предложений? Подписывайтесь на наш Telegram-канал Hooska 
            Land — проверенные производители и поставщики в одном месте!
          </span>
        ))}
      </Marquee>
    </div>
  )
} 