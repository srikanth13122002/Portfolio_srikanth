import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SKILLS } from '../utils/constants';

const Skills: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  const getCategoryConfig = (category: string) => {
    const configs = {
      frontend: {
        gradient: 'from-blue-50 via-blue-100 to-blue-200',
        textColor: 'text-blue-800',
        tagColor: 'from-blue-500 to-blue-600',
        icon: '💻',
        bgPattern: 'bg-blue-500/10'
      },
      backend: {
        gradient: 'from-green-50 via-green-100 to-green-200',
        textColor: 'text-green-800',
        tagColor: 'from-green-500 to-green-600',
        icon: '⚙️',
        bgPattern: 'bg-green-500/10'
      },
      database: {
        gradient: 'from-purple-50 via-purple-100 to-purple-200',
        textColor: 'text-purple-800',
        tagColor: 'from-purple-500 to-purple-600',
        icon: '🗄️',
        bgPattern: 'bg-purple-500/10'
      },
      other: {
        gradient: 'from-orange-50 via-orange-100 to-orange-200',
        textColor: 'text-orange-800',
        tagColor: 'from-orange-500 to-orange-600',
        icon: '🛠️',
        bgPattern: 'bg-orange-500/10'
      }
    };
    return configs[category as keyof typeof configs] || configs.other;
  };

  const getCategoryTitle = (category: string) => {
    const titles = {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      other: 'Other'
    };
    return titles[category as keyof typeof titles] || category;
  };

  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  return (
    <section id="skills" ref={ref} className="scroll-mt-20">
      <div className={`bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => {
            const config = getCategoryConfig(category);
            return (
              <div 
                key={category}
                className={`group transition-all duration-1000 delay-${categoryIndex * 200} transform hover:scale-105 ${
                  hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`relative bg-gradient-to-br ${config.gradient} p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                  {/* Background pattern */}
                  <div className={`absolute inset-0 ${config.bgPattern} opacity-20`}></div>
                  
                  {/* Floating elements - hidden on mobile for performance */}
                  <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full blur-xl animate-pulse hidden sm:block"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-12 sm:h-12 bg-white/30 rounded-full blur-lg animate-pulse delay-500 hidden sm:block"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <span className="text-2xl sm:text-3xl">{config.icon}</span>
                      <h3 className={`text-xl sm:text-2xl font-bold ${config.textColor}`}>
                        {getCategoryTitle(category)}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {skills.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="group/skill"
                          style={{ animationDelay: `${skillIndex * 100}ms` }}
                        >
                          <div className={`relative bg-gradient-to-r ${config.tagColor} text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer touch-manipulation`}>
                            <div className="absolute inset-0 bg-white/20 rounded-lg sm:rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 font-medium text-xs sm:text-sm">{skill.name}</span>
                            
                            {/* Skill level indicator */}
                            <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-white/30 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-white/60 rounded-full transition-all duration-1000 ${
                                  skill.level === 'advanced' ? 'w-full' : 
                                  skill.level === 'intermediate' ? 'w-2/3' : 'w-1/3'
                                }`}
                                style={{ animationDelay: `${skillIndex * 200}ms` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
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

export default Skills;
