import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <div
      className={cn(
        'card-shimmer rounded-2xl border border-[var(--color-border)]',
        'bg-[var(--color-surface-elevated)] p-6 shadow-lg sm:rounded-3xl sm:p-8',
        'backdrop-blur-xl transition-all duration-500',
        hover && 'hover:-translate-y-1 hover:shadow-2xl',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
