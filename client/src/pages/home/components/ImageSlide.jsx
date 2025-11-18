import "./ImageSlide.css";
import { useState, useEffect } from "react";

export default function ImageSlide({ isLoading = true }) {
  const images = [
    {
      id: 1,
      img: "/Images/slide1.png",
      caption: "A bustling street scene in Bhubaneswar.",
    },
    { id: 2, img: "/Images/slide2.png", caption: "Local food market vibes." },
    { id: 3, img: "/Images/slide3.png", caption: "Street food delights." },
    { id: 4, img: "/Images/slide4.png", caption: "Restaurant showcase." },
    { id: 5, img: "/Images/slide5.png", caption: "Culinary experience." },
    { id: 6, img: "/Images/slide6.png", caption: "Local dining." },
    { id: 7, img: "/Images/slide7.png", caption: "Urban food culture." },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return; // Don't auto-slide when hovering

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length, isHovering]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className={`image-slide ${!isLoading ? 'loaded' : ''}`}>
      <div className="slide-header">
        <span className="section-label fade-in-element" style={{ animationDelay: '0.1s' }}>[ A TASTE OF BHUBANESWAR ]</span>
        <h2 className="slide-title fade-in-element" style={{ animationDelay: '0.3s' }}>The Vibe. The Food. The City.</h2>
      </div>

      <div className="carousel-container">
        <button className="nav-button prev fade-in-scale-element" style={{ animationDelay: '0.5s' }} onClick={goToPrevious}>
          ←
        </button>

        <div
          className="slide-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="carousel-track"
            style={{
              "--count": images.length,
            }}
          >
            {images.map((img, index) => {
              const prev = (currentSlide - 1 + images.length) % images.length;
              const next = (currentSlide + 1) % images.length;

              let className = "carousel-item";

              if (index === currentSlide) className += " center";
              else if (index === prev) className += " prev";
              else if (index === next) className += " next";
              else className += " hidden";

              return (
                <div className={className} key={index}>
                  <img src={img.img} className="carousel-image" />
                  {index === currentSlide && (
                    <>
                      <div className="featured-badge">Featured</div>
                      <div className="slide-caption">{img.caption}</div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <button className="nav-button next fade-in-scale-element" style={{ animationDelay: '0.7s' }} onClick={goToNext}>
          →
        </button>
      </div>

      <div className="slide-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator fade-in-scale-element ${index === currentSlide ? "active" : ""}`}
            style={{ animationDelay: `${0.9 + index * 0.1}s` }}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
