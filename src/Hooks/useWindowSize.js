import React, { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767); // Adjust this value according to your mobile breakpoint
    };

    // Initial call to set isMobile based on window width
    handleResize();

    // Event listener to update isMobile when window is resized
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return isMobile;
};