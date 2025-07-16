"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

const PartnershipForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
  });
  const [open, setOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(true);
    setFormData({ name: "", company: "", phone: "", email: "", city: "" });
  };

  return (
    <Card className="bg-white text-black border-2 md:border-4 border-black shadow-[4px_4px_0px_0px_#000000] md:shadow-[8px_8px_0px_0px_#000000]">
      <CardContent className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 text-center transform -skew-x-1">
          ЗАЯВКА НА ПАРТНЕРСТВО
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="relative">
            <Input
              type="text"
              name="name"
              placeholder="ВАШЕ ИМЯ"
              value={formData.name}
              onChange={handleInputChange}
              className="border-2 md:border-4 border-[#1a41ae] font-black text-base md:text-lg px-3 md:px-4 py-4 md:py-6 placeholder:text-gray-600 pr-10"
              required
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 text-xl md:text-2xl font-black select-none pointer-events-none">*</span>
          </div>
          <div>
            <Input
              type="text"
              name="company"
              placeholder="НАЗВАНИЕ КОМПАНИИ (если есть)"
              value={formData.company}
              onChange={handleInputChange}
              className="border-2 md:border-4 border-[#1a41ae] font-black text-sm md:text-lg px-2 md:px-4 py-4 md:py-6 placeholder:text-gray-600 placeholder:text-xs"
            />
          </div>
          <div className="relative">
            <Input
              type="tel"
              name="phone"
              placeholder="ТЕЛЕФОН"
              value={formData.phone}
              onChange={handleInputChange}
              className="border-2 md:border-4 border-[#1a41ae] font-black text-base md:text-lg px-3 md:px-4 py-4 md:py-6 placeholder:text-gray-600 pr-10"
              required
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 text-xl md:text-2xl font-black select-none pointer-events-none">*</span>
          </div>
          <div className="relative">
            <Input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleInputChange}
              className="border-2 md:border-4 border-[#1a41ae] font-black text-base md:text-lg px-3 md:px-4 py-4 md:py-6 placeholder:text-gray-600 pr-10"
              required
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 text-xl md:text-2xl font-black select-none pointer-events-none">*</span>
          </div>
          <div className="relative">
            <Input
              type="text"
              name="city"
              placeholder="ГОРОД"
              value={formData.city}
              onChange={handleInputChange}
              className="border-2 md:border-4 border-[#1a41ae] font-black text-base md:text-lg px-3 md:px-4 py-4 md:py-6 placeholder:text-gray-600 pr-10"
              required
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 text-xl md:text-2xl font-black select-none pointer-events-none">*</span>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#1a41ae] hover:bg-[#153488] text-white font-black text-lg md:text-xl px-6 md:px-8 py-4 md:py-6 border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_#000000] md:shadow-[4px_4px_0px_0px_#000000] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_#000000] md:hover:shadow-[2px_2px_0px_0px_#000000] transition-all"
          >
            ОТПРАВИТЬ ЗАЯВКУ
            <Target className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </form>
      </CardContent>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">Заявка успешно отправлена</DialogTitle>
        <DialogContent className="max-w-md bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000000] rounded-2xl p-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-[#1a41ae] rounded-full p-4 mb-2 border-4 border-black shadow-[4px_4px_0px_0px_#000000]">
              <Check className="w-12 h-12 text-white" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-[#1a41ae] mb-2">Отлично!</div>
            <div className="text-base md:text-lg font-medium text-black mb-2">Спасибо за заявку, менеджер свяжется с вами в течение 24 часов.</div>
            <div className="text-base md:text-lg font-medium text-black mb-4">А пока подпишитесь на наш телеграм канал, чтобы не пропустить акции и полезную информацию :)</div>
            <a
              href="https://t.me/+9OgsiUfn-SVhMTE6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a41ae] hover:bg-[#153488] text-white font-black text-lg px-6 py-3 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000000] transition-all"
            >
              <FaTelegramPlane className="w-6 h-6" />
              Подписаться на Telegram
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default PartnershipForm; 