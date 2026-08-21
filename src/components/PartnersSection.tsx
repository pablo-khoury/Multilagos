import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Layers
} from 'lucide-react';

export const PartnersSection: React.FC = () => {
  return (
    <section id="parceiros" className="py-20 bg-[#16242B] border-y border-[#BDC3C7]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
            <Award className="w-3.5 h-3.5" />
            <span>Ecossistema Homologado de Alta Performance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Parceiros Oficiais & Conectividade Tecnológica
          </h2>
          <p className="text-xs sm:text-sm text-[#BDC3C7]">
            Trabalhamos com os líderes de mercado em infraestrutura financeira, meios de pagamento e sistemas de gestão (ERP).
          </p>
        </div>

        {/* 1. ASAAS SPECIAL GOLDEN CARD */}
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-[#1B2A32] via-[#16242B] to-[#111F24] border-2 border-[#D40B3A] shadow-2xl relative overflow-hidden group">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D40B3A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D40B3A]/20 border border-[#D40B3A] text-xs font-black text-white uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Parceiro Oficial & Especialista em Automação</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white text-[#111F24] font-black text-2xl flex items-center justify-center shadow-xl tracking-tighter">
                  asaas
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    ASAAS • Conta Digital & Gateway para Serviços
                  </h3>
                  <div className="text-xs text-[#CDDADE] font-semibold">
                    Infraestrutura oficial para automatizar Pix, Boletos, Cartão Recorrente e Emissão de NFS-e
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#E0E0E0] leading-relaxed">
                Como parceiros estratégicos do <strong>ASAAS</strong>, estruturamos a sua conta com as melhores taxas do mercado, homologação acelerada de emissão fiscal automática (NFS-e), split de pagamentos e réguas de cobrança inteligentes integradas ao seu ERP.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-[#E0E0E0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D40B3A] shrink-0" />
                  <span>Emissão Automática de Notas Fiscais (NFS-e)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D40B3A] shrink-0" />
                  <span>Régua multicanal via WhatsApp e Notificações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D40B3A] shrink-0" />
                  <span>Cobrança Recorrente e Assinaturas sem travar limite</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D40B3A] shrink-0" />
                  <span>Split Payment tributário e para parceiros</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center p-6 rounded-2xl bg-[#111F24]/90 border border-[#BDC3C7]/20 text-center">
              <div className="w-12 h-12 rounded-full bg-[#D40B3A]/20 flex items-center justify-center text-[#D40B3A] mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Condições Especiais
              </div>
              <p className="text-xs text-[#BDC3C7] mb-4">
                Abra sua conta ou integre sua operação existente com suporte consultivo da Multilagos.
              </p>
              <a
                href="https://wa.me/5522988360640?text=Ol%C3%A1%20Pablo!%20Gostaria%20de%20saber%20mais%20sobre%20a%20integra%C3%A7%C3%A3o%20e%20vantagens%20do%20Asaas%20para%20minha%20empresa."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-[#D40B3A] hover:bg-[#B50931] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Falar sobre ASAAS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* 2. ERPs & Ferramentas Integradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card: Omie */}
          <div className="p-6 rounded-2xl bg-[#111F24] border border-[#BDC3C7]/20 hover:border-[#D40B3A]/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white">Omie ERP</span>
              <span className="text-[10px] bg-[#16242B] text-[#CDDADE] px-2 py-0.5 rounded border border-[#BDC3C7]/20">ERP Homologado</span>
            </div>
            <p className="text-xs text-[#BDC3C7] leading-relaxed">
              Integração completa de vendas de serviços, conciliação bancária automática e baixa de títulos sem intervenção humana.
            </p>
          </div>

          {/* Card: Conta Azul */}
          <div className="p-6 rounded-2xl bg-[#111F24] border border-[#BDC3C7]/20 hover:border-[#D40B3A]/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white">Conta Azul</span>
              <span className="text-[10px] bg-[#16242B] text-[#CDDADE] px-2 py-0.5 rounded border border-[#BDC3C7]/20">ERP Homologado</span>
            </div>
            <p className="text-xs text-[#BDC3C7] leading-relaxed">
              Sincronização de faturamento e contratos recorrentes diretamente no fluxo de caixa da empresa.
            </p>
          </div>

          {/* Card: Gestão de Projetos */}
          <div className="p-6 rounded-2xl bg-[#111F24] border border-[#BDC3C7]/20 hover:border-[#D40B3A]/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white">Trello / ClickUp</span>
              <span className="text-[10px] bg-[#16242B] text-[#CDDADE] px-2 py-0.5 rounded border border-[#BDC3C7]/20">Produtividade</span>
            </div>
            <p className="text-xs text-[#BDC3C7] leading-relaxed">
              Gatilhos de entrega: ao finalizar um card de serviço ou sprint, o faturamento e a NFS-e são disparados automaticamente.
            </p>
          </div>

          {/* Card: WhatsApp & APIs */}
          <div className="p-6 rounded-2xl bg-[#111F24] border border-[#BDC3C7]/20 hover:border-[#D40B3A]/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-white">APIs de WhatsApp & IA</span>
              <span className="text-[10px] bg-[#16242B] text-[#CDDADE] px-2 py-0.5 rounded border border-[#BDC3C7]/20">Comunicação</span>
            </div>
            <p className="text-xs text-[#BDC3C7] leading-relaxed">
              Agentes inteligentes conectados à API oficial para notificar clientes, enviar código Pix e renegociar faturas vencidas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
