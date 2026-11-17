import React, { useState, useEffect } from 'react';
import { meta } from '../data/content';

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header className={`site-header glass ${scrolled ? 'scrolled' : ''}`} role="banner">
        <a href="#hero" className="logo" aria-label={`${meta.name} — back to top`}>
          Dhouha.dev
        </a>

        <nav className="site-nav hidden md:block" aria-label="Main navigation">
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#creative">Creative</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="nav-right">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="theme-toggle"
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                <circle cx="12" cy="12" r="5" />
              </svg>
            )}
          </button>

          <a href={meta.cvFile} download className="btn btn-primary" style={{ padding: '.55rem 1.1rem', fontSize: '.82rem' }}>
            Download CV
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            className={`nav-mobile-toggle ${mobileOpen ? 'open' : ''}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <nav
        aria-label="Mobile navigation"
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
      >
        <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
        <a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a>
        <a href="#skills" onClick={() => setMobileOpen(false)}>Skills</a>
        <a href="#creative" onClick={() => setMobileOpen(false)}>Creative</a>
        <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        <a href={meta.cvFile} download onClick={() => setMobileOpen(false)} className="btn btn-primary">
          Download CV
        </a>
      </nav>
    </>
  );
}
