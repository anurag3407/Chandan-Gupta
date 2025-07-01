// Updated Home.jsx with Cloudinary integration
import { motion } from 'framer-motion';
import { getCloudinaryUrl, TRANSFORMATIONS } from '../utils/cloudinaryConfig';
import { miniGalleryImages, profileImage } from '../data/imageData';
import './Home.css';

const Home = () => {
  // Process mini gallery images with Cloudinary URLs
  const processedMiniGallery = miniGalleryImages.map((publicId, index) => ({
    url: getCloudinaryUrl(publicId, TRANSFORMATIONS.miniGallery),
    alt: `Photography work ${index + 1}`
  }));

  // Profile image with Cloudinary URL
  const profileImageUrl = getCloudinaryUrl(profileImage.publicId, TRANSFORMATIONS.profile);

  // ... rest of your component logic

  return (
    <div id="home" className="home">
      <section className="hero section">
        <div className="container">
          <div className="hero-content">
            {/* ... hero text section */}

            {/* Updated Profile Image */}
            <motion.div className="hero-image">
              <div className="profile-image-container">
                <img 
                  src={profileImageUrl}
                  alt={profileImage.alt}
                  className="profile-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updated Mini Gallery Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Work</h2>
            <p>A showcase of my best photography</p>
          </div>

          <div className="mini-gallery-grid">
            {processedMiniGallery.map((image, index) => (
              <motion.div
                key={index}
                className="mini-gallery-item"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <picture>
                  {/* Mobile optimized image */}
                  <source 
                    media="(max-width: 480px)" 
                    srcSet={getCloudinaryUrl(miniGalleryImages[index], TRANSFORMATIONS.mobile)} 
                  />
                  {/* Default mini gallery image */}
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    loading="lazy"
                  />
                </picture>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ... rest of your sections */}
    </div>
  );
};

export default Home;
