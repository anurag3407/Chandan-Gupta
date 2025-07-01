// Updated Gallery.jsx with Cloudinary integration
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCloudinaryUrl, TRANSFORMATIONS } from '../utils/cloudinaryConfig';
import { galleryImages } from '../data/imageData';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Process images with Cloudinary URLs
    const processedImages = galleryImages.map((image) => ({
      ...image,
      // Different URLs for different use cases
      thumbnailUrl: getCloudinaryUrl(image.publicId, TRANSFORMATIONS.thumbnail),
      lightboxUrl: getCloudinaryUrl(image.publicId, TRANSFORMATIONS.lightbox),
      mobileUrl: getCloudinaryUrl(image.publicId, TRANSFORMATIONS.mobile)
    }));

    setImages(processedImages);
  }, []);

  // ... rest of your component logic remains the same

  return (
    <div id="gallery" className="gallery section">
      <div className="container">
        {/* ... section header and filters remain the same */}

        {/* Updated Image Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => openLightbox(image)}
            >
              <picture>
                {/* Mobile image for small screens */}
                <source media="(max-width: 480px)" srcSet={image.mobileUrl} />
                {/* Default thumbnail for larger screens */}
                <img 
                  src={image.thumbnailUrl} 
                  alt={image.alt}
                  loading="lazy"
                />
              </picture>
            </motion.div>
          ))}
        </div>

        {/* Updated Lightbox with high-quality image */}
        {selectedImage && (
          <motion.div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              {/* ... navigation buttons remain the same */}
              
              <div className="lightbox-image-container">
                <img 
                  src={selectedImage.lightboxUrl} // High-quality image for lightbox
                  alt={selectedImage.alt}
                  className="lightbox-image"
                />
              </div>
              
              {/* ... navigation buttons remain the same */}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
