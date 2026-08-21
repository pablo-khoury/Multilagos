import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  TrendingUp, 
  ArrowRight, 
  DollarSign,
  Percent,
  Users,
  Receipt,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { SiteConfig } from '../types';

interface RoiCalculatorProps {
  config: SiteConfig;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ config }) => {
  const [faturamento, setFaturamento] = useState(100000);
  const [inadimplenciaAtual, setInadimplenciaAtual] = useState(12);
  const [volumeClientes, setVolumeClientes] = useState(150);
  const [taxaAtual, setTaxaAtual] = useState(3.50);

  // Multilagos taxa parceira por liquidação
  const TAXA_MULTILAGOS = 0.99;

  // Cálculos dinâmicos
  const economiaTaxasMensal = Math.max(0, (taxaAtual - TAXA_MULTILAGOS) * volumeClientes);
  const perdaMensalInadimplencia = faturamento * (inadimplenciaAtual / 100);
  const recuperacaoInadimplenciaMensal = perdaMensalInadimplencia * 0.65; // Recuperação média de 65% com régua + IA

  const caixaTotalRecuperadoMensal = Math.round(economiaTaxasMensal + recuperacaoInadimplenciaMensal);
  const economiaAnualProjetada = caixaTotalRecuperadoMensal * 12;
  const horasEconomizadas = Math.min(45, Math.max(15, Math.round((volumeClientes * 10) / 60))); // Estimativa de tempo manual poupado

  const openWhatsAppWithRoi = () => {
    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const mensagem = `Olá Pablo! Fiz a simulação no site:
• Faturamento: R$ ${faturamento.toLocaleString('pt-BR')}/mês
• Volume: ${volumeClientes} clientes/cobranças
• Taxa Atual: R$ ${taxaAtual.toFixed(2).replace('.', ',')} por recebimento
• Inadimplência Atual: ${inadimplenciaAtual}%
• Estimativa de Economia/Recuperação: R$ ${caixaTotalRecuperadoMensal.toLocaleString('pt-BR')}/mês (R$ ${economiaAnualProjetada.toLocaleString('pt-BR')}/ano).
Gostaria de validar essa recuperação no meu fluxo de caixa!`;
    
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="simulador" className="py-20 bg-[#111F24] border-b border-[#BDC3C7]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Interativo de ROI & Recuperação</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Quanto sua empresa pode recuperar e economizar por mês?
          </h2>
          <p className="text-xs sm:text-sm text-[#BDC3C7]">
            Ajuste os parâmetros abaixo com os dados reais do seu negócio e veja o impacto financeiro com a taxa de <strong>R$ 0,99 por liquidação</strong> e a régua de cobrança automática com IA.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Sliders Input (Left) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#16242B] border border-[#BDC3C7]/20 flex flex-col justify-between shadow-2xl space-y-6">
            
            {/* Input 1: Faturamento Mensal */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-[#D40B3A]" />
                  Faturamento Mensal em Serviços:
                </span>
                <span className="font-mono font-bold text-[#D40B3A] text-sm">
                  R$ {faturamento.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min={20000}
                max={1000000}
                step={10000}
                value={faturamento}
                onChange={(e) => setFaturamento(Number(e.target.value))}
                className="w-full h-2 bg-[#111F24] rounded-lg appearance-none cursor-pointer accent-[#D40B3A]"
              />
              <div className="flex justify-between text-[10px] text-[#BDC3C7]">
                <span>R$ 20.000</span>
                <span>R$ 500.000</span>
                <span>R$ 1.000.000+</span>
              </div>
            </div>

            {/* Input 2: Quantidade de Clientes / Cobranças */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D40B3A]" />
                  Quantidade de Clientes (ou Cobranças / Mês):
                </span>
                <span className="font-mono font-bold text-[#D40B3A] text-sm">
                  {volumeClientes} clientes
                </span>
              </div>
              <input
                type="range"
                min={30}
                max={2000}
                step={10}
                value={volumeClientes}
                onChange={(e) => setVolumeClientes(Number(e.target.value))}
                className="w-full h-2 bg-[#111F24] rounded-lg appearance-none cursor-pointer accent-[#D40B3A]"
              />
              <div className="flex justify-between text-[10px] text-[#BDC3C7]">
                <span>30 clientes</span>
                <span>500</span>
                <span>2.000+ clientes</span>
              </div>
            </div>

            {/* Input 3: Taxa Atual por Liquidação */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Receipt className="w-3.5 h-3.5 text-[#D40B3A]" />
                  Taxa Atual por Liquidação (no seu banco/gateway):
                </span>
                <span className="font-mono font-bold text-[#D40B3A] text-sm">
                  R$ {taxaAtual.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <input
                type="range"
                min={1.50}
                max={8.00}
                step={0.10}
                value={taxaAtual}
                onChange={(e) => setTaxaAtual(Number(e.target.value))}
                className="w-full h-2 bg-[#111F24] rounded-lg appearance-none cursor-pointer accent-[#D40B3A]"
              />
              <div className="flex justify-between text-[10px] text-[#BDC3C7]">
                <span>R$ 1,50</span>
                <span>R$ 3,50 (Média)</span>
                <span>R$ 8,00+</span>
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold pt-0.5">
                ✦ Taxa homologada Multilagos / Asaas: <strong>R$ 0,99 por liquidação</strong>
              </div>
            </div>

            {/* Input 4: Taxa de Inadimplência Atual */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5 text-[#D40B3A]" />
                  Taxa Média de Atraso / Inadimplência Atual:
                </span>
                <span className="font-mono font-bold text-[#D40B3A] text-sm">
                  {inadimplenciaAtual}%
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={30}
                step={1}
                value={inadimplenciaAtual}
                onChange={(e) => setInadimplenciaAtual(Number(e.target.value))}
                className="w-full h-2 bg-[#111F24] rounded-lg appearance-none cursor-pointer accent-[#D40B3A]"
              />
              <div className="flex justify-between text-[10px] text-[#BDC3C7]">
                <span>2% (Baixa)</span>
                <span>12% (Média B2B)</span>
                <span>30% (Crítica)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#BDC3C7]/15 text-[11px] text-[#BDC3C7]">
              Cálculo baseado em dados médios de empresas de serviços que migraram para o ecossistema com emissão automática de NFS-e e réguas inteligentes.
            </div>

          </div>

          {/* Results Card (Right) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1C2B32] via-[#16242B] to-[#111F24] border-2 border-[#D40B3A] flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-[#BDC3C7]/20">
                <div className="w-10 h-10 rounded-xl bg-[#D40B3A]/20 flex items-center justify-center text-[#D40B3A]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Resultado da Simulação
                  </div>
                  <div className="text-[11px] text-[#CDDADE]">
                    Recuperação direta no seu fluxo de caixa
                  </div>
                </div>
              </div>

              {/* Métrica Principal: Caixa Total Recuperado / Economizado */}
              <div className="p-4 rounded-2xl bg-[#111F24] border border-[#BDC3C7]/20 mb-3.5">
                <div className="text-[10px] font-bold text-[#BDC3C7] uppercase tracking-wider mb-1">
                  Caixa Total Recuperado/Economizado (Mensal):
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#D40B3A] font-mono leading-none">
                  R$ {caixaTotalRecuperadoMensal.toLocaleString('pt-BR')}
                  <span className="text-xs font-normal text-[#BDC3C7] ml-2">/mês</span>
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-2 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Economia Anual Projetada: <strong>R$ {economiaAnualProjetada.toLocaleString('pt-BR')}</strong></span>
                </div>
              </div>

              {/* Detalhamento de Onde Vem o Ganho */}
              <div className="space-y-2 mb-4 text-xs">
                <div className="p-3 rounded-xl bg-[#111F24]/80 border border-[#BDC3C7]/15 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-[11px]">Economia em Taxas Bancárias:</div>
                    <div className="text-[10px] text-[#BDC3C7]">Taxa R$ 0,99 vs R$ {taxaAtual.toFixed(2).replace('.', ',')}</div>
                  </div>
                  <span className="font-mono font-bold text-emerald-400 text-xs">
                    + R$ {Math.round(economiaTaxasMensal).toLocaleString('pt-BR')}/mês
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#111F24]/80 border border-[#BDC3C7]/15 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-[11px]">Recuperação de Inadimplência:</div>
                    <div className="text-[10px] text-[#BDC3C7]">Régua no WhatsApp + IA</div>
                  </div>
                  <span className="font-mono font-bold text-[#CDDADE] text-xs">
                    + R$ {Math.round(recuperacaoInadimplenciaMensal).toLocaleString('pt-BR')}/mês
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#111F24]/80 border border-[#BDC3C7]/15 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-[11px]">Tempo Poupado:</div>
                    <div className="text-[10px] text-[#BDC3C7]">Zero digitação de notas e cobrança manual</div>
                  </div>
                  <span className="font-mono font-bold text-white text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D40B3A]" />
                    ~{horasEconomizadas}h / mês
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openWhatsAppWithRoi}
                className="w-full py-4 rounded-xl bg-[#D40B3A] hover:bg-[#B50931] text-white font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#D40B3A]/30 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5"
              >
                <span>VALIDAR ESTA RECUPERAÇÃO NO WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
