import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://getform.io/f/aqomdyxa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      value: '9304153507',
      link: 'tel:9304153507'
    },
    {
      icon: '📧',
      title: 'Email',
      value: 'chandan.photographer@gmail.com',
      link: 'mailto:chandan.photographer@gmail.com'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Gupta Videography, Basauli Chowk, Madhubani',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: '📷',
      name: 'Instagram',
      url: 'https://instagram.com/chandan_creation_20',
      color: '#E4405F'
    },
    {
      icon: '📱',
      name: 'WhatsApp',
      url: 'https://wa.me/919304153507',
      color: '#25D366'
    },
    {
      icon: '📘',
      name: 'Facebook',
      url: 'https://facebook.com/chandan.photographer',
      color: '#1877F2'
    }
  ];

  return (
    <div id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>Ready to capture your special moments? Let's discuss your photography needs</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact-form-wrapper">
              <h3>Send Me a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell me about your photography needs..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary contact-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-message success">
                    Thank you! Your message has been sent successfully. I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message error">
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info-container"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="contact-link">
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="cta-section">
                <h4>Ready to Book?</h4>
                <p>Call me directly for immediate booking and consultation</p>
                <a href="tel:9304153507" className="btn btn-primary cta-phone">
                  📞 Call Now: 9304153507
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
