export type ProjectCategory =
  | 'ACADEMIC PROJECT'
  | 'PERSONAL PROJECT'
  | 'OJT / INTERNSHIP'
  | 'PROFESSIONAL PROJECT'
  | 'CLIENT PROJECT'
  | 'EXPERIMENT'
  | 'OPEN SOURCE'
  | 'FUTURE PROJECT';

export type ProjectStatus = 'COMPLETED' | 'IN PRODUCTION' | 'ACTIVE' | 'ARCHIVED' | 'RESEARCH';

export interface Project {
  id: string;
  number: string; // e.g. '001'
  title: string;
  shortDescription: string;
  role: string;
  type: ProjectCategory;
  status: ProjectStatus;
  year: string;
  technologies: string[];
  context: string;
  problem: string;
  approach: string;
  implementation: string;
  result: string;
  whatILearned: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  architectureNotes?: string;
}

export type SkillLevel = 'EXPERIENCED' | 'WORKING KNOWLEDGE' | 'FAMILIAR';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  category: 'DEVELOPMENT' | 'WEB & SYSTEMS' | 'TOOLS & INFRASTRUCTURE' | 'METHODOLOGIES';
  notes?: string;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'OJT / INTERNSHIP' | 'STUDENT ASSISTANT' | 'LEADERSHIP' | 'FREELANCE / CONTRACT';
  location: string;
  summary: string;
  whatIDid: string[];
  whatILearned: string[];
  whatIContributed: string[];
  technologiesUsed: string[];
}

export interface Education {
  degree: string;
  program: string;
  university: string;
  yearStanding: string;
  expectedGraduation: string;
  location: string;
  highlights: string[];
  coursework: string[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  company?: string;
  details: string;
}

export interface InquiryFormErrors {
  name?: string;
  email?: string;
  details?: string;
}

export interface PerformanceTelemetry {
  ttfb: number | null;
  fcp: number | null;
  domComplete: number | null;
  connectionType?: string;
  memoryUsage?: string;
}
