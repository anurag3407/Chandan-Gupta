import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: '📷',
      name: 'Instagram',
      url: 'https://instagram.com/chandan_creation_20'
    },
    {
      icon: '📱',
      name: 'WhatsApp',
      url: 'https://wa.me/919304153507'
    },
    {
      icon: '📘',
      name: 'Facebook',
      url: 'https://facebook.com/chandan.photographer'
    },
    {
      icon: '📧',
      name: 'Email',
      url: 'mailto:chandan.photographer@gmail.com'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Description */}
          <motion.div
            className="footer-section footer-brand"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-logo">Chandan Gupta</h3>
            <p className="footer-tagline">Photographer & Videographer</p>
            <p className="footer-description">
              Capturing life's precious moments with artistic vision and professional excellence. 
              Creating memories that last a lifetime.
            </p>
            <div className="footer-phone">
              <a href="tel:9304153507" className="phone-link">
                📞 9304153507
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-section footer-links"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    className="footer-link"
                    onClick={() => scrollToSection(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className="footer-link"
                  onClick={scrollToTop}
                >
                  Back to Top
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="footer-section footer-services"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Services</h4>
            <ul className="footer-service-list">
              <li>Wedding Photography</li>
              <li>Pre-Wedding Shoots</li>
              <li>Birthday Photography</li>
              <li>Portrait Sessions</li>
              <li>Event Coverage</li>
              <li>Cinematic Videos</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="footer-section footer-social"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Connect with Me</h4>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-label">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Chandan Gupta Photography. All rights reserved.
            </p>
            <p className="footer-credits">
              Made with 💕 for capturing beautiful moments
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
