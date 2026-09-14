import React from 'react';

const HeroEdgeDecor: React.FC = () => (
  <>
    {/* Left edge gradient strip */}
    <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-blue-500/5 to-transparent sm:w-24 lg:w-32" />
    {/* Right edge gradient strip */}
    <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-purple-500/5 to-transparent sm:w-24 lg:w-32" />

    {/* Corner brackets - left */}
    <div className="pointer-events-none absolute top-24 left-4 h-16 w-16 border-t-2 border-l-2 border-blue-500/20 sm:left-8 lg:left-12" />
    <div className="pointer-events-none absolute bottom-24 left-4 h-16 w-16 border-b-2 border-l-2 border-blue-500/20 sm:left-8 lg:left-12" />

    {/* Corner brackets - right */}
    <div className="pointer-events-none absolute top-24 right-4 h-16 w-16 border-t-2 border-r-2 border-purple-500/20 sm:right-8 lg:right-12" />
    <div className="pointer-events-none absolute right-4 bottom-24 h-16 w-16 border-r-2 border-b-2 border-purple-500/20 sm:right-8 lg:right-12" />

    {/* Horizontal accent lines */}
    <div className="pointer-events-none absolute top-[20%] left-0 h-px w-20 bg-gradient-to-r from-blue-500/40 to-transparent sm:w-32" />
    <div className="pointer-events-none absolute top-[35%] right-0 h-px w-20 bg-gradient-to-l from-purple-500/40 to-transparent sm:w-32" />
    <div className="pointer-events-none absolute bottom-[30%] left-0 h-px w-16 bg-gradient-to-r from-pink-500/30 to-transparent sm:w-28" />
    <div className="pointer-events-none absolute right-0 bottom-[45%] h-px w-16 bg-gradient-to-l from-blue-500/30 to-transparent sm:w-28" />
  </>
);

export default HeroEdgeDecor;
