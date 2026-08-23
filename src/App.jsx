import React, { useState, useEffect } from 'react';
import './App.css';

import glaLogo from './assets/gla-logo.png';
import saturangleLogo from './assets/saturangle-logo.png';

export default function App() {
  const [activeNav, setActiveNav] = useState('about');
  const [activeTrack, setActiveTrack] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'tracks', 'vision', 'experience', 'faq', 'saturangle'];
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

  const stats = [
    { value: '50+', label: 'Selected Delegates' },
    { value: '04', label: 'Curated Tracks' },
    { value: '03', label: 'Deliberative Rounds' },
    { value: '100%', label: 'Unscripted Discourse' }
  ];

  const discourseTracks = [
    {
      id: 'tech-ethics',
      tag: 'Track 01',
      title: 'AI Sovereignty & Ethics',
      highlight: 'Navigating algorithmic bias, cognitive autonomy, and future digital public infrastructure.',
      prompts: [
        'How should academic institutions regulate autonomous agentic AI?',
        'Data localization vs borderless LLM intelligence.',
        'Preserving human critical thinking in an automated era.'
      ]
    },
    {
      id: 'geopolitics',
      tag: 'Track 02',
      title: 'Geopolitics & Multipolar Order',
      highlight: 'Analyzing global power transitions, strategic autonomy, and regional diplomacy.',
      prompts: [
        'Global South advocacy in contemporary international forums.',
        'Economic sanction diplomacy and supply chain resilience.',
        'Youth leadership in conflict de-escalation.'
      ]
    },
    {
      id: 'economics',
      tag: 'Track 03',
      title: 'Economic Paradigms & Youth',
      highlight: 'Redefining venture capital, decentralized finance, and workforce automation.',
      prompts: [
        'Bridging the talent-to-industry gap in emerging markets.',
        'Sustainability vs Hypergrowth in student-led startups.',
        'Universal base opportunities in automated labor markets.'
      ]
    },
    {
      id: 'culture',
      tag: 'Track 04',
      title: 'Public Philosophy & Discourse',
      highlight: 'Deconstructing polarization, media algorithms, and open civil discourse.',
      prompts: [
        'The death of nuanced debate in short-form media algorithms.',
        'Constructive disagreement as an essential civic virtue.',
        'Balancing individual expression with collective responsibility.'
      ]
    }
  ];

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

  const faqs = [
    {
      q: 'How is Parley different from a standard podium debate?',
      a: 'Traditional debates award aggressive rhetoric and binary winners. Parley operates as an intellectual roundtable where participants collaborate to deconstruct complex dilemmas, synthesize viewpoints, and discover common ground.'
    },
    {
      q: 'Do I need prior competitive debating experience to join?',
      a: 'Not at all. Parley values intellectual curiosity, clarity of thought, and constructive reasoning over conventional debating jargon or competitive theatrics.'
    },
    {
      q: 'Who can attend or participate in Parley sessions?',
      a: 'All students, thinkers, and cross-domain scholars at GLA University passionate about thought leadership and deliberate discourse are welcome.'
    },
    {
      q: 'What is the format of a typical Parley roundtable?',
      a: 'Each session is divided into 3 structured phases: Thesis Presentation (framing the dilemma), Synthesis Debate (moderated cross-inquiry), and Final Consensus/Actionable Takeaways.'
    }
  ];

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="master-ambient-container">
      {/* 1. Sleek Interactive Header */}
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
            <a href="#about" className={`nav-anchor ${activeNav === 'about' ? 'active' : ''}`}>About</a>
            <a href="#tracks" className={`nav-anchor ${activeNav === 'tracks' ? 'active' : ''}`}>Tracks</a>
            <a href="#vision" className={`nav-anchor ${activeNav === 'vision' ? 'active' : ''}`}>Vision</a>
            <a href="#experience" className={`nav-anchor ${activeNav === 'experience' ? 'active' : ''}`}>Experience</a>
            <a href="#faq" className={`nav-anchor ${activeNav === 'faq' ? 'active' : ''}`}>FAQ</a>
          </nav>

          <a href="#tracks" className="nav-pill-badge" style={{ textDecoration: 'none' }}>
            EXPLORE
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <main>
        <section className="hero-stage section-container">
          <div className="hero-full-bg-layer" aria-hidden="true" />
          <div className="hero-overlay-fade" aria-hidden="true" />

          <div className="hero-content-wrapper">
            <div className="idea-bulb-glow-container">
              <span className="bulb-emoji">💡</span>
              <span className="bulb-tagline-text">GLA University × Saturangle Collaboration</span>
            </div>

            <h1 className="hero-headline">
              PARLEY
            </h1>
            <p className="hero-description">
              The flagship intellectual round-table discourse where perspectives converge, ideas are refined, and meaningful dialogues shape the future.
            </p>

            <div className="hero-actions-row">
              <a href="#tracks" className="hero-primary-btn">
                Explore Discourse Tracks
                <span className="btn-arrow">→</span>
              </a>
              <a href="#about" className="hero-secondary-btn">
                The Philosophy
              </a>
            </div>
          </div>
        </section>

        {/* 3. Live Metrics Ribbon */}
        <section className="metrics-strip-section">
          <div className="section-container" style={{ padding: '0 32px' }}>
            <div className="metrics-grid">
              {stats.map((stat, i) => (
                <div key={i} className="metric-card">
                  <div className="metric-value">{stat.value}</div>
                  <div className="metric-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. About Section */}
        <section id="about" className="section-container">
          <span className="section-tagline">01 / The Identity</span>
          <h2 className="section-title">What is Parley?</h2>
          <p className="editorial-lead">
            Parley is an intellectual round-table designed to transcend polarized debates—transforming open conversation into shared clarity and actionable perspectives.
          </p>
          <div className="editorial-columns">
            <p>
              Derived from the historical tradition of gathering to hold deliberate dialogue, Parley provides an open floor at GLA University for students and multidisciplinary thinkers to dissect contemporary challenges.
            </p>
            <p>
              Unlike competitive podium debates, Parley balances rigor with synthesis. We build a circular environment where perspectives meet equally to explore ideas that move forward.
            </p>
          </div>
        </section>

        {/* 5. NEW: Interactive Discourse Tracks (Tab Switcher) */}
        <section id="tracks" className="section-container">
          <span className="section-tagline">02 / Dynamic Inquiry</span>
          <h2 className="section-title">Discourse Themes & Tracks</h2>
          <p className="section-subtitle-text">
            Click across curated thematic domains to preview deliberative discussion prompts.
          </p>

          <div className="tracks-interactive-container">
            {/* Track Selector Tabs */}
            <div className="track-tab-list">
              {discourseTracks.map((track, idx) => (
                <button
                  key={track.id}
                  className={`track-tab-btn ${activeTrack === idx ? 'active' : ''}`}
                  onClick={() => setActiveTrack(idx)}
                >
                  <span className="tab-tag-num">{track.tag}</span>
                  <span className="tab-title-text">{track.title}</span>
                </button>
              ))}
            </div>

            {/* Active Track Dynamic Display Box */}
            <div className="track-active-panel">
              <div className="panel-badge-pill">{discourseTracks[activeTrack].tag}</div>
              <h3 className="panel-track-heading">{discourseTracks[activeTrack].title}</h3>
              <p className="panel-highlight-text">{discourseTracks[activeTrack].highlight}</p>

              <div className="panel-prompts-block">
                <span className="prompts-subheading">Core Deliberation Questions:</span>
                <ul className="prompts-list">
                  {discourseTracks[activeTrack].prompts.map((p, pIdx) => (
                    <li key={pIdx}>
                      <span className="prompt-bullet-dot" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Vision Section */}
        <section id="vision" className="section-container">
          <span className="section-tagline">03 / The Purpose</span>
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

        {/* 7. Experience Section */}
        <section id="experience" className="section-container">
          <span className="section-tagline">04 / The Format</span>
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

        {/* 8. NEW: Interactive Accordion FAQ Section */}
        <section id="faq" className="section-container">
          <span className="section-tagline">05 / Clarifications</span>
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item-card ${openFaq === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question-row">
                  <span className="faq-question-text">{faq.q}</span>
                  <span className="faq-toggle-icon">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer-block">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 9. Interactive Action Callout Banner */}
        <section className="cta-banner-wrapper section-container" style={{ paddingBottom: '20px' }}>
          <div className="cta-gradient-box">
            <h3 className="cta-headline">Shape the Dialogue with Us</h3>
            <p className="cta-subtext">
              Engage with thinkers, refine your perspectives, and become part of GLA University’s premier intellectual community.
            </p>
            <div className="cta-button-group">
              <a 
                href="https://www.instagram.com/saturangleclub.glau?igsi=N2YyZHR4a3c4c2kw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-ig-btn"
              >
                Connect on Instagram
              </a>
              <a href="#about" className="cta-explore-btn">
                Read The Philosophy
              </a>
            </div>
          </div>
        </section>

        {/* 10. Multi-Column Reference Footer */}
        <footer id="saturangle" className="site-footer">
          <div className="footer-inner-container">
            <div className="footer-columns-grid">
              
              {/* Left Column: Logos & Parley Summary */}
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
                    <a href="#about">
                      About Parley
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