import React from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import ScrollProgress from './components/common/ScrollProgress';
import ParticleBackground from './components/common/ParticleBackground';
import {
  Navigation,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Education,
  Contact,
  Footer,
} from './components';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-surface-muted)] transition-colors duration-500">
        <ScrollProgress />
        <ParticleBackground />
        <Navigation />
        <Hero />

        <main className="mx-auto max-w-7xl space-y-16 px-4 sm:space-y-20 sm:px-6">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
