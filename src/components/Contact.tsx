import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CONTACT_INFO } from '../utils/constants';

const Contact: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section id="contact" ref={ref} className="scroll-mt-20">
      <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center transition-all duration-1000 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
        <p className="text-xl mb-8 opacity-90">Ready to work together? Get in touch!</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Email Me
          </a>
          <a 
            href={CONTACT_INFO.linkedin} 
            className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href={`tel:${CONTACT_INFO.phone}`} 
            className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
