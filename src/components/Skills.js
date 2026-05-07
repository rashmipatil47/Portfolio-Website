import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';
import './Skills.css';

const SkillBar = ({ name, level, icon, inView }) => (
  <div className="skill-item">
    <div className="skill-info">
      <span className="skill-icon">{icon}</span>
      <span className="skill-name">{name}</span>
      <span className="skill-percent">{level}%</span>
    </div>
    <div className="skill-bar">
      <div
        className="skill-fill"
        style={{ width: inView ? `${level}%` : '0%' }}
      />
    </div>
  </div>
);

const tabs = ['frontend', 'backend', 'tools'];
const tabLabels = { frontend: '🎨 Frontend', backend: '⚙️ Backend', tools: '🛠️ Tools' };

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <p className="section-label">What I know</p>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <p className="section-subtitle">A curated set of technologies I use to build great products.</p>
        </div>

        <div className="skills-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skills[activeTab].map(skill => (
            <SkillBar key={skill.name} {...skill} inView={inView} />
          ))}
        </div>

        <div className="tech-cloud">
          {Object.values(skills).flat().map(s => (
            <span key={s.name} className="tech-chip">{s.icon} {s.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
