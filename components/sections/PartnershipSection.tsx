import PartnershipForm from "../client/PartnershipForm";
import StepItem from "@/components/common/StepItem";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

const steps = [
  "ЗАПОЛНЯЕШЬ ЗАЯВКУ НА САЙТЕ",
  "ПОЛУЧАЕШЬ ЗВОНОК ОТ НАШЕГО МЕНЕДЖЕРА",
  "ПОДПИСЫВАЕШЬ ДОГОВОР",
  "ПОЛУЧАЕШЬ ПЕРВУЮ ПОСТАВКУ",
  "НАЧИНАЕШЬ ЗАРАБАТЫВАТЬ!",
];

const PartnershipSection: React.FC = () => {
  return (
    <section id="partnership" className="w-full py-12 md:py-20 lg:py-32 bg-[#1a41ae] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-2 transform skew-x-2">
              СТАТЬ <span className="text-white">ПАРТНЕРОМ</span>
            </h2>
            <div className="w-32 md:w-48 h-2 md:h-3 bg-white mx-auto transform -skew-x-12 mb-10"></div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold max-w-3xl mx-auto">
              ГОТОВ ЗАРАБАТЫВАТЬ ПО-КРУПНОМУ? ЗАПОЛНЯЙ ЗАЯВКУ И СТАНОВИСЬ ЧАСТЬЮ ИМПЕРИИ!
            </p>
          </div>
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 transform -skew-x-1">
                КАК СТАТЬ ПАРТНЕРОМ:
              </h3>
              <div className="space-y-3 md:space-y-4">
                {steps.map((step, index) => (
                  <StepItem key={index} number={index + 1} text={step} />
                ))}
              </div>
            </div>
            <PartnershipForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection; 