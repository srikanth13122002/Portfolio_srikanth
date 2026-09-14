import React, { createContext, useContext } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../utils/cn';

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur' | 'flip';

const StaggerContext = createContext(false);

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface StaggerItemProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  variant?: RevealVariant;
  staggerDelay?: number;
}

const variantHidden: Record<RevealVariant, string> = {
  up: 'opacity-0 translate-y-8',
  down: 'opacity-0 -translate-y-8',
  left: 'opacity-0 -translate-x-10',
  right: 'opacity-0 translate-x-10',
  scale: 'opacity-0 scale-90',
  blur: 'opacity-0 blur-sm scale-95',
  flip: 'opacity-0 scale-95',
};

const variantVisible: Record<RevealVariant, string> = {
  up: 'opacity-100 translate-y-0',
  down: 'opacity-100 translate-y-0',
  left: 'opacity-100 translate-x-0',
  right: 'opacity-100 translate-x-0',
  scale: 'opacity-100 scale-100',
  blur: 'opacity-100 blur-0 scale-100',
  flip: 'opacity-100 scale-100',
};

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  index,
  className,
  variant = 'up',
  staggerDelay = 80,
}) => {
  const visible = useContext(StaggerContext);

  return (
    <div
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? variantVisible[variant] : variantHidden[variant],
        className
      )}
      style={{ transitionDelay: `${index * staggerDelay}ms` }}
    >
      {children}
    </div>
  );
};

const StaggerContainer: React.FC<StaggerContainerProps> = ({ children, className }) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.08 });

  return (
    <StaggerContext.Provider value={hasIntersected}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
        {children}
      </div>
    </StaggerContext.Provider>
  );
};

export default StaggerContainer;
