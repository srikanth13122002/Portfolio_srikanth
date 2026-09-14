import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import StaggerContainer, { StaggerItem } from '../common/StaggerContainer';
import TiltCard from '../common/TiltCard';
import { SKILL_GROUPS } from '../../data/portfolio';
import AppIcon, { SKILL_CATEGORY_ICONS } from '../icons/AppIcon';
import { cn } from '../../utils/cn';

const categoryStyles: Record<string, { gradient: string; accent: string }> = {
  frontend: { gradient: 'from-blue-500/10 to-blue-600/5', accent: 'from-blue-500 to-blue-600' },
  backend: { gradient: 'from-green-500/10 to-green-600/5', accent: 'from-green-500 to-green-600' },
  database: { gradient: 'from-purple-500/10 to-purple-600/5', accent: 'from-purple-500 to-purple-600' },
  cloud: { gradient: 'from-sky-500/10 to-sky-600/5', accent: 'from-sky-500 to-sky-600' },
  messaging: { gradient: 'from-orange-500/10 to-orange-600/5', accent: 'from-orange-500 to-orange-600' },
  auth: { gradient: 'from-red-500/10 to-red-600/5', accent: 'from-red-500 to-red-600' },
  tools: { gradient: 'from-amber-500/10 to-amber-600/5', accent: 'from-amber-500 to-amber-600' },
  ai: { gradient: 'from-violet-500/10 to-violet-600/5', accent: 'from-violet-500 to-violet-600' },
  engineering: { gradient: 'from-teal-500/10 to-teal-600/5', accent: 'from-teal-500 to-teal-600' },
};

const Skills: React.FC = () => {
  return (
    <AnimatedSection id="skills" variant="blur">
      <Card>
        <SectionTitle title="Technical Skills" subtitle="Full-stack, cloud, AI, and real-time systems" />
        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SKILL_GROUPS.map((group, index) => {
            const style = categoryStyles[group.category] ?? categoryStyles.frontend;
            return (
              <StaggerItem key={group.category} index={index} variant="scale" staggerDelay={70}>
                <TiltCard intensity={8}>
                  <div
                    className={cn(
                      'group glow-border animate-border-dance rounded-2xl border border-[var(--color-border)] bg-gradient-to-br p-5 transition-shadow duration-500 hover:shadow-xl',
                      style.gradient
                    )}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-surface-elevated)] text-blue-500 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:animate-wiggle">
                        <AppIcon name={SKILL_CATEGORY_ICONS[group.category]} size={22} />
                      </span>
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)]">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className={cn(
                            'rounded-lg bg-gradient-to-r px-2.5 py-1.5 text-xs font-medium text-white shadow-sm transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 sm:text-sm',
                            style.accent
                          )}
                          style={{ transitionDelay: `${skillIndex * 20}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Card>
    </AnimatedSection>
  );
};

export default Skills;
