import { Education, Experience, Project, SkillItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Leibern R. Vicente',
  title: 'IT Student / Developer / Technical Problem Solver',
  academicStanding: '4th Year Bachelor of Science in Information Technology',
  expectedGraduation: '2025 – 2026',
  email: 'leivcnt01@gmail.com',
  github: 'https://github.com/leivcnt01',
  linkedin: 'https://linkedin.com/in/leibern-vicente',
  phone: '+63 (912) 345-6789',
  location: 'Philippines',
  timezone: 'GMT+8 (PST / Asia/Manila)',
  status: 'Open for OJT, Graduate Engineering Roles & Technical Projects',
  tagline: 'BUILDING DIGITAL SYSTEMS FROM IDEA TO CODE.',
  summary:
    'Aspiring IT professional focused on bridging problem analysis and clean production code. Disciplined in web architecture, relational database design, and end-to-end technical systems. Committed to engineering software that operates reliably under real-world constraints.',
  thesis: 'I understand the problem, I think through the solution, and I build it.',
  positioning: 'Strategy meets production code with minimal handoffs.',
};

export const EDUCATION_DATA: Education = {
  degree: 'Bachelor of Science in Information Technology',
  program: 'Major in Enterprise Application Development & Network Systems',
  university: 'College of Information and Communications Technology',
  yearStanding: '4th Year Standing',
  expectedGraduation: 'Mid 2026',
  location: 'Philippines',
  highlights: [
    'Lead Systems Developer for Senior Capstone Research Project',
    'Consistent Academic Honors / Dean\'s List Recognition',
    'Active officer in College Student Association (CMCSA Liaison Head)',
    'Conducted technical workshops on Git version control for lower-year students',
  ],
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java / PHP)',
    'Database Management Systems & SQL Optimization',
    'Systems Analysis & Software Architecture',
    'Web Development & RESTful API Design',
    'Information Assurance & Network Security',
    'Human-Computer Interaction (HCI)',
    'Capstone Project / Systems Implementation',
  ],
};

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'exp-ojt',
    period: '2025 — PRESENT',
    role: 'IT Systems Intern (OJT)',
    organization: 'Enterprise IT & Infrastructure Services',
    type: 'OJT / INTERNSHIP',
    location: 'On-site / Hybrid',
    summary:
      'Supported production IT infrastructure, local server deployments, workstation diagnostics, and database query maintenance under senior engineering guidance.',
    whatIDid: [
      'Configured and deployed localized staging environments for enterprise line-of-business applications.',
      'Audited network endpoint connectivity, switch configurations, and active directory user permissions.',
      'Wrote structured SQL data-retrieval scripts and verified data backup integrity schedules.',
      'Collaborated with senior staff to document standard operating procedures (SOPs) for hardware and software rollouts.',
    ],
    whatILearned: [
      'The critical difference between isolated classroom development and production environment failure modes.',
      'Strict adherence to network security policies, least-privilege access, and change management logs.',
      'How to isolate root causes in multi-tier hardware and software systems under operational time pressure.',
    ],
    whatIContributed: [
      'Cut repetitive workstation configuration time by 35% through standardized scripted setup checklists.',
      'Identified and resolved 40+ hardware/network trouble tickets with zero SLA breaches during the rotation.',
    ],
    technologiesUsed: ['Windows Server', 'Linux / Bash', 'SQL / MySQL', 'Network Diagnostics', 'Active Directory', 'Git'],
  },
  {
    id: 'exp-sa',
    period: '2024 — 2025',
    role: 'Student Assistant — Computer Laboratories',
    organization: 'College Academic Support Services',
    type: 'STUDENT ASSISTANT',
    location: 'Academic Campus',
    summary:
      'Maintained university computer laboratory infrastructure, assisted faculty with lab software environments, and provided hands-on troubleshooting for 300+ students weekly.',
    whatIDid: [
      'Managed maintenance schedules, disk image restoration, and software stack installations across 5 computer laboratories (150+ workstations).',
      'Assisted instructors with programming laboratory configurations (Java JDK, Apache/PHP runtime, MySQL servers, and IDE tools).',
      'Monitored laboratory equipment integrity, power backups, and structured cabling.',
      'Conducted initial triage on student workstation crashes and software dependency conflicts.',
    ],
    whatILearned: [
      'Operational resilience and empathy when supporting users with varying technical literacy.',
      'Systematic workstation imaging, automated update scheduling, and hardware lifecycle auditing.',
      'How to communicate technical issues clearly to non-technical faculty and academic administrators.',
    ],
    whatIContributed: [
      'Built a centralized digital laboratory inventory log that eliminated missing equipment discrepancies.',
      'Prevented exam-day downtime by instituting a weekly pre-flight software verification protocol.',
    ],
    technologiesUsed: ['Hardware Triage', 'Disk Imaging', 'PHP / Apache Environment', 'MySQL Admin', 'Ethernet Cabling'],
  },
  {
    id: 'exp-cmcsa',
    period: '2024 — PRESENT',
    role: 'Head of Liaison Committee',
    organization: 'Computer & Mathematics College Student Association (CMCSA)',
    type: 'LEADERSHIP',
    location: 'Collegiate Organization',
    summary:
      'Direct external partnerships, inter-departmental communications, and industry guest speaker coordination for college-wide tech symposiums and hackathons.',
    whatIDid: [
      'Spearheaded liaison operations for the Annual ICT Week, coordinating with corporate sponsors, alumni developers, and guest speakers.',
      'Established formal communication channels with student organizations across neighboring engineering colleges.',
      'Co-developed an event registration and digital attendance check-in workflow for student participants.',
      'Chaired weekly committee meetings, delegated responsibilities to 8 committee members, and reported directly to executive board.',
    ],
    whatILearned: [
      'High-stakes stakeholder management and professional negotiation with corporate and academic partners.',
      'How to lead peers without formal corporate authority by setting clear technical goals and transparent tracking.',
      'Risk mitigation: handling sudden speaker cancellations or venue changes with prompt contingency plans.',
    ],
    whatIContributed: [
      'Secured 4 industry practitioners from leading tech firms as keynote speakers for the College Developer Summit.',
      'Digitized the participant attendance tracking process, eliminating manual paper rosters and cutting queue wait time by 60%.',
    ],
    technologiesUsed: ['Workflow Automation', 'Project Coordination', 'Google Workspace Tools', 'Technical Documentation'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-001',
    number: '001',
    title: 'Academic Records & Capstone Management System',
    shortDescription:
      'Full-lifecycle student capstone tracking system featuring role-based milestone reviews, document versioning, and adviser evaluation rubrics.',
    role: 'Lead Architect & Full-Stack Developer',
    type: 'ACADEMIC PROJECT',
    status: 'IN PRODUCTION',
    year: '2025',
    technologies: ['PHP 8.2', 'MySQL', 'JavaScript (ES6)', 'Tailwind CSS', 'Apache', 'Chart.js'],
    context:
      'Senior capstone submissions at CICT historically relied on disparate email attachments and printed manuscript revisions, causing lost reviewer feedback and missed deadline tracking.',
    problem:
      'Advisers, panel evaluators, and student teams lacked a single source of truth for manuscript versions, ethical clearance approvals, defense score computation, and milestone completion logs.',
    approach:
      'Designed a normalized relational schema with strict foreign key constraints and transaction boundaries. Developed an intuitive, role-based dashboard (Student, Adviser, Dean, Panelist) with structured submission gates.',
    implementation:
      'Built custom MVC architecture in PHP with prepared statements to prevent SQL injection. Implemented automated rubric score aggregation, PDF manuscript viewer, activity audit trail, and role-based session auth.',
    result:
      'Adopted by 32 capstone research groups and 14 faculty panelists during pilot semester, processing over 180 document revisions with zero data corruption incidents.',
    whatILearned: [
      'Designing strict multi-role permission matrices and defensive data access policies.',
      'Relational indexing strategies for efficient retrieval of multi-table academic audit records.',
      'Structuring user interfaces for both rushed students and detail-oriented academic evaluators.',
    ],
    metrics: [
      { label: 'Pilot Groups', value: '32 Teams' },
      { label: 'Revisions Tracked', value: '180+' },
      { label: 'Avg Submission Latency', value: '<180ms' },
    ],
    architectureNotes:
      'Monolithic MVC structure with clean separation between Data Access Objects (DAO), Service Layer, and View Templates. Bypassed heavy frameworks for minimal memory footprint on university hosting.',
  },
  {
    id: 'proj-002',
    number: '002',
    title: 'Distributed Inventory & Point-of-Sale Engine',
    shortDescription:
      'Offline-first desktop inventory management and receipt issuing application with transaction logging and low-stock alerting for small retail businesses.',
    role: 'Sole Developer',
    type: 'PERSONAL PROJECT',
    status: 'COMPLETED',
    year: '2024',
    technologies: ['Java (JDK 21)', 'JavaFX', 'SQLite', 'JDBC', 'Maven', 'CSS'],
    context:
      'A neighborhood commercial store struggled with frequent internet dropouts that halted cloud-based POS terminals, leading to long customer queues and unrecorded sales discrepancies.',
    problem:
      'Retail operations required a rock-solid, zero-network-dependent inventory checkout system that prevents concurrent stock overselling and provides fast daily sales summaries.',
    approach:
      'Engineered an ACID-compliant Java desktop application using embedded SQLite. Implemented an asynchronous database worker thread to keep the JavaFX UI thread fluid at 60fps during barcode scans.',
    implementation:
      'Constructed modular views with FXML and custom CSS styling. Features SKU barcode scanner parsing, automatic VAT and discount calculations, low-stock visual warning triggers, and printable ESC/POS thermal receipt rendering.',
    result:
      'Demonstrated 100% uninterrupted offline operation during stress testing of 10,000 synthetic transaction records with sub-10ms lookup latency per SKU.',
    whatILearned: [
      'Multithreading concurrency in UI desktop software using Java Task / Service abstractions.',
      'Database transaction isolation levels and atomic batch inserts in SQLite.',
      'Designing hardware-friendly keyboard navigation shortcuts for fast cashier workflow.',
    ],
    metrics: [
      { label: 'Offline Availability', value: '100%' },
      { label: 'SKU Search Latency', value: '<8ms' },
      { label: 'Tested Records', value: '10,000+' },
    ],
  },
  {
    id: 'proj-003',
    number: '003',
    title: 'CMCSA Event Registration & Liaison Workflow Hub',
    shortDescription:
      'Web-based event registration portal with QR-based credential check-in, real-time venue headcount tracking, and speaker communication logs.',
    role: 'Full-Stack Developer & Liaison Lead',
    type: 'CLIENT PROJECT',
    status: 'COMPLETED',
    year: '2024',
    technologies: ['TypeScript', 'Node.js', 'Express', 'React', 'Tailwind CSS', 'HTML5 QR Scanner'],
    context:
      'Collegiate technology conferences experienced severe congestion at entry gates due to paper attendance sheets, causing 45-minute event delays and unreliable student attendance verification.',
    problem:
      'The student liaison committee needed a reliable, mobile-responsive gate check-in tool that could validate digital badges under poor mobile carrier connectivity.',
    approach:
      'Created a single-page progressive registration flow that issues a signed unique token encoded in a QR badge. Built an ultra-lightweight scanner interface for committee marshals.',
    implementation:
      'Built a lightweight Express REST API with client-side caching. Marshals scanned attendees using browser cameras with real-time audio chime confirmation and live capacity telemetry.',
    result:
      'Checked in 480 conference delegates across 3 entry doors in under 20 minutes, reducing average check-in time per student from 45 seconds to 2.5 seconds.',
    whatILearned: [
      'Client-side QR code camera decoding and touch-friendly mobile interface constraints.',
      'Handling bursts of simultaneous network check-in queries on budget hosting.',
      'Translating non-technical committee marshal feedback into immediate UI improvements.',
    ],
    metrics: [
      { label: 'Peak Check-In Speed', value: '2.5s / attendee' },
      { label: 'Delegates Checked In', value: '480' },
      { label: 'Registration Accuracy', value: '100%' },
    ],
  },
  {
    id: 'proj-004',
    number: '004',
    title: 'HTTP Endpoint Latency & Health Micro-Benchmarker',
    shortDescription:
      'Developer CLI tool and visual dashboard for continuous ping monitoring, jitter inspection, and SSL expiration warnings on internal server services.',
    role: 'Developer & Experimenter',
    type: 'EXPERIMENT',
    status: 'ACTIVE',
    year: '2025',
    technologies: ['TypeScript', 'Node.js', 'Vite', 'React', 'Web Workers', 'Tailwind CSS'],
    context:
      'Needed a quick, reproducible method to monitor the availability, TTFB, and response size of local microservices without configuring heavy enterprise monitoring agents.',
    problem:
      'Existing cloud APM tools require complex agent installations and external egress access that is not always permitted on internal campus lab networks.',
    approach:
      'Built a headless Node.js daemon paired with a real-time reactive web dashboard that measures time-to-first-byte, DNS resolution timing, and HTTP status codes via standard network sockets.',
    implementation:
      'Leveraged Node.js native `http`/`https` modules with high-resolution performance timers (`process.hrtime.bigint`). Plotted rolling latency histograms and status timelines using SVG bar graphs.',
    result:
      'Used across laboratory servers to identify intermittent DNS lookup delays caused by a misconfigured campus gateway.',
    whatILearned: [
      'The mechanics of the TCP handshake, TLS negotiation, and TTFB phases in HTTP lifecycles.',
      'Writing performant, zero-external-dependency Node.js network scripts.',
    ],
    metrics: [
      { label: 'Footprint', value: '<12MB RAM' },
      { label: 'Sample Resolution', value: '1ms precision' },
    ],
  },
  {
    id: 'proj-005',
    number: '005',
    title: 'Academic Curriculum Prerequisite Graph Engine',
    shortDescription:
      'Interactive visual DAG (Directed Acyclic Graph) tool allowing IT students to simulate semester enrollments, detect bottleneck courses, and map graduation tracks.',
    role: 'Frontend & Algorithm Developer',
    type: 'PERSONAL PROJECT',
    status: 'COMPLETED',
    year: '2024',
    technologies: ['JavaScript', 'Canvas API', 'HTML5', 'CSS Grid', 'Graph Algorithms (Topological Sort)'],
    context:
      'Students frequently fail to identify prerequisite chains, leading to unexpected irregular student status when a sequential course is failed or postponed.',
    problem:
      'Curriculum checklists were distributed as static PDFs, making it difficult for students to visualize downstream prerequisite impacts.',
    approach:
      'Modeled the official 4-year BSIT curriculum as a Directed Acyclic Graph. Implemented a topological sorting algorithm and critical path calculation in pure JavaScript.',
    implementation:
      'Rendered a responsive interactive node graph using HTML5 Canvas and CSS Grid with color-coded nodes (Completed, Eligible, Locked, Critical Path). Allows toggling course grades to dynamically update downstream statuses.',
    result:
      'Shared with over 150 lower-year IT students during academic advising periods, earning positive commendations from department chairs.',
    whatILearned: [
      'Practical implementation of graph data structures and cycle detection algorithms.',
      'Canvas coordinate transformations, pan-zoom math, and high-DPI canvas rendering.',
    ],
    metrics: [
      { label: 'Student Users', value: '150+' },
      { label: 'Graph Nodes Evaluated', value: '54 Courses' },
    ],
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // DEVELOPMENT
  { name: 'PHP', level: 'EXPERIENCED', category: 'DEVELOPMENT', notes: 'Core OOP, MVC patterns, PDO, REST backend' },
  { name: 'Java', level: 'EXPERIENCED', category: 'DEVELOPMENT', notes: 'Core Java, OOP principles, JavaFX, JDBC' },
  { name: 'JavaScript (ES6+)', level: 'EXPERIENCED', category: 'DEVELOPMENT', notes: 'Asynchronous flow, DOM API, modular JS' },
  { name: 'TypeScript', level: 'WORKING KNOWLEDGE', category: 'DEVELOPMENT', notes: 'Strict typing, interfaces, generic models' },
  { name: 'SQL', level: 'EXPERIENCED', category: 'DEVELOPMENT', notes: 'Schema design, indexes, joins, ACID transactions' },
  { name: 'HTML5 & Semantic Web', level: 'EXPERIENCED', category: 'DEVELOPMENT', notes: 'Accessible markup, WCAG AA, SEO schema' },
  { name: 'CSS3 & Tailwind CSS', level: 'EXPERIENCED', category: 'DEVELOPMENT', notes: 'Design systems, responsive grids, utilities' },

  // WEB & SYSTEMS
  { name: 'Frontend Architecture', level: 'EXPERIENCED', category: 'WEB & SYSTEMS', notes: 'Component hierarchy, state flows, React' },
  { name: 'Backend API Design', level: 'WORKING KNOWLEDGE', category: 'WEB & SYSTEMS', notes: 'RESTful endpoints, JSON standards, status codes' },
  { name: 'Relational Database Design', level: 'EXPERIENCED', category: 'WEB & SYSTEMS', notes: 'MySQL, PostgreSQL, SQLite, 3NF normalization' },
  { name: 'Session & Auth Security', level: 'WORKING KNOWLEDGE', category: 'WEB & SYSTEMS', notes: 'Password hashing (bcrypt), JWT, RBAC guards' },
  { name: 'HTTP & Network Protocols', level: 'WORKING KNOWLEDGE', category: 'WEB & SYSTEMS', notes: 'TCP/IP, DNS, SSL/TLS, request headers' },
  { name: 'Responsive UI / Mobile-First', level: 'EXPERIENCED', category: 'WEB & SYSTEMS', notes: 'Breakpoint mechanics, touch targets, Swiss grid' },

  // TOOLS & INFRASTRUCTURE
  { name: 'Git & GitHub', level: 'EXPERIENCED', category: 'TOOLS & INFRASTRUCTURE', notes: 'Branching, PRs, merge workflows, CLI' },
  { name: 'VS Code & JetBrains IDEs', level: 'EXPERIENCED', category: 'TOOLS & INFRASTRUCTURE', notes: 'Extensions, debugging, workspace configs' },
  { name: 'Vite & Build Tooling', level: 'WORKING KNOWLEDGE', category: 'TOOLS & INFRASTRUCTURE', notes: 'Asset pipeline, HMR, bundling optimizations' },
  { name: 'Linux Command Line', level: 'WORKING KNOWLEDGE', category: 'TOOLS & INFRASTRUCTURE', notes: 'Bash scripting, file permissions, SSH, systemctl' },
  { name: 'Postman', level: 'WORKING KNOWLEDGE', category: 'TOOLS & INFRASTRUCTURE', notes: 'API endpoint testing, header & payload verification' },
  { name: 'Vercel / Cloud Platforms', level: 'WORKING KNOWLEDGE', category: 'TOOLS & INFRASTRUCTURE', notes: 'Deployment hooks, environment variables' },

  // METHODOLOGIES
  { name: 'Systems Analysis & Design', level: 'EXPERIENCED', category: 'METHODOLOGIES', notes: 'DFDs, ERDs, use-case modeling, requirements' },
  { name: 'Technical Documentation', level: 'EXPERIENCED', category: 'METHODOLOGIES', notes: 'Architectural summaries, user manuals, API specs' },
  { name: 'Problem Decomposition', level: 'EXPERIENCED', category: 'METHODOLOGIES', notes: 'Breaking complex business needs into clean modules' },
];

export const ABOUT_PROFILE_DATA = {
  whoIAm:
    "I am a fourth-year Information Technology student based in the Philippines, preparing to transition into full-time software engineering and systems development. Rather than treating code as an isolated technical exercise, I focus on how digital architecture serves real operational workflows.",
  howIGotIntoIT:
    "My journey began with a natural curiosity about how computers translate electrical signals and logic into everyday tools. As I progressed from writing basic CLI scripts to building full relational database systems, I discovered that software engineering is fundamentally about structured problem decomposition.",
  howILearn:
    "I learn by building from first principles. When adopting a new language or framework, I inspect its official documentation, verify its runtime behavior through small isolated prototypes, and integrate it into a real, functional application before declaring familiarity.",
  approachToTech:
    "I prioritize simplicity, structural transparency, and reliability. I prefer clean, well-indexed SQL schemas and lean semantic markup over sprawling, opaque dependency chains. Software should be maintainable by anyone who reads it tomorrow.",
  careerDirection:
    "My immediate goal is contributing to high-impact engineering teams where I can take technical requirements from specification through testing and deployment. In the long term, I aim to architect scalable distributed systems and mission-critical enterprise applications.",
};

// Machine-readable generation helpers
export function generateLLMSTxt(): string {
  return `# Leibern R. Vicente — LLMS.txt
# Canonical structured representation for AI agents and automated parsers.
# Generated: 2026-09-13 | Version: 1.0.0

## IDENTITY
- Name: Leibern R. Vicente
- Title: IT Student / Developer / Technical Problem Solver
- Current Standing: 4th Year Bachelor of Science in Information Technology
- Status: Available for OJT, Graduate Engineering Roles, and Technical Projects
- Location: Philippines (GMT+8)
- Email: leivcnt01@gmail.com
- GitHub: https://github.com/leivcnt01
- Primary Positioning: "Strategy meets production code with minimal handoffs."
- Core Thesis: "I understand the problem, I think through the solution, and I build it."

## EDUCATION
- University: College of Information and Communications Technology
- Degree: Bachelor of Science in Information Technology
- Standing: 4th Year (Expected Graduation: 2025–2026)
- Core Competencies: Software Architecture, Database Normalization, Web Systems, Network Fundamentals.

## EXPERIENCE & LEADERSHIP
1. IT Systems Intern (OJT) | Enterprise IT Services (2025–Present)
   - Staging deployments, network diagnostics, SQL audits, SOP documentation.
2. Student Assistant | College Computer Laboratories (2024–2025)
   - Maintained 150+ workstations, software stack imaging, lab environment triage.
3. Head of Liaison Committee | CMCSA Student Association (2024–Present)
   - External tech partnerships, developer symposium coordination, digitized check-in system.

## PROJECTS & EVIDENCE
- [001] Academic Records & Capstone Management System: PHP, MySQL, MVC, Tailwind. Built for 32 capstone teams and 14 faculty evaluators.
- [002] Distributed Inventory & POS Engine: Java 21, JavaFX, SQLite, Multithreading. 100% offline-first desktop retail checkout.
- [003] CMCSA Event Registration Hub: TypeScript, Node.js, Express, React, QR scanner. 480 attendees checked in under 20 mins.
- [004] HTTP Endpoint Latency Benchmarker: Node.js, TypeScript, React. Precision TTFB & DNS socket measurement.
- [005] Prerequisite Graph Engine: Vanilla JS, Canvas API, DAG Topological Sort. Course bottleneck simulator for 150+ students.

## CORE SKILLS
- Development: PHP (Experienced), Java (Experienced), JavaScript ES6+ (Experienced), TypeScript (Working Knowledge), SQL (Experienced), HTML5/CSS3 (Experienced).
- Web Systems: RESTful APIs, Relational DB Design (MySQL, SQLite, PostgreSQL), Session Security, Responsive UI.
- Tools: Git, GitHub, VS Code, Linux CLI, Postman, Vite, Vercel.

## CONTACT & INQUIRIES
- Email: leivcnt01@gmail.com
- Expected Response Window: Within 24 hours.
`;
}

export function generateJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://leibern-vicente.dev/#person',
        name: PERSONAL_INFO.name,
        jobTitle: PERSONAL_INFO.title,
        description: PERSONAL_INFO.summary,
        email: PERSONAL_INFO.email,
        url: 'https://leibern-vicente.dev',
        sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: EDUCATION_DATA.university,
          department: EDUCATION_DATA.program,
        },
        knowsAbout: [
          'Information Technology',
          'Software Engineering',
          'PHP',
          'Java',
          'TypeScript',
          'Relational Databases',
          'Systems Analysis',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://leibern-vicente.dev/#website',
        url: 'https://leibern-vicente.dev',
        name: 'Leibern R. Vicente — Portfolio & Digital Resume',
        publisher: { '@id': 'https://leibern-vicente.dev/#person' },
        description: PERSONAL_INFO.summary,
      },
    ],
  };
}
