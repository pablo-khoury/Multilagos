import React from 'react';
import { 
  FileCheck2, 
  Bot, 
  Layers, 
  Scale, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { SiteConfig } from '../types';

interface SolutionsProps {
  config: SiteConfig;
}

export const Solutions: React.FC<SolutionsProps> = ({ config }) => {
  const openWhatsApp = (context: string) => {
    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      `Olá Pablo! Gostaria de saber mais detalhes sobre a solução de *${context}* da Multilagos.`
    )}`;
    window.open(url, '_blank');
  };

  const solutions = [
    {
      badge: 'Pilar Fiscal & Operacional',
      icon: <FileCheck2 className="w-6 h-6 text-[#D40B3A]" />,
      title: 'Emissão Automática de NFS-e & Faturamento',
      description:
        'Sua empresa emite centenas de notas fiscais sem intervenção humana. A emissão pode ocorrer no agendamento do contrato recorrente ou assim que o pagamento for liquidado.',
      benefits: [
        'Integração direta com o padrão nacional e prefeituras homologadas',
        'Disparo automático de XML e PDF por e-mail e WhatsApp para o cliente',
        'Cancelamento e substituição de notas simplificados e auditados',
        'Zero digitação e 100% de conformidade com a contabilidade'
      ]
    },
    {
      badge: 'Pilar de Caixa & Relacionamento',
      icon: <Bot className="w-6 h-6 text-[#D40B3A]" />,
      title: 'Régua Inteligente de Cobrança com IA',
      description:
        'Comunicação proativa e humanizada. Notificações multicanal (WhatsApp, E-mail e SMS) que reduzem a taxa de atraso antes mesmo da data de vencimento.',
      benefits: [
        'Lembretes com chave Pix Copia e Cola e boleto em 1 clique',
        'Atendimento de renegociação automatizado via agentes de IA',
        'Redução drástica do atrito comercial e cobrança humanizada',
        'Visão analítica de liquidação em tempo real no dashboard'
      ]
    },
    {
      badge: 'Pilar de Governança & Sistemas',
      icon: <Layers className="w-6 h-6 text-[#D40B3A]" />,
      title: 'Integração de Contratos & Sincronização de ERP',
      description:
        'Conexão nativa entre os meios de pagamento digitais e seu software de gestão empresarial (Omie, Conta Azul, etc.).',
      benefits: [
        'Conciliação bancária automática centavo por centavo',
        'Gestão de planos, honorários mensais e reajustes automáticos (IGP-M/IPCA)',
        'Divisão automática de valores (Split Payment de comissões/parceiros)',
        'Eliminação completa de planilhas paralelas de controle'
      ]
    },
    {
      badge: 'Pilar de Futuro & Compliance',
      icon: <Scale className="w-6 h-6 text-[#D40B3A]" />,
      title: 'Arquitetura Pronta para a Reforma Tributária',
      description:
        'Blindagem da sua operação para a transição dos novos tributos sobre serviços (IBS, CBS) e retenção automática na liquidação financeira.',
      benefits: [
        'Mapeamento de alíquotas e categorização de serviços',
        'Adequação de regras de Split Tributário direto na fonte pagadora',
        'Relatórios fiscais consolidados para auditoria contábil rápida',
        'Segurança jurídica e tranquilidade para crescer sem sobressaltos'
      ]
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-[#111F24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engenharia de Processos Financeiros</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Soluções completas para estruturar, automatizar e escalar o faturamento da sua empresa de serviços
          </h2>
          <p className="text-xs sm:text-sm text-[#BDC3C7]">
            Arquitetamos soluções sob medida com tecnologia de ponta, sem a necessidade de trocar de ERP ou contratar novos funcionários.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#16242B] border border-[#BDC3C7]/20 hover:border-[#D40B3A]/60 transition-all flex flex-col justify-between shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D40B3A]/5 rounded-bl-full pointer-events-none group-hover:bg-[#D40B3A]/10 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#CDDADE] uppercase tracking-wider bg-[#111F24] px-3 py-1 rounded-full border border-[#BDC3C7]/20">
                    {item.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#111F24] border border-[#BDC3C7]/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-xs text-[#BDC3C7] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  {item.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-[#E0E0E0]">
                      <CheckCircle2 className="w-4 h-4 text-[#D40B3A] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#BDC3C7]/15">
                <button
                  onClick={() => openWhatsApp(item.title)}
                  className="w-full py-3 rounded-xl bg-[#111F24] hover:bg-[#1B2A32] border border-[#BDC3C7]/30 hover:border-[#D40B3A] text-xs font-bold text-[#CDDADE] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Consultar Viabilidade Desta Solução</span>
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
