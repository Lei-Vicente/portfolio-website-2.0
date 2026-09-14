import { Education, Experience, Project, SkillItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Leibern R. Vicente',
  title: 'Information Technology Student',
  academicStanding: 'Bachelor of Science in Information Technology Student',
  expectedGraduation: 'In progress',
  email: 'leivcnt01@gmail.com',
  github: 'https://github.com/leivcnt01',
  linkedin: 'https://linkedin.com/in/leibern-vicente',
  phone: '09922387248',
  location: 'Mandaluyong City, Philippines',
  timezone: 'GMT+8 (Asia/Manila)',
  status: 'Open to IT support and entry-level technology opportunities',
  tagline: 'DEDICATED TO PRACTICAL IT SUPPORT AND RELIABLE OPERATIONS.',
  summary:
    'Information Technology student with hands-on experience in IT support, hardware troubleshooting, network configuration, office records, asset tracking, and student leadership.',
  thesis: 'Clear communication, careful troubleshooting, and dependable delivery.',
  positioning: 'Practical IT support backed by organized operations.',
};

export const EDUCATION_DATA: Education = {
  degree: 'Bachelor of Science in Information Technology',
  program: 'Information Technology',
  university: 'Rizal Technological University, Mandaluyong City',
  yearStanding: '2023 – Present',
  expectedGraduation: 'In progress',
  location: 'Mandaluyong City, Philippines',
  highlights: [
    'Academic Achiever',
    'CMCS Scholar (2023 – Present)',
  ],
  coursework: [
    'Front-End Development',
    'C++', 'Java', 'Python', 'SQL', 'PHP',
  ],
};

export const EXPERIENCES_DATA: Experience[] = [
  { id: 'exp-valucare', period: 'FEBRUARY 2026 – APRIL 2026', role: 'IT Support', organization: 'Value Care Health Systems, Inc. (ValuCare)', type: 'OJT / INTERNSHIP', location: 'Mandaluyong City, Philippines', summary: 'Provided IT hardware and technical support for office laptops, printers, and essential equipment.', whatIDid: ['Performed hardware maintenance, troubleshooting, and repairs.', 'Configured static IP addresses and network settings.', 'Installed printer drivers and network-enabled devices.', 'Managed and prioritized IT help-desk tickets.'], whatILearned: ['IT infrastructure and hardware support', 'Network troubleshooting', 'Technical customer service'], whatIContributed: ['Applied preventive maintenance and standardized troubleshooting procedures.', 'Used step-by-step diagnostics before recommending hardware replacements.'], technologiesUsed: ['Hardware Troubleshooting', 'Network Configuration', 'Printer Setup', 'Help Desk Support'] },
  { id: 'exp-student-assistant', period: 'AUGUST 2025 – OCTOBER 2025', role: 'Student Assistant', organization: 'Rizal Technological University – Institute of Computer Studies Office', type: 'STUDENT ASSISTANT', location: 'Mandaluyong City, Philippines', summary: 'Supported capstone records, office reporting, equipment inventory, and document-routing operations.', whatIDid: ['Maintained a PHP and MS Access database for student capstone projects.', 'Organized departmental records and generated reports with MS Excel.', 'Tracked and audited office equipment and laboratory assets.', 'Logged, digitized, and routed receiving and outgoing communications.'], whatILearned: ['Database and records management', 'Office administration and reporting'], whatIContributed: ['Improved faculty access to capstone-project records.', 'Maintained accurate inventory logs.'], technologiesUsed: ['PHP', 'Microsoft Access', 'Microsoft Excel', 'Asset Tracking'] },
  { id: 'exp-cmcsa', period: '2025 – PRESENT', role: 'Head of Liaison Committee', organization: 'CMCSA (City of Mandaluyong Collegiate Scholarship Association)', type: 'LEADERSHIP', location: 'Mandaluyong City, Philippines', summary: 'Leads scholarship-program operations, seminar coordination, and student volunteer teams.', whatIDid: ['Established operational processes for scholarship-program administration.', 'Planned and set up seminars for scholarship members and external professionals.', 'Led student volunteers for large-scale orientation events.'], whatILearned: ['Liaison and stakeholder management', 'Project management', 'Conflict resolution and relationship building'], whatIContributed: ['Supported equitable application review and timely fund disbursement.', 'Delivered events against attendance goals and strict deadlines.'], technologiesUsed: ['Project Management', 'Stakeholder Communication', 'Event Coordination', 'Team Leadership'] },
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
  { name: 'HTML', level: 'FAMILIAR', category: 'DEVELOPMENT', notes: 'Basic front-end development' },
  { name: 'CSS', level: 'FAMILIAR', category: 'DEVELOPMENT', notes: 'Basic front-end development' },
  { name: 'JavaScript', level: 'FAMILIAR', category: 'DEVELOPMENT' },
  { name: 'C++', level: 'FAMILIAR', category: 'DEVELOPMENT' },
  { name: 'Java', level: 'FAMILIAR', category: 'DEVELOPMENT' },
  { name: 'Python', level: 'FAMILIAR', category: 'DEVELOPMENT' },
  { name: 'SQL', level: 'FAMILIAR', category: 'DEVELOPMENT' },
  { name: 'PHP', level: 'FAMILIAR', category: 'DEVELOPMENT' },
  { name: 'Hardware & Technical Support', level: 'WORKING KNOWLEDGE', category: 'WEB & SYSTEMS' },
  { name: 'Network Configuration', level: 'WORKING KNOWLEDGE', category: 'WEB & SYSTEMS' },
  { name: 'Microsoft Office Suite', level: 'EXPERIENCED', category: 'TOOLS & INFRASTRUCTURE', notes: 'Word, Excel, PowerPoint' },
  { name: 'Canva & CapCut', level: 'WORKING KNOWLEDGE', category: 'TOOLS & INFRASTRUCTURE' },
  { name: 'Inventory Management', level: 'WORKING KNOWLEDGE', category: 'METHODOLOGIES' },
  { name: 'Project Management', level: 'WORKING KNOWLEDGE', category: 'METHODOLOGIES' },
  { name: 'Communication & Active Listening', level: 'EXPERIENCED', category: 'METHODOLOGIES' },
];

export const ABOUT_PROFILE_DATA = {
  whoIAm:
    "I am an Information Technology student based in Mandaluyong City with hands-on experience in IT support, technical troubleshooting, record keeping, and student leadership.",
  howIGotIntoIT:
    "My studies in Information Technology built my interest in the systems that help people work effectively, from front-end development and databases to day-to-day technical support.",
  howILearn:
    "I learn by applying concepts carefully, documenting what works, and asking clear questions when resolving unfamiliar issues.",
  approachToTech:
    "I use systematic diagnostics, preventive maintenance, and clear communication to keep technical work reliable and understandable.",
  careerDirection:
    "I am building experience in IT support and technology operations while continuing to strengthen my development and database foundations.",
};

// Machine-readable generation helpers
export function generateLLMSTxt(): string {
  return `# Leibern R. Vicente — LLMS.txt
# Canonical structured representation for AI agents and automated parsers.
# Generated: 2026-09-13 | Version: 1.0.0

## IDENTITY
- Name: Leibern R. Vicente
- Title: Information Technology Student
- Current Standing: Bachelor of Science in Information Technology Student
- Status: Open to IT support and entry-level technology opportunities
- Location: Mandaluyong City, Philippines (GMT+8)
- Email: leivcnt01@gmail.com
- Phone: 09922387248
- GitHub: https://github.com/leivcnt01
- Primary Positioning: "Practical IT support backed by organized operations."
- Core Thesis: "Clear communication, careful troubleshooting, and dependable delivery."

## EDUCATION
- University: Rizal Technological University, Mandaluyong City
- Degree: Bachelor of Science in Information Technology
- Standing: 2023–Present
- Core Competencies: Front-end development, programming, databases, hardware support, and network configuration.

## EXPERIENCE & LEADERSHIP
1. IT Support | Value Care Health Systems, Inc. (ValuCare) | February–April 2026
   - Hardware support, troubleshooting, network configuration, printer setup, and help-desk support.
2. Student Assistant | RTU Institute of Computer Studies Office | August–October 2025
   - PHP/MS Access capstone records, Excel reporting, asset tracking, and document routing.
3. Head of Liaison Committee | CMCSA | 2025–Present
   - Scholarship operations, seminar coordination, and student volunteer leadership.

## PROJECTS & EVIDENCE
- [001] Academic Records & Capstone Management System: PHP, MySQL, MVC, Tailwind. Built for 32 capstone teams and 14 faculty evaluators.
- [002] Distributed Inventory & POS Engine: Java 21, JavaFX, SQLite, Multithreading. 100% offline-first desktop retail checkout.
- [003] CMCSA Event Registration Hub: TypeScript, Node.js, Express, React, QR scanner. 480 attendees checked in under 20 mins.
- [004] HTTP Endpoint Latency Benchmarker: Node.js, TypeScript, React. Precision TTFB & DNS socket measurement.
- [005] Prerequisite Graph Engine: Vanilla JS, Canvas API, DAG Topological Sort. Course bottleneck simulator for 150+ students.

## CORE SKILLS
- Development: HTML, CSS, JavaScript, C++, Java, Python, SQL, PHP.
- Technical: Hardware support, network configuration, Microsoft Office, inventory management, project management.

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
