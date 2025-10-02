import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { PROJECTS } from '../utils/constants';

const Projects: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  const getProjectConfig = (index: number) => {
    const configs = [
      {
        gradient: 'from-blue-50 via-blue-100 to-blue-200',
        accent: 'from-blue-500 to-blue-600',
        icon: '🛡️',
        bgPattern: 'bg-blue-500/10'
      },
      {
        gradient: 'from-green-50 via-green-100 to-green-200',
        accent: 'from-green-500 to-green-600',
        icon: '💼',
        bgPattern: 'bg-green-500/10'
      },
      {
        gradient: 'from-purple-50 via-purple-100 to-purple-200',
        accent: 'from-purple-500 to-purple-600',
        icon: '🏛️',
        bgPattern: 'bg-purple-500/10'
      }
    ];
    return configs[index % configs.length];
  };

  return (
    <section id="projects" ref={ref} className="scroll-mt-20">
      <div className={`bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, index) => {
            const config = getProjectConfig(index);
            return (
              <div 
                key={project.id}
                className={`group transition-all duration-1000 delay-${index * 200} transform hover:scale-105 hover:-translate-y-2 ${
                  hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`relative bg-gradient-to-br ${config.gradient} p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full`}>
                  {/* Background pattern */}
                  <div className={`absolute inset-0 ${config.bgPattern} opacity-20`}></div>
                  
                  {/* Floating elements - hidden on mobile for performance */}
                  <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full blur-xl animate-pulse hidden sm:block"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/30 rounded-full blur-lg animate-pulse delay-500 hidden sm:block"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Project header */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-3xl">{config.icon}</span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    {/* Project description */}
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 sm:mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={tech}
                            className="bg-white/60 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 touch-manipulation"
                            style={{ animationDelay: `${techIndex * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-auto">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 touch-manipulation"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                          Live Demo
                        </a>
                      )}
                      {project.videoUrl && (
                        <a 
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 touch-manipulation"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                          </svg>
                          Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
