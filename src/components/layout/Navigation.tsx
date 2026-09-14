import React, { useState } from 'react';
import { useScroll } from '../../hooks/useScroll';
import { useActiveSection } from '../../hooks/useActiveSection';
import { NAV_ITEMS } from '../../data/portfolio';
import ThemeToggle from '../common/ThemeToggle';
import { cn } from '../../utils/cn';

const Navigation: React.FC = () => {
  const { isScrolled } = useScroll();
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full px-4 pt-3 sm:px-6 sm:pt-4">
      <div
        className={cn(
          'mx-auto max-w-7xl rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6',
          isScrolled
            ? 'border border-[var(--color-border)] bg-[var(--color-surface)]/90 shadow-xl backdrop-blur-xl'
            : 'border border-transparent bg-[var(--color-surface)]/40 backdrop-blur-md'
        )}
      >
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="animate-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent sm:text-2xl"
          >
            Srikanth G
          </a>

          <div className="hidden items-center gap-4 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  'group relative text-sm font-medium transition-all duration-300 xl:text-base',
                  activeSection === item.id
                    ? 'text-blue-500'
                    : 'text-[var(--color-text-secondary)] hover:text-blue-500'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300',
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl p-2 transition-colors hover:bg-[var(--color-surface-elevated)]"
              aria-label="Toggle mobile menu"
            >
              <div className="flex h-5 w-5 flex-col justify-center">
                <span
                  className={cn(
                    'block h-0.5 w-full bg-[var(--color-text-secondary)] transition-all duration-300',
                    isMobileMenuOpen ? 'translate-y-1 rotate-45' : '-translate-y-1'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-full bg-[var(--color-text-secondary)] transition-all duration-300',
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-full bg-[var(--color-text-secondary)] transition-all duration-300',
                    isMobileMenuOpen ? '-translate-y-1 -rotate-45' : 'translate-y-1'
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={cn(
            'overflow-hidden transition-all duration-500 lg:hidden',
            isMobileMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="space-y-1 pt-4 pb-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block rounded-xl px-4 py-3 font-medium transition-all duration-300',
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-elevated)]'
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
