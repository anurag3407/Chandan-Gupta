import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './OptimizedImage.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  loading = 'lazy',
  placeholder = true,
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px'
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div 
      ref={ref} 
      className={`optimized-image-container ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {placeholder && !imageLoaded && (
        <div className="image-placeholder">
          <div className="placeholder-shimmer"></div>
        </div>
      )}
      
      {/* Error state */}
      {imageError && (
        <div className="image-error">
          <span>📷</span>
          <p>Image unavailable</p>
        </div>
      )}
      
      {/* Actual Image */}
      {inView && !imageError && (
        <img
          src={src}
          alt={alt}
          className={`optimized-image ${imageLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={loading}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
