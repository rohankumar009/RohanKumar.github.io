export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export interface IntroData {
  name: string;
  headline: string;
  summary: string;
  location?: string;
  ctas: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
  tech: string[];
}

export interface SkillGroup {
  title: string;
  items: Array<{
    name: string;
    level?: SkillLevel;
  }>;
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface ContactData {
  email: string;
  github?: string;
  linkedin?: string;
  calendarUrl?: string;
}

export interface PortfolioData {
  intro: IntroData;
  experience: ExperienceItem[];
  skills: SkillGroup;
  languages: SkillGroup;
  projects: ProjectItem[];
  contact: ContactData;
}
