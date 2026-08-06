export const experience = [
  {
    id: 4,
    company: 'Ocean Labs',
    logo: null,
    role: 'CTO',
    location: 'Remote',
    description: 'Leading the technical vision for a HIPAA-regulated patient–clinician matching platform that pairs people with the right therapist, live at tryocean.io.',
    highlights: [
      'Architected the platform end to end: Django REST API, PostgreSQL with pgvector, Celery/Redis async workers, and a Next.js/TypeScript frontend',
      'Designed an LLM-driven retrieve-and-rank matching engine scoring therapeutic alliance and patient–clinician compatibility',
      'Implemented security and compliance for PHI: WebAuthn passkey MFA, column-level encryption, and field-level audit history',
    ],
    technologies: ['Django', 'PostgreSQL', 'pgvector', 'Celery', 'Redis', 'Next.js', 'TypeScript', 'Claude API'],
    color: '#C97064', // Terracotta
  },
  {
    id: 1,
    company: 'iNDEMAND',
    logo: null,
    role: 'Full-Stack Developer',
    location: 'Remote',
    // startDate: 'August 2022',
    // endDate: 'Oct 2025',
    description: 'Building scalable backend systems and responsive interfaces for high-traffic media applications.',
    highlights: [
      'Developed RESTful APIs in Python/Django with metadata transformation and video transcoding integration',
      'Optimized PostgreSQL and Redis schemas, reducing query execution times by 35%',
      'Enhanced security with Hashicorp Vault integration and private networking architecture',
      'Built responsive React.js/TypeScript interfaces for seamless data retrieval',
    ],
    technologies: ['Python', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Hashicorp Vault', 'AWS'],
    color: '#D4A373', // Warm tan
  },
  {
    id: 2,
    company: 'Mercury Marketing',
    logo: null,
    role: 'Software Engineer',
    location: 'Remote',
    // startDate: 'Oct 2025',
    // endDate: 'Present',
    description: 'Full-stack development of marketing analytics dashboards and automation tools for data-driven campaign management.',
    highlights: [
      'Built RESTful APIs serving 500K+ daily requests with 99.9% uptime',
      'Reduced page load times by 40% through performance optimization',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    technologies: ['React', 'Next.js','Django', 'Recharts', 'Railway'],
    color: '#8A9B6E', // Sage
  },
  {
    id: 3,
    company: 'Bridgeport Film Festival',
    logo: null,
    role: 'Technical Director',
    location: 'Remote',
    // startDate: 'Jan 2020',
    // endDate: 'May 2022',
    description: 'Started my professional journey updating the festival website and building custom tools to manage submissions and event scheduling.',
    highlights: [
      'Maintained and enhanced the festival website',
      'Helped manage automated e-mail campaigns for 500+ subscribers',
      'Collaborated with the team to ensure smooth operations during the festival',
    ],
    technologies: ['HTML', 'JavaScript', 'CSS',],
    color: '#B5838D', // Dusty rose
  },
]
