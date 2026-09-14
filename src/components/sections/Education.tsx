import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import StaggerContainer, { StaggerItem } from '../common/StaggerContainer';
import TiltCard from '../common/TiltCard';
import { EDUCATION, ACHIEVEMENTS } from '../../data/portfolio';
import AppIcon from '../icons/AppIcon';

const Education: React.FC = () => {
  return (
    <AnimatedSection id="education" variant="flip">
      <Card>
        <SectionTitle title="Education & Achievements" />
        <div className="mx-auto max-w-3xl space-y-8">
          <TiltCard intensity={5}>
            <div className="glow-border rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6 text-center transition-all duration-500 hover:shadow-xl sm:p-8">
              <div className="mb-4 inline-flex h-16 w-16 animate-float items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                <AppIcon name="graduation" size={32} className="text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[var(--color-text-primary)]">{EDUCATION.degree}</h3>
              <p className="mb-1 text-[var(--color-text-secondary)]">
                {EDUCATION.institution}, {EDUCATION.location}
              </p>
              <p className="mb-4 text-[var(--color-text-muted)]">
                {EDUCATION.startYear} – {EDUCATION.endYear}
              </p>
              {EDUCATION.gpa && (
                <span className="inline-block animate-pop-in rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2 font-semibold text-white shadow-md">
                  CGPA: {EDUCATION.gpa}
                </span>
              )}
            </div>
          </TiltCard>

          <div>
            <h3 className="mb-4 text-center text-lg font-semibold text-[var(--color-text-primary)]">Key Achievements</h3>
            <StaggerContainer className="grid gap-3 sm:grid-cols-2">
              {ACHIEVEMENTS.map((achievement, index) => (
                <StaggerItem key={achievement} index={index} variant="up" staggerDelay={100}>
                  <div className="group flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 transition-transform duration-300 group-hover:scale-125 group-hover:animate-wiggle">
                      <AppIcon name="check" size={14} />
                    </span>
                    <p className="text-sm text-[var(--color-text-secondary)]">{achievement}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Card>
    </AnimatedSection>
  );
};

export default Education;
