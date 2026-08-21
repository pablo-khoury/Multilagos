import React from 'react';
import { 
  FileWarning, 
  TrendingDown, 
  Unlink, 
  Scale, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

interface PainPointsSectionProps {
  onOpenDiagnosis?: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onOpenDiagnosis }) => {
  const painList = [
    {
      icon: <FileWarning className="w-5 h-5 text-[#D40B3A]" />,
      title: 'NFS-e Manual',
      description: 'Centenas de horas gastas digitando notas em sites de prefeituras e risco de erros fiscais.',
      impact: 'Sobrecarga e multas'
    },
    {
      icon: <TrendingDown className="w-5 h-5 text-[#D40B3A]" />,
      title: 'Inadimplência Silenciosa',
      description: 'Falta de uma régua automática no WhatsApp para cobrar contratos recorrentes sem desgaste comercial.',
      impact: 'Caixa asfixiado'
    },
    {
      icon: <Unlink className="w-5 h-5 text-[#D40B3A]" />,
      title: 'Sistemas Desconectados',
      description: 'O meio de pagamento não conversa com o ERP (Omie/Conta Azul), gerando conciliação manual em planilhas.',
      impact: 'Retrabalho diário'
    },
    {
      icon: <Scale className="w-5 h-5 text-[#D40B3A]" />,
      title: 'Incerteza da Reforma Tributária',
      description: 'Risco de bloqueio operacional e exigência futura de emissão síncrona com Split Payment.',
      impact: 'Risco fiscal e de margem'
    }
  ];

  return (
    <section id="gargalos" className="py-16 bg-[#16242B] border-b border-[#BDC3C7]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Compacto */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-[11px] font-bold text-[#D40B3A]">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Diagnóstico de Faturamento & Operação</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Sua empresa de serviços enfrenta algum desses gargalos?
          </h2>
          <p className="text-xs sm:text-sm text-[#BDC3C7]">
            Processos manuais e falta de integração drenam o lucro e a previsibilidade da sua receita recorrente.
          </p>
        </div>

        {/* 4 Cards Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {painList.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#111F24] border border-[#BDC3C7]/15 hover:border-[#D40B3A]/60 transition-all flex flex-col justify-between shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#16242B] border border-[#BDC3C7]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#D40B3A] bg-[#D40B3A]/10 px-2 py-0.5 rounded-full">
                    Gargalo 0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#CDDADE] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs text-[#BDC3C7] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#BDC3C7]/15 flex items-center justify-between text-[10px]">
                <span className="text-[#BDC3C7]">Consequência:</span>
                <span className="font-bold text-[#D40B3A]">{item.impact}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
