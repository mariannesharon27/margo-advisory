import { ServiceItem, JargonTerm, ClarityPath } from '../types';

export const MARGO_CONTACT = {
  advisor: 'Marianne Gomes',
  licAgencyCode: '02788931',
  phone: '9930074680',
  formattedPhone: '+91 99300 74680',
  email: 'margoadvisory@gmail.com',
  whatsappUrl: 'https://wa.me/919930074680?text=Hello%20Margo%20Advisory%2C%20I%20would%20like%20to%20start%20a%20conversation%20about%20my%20financial%20planning.',
  location: 'Mumbai, India',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'investment-planning',
    title: 'Investment Planning',
    subtitle: 'Structuring your capital with intention & patience',
    tagline: 'Aligning your money with your actual life goals, time horizons, and risk comfort.',
    description: 'Investing shouldn\'t feel like gambling or following blind tips. We help you create a deliberate, structured investment approach tailored to your personal timeline.',
    details: [
      'Personalized risk profile assessment without automated formulas',
      'Short-term vs long-term capital allocation strategies',
      'Regular portfolio sanity checks and rebalancing guidelines',
      'Clear milestones for major life events (home, education, freedom)'
    ],
    keyQuestions: [
      'Am I taking too much or too little risk with my savings?',
      'How do I invest consistently without stressing over daily market noise?',
      'How much liquidity should I keep for emergencies?'
    ],
    whoItIsFor: 'Salaried professionals, business owners, and families looking for a structured, calm approach to wealth building.',
    iconName: 'Compass',
    category: 'Wealth Growth'
  },
  {
    id: 'mutual-funds',
    title: 'Mutual Funds',
    subtitle: 'Navigating choices with total transparency',
    tagline: 'Selecting equity, debt, and hybrid funds that fit your real needs.',
    description: 'With thousands of scheme options available, choosing mutual funds can feel overwhelming. We simplify the selection process based on fund fundamentals, expense efficiency, and fit.',
    details: [
      'Direct vs Regular fund structure clarity',
      'SIP (Systematic Investment Plan) structuring and step-up planning',
      'Category evaluation (Large Cap, Mid Cap, Flexi Cap, Index Funds, Debt)',
      'Tax implication analysis on fund redemptions'
    ],
    keyQuestions: [
      'Do I have overlapping funds in my portfolio?',
      'Should I invest in active funds or index funds?',
      'How do I step up my SIPs as my income grows?'
    ],
    whoItIsFor: 'Individuals seeking disciplined wealth creation without getting bogged down by fund marketing hype.',
    iconName: 'Layers',
    category: 'Wealth Growth'
  },
  {
    id: 'life-insurance',
    title: 'Life Insurance / LIC',
    subtitle: 'True protection without mixed investment promises',
    tagline: 'Evaluating term policies and existing LIC coverage for pure security.',
    description: 'Life insurance exists for one primary purpose: protecting your loved ones\' financial future. We help you evaluate pure term insurance versus endowment or ULIP policies clearly.',
    details: [
      'Human Life Value (HLV) calculation for adequate sum assured',
      'Review of existing traditional policies (LIC, Endowment, Moneyback)',
      'Rider evaluations (Critical Illness, Accidental Disability)',
      'Claim assistance structure and policy consolidation'
    ],
    keyQuestions: [
      'Is my current life cover actually sufficient for my family?',
      'Should I continue or surrender traditional policies that offer low yields?',
      'Which claim settlement record nuances actually matter?'
    ],
    whoItIsFor: 'Earning family members, parents, and anyone with financial dependents seeking peace of mind.',
    iconName: 'ShieldCheck',
    category: 'Protection'
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    subtitle: 'Safeguarding savings against unexpected medical costs',
    tagline: 'Demystifying room caps, waiting periods, and restoration benefits.',
    description: 'A single medical emergency shouldn\'t erase years of diligent savings. We guide you through health insurance coverage beyond standard employer-provided plans.',
    details: [
      'Individual vs Family Floater evaluation',
      'Super Top-up plans to increase coverage cost-effectively',
      'Detailed breakdown of sub-limits, co-payments, and restoration clauses',
      'Pre-existing disease (PED) waiting period navigation'
    ],
    keyQuestions: [
      'Is my corporate health policy enough if I change jobs?',
      'What are the hidden sub-limits in my health policy policy document?',
      'How do I build a personal medical reserve for senior family members?'
    ],
    whoItIsFor: 'Families and working individuals who want independent, comprehensive health coverage.',
    iconName: 'HeartPulse',
    category: 'Protection'
  },
  {
    id: 'itr-services',
    title: 'Income Tax Return (ITR) Services',
    subtitle: 'Compliant, stress-free tax filing and optimization',
    tagline: 'Filing accurately while legitimately optimizing tax liabilities.',
    description: 'Tax planning isn\'t just a last-minute scramble in March. We help you stay compliant, choose the right tax regime, and claim all legitimate deductions seamlessly.',
    details: [
      'Old vs New Tax Regime comparative analysis for your specific income',
      'Filing support for Salaried, Freelancers, and Capital Gain transactions',
      'Advance tax estimation and deadline tracking',
      'Deduction optimization under Section 80C, 80D, 24B, and 80CCD'
    ],
    keyQuestions: [
      'Which tax regime leaves me with higher take-home pay?',
      'How do I accurately report capital gains from stocks and mutual funds?',
      'Am I claiming all eligible tax deductions correctly?'
    ],
    whoItIsFor: 'Salaried employees, consultants, investors, and taxpayers looking for hassle-free accuracy.',
    iconName: 'FileText',
    category: 'Compliance'
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning & Guidance',
    subtitle: 'A holistic blueprint for your entire financial life',
    tagline: 'Connecting income, savings, investments, tax, and protection into one clear picture.',
    description: 'Money decisions rarely happen in isolation. Our holistic planning brings all pieces together into an integrated, easy-to-understand financial road map.',
    details: [
      'Net worth & cash flow mapping',
      'Emergency fund reserve calculation and placement',
      'Debt management and systematic loan payoff strategies',
      'Comprehensive life stage milestone planning'
    ],
    keyQuestions: [
      'Where does my money actually go each month?',
      'How do I balance spending today with saving for tomorrow?',
      'What are the priority steps I should take this quarter?'
    ],
    whoItIsFor: 'Anyone wanting a clear, honest overview of their complete financial health without sales pressure.',
    iconName: 'Sparkles',
    category: 'Holistic Guidance'
  }
];

export const WHY_MARGO_COMPARISON = [
  {
    topic: 'Initial Conversation',
    traditional: 'Pushes specific financial products right away based on current sales targets.',
    margo: 'Listens to your story, asks about your priorities, and seeks to understand your life first.'
  },
  {
    topic: 'Language & Terms',
    traditional: 'Uses complex industry jargon, dense disclosures, and intimidating acronyms.',
    margo: 'Explains concepts in plain, conversational English with real-world analogies.'
  },
  {
    topic: 'Product Recommendation',
    traditional: 'Highlights highest-commission or trending schemes regardless of actual fit.',
    margo: 'Explains pros, cons, and alternatives openly so you can make informed decisions.'
  },
  {
    topic: 'Ongoing Relationship',
    traditional: 'Disappears after the transaction or policy is sold.',
    margo: 'Remains on your side of the table for regular check-ins, questions, and life updates.'
  }
];

export const JARGON_TRANSLATIONS: JargonTerm[] = [
  {
    term: 'Term vs Endowment Insurance',
    category: 'Protection',
    jargonDefinition: 'Term insurance provides death benefit only during policy tenure. Endowment provides death benefit plus survival maturity payout.',
    margoTranslation: 'Term insurance is pure, low-cost protection (high cover for small cost). Endowment mixes insurance with low-yield savings. Keeping protection and investments separate is almost always wiser.',
    whyItMatters: 'Conflating savings with insurance often leaves families severely underinsured while locking up money in low-return products.'
  },
  {
    term: 'NAV (Net Asset Value)',
    category: 'Mutual Funds',
    jargonDefinition: 'The market value per share of a mutual fund scheme calculated by dividing total assets minus liabilities by total outstanding shares.',
    margoTranslation: 'It is simply the unit price of a mutual fund scheme today. A lower NAV does NOT mean a fund is "cheaper" or better than one with a higher NAV.',
    whyItMatters: 'A ₹10 NAV fund and a ₹100 NAV fund with identical portfolios will grow at the exact same percentage rate.'
  },
  {
    term: 'Super Top-up Health Cover',
    category: 'Health Insurance',
    jargonDefinition: 'An indemnity health insurance policy that triggers coverage once total accumulated medical claims exceed a deductible threshold.',
    margoTranslation: 'An affordable "booster" policy that kicks in if your hospital bill crosses a certain limit (like ₹5 Lakhs), giving you ₹20-50 Lakhs of extra cover for a fraction of the price.',
    whyItMatters: 'It is the most cost-effective way to protect against major medical catastrophes without paying massive base premiums.'
  },
  {
    term: 'Old vs New Tax Regime',
    category: 'Taxes',
    jargonDefinition: 'Divergent statutory tax structures under the Income Tax Act with differential slab rates and eligibility for exemptions under Chapter VI-A.',
    margoTranslation: 'Old Regime lets you reduce taxable income using investments (80C, HRA, Health Insurance). New Regime offers lower tax rates directly but removes most deductions.',
    whyItMatters: 'The best option depends entirely on your specific salary structure and existing investments, requiring a quick side-by-side calculation.'
  },
  {
    term: 'Asset Allocation',
    category: 'Investments',
    jargonDefinition: 'Strategic distribution of portfolio capital across uncorrelated asset classes to optimize risk-adjusted returns.',
    margoTranslation: 'Deciding how much of your savings sits in stable, safe buckets (like FD or debt funds) versus growth buckets (like equity mutual funds).',
    whyItMatters: 'It protects you from panic when stock markets drop, ensuring you always have safe money available when needed.'
  }
];

export const CLARITY_PATHS: ClarityPath[] = [
  {
    id: 'path-1',
    label: 'Starting to invest',
    question: 'I have savings in my bank account, but I don\'t know where to start investing.',
    margoPerspective: 'Starting is simpler than it seems. The first step isn\'t finding a "hot fund"—it\'s setting up a small emergency cushion, defining your horizon, and starting a comfortable monthly SIP.',
    actionSteps: [
      'Set aside 3 to 6 months of expenses in a liquid, easily accessible place',
      'Determine how much you can comfortably invest each month without feeling squeezed',
      'Start with 1-2 broad market funds suited for long-term growth'
    ],
    recommendedServices: ['Investment Planning', 'Mutual Funds']
  },
  {
    id: 'path-2',
    label: 'Reviewing my cover',
    question: 'I already have insurance, but I\'m not sure if it\'s the right type or sufficient amount.',
    margoPerspective: 'Many people hold policies bought years ago without knowing what they actually cover. We audit your existing policies to see if your coverage truly matches your current life stage.',
    actionSteps: [
      'Calculate pure replacement income needed for your dependents',
      'Check room-rent caps and waiting period clauses in health plans',
      'Consolidate multiple small policies into one clear, high-cover structure'
    ],
    recommendedServices: ['Life Insurance / LIC', 'Health Insurance']
  },
  {
    id: 'path-3',
    label: 'Tax planning',
    question: 'I want to optimize my income tax and stop March rush panic.',
    margoPerspective: 'Tax planning works best when integrated into your year-round cash flow, not as an impulsive last-minute investment in products you don\'t need.',
    actionSteps: [
      'Run a side-by-side comparison between Old and New Tax Regimes',
      'Align tax-saving investments (ELSS, NPS, Health) with real financial goals',
      'File accurately to avoid notices and claim legitimate refunds on time'
    ],
    recommendedServices: ['Income Tax Return (ITR) Services', 'Financial Planning & Guidance']
  },
  {
    id: 'path-4',
    label: 'A full review',
    question: 'I want a complete 360-degree review of my personal finances.',
    margoPerspective: 'We look at everything together—investments, insurances, emergency reserves, tax, and future goals—to build a single, calm roadmap.',
    actionSteps: [
      'Consolidate all bank accounts, mutual fund folios, and policies into one dashboard view',
      'Identify potential blind spots or high-cost inefficiencies',
      'Create a clear quarterly action plan that fits your lifestyle'
    ],
    recommendedServices: ['Financial Planning & Guidance', 'Investment Planning']
  }
];
