import React from 'react';
import { Network, Cpu, ArrowUpRight, CheckCircle, Shield } from 'lucide-react';
import { integrationsList } from '../data/content';

export const IntegrationsSection: React.FC = () => {
  return (
    <section id="integracoes" className="py-20 bg-[#16242B] border-t border-[#BDC3C7]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
            <Network className="w-3.5 h-3.5" />
            <span>Ecossistema Integrado & APIs Oficiais</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Conectividade Total com Seus Softwares
          </h2>
          <p className="text-xs sm:text-sm text-[#BDC3C7]">
            Não reinventamos a roda. Conectamos seu ERP, Gateway de Pagamento e canais de atendimento em um fluxo único e sincronizado.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {integrationsList.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#1C2B32] border border-[#E0E0E0]/15 hover:border-[#D40B3A]/50 transition-all duration-300 shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-md bg-[#111F24] border border-[#BDC3C7]/20 text-[#CDDADE]">
                    {item.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#BDC3C7] group-hover:text-[#D40B3A] transition-colors" />
                </div>
                
                <h3 className="text-lg font-black text-white mb-1.5">
                  {item.name}
                </h3>
                
                <p className="text-xs text-[#BDC3C7] leading-relaxed">
                  {item.highlight}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#BDC3C7]/15 flex items-center gap-1.5 text-[11px] text-[#CDDADE]">
                <CheckCircle className="w-3.5 h-3.5 text-[#D40B3A]" />
                <span>Integração Homologada</span>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Reliability Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#111F24] border border-[#BDC3C7]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16242B] border border-[#BDC3C7]/20 flex items-center justify-center text-[#D40B3A] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                Segurança Bancária e Criptografia Ponta a Ponta
              </div>
              <div className="text-xs text-[#BDC3C7]">
                Todas as conexões utilizam tokens criptografados e webhooks seguros conforme normas do Banco Central e LGPD.
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#CDDADE] px-4 py-2 rounded-xl bg-[#1C2B32] border border-[#BDC3C7]/20">
            <Cpu className="w-4 h-4 text-[#D40B3A]" />
            <span>99.9% Uptime de Sincronização</span>
          </div>
        </div>

      </div>
    </section>
  );
};
