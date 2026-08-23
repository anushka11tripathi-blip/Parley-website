import React, { useState, useEffect } from 'react';
import './App.css';

import glaLogo from './assets/gla-logo.png';
import saturangleLogo from './assets/saturangle-logo.png';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact'];
      const scrollY = window.scrollY + 180;

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

  const simplePillars = [
    {
      step: '01',
      title: 'Open Round Table',
      desc: 'No rigid stages or aggressive debates. Everyone sits together to share views openly.'
    },
    {
      step: '02',
      title: 'Equal Voice',
      desc: 'Every participant gets equal time to speak, ask questions, and share insights.'
    },
    {
      step: '03',
      title: 'Real Solutions',
      desc: 'We move past arguments to find practical ideas and shared clarity on key topics.'
    }
  ];

  return (
    <div className="master-ambient-container">
      {/* 1. Big Logo Header with Crisp Navigation */}
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

          <nav className="nav-links-wrap">
            <a href="#home" className={`nav-anchor ${activeNav === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" className={`nav-anchor ${activeNav === 'about' ? 'active' : ''}`}>About</a>
            <a href="#contact" className={`nav-anchor ${activeNav === 'contact' ? 'active' : ''}`}>Contact</a>
          </nav>

          <div className="nav-pill-badge">PARLEY</div>
        </div>
      </header>

      <main>
        {/* PAGE 1: Hero Section */}
        <section id="home" className="hero-stage section-container">
          <div className="hero-full-bg-layer" aria-hidden="true" />
          <div className="hero-overlay-fade" aria-hidden="true" />

          <div className="hero-content-wrapper">
            <div className="idea-bulb-glow-container">
              <span className="bulb-emoji">💡</span>
              <span className="bulb-tagline-text">GLA University × Saturangle Present</span>
            </div>

            <h1 className="hero-headline">
              PARLEY
            </h1>
            
            <p className="hero-description">
              A flagship round-table discussion where young minds connect, discuss real ideas, and build meaningful perspectives together.
            </p>

            <div className="hero-actions-row">
              <a href="#about" className="hero-primary-btn">
                Know More About Parley ↓
              </a>
            </div>
          </div>
        </section>

        {/* PAGE 2: Simple & Clear About Section */}
        <section id="about" className="section-container">
          <span className="section-tagline">About The Event</span>
          <h2 className="section-title">What is Parley?</h2>
          
          <p className="editorial-lead">
            Parley is an open discussion circle built for students to talk, listen, and learn together.
          </p>

          <div className="simple-about-text-box">
            <p>
              Unlike traditional debates where one side tries to defeat the other, Parley brings people together to understand different perspectives. It is a space where your thoughts are heard, respected, and refined.
            </p>
          </div>

          {/* 3 Simple Pillars */}
          <div className="simple-pillars-grid">
            {simplePillars.map((item) => (
              <div key={item.step} className="pillar-card">
                <span className="pillar-num">{item.step}</span>
                <h3 className="pillar-title">{item.title}</h3>
                <p className="pillar-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PAGE 3: Footer & Contact Section */}
        <footer id="contact" className="site-footer">
          <div className="footer-inner-container">
            <div className="footer-columns-grid">
              
              {/* Left: Logos & About Note */}
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
                  Parley is the flagship roundtable discussion organized by Saturangle Club at GLA University.
                </p>
              </div>

              {/* Middle: Socials */}
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
                    <a href="#about">
                      About Parley
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right: Contact */}
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
                © {new Date().getFullYear()} Saturangle Club, GLA University. All rights reserved.
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