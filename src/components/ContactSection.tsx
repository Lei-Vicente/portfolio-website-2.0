import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InquiryForm } from './InquiryForm';
import { Mail, Github, Linkedin, Phone, MapPin, Clock, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="border-b border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border)] pb-4">
          <div>
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[var(--text-muted)]">
              07 / DIRECT CONNECTION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-primary)] mt-1">
              CONTACT & PROFESSIONAL INQUIRY
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono-tech text-xs text-[var(--text-muted)]">
            // ACTIVE COMMUNICATION CHANNELS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
              <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] block mb-4 border-b border-[var(--border)] pb-2">
                DIRECT CHANNELS
              </span>

              <div className="space-y-4 font-mono-tech text-xs">
                {/* Email */}
                <div className="border border-[var(--border)] bg-[var(--surface-secondary)] p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase">EMAIL (PRIMARY)</span>
                    <button
                      onClick={() => copyToClipboard(PERSONAL_INFO.email)}
                      className="text-[10px] text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1"
                    >
                      {copiedEmail ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                    </button>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-[var(--text-primary)] hover:underline break-all block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                {/* GitHub */}
                <div className="border border-[var(--border)] bg-[var(--surface-secondary)] p-4">
                  <span className="text-[10px] text-[var(--text-muted)] uppercase block mb-1">GITHUB REPOSITORIES</span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[var(--text-primary)] hover:underline flex items-center justify-between"
                  >
                    <span>github.com/leivcnt01</span>
                    <span className="text-[11px] text-[var(--text-muted)]">↗</span>
                  </a>
                </div>

                {/* Phone */}
                <div className="border border-[var(--border)] bg-[var(--surface-secondary)] p-4">
                  <span className="text-[10px] text-[var(--text-muted)] uppercase block mb-1">MOBILE CONTACT</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-bold text-[var(--text-primary)] hover:underline block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                {/* Location & Timezone */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="border border-[var(--border)] p-3 bg-[var(--surface-secondary)]">
                    <span className="text-[9px] text-[var(--text-muted)] uppercase block">LOCATION</span>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="border border-[var(--border)] p-3 bg-[var(--surface-secondary)]">
                    <span className="text-[9px] text-[var(--text-muted)] uppercase block">TIMEZONE</span>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">{PERSONAL_INFO.timezone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Notice */}
            <div className="border border-[var(--border)] bg-[var(--surface-secondary)] p-6 font-mono-tech text-xs">
              <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-2">
                AVAILABILITY NOTICE (2025–2026)
              </span>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Currently completing 4th-year BSIT degree requirements. Actively interviewing for enterprise On-the-Job Training (OJT), junior software engineering roles, and technical project collaborations.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form as requested */}
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};
