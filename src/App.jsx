import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
