import React from 'react';
import { useMouseTilt } from '../../hooks/useMouseTilt';
import { cn } from '../../utils/cn';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className, intensity = 10 }) => {
  const { ref, style, handleMouseMove, handleMouseLeave } = useMouseTilt(intensity);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={cn('will-change-transform', className)}
    >
      {children}
    </div>
  );
};

export default TiltCard;
