export interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  badge?: string;
  isPopular?: boolean;
  colorTheme?: 'cyan' | 'slate';
  description: string;
  features: string[];
  whatsappMessage: string;
  ctaText: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
  badge?: string;
}

export interface PainPointItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  consequence: string;
}

export interface TaxReformFeature {
  title: string;
  description: string;
  impact: string;
  iconName: string;
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  segment: string;
  quote: string;
  metricHighlight: string;
  avatarUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ServiceAvulsoItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  timeline: string;
  ctaText: string;
}

export interface SiteConfig {
  companyName: string;
  consultantName: string;
  consultantRole: string;
  whatsappNumber: string;
  email: string;
  location: string;
  heroHeadline: string;
  heroSubheadline: string;
  sectionsVisibility: {
    showHero: boolean;
    showProblems: boolean;
    showPillars: boolean;
    showPartners: boolean;
    showIntegrations: boolean;
    showServicesAvulsos: boolean;
    showPlans: boolean;
    showMethodology: boolean;
    showTributary: boolean;
    showMaterials: boolean;
    showTestimonials: boolean;
    showAbout?: boolean;
    showFaq: boolean;
    showFooter: boolean;
    contactModal?: boolean;
  };
}
