import React from 'react';
import { howSteps } from '../data/content';

export default function HowIWork() {
  return (
    <section id="how" aria-labelledby="how-heading">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">My process</p>
          <h2 id="how-heading">How I work</h2>
        </div>

        <div className="how-steps">
          {howSteps.map((step, idx) => (
            <div
              key={step.num}
              className="how-step glass"
              data-reveal
              data-reveal-delay={String(idx + 1)}
            >
              <span className="how-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
