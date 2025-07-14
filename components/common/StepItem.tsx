import React from "react";

interface StepItemProps {
  number: number;
  text: string;
}

const StepItem: React.FC<StepItemProps> = ({ number, text }) => (
  <div className="flex items-center gap-3 md:gap-4 bg-black text-white p-3 md:p-4 border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_#000000] md:shadow-[4px_4px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#000000] md:hover:shadow-[2px_2px_0px_0px_#000000] transition-all">
    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#1D4ED8] border-1 md:border-2 border-white flex items-center justify-center font-black text-sm md:text-base">
      {number}
    </div>
    <span className="font-black text-sm md:text-lg">{text}</span>
  </div>
);

export default StepItem; 