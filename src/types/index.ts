export type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'messaging'
  | 'auth'
  | 'tools'
  | 'ai'
  | 'engineering';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  skills: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  githubRepos?: ProjectLink[];
  liveUrl?: string;
  videoUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  gpa?: number;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github?: string;
  portfolio?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export type Theme = 'light' | 'dark';
