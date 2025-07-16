import React from "react";

interface StepCardProps {
  step: string;
  icon: React.ElementType;
  title: string;
  desc: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, icon: Icon, title, desc }) => (
  <div className="bg-[#1a41ae] text-white border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_#ffffff] md:shadow-[8px_8px_0px_0px_#ffffff] transform hover:translate-x-1 md:hover:translate-x-2 hover:translate-y-1 md:hover:translate-y-2 hover:shadow-[2px_2px_0px_0px_#ffffff] md:hover:shadow-[4px_4px_0px_0px_#ffffff] transition-all">
    <div className="p-4 md:p-8 text-center">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-[#1a41ae] border-2 md:border-4 border-black flex items-center justify-center mx-auto mb-3 md:mb-4 transform rotate-3 shadow-[2px_2px_0px_0px_#000000] md:shadow-[4px_4px_0px_0px_#000000]">
        <span className="font-black text-lg md:text-xl transform -rotate-3">{step}</span>
      </div>
      <Icon className="h-8 w-8 md:h-12 md:w-12 mb-3 md:mb-4 mx-auto" />
      <h3 className="text-lg md:text-xl font-black mb-3 md:mb-4 transform -skew-x-1">{title}</h3>
      <p className="font-bold text-sm md:text-base leading-tight">{desc}</p>
    </div>
  </div>
);

export default StepCard; 