import { NavLink } from 'react-router-dom';
import glaLogo from '../assets/gla-logo.png';
import saturangleLogo from '../assets/saturangle-logo.png';

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand-lockup">
        <img src={glaLogo} alt="GLA University" className="brand-logo" />
        <span className="brand-divider" aria-hidden="true" />
        <img src={saturangleLogo} alt="Saturangle" className="brand-logo" />
      </div>

      <nav className="pill-nav" aria-label="Primary">
        <NavLink to="/" end className={({ isActive }) => `pill-link${isActive ? ' active' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/vision" className={({ isActive }) => `pill-link${isActive ? ' active' : ''}`}>
          Vision
        </NavLink>
        <NavLink to="/experience" className={({ isActive }) => `pill-link${isActive ? ' active' : ''}`}>
          Experience
        </NavLink>
      </nav>

      <div className="parley-badge">PARLEY</div>
    </header>
  );
}