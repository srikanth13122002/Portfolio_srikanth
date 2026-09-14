import React, { useEffect, useState } from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import AppIcon, { type IconName } from '../icons/AppIcon';
import { cn } from '../../utils/cn';

interface CountUpStatProps {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  icon?: IconName;
  start: boolean;
  delay?: number;
  className?: string;
}

const CountUpStat: React.FC<CountUpStatProps> = ({
  value,
  suffix = '',
  decimals = 0,
  label,
  icon,
  start,
  delay = 0,
  className,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!start) return;
    const timer = setTimeout(() => setAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [start, delay]);

  const count = useCountUp({ end: value, decimals, start: animate });

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)]/50 p-4 backdrop-blur-md transition-all duration-700',
        'hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10',
        start ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {icon && (
        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 transition-transform duration-300 group-hover:scale-110">
          <AppIcon name={icon} size={18} />
        </div>
      )}

      <p className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
        <span className="animate-text-glow bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {count}
          {suffix}
        </span>
      </p>
      <p className="mt-1 text-xs font-medium text-[var(--color-text-muted)] sm:text-sm">{label}</p>
    </div>
  );
};

export default CountUpStat;
