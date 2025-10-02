import React from 'react';
import {
  Navigation,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
  Footer
} from './components';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
