import React, { useState, useEffect } from 'react';
import './App.css';

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
    <div className="master-ambient-container">
      {/* 1. Header with Giant Logos */}
      <header className="header-bar">
        <div className="header-flex">
          <div className="brand-combo">
            <img 
              src="/src/assets/gla-logo.png" 
              alt="GLA University Official Logo" 
              className="brand-logo-unit"
              onError={(e) => {
                e.currentTarget.outerHTML = '<span style="font-weight:800;letter-spacing:0.1em;font-size:1.3rem;color:#BA3D0F;">GLA UNIVERSITY</span>';
              }}
            />
            <div className="brand-separator-bar" />
            <img 
              src="/src/assets/saturangle-logo.png" 
              alt="Saturangle Official Logo" 
              className="brand-logo-unit"
              onError={(e) => {
                e.currentTarget.outerHTML = '<span style="font-weight:800;letter-spacing:0.1em;font-size:1.3rem;color:#D45424;">SATURANGLE</span>';
              }}
            />
          </div>

          <nav className="nav-links-wrap">
            <a href="#about" className={`nav-anchor ${activeNav === 'about' ? 'active' : ''}`}>01 About</a>
            <a href="#vision" className={`nav-anchor ${activeNav === 'vision' ? 'active' : ''}`}>02 Vision</a>
            <a href="#experience" className={`nav-anchor ${activeNav === 'experience' ? 'active' : ''}`}>03 Experience</a>
            <a href="#saturangle" className={`nav-anchor ${activeNav === 'saturangle' ? 'active' : ''}`}>04 Saturangle</a>
          </nav>

          <div className="nav-pill-badge">PARLEY</div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <main>
        <section className="hero-stage section-container">
          <div className="hero-full-bg-layer" aria-hidden="true" />
          <div className="hero-overlay-fade" aria-hidden="true" />

          <div className="hero-content-wrapper">
            {/* Crazy Tagline Badge */}
            <div className="crazy-badge-wrapper" aria-hidden="true">
              <span className="badge-icon-lightning">⚡</span>
              <span className="badge-headline-label">Clash of Young Minds • Unleash the Dialogue</span>
            </div>

            <h1 className="hero-headline">
              PARLEY
            </h1>
            <p className="hero-description">
              The flagship intellectual round-table discourse where perspectives meet, ideas are refined, and meaningful dialogues shape the future.
            </p>
            <div className="hero-badge-tag">
              <div className="badge-pulse" />
              <span className="badge-text">Flagship Intellectual Roundtable Dialogue</span>
            </div>
          </div>
        </section>

        {/* 3. About Section */}
        <section id="about" className="section-container">
          <span className="section-tag">01 / The Identity</span>
          <h2 className="section-title">What is Parley?</h2>
          <p className="editorial-lead">
            Parley is an intellectual round-table designed to transcend polarized debates—transforming open conversation into shared clarity and actionable perspectives.
          </p>
          <div className="editorial-columns">
            <p>
              Derived from the historical tradition of gathering to hold deliberate dialogue, Parley provides an open floor at GLA University for students and thinkers to dissect contemporary challenges.
            </p>
            <p>
              Unlike competitive podium debates, Parley balances rigor with synthesis. We build a circular environment where perspectives meet equally to explore ideas that move forward.
            </p>
          </div>
        </section>

        {/* 4. Vision Section */}
        <section id="vision" className="section-container">
          <span className="section-tag">02 / The Purpose</span>
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

        {/* 5. Experience Section */}
        <section id="experience" className="section-container">
          <span className="section-tag">03 / The Format</span>
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

        {/* 6. Closing Section */}
        <footer id="saturangle" className="closing-wrap">
          <div className="section-container" style={{ padding: '0 0 40px 0' }}>
            <blockquote className="closing-quote-text">
              “Where perspectives meet, conversations begin, and ideas move forward.”
            </blockquote>

            <div className="host-section-card">
              <span className="section-tag" style={{ marginBottom: '1.6rem' }}>Organised By</span>
              <br />
              <img 
                src="/src/assets/saturangle-logo.png" 
                alt="Saturangle Official Logo" 
                className="saturangle-footer-logo"
                onError={(e) => {
                  e.currentTarget.outerHTML = '<h3 style="font-size:2.8rem;color:#BA3D0F;margin-bottom:1.5rem;font-weight:900;">SATURANGLE</h3>';
                }}
              />
              <p className="host-body-text">
                Saturangle is the flagship student-driven club fostering thought leadership, dialogue, and creative community at GLA University.
              </p>
              <p className="footer-stamp-meta">
                GLA UNIVERSITY • SATURANGLE
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}