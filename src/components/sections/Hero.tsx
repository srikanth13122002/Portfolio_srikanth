import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { CONTACT_INFO, HERO_STATS, TYPING_ROLES, SKILL_GROUPS } from '../../data/portfolio';
import TypeWriter from '../common/TypeWriter';
import CountUpStat from '../common/CountUpStat';
import ScrollIndicator from '../common/ScrollIndicator';
import HeroAvatar from './HeroAvatar';
import HeroSideDecor from './HeroSideDecor';
import HeroEdgeDecor from './HeroEdgeDecor';
import AppIcon, { type IconName } from '../icons/AppIcon';
import { cn } from '../../utils/cn';

const CONTACT_LINKS: Array<{
  href: string;
  label: string;
  short: string;
  icon: IconName;
  color: string;
  external?: boolean;
}> = [
  {
    href: `mailto:${CONTACT_INFO.email}`,
    label: CONTACT_INFO.email,
    short: 'Email',
    icon: 'mail',
    color: 'from-blue-500 to-blue-600',
  },
  {
    href: `tel:${CONTACT_INFO.phone}`,
    label: CONTACT_INFO.phone,
    short: 'Call',
    icon: 'phone',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    href: CONTACT_INFO.linkedin,
    label: 'LinkedIn',
    short: 'LinkedIn',
    icon: 'linkedin',
    color: 'from-indigo-500 to-indigo-600',
    external: true,
  },
];

const Hero: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  const marqueeSkills = SKILL_GROUPS.flatMap((g) => g.skills).slice(0, 24);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-x-hidden pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      <HeroEdgeDecor />

      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-spotlight absolute inset-0" />
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute top-16 left-[10%] h-80 w-80 animate-blob rounded-full bg-blue-600/20 blur-3xl" />
        <div
          className="absolute top-32 right-[8%] h-96 w-96 animate-blob rounded-full bg-purple-600/20 blur-3xl"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 animate-blob rounded-full bg-pink-600/10 blur-3xl"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 sm:px-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,640px)_minmax(0,1fr)] xl:gap-8">
        <HeroSideDecor side="left" visible={hasIntersected} />

        <div
          className={cn(
            'hero-glass rounded-3xl border border-[var(--color-border)]/60 px-6 py-10 sm:px-10 sm:py-14',
            'transition-all duration-1000',
            hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          {/* Status badge */}
          <div
            className={cn(
              'mb-8 flex justify-center transition-all duration-700 delay-200',
              hasIntersected ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            )}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-500 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to Opportunities
            </span>
          </div>

          <HeroAvatar visible={hasIntersected} />

          <h1
            className={cn(
              'mb-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl',
              'transition-all duration-700 delay-100',
              hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            <span className="hero-title-gradient animate-gradient inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Srikanth G
            </span>
          </h1>

          <p
            className={cn(
              'mb-3 min-h-[2.5rem] text-center text-lg font-semibold text-[var(--color-text-secondary)] sm:min-h-[3rem] sm:text-xl md:text-2xl',
              'transition-all duration-700 delay-200',
              hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            <TypeWriter words={TYPING_ROLES} className="inline-block min-w-[280px] sm:min-w-[340px]" />
          </p>

          <p
            className={cn(
              'mb-8 flex items-center justify-center gap-1.5 text-base text-[var(--color-text-muted)] sm:text-lg',
              'transition-all duration-700 delay-300',
              hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
          >
            <AppIcon name="mappin" size={16} className="text-blue-500" />
            {CONTACT_INFO.location}
          </p>

          {/* Contact links */}
          <div className="mb-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {CONTACT_LINKS.map((link, i) => (
              <a
                key={link.short}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={cn(
                  'btn-ripple group flex flex-1 items-center gap-3 rounded-2xl border border-[var(--color-border)]',
                  'bg-[var(--color-surface-elevated)]/60 px-4 py-3 backdrop-blur-sm',
                  'transition-all duration-500 hover:-translate-y-0.5 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5',
                  'sm:max-w-xs sm:flex-initial',
                  hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                )}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <div
                  className={cn(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md',
                    'transition-transform duration-300 group-hover:scale-110',
                    link.color
                  )}
                >
                  <AppIcon name={link.icon} size={18} className="text-white" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs font-medium text-[var(--color-text-muted)]">{link.short}</p>
                  <p className="truncate text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-blue-500">
                    {link.label}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div
            className={cn(
              'mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3',
              'transition-all duration-700 delay-500',
              hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            {HERO_STATS.map((stat, i) => (
              <CountUpStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
                icon={stat.icon}
                label={stat.label}
                start={hasIntersected}
                delay={600 + i * 120}
              />
            ))}
          </div>

          {/* CTAs */}
          <div
            className={cn(
              'flex flex-col items-center justify-center gap-3 sm:flex-row',
              'transition-all duration-700 delay-700',
              hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            )}
          >
            <a
              href="#projects"
              className="btn-ripple group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 font-semibold text-white shadow-xl shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/30 sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <AppIcon name="rocket" size={18} className="relative text-white" />
              <span className="relative">View Projects</span>
            </a>
            <a
              href="#contact"
              className="btn-ripple inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/80 px-8 py-3.5 font-semibold text-[var(--color-text-primary)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:text-blue-500 sm:w-auto"
            >
              <AppIcon name="sparkles" size={18} />
              Get In Touch
            </a>
          </div>
        </div>

        <HeroSideDecor side="right" visible={hasIntersected} />
      </div>

      {/* Tech marquee */}
      <div className="relative mx-auto mt-10 w-full max-w-6xl px-4 sm:mt-14">
        <p className="mb-4 text-center text-xs font-semibold tracking-widest text-[var(--color-text-muted)] uppercase">
          Tech I work with
        </p>
        <div className="tech-marquee">
          <div className="tech-marquee-track gap-3">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="mx-1.5 shrink-0 rounded-full border border-[var(--color-border)]/80 bg-[var(--color-surface-elevated)]/40 px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)] backdrop-blur-sm transition-colors hover:border-blue-500/40 hover:text-blue-500 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
