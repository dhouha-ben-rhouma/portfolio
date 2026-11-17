import React from 'react';
import { projects } from '../data/content';

export default function Projects() {
  const getTagClass = (type) => {
    switch (type) {
      case 'dev':
        return 'tag-dev';
      case 'biz':
        return 'tag-biz';
      case 'design':
        return 'tag-design';
      default:
        return '';
    }
  };

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-heading">The problem comes first. The tech follows.</h2>
        </div>

        <div className="proj-rail">
          {projects.map((proj, idx) => (
            <article
              key={proj.id}
              className="proj-card glass"
              data-reveal
              data-reveal-delay={String(idx + 1)}
            >
              <div className="proj-thumb img-placeholder">
                {proj.image ? (
                  <img src={proj.image} alt={proj.imageAlt} loading="lazy" />
                ) : (
                  <span>Project visual</span>
                )}
              </div>

              <p className="proj-problem">{proj.problem}</p>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <div className="proj-footer">
                <div className="tags">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={`tag ${getTagClass(tag.type)}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>

                {proj.badge && (
                  <span
                    className="tag"
                    style={{
                      color: 'var(--rose)',
                      borderColor: 'var(--rose)',
                      background: 'var(--rose-wash)',
                    }}
                  >
                    {proj.badge}
                  </span>
                )}

                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="proj-link">
                    View project →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
