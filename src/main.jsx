/* eslint-disable react-refresh/only-export-components */
import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import AuthProvider from './context/AuthProvider.jsx';

// Loading component to show a loading spinner
function Loading() {
  return (
    <div id="root">
      <div>
        <div className="loading-circle"></div>
        <div className="loading-text">Loading ...</div>
      </div>
    </div>
  );
}

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    },500);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> // Show loading screen
      ) : (
        <App /> // Main app content after loading
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Main />
    </AuthProvider>
  </StrictMode>,
);
