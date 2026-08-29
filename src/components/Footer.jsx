import glaLogo from '../assets/gla-logo.png';
import saturangleLogo from '../assets/saturangle-logo.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col footer-brand">
          <div className="footer-logos">
            <img src={glaLogo} alt="GLA University" className="footer-logo" />
            <img src={saturangleLogo} alt="Saturangle" className="footer-logo" />
          </div>
          <p className="footer-mission">
            Saturangle exists to turn curiosity into conversation, and conversation into
            change — one round-table at a time.
          </p>
        </div>

        <div className="footer-col">
          <span className="footer-heading">Connect</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link">
            Instagram ↗
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">
            LinkedIn ↗
          </a>
          <a href="/vision" className="footer-link">
            Our Vision ↗
          </a>
        </div>

        <div className="footer-col">
          <span className="footer-heading">Contact</span>
          <p className="footer-text">GLA University, Mathura</p>
          <p className="footer-text">saturangle@gla.ac.in</p>
          <p className="footer-text">+91 00000 00000</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Saturangle, GLA University. All rights reserved.</span>
        <span className="footer-tag">PARLEY</span>
      </div>
    </footer>
  );
}