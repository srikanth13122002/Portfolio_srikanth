import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import StaggerContainer, { StaggerItem } from '../common/StaggerContainer';
import { EXPERIENCES } from '../../data/portfolio';

const Experience: React.FC = () => {
  return (
    <AnimatedSection id="experience" variant="left">
      <Card>
        <SectionTitle title="Work Experience" subtitle="Building production-grade applications" />
        <div className="mx-auto max-w-4xl">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-8">
              <div className="absolute top-0 left-0 h-full w-1 rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
              <div className="timeline-dot absolute top-1 -left-1.5 h-4 w-4 rounded-full border-4 border-[var(--color-surface-elevated)] bg-blue-500 shadow-lg" />

              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] sm:text-2xl">{exp.title}</h3>
                  <p className="text-lg text-blue-500">{exp.company}</p>
                </div>
                <span className="inline-flex w-fit animate-border-dance rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-500">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>

              <StaggerContainer className="mb-6 space-y-3">
                {exp.description.map((item, i) => (
                  <StaggerItem key={item} index={i} variant="right" staggerDelay={60}>
                    <div className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      <span>{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <StaggerContainer className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <StaggerItem key={tech} index={i} variant="scale" staggerDelay={40}>
                    <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:text-blue-500 sm:text-sm">
                      {tech}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </Card>
    </AnimatedSection>
  );
};

export default Experience;
