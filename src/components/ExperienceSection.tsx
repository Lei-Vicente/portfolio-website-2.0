import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { Experience } from '../types';
import { Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const filteredExperiences =
    filter === 'ALL'
      ? EXPERIENCES_DATA
      : EXPERIENCES_DATA.filter((exp) => exp.type === filter);

  return (
    <section id="experience" className="border-b border-[var(--border)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border)] pb-4">
          <div>
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[var(--text-muted)]">
              04 / VERIFIABLE TRACK RECORD
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-primary)] mt-1">
              EXPERIENCE & LEADERSHIP
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            {['ALL', 'OJT / INTERNSHIP', 'STUDENT ASSISTANT', 'LEADERSHIP'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`border px-3 py-1 font-mono-tech text-xs transition-colors ${
                  filter === tab
                    ? 'border-[var(--border-strong)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-bold'
                    : 'border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Experiences Stack */}
        <div className="space-y-8">
          {filteredExperiences.map((exp: Experience, index: number) => (
            <div
              key={exp.id}
              className="border border-[var(--border)] bg-[var(--surface)] transition-all hover:border-[var(--border-strong)]"
            >
              {/* Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--border)] bg-[var(--surface-secondary)] px-6 py-4 gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono-tech text-xs font-bold text-[var(--text-muted)]">
                    EXP / 0{index + 1}
                  </span>
                  <span className="border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 font-mono-tech text-[11px] font-semibold text-[var(--text-primary)]">
                    {exp.type}
                  </span>
                </div>
                <div className="font-mono-tech text-xs text-[var(--text-muted)]">
                  PERIOD: <span className="font-semibold text-[var(--text-primary)]">{exp.period}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                <div className="mb-4">
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs text-[var(--text-secondary)] mt-1">
                    <span className="font-semibold text-[var(--text-primary)]">{exp.organization}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* 3 Pillars: WHAT I DID / WHAT I LEARNED / WHAT I CONTRIBUTED */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-t border-[var(--border)] pt-6">
                  {/* WHAT I DID */}
                  <div className="border border-[var(--border)] p-4 bg-[var(--surface-secondary)]/40">
                    <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] block mb-3 border-b border-[var(--border)] pb-2">
                      WHAT I DID
                    </span>
                    <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                      {exp.whatIDid.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-mono-tech text-[10px] text-[var(--text-muted)] mt-0.5">▪</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WHAT I LEARNED */}
                  <div className="border border-[var(--border)] p-4 bg-[var(--surface-secondary)]/40">
                    <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] block mb-3 border-b border-[var(--border)] pb-2">
                      WHAT I LEARNED
                    </span>
                    <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                      {exp.whatILearned.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-mono-tech text-[10px] text-[var(--text-muted)] mt-0.5">▪</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WHAT I CONTRIBUTED */}
                  <div className="border border-[var(--border)] p-4 bg-[var(--surface-secondary)]/40">
                    <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] block mb-3 border-b border-[var(--border)] pb-2">
                      WHAT I CONTRIBUTED
                    </span>
                    <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                      {exp.whatIContributed.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-mono-tech text-[10px] text-emerald-500 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies Tag Rail */}
                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[var(--border)] pt-4 font-mono-tech text-xs">
                  <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                    RELEVANT STACK:
                  </span>
                  {exp.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[var(--border)] bg-[var(--surface-secondary)] px-2 py-0.5 text-[11px] text-[var(--text-primary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
