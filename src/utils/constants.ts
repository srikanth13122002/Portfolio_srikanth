import type { Skill, Project, Experience, Education, ContactInfo } from '../types';

export const CONTACT_INFO: ContactInfo = {
  email: 'srikanth13gk@gmail.com',
  phone: '+91 7448575334',
  location: 'Puducherry, India',
  linkedin: 'https://www.linkedin.com/in/srikanth13gk',
  github: 'https://github.com/srikanth13gk'
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', level: 'advanced' },
  { name: 'Next.js', category: 'frontend', level: 'beginner' },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 'intermediate' },
  { name: 'TypeScript', category: 'frontend', level: 'intermediate' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'advanced' },
  { name: 'Redux', category: 'frontend', level: 'advanced' },
  { name: 'Redux Saga', category: 'frontend', level: 'advanced' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 'intermediate' },
  { name: 'NestJS', category: 'backend', level: 'intermediate' },
  
  // Database
  { name: 'MongoDB', category: 'database', level: 'intermediate' },
  { name: 'Supabase (PostgreSQL)', category: 'database', level: 'intermediate' },
  
  // Other
  { name: 'Git', category: 'other', level: 'advanced' },
  { name: 'Bitbucket', category: 'other', level: 'intermediate' },
  { name: 'REST API', category: 'other', level: 'intermediate' },
  { name: 'CRUD operations', category: 'other', level: 'advanced' },
  { name: 'Responsive design', category: 'other', level: 'advanced' },
  { name: 'Role-based workflows', category: 'other', level: 'intermediate' }
];

export const PROJECTS: Project[] = [
  {
    id: 'scamdetect',
    title: 'ScamDetect',
    description: 'Community-powered platform to report, verify, and prevent scams, helping users stay protected from fraudulent activities',
    technologies: ['React.js', 'NestJS', 'MongoDB', 'TensorFlow', 'AI/ML'],
    liveUrl: 'https://mvp.edetectives.co.bw/signin',
    videoUrl: 'https://screenapp.io/app/#/shared/AZv4TjVang',
    featured: true
  },
  {
    id: 'myworksphere',
    title: 'MyWorkSphere',
    description: 'Centralized work management platform for emails, tasks, calendars, and files, designed to improve productivity and collaboration',
    technologies: ['React.js', 'Node.js', 'Supabase', 'Tailwind CSS'],
    liveUrl: 'https://www.myworksphere.com/',
    videoUrl: 'https://youtu.be/kUvIf7TN9eo?si=0Xq7KVLLYDeATE0z',
    featured: true
  },
  {
    id: 'ehrdc',
    title: 'eHRDC',
    description: 'Government-backed system for registering learners and training providers, tracking courses, and processing training reimbursements',
    technologies: ['React.js', 'Java', 'Spring Boot', 'MySQL'],
    liveUrl: 'https://hrdcdev.weblogic.co.bw/',
    videoUrl: 'https://screenapp.io/app/#/shared/-YvO2BWQB6',
    featured: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'vcodewonders',
    title: 'Junior Software Developer',
    company: 'VcodeWonders',
    location: 'Remote',
    startDate: 'Jul 2024',
    endDate: 'Present',
    description: [
      'Developed full-stack applications using React.js, Node.js, and NestJS',
      'Built REST APIs with MongoDB and Supabase integration',
      'Implemented Redux & Redux Saga for scalable frontend state management',
      'Managed role-based workflows and Git/Bitbucket versioning'
    ],
    technologies: ['React.js', 'Node.js', 'NestJS', 'MongoDB', 'Supabase', 'Redux', 'Redux Saga']
  }
];

export const EDUCATION: Education = {
  degree: 'B.Tech – Computer Science and Engineering',
  institution: 'Sri Manakula Vinayagar Engineering College',
  location: 'Puducherry',
  startYear: 2020,
  endYear: 2024,
  gpa: 7.7,
  achievements: ['Dean\'s List', 'Project Excellence Award']
};

export const NAV_ITEMS = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];
