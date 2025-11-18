import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import "./BackToTop.css";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <div
        className="progress-ring"
        style={{
          background: `conic-gradient(rgb(207, 255, 0) ${
            scrollProgress * 3.6
          }deg, rgba(255,255,255,0.1) 0deg)`,
        }}
      >
        <div className="inner-circle">
          <ChevronUp size={20} />
        </div>
      </div>
    </button>
  );
};
