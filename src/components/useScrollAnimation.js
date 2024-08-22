import { useEffect } from 'react';

const useScrollAnimation = (ref, animationClass) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply animation to all first-level divs within the observed element, except .block-info
          const elements = entry.target.querySelectorAll('div:not(.block-info), .sect');
          elements.forEach((element, index) => {
            element.classList.add(animationClass);
            element.style.animation = `fadeIn 0.5s ${0.1 * index}s forwards`;
          });
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, animationClass]);
};

export default useScrollAnimation;
