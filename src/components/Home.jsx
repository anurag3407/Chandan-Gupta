import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const miniGalleryImages = [
    '/images/WhatsApp Image 2025-07-01 at 17.41.01_03431559.jpg',
    '/images/WhatsApp Image 2025-07-01 at 17.35.24_7eff2079.jpg',
    '/images/WhatsApp Image 2025-07-01 at 17.41.01_cbea1fa9.jpg',
    '/images/WhatsApp Image 2025-07-01 at 17.41.01_375384af.jpg',
    '/images/WhatsApp Image 2025-07-01 at 17.35.23_8bc408ae.jpg',
    '/images/WhatsApp Image 2025-07-01 at 17.35.26_452d558c.jpg'
  ];

  const services = [
    {
      icon: '�',
      title: 'Wedding Shoot',
      description: 'Complete wedding photography and videography coverage'
    },
    {
      icon: '🎂',
      title: 'Birthday Shoot',
      description: 'Special birthday celebrations and party photography'
    },
    {
      icon: '👶',
      title: 'Baby Shoot',
      description: 'Adorable newborn and baby photography sessions'
    },
    {
      icon: '📸',
      title: 'Model Shoot',
      description: 'Professional model portfolio and fashion photography'
    },
    {
      icon: '🎪',
      title: 'Event Shoot',
      description: 'Corporate events, parties, and special occasions'
    },
    {
      icon: '💄',
      title: 'Makeup Shoot',
      description: 'Beauty and makeup artist portfolio photography'
    },
    {
      icon: '🤱',
      title: 'Babyshower Shoot',
      description: 'Beautiful maternity and baby shower celebrations'
    },
    {
      icon: '🎥',
      title: 'Cinematic Shoot',
      description: 'Cinematic videography with professional storytelling'
    },
    {
      icon: '�️',
      title: 'Portrait Shoot',
      description: 'Professional portrait sessions for individuals and families'
    },
    {
      icon: '📷',
      title: 'Candid Shoot',
      description: 'Natural, candid moments captured beautifully'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="home">
      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-name">
                <span className="hero-name-main">Chandan Gupta</span>
              </h1>
              <p className="hero-subtitle">Gupta Photography & Videography</p>
              <div className="hero-phone">
                <span className="phone-label">Call:</span>
                <a href="tel:9304153507" className="phone-number">
                  9304153507
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-image"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="profile-image-container">
                <OptimizedImage 
                  src="/profile.png"
                  alt="Chandan Gupta - Photographer"
                  className="profile-image"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mini Gallery Section */}
      <section className="mini-gallery section section-light">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Recent Work</h2>
            <p>A glimpse of my latest photography and videography projects</p>
          </motion.div>

          <div className="mini-gallery-grid">
            {miniGalleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="mini-gallery-item"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <OptimizedImage 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="mini-gallery-image"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="mini-gallery-footer">
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/gallery')}
            >
              View More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
