import React from 'react';
import { 
  Scale, 
  Split, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { SiteConfig } from '../types';

interface TaxReformSectionProps {
  config: SiteConfig;
  onOpenDiagnosis: () => void;
}

export const TaxReformSection: React.FC<TaxReformSectionProps> = ({
  config,
  onOpenDiagnosis
}) => {
  const openWhatsApp = () => {
    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      'Olá Pablo! Gostaria de entender como adequar os meios de pagamento e emissão de notas da minha empresa de serviços para a Reforma Tributária.'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#111F24] via-[#16242B] to-[#111F24] relative border-t border-[#BDC3C7]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contexto Executivo */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
              <Scale className="w-3.5 h-3.5" />
              <span>Adequação Tributária & Conformidade 2026/2027</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              A Reforma Tributária vai impactar o setor de serviços. <span className="text-[#D40B3A]">Sua empresa está preparada?</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#BDC3C7] leading-relaxed">
              Com a implementação do IBS, CBS e a obrigatoriedade progressiva do <strong>Split Payment</strong> (retenção do imposto no ato da liquidação da cobrança), empresas de serviços que mantêm emissão manual e contas desorganizadas sofrerão gargalos de fluxo de caixa imediatos.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/20">
                <Split className="w-5 h-5 text-[#D40B3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white mb-0.5">
                    Split Payment Automático
                  </div>
                  <div className="text-xs text-[#BDC3C7]">
                    Sistemas que segregam o tributo devido e a receita líquida diretamente no gateway de pagamento, evitando surpresas no fechamento do mês.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/20">
                <CheckCircle2 className="w-5 h-5 text-[#D40B3A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white mb-0.5">
                    Sincronismo Obrigatório entre NFS-e e Cobrança
                  </div>
                  <div className="text-xs text-[#BDC3C7]">
                    Garantia de que todo boleto, Pix ou transação de cartão possua sua respectiva nota fiscal vinculada e transmitida sem erros.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={openWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#D40B3A] hover:bg-[#B50931] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#D40B3A]/25 transition-all"
              >
                <span>Falar com Pablo sobre Split Payment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDiagnosis}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#111F24] hover:bg-[#1B2A32] border border-[#BDC3C7]/30 text-xs font-bold text-[#CDDADE] hover:text-white transition-all cursor-pointer text-center"
              >
                Solicitar Avaliação de Risco
              </button>
            </div>

          </div>

          {/* Right Column: Card Visual de Comparativo */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-3xl bg-[#16242B] border border-[#BDC3C7]/20 shadow-2xl relative">
              
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#BDC3C7]/15">
                <AlertCircle className="w-5 h-5 text-[#D40B3A]" />
                <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                  Matriz de Adequação de Serviços
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-[#111F24] border border-red-500/20">
                  <div className="font-bold text-red-400 mb-1">
                    Cenário Atual (Sem Automação):
                  </div>
                  <ul className="text-[11px] text-[#BDC3C7] space-y-1">
                    <li>• Emissão de notas atrasada e desvinculada do recebimento.</li>
                    <li>• Retenções calculadas manualmente gerando guias erradas.</li>
                    <li>• Risco de bloqueio de certidões e multas municipais/federais.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#111F24] border border-[#D40B3A]/40">
                  <div className="font-bold text-[#D40B3A] mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Cenário Multilagos (Automatizado):</span>
                  </div>
                  <ul className="text-[11px] text-[#E0E0E0] space-y-1">
                    <li>• NFS-e gerada e disparada no exato momento da quitação.</li>
                    <li>• Split de impostos e repasses a sócios/parceiros programado.</li>
                    <li>• Conciliação transparente e dados prontos para a contabilidade.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 text-center text-[11px] text-[#CDDADE] font-mono">
                Homologação técnica e acompanhamento executivo.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
