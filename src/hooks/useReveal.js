// src/hooks/useReveal.js
import { useEffect, useRef } from 'react';

/**
 * Attach to a container ref. All [data-reveal] children inside will
 * animate in when they enter the viewport.
 */
export function useReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = containerRef.current
      ? containerRef.current.querySelectorAll('[data-reveal]')
      : document.querySelectorAll('[data-reveal]');

    if (reduceMotion) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });

  return containerRef;
}
