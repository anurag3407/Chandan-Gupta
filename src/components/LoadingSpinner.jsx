import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium' }) => {
  return (
    <div className={`loading-spinner ${size}`}>
      <div className="spinner-circle"></div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
