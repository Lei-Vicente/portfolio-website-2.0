import React, { useState } from 'react';
import { Moon, Sun, FileText, Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  onOpenResume: () => void;
  onOpenMachineData: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenResume, onOpenMachineData }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Monogram / Status */}
        <div className="flex items-center gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#home');
            }}
            className="group flex flex-col"
          >
            <span className="font-display text-sm font-bold tracking-tight text-[var(--text-primary)] transition-colors group-hover:opacity-80">
              LEIBERN R. VICENTE
            </span>
            <span className="font-mono-tech text-[10px] tracking-widest text-[var(--text-muted)]">
              BSIT / 4TH YEAR
            </span>
          </a>

          <div className="hidden items-center gap-2 border-l border-[var(--border)] pl-4 md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono-tech text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
              OPEN FOR INTERNSHIPS & FULL TIME OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.href)}
              className="px-3 py-1.5 font-mono-tech text-xs font-medium tracking-wider text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls & Utilities */}
        <div className="flex items-center gap-2">
          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="hidden items-center gap-1.5 border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 font-mono-tech text-xs font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-secondary)] sm:flex"
            title="Open digital resume / CV"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>RESUME</span>
          </button>

          {/* Machine Readable Data (LLMS.txt / JSON-LD) */}
          <button
            onClick={onOpenMachineData}
            className="flex items-center gap-1.5 border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 font-mono-tech text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]"
            title="Inspect Machine-Readable Data (llms.txt / JSON-LD / Markdown)"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">DATA</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text-primary)] transition-colors hover:bg-[var(--surface-secondary)]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4 text-[var(--text-primary)]" />
            ) : (
              <Sun className="h-4 w-4 text-[var(--text-primary)]" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text-primary)] md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[var(--border)] bg-[var(--background)] px-4 py-4 md:hidden">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScroll(link.href)}
                className="flex items-center justify-between border-b border-[var(--border)]/50 py-2.5 text-left font-mono-tech text-sm text-[var(--text-primary)] hover:text-[var(--accent)]"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-[var(--text-muted)]">↗</span>
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 border border-[var(--border)] bg-[var(--surface)] py-2.5 font-mono-tech text-xs font-semibold text-[var(--text-primary)]"
              >
                <FileText className="h-4 w-4" />
                VIEW DIGITAL RESUME (CV)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMachineData();
                }}
                className="flex items-center justify-center gap-2 border border-[var(--border)] bg-[var(--surface)] py-2 font-mono-tech text-xs text-[var(--text-muted)]"
              >
                <Terminal className="h-3.5 w-3.5" />
                INSPECT MACHINE-READABLE ARCHITECTURE (llms.txt)
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
