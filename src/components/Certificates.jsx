import React from 'react';
import { certificates } from '../data/content';

export default function Certificates() {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" aria-labelledby="certificates-heading" style={{ background: 'var(--panel)' }}>
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Credentials &amp; Learning</p>
          <h2 id="certificates-heading">Certificates</h2>
        </div>

        <div className="events-grid">
          {certificates.map((cert, idx) => (
            <article
              key={cert.id || idx}
              className="event-card glass"
              data-reveal
              data-reveal-delay={String(idx + 1)}
              style={{ borderLeftColor: 'var(--mint)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="event-year" style={{ color: 'var(--mint)' }}>
                  {cert.date}
                </span>
                <span className="exp-type-tag">
                  {cert.issuer}
                </span>
              </div>

              <h3>{cert.title}</h3>

              {cert.skills && cert.skills.length > 0 && (
                <div className="tags" style={{ marginTop: '.3rem' }}>
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tag tag-market">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {cert.link && (
                <div style={{ marginTop: 'auto', paddingTop: '.8rem' }}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link market"
                    style={{ color: 'var(--mint)', display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.85rem', fontWeight: 500 }}
                  >
                    {cert.linkLabel || 'View Credential →'}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
