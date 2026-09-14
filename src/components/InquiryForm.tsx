import React, { useState } from 'react';
import { InquiryFormData, InquiryFormErrors } from '../types';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, RotateCcw } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    company: '',
    details: '',
  });

  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionReceipt, setSubmissionReceipt] = useState<{ id: string; timestamp: string } | null>(null);

  const validate = (data: InquiryFormData): InquiryFormErrors => {
    const newErrors: InquiryFormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Please provide your name or organization contact.';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = 'Please provide a valid email address for follow-up.';
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }

    if (!data.details.trim()) {
      newErrors.details = 'Please describe your project goals, scope, or role specifications.';
    } else if (data.details.trim().length < 15) {
      newErrors.details = 'Please include a bit more detail (minimum 15 characters).';
    }

    return newErrors;
  };

  const handleBlur = (field: keyof InquiryFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  };

  const handleChange = (field: keyof InquiryFormData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ name: true, email: true, company: true, details: true });
    const currentErrors = validate(formData);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      // Focus first error element
      const firstErrorField = Object.keys(currentErrors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    setStatus('submitting');

    try {
      // Realistic simulated network request with timeout
      await new Promise((resolve) => setTimeout(resolve, 900));

      const receipt = {
        id: `INQ-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
        timestamp: new Date().toISOString(),
      };

      // Persist in localStorage for inquiry audit trail
      const existing = JSON.parse(localStorage.getItem('user_inquiries') || '[]');
      existing.push({ ...formData, receipt });
      localStorage.setItem('user_inquiries', JSON.stringify(existing));

      setSubmissionReceipt(receipt);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', company: '', details: '' });
    setErrors({});
    setTouched({});
    setStatus('idle');
    setSubmissionReceipt(null);
  };

  return (
    <div id="contact-form" className="w-full">
      {/* Large Contained Bordered Container */}
      <div className="border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10">
        {/* Section Header with exact label */}
        <div className="border-b border-[var(--border)] pb-4 mb-8">
          <div className="flex items-center justify-between">
            <h3 className="font-mono-tech text-xs sm:text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">
              INTERACTIVE INQUIRY FORM
            </h3>
            <span className="font-mono-tech text-[10px] text-[var(--text-muted)]">
              COMMUNICATION_PROTOCOL // 01
            </span>
          </div>
        </div>

        {status === 'success' && submissionReceipt ? (
          <div className="border border-[var(--border)] bg-[var(--surface-secondary)] p-8 text-center sm:text-left">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
              <h4 className="font-display text-xl font-bold text-[var(--text-primary)]">
                MESSAGE DISPATCHED SUCCESSFULLY
              </h4>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              Thank you for reaching out, <strong className="text-[var(--text-primary)]">{formData.name}</strong>. Your inquiry has been validated and recorded. I review incoming communications daily and will reply within 24 hours.
            </p>

            <div className="border border-[var(--border)] bg-[var(--surface)] p-4 font-mono-tech text-xs mb-6 space-y-1">
              <div>
                <span className="text-[var(--text-muted)]">REFERENCE ID: </span>
                <span className="font-bold text-[var(--text-primary)]">{submissionReceipt.id}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">RECIPIENT: </span>
                <span className="text-[var(--text-primary)]">leivcnt01@gmail.com</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">RECORDED AT: </span>
                <span className="text-[var(--text-primary)]">{submissionReceipt.timestamp}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 border border-[var(--border-strong)] bg-[var(--button-bg)] px-5 py-2.5 font-mono-tech text-xs font-semibold text-[var(--button-fg)] hover:bg-[var(--button-hover)] transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>SEND ANOTHER INQUIRY</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {status === 'error' && (
              <div className="border border-red-500/50 bg-red-500/10 p-4 font-mono-tech text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>An error occurred while submitting. Please check your inputs or email leivcnt01@gmail.com directly.</span>
              </div>
            )}

            {/* 2. CONTACT INFORMATION: Two-column layout on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* YOUR NAME */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block font-mono-tech text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]"
                >
                  YOUR NAME <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  placeholder="e.g. Alexis Torres"
                  disabled={status === 'submitting'}
                  className={`w-full border px-4 py-3 font-mono-tech text-xs text-[var(--text-primary)] bg-[var(--input-bg)] transition-colors outline-none focus:border-[var(--input-focus)] focus:ring-1 focus:ring-[var(--input-focus)] ${
                    touched.name && errors.name
                      ? 'border-red-500 bg-red-500/5'
                      : 'border-[var(--input-border)]'
                  }`}
                  aria-required="true"
                  aria-invalid={!!(touched.name && errors.name)}
                  aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                />
                {touched.name && errors.name && (
                  <p id="name-error" className="font-mono-tech text-[11px] text-red-500 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL ADDRESS */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block font-mono-tech text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]"
                >
                  EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  placeholder="e.g. alexis@company.com"
                  disabled={status === 'submitting'}
                  className={`w-full border px-4 py-3 font-mono-tech text-xs text-[var(--text-primary)] bg-[var(--input-bg)] transition-colors outline-none focus:border-[var(--input-focus)] focus:ring-1 focus:ring-[var(--input-focus)] ${
                    touched.email && errors.email
                      ? 'border-red-500 bg-red-500/5'
                      : 'border-[var(--input-border)]'
                  }`}
                  aria-required="true"
                  aria-invalid={!!(touched.email && errors.email)}
                  aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="font-mono-tech text-[11px] text-red-500 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* 3. COMPANY / ORGANIZATION (OPTIONAL) */}
            <div className="space-y-2">
              <label
                htmlFor="company"
                className="block font-mono-tech text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]"
              >
                COMPANY / ORGANIZATION (OPTIONAL)
              </label>
              <input
                id="company"
                type="text"
                value={formData.company || ''}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="e.g. Global Tech Solutions"
                disabled={status === 'submitting'}
                className="w-full border border-[var(--input-border)] px-4 py-3 font-mono-tech text-xs text-[var(--text-primary)] bg-[var(--input-bg)] transition-colors outline-none focus:border-[var(--input-focus)] focus:ring-1 focus:ring-[var(--input-focus)]"
              />
            </div>

            {/* 4. PROJECT DETAILS OR ROLE SPECIFICATIONS */}
            <div className="space-y-2">
              <label
                htmlFor="details"
                className="block font-mono-tech text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)]"
              >
                PROJECT DETAILS OR ROLE SPECIFICATIONS <span className="text-red-500">*</span>
              </label>
              <textarea
                id="details"
                rows={5}
                value={formData.details}
                onChange={(e) => handleChange('details', e.target.value)}
                onBlur={() => handleBlur('details')}
                placeholder="Describe your goals, requirements, constraints, or the full-time role requirements..."
                disabled={status === 'submitting'}
                className={`w-full border px-4 py-3 font-mono-tech text-xs text-[var(--text-primary)] bg-[var(--input-bg)] transition-colors outline-none resize-y focus:border-[var(--input-focus)] focus:ring-1 focus:ring-[var(--input-focus)] ${
                  touched.details && errors.details
                    ? 'border-red-500 bg-red-500/5'
                    : 'border-[var(--input-border)]'
                }`}
                aria-required="true"
                aria-invalid={!!(touched.details && errors.details)}
                aria-describedby={touched.details && errors.details ? 'details-error' : undefined}
              />
              {touched.details && errors.details && (
                <p id="details-error" className="font-mono-tech text-[11px] text-red-500 mt-1">
                  {errors.details}
                </p>
              )}
            </div>

            {/* 5. SUBMISSION AREA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
              <div className="font-mono-tech text-xs text-[var(--text-muted)]">
                * I TYPICALLY RESPOND WITHIN 24 HOURS.
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group relative inline-flex items-center justify-center gap-2 border border-[var(--border-strong)] bg-[var(--button-bg)] px-8 py-3.5 font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--button-fg)] transition-all hover:bg-[var(--button-hover)] disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>DISPATCHING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
