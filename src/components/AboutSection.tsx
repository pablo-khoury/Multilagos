import React from 'react';
import { 
  UserCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SiteConfig } from '../types';

interface AboutSectionProps {
  config: SiteConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config }) => {
  const openWhatsApp = () => {
    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      'Olá Pablo! Gostaria de conversar diretamente com você sobre os desafios financeiros e de processos da minha empresa.'
    )}`;
    window.open(url, '_blank');
  };

  const credentials = [
    'Especialista em Engenharia de Processos Financeiros, APIs e Automação de NFS-e',
    'Certificado nas principais plataformas financeiras e ERPs de mercado (Asaas, Omie, Conta Azul)',
    'Mais de 10 anos de experiência em gestão ágil de projetos (PMO) e operações de serviços',
    'Foco absoluto em redução de custos operacionais e recuperação imediata de fluxo de caixa'
  ];

  return (
    <section id="sobre" className="py-20 bg-[#16242B] border-y border-[#BDC3C7]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Col 1: Imagem / Card de Autoridade */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D40B3A] to-[#CDDADE]/30 rounded-3xl blur-lg opacity-30" />

              <div className="relative rounded-3xl overflow-hidden bg-[#111F24] border border-[#BDC3C7]/20 p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
                  alt="Pablo Khoury"
                  className="w-full h-96 object-cover object-top rounded-2xl"
                />

                <div className="p-5 bg-[#16242B] rounded-xl mt-2 border border-[#BDC3C7]/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-extrabold text-white text-base">
                        Pablo Khoury
                      </div>
                      <div className="text-xs text-[#D40B3A] font-semibold">
                        Especialista em Automação & PMO
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-[#111F24] border border-[#BDC3C7]/20 flex items-center justify-center text-[#D40B3A]">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#BDC3C7]/15 flex items-center gap-2 text-[11px] text-[#CDDADE]">
                    <ShieldCheck className="w-4 h-4 text-[#D40B3A]" />
                    <span>Liderança Técnica & Consultoria Estratégica</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Col 2: Bio & Credenciais */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A]">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Autoridade & Experiência Prática</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Tecnologia e inteligência aplicadas à saúde financeira do seu negócio
            </h2>

            <p className="text-xs sm:text-sm text-[#BDC3C7] leading-relaxed">
              Com sólida formação em gestão de projetos (PMO) e arquitetura de integração tecnológica, Pablo Khoury assessora empresas de serviços e negócios recorrentes a eliminarem o trabalho braçal de suas finanças.
            </p>

            <p className="text-xs sm:text-sm text-[#BDC3C7] leading-relaxed">
              A <strong>Multilagos Negócios & Tecnologia</strong> nasceu com o propósito de libertar donos e gestores de empresas de serviços da escravidão operacional: emissão manual de notas fiscais, cobranças constrangedoras e conciliações demoradas.
            </p>

            {/* Credentials / Bullets */}
            <div className="space-y-3 pt-2">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/20"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D40B3A] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#E0E0E0]">{cred}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={openWhatsApp}
                className="px-7 py-3.5 rounded-xl bg-[#D40B3A] hover:bg-[#B50931] text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-[#D40B3A]/25 transition-all"
              >
                <span>Falar Diretamente com Pablo Khoury</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
