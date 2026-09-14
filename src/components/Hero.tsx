import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenMachineData: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenMachineData }) => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative border-b border-[var(--border)] pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Operational Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4 font-mono-tech text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="text-[var(--text-primary)]">SYS_SPEC:</span>
            <span>PORTFOLIO_V2.6 // TECHNICAL_PROFILE</span>
          </div>
          <div className="flex items-center gap-4">
            <span>LOC: {PERSONAL_INFO.location}</span>
            <span>TZ: {PERSONAL_INFO.timezone}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Main Hero Typography */}
          <div className="lg:col-span-8">
            <p className="mb-3 font-mono-tech text-xs sm:text-sm font-semibold tracking-widest text-[var(--text-muted)] uppercase">
              {PERSONAL_INFO.title}
            </p>

            {/* Brutalist Hero Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-[var(--text-primary)] leading-[0.95] mb-8">
              BUILDING
              <br />
              DIGITAL SYSTEMS
              <br />
              FROM IDEA
              <br />
              TO CODE.
            </h1>

            {/* Required Identity block: Leibern R. Vicente + 4th Year BSIT */}
            <div className="mb-6 border-l-2 border-[var(--border-strong)] pl-4 sm:pl-6 py-1">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                {PERSONAL_INFO.name}
              </h2>
              <p className="font-mono-tech text-sm sm:text-base text-[var(--text-secondary)] font-medium mt-1">
                {PERSONAL_INFO.academicStanding}
              </p>
            </div>

            {/* Concise statement */}
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] mb-8">
              {PERSONAL_INFO.summary}
            </p>

            {/* Key Thesis / Positioning Pill Banner */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-3 bg-[var(--surface)] border border-[var(--border)] p-4 text-xs font-mono-tech">
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>CORE THESIS:</span>
              </div>
              <span className="text-[var(--text-secondary)]">
                &ldquo;{PERSONAL_INFO.thesis}&rdquo;
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('#projects')}
                className="group inline-flex items-center gap-2 border border-[var(--border-strong)] bg-[var(--button-bg)] px-6 py-3 font-mono-tech text-xs font-semibold text-[var(--button-fg)] transition-all hover:bg-[var(--button-hover)]"
              >
                <span>EXPLORE WORK</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 border border-[var(--border)] bg-[var(--surface)] px-5 py-3 font-mono-tech text-xs font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-secondary)]"
              >
                <Download className="h-4 w-4" />
                <span>DIGITAL RESUME</span>
              </button>

              <button
                onClick={() => scrollTo('#contact-form')}
                className="inline-flex items-center gap-2 border border-[var(--border)] bg-[var(--surface)] px-5 py-3 font-mono-tech text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]"
              >
                <span>START INQUIRY</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Quick Specs & Availability */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {/* Quick Profile Card */}
            <div className="border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-4">
                <span className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                  // PROFILE_BRIEF
                </span>
                <span className="font-mono-tech text-[10px] text-[var(--text-muted)]">
                  REF: 2026.4Y
                </span>
              </div>

              <div className="space-y-4 text-xs font-mono-tech">
                <div>
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase">DISCIPLINE</span>
                  <span className="font-medium text-[var(--text-primary)]">
                    Information Technology & Systems Development
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase">POSITIONING</span>
                  <span className="text-[var(--text-secondary)]">
                    {PERSONAL_INFO.positioning}
                  </span>
                </div>

                <div>
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase">STATUS</span>
                  <div className="mt-1 flex items-center gap-2 text-emerald-500 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span>{PERSONAL_INFO.status}</span>
                  </div>
                </div>

                <div className="border-t border-[var(--border)] pt-3">
                  <span className="block text-[10px] text-[var(--text-muted)] uppercase mb-2">
                    CORE RUNTIMES & DBs
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['PHP', 'Java', 'JavaScript', 'TypeScript', 'MySQL', 'SQLite', 'Linux CLI'].map((tech) => (
                      <span
                        key={tech}
                        className="border border-[var(--border)] bg-[var(--surface-secondary)] px-2 py-0.5 text-[11px] text-[var(--text-primary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[var(--border)] pt-3 flex items-center justify-between text-[11px]">
                  <span className="text-[var(--text-muted)]">MACHINE-READABLE:</span>
                  <button
                    onClick={onOpenMachineData}
                    className="text-[var(--text-primary)] underline hover:opacity-75 flex items-center gap-1"
                  >
                    <span>llms.txt / JSON-LD</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Recruiter Snapshot notice */}
            <div className="border border-[var(--border)] bg-[var(--surface-secondary)] p-4 font-mono-tech text-xs">
              <p className="text-[var(--text-muted)] text-[11px] leading-relaxed">
                <strong className="text-[var(--text-primary)]">RECRUITER NOTE:</strong> Built to communicate evidence over buzzwords. No exaggerated years of seniority or phantom clients—just disciplined software engineering and genuine academic contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
