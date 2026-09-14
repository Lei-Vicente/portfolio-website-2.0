import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { PerformanceFooter } from './components/PerformanceFooter';
import { ResumeModal } from './components/ResumeModal';
import { MachineReadableModal } from './components/MachineReadableModal';
import { generateJSONLD } from './data/portfolioData';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [machineDataOpen, setMachineDataOpen] = useState(false);

  // Keep the Schema.org JSON-LD in sync with the mounted application.
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'jsonld-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(generateJSONLD());
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-200">
        {/* Navigation bar with theme toggle, resume, and machine data triggers */}
        <Navigation
          onOpenResume={() => setResumeOpen(true)}
          onOpenMachineData={() => setMachineDataOpen(true)}
        />

        <main id="main-content">
          {/* 01 — HERO */}
          <Hero
            onOpenResume={() => setResumeOpen(true)}
            onOpenMachineData={() => setMachineDataOpen(true)}
          />

          {/* 02 — ABOUT / PROFILE */}
          <AboutSection />

          {/* 03 — EDUCATION */}
          <EducationSection />

          {/* 04 — EXPERIENCE & LEADERSHIP */}
          <ExperienceSection />

          {/* 05 — SELECTED WORK / PROJECTS */}
          <ProjectsSection />

          {/* 06 — SKILLS / CAPABILITIES */}
          <SkillsSection />

          {/* 07 — CONTACT & INTERACTIVE INQUIRY FORM */}
          <ContactSection />
        </main>

        {/* 08 — PERFORMANCE & SYSTEM FOOTER */}
        <PerformanceFooter />

        {/* Web-Native Resume & PDF Printing Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />

        {/* Machine-Readable Architecture Modal (llms.txt, JSON-LD, Markdown) */}
        <MachineReadableModal
          isOpen={machineDataOpen}
          onClose={() => setMachineDataOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
