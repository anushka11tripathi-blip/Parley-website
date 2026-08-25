import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';

import glaLogo from './assets/gla-logo.png';
import saturangleLogo from './assets/saturangle-logo.png';

/* ============================================================
   SHARED HEADER
============================================================ */

function Header() {
  return (
    <header className="header-bar">
      <div className="header-flex">

        {/* LOGO AREA */}
        <Link to="/" className="brand-combo">

          <div className="logo-box gla-logo-box">
            <img
              src={glaLogo}
              alt="GLA University"
              className="brand-logo-unit gla-logo"
            />
          </div>

          <div className="brand-separator-bar" />

          <div className="logo-box saturangle-logo-box">
            <img
              src={saturangleLogo}
              alt="Saturangle"
              className="brand-logo-unit saturangle-logo"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/saturangle-logo.png';
              }}
            />
          </div>

        </Link>

        {/* NAVIGATION */}
        <nav className="nav-links-wrap">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-anchor ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/vision"
            className={({ isActive }) =>
              `nav-anchor ${isActive ? 'active' : ''}`
            }
          >
            Vision
          </NavLink>

          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `nav-anchor ${isActive ? 'active' : ''}`
            }
          >
            Experience
          </NavLink>

        </nav>

        <div className="nav-pill-badge">
          PARLEY
        </div>

      </div>
    </header>
  );
}


/* ============================================================
   FOOTER
============================================================ */

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-inner-container">

        <div className="footer-columns-grid">

          {/* BRAND */}
          <div className="footer-brand-col">

            <div className="footer-logo-row">

              <div className="footer-logo-box">
                <img
                  src={glaLogo}
                  alt="GLA University"
                  className="footer-logo-item"
                />
              </div>

              <div className="footer-logo-divider" />

              <div className="footer-logo-box">
                <img
                  src={saturangleLogo}
                  alt="Saturangle"
                  className="footer-logo-item"
                />
              </div>

            </div>

            <p className="footer-brand-tagline">
              Parley — the flagship intellectual roundtable discourse
              hosted by Saturangle, the official club of GLA University.
            </p>

          </div>


          {/* SOCIALS */}
          <div className="footer-nav-col">

            <h4 className="footer-col-heading">
              SOCIALS
            </h4>

            <ul className="footer-link-list">

              <li>
                <a
                  href="https://www.instagram.com/saturangleclub.glau?igsi=N2YyZHR4a3c4c2kw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram ↗
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/school/gla-university/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              </li>

              <li>
                <Link to="/vision">
                  Our Vision →
                </Link>
              </li>

            </ul>

          </div>


          {/* CONTACT */}
          <div className="footer-nav-col">

            <h4 className="footer-col-heading">
              CONTACT
            </h4>

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
            © {new Date().getFullYear()} Saturangle, GLA University.
            All rights reserved.
          </div>

          <div className="footer-bottom-right-tag">
            PARLEY
          </div>

        </div>

      </div>

    </footer>
  );
}


/* ============================================================
   PAGE 1 — HOME
============================================================ */

function Home() {

  return (
    <div className="page-shell">

      <Header />

      <main>

        <section className="hero-stage section-container">

          <div
            className="hero-full-bg-layer"
            aria-hidden="true"
          />

          <div
            className="hero-overlay-fade"
            aria-hidden="true"
          />


          <div className="hero-content-wrapper">

            <div className="idea-bulb-glow-container">

              <span className="bulb-emoji">
                💡
              </span>

              <span className="bulb-tagline-text">
                SATURANGLE PRESENTS
              </span>

            </div>


            <div className="hero-kicker">
              INTELLECTUAL • DIALOGUE • DISCOVERY
            </div>


            <h1 className="hero-headline">
              PARLEY<span>.</span>
            </h1>


            <p className="hero-description">
              The flagship intellectual round-table discourse where
              perspectives converge, ideas are refined, and meaningful
              dialogues shape the future.
            </p>


            <div className="hero-actions">

              <Link
                to="/vision"
                className="hero-main-button"
              >
                Explore Parley
                <span>→</span>
              </Link>

              <Link
                to="/experience"
                className="hero-secondary-button"
              >
                The Experience
              </Link>

            </div>


            <div className="hero-badge-tag">

              <div className="badge-pulse" />

              <span className="badge-text">
                Flagship Intellectual Roundtable Dialogue
              </span>

            </div>

          </div>


          {/* DECORATIVE SIDE NUMBER */}
          <div className="hero-side-mark">
            01
          </div>

        </section>


        {/* MINI INTRO */}
        <section className="home-intro section-container">

          <div className="intro-line" />

          <p>
            A space where <strong>ideas meet curiosity</strong>,
            perspectives challenge assumptions, and conversation
            becomes a catalyst for change.
          </p>

        </section>

      </main>

      <Footer />

    </div>
  );
}


/* ============================================================
   PAGE 2 — VISION
============================================================ */

function Vision() {

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
    <div className="page-shell">

      <Header />

      <main>

        <section className="inner-page-hero section-container">

          <div className="page-number">
            02 / VISION
          </div>

          <span className="section-tagline">
            THE PURPOSE
          </span>

          <h1 className="inner-page-title">
            Why
            <br />
            <span>Parley Exists.</span>
          </h1>

          <p className="inner-page-description">
            Because meaningful progress rarely begins with an answer.
            It begins with a better question — and a room willing
            to discuss it.
          </p>

        </section>


        <section className="section-container vision-page-content">

          <div className="vision-heading-row">

            <div>
              <span className="section-tagline">
                FOUR PILLARS
              </span>

              <h2 className="section-title">
                Built around ideas.
              </h2>
            </div>

            <div className="vision-heading-number">
              04
            </div>

          </div>


          <div className="vision-deck-grid">

            {visionPillars.map((item) => (

              <article
                key={item.num}
                className="vision-card-frosted"
              >

                <div className="vision-card-top">

                  <span className="vision-num">
                    {item.num}
                  </span>

                  <span className="card-arrow">
                    ↗
                  </span>

                </div>

                <h3 className="vision-card-title">
                  {item.title}
                </h3>

                <p className="vision-card-desc">
                  {item.desc}
                </p>

              </article>

            ))}

          </div>

        </section>


        <section className="statement-section">

          <div className="statement-inner">

            <span>
              PARLEY IS NOT ABOUT WINNING AN ARGUMENT.
            </span>

            <h2>
              It is about leaving
              <br />
              the room with a
              <em> better idea.</em>
            </h2>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}


/* ============================================================
   PAGE 3 — EXPERIENCE
============================================================ */

function Experience() {

  return (
    <div className="page-shell">

      <Header />

      <main>

        <section className="inner-page-hero experience-hero section-container">

          <div className="page-number">
            03 / EXPERIENCE
          </div>

          <span className="section-tagline">
            THE FORMAT
          </span>

          <h1 className="inner-page-title">
            Enter the
            <br />
            <span>Conversation.</span>
          </h1>

          <p className="inner-page-description">
            A carefully structured environment designed to turn
            conversation into insight and insight into action.
          </p>

        </section>


        <section className="section-container experience-content">

          <div className="experience-header">

            <div>
              <span className="section-tagline">
                THE PARLEY EXPERIENCE
              </span>

              <h2 className="section-title">
                Three stages.
                <br />
                One conversation.
              </h2>
            </div>

          </div>


          <div className="exp-grid">

            <article className="exp-block">

              <div className="exp-number">
                01
              </div>

              <h4>
                Moderated Circles
              </h4>

              <p>
                Structured round-table moderation designed to give
                equal weight to every voice while preserving
                conversational flow.
              </p>

              <span className="exp-line" />

            </article>


            <article className="exp-block">

              <div className="exp-number">
                02
              </div>

              <h4>
                Cross-Domain Inquiry
              </h4>

              <p>
                Curated discussion prompts targeting key
                technological, social, and economic paradigms.
              </p>

              <span className="exp-line" />

            </article>


            <article className="exp-block">

              <div className="exp-number">
                03
              </div>

              <h4>
                Synthesis & Output
              </h4>

              <p>
                Transforming conversational insights into
                concrete takeaways and a lasting intellectual
                community.
              </p>

              <span className="exp-line" />

            </article>

          </div>

        </section>


        {/* BIG CTA */}
        <section className="final-cta">

          <div className="final-cta-glow" />

          <span className="section-tagline">
            THE CONVERSATION AWAITS
          </span>

          <h2>
            Bring your
            <br />
            <span>perspective.</span>
          </h2>

          <p>
            The best conversations happen when different
            perspectives are given the space to meet.
          </p>

          <a
            href="mailto:saturangle@gla.ac.in"
            className="cta-button"
          >
            Connect with Saturangle
            <span>↗</span>
          </a>

        </section>

      </main>

      <Footer />

    </div>
  );
}


/* ============================================================
   APP ROUTER
============================================================ */

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/vision"
          element={<Vision />}
        />

        <Route
          path="/experience"
          element={<Experience />}
        />

      </Routes>

    </BrowserRouter>
  );
}