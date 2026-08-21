import React, { useState, useEffect } from 'react';
import { ShieldCheck, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { SiteConfig } from '../types';

interface HeaderProps {
  config: SiteConfig;
  onOpenDiagnosis: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenDiagnosis }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const cleanNumber = config.whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      'Olá Pablo! Gostaria de agendar um diagnóstico de processos e automação de faturamento para minha empresa.'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111F24]/95 backdrop-blur-md border-b border-[#BDC3C7]/20 py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D40B3A] to-[#B50931] flex items-center justify-center font-black text-white text-xl shadow-lg shadow-[#D40B3A]/25 group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <span className="font-extrabold text-white text-lg tracking-tight block">
                {config.companyName}
              </span>
              <span className="text-[10px] text-[#CDDADE] uppercase font-bold tracking-widest block -mt-1">
                Negócios & Tecnologia
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#BDC3C7]">
            <a
              href="#gargalos"
              className="hover:text-white transition-colors"
            >
              Gargalos
            </a>
            <a
              href="#como-funciona"
              className="hover:text-white transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#parceiros"
              className="hover:text-white transition-colors"
            >
              Parceiros & ERPs
            </a>
            <a
              href="#planos"
              className="hover:text-white transition-colors"
            >
              Planos
            </a>
            <a
              href="#tributario"
              className="hover:text-white transition-colors"
            >
              Reforma Tributária
            </a>
            <a
              href="#simulador"
              className="hover:text-white transition-colors"
            >
              Simulador ROI
            </a>
            <a
              href="#sobre"
              className="hover:text-white transition-colors"
            >
              Sobre
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDiagnosis}
              className="px-4 py-2.5 rounded-xl border border-[#BDC3C7]/30 hover:border-[#D40B3A] text-xs font-bold text-[#CDDADE] hover:text-white bg-[#16242B]/80 hover:bg-[#16242B] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Diagnóstico Gratuito</span>
            </button>

            <button
              onClick={openWhatsApp}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D40B3A] to-[#B50931] hover:brightness-110 text-white text-xs font-extrabold tracking-wide uppercase shadow-lg shadow-[#D40B3A]/30 flex items-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#16242B] border border-[#BDC3C7]/20 text-[#CDDADE]"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111F24] border-b border-[#BDC3C7]/20 px-4 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-xs font-semibold text-[#BDC3C7] pt-2">
            <a
              href="#gargalos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16242B] text-white"
            >
              Gargalos
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16242B] text-white"
            >
              Como Funciona
            </a>
            <a
              href="#parceiros"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16242B] text-white"
            >
              Parceiros & ERPs
            </a>
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16242B] text-white"
            >
              Planos
            </a>
            <a
              href="#tributario"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16242B] text-white"
            >
              Reforma Tributária
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16242B] text-white"
            >
              Simulador ROI
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16242B] text-white"
            >
              Sobre
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#16242B] text-white"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnosis();
              }}
              className="w-full py-3 rounded-xl border border-[#BDC3C7]/30 text-xs font-bold text-[#CDDADE] bg-[#16242B] text-center"
            >
              Diagnóstico Gratuito
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D40B3A] to-[#B50931] text-white text-xs font-extrabold tracking-wide uppercase text-center shadow-lg shadow-[#D40B3A]/30 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
