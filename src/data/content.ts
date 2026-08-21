import { PlanItem, SolutionItem, PainPointItem, TaxReformFeature, MethodologyStep, TestimonialItem, FaqItem, SiteConfig, ServiceAvulsoItem } from '../types';

export const initialSiteConfig: SiteConfig = {
  companyName: "Multilagos Negócios & Tecnologia",
  consultantName: "Pablo Khoury",
  consultantRole: "Especialista em Transformação Digital, Automação Financeira & PMO",
  whatsappNumber: "5522998887766",
  email: "contato@multilagostec.com.br",
  location: "Região dos Lagos, RJ • Atendimento Consultivo em Todo o Brasil",
  heroHeadline: "Elimine a inadimplência, automatize suas Notas Fiscais e elimine o trabalho manual da sua operação de serviços.",
  heroSubheadline: "Conectamos sua régua de cobrança, emissão automática de NF-e e gestão de contratos recorrentes ao seu ERP. Mais caixa previsível, zero digitação manual.",
  sectionsVisibility: {
    showHero: true,
    showProblems: true,
    showPillars: true,
    showPartners: true, // Asaas e ERPs
    showIntegrations: true, // Ferramentas e ecossistema
    showServicesAvulsos: true, // Serviços sob demanda
    showPlans: true, // Esteira dos 5 planos
    showMethodology: true,
    showTributary: true, // Bloco Reforma Tributária
    showMaterials: true, // Materiais e Simuladores futuros
    showTestimonials: true, // Depoimentos
    showAbout: true,
    showFaq: true,
    showFooter: true,
    contactModal: true,
  }
};

export const painPointsData: PainPointItem[] = [
  {
    id: "pain-nf",
    title: "NFS-e Manual",
    subtitle: "Digitação repetitiva e risco fiscal",
    description: "Centenas de horas gastas digitando notas em sites de prefeituras e risco de erros fiscais ou multas por atraso.",
    iconName: "FileWarning",
    consequence: "Perda de até 40h/mês de produtividade"
  },
  {
    id: "pain-inadimplencia",
    title: "Inadimplência Silenciosa",
    subtitle: "Falta de régua automatizada",
    description: "Falta de uma régua automática no WhatsApp para cobrar contratos recorrentes sem desgaste comercial com clientes.",
    iconName: "TrendingDown",
    consequence: "Queda imediata de liquidez e caixa asfixiado"
  },
  {
    id: "pain-desconexao",
    title: "Sistemas Desconectados",
    subtitle: "Conciliação bancária em planilhas",
    description: "O meio de pagamento não conversa com o ERP (Omie/Conta Azul), gerando conciliação manual em planilhas.",
    iconName: "Unlink",
    consequence: "Retrabalho diário e dados financeiros desencontrados"
  },
  {
    id: "pain-reforma",
    title: "Incerteza da Reforma Tributária",
    subtitle: "Exigência de Split Payment",
    description: "Risco de bloqueio operacional e exigência futura de emissão síncrona com Split Payment de tributos na liquidação.",
    iconName: "Scale",
    consequence: "Risco de bloqueio e descontrole de margem"
  }
];

export const solutionsData: SolutionItem[] = [
  {
    id: "nf-automation",
    title: "Automação Completa de Notas Fiscais",
    subtitle: "Emissão, cancelamento e envio de NFS-e sem intervenção humana",
    description: "Configuramos a emissão automática de notas fiscais de serviço vinculadas diretamente ao pagamento ou ao faturamento do contrato. Seu cliente recebe a nota e a fatura no mesmo instante.",
    iconName: "FileCheck",
    badge: "Zero Digitação Manual",
    highlights: [
      "Disparo automático da NFS-e assim que o Pix, boleto ou cartão for compensado",
      "Envio sincronizado do link da nota e XML para o e-mail e WhatsApp do tomador do serviço",
      "Cancelamento automático em caso de estorno ou renegociação de contrato",
      "Parametrização precisa de alíquotas municipais, ISS retido e regimes tributários",
      "Economia imediata de até 20 horas mensais da sua equipe financeira"
    ]
  },
  {
    id: "smart-regua-ia",
    title: "Régua Inteligente & Agente de IA para Cobrança",
    subtitle: "Lembretes preventivos e negociação empática no WhatsApp",
    description: "Implementamos réguas multicanal antes, no dia e pós-vencimento via WhatsApp, E-mail e SMS, integradas a um assistente inteligente treinado para negociar débitos com cordialidade e precisão.",
    iconName: "Bot",
    badge: "Recuperação de até 68%",
    highlights: [
      "Avisos preventivos 5, 3 e 1 dia antes do vencimento com link Pix dinâmico",
      "Agente de IA no WhatsApp oficial da sua empresa que atende o cliente 24/7",
      "Negociação orientada pelas regras de juros, multas e parcelamentos da sua diretoria",
      "Geração instantânea de Pix Copia e Cola durante a conversa de negociação",
      "Preservação total do relacionamento comercial com abordagem cordial e profissional"
    ]
  },
  {
    id: "recurrence-split",
    title: "Gestão de Recorrência & Split Financeiro",
    subtitle: "Contratos, assinaturas e divisão automática de honorários",
    description: "Estruturação de cobrança recorrente no cartão de crédito sem comprometer o limite total do cliente, Pix Programado e divisão automática (Split) entre prestadores, parceiros e sócios.",
    iconName: "Repeat",
    badge: "Receita Previsível",
    highlights: [
      "Cobrança recorrente no cartão sem bloquear o limite do cliente (Recorrência Real)",
      "Boleto com Pix Dinâmico e baixa em tempo real",
      "Divisão automatizada de comissões e repasses de prestadores no momento do recebimento",
      "Retentativas inteligentes em caso de falha de cobrança no cartão de crédito",
      "Portal do cliente para 2ª via e troca de forma de pagamento"
    ]
  },
  {
    id: "end-to-end-integration",
    title: "Integração Fim a Fim (APIs & ERP)",
    subtitle: "Conecte CRM, meios de pagamento e software de gestão",
    description: "Arquitetura e sincronização de dados entre seu CRM de vendas, formulários de onboarding, ERP e meios de pagamento automáticos. Quando um contrato é fechado, tudo acontece sozinho.",
    iconName: "Workflow",
    badge: "Fluxo 100% Integrado",
    highlights: [
      "Criação automática de clientes e contratos no ERP após a assinatura",
      "Baixa bancária e conciliação em tempo real sem importar arquivos de retorno",
      "Integrações via Webhooks com Omie, Conta Azul, Bling, Tiny, ClickUp, Trello e Make",
      "Disparo de notificações internas no Slack/WhatsApp para a equipe de atendimento",
      "Fechamento contábil e conciliação financeira em 1 clique"
    ]
  }
];

export const taxReformFeatures: TaxReformFeature[] = [
  {
    title: "Split Tributário em Contratos de Serviços",
    description: "A nova legislação de Split Payment reterá IBS e CBS no momento da liquidação financeira. Parametrizamos sua esteira para proteger a margem e o fluxo de caixa.",
    impact: "Protege o capital de giro e evita surpresas fiscais",
    iconName: "Split"
  },
  {
    title: "Parametrização Fiscal & Alíquotas de Serviços",
    description: "Revisão dos cadastros de serviços e regimes tributários para transição suave de ISS/PIS/COFINS para o novo modelo simplificado.",
    impact: "Garante emissão contínua de NFS-e sem travamento",
    iconName: "Settings"
  },
  {
    title: "Rastreabilidade & Aproveitamento de Créditos",
    description: "Organização dos pagamentos a prestadores parceiros e subcontratados para assegurar o aproveitamento integral de créditos fiscais.",
    impact: "Blindagem contra bitributação em serviços",
    iconName: "ShieldCheck"
  },
  {
    title: "Automação Contábil & Lançamento de Tomadores",
    description: "Fluxos de leitura inteligente de documentos e notas de prestadores para alimentação direta do Contas a Pagar do ERP.",
    impact: "Economia média de 30 horas mensais no departamento financeiro",
    iconName: "FileSpreadsheet"
  }
];

export const methodologySteps: MethodologyStep[] = [
  {
    stepNumber: "01",
    title: "Diagnóstico de Processos & Faturamento",
    subtitle: "Mapeamento dos pontos de perda, gargalos e regras de cobrança",
    description: "Analisamos detalhadamente sua operação de serviços: como os contratos são cadastrados, como as notas são emitidas, tempo gasto em cobrança manual e taxa de inadimplência atual.",
    deliverables: [
      "Relatório de Diagnóstico de Fluxo Financeiro",
      "Mapeamento de Gargalos de NFS-e e Cobrança",
      "Cronograma de Execução e Metas Claras"
    ]
  },
  {
    stepNumber: "02",
    title: "Parametrização Fiscal & Meios de Pagamento",
    subtitle: "Setup no Asaas com Certificado A1 e homologação na prefeitura",
    description: "Configuramos a conta jurídica de pagamentos, certificação digital A1, alíquotas municipais de ISS, Pix Dinâmico e réguas automatizadas de cobrança.",
    deliverables: [
      "Parametrização das Réguas e Emissão de NFS-e",
      "Configuração do Certificado Digital A1",
      "Ambiente de testes com emissão e conciliação validada"
    ]
  },
  {
    stepNumber: "03",
    title: "Integração com ERP & Agente de IA",
    subtitle: "Conexão via APIs/Webhooks e atendimento 24/7 no WhatsApp",
    description: "Conectamos seu ERP (Omie, Conta Azul) para baixa automática em tempo real e ativamos o assistente inteligente no WhatsApp para negociar débitos com cordialidade e precisão.",
    deliverables: [
      "Integração de APIs e Webhooks oficiais com ERP",
      "Agente de IA no WhatsApp com regras da sua empresa",
      "Régua de lembretes preventivos (D-5, D-3, D-0)"
    ]
  },
  {
    stepNumber: "04",
    title: "Homologação, Treinamento & Go-Live",
    subtitle: "Capacitação executiva da equipe e blindagem tributária",
    description: "Validamos toda a esteira em produção, treinamos os operadores financeiros com gravação e manuais POP, e asseguramos conformidade com a Reforma Tributária (Split Payment).",
    deliverables: [
      "Treinamento prático gravado e manual POP",
      "Revisão de conformidade com o Split Payment 2026",
      "Canal direto de suporte VIP com o consultor"
    ]
  }
];

export const pricingPlans: PlanItem[] = [
  {
    id: "essencial",
    name: "Plano Essencial",
    tagline: "Para empresas que precisam de liquidação rápida e régua básica",
    price: "A partir de R$ 750",
    period: "Projeto Rápido / 3 a 5 dias",
    badge: "Configuração & Pagamentos",
    isPopular: false,
    colorTheme: "slate",
    description: "Configuração completa da conta de pagamentos, Pix Dinâmico, Boletos com baixa em tempo real e Régua de Cobrança Padrão.",
    features: [
      "Setup e homologação da conta jurídica de pagamentos",
      "Geração de Pix Dinâmico e Boletos com liquidação instantânea",
      "Baixa e conciliação bancária em tempo real",
      "Régua de cobrança padrão (notificações preventivas e pós-vencimento)",
      "Configuração de juros, multas e portal do cliente",
      "Suporte via WhatsApp durante e após o go-live"
    ],
    whatsappMessage: "Olá Pablo! Gostaria de contratar o Plano Essencial (A partir de R$ 750). Como podemos iniciar a implantação?",
    ctaText: "Escolher Plano Essencial"
  },
  {
    id: "pro",
    name: "Plano Pro",
    tagline: "A esteira definitiva com ERP conectado e robô negociador 24/7",
    price: "A partir de R$ 1.250",
    period: "Implantação Completa / 7 a 15 dias",
    badge: "★ MAIS VENDIDO (RECOMENDADO)",
    isPopular: true,
    colorTheme: "cyan",
    description: "Tudo do Essencial + Emissão automática de NFS-e na quitação, Integração de APIs com ERP (Omie, Conta Azul) e Agente de IA para negociação no WhatsApp.",
    features: [
      "Tudo incluído no Plano Essencial +",
      "Emissão 100% automática de NFS-e municipal na liquidação",
      "Integração profunda de APIs e Webhooks com ERP (Omie, Conta Azul)",
      "Agente de IA 24/7 negociando no WhatsApp oficial da empresa",
      "Envio automático de XML e PDF para o tomador e contabilidade",
      "Treinamento gravado e manual POP para a equipe financeira",
      "Suporte Prioritário VIP direto com Pablo Khoury"
    ],
    whatsappMessage: "Olá Pablo! Quero contratar o Plano Pro (A partir de R$ 1.250 / Mais Vendido). Como agendamos o início?",
    ctaText: "Garantir Plano Pro (Recomendado)"
  },
  {
    id: "performance",
    name: "Plano Performance",
    tagline: "Para empresas em expansão, múltiplos CNPJs e splits avançados",
    price: "A partir de R$ 2.500",
    period: "Avançado / Múltiplos CNPJs",
    badge: "Escala & Alta Performance",
    isPopular: false,
    colorTheme: "slate",
    description: "Tudo do Pro + Estruturação para múltiplos CNPJs, Split de Pagamento avançado, regras de transição da Reforma Tributária e SLA prioritário.",
    features: [
      "Tudo incluído no Plano Pro +",
      "Estruturação para múltiplos CNPJs, unidades e filiais",
      "Split de Pagamento avançado e divisão de honorários/prestadores",
      "Parametrização e regras de transição da Reforma Tributária 2026",
      "Gestão de contratos com recorrência sem bloquear o limite do cartão",
      "SLA de atendimento prioritário em 4 horas úteis"
    ],
    whatsappMessage: "Olá Pablo! Tenho interesse no Plano Performance (A partir de R$ 2.500). Podemos agendar uma reunião técnica?",
    ctaText: "Escolher Plano Performance"
  },
  {
    id: "enterprise",
    name: "Plano Personalizado",
    tagline: "Arquitetura customizada, Webhooks dedicados e governança contínua",
    price: "Sob Medida / Projeto Customizado",
    period: "Escopo Sob Demanda / PMO",
    badge: "Enterprise & PMO",
    isPopular: false,
    colorTheme: "slate",
    description: "Arquitetura sob medida para demandas específicas, integrações via Webhooks dedicados, fluxos internos complexos e acompanhamento contínuo de PMO.",
    features: [
      "Tudo incluído no Plano Performance +",
      "Arquitetura e engenharia de software sob medida para sua esteira",
      "Integrações via Webhooks dedicados com sistemas legados/CRM",
      "Acompanhamento contínuo e reuniões quinzenais de PMO",
      "Auditoria fiscal contínua e parametrizações complexas",
      "Canal de suporte executivo exclusivo e atendimento personalizado"
    ],
    whatsappMessage: "Olá Pablo! Gostaria de consultar um Projeto Personalizado (Enterprise/PMO) para minha empresa.",
    ctaText: "Consultar Escopo Personalizado"
  }
];

export const servicesAvulsosData: ServiceAvulsoItem[] = [
  {
    id: "migracao-base",
    title: "Migração & Higienização de Base de Clientes",
    badge: "Setup Rápido",
    description: "Estruturação, limpeza cadastral e importação segura de contratos e dados de clientes de planilhas ou sistemas antigos para o gateway ou ERP.",
    deliverables: [
      "Higienização de CPFs/CNPJs e dados de contato",
      "Importação em lote de contratos e mensalidades ativas",
      "Validação de dados fiscais para emissão de NFS-e sem erros"
    ],
    timeline: "2 a 4 dias úteis",
    ctaText: "Contratar Migração"
  },
  {
    id: "homologacao-nfse",
    title: "Homologação & Parametrização de NFS-e Municipal",
    badge: "Fiscal & Tributário",
    description: "Configuração e homologação do certificado digital (A1), códigos de serviço municipal, alíquotas de ISS e retenções para emissão 100% automática.",
    deliverables: [
      "Instalação e validação do Certificado Digital A1",
      "Parametrização de CNAE, códigos de tributação e alíquotas municipais",
      "Testes em ambiente de homologação e produção com a prefeitura"
    ],
    timeline: "3 a 5 dias úteis",
    ctaText: "Homologar NFS-e"
  },
  {
    id: "recuperacao-passivo",
    title: "Campanha Emergencial de Recuperação de Inadimplência",
    badge: "Recuperação de Caixa",
    description: "Estruturação de régua emergencial com condições especiais, links Pix dinâmicos e disparo assistido para recuperar valores vencidos há mais de 30 dias.",
    deliverables: [
      "Estratégia de descontos progressivos e parcelamentos no Pix/Cartão",
      "Disparo multicanal (WhatsApp Oficial + E-mail + SMS)",
      "Dashboard de acompanhamento em tempo real de valores recuperados"
    ],
    timeline: "3 a 7 dias úteis",
    ctaText: "Recuperar Caixa Vencido"
  },
  {
    id: "treinamento-equipe",
    title: "Treinamento VIP & Capacitação da Equipe Financeira",
    badge: "Capacitação & PMO",
    description: "Sessão prática gravada e documentação passo a passo para que seu time financeiro opere o novo ecossistema com máxima eficiência e sem dúvidas.",
    deliverables: [
      "Workshop online ao vivo de 2 horas com simulações reais",
      "Manual de Procedimento Operacional Padrão (POP) em PDF",
      "Gravação completa em alta definição para onboarding de novos membros"
    ],
    timeline: "1 dia útil",
    ctaText: "Agendar Treinamento"
  }
];

export const integrationsList = [
  { name: "Asaas", category: "Gateway & NFS-e Oficial", highlight: "Parceiro Oficial • Emissão Automática de NFS-e" },
  { name: "Omie", category: "ERP de Gestão", highlight: "Sincronização de Contratos & Baixa Automática" },
  { name: "Conta Azul", category: "ERP Financeiro", highlight: "Conciliação Bancária em Tempo Real" },
  { name: "WhatsApp Cloud API", category: "Comunicação Oficial", highlight: "Régua Inteligente & Agente de IA 24/7" },
  { name: "Make / n8n", category: "Automação & Webhooks", highlight: "Fluxos de Dados e Triggers Personalizados" },
  { name: "Trello & ClickUp", category: "Gestão Operacional", highlight: "Criação de Cards de Onboarding de Clientes" },
  { name: "Google Sheets", category: "Relatórios & BI", highlight: "Dashboards e Fechamento em Tempo Real" },
  { name: "HubSpot & RD Station", category: "CRM de Vendas", highlight: "Geração Automática de Contrato pós-venda" }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "case-1",
    name: "Rodrigo Mendonça",
    role: "Sócio Diretor",
    company: "Nexum Consultoria Empresarial & BPO",
    segment: "Consultorias & B2B",
    quote: "Nosso time perdia quase dois dias todo mês emitindo notas fiscais de serviço manualmente e ligando para clientes com mensalidade em atraso. Com a consultoria do Pablo, tudo passou a rodar 100% automático. A inadimplência caiu 65% em dois meses.",
    metricHighlight: "-65% de Inadimplência",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "case-2",
    name: "Dra. Camila Guimarães",
    role: "Diretora Clínica",
    company: "Instituto Renaissance Estética & Saúde",
    segment: "Clínicas & Procedimentos",
    quote: "O Agente de IA no WhatsApp é espetacular. Ele atende nossos pacientes de tratamentos contínuos com uma educação ímpar, envia o Pix na hora e concilia no sistema. Não temos mais constrangimento em cobrar.",
    metricHighlight: "+35h/mês economizadas no financeiro",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "case-3",
    name: "Vinícius Alvarenga",
    role: "CEO & Co-fundador",
    company: "Pulse Media Agência Digital & Tráfego",
    segment: "Agências & SaaS",
    quote: "A integração do nosso ERP com os meios de pagamento e o split de comissões para nossos gestores de tráfego organizou totalmente nossa casa. O Pablo entrega visão de negócio e processo, não apenas configuração técnica.",
    metricHighlight: "100% das NFs emitidas sem erro",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

export const faqData: FaqItem[] = [
  {
    question: "Como funciona a emissão automática de Notas Fiscais (NFS-e)?",
    answer: "Configuramos a integração para que, assim que a fatura do contrato de serviço for liquidada (por Pix, boleto ou cartão), o sistema comunique diretamente com a prefeitura do seu município, emita a NFS-e e envie o link e o PDF da nota fiscal direto para o cliente por WhatsApp e e-mail, sem que ninguém da sua equipe precise digitar nada."
  },
  {
    question: "Minha empresa já utiliza um ERP (Omie, Conta Azul ou outro). Vou precisar trocar de sistema?",
    answer: "Não. A consultoria é desenhada exatamente para integrar com o seu sistema de gestão atual. Conectamos os meios de pagamento e a inteligência de cobrança diretamente ao seu ERP via APIs e Webhooks oficiais. Quando o cliente paga, a baixa é realizada no seu sistema automaticamente."
  },
  {
    question: "O que é a régua de cobrança inteligente com Agente de IA?",
    answer: "É uma esteira automatizada que envia lembretes preventivos antes do vencimento e, em caso de atraso, ativa um assistente no WhatsApp oficial da sua empresa. A IA conversa de forma cordial, tira dúvidas sobre o serviço prestado, propõe alternativas de pagamento de acordo com as diretrizes da sua empresa e gera o Pix na hora."
  },
  {
    question: "Minha empresa atua com serviços recorrentes / mensalidades. O que muda?",
    answer: "Você ganha previsibilidade total. As faturas são geradas automaticamente na data certa, o cliente pode cadastrar o cartão para débito recorrente (sem comprometer o limite total) ou pagar via Pix Dinâmico com QR Code em 1 segundo. A inadimplência é reduzida drasticamente."
  },
  {
    question: "Qual é o tempo de implantação da consultoria?",
    answer: "Projetos de automação ágil (Planos Essencial e Start) costumam entrar em operação entre 3 e 10 dias úteis. Projetos completos com integração de ERP e Agente de IA (Plano Pro) são entregues em média de 15 a 20 dias úteis, com homologação e treinamento da sua equipe."
  },
  {
    question: "Como agendar o diagnóstico gratuito da minha operação de serviços?",
    answer: "Basta clicar em qualquer botão de agendamento no site ou chamar diretamente no WhatsApp. Agendaremos uma sessão de 30 minutos com Pablo Khoury para mapear seus processos, volume de contratos e estimar o ganho financeiro e de tempo da sua operação."
  }
];
