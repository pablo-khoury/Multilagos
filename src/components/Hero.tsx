import React from 'react';
import { 
  Zap, 
  FileText, 
  Bot, 
  RefreshCw, 
  CheckCircle2, 
  TrendingDown, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';
import { SiteConfig } from '../types';

interface HeroProps {
  config: SiteConfig;
  onOpenDiagnosis: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onOpenDiagnosis }) => {
  const scrollToSolutions = () => {
    const el = document.getElementById('gargalos') || document.getElementById('solucoes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="section-hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#111F24] border-b border-[#BDC3C7]/20">
      
      {/* Background Subtle Mesh & Glows */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-[#D40B3A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-24 right-10 w-[450px] h-[450px] bg-[#CDDADE]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout 2 Colunas (Grid Responsivo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ========================================================
              COLUNA DA ESQUERDA: TEXTO PERSUASIVO & CTAs
             ======================================================== */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* 1. Badge de Topo */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C2B32] border border-[#D40B3A]/40 text-[#CDDADE] text-xs font-bold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#D40B3A] animate-pulse" />
              <span>Especial para Empresas de Serviços & Gestão de Recorrência</span>
            </div>

            {/* 2. Headline Principal (H1) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-black text-white leading-[1.18] tracking-tight">
              Reduza a <span className="text-[#D40B3A]">Inadimplência</span> na Recorrência e Elimine o <span className="text-white">Trabalho Manual</span> de Cobrança e Emissão de Notas.
            </h1>

            {/* 3. Subheadline */}
            <p className="text-sm sm:text-base text-[#BDC3C7] leading-relaxed max-w-2xl font-normal">
              Automatizamos sua régua de recebimentos via WhatsApp com IA, conectamos seu ERP (Omie, Conta Azul) e garantimos a emissão automática de NFS-e no exato momento do pagamento. Mais caixa previsível, zero desgaste com clientes.
            </p>

            {/* 4. Bullets / Badges abaixo do texto */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 text-xs text-[#E0E0E0]">
              <div className="flex items-center gap-2 bg-[#1C2B32] px-3.5 py-2 rounded-xl border border-[#BDC3C7]/20 shadow-sm">
                <Zap className="w-4 h-4 text-[#D40B3A] shrink-0" />
                <span className="font-semibold text-white">Régua Inteligente com IA & WhatsApp</span>
              </div>
              
              <div className="flex items-center gap-2 bg-[#1C2B32] px-3.5 py-2 rounded-xl border border-[#BDC3C7]/20 shadow-sm">
                <FileText className="w-4 h-4 text-[#D40B3A] shrink-0" />
                <span className="font-semibold text-white">NFS-e Automática na Liquidação</span>
              </div>

              <div className="flex items-center gap-2 bg-[#1C2B32] px-3.5 py-2 rounded-xl border border-[#BDC3C7]/20 shadow-sm">
                <RefreshCw className="w-4 h-4 text-[#D40B3A] shrink-0" />
                <span className="font-semibold text-white">Integração com ERP & Conciliação Real</span>
              </div>
            </div>

            {/* 5. Botões de Ação (CTAs) */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="btn-hero-agendar"
                onClick={onOpenDiagnosis}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D40B3A] to-[#B50931] hover:brightness-110 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-[#D40B3A]/40 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5"
              >
                <span>AGENDAR DIAGNÓSTICO GRATUITO</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                id="btn-hero-como-funciona"
                onClick={scrollToSolutions}
                className="px-6 py-4 rounded-xl bg-[#1C2B32] hover:bg-[#111F24] border border-[#BDC3C7]/30 hover:border-white text-xs sm:text-sm font-bold text-[#CDDADE] hover:text-white uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>VER COMO FUNCIONA</span>
                <ChevronDown className="w-4 h-4 text-[#BDC3C7]" />
              </button>
            </div>

            {/* Mini Trust Line */}
            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#BDC3C7]">
              <ShieldCheck className="w-4 h-4 text-[#D40B3A] shrink-0" />
              <span>Sessão executiva de 30 minutos com <strong>{config.consultantName}</strong> • Análise direta do seu fluxo</span>
            </div>

          </div>

          {/* ========================================================
              COLUNA DA DIREITA: ELEMENTO VISUAL TECH DE ALTA CONVERSÃO
              (Dashboard Fintech Dark Mode com Simulação em Tempo Real)
             ======================================================== */}
          <div className="lg:col-span-5">
            <div className="p-5 sm:p-7 rounded-3xl bg-[#1C2B32] border border-[#E0E0E0]/15 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-sm">
              
              {/* Glow decorativo no topo do card */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D40B3A]/20 rounded-full blur-2xl pointer-events-none" />

              {/* 1. Header do Card: Status em Tempo Real */}
              <div className="flex items-center justify-between pb-4 border-b border-[#BDC3C7]/20">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-white tracking-wide">Operação em Tempo Real</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#111F24] border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold uppercase tracking-wider">
                  Sincronizado
                </span>
              </div>

              {/* 2. Métrica de Impacto em Destaque */}
              <div className="p-4 rounded-2xl bg-[#111F24] border border-[#BDC3C7]/20 grid grid-cols-2 gap-3 items-center">
                <div>
                  <div className="text-[11px] font-semibold text-[#BDC3C7] uppercase tracking-wider">Inadimplência Reduzida</div>
                  <div className="text-3xl sm:text-4xl font-black text-[#D40B3A] flex items-center gap-1 mt-0.5">
                    <span>-62%</span>
                    <TrendingDown className="w-5 h-5 text-[#D40B3A]" />
                  </div>
                </div>
                <div className="border-l border-[#BDC3C7]/20 pl-3">
                  <div className="text-[11px] font-semibold text-[#BDC3C7] uppercase tracking-wider">NFS-e & Baixa</div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">100% Auto</div>
                  <div className="text-[10px] text-[#CDDADE]">Zero digitação manual</div>
                </div>
              </div>

              {/* 3. Simulador de Fluxo Automático (Timeline / 4 Steps) */}
              <div className="space-y-2.5 text-xs">
                
                {/* Step 1 */}
                <div className="p-3 rounded-xl bg-[#111F24]/90 border border-[#BDC3C7]/15 flex items-center justify-between hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-xs">
                      1
                    </div>
                    <div>
                      <div className="font-bold text-white text-[12px] flex items-center gap-1.5">
                        <span>Pagamento Recebido via Pix</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="text-[10px] text-[#BDC3C7]">Contrato Mensal • R$ 3.850,00</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">Liquidado</span>
                </div>

                {/* Step 2 */}
                <div className="p-3 rounded-xl bg-[#111F24]/90 border border-[#BDC3C7]/15 flex items-center justify-between hover:border-[#D40B3A]/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#D40B3A]/15 border border-[#D40B3A]/30 flex items-center justify-center text-[#D40B3A] shrink-0 font-bold text-xs">
                      2
                    </div>
                    <div>
                      <div className="font-bold text-white text-[12px]">Agente de IA no WhatsApp</div>
                      <div className="text-[10px] text-[#BDC3C7]">Comprovante e recibo disparados</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#D40B3A]/15 text-[#D40B3A] text-[10px] font-bold">Disparado</span>
                </div>

                {/* Step 3 */}
                <div className="p-3 rounded-xl bg-[#111F24]/90 border border-[#BDC3C7]/15 flex items-center justify-between hover:border-[#CDDADE]/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#CDDADE]/15 border border-[#CDDADE]/30 flex items-center justify-center text-[#CDDADE] shrink-0 font-bold text-xs">
                      3
                    </div>
                    <div>
                      <div className="font-bold text-white text-[12px]">NFS-e Emitida na Prefeitura</div>
                      <div className="text-[10px] text-[#BDC3C7]">XML e PDF gerados instantaneamente</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 text-[10px] font-bold">Autorizada</span>
                </div>

                {/* Step 4 */}
                <div className="p-3 rounded-xl bg-[#111F24]/90 border border-[#BDC3C7]/15 flex items-center justify-between hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-xs">
                      4
                    </div>
                    <div>
                      <div className="font-bold text-white text-[12px]">Baixa Sincronizada no ERP</div>
                      <div className="text-[10px] text-[#BDC3C7]">Omie / Conta Azul atualizado</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">Conciliado</span>
                </div>

              </div>

              {/* Rodapé do Card: Badge de Split / Reforma */}
              <div className="pt-2 text-center">
                <div className="inline-flex items-center gap-1.5 text-[11px] text-[#CDDADE]">
                  <Sparkles className="w-3.5 h-3.5 text-[#D40B3A]" />
                  <span>Fluxo 100% blindado para a <strong>Reforma Tributária (Split Payment)</strong></span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
