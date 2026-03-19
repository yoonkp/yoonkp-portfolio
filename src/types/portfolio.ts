export interface ProofMetric {
  value: string;
  label: string;
  support: string;
  href?: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
}

export interface HeroSignal {
  eyebrow: string;
  title: string;
  lines: string[];
}

export interface DecisionItem {
  title: string;
  detail: string;
  impact: string;
}

export interface EvidenceBlock {
  title: string;
  caption: string;
  items: string[];
}

export interface CaseStudy {
  slug: string;
  theme: "samsung" | "edulime" | "lush";
  heroLabel: string;
  heroMetric: string;
  shortTitle: string;
  title: string;
  summary: string;
  teaser: string;
  previewImage: string;
  galleryImages: string[];
  domain: string;
  role: string;
  contribution: string;
  publicScope: string;
  stack: string[];
  outcomes: string[];
  context: string;
  roleLead: string;
  constraintsLead: string;
  evidenceLead: string;
  resultLead: string;
  constraints: string[];
  ownership: string[];
  decisions: DecisionItem[];
  evidenceBlocks: EvidenceBlock[];
  results: string[];
  reflection: string[];
}

export interface NowPillar {
  title: string;
  items: string[];
}

export interface NowBuilding {
  eyebrow: string;
  title: string;
  summary: string;
  publicNote: string;
  highlight: string;
  liveUrl?: string;
  pillars: NowPillar[];
}

export interface ExperienceItem {
  theme: "current" | "enterprise" | "consumer" | "foundation";
  stage: string;
  company: string;
  role: string;
  focus: string;
  decision: string;
  summary: string;
  highlights: string[];
  tags: string[];
}
