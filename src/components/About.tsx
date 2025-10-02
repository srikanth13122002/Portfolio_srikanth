import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="scroll-mt-20">
      <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Career Objective</h2>
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
          Junior Software Developer with 1+ years of full-stack experience in
          React.js, Redux, Node.js, NestJS, and MongoDB. Skilled in building
          workflow-driven applications, API integration, and responsive UI/UX.
          Seeking a Software Developer role to contribute to innovative
          projects.
        </p>
      </div>
    </section>
  );
};

export default About;
