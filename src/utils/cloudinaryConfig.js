// Cloudinary Configuration
export const CLOUDINARY_CONFIG = {
  cloudName: 'your-cloud-name', // Replace with your actual Cloudinary cloud name
  baseUrl: 'https://res.cloudinary.com/your-cloud-name/image/upload'
};

// Common transformations for different use cases
export const TRANSFORMATIONS = {
  // For gallery thumbnails - optimized for web
  thumbnail: 'c_fill,w_400,h_300,q_auto,f_auto',
  
  // For mini gallery - smaller size
  miniGallery: 'c_fill,w_300,h_225,q_auto,f_auto',
  
  // For profile image - circular crop
  profile: 'c_fill,w_450,h_450,q_auto,f_auto',
  
  // For lightbox - high quality
  lightbox: 'c_limit,w_1200,h_800,q_auto,f_auto',
  
  // For mobile gallery - smaller size
  mobile: 'c_fill,w_200,h_200,q_auto,f_auto'
};

// Helper function to generate Cloudinary URL
export const getCloudinaryUrl = (publicId, transformation = '') => {
  const { baseUrl } = CLOUDINARY_CONFIG;
  const transformationString = transformation ? `/${transformation}` : '';
  return `${baseUrl}${transformationString}/${publicId}`;
};

// Helper function to get responsive image URLs
export const getResponsiveImageUrls = (publicId) => ({
  thumbnail: getCloudinaryUrl(publicId, TRANSFORMATIONS.thumbnail),
  miniGallery: getCloudinaryUrl(publicId, TRANSFORMATIONS.miniGallery),
  lightbox: getCloudinaryUrl(publicId, TRANSFORMATIONS.lightbox),
  mobile: getCloudinaryUrl(publicId, TRANSFORMATIONS.mobile)
});
