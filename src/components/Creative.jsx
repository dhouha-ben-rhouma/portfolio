import React, { useState, useEffect } from 'react';
import { galleryItems, services } from '../data/content';

export default function Creative() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeImage) {
        setActiveImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  return (
    <section id="creative" aria-labelledby="creative-heading" style={{ background: 'var(--panel)' }}>
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Creative &amp; Marketing</p>
          <h2 id="creative-heading">Design and content that gets results.</h2>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid" data-reveal aria-label="Portfolio gallery">
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-label={`Open gallery sample ${idx + 1}`}
              onClick={() => setActiveImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImage(item);
                }
              }}
              className={`gallery-item ${item.large ? 'large' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', padding: '1rem' }}>
                [{item.alt}]
              </div>
              <div className="gallery-overlay" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="service-cards">
          {services.map((srv, idx) => (
            <article
              key={idx}
              className="service-card glass"
              data-reveal
              data-reveal-delay={String(idx + 1)}
            >
              <div className="service-icon" aria-hidden="true">
                {srv.icon}
              </div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
              <a
                href="#contact"
                className="btn btn-outline-accent"
                style={{ marginTop: '.5rem', alignSelf: 'flex-start', padding: '.6rem 1.2rem', fontSize: '.82rem' }}
              >
                Get a quote →
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          id="lightbox"
          className="lightbox open"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="lightbox-close"
            id="lightboxClose"
            aria-label="Close image viewer"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>
          <div
            style={{
              maxWidth: 'min(85vw, 600px)',
              padding: '2.5rem',
              borderRadius: '20px',
              background: 'var(--panel)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.85rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
              {activeImage.alt}
            </span>
            <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '.75rem' }}>
              Image source: {activeImage.src}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
