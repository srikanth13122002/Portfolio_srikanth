import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';
import type { RevealVariant } from './StaggerContainer';

interface AnimatedSectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

const variantHidden: Record<RevealVariant, string> = {
  up: 'opacity-0 translate-y-12',
  down: 'opacity-0 -translate-y-12',
  left: 'opacity-0 -translate-x-16',
  right: 'opacity-0 translate-x-16',
  scale: 'opacity-0 scale-95',
  blur: 'opacity-0 blur-md scale-95',
  flip: 'opacity-0 scale-90 rotate-1',
};

const variantVisible: Record<RevealVariant, string> = {
  up: 'opacity-100 translate-y-0',
  down: 'opacity-100 translate-y-0',
  left: 'opacity-100 translate-x-0',
  right: 'opacity-100 translate-x-0',
  scale: 'opacity-100 scale-100',
  blur: 'opacity-100 blur-0 scale-100',
  flip: 'opacity-100 scale-100 rotate-0',
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  id,
  children,
  className,
  delay = 0,
  variant = 'up',
}) => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section
      id={id}
      ref={ref}
      className={cn('scroll-mt-24', className)}
    >
      <div
        className={cn(
          'transition-all duration-1000 ease-out',
          hasIntersected ? variantVisible[variant] : variantHidden[variant]
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;
