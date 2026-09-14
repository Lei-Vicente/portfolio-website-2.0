import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, GitBranch, CheckCircle, Terminal, Layers, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative my-8 w-full max-w-4xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Number & Close */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs font-bold text-[var(--text-muted)]">
              CASE STUDY // {project.number}
            </span>
            <span className="border border-[var(--border)] bg-[var(--surface-secondary)] px-2 py-0.5 font-mono-tech text-[11px] font-semibold text-[var(--text-primary)]">
              {project.type}
            </span>
            <span className="font-mono-tech text-[11px] text-emerald-500 font-semibold">
              ● {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="border border-[var(--border)] p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-colors"
            aria-label="Close case study modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Title & Metadata */}
        <div className="mb-8">
          <h2 id="case-study-title" className="font-display text-2xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            {project.title}
          </h2>
          <p className="mt-2 text-base text-[var(--text-secondary)] leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-[var(--border)] py-4 font-mono-tech text-xs">
            <div>
              <span className="block text-[10px] text-[var(--text-muted)] uppercase">ROLE</span>
              <span className="text-[var(--text-primary)] font-medium">{project.role}</span>
            </div>
            <div>
              <span className="block text-[10px] text-[var(--text-muted)] uppercase">TIMELINE</span>
              <span className="text-[var(--text-primary)] font-medium">{project.year}</span>
            </div>
            <div>
              <span className="block text-[10px] text-[var(--text-muted)] uppercase">DEPLOYMENT TYPE</span>
              <span className="text-[var(--text-primary)] font-medium">{project.type}</span>
            </div>
            <div>
              <span className="block text-[10px] text-[var(--text-muted)] uppercase">STATUS</span>
              <span className="text-[var(--text-primary)] font-medium">{project.status}</span>
            </div>
          </div>
        </div>

        {/* Highlight Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="border border-[var(--border)] bg-[var(--surface-secondary)] p-4 font-mono-tech"
              >
                <span className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] mt-1 block">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Deep Editorial Sections Required: CONTEXT, PROBLEM, APPROACH, IMPLEMENTATION, RESULT, WHAT I LEARNED */}
        <div className="space-y-8 text-sm">
          {/* 01 CONTEXT */}
          <div className="border border-[var(--border)] p-6 bg-[var(--surface)]">
            <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              01 // CONTEXT
            </span>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.context}
            </p>
          </div>

          {/* 02 PROBLEM */}
          <div className="border border-[var(--border)] p-6 bg-[var(--surface)]">
            <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              02 // PROBLEM
            </span>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* 03 APPROACH */}
          <div className="border border-[var(--border)] p-6 bg-[var(--surface)]">
            <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              03 // APPROACH
            </span>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* 04 IMPLEMENTATION */}
          <div className="border border-[var(--border)] p-6 bg-[var(--surface)]">
            <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              04 // IMPLEMENTATION
            </span>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              {project.implementation}
            </p>
            {project.architectureNotes && (
              <div className="border-l-2 border-[var(--border-strong)] bg-[var(--surface-secondary)] p-4 font-mono-tech text-xs text-[var(--text-secondary)]">
                <span className="block text-[10px] text-[var(--text-muted)] uppercase mb-1 font-bold">
                  ARCHITECTURAL NOTES:
                </span>
                {project.architectureNotes}
              </div>
            )}
          </div>

          {/* 05 RESULT */}
          <div className="border border-[var(--border)] p-6 bg-[var(--surface)]">
            <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              05 // RESULT
            </span>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.result}
            </p>
          </div>

          {/* 06 WHAT I LEARNED */}
          <div className="border border-[var(--border)] p-6 bg-[var(--surface)]">
            <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-3">
              06 // WHAT I LEARNED & TECHNICAL TAKEAWAYS
            </span>
            <ul className="space-y-2 font-mono-tech text-xs text-[var(--text-secondary)]">
              {project.whatILearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[var(--text-primary)] font-bold">→</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 07 TECHNOLOGIES USED */}
          <div className="border border-[var(--border)] p-6 bg-[var(--surface-secondary)]">
            <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-3">
              07 // TECHNOLOGIES & STACK APPLIED
            </span>
            <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[var(--text-primary)] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
          <span className="font-mono-tech text-xs text-[var(--text-muted)]">
            AUTHENTIC CODEBASE // AVAILABLE UPON REQUEST DURING TECHNICAL INTERVIEWS
          </span>
          <button
            onClick={onClose}
            className="border border-[var(--border-strong)] bg-[var(--button-bg)] px-6 py-2.5 font-mono-tech text-xs font-semibold text-[var(--button-fg)] hover:bg-[var(--button-hover)] transition-colors"
          >
            CLOSE CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
};
