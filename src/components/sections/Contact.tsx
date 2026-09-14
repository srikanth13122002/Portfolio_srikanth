import React from 'react';
import AnimatedSection from '../common/AnimatedSection';
import StaggerContainer, { StaggerItem } from '../common/StaggerContainer';
import { CONTACT_INFO } from '../../data/portfolio';
import AppIcon, { type IconName } from '../icons/AppIcon';

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact" variant="scale">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-center text-white shadow-2xl sm:p-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 h-32 w-32 animate-pulse-glow rounded-full bg-white blur-2xl" />
          <div className="absolute bottom-0 right-1/4 h-40 w-40 animate-pulse-glow rounded-full bg-white blur-2xl" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-white/30 blur-xl" />
        </div>

        <div className="relative z-10">
          <h2 className="mb-4 animate-gradient bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Let&apos;s Connect!
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg opacity-90">
            Open to Software Developer roles. Let&apos;s build something impactful together.
          </p>

          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {([
              { href: `mailto:${CONTACT_INFO.email}`, label: 'Email Me', icon: 'mail' as IconName },
              { href: CONTACT_INFO.linkedin, label: 'LinkedIn', icon: 'linkedin' as IconName, external: true },
              { href: `tel:${CONTACT_INFO.phone}`, label: 'Call Me', icon: 'phone' as IconName },
            ]).map((link, index) => (
              <StaggerItem key={link.label} index={index} variant="up" staggerDelay={120}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="btn-ripple group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
                >
                  <AppIcon name={link.icon} size={18} className="transition-transform duration-300 group-hover:scale-125 group-hover:animate-wiggle" />
                  {link.label}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
