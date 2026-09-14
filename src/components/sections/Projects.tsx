import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import StaggerContainer, { StaggerItem } from '../common/StaggerContainer';
import TiltCard from '../common/TiltCard';
import { PROJECTS } from '../../data/portfolio';
import AppIcon, { PROJECT_ICONS } from '../icons/AppIcon';
import { cn } from '../../utils/cn';

const projectAccents = [
  'from-blue-500 to-cyan-500',
  'from-red-500 to-orange-500',
  'from-green-500 to-emerald-500',
  'from-purple-500 to-pink-500',
];

const Projects: React.FC = () => {
  return (
    <AnimatedSection id="projects" variant="scale">
      <Card>
        <SectionTitle title="Featured Projects" subtitle="AI platforms, SaaS, and enterprise systems" />
        <StaggerContainer className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <StaggerItem
              key={project.id}
              index={index}
              variant={index % 2 === 0 ? 'left' : 'right'}
              staggerDelay={120}
            >
              <TiltCard intensity={6}>
                <article className="group glow-border flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6 transition-all duration-500 hover:shadow-2xl">
                  <div className="mb-4 flex items-start gap-3">
                    <span className={cn(
                      'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:animate-wiggle',
                      projectAccents[index % projectAccents.length]
                    )}>
                      <AppIcon name={PROJECT_ICONS[project.id] ?? 'rocket'} size={24} className="text-white" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)]">{project.title}</h3>
                      {project.subtitle && (
                        <p className="text-sm text-[var(--color-text-muted)]">{project.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                    {project.description}
                  </p>

                  <ul className="mb-5 space-y-2">
                    {project.highlights.map((highlight, hi) => (
                      <li
                        key={highlight}
                        className={cn(
                          'flex items-start gap-2 text-sm text-[var(--color-text-secondary)] transition-all duration-500',
                          'group-hover:translate-x-1'
                        )}
                        style={{ transitionDelay: `${hi * 50}ms` }}
                      >
                        <span className={cn('mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r', projectAccents[index % projectAccents.length])} />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-2 py-1 text-xs text-[var(--color-text-muted)] transition-all duration-300 hover:scale-105 hover:border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'btn-ripple inline-flex items-center gap-2 rounded-xl bg-gradient-to-r px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl',
                          projectAccents[index % projectAccents.length]
                        )}
                      >
                        Live Demo
                        <svg className="h-4 w-4 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ripple inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/50 hover:text-purple-500"
                      >
                        Watch Demo
                      </a>
                    )}
                  </div>
                </article>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Card>
    </AnimatedSection>
  );
};

export default Projects;
