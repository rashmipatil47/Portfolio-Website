import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';
import './Skills.css';

const tabs = ['all', 'frontend', 'backend', 'tools', 'ai'];
const tabLabels = { all: '✨ All', frontend: '🎨 Frontend', backend: '⚙️ Backend', tools: '🛠️ Tools', ai: '🤖 AI' };

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { ref } = useInView({ threshold: 0.2, triggerOnce: true });

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
          {(activeTab === 'all' ? Object.values(skills).flat() : skills[activeTab]).map(name => (
            <span key={name} className="tech-chip">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
