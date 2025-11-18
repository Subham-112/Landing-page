import {
  useScrollAnimation,
  useStaggerAnimation,
} from "../hooks/useScrollAnimation";
import { useRef, useEffect } from "react";

// Animated wrapper component
export const AnimatedElement = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = "",
  style = {},
  triggerOnce = true,
  ...props
}) => {
  const [ref, animationStyles] = useScrollAnimation({
    animationType: animation,
    delay,
    duration,
    threshold,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...animationStyles, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

// Improved Staggered children animation component
export const StaggerContainer = ({
  children,
  animation = "fadeInUp",
  staggerDelay = 0.1,
  duration = 0.6,
  threshold = 0.1,
  className = "",
  style = {},
  ...props
}) => {
  const containerRef = useRef();
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-stagger-item]");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = "1";

                // Apply animation based on type
                switch (animation) {
                  case "fadeInUp":
                    item.style.transform = "translateY(0)";
                    break;
                  case "fadeInLeft":
                    item.style.transform = "translateX(0)";
                    break;
                  case "fadeInRight":
                    item.style.transform = "translateX(0)";
                    break;
                  case "scaleIn":
                    item.style.transform = "scale(1)";
                    break;
                  case "bounceIn":
                    item.style.transform = "scale(1)";
                    break;
                  default:
                    item.style.transform = "translateY(0)";
                }
              }, index * staggerDelay * 1000);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);

      // Set initial styles for all stagger items
      const items = containerRef.current.querySelectorAll(
        "[data-stagger-item]"
      );
      items.forEach((item) => {
        item.style.opacity = "0";
        item.style.transition = `all ${duration}s ease-out`;

        // Set initial transform based on animation type
        switch (animation) {
          case "fadeInUp":
            item.style.transform = "translateY(30px)";
            break;
          case "fadeInLeft":
            item.style.transform = "translateX(-30px)";
            break;
          case "fadeInRight":
            item.style.transform = "translateX(30px)";
            break;
          case "scaleIn":
            item.style.transform = "scale(0.8)";
            break;
          case "bounceIn":
            item.style.transform = "scale(0)";
            item.style.transition = `all ${duration}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
            break;
          default:
            item.style.transform = "translateY(30px)";
        }
      });
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [animation, staggerDelay, duration, threshold]);

  return (
    <div ref={containerRef} className={className} style={style} {...props}>
      {children}
    </div>
  );
};

// Individual stagger item
export const StaggerItem = ({
  children,
  className = "",
  style = {},
  ...props
}) => {
  return (
    <div data-stagger-item className={className} style={style} {...props}>
      {children}
    </div>
  );
};
