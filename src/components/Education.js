import React from 'react';
import { education } from '../data/portfolioData';
import './Education.css';

const Education = () => (
  <section id="education" className="section education">
    <div className="container">
      <div className="section-header">
        <p className="section-label">Academic background</p>
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Built on a strong academic foundation in Computer Science and Information Technology.
        </p>
      </div>

      <div className="edu-cards">
        {education.map((item, i) => (
          <div className="edu-card" key={i}>
            <div className="edu-card-left">
              <div className="edu-icon">{i === 0 ? '🎓' : '🏛️'}</div>
              <div className="edu-info">
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-institution">{item.institution}</p>
                <p className="edu-location">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 4 }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {item.location}
                </p>
              </div>
            </div>

            <div className="edu-card-right">
              <div className="edu-gpa-block">
                <span className="edu-gpa-value">{item.gpa}</span>
                <span className="edu-gpa-label">GPA</span>
              </div>
              <span className="edu-duration">{item.duration}</span>
            </div>

            <div className="edu-highlights">
              <p className="edu-highlights-label">Coursework</p>
              <div className="edu-highlights-list">
                {item.highlights.map(h => (
                  <span key={h} className="tag">{h}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="edu-stats">
        {[
          { value: '4.0', label: 'MS GPA at ASU', suffix: '/4.0' },
          { value: '4+', label: 'Years Experience', suffix: '' },
          { value: '200+', label: 'Issues Resolved', suffix: '' },
          { value: '30%', label: 'Downtime Reduction', suffix: '' },
        ].map((stat, i) => (
          <div className="edu-stat-card" key={i}>
            <span className="edu-stat-value">
              {stat.value}
              <span className="edu-stat-suffix">{stat.suffix}</span>
            </span>
            <span className="edu-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
