import React from 'react';
import { experience } from '../data/content';

export default function Experience() {
  const getTagClass = (type) => {
    switch (type) {
      case 'dev':
        return 'tag-dev';
      case 'biz':
        return 'tag-biz';
      case 'mint':
        return 'tag-market';
      default:
        return '';
    }
  };

  return (
    <section id="experience" aria-labelledby="exp-heading" style={{ background: 'var(--panel)' }}>
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Experience</p>
          <h2 id="exp-heading">Where I've put the theory to work.</h2>
        </div>

        <div className="exp-list">
          {experience.map((exp, idx) => (
            <article
              key={exp.id}
              className="exp-card glass"
              data-reveal
              data-reveal-delay={String(idx + 1)}
            >
              <div className="exp-card-left">
                <p className="exp-role">{exp.role}</p>
                <p className="exp-org">{exp.org}</p>
                <p className="exp-desc">{exp.desc}</p>
                <div className="tags" style={{ marginTop: '.8rem' }}>
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={`tag ${getTagClass(tag.type)}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="exp-card-right">
                <p className="exp-date">{exp.date}</p>
                <span className="exp-type-tag">{exp.type}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
