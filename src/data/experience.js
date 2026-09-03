export const experience = [
  {
    id: 4,
    company: 'Ocean Labs',
    url: 'https://tryocean.io',
    logo: null,
    role: 'CTO',
    location: 'Remote',
    description: 'Leading the technical vision for a HIPAA-regulated patient-clinician matching platform that pairs people with the right therapist, live at tryocean.io.',
    highlights: [
      'Architected the platform end to end with a Django REST API, PostgreSQL, Cloud Tasks async workers, and a Next.js/TypeScript frontend',
      'Designed an LLM-driven retrieve-and-rank matching engine scoring therapeutic alliance and patient-clinician compatibility',
      'Implemented security and compliance for PHI, including WebAuthn passkey MFA, column-level encryption, and field-level audit history',
    ],
    technologies: ['Django', 'PostgreSQL', 'GCP', 'Next.js', 'TypeScript', 'Claude API'],
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
    color: '#7A8FA6', // Dusk blue
  },
  {
    id: 2,
    company: 'Mercury Marketing',
    // ponytail: apex only, www.mercurymediatools.us is unbound in Railway and 404s
    url: 'https://mercurymediatools.us',
    logo: null,
    role: 'Software Engineer',
    location: 'Remote',
    // startDate: 'Nov 2025',
    // endDate: 'Feb 2026',
    description: 'Contract build of a multi-tenant marketing analytics platform managing campaigns across web, email, print, and social media for four client businesses.',
    highlights: [
      'Designed role-based access control with per-client data isolation, while parent companies keep visibility across their brands',
      'Automated Excel ingestion with Pandas, transforming thousands of advertising records into campaign insights and reporting',
      'Shipped real-time Recharts dashboards for campaign performance, deployed on Railway behind Cloudflare with migrations applied automatically on every deploy',
    ],
    technologies: ['Next.js', 'TypeScript', 'Flask', 'Pandas', 'Recharts', 'Railway', 'Cloudflare'],
    color: '#C97064', // Terracotta
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
    color: '#7A8FA6', // Dusk blue
  },
]
