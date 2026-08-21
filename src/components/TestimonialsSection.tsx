import React from 'react';
import { 
  MessageSquareQuote, 
  Star, 
  Building2, 
  Stethoscope, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Eduardo Guimarães',
      role: 'Sócio-Fundador',
      company: 'Vanguard Marketing & Growth',
      segment: 'Agência de Publicidade & Tráfego',
      icon: <Briefcase className="w-4 h-4 text-[#D40B3A]" />,
      feedback:
        'A emissão manual de mais de 80 notas de serviços todo dia 10 era o pesadelo do nosso financeiro. A Multilagos parametrizou tudo: hoje os contratos geram as cobranças no Pix/Boleto e as notas saem no mesmo segundo da confirmação.',
      result: 'Economia de 30h/mês no financeiro'
    },
    {
      name: 'Dra. Camila Vasconcellos',
      role: 'Diretora Clínica',
      company: 'Instituto Integrado de Saúde',
      segment: 'Clínica Médica & Procedimentos',
      icon: <Stethoscope className="w-4 h-4 text-[#D40B3A]" />,
      feedback:
        'Tínhamos muita vergonha e atrito ao cobrar pacientes particulares. A régua no WhatsApp com IA da Multilagos reduziu os atrasos em mais de 60%, de forma extremamente respeitosa e sem desgaste profissional.',
      result: 'Redução de 62% nos atrasos'
    },
    {
      name: 'Rodrigo Mello',
      role: 'CEO',
      company: 'Apex Consultoria Empresarial',
      segment: 'Consultoria Financeira B2B',
      icon: <Building2 className="w-4 h-4 text-[#D40B3A]" />,
      feedback:
        'O split de honorários e a sincronização com o nosso Omie funcionam com perfeição cirúrgica. Hoje sei centavo por centavo o que entrou e o que foi repassado aos consultores associados.',
      result: '100% de conciliação automática'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-[#111F24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Casos Reais em Empresas de Serviços</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Resultados práticos relatados por quem escalou sua operação
          </h2>
          <p className="text-xs sm:text-sm text-[#BDC3C7]">
            Empresas prestadoras de serviços que simplificaram a rotina e blindaram o fluxo de caixa.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#16242B] border border-[#BDC3C7]/20 hover:border-[#D40B3A]/50 transition-all flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#D40B3A] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs text-[#E0E0E0] leading-relaxed italic mb-6">
                  "{item.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#BDC3C7]/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#111F24] border border-[#BDC3C7]/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-[#CDDADE]">
                      {item.role} • {item.company}
                    </div>
                  </div>
                </div>

                <div className="mt-3 inline-block px-2.5 py-1 rounded-md bg-[#111F24] border border-[#D40B3A]/30 text-[10px] font-bold text-[#D40B3A]">
                  Resultado: {item.result}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
