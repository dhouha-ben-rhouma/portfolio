import React from 'react';
import { meta } from '../data/content';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo">Dhouha.dev</span>
          <p>
            Bridging business and technology — one problem at a time. Based in Tunis, available remotely.
          </p>
        </div>

        <div className="footer-col">
          <span className="eyebrow">Explore</span>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#hackathons">Hackathons</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#creative">Creative</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <span className="eyebrow">Connect</span>
          <ul>
            <li><a href={`mailto:${meta.email}`}>{meta.email}</a></li>
            <li><a href={meta.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={meta.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={meta.cvFile} download>Download CV</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 {meta.name} — ISGT Tunis</span>
        <a href="#hero">Back to top ↑</a>
      </div>
    </footer>
  );
}
