import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { PROFESSIONAL_SUMMARY } from '../../data/portfolio';

const About: React.FC = () => {
  const sentences = PROFESSIONAL_SUMMARY.match(/[^.!?]+[.!?]+/g) ?? [PROFESSIONAL_SUMMARY];

  return (
    <AnimatedSection id="about" variant="blur">
      <Card className="glow-border">
        <SectionTitle title="Professional Summary" subtitle="Building scalable, AI-powered web applications" />
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          {sentences.map((sentence, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-[var(--color-text-secondary)] transition-all duration-700 sm:text-lg"
              style={{
                animationDelay: `${i * 200}ms`,
                opacity: 1,
              }}
            >
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: `${i * 200}ms`, animationFillMode: 'both' }}>
                {sentence.trim()}
              </span>
            </p>
          ))}
        </div>
      </Card>
    </AnimatedSection>
  );
};

export default About;
