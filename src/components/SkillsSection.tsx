import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem, SkillLevel } from '../types';
import { Code2, Database, Wrench, FileCode2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const categories: Array<{
    id: SkillItem['category'];
    label: string;
    description: string;
    icon: React.ReactNode;
  }> = [
    {
      id: 'DEVELOPMENT',
      label: 'CORE LANGUAGES & RUNTIMES',
      description: 'Languages used for algorithms, procedural, OOP, and data querying.',
      icon: <Code2 className="h-4 w-4" />,
    },
    {
      id: 'WEB & SYSTEMS',
      label: 'WEB ARCHITECTURE & DATA SYSTEMS',
      description: 'Relational data modeling, API integration, and user-facing clients.',
      icon: <Database className="h-4 w-4" />,
    },
    {
      id: 'TOOLS & INFRASTRUCTURE',
      label: 'TOOLING, ENVIRONMENT & DEPLOYMENT',
      description: 'Workflow efficiency, version control, diagnostics, and hosting.',
      icon: <Wrench className="h-4 w-4" />,
    },
    {
      id: 'METHODOLOGIES',
      label: 'ANALYSIS & ENGINEERING DISCIPLINE',
      description: 'Systems design, schema normalization, and technical clarity.',
      icon: <FileCode2 className="h-4 w-4" />,
    },
  ];

  const getLevelBadgeClass = (level: SkillLevel) => {
    switch (level) {
      case 'EXPERIENCED':
        return 'border-[var(--border-strong)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-semibold';
      case 'WORKING KNOWLEDGE':
        return 'border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] font-medium';
      case 'FAMILIAR':
        return 'border-dashed border-[var(--border)] bg-transparent text-[var(--text-muted)]';
    }
  };

  return (
    <section id="skills" className="border-b border-[var(--border)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border)] pb-4">
          <div>
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[var(--text-muted)]">
              06 / CAPABILITY MATRIX
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-primary)] mt-1">
              SKILLS & TECHNICAL PROFICIENCY
            </h2>
          </div>
          {/* Level Legend */}
          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3 font-mono-tech text-xs">
            <span className="text-[var(--text-muted)]">PROFICIENCY CALIBRATION:</span>
            <span className="border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-2 py-0.5 text-[10px] font-bold text-[var(--text-primary)]">
              EXPERIENCED
            </span>
            <span className="border border-[var(--border)] px-2 py-0.5 text-[10px] text-[var(--text-secondary)]">
              WORKING KNOWLEDGE
            </span>
            <span className="border border-dashed border-[var(--border)] px-2 py-0.5 text-[10px] text-[var(--text-muted)]">
              FAMILIAR
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const items = SKILLS_DATA.filter((s) => s.category === cat.id);
            return (
              <div
                key={cat.id}
                className="border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
              >
                <div className="flex items-center gap-2.5 border-b border-[var(--border)] pb-3 mb-4">
                  <div className="border border-[var(--border)] p-1.5 bg-[var(--surface-secondary)] text-[var(--text-primary)]">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                      {cat.label}
                    </h3>
                    <p className="font-mono-tech text-[11px] text-[var(--text-muted)]">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill List */}
                <div className="space-y-3 font-mono-tech text-xs">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="border border-[var(--border)] bg-[var(--surface-secondary)]/50 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <span className="font-bold text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                        {skill.notes && (
                          <span className="block text-[11px] text-[var(--text-secondary)] mt-0.5">
                            {skill.notes}
                          </span>
                        )}
                      </div>
                      <span
                        className={`shrink-0 self-start sm:self-center border px-2 py-0.5 text-[10px] uppercase tracking-wider ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiter Transparency Disclaimer */}
        <div className="mt-8 border border-[var(--border)] bg-[var(--surface-secondary)] p-4 font-mono-tech text-xs text-[var(--text-secondary)]">
          <p>
            <strong className="text-[var(--text-primary)]">CALIBRATION STANDARD:</strong> Ratings reflect verified ability to build, debug, and deliver working software independently. No arbitrary 90% or 100% skill progress bars.
          </p>
        </div>
      </div>
    </section>
  );
};
