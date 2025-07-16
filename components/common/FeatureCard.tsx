import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc, color }) => (
  <div
    className={`${color} rounded-lg border-2 md:border-4 ${color.includes("bg-white") ? "border-black" : "border-white"} shadow-[4px_4px_0px_0px_#000000] md:shadow-[8px_8px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 md:hover:translate-x-2 md:hover:translate-y-2 hover:shadow-[2px_2px_0px_0px_#000000] md:hover:shadow-[4px_4px_0px_0px_#000000] transition-all`}
  >
    <div className="p-4 md:p-6 text-center">
      <Icon
        className={`h-8 w-8 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 ${color.includes("bg-white") ? "text-black" : "text-white"} transition-colors`}
      />
      <h3 className="font-black text-sm md:text-lg mb-1 md:mb-2">{title}</h3>
      <p className="font-bold text-xs md:text-sm">{desc}</p>
    </div>
  </div>
);

export default FeatureCard; 