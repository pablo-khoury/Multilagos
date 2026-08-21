import React from 'react';
import { ShieldCheck, MessageSquare, Mail, MapPin } from 'lucide-react';
import { SiteConfig } from '../types';

interface FooterProps {
  config: SiteConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const openWhatsApp = () => {
    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      'Olá Pablo! Gostaria de falar com você sobre os serviços da Multilagos.'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-[#0B1519] text-[#BDC3C7] text-xs border-t border-[#BDC3C7]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#D40B3A] to-[#B50931] flex items-center justify-center font-black text-white text-lg shadow-md">
                M
              </div>
              <span className="font-bold text-white text-base">
                {config.companyName}
              </span>
            </div>
            <p className="text-xs text-[#BDC3C7] leading-relaxed">
              Consultoria executiva em automação de faturamento, emissão automática de Notas Fiscais (NFS-e), régua inteligente com IA e gestão de contratos recorrentes.
            </p>
            <div className="text-[11px] text-[#CDDADE] font-mono">
              CNPJ e Governança • Atendimento Nacional
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3.5">
              Navegação Rápida
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Soluções para Serviços
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodologia em 4 Passos
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Esteira de Planos & Escopos
                </a>
              </li>
              <li>
                <a href="#parceiros" className="hover:text-white transition-colors">
                  Parceiros & Ecossistema
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Pablo Khoury
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contato Consultivo */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3.5">
              Contato Executivo
            </div>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D40B3A]" />
                <span className="text-[#E0E0E0]">{config.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D40B3A] shrink-0 mt-0.5" />
                <span className="text-[#E0E0E0]">{config.location}</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={openWhatsApp}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#16242B] hover:bg-[#1B2A32] border border-[#D40B3A]/40 text-[#CDDADE] hover:text-white font-bold text-xs cursor-pointer transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D40B3A]" />
                  <span>WhatsApp Direto</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Compromisso & Conformidade */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3.5">
              Conformidade & Segurança
            </div>
            <p className="text-xs text-[#BDC3C7] leading-relaxed mb-3">
              Processos aderentes à LGPD, com integrações seguras via APIs oficiais homologadas e ambiente de produção criptografado.
            </p>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-[#CDDADE]">
              <ShieldCheck className="w-4 h-4 text-[#D40B3A]" />
              <span>Homologação e Governança de TI</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#BDC3C7]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#BDC3C7]">
          <div>
            © {new Date().getFullYear()} {config.companyName}. Todos os direitos reservados.
          </div>
          <div>
            Consultoria e Automação de Processos Financeiros para Empresas de Serviços.
          </div>
        </div>

      </div>
    </footer>
  );
};
