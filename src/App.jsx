// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

import glaLogo from './assets/gla-logo.png';
import saturangleLogo from './assets/saturangle-logo.png';

const ROUTES = {
  '/': 'home',
  '/vision': 'vision',
  '/experience': 'experience',
};

function resolvePage(pathname) {
  return ROUTES[pathname] || 'home';
}

function Header({ page, navigate }) {
  return (
    <header className="header-bar">
      <div className="header-flex">
        <div
          className="brand-combo"
          onClick={navigate('/')}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate('/')(e)}
          role="button"
          tabIndex={0}
          aria-label="Navigate to Home"
        >
          <div className="brand-logo-frame">
            <img src={glaLogo} alt="GLA University" className="brand-logo-unit" />
          </div>
          <div className="brand-separator-bar" />
          <div className="brand-logo-frame">
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
        </div>

        <nav className="nav-links-wrap" aria-label="Main Navigation">
          <a
            href="/"
            className={`nav-anchor ${page === 'home' ? 'active' : ''}`}
            onClick={navigate('/')}
          >
            Home
          </a>
          <a
            href="/vision"
            className={`nav-anchor ${page === 'vision' ? 'active' : ''}`}
            onClick={navigate('/vision')}
          >
            Vision
          </a>
          <a
            href="/experience"
            className={`nav-anchor ${page === 'experience' ? 'active' : ''}`}
            onClick={navigate('/experience')}
          >
            Experience
          </a>
        </nav>

        <div className="nav-pill-badge">PARLEY</div>
      </div>
    </header>
  );
}

function HomePage({ navigate }) {
  return (
    <section className="hero-stage section-container">
      <div className="hero-content-wrapper">
        <div className="idea-bulb-glow-container">
          <span className="bulb-emoji" role="img" aria-label="Idea">💡</span>
          <span className="bulb-tagline-text">SATURANGLE PRESENTS</span>
        </div>

        <h1 className="hero-headline">PARLEY</h1>
        <p className="hero-description">
          The flagship intellectual round-table discourse where perspectives converge, ideas are refined, and meaningful dialogues shape the future.
        </p>
        
        <div className="hero-action-group">
          <a href="/experience" onClick={navigate('/experience')} className="cta-primary-btn">
            Explore Experience <span>→</span>
          </a>
          <a href="/vision" onClick={navigate('/vision')} className="cta-ghost-btn">
            Our Vision
          </a>
        </div>

        <div className="hero-badge-tag">
          <div className="badge-pulse" />
          <span className="badge-text">Flagship Intellectual Roundtable Dialogue</span>
        </div>
      </div>
    </section>
  );
}

function VisionPage() {
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
    <section className="section-container page-min-height">
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
  );
}

function ExperiencePage() {
  return (
    <section className="section-container page-min-height">
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
  );
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner-container">
        <div className="footer-columns-grid">
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img src={glaLogo} alt="GLA University" className="footer-logo-item" />
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
                <a href="/vision" onClick={navigate('/vision')}>
                  Vision
                </a>
              </li>
            </ul>
          </div>

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
  );
}

export default function App() {
  const [pathname, setPathname] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => (e) => {
    if (e) e.preventDefault();
    if (path !== window.location.pathname) {
      window.history.pushState({}, '', path);
      setPathname(path);
      window.scrollTo(0, 0);
    }
  };

  const page = resolvePage(pathname);

  return (
    <div className="master-ambient-container">
      <Header page={page} navigate={navigate} />

      <main className="main-content-layout">
        {page === 'home' && <HomePage navigate={navigate} />}
        {page === 'vision' && <VisionPage />}
        {page === 'experience' && <ExperiencePage />}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}