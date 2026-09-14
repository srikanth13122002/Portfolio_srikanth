import React from 'react';
import { cn } from '../../utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className }) => {
  const letters = title.split('');

  return (
    <div className={cn('mb-8 text-center sm:mb-12', className)}>
      <h2 className="mb-3 text-3xl font-bold sm:text-4xl md:text-5xl">
        {letters.map((char, i) => (
          <span
            key={`${char}-${i}`}
            className={cn(
              'inline-block animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent',
              char === ' ' && 'w-2'
            )}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl animate-fade-in-up text-base text-[var(--color-text-muted)] sm:text-lg" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-4 h-1 w-20 animate-pulse-glow rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    </div>
  );
};

export default SectionTitle;
