import React from 'react';
import { 
  Compass, 
  Cpu, 
  Bot, 
  Scale, 
  CheckCircle2,
  Workflow,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { methodologySteps } from '../data/content';

export const Methodology: React.FC = () => {
  const stepIcons = [
    <Compass className="w-6 h-6 text-[#D40B3A]" />,
    <Cpu className="w-6 h-6 text-[#D40B3A]" />,
    <Bot className="w-6 h-6 text-[#D40B3A]" />,
    <Scale className="w-6 h-6 text-[#D40B3A]" />
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#111F24] border-b border-[#BDC3C7]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
            <Workflow className="w-3.5 h-3.5" />
            <span>Engenharia de Processos Financeiros</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Como Funciona a Implantação da Consultoria
          </h2>
          <p className="text-xs sm:text-sm text-[#BDC3C7]">
            Uma metodologia ágil em 4 etapas, sem travar sua rotina operacional e com entregáveis homologados em cada fase.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologySteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-[#1C2B32] border border-[#E0E0E0]/15 hover:border-[#D40B3A]/60 transition-all flex flex-col justify-between shadow-2xl relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#111F24] border border-[#BDC3C7]/20 flex items-center justify-center group-hover:scale-110 group-hover:border-[#D40B3A] transition-all">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-2xl font-black text-[#BDC3C7]/30 group-hover:text-[#D40B3A] transition-colors font-mono">
                    {item.stepNumber}
                  </span>
                </div>

                <div className="text-[10px] text-[#D40B3A] font-bold uppercase tracking-wider mb-1">
                  Passo {item.stepNumber}
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <div className="text-[11px] text-[#CDDADE] font-semibold mb-3">
                  {item.subtitle}
                </div>

                <p className="text-xs text-[#BDC3C7] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-1.5 pt-3 border-t border-[#BDC3C7]/15">
                  <div className="text-[10px] font-bold text-white uppercase tracking-wider">
                    Entregáveis:
                  </div>
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#E0E0E0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D40B3A] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#BDC3C7]/15 flex items-center justify-between text-[11px]">
                <span className="text-[#CDDADE] font-semibold">Garantia Técnica</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                  Homologado
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
