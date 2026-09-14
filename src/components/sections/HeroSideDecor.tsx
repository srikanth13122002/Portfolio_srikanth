import React from 'react';
import AppIcon, { type IconName } from '../icons/AppIcon';
import { cn } from '../../utils/cn';

interface HeroSideDecorProps {
  side: 'left' | 'right';
  visible: boolean;
}

const LEFT_CODE = [
  { text: 'const dev = {', color: 'text-purple-400' },
  { text: "  role: 'Full-Stack',", color: 'text-blue-400' },
  { text: "  stack: ['React', 'NestJS'],", color: 'text-emerald-400' },
  { text: '  passion: true,', color: 'text-pink-400' },
  { text: '};', color: 'text-purple-400' },
];

const RIGHT_ITEMS: Array<{ icon: IconName; label: string; value: string; delay: string }> = [
  { icon: 'bot', label: 'AI Platforms', value: 'OpenAI · Bedrock', delay: '0ms' },
  { icon: 'cloud', label: 'Cloud', value: 'AWS · Docker', delay: '150ms' },
  { icon: 'database', label: 'Databases', value: 'Mongo · Postgres', delay: '300ms' },
  { icon: 'radio', label: 'Real-time', value: 'WS · SSE · Redis', delay: '450ms' },
];

const FLOATING_ICONS: Array<{ icon: IconName; top: string; left: string; delay: string; color: string }> = [
  { icon: 'monitor', top: '12%', left: '20%', delay: '0s', color: 'text-blue-500/40' },
  { icon: 'cog', top: '55%', left: '8%', delay: '1s', color: 'text-green-500/40' },
  { icon: 'rocket', top: '78%', left: '30%', delay: '2s', color: 'text-purple-500/40' },
];

const HeroSideDecor: React.FC<HeroSideDecorProps> = ({ side, visible }) => {
  if (side === 'left') {
    return (
      <div className="relative hidden h-full min-h-[520px] xl:block">
        {/* Vertical accent line */}
        <div className="absolute top-8 right-4 bottom-8 w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />
        <div className="absolute top-8 right-[15px] h-2 w-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
        <div className="absolute top-1/2 right-[15px] h-2 w-2 -translate-y-1/2 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
        <div className="absolute bottom-8 right-[15px] h-2 w-2 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50" />

        {/* Code snippet card */}
        <div
          className={cn(
            'hero-side-card absolute top-[8%] left-0 w-[240px] transition-all duration-1000',
            visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          )}
        >
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-[10px] text-[var(--color-text-muted)]">developer.ts</span>
          </div>
          <pre className="font-mono text-[11px] leading-relaxed">
            {LEFT_CODE.map((line) => (
              <div key={line.text} className={line.color}>
                {line.text}
              </div>
            ))}
          </pre>
        </div>

        {/* Floating icon badges */}
        {FLOATING_ICONS.map((item) => (
          <div
            key={item.icon}
            className={cn(
              'animate-float absolute flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)]/60 bg-[var(--color-surface-elevated)]/40 backdrop-blur-sm',
              item.color
            )}
            style={{ top: item.top, left: item.left, animationDelay: item.delay }}
          >
            <AppIcon name={item.icon} size={20} />
          </div>
        ))}

        {/* Stack label */}
        <div
          className={cn(
            'hero-side-card absolute bottom-[18%] left-2 w-[200px] transition-all duration-1000 delay-300',
            visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          )}
        >
          <p className="mb-2 text-xs font-semibold tracking-wider text-[var(--color-text-muted)] uppercase">
            Core Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {['React', 'Next.js', 'TypeScript', 'NestJS'].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-[10px] font-medium text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative hidden h-full min-h-[520px] xl:block">
      {/* Vertical accent line */}
      <div className="absolute top-8 left-4 bottom-8 w-px bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

      {/* Feature cards */}
      {RIGHT_ITEMS.map((item, i) => (
        <div
          key={item.label}
          className={cn(
            'hero-side-card absolute right-0 flex w-[220px] items-center gap-3 transition-all duration-1000',
            visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          )}
          style={{ top: `${12 + i * 22}%`, transitionDelay: item.delay }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
            <AppIcon name={item.icon} size={18} />
          </div>
          <div>
            <p className="text-xs font-semibold text-[var(--color-text-primary)]">{item.label}</p>
            <p className="text-[10px] text-[var(--color-text-muted)]">{item.value}</p>
          </div>
        </div>
      ))}

      {/* Decorative ring */}
      <div className="absolute right-8 bottom-[12%] flex h-28 w-28 items-center justify-center">
        <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-purple-500/30" />
        <div
          className="animate-spin-slow absolute inset-3 rounded-full border border-dashed border-blue-500/20"
          style={{ animationDirection: 'reverse', animationDuration: '10s' }}
        />
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20">
          <AppIcon name="sparkles" size={22} className="text-purple-400" />
        </div>
      </div>

      {/* Dot grid pattern */}
      <div className="hero-dot-grid absolute top-[6%] right-[10%] h-24 w-24 opacity-30" />
    </div>
  );
};

export default HeroSideDecor;
