// ReturnToTop.js
import React, { useState, useEffect } from 'react';
import './CSS/ReturnToTop.css'; // Import CSS for styling

const ReturnToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button className="return-to-top" onClick={scrollToTop}>
        <svg width="50" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5.5L16.5 10L15.1 11.4L13 9.3V17H11V9.3L8.9 11.4L7.5 10L12 5.5Z" fill="currentColor" />
        </svg>
      </button>
    )
  );
};

export default ReturnToTop;
