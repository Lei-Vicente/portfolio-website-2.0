import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, CheckCircle2, Layers, Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'ACADEMIC PROJECT',
    'PERSONAL PROJECT',
    'CLIENT PROJECT',
    'EXPERIMENT',
  ];

  const filteredProjects =
    selectedCategory === 'ALL'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.type === selectedCategory);

  return (
    <section id="projects" className="border-b border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border)] pb-4">
          <div>
            <span className="font-mono-tech text-xs tracking-widest uppercase text-[var(--text-muted)]">
              05 / PRODUCTION & EVIDENCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--text-primary)] mt-1">
              SELECTED WORK & PROJECTS
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono-tech text-xs text-[var(--text-muted)]">
            // EVIDENCE OF PRACTICAL ABILITY & SYSTEM THINKING
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`border px-3 py-1 font-mono-tech text-xs transition-colors ${
                selectedCategory === cat
                  ? 'border-[var(--border-strong)] bg-[var(--surface-secondary)] text-[var(--text-primary)] font-bold'
                  : 'border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Swiss Editorial Neo-Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project: Project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 transition-all duration-200 hover:border-[var(--border-strong)] hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Card Top Metadata */}
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-4 font-mono-tech text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--text-primary)]">
                      PROJECT / {project.number}
                    </span>
                    <span className="text-[var(--text-muted)]">•</span>
                    <span className="text-[var(--text-muted)]">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="border border-[var(--border)] bg-[var(--surface-secondary)] px-2 py-0.5 text-[10px] font-semibold text-[var(--text-primary)]">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Card Title & Short Description */}
                <div className="mb-6">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-start justify-between gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--text-primary)]" />
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Problem & Solution Preview */}
                <div className="space-y-3 border-y border-[var(--border)] py-4 font-mono-tech text-xs">
                  <div>
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block">
                      CORE PROBLEM:
                    </span>
                    <p className="text-[var(--text-secondary)] line-clamp-2 mt-0.5">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--text-muted)] uppercase block">
                      ENGINEERING OUTCOME:
                    </span>
                    <p className="text-[var(--text-secondary)] line-clamp-2 mt-0.5">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Metrics Badges if present */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="border border-[var(--border)] bg-[var(--surface-secondary)] p-2 font-mono-tech"
                      >
                        <span className="block text-[9px] text-[var(--text-muted)] uppercase truncate">
                          {metric.label}
                        </span>
                        <span className="font-display text-sm font-bold text-[var(--text-primary)] block">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Technologies & Case Study Trigger */}
              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <div className="flex flex-wrap gap-1.5 mb-3 font-mono-tech text-[11px]">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="border border-[var(--border)] bg-[var(--surface-secondary)] px-2 py-0.5 text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="border border-[var(--border)] bg-[var(--surface-secondary)] px-1.5 py-0.5 text-[var(--text-muted)]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between font-mono-tech text-xs text-[var(--text-primary)] font-semibold pt-1">
                  <span>INSPECT FULL CASE STUDY</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for detailed case study */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
