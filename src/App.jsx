import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Experience from './pages/Experience';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  return null;
}

function AppShell() {
  return (
    <div className="page-shell">
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  );
}