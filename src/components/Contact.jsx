import React, { useState } from 'react';
import { meta } from '../data/content';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://formspree.io/f/${meta.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      // Mailto fallback
      window.location.href = `mailto:${meta.email}?subject=${encodeURIComponent(
        `Portfolio contact from ${formData.name || 'Visitor'}`
      )}&body=${encodeURIComponent(
        `${formData.message}\n\nFrom: ${formData.name} (${formData.email})\nTopic: ${formData.subject}`
      )}`;
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="contact-wrap" data-reveal>
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact-heading">Let's work on something that matters.</h2>

        <div className="contact-grid">
          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="fName">Your name</label>
              <input
                id="fName"
                name="name"
                type="text"
                required
                placeholder="Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="fEmail">Email address</label>
              <input
                id="fEmail"
                name="email"
                type="email"
                required
                placeholder="Email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="fSubject">What is this about?</label>
              <select
                id="fSubject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select a topic…</option>
                <option value="internship">Internship opportunity</option>
                <option value="freelance">Freelance / creative project</option>
                <option value="collaboration">Collaboration or project</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="fMsg">Message</label>
              <textarea
                id="fMsg"
                name="message"
                rows="4"
                required
                placeholder="Tell me what you need…"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start' }}
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent ✓' : 'Send message →'}
            </button>
          </form>

          {/* Contact aside */}
          <div className="contact-aside">
            <div>
              <h3>Prefer a direct line?</h3>
              <p>I check my email daily. For quick questions, LinkedIn works too.</p>
            </div>

            <div className="contact-links">
              <a href={`mailto:${meta.email}`} className="btn btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {meta.email}
              </a>
              <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="9" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a href={meta.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
            </div>

            <div>
              <span className="status-badge">
                <span className="status-dot" aria-hidden="true" />
                Open to internships starting {meta.availableFrom}
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '.84rem', lineHeight: '1.6' }}>
              I'm looking for internship roles in <strong style={{ color: 'var(--text)' }}>business analysis, junior ERP consulting, or digital transformation project support</strong>. I'm also available for small digital marketing and creative freelance projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
