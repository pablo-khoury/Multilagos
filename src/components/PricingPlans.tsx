import React from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap
} from 'lucide-react';
import { SiteConfig, PlanItem } from '../types';
import { pricingPlans } from '../data/content';

interface PricingPlansProps {
  config: SiteConfig;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ config }) => {
  const openWhatsApp = (planName: string, customMsg?: string) => {
    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const defaultMsg = `Olá Pablo! Gostaria de entender melhor o escopo e a implantação do *${planName}* para a minha empresa de serviços.`;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      customMsg || defaultMsg
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section id="planos" className="py-20 bg-[#16242B] border-b border-[#BDC3C7]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
            <Zap className="w-3.5 h-3.5" />
            <span>Esteira de Planos & Automação</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Escolha o Nível de Automação Ideal para Seu Negócio
          </h2>
          <p className="text-xs sm:text-sm text-[#BDC3C7]">
            Projetos objetivos com implantação técnica ágil, valores transparentes e garantia de homologação com Pablo Khoury.
          </p>
        </div>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan: PlanItem) => {
            const isPro = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                  isPro
                    ? 'bg-gradient-to-b from-[#1C2B32] to-[#111F24] border-2 border-[#D40B3A] lg:-translate-y-2 ring-4 ring-[#D40B3A]/20'
                    : 'bg-[#1C2B32] border border-[#BDC3C7]/20 hover:border-[#D40B3A]/50'
                }`}
              >
                {/* Popular / Recommended Badge */}
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#D40B3A] text-white text-[9px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>{plan.badge || '★ MAIS VENDIDO'}</span>
                  </div>
                )}

                <div>
                  <div className="text-[10px] font-bold text-[#CDDADE] uppercase tracking-wider mb-1.5">
                    {plan.badge && !isPro ? plan.badge : 'Plano de Implantação'}
                  </div>

                  <h3 className="text-xl font-black text-white mb-2 leading-tight">
                    {plan.name}
                  </h3>

                  {/* Preço em Destaque */}
                  <div className="pt-2 pb-3 mb-3 border-y border-[#BDC3C7]/15">
                    <div className="text-[10px] text-[#BDC3C7] uppercase font-semibold">Investimento:</div>
                    <div className="text-lg sm:text-xl font-black text-white font-mono text-[#D40B3A]">
                      {plan.price}
                    </div>
                    <div className="text-[11px] text-[#CDDADE] font-semibold mt-0.5">
                      {plan.period}
                    </div>
                  </div>

                  <p className="text-xs text-[#BDC3C7] leading-relaxed mb-4 min-h-[42px]">
                    {plan.description}
                  </p>

                  {/* Feature list */}
                  <div className="py-3 space-y-2 text-xs">
                    <div className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">
                      Incluso no projeto:
                    </div>
                    {plan.features.map((feat: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[#E0E0E0] text-[11px]">
                        <Check className="w-3.5 h-3.5 text-[#D40B3A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-[#BDC3C7]/15 mt-3">
                  <button
                    onClick={() => openWhatsApp(plan.name, plan.whatsappMessage)}
                    className={`w-full py-3.5 rounded-xl font-extrabold text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg ${
                      isPro
                        ? 'bg-[#D40B3A] hover:bg-[#B50931] text-white shadow-[#D40B3A]/30 transform hover:-translate-y-0.5'
                        : 'bg-[#111F24] hover:bg-[#D40B3A] text-[#CDDADE] hover:text-white border border-[#BDC3C7]/30 hover:border-transparent'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footnote about Custom Scopes */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1C2B32] border border-[#BDC3C7]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#111F24] border border-[#BDC3C7]/20 flex items-center justify-center text-[#D40B3A] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                Dúvida sobre qual dos 4 planos é ideal para seu volume e sistema atual?
              </div>
              <div className="text-xs text-[#BDC3C7]">
                Avaliamos seu faturamento e recomendamos a arquitetura com maior retorno sobre o investimento.
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
              window.open(`https://wa.me/${cleanNumber}?text=Ol%C3%A1%20Pablo!%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20para%20escolher%20o%20plano%20ideal%20para%20minha%20empresa.`, '_blank');
            }}
            className="px-5 py-3 rounded-xl bg-[#111F24] hover:bg-[#D40B3A] border border-[#BDC3C7]/30 text-xs font-bold text-[#CDDADE] hover:text-white transition-colors shrink-0 cursor-pointer"
          >
            Falar com Pablo Khoury
          </button>
        </div>

      </div>
    </section>
  );
};
