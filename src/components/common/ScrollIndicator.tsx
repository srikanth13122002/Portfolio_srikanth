import React from 'react';

const ScrollIndicator: React.FC = () => (
  <a
    href="#about"
    className="group absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] transition-colors hover:text-blue-500"
    aria-label="Scroll to about section"
  >
    <span className="text-xs font-medium tracking-widest uppercase opacity-70">Scroll</span>
    <div className="relative flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1">
      <span className="animate-scroll-wheel h-2 w-1 rounded-full bg-current" />
    </div>
    <svg
      className="h-4 w-4 animate-bounce-soft"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </a>
);

export default ScrollIndicator;
