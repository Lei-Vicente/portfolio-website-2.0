import React, { useState } from 'react';
import { generateLLMSTxt, generateJSONLD, PERSONAL_INFO } from '../data/portfolioData';
import { X, Copy, Check, Terminal, FileCode, Cpu } from 'lucide-react';

interface MachineReadableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MachineReadableModal: React.FC<MachineReadableModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'llms' | 'jsonld' | 'md'>('llms');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const llmsContent = generateLLMSTxt();
  const jsonldContent = JSON.stringify(generateJSONLD(), null, 2);

  const getCurrentContent = () => {
    switch (activeTab) {
      case 'llms':
        return llmsContent;
      case 'jsonld':
        return jsonldContent;
      case 'md':
        return llmsContent;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="machine-data-title"
    >
      <div
        className="relative my-6 w-full max-w-4xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 shadow-2xl transition-all font-mono-tech"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <Terminal className="h-5 w-5 text-[var(--text-primary)]" />
            <div>
              <h2 id="machine-data-title" className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
                MACHINE-READABLE SPECIFICATION
              </h2>
              <p className="text-[11px] text-[var(--text-muted)]">
                Single Source of Truth // LLMS.TXT • JSON-LD • RAW MARKDOWN
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 border border-[var(--border)] bg-[var(--surface-secondary)] px-3 py-1.5 text-xs text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'COPIED BUFFER' : 'COPY BUFFER'}</span>
            </button>

            <button
              onClick={onClose}
              className="border border-[var(--border)] p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-colors"
              aria-label="Close machine data modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[var(--border)] mb-4 text-xs">
          <button
            onClick={() => setActiveTab('llms')}
            className={`px-4 py-2 font-bold border-b-2 transition-colors ${
              activeTab === 'llms'
                ? 'border-[var(--text-primary)] text-[var(--text-primary)] bg-[var(--surface-secondary)]'
                : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            /llms.txt (AI Agent Index)
          </button>
          <button
            onClick={() => setActiveTab('jsonld')}
            className={`px-4 py-2 font-bold border-b-2 transition-colors ${
              activeTab === 'jsonld'
                ? 'border-[var(--text-primary)] text-[var(--text-primary)] bg-[var(--surface-secondary)]'
                : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Schema.org JSON-LD
          </button>
          <button
            onClick={() => setActiveTab('md')}
            className={`px-4 py-2 font-bold border-b-2 transition-colors ${
              activeTab === 'md'
                ? 'border-[var(--text-primary)] text-[var(--text-primary)] bg-[var(--surface-secondary)]'
                : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Markdown Mirror
          </button>
        </div>

        {/* Code Content Buffer */}
        <div className="relative">
          <pre className="h-96 overflow-auto border border-[var(--border)] bg-[var(--code-bg)] p-4 text-[11px] text-[var(--text-primary)] leading-relaxed rounded-none">
            <code>{getCurrentContent()}</code>
          </pre>
        </div>

        <div className="mt-4 flex items-center justify-between text-[11px] text-[var(--text-muted)] border-t border-[var(--border)] pt-3">
          <span>PARSED STRUCTURED SCHEMAS FOR AUTOMATED RECRUITMENT SYSTEMS & AI CRAWLERS</span>
          <span className="text-emerald-500">● VALIDATED PROTOCOL</span>
        </div>
      </div>
    </div>
  );
};
