import React, { useState, useEffect } from 'react';
import Scroll from 'assets/images/footer/up-arrow.svg'
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 400; // Adjust this threshold as needed

    if (scrollY > showThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='scroll-top-design'>
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <img src={ Scroll } alt="" />
    </button>
    </div>
  );
};

export default ScrollToTop;