import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { SiteConfig } from '../types';

interface FloatingWhatsAppProps {
  config: SiteConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ config }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dismissedBubble, setDismissedBubble] = useState(false);

  const openWhatsApp = () => {
    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      'Olá Pablo! Acessei o site da Multilagos e gostaria de conversar sobre a automação de faturamento e notas para minha empresa de serviços.'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-none">
      
      {/* Speech Bubble */}
      {!dismissedBubble && (
        <div
          className={`pointer-events-auto bg-[#16242B] border border-[#D40B3A]/40 text-[#E0E0E0] p-3.5 rounded-2xl shadow-2xl max-w-xs transition-all duration-300 relative mb-1 hidden sm:block ${
            isHovered ? 'scale-105' : ''
          }`}
        >
          <button
            onClick={() => setDismissedBubble(true)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#111F24] border border-[#BDC3C7]/20 text-[#BDC3C7] hover:text-white flex items-center justify-center text-[10px] cursor-pointer"
            aria-label="Fechar balão"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-bold text-[#CDDADE]">Pablo Khoury • Online</span>
          </div>
          <p className="text-xs leading-snug text-[#BDC3C7]">
            Precisa eliminar a digitação manual de notas ou reduzir a inadimplência da sua empresa de serviços?
          </p>
        </div>
      )}

      {/* Button */}
      <button
        onClick={openWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-tr from-[#D40B3A] to-[#B50931] hover:brightness-110 text-white shadow-2xl shadow-[#D40B3A]/50 flex items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer shrink-0"
        aria-label="Falar com Pablo Khoury no WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </button>

    </div>
  );
};
