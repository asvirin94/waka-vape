import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc, color }) => (
  <div
    className={`${color} border-2 md:border-4 ${color.includes("white") ? "border-black" : "border-white"} shadow-[3px_3px_0px_0px_${color.includes("white") ? "#000000" : "#ffffff"}] md:shadow-[6px_6px_0px_0px_${color.includes("white") ? "#000000" : "#ffffff"}] transform hover:translate-x-1 hover:translate-y-1 transition-all`}
  >
    <div className="p-4 md:p-6 text-center">
      <Icon className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-3 md:mb-4 text-white" />
      <h3 className="font-black text-sm md:text-lg mb-1 md:mb-2">{title}</h3>
      <p className="font-bold text-xs md:text-sm">{desc}</p>
    </div>
  </div>
);

export default FeatureCard; 