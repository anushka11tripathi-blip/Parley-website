import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-badge">💡 SATURANGLE PRESENTS</div>
        <p className="hero-kicker">INTELLECTUAL • DIALOGUE • DISCOVERY</p>
        <h1 className="hero-title">
          PARLEY<span className="dot">.</span>
        </h1>
        <p className="hero-subtitle">
          The flagship intellectual round-table discourse where perspectives converge,
          ideas are refined, and meaningful dialogues shape the future.
        </p>

        <div className="hero-actions">
          <Link to="/vision" className="btn btn-primary">
            Explore Parley →
          </Link>
          <Link to="/experience" className="btn btn-ghost">
            The Experience
          </Link>
        </div>

        <div className="pulse-badge">
          <span className="pulse-dot" aria-hidden="true" />
          Flagship Intellectual Roundtable Dialogue
        </div>
      </section>

      <section className="intro-section">
        <span className="orange-divider" aria-hidden="true" />
        <p className="intro-quote">
          "A space where ideas meet curiosity, perspectives challenge assumptions, and
          conversation becomes a catalyst for change."
        </p>
      </section>
    </div>
  );
}