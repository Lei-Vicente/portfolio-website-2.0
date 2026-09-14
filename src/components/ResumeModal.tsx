import React from 'react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCES_DATA, PROJECTS_DATA, SKILLS_DATA } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedMd, setCopiedMd] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const generateMarkdownResume = () => {
    const md = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.academicStanding}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}

---

## PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

## EDUCATION
**${EDUCATION_DATA.degree}**
${EDUCATION_DATA.university} | Expected: ${EDUCATION_DATA.expectedGraduation}
- ${EDUCATION_DATA.highlights.join('\n- ')}

## EXPERIENCE & LEADERSHIP
${EXPERIENCES_DATA.map(
  (exp) => `### ${exp.role} — ${exp.organization}
*${exp.period} | ${exp.location}*
${exp.summary}
- What I Did: ${exp.whatIDid.join('; ')}
- What I Learned: ${exp.whatILearned.join('; ')}
- What I Contributed: ${exp.whatIContributed.join('; ')}
Technologies: ${exp.technologiesUsed.join(', ')}
`
).join('\n')}

## SELECTED TECHNICAL PROJECTS
${PROJECTS_DATA.map(
  (proj) => `### ${proj.title} (${proj.year}) — Role: ${proj.role}
- Category: ${proj.type} | Status: ${proj.status}
- Technologies: ${proj.technologies.join(', ')}
- Problem: ${proj.problem}
- Outcome: ${proj.result}
`
).join('\n')}

## TECHNICAL SKILLS
- Development: PHP, Java, JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3
- Web & Systems: RESTful APIs, Relational DBs (MySQL, SQLite), Session Security, Responsive UI
- Tools: Git, GitHub, VS Code, Linux CLI, Postman, Vite
`;
    navigator.clipboard.writeText(md);
    setCopiedMd(true);
    setTimeout(() => setCopiedMd(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative my-6 w-full max-w-4xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-12 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden during print) */}
        <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono-tech text-xs font-bold text-[var(--text-primary)]">
              // WEB-NATIVE RESUME & CV
            </span>
            <span className="border border-[var(--border)] bg-[var(--surface-secondary)] px-2 py-0.5 font-mono-tech text-[10px] text-[var(--text-muted)]">
              RECRUITER SCAN TIME: ~45 SEC
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 border border-[var(--border-strong)] bg-[var(--button-bg)] px-3 py-1.5 font-mono-tech text-xs font-semibold text-[var(--button-fg)] hover:bg-[var(--button-hover)] transition-colors"
              title="Print to PDF"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>DOWNLOAD RESUME (PDF/PRINT)</span>
            </button>

            <button
              onClick={generateMarkdownResume}
              className="flex items-center gap-1.5 border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono-tech text-xs text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-colors"
              title="Copy formatted markdown resume"
            >
              {copiedMd ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedMd ? 'COPIED MD' : 'COPY MD'}</span>
            </button>

            <button
              onClick={onClose}
              className="border border-[var(--border)] p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-colors ml-2"
              aria-label="Close resume"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="resume-printable-content space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-[var(--border-strong)] pb-6">
            <h1 id="resume-title" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-mono-tech text-sm font-semibold text-[var(--text-primary)] mt-1">
              {PERSONAL_INFO.academicStanding}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 font-mono-tech text-xs text-[var(--text-secondary)]">
              <span>Email: {PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>Phone: {PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>GitHub: github.com/leivcnt01</span>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="font-mono-tech text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border)] pb-1 mb-3">
              01 // PROFESSIONAL PROFILE
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono-tech text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border)] pb-1 mb-3">
              02 // EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <div>
                <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="font-mono-tech text-xs text-[var(--text-secondary)]">
                  {EDUCATION_DATA.university} — {EDUCATION_DATA.program}
                </p>
              </div>
              <span className="font-mono-tech text-xs text-[var(--text-muted)] mt-1 sm:mt-0">
                Expected: {EDUCATION_DATA.expectedGraduation}
              </span>
            </div>
            <ul className="mt-3 space-y-1 font-mono-tech text-xs text-[var(--text-secondary)]">
              {EDUCATION_DATA.highlights.map((h, i) => (
                <li key={i}>• {h}</li>
              ))}
            </ul>
          </div>

          {/* Chronological Experience */}
          <div>
            <h2 className="font-mono-tech text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border)] pb-1 mb-4">
              03 // EXPERIENCE & LEADERSHIP
            </h2>
            <div className="space-y-6">
              {EXPERIENCES_DATA.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[var(--border)] pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
                      {exp.role} <span className="font-normal text-xs text-[var(--text-muted)]">({exp.organization})</span>
                    </h3>
                    <span className="font-mono-tech text-xs text-[var(--text-muted)]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mb-2">{exp.summary}</p>
                  <div className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <p><strong className="text-[var(--text-primary)]">Contribution:</strong> {exp.whatIContributed.join(' ')}</p>
                    <p className="font-mono-tech text-[11px] text-[var(--text-muted)]">
                      Tech: {exp.technologiesUsed.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="font-mono-tech text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border)] pb-1 mb-4">
              04 // SELECTED TECHNICAL PROJECTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS_DATA.slice(0, 4).map((proj) => (
                <div key={proj.id} className="border border-[var(--border)] p-4 bg-[var(--surface-secondary)]/50">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-sm font-bold text-[var(--text-primary)]">
                      {proj.title}
                    </h3>
                    <span className="font-mono-tech text-[10px] text-[var(--text-muted)]">{proj.year}</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mb-2">
                    {proj.shortDescription}
                  </p>
                  <p className="font-mono-tech text-[10px] text-[var(--text-muted)]">
                    Stack: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Grouped Skills */}
          <div>
            <h2 className="font-mono-tech text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border)] pb-1 mb-3">
              05 // TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono-tech text-xs">
              <div className="border border-[var(--border)] p-3">
                <span className="block text-[10px] text-[var(--text-muted)] uppercase mb-1">LANGUAGES</span>
                <span className="text-[var(--text-primary)]">PHP, Java, JavaScript, TypeScript, SQL, HTML5, CSS3</span>
              </div>
              <div className="border border-[var(--border)] p-3">
                <span className="block text-[10px] text-[var(--text-muted)] uppercase mb-1">WEB & DATA</span>
                <span className="text-[var(--text-primary)]">REST APIs, MySQL, SQLite, PostgreSQL, Session Auth</span>
              </div>
              <div className="border border-[var(--border)] p-3">
                <span className="block text-[10px] text-[var(--text-muted)] uppercase mb-1">TOOLS</span>
                <span className="text-[var(--text-primary)]">Git/GitHub, VS Code, Linux CLI, Vite, Postman, Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
