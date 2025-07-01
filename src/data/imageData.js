// Example of how to structure your image data with Cloudinary URLs
import { getCloudinaryUrl, TRANSFORMATIONS } from '../utils/cloudinaryConfig';

// For Gallery.jsx - Replace your current imageFiles array
export const galleryImages = [
  {
    id: 1,
    publicId: 'chandan-portfolio/wedding-1', // Your Cloudinary public ID
    alt: 'Wedding Photography 1',
    category: 'wedding'
  },
  {
    id: 2,
    publicId: 'chandan-portfolio/portrait-1',
    alt: 'Portrait Photography 1', 
    category: 'portrait'
  },
  {
    id: 3,
    publicId: 'chandan-portfolio/event-1',
    alt: 'Event Photography 1',
    category: 'event'
  },
  // Add more images here...
];

// For Home.jsx - Mini gallery images
export const miniGalleryImages = [
  'chandan-portfolio/featured-1', // Public IDs for your featured images
  'chandan-portfolio/featured-2',
  'chandan-portfolio/featured-3',
  'chandan-portfolio/featured-4',
  'chandan-portfolio/featured-5',
  'chandan-portfolio/featured-6'
];

// Profile image
export const profileImage = {
  publicId: 'chandan-portfolio/profile-chandan',
  alt: 'Chandan Gupta - Photographer'
};
