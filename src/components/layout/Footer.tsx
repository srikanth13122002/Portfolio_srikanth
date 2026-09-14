import React from 'react';
import { CONTACT_INFO } from '../../data/portfolio';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[var(--color-border)] py-10 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-4 flex flex-wrap justify-center gap-4">
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] transition-colors hover:text-blue-500"
          >
            LinkedIn
          </a>
          {CONTACT_INFO.github && (
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] transition-colors hover:text-blue-500"
            >
              GitHub
            </a>
          )}
          {CONTACT_INFO.portfolio && (
            <a
              href={CONTACT_INFO.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] transition-colors hover:text-blue-500"
            >
              Live Portfolio
            </a>
          )}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="text-[var(--color-text-muted)] transition-colors hover:text-blue-500"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {year} Srikanth G. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
