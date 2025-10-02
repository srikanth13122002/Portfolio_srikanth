import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { EDUCATION } from '../utils/constants';

const Education: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section ref={ref} className="scroll-mt-20">
      <div className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{EDUCATION.degree}</h3>
            <p className="text-gray-600 mb-2">{EDUCATION.institution}, {EDUCATION.location}</p>
            <p className="text-gray-500 mb-2">{EDUCATION.startYear} – {EDUCATION.endYear}</p>
            {EDUCATION.gpa && (
              <div className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full mb-4">
                CGPA: {EDUCATION.gpa}
              </div>
            )}
            {EDUCATION.achievements && EDUCATION.achievements.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">Achievements:</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {EDUCATION.achievements.map((achievement, index) => (
                    <span 
                      key={index}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
