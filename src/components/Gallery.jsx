import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Load images from the images folder
    const loadImages = () => {
      const imageFiles = [
        'WhatsApp Image 2025-07-01 at 17.41.02_d19113e1.jpg',
        'WhatsApp Image 2025-07-01 at 17.35.24_6a356ce0.jpg',
        'WhatsApp Image 2025-07-01 at 17.35.26_452d558c.jpg',
        'WhatsApp Image 2025-07-01 at 17.35.23_8bc408ae.jpg',
        'WhatsApp Image 2025-07-01 at 17.41.01_375384af.jpg',
        'WhatsApp Image 2025-07-01 at 17.35.25_649c7843.jpg',
        'WhatsApp Image 2025-07-01 at 17.41.01_cbea1fa9.jpg',
        'WhatsApp Image 2025-07-01 at 17.35.24_1e85d921.jpg',
        'WhatsApp Image 2025-07-01 at 17.35.26_c53cf30b.jpg',
        'WhatsApp Image 2025-07-01 at 17.41.02_03c88da4.jpg',
        'WhatsApp Image 2025-07-01 at 17.35.24_7eff2079.jpg',
        'WhatsApp Image 2025-07-01 at 17.41.01_03431559.jpg',
        'WhatsApp Image 2025-07-01 at 17.35.25_d0839e06.jpg'
      ];

      const imageData = imageFiles.map((filename, index) => ({
        id: index + 1,
        url: `/images/${filename}`,
        alt: `Photography work ${index + 1}`,
        category: index % 3 === 0 ? 'wedding' : index % 3 === 1 ? 'portrait' : 'event'
      }));

      setImages(imageData);
    };

    loadImages();
  }, []);

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'portrait', label: 'Portrait' },
    { value: 'event', label: 'Events' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div id="gallery" className="gallery section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Gallery</h2>
          <p>Explore my collection of photography and videography work</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="gallery-filters"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.value}
              className={`filter-btn ${filter === category.value ? 'active' : ''}`}
              onClick={() => setFilter(category.value)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Image Grid */}
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
              <img 
                src={image.url} 
                alt={image.alt}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="no-images">
            <p>No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              ‹
            </button>
            
            <div className="lightbox-image-container">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt}
                className="lightbox-image"
              />
            </div>
            
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              ›
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
