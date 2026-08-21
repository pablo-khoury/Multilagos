import React, { useState } from 'react';
import { X, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { SiteConfig } from '../types';

interface ContactDiagnosisModalProps {
  config: SiteConfig;
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDiagnosisModal: React.FC<ContactDiagnosisModalProps> = ({
  config,
  isOpen,
  onClose
}) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    segmento: 'Prestação de Serviços B2B',
    faturamento: 'R$ 50.000 a R$ 100.000 / mês',
    erp: 'Omie',
    principalGargalo: 'Emissão manual de Notas Fiscais (NFS-e)',
    whatsapp: '',
    observacoes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const mensagem = `*SOLICITAÇÃO DE DIAGNÓSTICO GRATUITO - MULTILAGOS*

👤 *Responsável:* ${formData.nome || 'Não informado'}
🏢 *Empresa:* ${formData.empresa || 'Não informada'}
🏷️ *Segmento:* ${formData.segmento}
💰 *Faturamento Mensal:* ${formData.faturamento}
🖥️ *Sistema / ERP Atual:* ${formData.erp}
⚠️ *Principal Gargalo:* ${formData.principalGargalo}
📱 *WhatsApp de Contato:* ${formData.whatsapp || 'Informado na conversa'}
${formData.observacoes ? `📝 *Detalhes adicionais:* ${formData.observacoes}` : ''}

_Solicitado através da Landing Page Oficial da Multilagos._`;

    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#16242B] border border-[#D40B3A]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-[#E0E0E0] max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#111F24] border border-[#BDC3C7]/20 text-[#BDC3C7] hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Modal */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D40B3A]/15 border border-[#D40B3A]/30 text-xs font-bold text-[#D40B3A] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sessão Diagnóstica Executiva • 100% Gratuita</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Mapeamento de Eficiência Financeira
          </h3>
          <p className="text-xs text-[#BDC3C7] mt-1">
            Preencha os dados abaixo para direcionar a análise diretamente para Pablo Khoury no WhatsApp.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#CDDADE] font-bold mb-1.5">
                Seu Nome:
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Carlos Silva"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/30 text-white placeholder-[#BDC3C7]/50 focus:outline-none focus:border-[#D40B3A]"
              />
            </div>

            <div>
              <label className="block text-[#CDDADE] font-bold mb-1.5">
                Nome da Empresa:
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Nexus Consultoria"
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/30 text-white placeholder-[#BDC3C7]/50 focus:outline-none focus:border-[#D40B3A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#CDDADE] font-bold mb-1.5">
                Segmento de Atuação:
              </label>
              <select
                value={formData.segmento}
                onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/30 text-white focus:outline-none focus:border-[#D40B3A]"
              >
                <option value="Prestação de Serviços B2B">Prestação de Serviços B2B</option>
                <option value="Consultoria / Assessoria">Consultoria / Assessoria</option>
                <option value="Agência de Marketing / Tráfego">Agência de Marketing / Tráfego</option>
                <option value="Clínica Médica / Estética">Clínica Médica / Estética</option>
                <option value="Escola / Cursos / Educação">Escola / Cursos / Educação</option>
                <option value="SaaS / Software por Assinatura">SaaS / Software por Assinatura</option>
                <option value="Outro Modelo de Serviços">Outro Modelo de Serviços</option>
              </select>
            </div>

            <div>
              <label className="block text-[#CDDADE] font-bold mb-1.5">
                Faturamento Mensal Estimado:
              </label>
              <select
                value={formData.faturamento}
                onChange={(e) => setFormData({ ...formData, faturamento: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/30 text-white focus:outline-none focus:border-[#D40B3A]"
              >
                <option value="Até R$ 30.000 / mês">Até R$ 30.000 / mês</option>
                <option value="R$ 30.000 a R$ 60.000 / mês">R$ 30.000 a R$ 60.000 / mês</option>
                <option value="R$ 60.000 a R$ 150.000 / mês">R$ 60.000 a R$ 150.000 / mês</option>
                <option value="R$ 150.000 a R$ 300.000 / mês">R$ 150.000 a R$ 300.000 / mês</option>
                <option value="Acima de R$ 300.000 / mês">Acima de R$ 300.000 / mês</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#CDDADE] font-bold mb-1.5">
                Software de Gestão / ERP Atual:
              </label>
              <input
                type="text"
                placeholder="Ex: Omie, Conta Azul, Planilhas, etc."
                value={formData.erp}
                onChange={(e) => setFormData({ ...formData, erp: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/30 text-white placeholder-[#BDC3C7]/50 focus:outline-none focus:border-[#D40B3A]"
              />
            </div>

            <div>
              <label className="block text-[#CDDADE] font-bold mb-1.5">
                Principal Gargalo Hoje:
              </label>
              <select
                value={formData.principalGargalo}
                onChange={(e) => setFormData({ ...formData, principalGargalo: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/30 text-white focus:outline-none focus:border-[#D40B3A]"
              >
                <option value="Emissão manual de Notas Fiscais (NFS-e)">Emissão manual de NFS-e</option>
                <option value="Inadimplência de mensalidades / contratos">Inadimplência de mensalidades / contratos</option>
                <option value="Falta de régua automática de cobrança">Falta de régua automática de cobrança</option>
                <option value="Conciliação bancária demorada / manual">Conciliação bancária demorada / manual</option>
                <option value="Preparação para a Reforma Tributária">Preparação para a Reforma Tributária</option>
                <option value="Outro gargalo operacional">Outro gargalo operacional</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[#CDDADE] font-bold mb-1.5">
              Seu WhatsApp de Contato:
            </label>
            <input
              type="text"
              required
              placeholder="Ex: (21) 99999-9999"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/30 text-white placeholder-[#BDC3C7]/50 focus:outline-none focus:border-[#D40B3A]"
            />
          </div>

          <div>
            <label className="block text-[#CDDADE] font-bold mb-1.5">
              Observações ou Detalhes (Opcional):
            </label>
            <textarea
              rows={2}
              placeholder="Descreva brevemente o que você mais precisa destravar no momento..."
              value={formData.observacoes}
              onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F24] border border-[#BDC3C7]/30 text-white placeholder-[#BDC3C7]/50 focus:outline-none focus:border-[#D40B3A]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D40B3A] to-[#B50931] hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#D40B3A]/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Enviar e Iniciar Conversa no WhatsApp</span>
            </button>
          </div>

        </form>

        {/* Security badge */}
        <div className="mt-4 pt-3 border-t border-[#BDC3C7]/15 flex items-center justify-center gap-1.5 text-[11px] text-[#BDC3C7]">
          <ShieldCheck className="w-4 h-4 text-[#D40B3A]" />
          <span>Seus dados são 100% confidenciais e direcionados exclusivamente para a sessão diagnóstica.</span>
        </div>

      </div>
    </div>
  );
};
