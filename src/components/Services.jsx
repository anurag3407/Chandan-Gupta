import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💒',
      title: 'Wedding Shoot',
      description: 'Complete wedding photography and videography coverage for your special day'
    },
    {
      icon: '🎂',
      title: 'Birthday Shoot',
      description: 'Special birthday celebrations and party photography sessions'
    },
    {
      icon: '👶',
      title: 'Baby Shoot',
      description: 'Adorable newborn and baby photography sessions with love'
    },
    {
      icon: '📸',
      title: 'Model Shoot',
      description: 'Professional model portfolio and fashion photography'
    },
    {
      icon: '🎪',
      title: 'Event Shoot',
      description: 'Corporate events, parties, and special occasions coverage'
    },
    {
      icon: '💄',
      title: 'Makeup Shoot',
      description: 'Beauty and makeup artist portfolio photography sessions'
    },
    {
      icon: '🤱',
      title: 'Babyshower Shoot',
      description: 'Beautiful maternity and baby shower celebration photography'
    },
    {
      icon: '🎥',
      title: 'Cinematic Shoot',
      description: 'Cinematic videography with professional storytelling approach'
    },
    {
      icon: '🖼️',
      title: 'Portrait Shoot',
      description: 'Professional portrait sessions for individuals and families'
    },
    {
      icon: '📷',
      title: 'Candid Shoot',
      description: 'Natural, candid moments captured beautifully and spontaneously'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services" className="services section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Photography Services</h2>
          <p>Professional photography and videography services for every special moment in your life</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-action">
                <button 
                  className="btn btn-secondary service-btn"
                  onClick={scrollToContact}
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="services-cta">
          <motion.div
            className="cta-content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Ready to Capture Your Moments?</h3>
            <p>Let's discuss your photography needs and create beautiful memories together</p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary"
                onClick={scrollToContact}
              >
                Get In Touch
              </button>
              <a 
                href="tel:9304153507" 
                className="btn btn-secondary"
              >
                Call: 9304153507
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
