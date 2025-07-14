import React, { useState } from "react";
import StepItem from "@/components/common/StepItem";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

const steps = [
  "ЗАПОЛНЯЕШЬ ЗАЯВКУ НА САЙТЕ",
  "ПОЛУЧАЕШЬ ЗВОНОК ОТ НАШЕГО МЕНЕДЖЕРА",
  "ПОДПИСЫВАЕШЬ ДОГОВОР",
  "ПОЛУЧАЕШЬ ПЕРВУЮ ПОСТАВКУ",
  "НАЧИНАЕШЬ ЗАРАБАТЫВАТЬ!",
];

const PartnershipSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    // alert(JSON.stringify(formData));
  };

  return (
    <section id="partnership" className="w-full py-12 md:py-20 lg:py-32 bg-[#1D4ED8] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 md:mb-6 transform skew-x-2">
              СТАТЬ <span className="text-white">ПАРТНЕРОМ</span>
            </h2>
            <div className="w-32 md:w-48 h-2 md:h-3 bg-white mx-auto transform -skew-x-12 mb-4 md:mb-6"></div>
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
            <Card className="bg-white text-black border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_#000000] md:shadow-[8px_8px_0px_0px_#000000]">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 text-center transform -skew-x-1">
                  ЗАЯВКА НА ПАРТНЕРСТВО
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="ВАШЕ ИМЯ"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-2 md:border-4 border-[#1D4ED8] font-black text-base md:text-lg px-3 md:px-4 py-4 md:py-6 placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="company"
                      placeholder="НАЗВАНИЕ КОМПАНИИ"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-2 md:border-4 border-[#1D4ED8] font-black text-base md:text-lg px-3 md:px-4 py-4 md:py-6 placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="ТЕЛЕФОН"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-2 md:border-4 border-[#1D4ED8] font-black text-base md:text-lg px-3 md:px-4 py-4 md:py-6 placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="EMAIL"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 md:border-4 border-[#1D4ED8] font-black text-base md:text-lg px-3 md:px-4 py-4 md:py-6 placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="city"
                      placeholder="ГОРОД"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="border-2 md:border-4 border-[#1D4ED8] font-black text-base md:text-lg px-3 md:px-4 py-4 md:py-6 placeholder:text-gray-600"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-black text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_#000000] md:shadow-[4px_4px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#000000] md:hover:shadow-[2px_2px_0px_0px_#000000] transition-all"
                  >
                    ОТПРАВИТЬ ЗАЯВКУ
                    <Target className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection; 