import "./ImageSlide.css";
import { useState, useEffect } from "react";

export default function ImageSlide() {
  const images = [
    { id: 1, img: "/Images/slide1.png", caption: "A bustling street scene in Bhubaneswar." },
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
    }, 5000);

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
    <section className="image-slide">
      <div className="slide-header">
        <span className="section-label">[ A TASTE OF BHUBANESWAR ]</span>
        <h2 className="slide-title">The Vibe. The Food. The City.</h2>
      </div>

      <div className="carousel-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className="nav-button prev" onClick={goToPrevious}>
          ←
        </button>

        <div className="slide-wrapper">
          <div className="cards-stack">
            {/* Back left card */}
            <div className="stack-card back-left">
              <img
                src={images[(currentSlide - 1 + images.length) % images.length].img}
                alt="Previous"
                className="stack-image"
              />
            </div>

            {/* Back right card */}
            <div className="stack-card back-right">
              <img
                src={images[(currentSlide + 1) % images.length].img}
                alt="Next"
                className="stack-image"
              />
            </div>

            {/* Main card */}
            <div className="slide-image-container">
              {images.map((image, index) => (
                <img
                  key={image.id}
                  src={image.img}
                  alt={image.caption}
                  className={`slide-image ${index === currentSlide ? "active" : ""}`}
                />
              ))}
              
              <div className="featured-badge">Featured</div>
              
              <div className="slide-caption">
                {images[currentSlide].caption}
              </div>
            </div>
          </div>
        </div>

        <button className="nav-button next" onClick={goToNext}>
          →
        </button>
      </div>

      <div className="slide-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
