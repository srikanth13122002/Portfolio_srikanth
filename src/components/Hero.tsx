import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CONTACT_INFO } from '../utils/constants';

const Hero: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section ref={ref} className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements - hidden on mobile for performance */}
      <div className="absolute inset-0 -z-10 hidden sm:block">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className={`mb-6 sm:mb-8 transition-all duration-1000 ease-out ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Animated Avatar - Responsive sizing */}
          <div className="relative mb-6 sm:mb-8">
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold shadow-2xl animate-bounce">
                  SG
                </div>
              </div>
            </div>
            {/* Floating particles around avatar - hidden on mobile */}
            <div className="absolute -top-4 -left-4 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-ping hidden sm:block"></div>
            <div className="absolute -top-2 -right-6 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-ping delay-300 hidden sm:block"></div>
            <div className="absolute -bottom-2 -left-6 w-1 h-1 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-ping delay-700 hidden sm:block"></div>
            <div className="absolute -bottom-4 -right-4 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400 rounded-full animate-ping delay-1000 hidden sm:block"></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Srikanth G
            </span>
          </h1>
          
          <div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold animate-fade-in-up">
              Junior Software Developer
            </p>
            <p className="text-base sm:text-lg text-gray-500 animate-fade-in-up delay-200">
              {CONTACT_INFO.location}
            </p>
          </div>
          
          {/* Contact links with animations - Mobile optimized */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-gray-600 mb-8 sm:mb-12">
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 touch-manipulation"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <span className="font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors hidden sm:inline">{CONTACT_INFO.email}</span>
              <span className="font-medium text-sm sm:text-base group-hover:text-blue-600 transition-colors sm:hidden">Email</span>
            </a>
            
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 touch-manipulation"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <span className="font-medium text-sm sm:text-base group-hover:text-green-600 transition-colors hidden sm:inline">{CONTACT_INFO.phone}</span>
              <span className="font-medium text-sm sm:text-base group-hover:text-green-600 transition-colors sm:hidden">Call</span>
            </a>
            
            <a 
              href={CONTACT_INFO.linkedin} 
              className="group flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95 touch-manipulation"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="font-medium text-sm sm:text-base group-hover:text-indigo-600 transition-colors">LinkedIn</span>
            </a>
          </div>
        </div>
        
        {/* CTA Button with advanced animations - Mobile optimized */}
        <div className={`transition-all duration-1000 delay-500 ease-out ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a 
            href="#about" 
            className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 active:scale-95 touch-manipulation"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 font-semibold text-base sm:text-lg">Learn More About Me</span>
            <svg className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
