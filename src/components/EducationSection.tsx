import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="border-b border-[var(--border)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border)] pb-4">
          <div>
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[var(--text-muted)]">
              03 / ACADEMIC FOUNDATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-primary)] mt-1">
              EDUCATION & QUALIFICATIONS
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono-tech text-xs text-[var(--text-muted)]">
            // RIGOROUS UNDERGRADUATE DISCIPLINE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Degree Card */}
          <div className="lg:col-span-7 border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex items-start justify-between border-b border-[var(--border)] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="border border-[var(--border)] p-2 bg-[var(--surface-secondary)] text-[var(--text-primary)]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="font-mono-tech text-xs text-[var(--text-secondary)]">
                    {EDUCATION_DATA.program}
                  </p>
                </div>
              </div>
              <span className="border border-[var(--border)] bg-[var(--surface-secondary)] px-2.5 py-1 font-mono-tech text-xs font-semibold text-[var(--text-primary)]">
                {EDUCATION_DATA.yearStanding}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 font-mono-tech text-xs border-b border-[var(--border)] pb-6 mb-6">
              <div>
                <span className="block text-[10px] text-[var(--text-muted)] uppercase">INSTITUTION</span>
                <span className="text-[var(--text-primary)] font-medium">{EDUCATION_DATA.university}</span>
              </div>
              <div>
                <span className="block text-[10px] text-[var(--text-muted)] uppercase">EXPECTED GRADUATION</span>
                <span className="text-[var(--text-primary)] font-medium">{EDUCATION_DATA.expectedGraduation}</span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-4 w-4 text-[var(--text-primary)]" />
                <span className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                  ACADEMIC MILESTONES & HONORS
                </span>
              </div>
              <ul className="space-y-2.5">
                {EDUCATION_DATA.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]"
                  >
                    <span className="font-mono-tech text-[10px] text-[var(--text-muted)] mt-0.5">
                      0{index + 1}.
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Coursework Grid */}
          <div className="lg:col-span-5 border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex items-center gap-2 border-b border-[var(--border)] pb-4 mb-6">
              <BookOpen className="h-4 w-4 text-[var(--text-primary)]" />
              <span className="font-mono-tech text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                RELEVANT TECHNICAL COURSEWORK
              </span>
            </div>

            <p className="font-mono-tech text-xs text-[var(--text-muted)] mb-4">
              Direct practical training in software methodologies, systems architecture, and database engineering:
            </p>

            <div className="grid grid-cols-1 gap-2 font-mono-tech text-xs">
              {EDUCATION_DATA.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-2 text-[var(--text-primary)]"
                >
                  <span className="truncate">{course}</span>
                  <span className="text-[10px] text-[var(--text-muted)] shrink-0 ml-2">✓ COMPLETED</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
