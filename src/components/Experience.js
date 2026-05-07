import React, { useState } from 'react';
import { experience } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Work history</p>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-subtitle">
            From software engineering at Cognizant to GenAI at Kingship AI — here's my journey.
          </p>
        </div>

        <div className="exp-timeline">
          {experience.map((item, i) => (
            <div
              key={i}
              className={`exp-item ${expanded === i ? 'exp-item-open' : ''}`}
              onClick={() => setExpanded(expanded === i ? -1 : i)}
            >
              <div className="exp-dot-col">
                <div className="exp-dot" />
                {i < experience.length - 1 && <div className="exp-line" />}
              </div>

              <div className="exp-body">
                <div className="exp-header">
                  <div className="exp-meta">
                    <h3 className="exp-role">{item.role}</h3>
                    <p className="exp-company">
                      <span className="exp-at">@</span> {item.company}
                      <span className="exp-loc"> · {item.location}</span>
                    </p>
                  </div>
                  <div className="exp-right">
                    <span className="exp-duration">{item.duration}</span>
                    <span className="exp-chevron">{expanded === i ? '▲' : '▼'}</span>
                  </div>
                </div>

                {expanded === i && (
                  <div className="exp-details">
                    <ul className="exp-bullets">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="exp-bullet">
                          <span className="bullet-dot" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="exp-tech">
                      {item.tech.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
