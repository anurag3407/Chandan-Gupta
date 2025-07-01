import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { preloadImages } from './utils/imageOptimization';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import './App.css';

function App() {
  useEffect(() => {
    // Add smooth scrolling and other global effects
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading class to body for initial load
    document.body.classList.add('loading');
    
    // Preload critical images
    const criticalImages = [
      '/profile.png',
      '/images/WhatsApp Image 2025-07-01 at 17.41.01_03431559.jpg',
      '/images/WhatsApp Image 2025-07-01 at 17.35.24_7eff2079.jpg'
    ];
    
    preloadImages(criticalImages);
    
    // Remove loading class after content loads
    const timer = setTimeout(() => {
      document.body.classList.remove('loading');
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
