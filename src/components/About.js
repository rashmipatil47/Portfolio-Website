import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

const About = () => (
  <section id="about" className="section about">
    <div className="container about-container">
      <div className="about-visual">
        <div className="about-card-main">
          <div className="about-avatar-lg">👩‍💻</div>
          <h3>{personalInfo.nameShort}</h3>
          <p className="about-card-role">{personalInfo.title}</p>
          <div className="about-card-badges">
            <span className="tag">GPA 4.0 — ASU</span>
            <span className="tag">Full Stack</span>
            <span className="tag">GenAI / LLM</span>
          </div>
        </div>
        <div className="about-card-mini card-mini-1">
          <span className="mini-icon">🚀</span>
          <div>
            <p className="mini-value">4+</p>
            <p className="mini-label">Years Exp.</p>
          </div>
        </div>
        <div className="about-card-mini card-mini-2">
          <span className="mini-icon">✅</span>
          <div>
            <p className="mini-value">200+</p>
            <p className="mini-label">Issues Fixed</p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <p className="section-label">About me</p>
        <h2 className="section-title">Crafting Digital <span>Experiences</span></h2>

        <p className="about-text">
          I'm a Full Stack Engineer with an MS in Information Technology from Arizona State University 
          (GPA 4.0) and 4+ years of hands-on industry experience. I've shipped scalable production 
          applications at Cognizant, contributed to GenAI/LLM products at Kingship AI Inc, and automated 
          workflows at ASU.
        </p>
        <p className="about-text">
          I specialize in React.js + Node.js ecosystems and love bridging clean, accessible UIs with 
          high-performance backends. I'm equally comfortable with Python, Django, ML pipelines, and 
          cloud deployments on AWS — and I genuinely enjoy integrating AI capabilities into real products.
        </p>

        <div className="about-highlights">
          {[
            { icon: '⚡', title: 'Performance Focused', desc: 'Reduced downtime 30% and boosted query performance at Cognizant' },
            { icon: '🤖', title: 'GenAI Experience',   desc: 'Optimizing LLM functionality at Kingship AI Inc with Python' },
            { icon: '🤝', title: 'Full SDLC',          desc: 'Requirements → UAT → deployment → prod support' },
          ].map((h, i) => (
            <div className="highlight-item" key={i}>
              <span className="highlight-icon">{h.icon}</span>
              <div>
                <p className="highlight-title">{h.title}</p>
                <p className="highlight-desc">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-actions">
          <a href={personalInfo.resumeUrl} className="btn-primary" download>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
