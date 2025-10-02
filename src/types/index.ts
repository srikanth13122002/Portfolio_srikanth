export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
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
  achievements?: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github?: string;
  website?: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export interface AnimationConfig {
  duration: number;
  delay: number;
  easing: string;
}
