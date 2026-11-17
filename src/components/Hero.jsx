import React, { useRef, useEffect } from 'react';
import { meta } from '../data/content';

export default function Hero() {
  const heroRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const hero = heroRef.current;
    const spotlight = spotlightRef.current;
    if (!hero || !spotlight) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.setProperty('--mx', `${x}px`);
      spotlight.style.setProperty('--my', `${y}px`);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    return () => hero.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero" aria-label="Introduction">
      <div ref={spotlightRef} id="spotlight" className="spotlight" aria-hidden="true" />

      <div className="hero-grid container">
        {/* Left: Text */}
        <div className="hero-inner">
          <p className="eyebrow hero-eyebrow">IT student · Business Information Systems · ISGT Tunis</p>
          <h1 className="headline">
            <span className="reveal-line"><span style={{ animationDelay: '.05s' }}>I turn business</span></span>
            <span className="reveal-line"><span style={{ animationDelay: '.2s' }}>problems into</span></span>
            <span className="reveal-line"><span style={{ animationDelay: '.35s' }}>working solutions.</span></span>
          </h1>
          <p className="hero-sub">
            I sit at the intersection of business logic and technology. Whether it's mapping a process, building a tool, or designing a campaign — I focus on the outcome first, the tech second.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">See my work →</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
          <div className="hero-status">
            <span className="status-badge" role="status" aria-live="polite">
              <span className="status-dot" aria-hidden="true" />
              Open to internships &amp; freelance projects
            </span>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-portrait img-placeholder" data-reveal>
            <span>Portrait photo</span>
          </div>
          <div className="hero-card-float glass" data-reveal data-reveal-delay="2">
            <span className="card-label">Looking for</span>
            <span className="card-value">Business Analyst · ERP Consultant · Digital Transformation</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        scroll
      </div>
    </section>
  );
}
