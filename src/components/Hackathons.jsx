import React from 'react';
import { events, meta } from '../data/content';

export default function Hackathons() {
  return (
    <section id="hackathons" aria-labelledby="hack-heading">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Hackathons &amp; Events</p>
          <h2 id="hack-heading">I learn best under pressure and with a deadline.</h2>
        </div>

        <div className="events-grid">
          {events.map((ev, idx) => (
            <article
              key={ev.id}
              className="event-card glass"
              data-reveal
              data-reveal-delay={String(idx + 1)}
            >
              <p className="event-year">{ev.year}</p>
              <h3>{ev.title}</h3>
              <p>{ev.description}</p>
              <div className="tags">
                {ev.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={`tag ${tag.type === 'dev' ? 'tag-dev' : 'tag-biz'}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '.88rem', marginTop: '1.4rem' }} data-reveal>
          I take part in many hackathons and tech events every year — this is a selection. More on{' '}
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)' }}
          >
            LinkedIn →
          </a>
        </p>
      </div>
    </section>
  );
}
