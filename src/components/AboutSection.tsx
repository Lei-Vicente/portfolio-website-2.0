import React, { useState } from 'react';
import { ABOUT_PROFILE_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Compass, BookOpen, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'approach' | 'origin' | 'focus'>('overview');

  return (
    <section id="about" className="border-b border-[var(--border)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border)] pb-4">
          <div>
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[var(--text-muted)]">
              02 / PROFILE & ARCHITECTURE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-primary)] mt-1">
              ABOUT & TECHNICAL DIRECTION
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono-tech text-xs text-[var(--text-muted)]">
            // EARLY-CAREER DISCIPLINE & FIRST-PRINCIPLES MINDSET
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Navigation Sub-Tabs */}
          <div className="lg:col-span-4 border border-[var(--border)] bg-[var(--surface)]">
            <div className="border-b border-[var(--border)] px-4 py-3 font-mono-tech text-xs font-semibold text-[var(--text-primary)] uppercase">
              INDEX OF PERSPECTIVE
            </div>
            <div className="flex flex-col divide-y divide-[var(--border)] font-mono-tech text-xs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center justify-between px-4 py-3.5 text-left transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-[var(--surface-secondary)] font-bold text-[var(--text-primary)] border-l-2 border-[var(--border-strong)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)]/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  <span>WHO I AM & POSITION</span>
                </div>
                <span className="text-[10px] text-[var(--text-muted)]">01</span>
              </button>

              <button
                onClick={() => setActiveTab('approach')}
                className={`flex items-center justify-between px-4 py-3.5 text-left transition-colors ${
                  activeTab === 'approach'
                    ? 'bg-[var(--surface-secondary)] font-bold text-[var(--text-primary)] border-l-2 border-[var(--border-strong)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)]/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4" />
                  <span>APPROACH TO TECHNOLOGY</span>
                </div>
                <span className="text-[10px] text-[var(--text-muted)]">02</span>
              </button>

              <button
                onClick={() => setActiveTab('origin')}
                className={`flex items-center justify-between px-4 py-3.5 text-left transition-colors ${
                  activeTab === 'origin'
                    ? 'bg-[var(--surface-secondary)] font-bold text-[var(--text-primary)] border-l-2 border-[var(--border-strong)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)]/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4" />
                  <span>ORIGIN & LEARNING CYCLE</span>
                </div>
                <span className="text-[10px] text-[var(--text-muted)]">03</span>
              </button>

              <button
                onClick={() => setActiveTab('focus')}
                className={`flex items-center justify-between px-4 py-3.5 text-left transition-colors ${
                  activeTab === 'focus'
                    ? 'bg-[var(--surface-secondary)] font-bold text-[var(--text-primary)] border-l-2 border-[var(--border-strong)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)]/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>CAREER DIRECTION & TARGET</span>
                </div>
                <span className="text-[10px] text-[var(--text-muted)]">04</span>
              </button>
            </div>

            {/* Quick Quote box */}
            <div className="border-t border-[var(--border)] p-4 bg-[var(--surface-secondary)] font-mono-tech text-[11px] text-[var(--text-secondary)]">
              <span className="text-[var(--text-muted)] block mb-1 uppercase tracking-wider text-[10px]">
                GUIDING PRINCIPLE
              </span>
              &ldquo;Software architecture is the art of drawing lines that keep components simple, observable, and debuggable.&rdquo;
            </div>
          </div>

          {/* Right: Detailed Content Display */}
          <div className="lg:col-span-8 border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="border-b border-[var(--border)] pb-3">
                  <span className="font-mono-tech text-xs text-[var(--text-muted)] uppercase">
                    SECTION 01 / PROFILE SUMMARY
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-1">
                    An early-career developer dedicated to concrete software.
                  </h3>
                </div>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {ABOUT_PROFILE_DATA.whoIAm}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border)] font-mono-tech text-xs">
                  <div className="border border-[var(--border)] p-3 bg-[var(--surface-secondary)]">
                    <span className="block text-[10px] text-[var(--text-muted)] uppercase mb-1">
                      CURRENT ACADEMIC ROLE
                    </span>
                    <span className="text-[var(--text-primary)] font-medium">
                      4th Year Candidate, BS Information Technology
                    </span>
                  </div>
                  <div className="border border-[var(--border)] p-3 bg-[var(--surface-secondary)]">
                    <span className="block text-[10px] text-[var(--text-muted)] uppercase mb-1">
                      ACTIVE LEADERSHIP
                    </span>
                    <span className="text-[var(--text-primary)] font-medium">
                      Head of Liaison Committee (CMCSA)
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'approach' && (
              <div className="space-y-6">
                <div className="border-b border-[var(--border)] pb-3">
                  <span className="font-mono-tech text-xs text-[var(--text-muted)] uppercase">
                    SECTION 02 / PHILOSOPHY
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-1">
                    Simplicity, clean boundaries, and zero handoff ambiguity.
                  </h3>
                </div>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {ABOUT_PROFILE_DATA.approachToTech}
                </p>
                <div className="border-l-2 border-[var(--border-strong)] pl-4 py-2 font-mono-tech text-xs text-[var(--text-secondary)] space-y-2">
                  <p>
                    <strong className="text-[var(--text-primary)]">1. Understand First:</strong> Map the database schema, business constraints, and failure points before generating UI boilerplate.
                  </p>
                  <p>
                    <strong className="text-[var(--text-primary)]">2. Keep It Observable:</strong> Maintain meaningful HTTP status codes, structured SQL queries, and actionable error messages.
                  </p>
                  <p>
                    <strong className="text-[var(--text-primary)]">3. Minimize Dependencies:</strong> Avoid installing heavy node modules or abstractions when standard language features do the job cleanly.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'origin' && (
              <div className="space-y-6">
                <div className="border-b border-[var(--border)] pb-3">
                  <span className="font-mono-tech text-xs text-[var(--text-muted)] uppercase">
                    SECTION 03 / GENESIS & METHODOLOGY
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-1">
                    Learning through isolated prototypes and real deployments.
                  </h3>
                </div>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {ABOUT_PROFILE_DATA.howIGotIntoIT}
                </p>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {ABOUT_PROFILE_DATA.howILearn}
                </p>
              </div>
            )}

            {activeTab === 'focus' && (
              <div className="space-y-6">
                <div className="border-b border-[var(--border)] pb-3">
                  <span className="font-mono-tech text-xs text-[var(--text-muted)] uppercase">
                    SECTION 04 / TRAJECTORY
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mt-1">
                    Building practical IT experience with a dependable approach.
                  </h3>
                </div>
                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {ABOUT_PROFILE_DATA.careerDirection}
                </p>
                <div className="border border-[var(--border)] p-4 bg-[var(--surface-secondary)] font-mono-tech text-xs">
                  <span className="text-[10px] text-[var(--text-muted)] uppercase block mb-1">
                    CURRENT OBJECTIVE
                  </span>
                  <p className="text-[var(--text-primary)] font-medium">
                    Growing in IT support and technology operations while continuing to develop database and programming skills.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
