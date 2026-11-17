import React from 'react';
import { skillGroups } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" style={{ background: 'var(--panel)' }}>
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Skills</p>
          <h2 id="skills-heading">A toolkit built around outcomes, not titles.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="skill-group glass"
              data-reveal
              data-reveal-delay={String(idx + 1)}
            >
              <p className={`skill-group-label ${group.color}`}>{group.label}</p>
              <div className="skill-pills">
                {group.pills.map((pill, pIdx) => (
                  <span key={pIdx} className="skill-pill">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '.88rem', marginTop: '1.6rem' }} data-reveal>
          <strong style={{ color: 'var(--text)' }}>Languages:</strong> Arabic (native) · French (fluent) · English (professional working proficiency)
          <span style={{ color: 'var(--border)', margin: '0 .4rem' }}>·</span>
          <a href="#" style={{ color: 'var(--accent)' }}>
            [PLACEHOLDER: link to Python / LLM certification]
          </a>
        </p>
      </div>
    </section>
  );
}
