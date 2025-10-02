import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { EXPERIENCES } from '../utils/constants';

const Experience: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="experience" ref={ref} className="scroll-mt-20">
      <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((experience, index) => (
            <div 
              key={experience.id}
              className={`border-l-4 border-blue-500 pl-6 transition-all duration-1000 delay-${index * 200} ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{experience.title}</h3>
                <span className="text-blue-600 font-semibold">
                  {experience.startDate} – {experience.endDate}
                </span>
              </div>
              <p className="text-lg text-gray-600 mb-6">{experience.company}</p>
              <ul className="space-y-3">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Technologies used */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-500 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
