import { useEffect, useRef, useState } from 'react';

// Enhanced scroll animation hook with multiple animation types
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    animationType = 'fadeInUp',
    delay = 0,
    duration = 0.6,
    easing = 'ease-out'
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce, delay]);

  // Animation styles based on type
  const getAnimationStyles = () => {
    const baseStyle = {
      transition: `all ${duration}s ${easing}`,
      opacity: isVisible ? 1 : 0,
    };

    const animations = {
      fadeIn: {
        ...baseStyle,
      },
      fadeInUp: {
        ...baseStyle,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      },
      fadeInDown: {
        ...baseStyle,
        transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
      },
      fadeInLeft: {
        ...baseStyle,
        transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
      },
      fadeInRight: {
        ...baseStyle,
        transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
      },
      scaleIn: {
        ...baseStyle,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
      },
      slideInLeft: {
        ...baseStyle,
        transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
      },
      slideInRight: {
        ...baseStyle,
        transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
      },
      rotateIn: {
        ...baseStyle,
        transform: isVisible ? 'rotate(0deg)' : 'rotate(180deg)',
      },
      bounceIn: {
        ...baseStyle,
        transform: isVisible ? 'scale(1)' : 'scale(0)',
        transition: `all ${duration}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
      }
    };

    return animations[animationType] || animations.fadeInUp;
  };

  return [ref, getAnimationStyles(), isVisible];
};

// Staggered animation hook for lists
export const useStaggerAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    staggerDelay = 0.1,
    animationType = 'fadeInUp',
    duration = 0.6
  } = options;

  const [visibleItems, setVisibleItems] = useState(new Set());
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('[data-stagger-item]');
            items.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems(prev => new Set(prev).add(item));
              }, index * staggerDelay * 1000);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold, staggerDelay]);

  const getStaggerStyles = (element) => {
    const isVisible = visibleItems.has(element);
    
    const animations = {
      fadeInUp: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all ${duration}s ease-out`,
      },
      fadeInLeft: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
        transition: `all ${duration}s ease-out`,
      },
      scaleIn: {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        transition: `all ${duration}s ease-out`,
      }
    };

    return animations[animationType] || animations.fadeInUp;
  };

  return [containerRef, getStaggerStyles];
};

// Parallax scroll hook
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset];
};

// Scroll progress hook
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

// Custom hook for scroll-triggered counters
export const useCountAnimation = (end, options = {}) => {
  const { duration = 2, startDelay = 0 } = options;
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          setTimeout(() => {
            let start = 0;
            const increment = end / (duration * 60); // 60fps
            
            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(counter);
              } else {
                setCount(Math.floor(start));
              }
            }, 1000 / 60);

            return () => clearInterval(counter);
          }, startDelay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, startDelay, isVisible]);

  return [ref, count];
};