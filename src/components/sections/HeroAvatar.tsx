import React from 'react';
import { cn } from '../../utils/cn';

interface HeroAvatarProps {
  visible: boolean;
}

const HeroAvatar: React.FC<HeroAvatarProps> = ({ visible }) => {
  return (
    <div
      className={cn(
        'relative mx-auto mb-10 h-44 w-44 sm:h-48 sm:w-48',
        'transition-all duration-1000',
        visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
      )}
    >
      <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl" />
      <div className="absolute inset-2 rounded-full border border-blue-500/20" />
      <div className="absolute inset-4 rounded-full border border-purple-500/15" />

      <div className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[3px]">
        <div className="flex h-full w-full items-center justify-center rounded-full bg-[var(--color-surface-muted)]">
          <div
            className="animate-spin-slow absolute inset-[6px] rounded-full border border-dashed border-purple-500/30"
            style={{ animationDirection: 'reverse', animationDuration: '12s' }}
          />
          <div className="animate-float relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-4xl font-bold tracking-tight text-white shadow-2xl shadow-purple-500/30 sm:h-36 sm:w-36">
            <span className="relative z-10">SG</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>

      <span className="animate-orbit absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/60" />
      <span
        className="animate-orbit-reverse absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 shadow-lg shadow-pink-400/60"
        style={{ animationDuration: '8s' }}
      />
    </div>
  );
};

export default HeroAvatar;
