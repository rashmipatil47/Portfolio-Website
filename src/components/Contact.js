import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="orb orb-purple" style={{ width: '500px', height: '500px', top: '-100px', right: '-150px', position: 'absolute' }} />
      <div className="container contact-container">
        <div className="contact-info">
          <p className="section-label">Say hello</p>
          <h2 className="section-title">Let's <span>Work Together</span></h2>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            I'm open to full-time roles, internships, and interesting collaborations.
            Based in Tempe, AZ — drop me a message and I'll reply within 24 hours.
          </p>

          <div className="contact-details">
            <a href={`mailto:${personalInfo.email}`} className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="contact-detail-label">Email</p>
                <p className="contact-detail-value">{personalInfo.email}</p>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
                </svg>
              </div>
              <div>
                <p className="contact-detail-label">Phone</p>
                <p className="contact-detail-value">{personalInfo.phone}</p>
              </div>
            </a>

            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="contact-detail-label">GitHub</p>
                <p className="contact-detail-value">github.com/rashmipatil47</p>
              </div>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="contact-detail-label">LinkedIn</p>
                <p className="contact-detail-value">linkedin.com/in/rashmipatil47</p>
              </div>
            </a>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="contact-detail-label">Location</p>
                <p className="contact-detail-value">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              placeholder="Jane Smith"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="jane@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-input form-textarea"
              placeholder="Hi Rashmi, I'd love to discuss a role / project with you..."
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          {status === 'success' && (
            <div className="form-alert form-alert-success">
              ✅ Message sent! I'll get back to you within 24 hours.
            </div>
          )}
          {status === 'error' && (
            <div className="form-alert form-alert-error">
              ⚠️ Please fill in all fields before sending.
            </div>
          )}

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22,2 15,22 11,13 2,9"/>
            </svg>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
