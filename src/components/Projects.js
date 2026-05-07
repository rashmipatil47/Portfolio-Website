import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

const categories = ['all', 'fullstack', 'ml', 'backend', 'data', 'frontend'];

const catLabels = {
  all: '✦ All',
  fullstack: '⚡ Full Stack',
  ml: '🤖 ML / AI',
  backend: '⚙️ Backend',
  data: '📊 Data',
  frontend: '🎨 Frontend',
};

const ProjectCard = ({ project }) => (
  <div className="project-card">
    {project.featured && <div className="featured-badge">⭐ Featured</div>}
    <div className="project-icon">{project.image}</div>
    <h3 className="project-title">{project.title}</h3>
    <p className="project-desc">{project.description}</p>
    <div className="project-tech">
      {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
    </div>
    <div className="project-links">
      <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        Code
      </a>
      <a href={project.live} target="_blank" rel="noreferrer" className="proj-link proj-link-live">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15,3 21,3 21,9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        Live Demo
      </a>
    </div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <p className="section-label">What I've built</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">A selection of work I'm proud of — from side projects to production apps.</p>
        </div>

        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {catLabels[cat]}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
