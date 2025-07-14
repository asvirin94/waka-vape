import React from "react";

interface AdvantageCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  features: string[];
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon: Icon, title, desc, features }) => (
  <div className="bg-black text-white border-2 md:border-4 border-white shadow-[4px_4px_0px_0px_#000000] md:shadow-[8px_8px_0px_0px_#000000] transform hover:translate-x-1 md:hover:translate-x-2 hover:translate-y-1 md:hover:translate-y-2 hover:shadow-[2px_2px_0px_0px_#000000] md:hover:shadow-[4px_4px_0px_0px_#000000] transition-all">
    <div className="p-6 md:p-8">
      <Icon className="h-12 w-12 md:h-16 md:w-16 mb-4 md:mb-6 text-white" />
      <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 transform -skew-x-1">{title}</h3>
      <p className="font-bold mb-4 md:mb-6 text-base md:text-lg leading-tight">{desc}</p>
      <div className="space-y-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
            <span className="font-black text-xs md:text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AdvantageCard; 