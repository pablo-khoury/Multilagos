import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  ShieldQuestion
} from 'lucide-react';
import { SiteConfig, FaqItem } from '../types';
import { faqData } from '../data/content';

interface FaqSectionProps {
  config: SiteConfig;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ config }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const openWhatsApp = () => {
    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      'Olá Pablo! Tenho uma dúvida específica sobre a automação de faturamento e notas fiscais para minha empresa.'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-[#16242B] border-t border-[#BDC3C7]/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
            <ShieldQuestion className="w-3.5 h-3.5" />
            <span>Tire Todas as Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Perguntas Frequentes sobre a Consultoria
          </h2>
          <p className="text-xs sm:text-sm text-[#BDC3C7]">
            Entenda como funciona a implantação, integrações com prefeituras e garantia de resultados.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#111F24] border border-[#BDC3C7]/20 overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#16242B]/50 transition-colors"
                >
                  <span className="font-bold text-white text-xs sm:text-sm">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#16242B] border border-[#BDC3C7]/20 flex items-center justify-center shrink-0 text-[#D40B3A] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#D40B3A] text-white border-[#D40B3A]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs text-[#E0E0E0] leading-relaxed border-t border-[#BDC3C7]/15">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Box Bottom */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#1B2A32] to-[#111F24] border border-[#D40B3A]/40 text-center space-y-4 shadow-xl">
          <div className="text-base font-extrabold text-white">
            Não encontrou a resposta para a sua dúvida específica?
          </div>
          <p className="text-xs text-[#BDC3C7] max-w-lg mx-auto">
            Fale diretamente com Pablo Khoury no WhatsApp e avalie a viabilidade técnica da sua empresa em poucos minutos.
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D40B3A] hover:bg-[#B50931] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#D40B3A]/25 cursor-pointer transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tirar Dúvidas com Pablo Khoury</span>
          </button>
        </div>

      </div>
    </section>
  );
};
