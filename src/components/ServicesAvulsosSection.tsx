import React from 'react';
import { Layers, Clock, ArrowRight, CheckCircle2, Wrench } from 'lucide-react';
import { SiteConfig, ServiceAvulsoItem } from '../types';
import { servicesAvulsosData } from '../data/content';

interface ServicesAvulsosSectionProps {
  config: SiteConfig;
}

export const ServicesAvulsosSection: React.FC<ServicesAvulsosSectionProps> = ({ config }) => {
  const openWhatsApp = (serviceTitle: string) => {
    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const msg = `Olá Pablo! Tenho interesse no serviço avulso de *${serviceTitle}*. Gostaria de alinhar escopo e prazo.`;
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="servicos-avulsos" className="py-20 bg-[#111F24] border-t border-[#BDC3C7]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
            <Wrench className="w-3.5 h-3.5" />
            <span>Demandas Pontuais & Setup Especializado</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Serviços Sob Demanda (Avulsos)
          </h2>
          <p className="text-xs sm:text-sm text-[#BDC3C7]">
            Precisa resolver um gargalo pontual sem contratar a consultoria completa? Escolha o módulo avulso com entrega rápida.
          </p>
        </div>

        {/* Grid of 4 On-demand Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {servicesAvulsosData.map((service: ServiceAvulsoItem) => (
            <div
              key={service.id}
              className="rounded-3xl p-6 bg-[#1C2B32] border border-[#E0E0E0]/15 hover:border-[#D40B3A]/50 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#111F24] border border-[#BDC3C7]/20 text-[11px] font-bold text-[#CDDADE] mb-4">
                  <Layers className="w-3 h-3 text-[#D40B3A]" />
                  <span>{service.badge}</span>
                </div>

                <h3 className="text-base font-black text-white group-hover:text-[#CDDADE] transition-colors mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-[#BDC3C7] leading-relaxed mb-5 min-h-[48px]">
                  {service.description}
                </p>

                <div className="space-y-2 py-4 border-t border-[#BDC3C7]/15">
                  <div className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">
                    Entregáveis inclusos:
                  </div>
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#E0E0E0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D40B3A] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#BDC3C7]/15 mt-4">
                <div className="flex items-center gap-1.5 text-[11px] text-[#CDDADE] mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#D40B3A]" />
                  <span>Prazo estimado: <strong>{service.timeline}</strong></span>
                </div>

                <button
                  onClick={() => openWhatsApp(service.title)}
                  className="w-full py-3 rounded-xl bg-[#111F24] hover:bg-[#D40B3A] text-white border border-[#BDC3C7]/25 hover:border-[#D40B3A] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
