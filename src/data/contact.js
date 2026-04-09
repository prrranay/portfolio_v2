export const contactData = [
  { 
    label: 'Email', 
    value: 'pranay.dikonda.dev@gmail.com', 
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' 
  },
  { 
    label: 'GitHub', 
    value: 'github.com/prrranay', 
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' 
  },
  { 
    label: 'LinkedIn', 
    value: 'linkedin.com/in/pranay-kumarrr', 
    icon: 'M13 10V3L4 14h7v7l9-11h-7z' 
  }
];

export const personalInfo = {
  firstName: 'Pranay',
  lastName: 'Kumar',
  email: 'pranay.dikonda.dev@gmail.com',
  title: 'Full Stack Developer',
  subtitle: 'I build scalable backend systems with event-driven architecture and production-ready deployments.',
  techStack: 'Node.js • NestJS • Distributed Systems',
  github: 'https://github.com/prrranay',
  linkedin: 'https://linkedin.com/in/pranay-kumarrr'
};

export const terminalCommands = {
  help: 'Available commands: whoami, projects, skills, contact, clear',
  whoami: 'Pranay Kumar — Senior Backend Engineer. I specialize in building scalable distributed systems, event-driven architectures (Kafka), and high-performance APIs (Node.js/NestJS).',
  projects: '1. Full Stack Deployment System (GCP, Nginx, CI/CD)\n2. KYC Backend System (NestJS, Kafka, Redis)',
  skills: 'Backend: Node.js, NestJS, Go, Python\nDatabases: PostgreSQL, MongoDB, Redis\nInfrastructure: Docker, Kubernetes, GCP, AWS, Kafka',
  contact: `Email: ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}`,
  clear: 'CLEAR',
};

export const aboutData = {
  philosophyTitle: 'Engineering Philosophy',
  philosophySubtitle: 'I believe in building systems that aren\'t just functional, but resilient, scalable, and elegantly architected.',
  bio: [
    'Specializing in robust backend architectures, I design solutions that handle high throughput and complex data transformations seamlessly.',
    'My focus is always on creating an impenetrable foundation: ensuring data consistency through event-driven paradigms, optimizing query latency with proper caching strategies, and deploying via automated CI/CD pipelines.'
  ]
};
