import type { ContactInfo, SkillGroup, Project, Experience, Education, NavItem } from '../types';

export const CONTACT_INFO: ContactInfo = {
  email: 'srikanth13gk@gmail.com',
  phone: '+91 7448575334',
  location: 'Puducherry, India',
  linkedin: 'https://www.linkedin.com/in/srikanth13gk',
  github: 'https://github.com/srikanth13122002',
  portfolio: 'https://portfolio-srikanth-eta.vercel.app',
};

export const PROFESSIONAL_SUMMARY =
  'Software Developer with 2.2 years of experience building scalable, responsive, and high-performance web applications using React.js, Next.js, TypeScript, and NestJS. Experienced in developing AI-powered platforms, SaaS applications, real-time systems, and cloud-native solutions. Skilled in frontend architecture, state management, API development, event-driven systems, chatbot integrations, and LLM-powered applications using OpenAI and AWS Bedrock. Passionate about building maintainable software with exceptional user experiences and scalable system design.';

export const ACHIEVEMENTS: string[] = [
  'Built AI-powered applications integrating OpenAI and AWS Bedrock',
  'Developed real-time systems using WebSockets, SSE, Redis, RabbitMQ, and AWS SQS',
  'Experienced in designing scalable frontend architectures with React.js and Next.js',
  'Delivered SaaS, workflow automation, cybersecurity, and AI-powered products used in production environments',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'frontend',
    title: 'Frontend',
    skills: [
      'React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Vite',
      'Redux Toolkit', 'Redux', 'React Router', 'React Flow', 'Tailwind CSS',
      'shadcn/ui', 'Formik', 'Yup', 'Monaco Editor', 'Three.js',
      'Chart.js', 'Recharts', 'HTML5', 'CSS3', 'Responsive Web Design',
    ],
  },
  {
    category: 'backend',
    title: 'Backend',
    skills: [
      'NestJS', 'Node.js', 'REST APIs', 'JWT Authentication', 'RBAC',
      'WebSockets', 'Server-Sent Events (SSE)', 'Microservices Architecture',
    ],
  },
  {
    category: 'database',
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'Redis'],
  },
  {
    category: 'cloud',
    title: 'Cloud & Infrastructure',
    skills: ['AWS S3', 'AWS Bedrock', 'AWS SQS', 'Google Cloud Storage', 'Docker'],
  },
  {
    category: 'messaging',
    title: 'Messaging & Communication',
    skills: ['RabbitMQ', 'SendGrid', 'WhatsApp Business API'],
  },
  {
    category: 'auth',
    title: 'Authentication',
    skills: ['Clerk', 'NextAuth', 'GitHub OAuth'],
  },
  {
    category: 'tools',
    title: 'Development Tools',
    skills: ['Git', 'GitLab', 'Bitbucket', 'Prisma', 'Swagger', 'Postman', 'JIRA'],
  },
  {
    category: 'ai',
    title: 'AI & Modern Technologies',
    skills: [
      'OpenAI API', 'AI Chatbots', 'Conversational AI', 'LLM Integrations',
      'Agentic AI Workflows', 'Real-Time AI Streaming', 'Prompt Engineering',
      'AI Workflow Automation',
    ],
  },
  {
    category: 'engineering',
    title: 'Engineering Concepts',
    skills: [
      'Scalable Frontend Architecture', 'Performance Optimization',
      'Event-Driven Architecture', 'Queue-Based Processing',
      'Async Job Processing', 'Component-Driven Development', 'SEO Optimization',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'codelessiq',
    title: 'CodelessIQ',
    subtitle: 'AI-Powered Full-Stack Application Builder',
    description:
      'An AI-powered application builder that transforms natural language prompts into production-ready React applications through a clarification → planning → code generation workflow.',
    highlights: [
      'React 19 IDE-style workspace with file explorer, AI code streams, and Monaco editor',
      'Scalable NestJS backend with 20+ modules and Rust-based AI engine via WebSockets',
      'SSE/WebSocket streaming, RabbitMQ job orchestration, and Docker live previews',
    ],
    technologies: [
      'React.js', 'TypeScript', 'NestJS', 'Rust', 'MongoDB', 'Redis',
      'RabbitMQ', 'WebSockets', 'SSE', 'Docker', 'Tailwind CSS',
    ],
    featured: true,
  },
  {
    id: 'scamdetect',
    title: 'ScamDetect (MVP)',
    subtitle: 'Cyberattack Reporting Platform',
    description:
      'Secure cyberattack reporting platform enabling users to report, track, and manage cybersecurity incidents with AI-powered analysis.',
    highlights: [
      'AWS Bedrock & OpenAI integration for incident analysis and risk assessment',
      'WhatsApp chatbot for conversational report submission and status updates',
      'AWS SQS async processing with WebSocket real-time notifications',
    ],
    technologies: [
      'React.js', 'NestJS', 'MongoDB', 'AWS Bedrock', 'AWS SQS',
      'OpenAI API', 'WhatsApp Business API', 'WebSockets',
    ],
    liveUrl: 'https://mvp.edetectives.co.bw/signin',
    videoUrl: 'https://screenapp.io/app/#/shared/AZv4TjVang',
    featured: true,
  },
  {
    id: 'myworksphere',
    title: 'MyWorkSphere',
    subtitle: 'SaaS Productivity Platform',
    description:
      'Scalable SaaS platform for client management, task tracking, social media management, and workflow automation.',
    highlights: [
      'JIRA-inspired task assignment and dashboard system',
      'Reduced page load times by 25% through performance optimization',
      'Redis caching, cron jobs, and background processing',
    ],
    technologies: ['Next.js', 'NestJS', 'Supabase', 'Prisma', 'Redis', 'PostgreSQL'],
    liveUrl: 'https://www.myworksphere.com/',
    videoUrl: 'https://youtu.be/kUvIf7TN9eo?si=0Xq7KVLLYDeATE0z',
    featured: true,
  },
  {
    id: 'hrdc',
    title: 'HRDC Botswana',
    subtitle: 'Workflow Management System',
    description:
      'Multi-level workflow management platform supporting Agent, Officer, Manager, and Admin roles with dynamic forms and approval workflows.',
    highlights: [
      'Improved operational workflow efficiency by 40% through automation',
      'WebSocket-based real-time communication across roles',
      'Structured reporting with form validation and RBAC',
    ],
    technologies: ['React.js', 'WebSockets'],
    liveUrl: 'https://hrdcdev.weblogic.co.bw/',
    videoUrl: 'https://screenapp.io/app/#/shared/-YvO2BWQB6',
    featured: true,
  },
  {
    id: 'shopverse',
    title: 'ShopVerse',
    subtitle: 'Full-Stack Ecommerce Platform',
    description:
      'Modern ecommerce storefront with admin dashboard, JWT authentication, Stripe checkout, and a NestJS REST API backed by PostgreSQL and Prisma.',
    highlights: [
      'React 19 storefront with TanStack Query, Zustand, and React Hook Form + Zod validation',
      'NestJS backend with JWT refresh tokens, Swagger docs, and Stripe webhooks',
      'Admin dashboard for products, orders, categories, and user management',
    ],
    technologies: [
      'React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'NestJS', 'PostgreSQL',
      'Prisma', 'Stripe', 'JWT', 'TanStack Query', 'Zustand',
    ],
    githubRepos: [
      {
        label: 'Frontend',
        url: 'https://github.com/srikanth13122002/Ecommerce-frontend',
      },
      {
        label: 'Backend',
        url: 'https://github.com/srikanth13122002/Ecommerce-Backend',
      },
    ],
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    subtitle: 'Developer Portfolio Website',
    description:
      'Interactive personal portfolio built with React, TypeScript, and Tailwind CSS featuring dark/light theme, WebGL shader backgrounds, and scroll animations.',
    highlights: [
      'WebGL shader backgrounds with Three.js and animated UI components',
      'Professional folder structure with reusable sections and theme context',
      'Deployed on Vercel with responsive design across all devices',
    ],
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Three.js', 'Lucide Icons'],
    githubUrl: 'https://github.com/srikanth13122002/Portfolio_srikanth',
    liveUrl: 'https://portfolio-srikanth-eta.vercel.app',
    featured: true,
  },
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
      'Developed scalable web applications using React.js, Next.js, TypeScript, and NestJS',
      'Built reusable and maintainable UI component libraries that improved development efficiency',
      'Implemented Redux Toolkit and Redux for complex state management and asynchronous workflows',
      'Designed and integrated RESTful APIs for multiple enterprise and SaaS products',
      'Developed secure backend services using NestJS and MongoDB',
      'Optimized application performance using lazy loading, code splitting, and efficient data-fetching',
      'Ensured responsive design and cross-browser compatibility across desktop and mobile platforms',
      'Collaborated with cross-functional teams in agile development environments',
    ],
    technologies: [
      'React.js', 'Next.js', 'TypeScript', 'NestJS', 'Node.js',
      'MongoDB', 'Redux Toolkit', 'Redux', 'Tailwind CSS',
    ],
  },
];

export const EDUCATION: Education = {
  degree: 'Bachelor of Technology (B.Tech) – Computer Science and Engineering',
  institution: 'Sri Manakula Vinayagar Engineering College',
  location: 'Puducherry',
  startYear: 2020,
  endYear: 2024,
  gpa: 7.72,
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const HERO_STATS = [
  { label: 'Years Experience', value: 2.2, suffix: '+', decimals: 1, icon: 'clock' as const },
  { label: 'Projects Delivered', value: 6, suffix: '+', icon: 'rocket' as const },
  { label: 'Tech Stack', value: 30, suffix: '+', icon: 'layers' as const },
];

export const TYPING_ROLES = [
  'Software Developer',
  'Full-Stack Engineer',
  'AI Platform Builder',
  'React & NestJS Specialist',
];
