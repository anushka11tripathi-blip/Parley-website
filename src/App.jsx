import React, { useState, useEffect } from 'react';
import './App.css';

import glaLogo from './assets/gla-logo.png';
import saturangleLogo from './assets/saturangle-logo.png';

export default function App() {
  const [activeNav, setActiveNav] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'vision', 'experience', 'saturangle'];
      const scrollY = window.scrollY + 250;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveNav(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visionPillars = [
    {
      num: '01',
      title: 'CONSTRUCTIVE DIALOGUE',
      desc: 'Moving past polarizing arguments toward constructive, nuanced conversations that discover shared ground.'
    },
    {
      num: '02',
      title: 'DIVERSE PERSPECTIVES',
      desc: 'Bringing multidisciplinary thinkers together to challenge status-quo assumptions and broaden understanding.'
    },
    {
      num: '03',
      title: 'IDEA INCUBATION',
      desc: 'Treating thoughts not as finished conclusions, but as raw materials to be refined through shared intellect.'
    },
    {
      num: '04',
      title: 'YOUTH LEADERSHIP',
      desc: 'Empowering future decision-makers with the poise, critical judgment, and clarity required to lead.'
    }
  ];

  return (
    <div className="master-canvas">
      {/* 1. Top Header with Large Distinct Logos */}
      <header className="header-bar">
        <div className="header-inner">
          <div className="brand-duo-lockup">
            <img 
              src={glaLogo} 
              alt="GLA University Official Logo" 
              className="brand-logo-img"
            />
            <div className="brand-divider" />
            <img 
              src={saturangleLogo} 
              alt="Saturangle Official Logo" 
              className="brand-logo-img"
            />
          </div>

          <nav className="nav-cluster">
            <a href="#about" className={`nav-link-btn ${activeNav === 'about' ? 'active' : ''}`}>01 About</a>
            <a href="#vision" className={`nav-link-btn ${activeNav === 'vision' ? 'active' : ''}`}>02 Vision</a>
            <a href="#experience" className={`nav-link-btn ${activeNav === 'experience' ? 'active' : ''}`}>03 Experience</a>
            <a href="#saturangle" className={`nav-link-btn ${activeNav === 'saturangle' ? 'active' : ''}`}>04 Saturangle</a>
          </nav>

          <div className="nav-identity-pill">PARLEY</div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <main>
        <section className="hero-stage-container section-wrap">
          <div className="hero-backdrop-silhouette" aria-hidden="true" />
          <div className="hero-veil" aria-hidden="true" />

          <div className="hero-editorial-wrap">
            {/* Elegant Collaboration Badge */}
            <div className="collab-pill">
              <span className="collab-dot" />
              <span className="collab-text">GLA University × Saturangle Collaboration</span>
            </div>

            <h1 className="hero-main-title">
              <span className="gradient-text">PARLEY</span>
            </h1>

            <p className="hero-sub-statement">
              The flagship intellectual round-table discourse where perspectives meet, ideas are refined, and meaningful dialogues shape the future.
            </p>

            <div className="hero-tag-container">
              <span className="tag-label">Flagship Intellectual Roundtable Dialogue</span>
            </div>
          </div>
        </section>

        {/* 3. Structured About Section */}
        <section id="about" className="section-wrap">
          <span className="section-tagline">01 / The Identity</span>
          <h2 className="section-headline">What is Parley?</h2>

          <div className="about-grid-layout">
            <div className="about-main-narrative">
              <p className="lead-paragraph">
                Parley is an intellectual round-table designed to transcend polarized debates—transforming open conversation into shared clarity and actionable perspectives.
              </p>
              <p className="body-paragraph">
                Derived from the historical tradition of gathering to hold deliberate dialogue, Parley provides an open floor at GLA University for students and multidisciplinary thinkers to dissect contemporary challenges.
              </p>
              <p className="body-paragraph">
                Unlike competitive podium debates, Parley balances rigor with synthesis. We build a circular environment where perspectives meet equally to explore ideas that move forward.
              </p>
            </div>

            <div className="about-side-card">
              <h4>The Round-Table Philosophy</h4>
              <p>
                Every voice holds equal weight. Parley abandons rigid podiums in favor of open circular discourse—fostering analytical nuance, cross-domain debate, and actionable clarity.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Vision Section */}
        <section id="vision" className="section-wrap">
          <span className="section-tagline">02 / The Purpose</span>
          <h2 className="section-headline">Why Parley Exists</h2>
          
          <div className="vision-deck-grid">
            {visionPillars.map((item) => (
              <div key={item.num} className="vision-card">
                <span className="card-num-badge">{item.num}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Experience Section */}
        <section id="experience" className="section-wrap">
          <span className="section-tagline">03 / The Format</span>
          <h2 className="section-headline">The Parley Experience</h2>
          
          <div className="exp-flow-grid">
            <div className="exp-tile">
              <h4>Moderated Circles</h4>
              <p>Structured round-table moderation designed to give equal weight to every voice while preserving conversational flow.</p>
            </div>
            <div className="exp-tile">
              <h4>Cross-Domain Inquiry</h4>
              <p>Curated discussion prompts targeting key technological, social, and economic paradigms.</p>
            </div>
            <div className="exp-tile">
              <h4>Synthesis & Output</h4>
              <p>Transforming conversational insights into concrete takeaways and lasting intellectual community.</p>
            </div>
          </div>
        </section>

        {/* 6. Closing Section with Giant Saturangle Logo */}
        <footer id="saturangle" className="closing-footer-stage">
          <div className="section-wrap" style={{ padding: '0 0 30px 0' }}>
            <blockquote className="footer-quote">
              “Where perspectives meet, conversations begin, and ideas move forward.”
            </blockquote>

            <div className="host-showcase-box">
              <span className="section-tagline" style={{ marginBottom: '1.8rem' }}>Organised By</span>
              <br />
              <img 
                src={saturangleLogo} 
                alt="Saturangle Official Logo" 
                className="saturangle-mega-logo"
              />
              <p className="host-description-text">
                Saturangle is the flagship student-driven club fostering thought leadership, dialogue, and creative community at GLA University.
              </p>
              <p className="official-footer-stamp">
                GLA UNIVERSITY • SATURANGLE
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}