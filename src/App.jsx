import React, { useState, useEffect } from 'react';
import './App.css';

import glaLogo from './assets/gla-logo.png';
import saturangleLogo from './assets/saturangle-logo.png';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'vision', 'experience', 'contact'];
      const scrollY = window.scrollY + 200;

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
    <div className="master-ambient-container">
      {/* 1. Header with Clean Tabs & Crystal Clear Logos */}
      <header className="header-bar">
        <div className="header-flex">
          <div className="brand-combo">
            <img 
              src={glaLogo} 
              alt="GLA University" 
              className="brand-logo-unit"
            />
            <div className="brand-separator-bar" />
            <img 
              src={saturangleLogo} 
              alt="Saturangle" 
              className="brand-logo-unit"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/saturangle-logo.png';
              }}
            />
          </div>

          {/* Clean Navigation: No Numbers */}
          <nav className="nav-links-wrap">
            <a href="#home" className={`nav-anchor ${activeNav === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#vision" className={`nav-anchor ${activeNav === 'vision' ? 'active' : ''}`}>Vision</a>
            <a href="#experience" className={`nav-anchor ${activeNav === 'experience' ? 'active' : ''}`}>Experience</a>
            <a href="#contact" className={`nav-anchor ${activeNav === 'contact' ? 'active' : ''}`}>Contact</a>
          </nav>

          <div className="nav-pill-badge">PARLEY</div>
        </div>
      </header>

      <main>
        {/* 2. Hero Section */}
        <section id="home" className="hero-stage section-container">
          <div className="hero-full-bg-layer" aria-hidden="true" />
          <div className="hero-overlay-fade" aria-hidden="true" />

          <div className="hero-content-wrapper">
            {/* Saturangle Presents */}
            <div className="idea-bulb-glow-container">
              <span className="bulb-emoji">💡</span>
              <span className="bulb-tagline-text">SATURANGLE PRESENTS</span>
            </div>

            <h1 className="hero-headline">
              PARLEY
            </h1>
            <p className="hero-description">
              The flagship intellectual round-table discourse where perspectives converge, ideas are refined, and meaningful dialogues shape the future.
            </p>
            <div className="hero-badge-tag">
              <div className="badge-pulse" />
              <span className="badge-text">Flagship Intellectual Roundtable Dialogue</span>
            </div>
          </div>
        </section>

        {/* 3. Vision Section */}
        <section id="vision" className="section-container">
          <span className="section-tagline">The Purpose</span>
          <h2 className="section-title">Why Parley Exists</h2>
          <div className="vision-deck-grid">
            {visionPillars.map((item) => (
              <div key={item.num} className="vision-card-frosted">
                <span className="vision-num">{item.num}</span>
                <h3 className="vision-card-title">{item.title}</h3>
                <p className="vision-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Experience Section */}
        <section id="experience" className="section-container">
          <span className="section-tagline">The Format</span>
          <h2 className="section-title">The Parley Experience</h2>
          <div className="exp-grid">
            <div className="exp-block">
              <h4>Moderated Circles</h4>
              <p>Structured round-table moderation designed to give equal weight to every voice while preserving conversational flow.</p>
            </div>
            <div className="exp-block">
              <h4>Cross-Domain Inquiry</h4>
              <p>Curated discussion prompts targeting key technological, social, and economic paradigms.</p>
            </div>
            <div className="exp-block">
              <h4>Synthesis & Output</h4>
              <p>Transforming conversational insights into concrete takeaways and lasting intellectual community.</p>
            </div>
          </div>
        </section>

        {/* 5. Final Footer with Large Prominent Logos */}
        <footer id="contact" className="site-footer">
          <div className="footer-inner-container">
            <div className="footer-columns-grid">
              
              {/* Left Column: Big Footer Logos & Narrative */}
              <div className="footer-brand-col">
                <div className="footer-logo-row">
                  <img 
                    src={glaLogo} 
                    alt="GLA University" 
                    className="footer-logo-item" 
                  />
                  <div className="footer-logo-divider" />
                  <img 
                    src={saturangleLogo} 
                    alt="Saturangle" 
                    className="footer-logo-item" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/saturangle-logo.png';
                    }}
                  />
                </div>
                <p className="footer-brand-tagline">
                  Parley — the flagship intellectual roundtable discourse hosted by Saturangle, the official club of GLA University.
                </p>
              </div>

              {/* Middle Column: Socials */}
              <div className="footer-nav-col">
                <h4 className="footer-col-heading">SOCIALS</h4>
                <ul className="footer-link-list">
                  <li>
                    <a 
                      href="https://www.instagram.com/saturangleclub.glau?igsi=N2YyZHR4a3c4c2kw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.linkedin.com/school/gla-university/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#vision">
                      Vision
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Column: Contact Information */}
              <div className="footer-nav-col">
                <h4 className="footer-col-heading">CONTACT</h4>
                <div className="footer-contact-item">
                  GLA University, Mathura
                </div>
                <div className="footer-contact-item">
                  <a href="mailto:saturangle@gla.ac.in">
                    saturangle@gla.ac.in
                  </a>
                </div>
                <div className="footer-contact-item">
                  <a href="tel:+919027068068">
                    +91 90270 68068
                  </a>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom-bar">
              <div>
                © {new Date().getFullYear()} Saturangle, GLA University. All rights reserved.
              </div>
              <div className="footer-bottom-right-tag">
                PARLEY
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}