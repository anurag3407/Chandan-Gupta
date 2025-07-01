// Image optimization utilities
export const getOptimizedImageUrl = (imagePath, options = {}) => {
  const { width, quality = 80, format = 'webp' } = options;
  
  // For now, return the original URL
  // In production, you could integrate with a service like Cloudinary
  return imagePath;
};

// Responsive image sizes for different breakpoints
export const getResponsiveImageSizes = (imagePath) => ({
  mobile: getOptimizedImageUrl(imagePath, { width: 400, quality: 70 }),
  tablet: getOptimizedImageUrl(imagePath, { width: 600, quality: 75 }),
  desktop: getOptimizedImageUrl(imagePath, { width: 800, quality: 80 }),
  original: imagePath
});

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = src;
  });
};

// Batch preload images
export const preloadImages = async (imageSrcs) => {
  try {
    await Promise.all(imageSrcs.map(preloadImage));
    console.log('Images preloaded successfully');
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};
