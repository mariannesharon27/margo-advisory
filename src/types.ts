export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  details: string[];
  keyQuestions: string[];
  whoItIsFor: string;
  iconName: string;
  category: string;
}

export interface JargonTerm {
  term: string;
  category: string;
  jargonDefinition: string;
  margoTranslation: string;
  whyItMatters: string;
}

export interface ClarityPath {
  id: string;
  /** Short topic for the tab. The full `question` is too long to read at tab
      size, and repeating it there duplicates the panel heading. */
  label: string;
  question: string;
  margoPerspective: string;
  actionSteps: string[];
  recommendedServices: string[];
}

export interface ContactState {
  name: string;
  topic: string;
  preferredChannel: 'whatsapp' | 'call' | 'email';
  message: string;
}
