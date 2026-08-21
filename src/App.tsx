/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialSiteConfig } from './data/content';
import { SiteConfig } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainPointsSection } from './components/PainPointsSection';
import { Methodology } from './components/Methodology';
import { PartnersSection } from './components/PartnersSection';
import { PricingPlans } from './components/PricingPlans';
import { TaxReformSection } from './components/TaxReformSection';
import { RoiCalculator } from './components/RoiCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ContactDiagnosisModal } from './components/ContactDiagnosisModal';

export default function App() {
  const [config] = useState<SiteConfig>(initialSiteConfig);
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111F24] text-[#E0E0E0] selection:bg-[#D40B3A] selection:text-white relative flex flex-col font-sans">
      
      {/* 1. Header / Barra de Navegação */}
      <Header
        config={config}
        onOpenDiagnosis={() => setIsDiagnosisOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          config={config}
          onOpenDiagnosis={() => setIsDiagnosisOpen(true)}
        />

        {/* 3. Seção Compacta de Dores / Gargalos Operacionais */}
        <PainPointsSection
          onOpenDiagnosis={() => setIsDiagnosisOpen(true)}
        />

        {/* 4. Como Funciona a Implantação (Metodologia Unificada em 4 Passos) */}
        <Methodology />

        {/* 4. Destaque de Parceiros Oficiais ASAAS e ERPs Homologados */}
        <PartnersSection />

        {/* 5. Esteira de 3 Planos Claros (Start, Pro, Enterprise) */}
        <PricingPlans config={config} />

        {/* 6. Reforma Tributária & Split Payment para Serviços */}
        <TaxReformSection
          config={config}
          onOpenDiagnosis={() => setIsDiagnosisOpen(true)}
        />

        {/* 7. Simulador de Recuperação de Inadimplência & ROI */}
        <RoiCalculator config={config} />

        {/* 8. Depoimentos e Casos de Sucesso */}
        <TestimonialsSection />

        {/* 9. Sobre Pablo Khoury / Autoridade Consultiva */}
        <AboutSection config={config} />

        {/* 10. FAQ Consultivo */}
        <FaqSection config={config} />

      </main>

      {/* 11. Footer Executivo */}
      <Footer config={config} />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp config={config} />

      {/* Modal de Agendamento do Diagnóstico */}
      <ContactDiagnosisModal
        config={config}
        isOpen={isDiagnosisOpen}
        onClose={() => setIsDiagnosisOpen(false)}
      />

    </div>
  );
}
