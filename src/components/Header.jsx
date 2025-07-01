import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <button 
              className="logo-text"
              onClick={handleLogoClick}
            >
              Chandan Gupta
            </button>
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('services')}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="nav-link"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu-toggle">
            <button
              className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
