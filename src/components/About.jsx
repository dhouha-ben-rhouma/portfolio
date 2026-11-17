import React from 'react';
import { meta } from '../data/content';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Left: portrait + quote */}
          <div data-reveal>
            <div className="about-portrait img-placeholder">
              <span>Portrait</span>
            </div>
            <blockquote className="pull-quote">
              "I'm not a pure developer and I don't want to be boxed in as one. I'm most useful when business and tech need to talk to each other."
            </blockquote>
          </div>

          {/* Right: text */}
          <div className="about-text" data-reveal data-reveal-delay="1">
            <div className="section-head" style={{ marginBottom: '1.6rem' }}>
              <p className="eyebrow">About me</p>
              <h2 id="about-heading">The person behind the work.</h2>
            </div>

            <p>
              I'm Dhouha, a Business Information Systems student at the Higher Institute of Management in Tunis (ISGT). I ended up studying at the intersection of business and IT by design — I wanted to understand how organisations actually work before deciding how to improve them with technology.
            </p>
            <p>
              Outside the classroom, I've built websites, managed creative projects, volunteered internationally with AIESEC, and competed in multiple hackathons. I'm drawn to ERP systems, business process analysis, and anything that connects strategy to execution. When I'm not in front of a screen, I'm usually presenting something — public speaking is a skill I take seriously.
            </p>

            <div className="hero-actions" style={{ marginTop: '1.8rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={meta.cvFile} download className="btn btn-primary">
                Download CV
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
