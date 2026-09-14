import React from 'react';
import { useScroll } from '../../hooks/useScroll';

const ScrollProgress: React.FC = () => {
  const { scrollY } = useScroll();
  const docHeight = typeof document !== 'undefined'
    ? document.documentElement.scrollHeight - window.innerHeight
    : 1;
  const progress = Math.min((scrollY / docHeight) * 100, 100);

  return (
    <div className="fixed top-0 left-0 z-[60] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
