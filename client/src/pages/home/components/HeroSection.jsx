import { Download } from "lucide-react";
import { useParallax } from "../../../hooks/useScrollAnimation";
import { AnimatedElement } from "../../../components/AnimatedElement";
import "./HeroSection.css";

export default function HeroSection({ isLoading = true }) {
  const [parallaxRef, parallaxOffset] = useParallax(0.3);

  return (
    <section
      className={`hero-section ${!isLoading ? "loaded" : ""}`}
      ref={parallaxRef}
    >
      <div
        className="hero-background"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <h1 className="absolute">WISBOX</h1>
        <span className="absolute span">[ SCROLL ]</span>
      </div>

      <div className="hero-content">
        <div className="hero-heading">
          <AnimatedElement animation="fadeInUp" delay={200} duration={0.8}>
            <h1>Discover nearby</h1>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={400} duration={0.8}>
            <h1 className="hero-gradient">
              <span className="market">market</span>
              <span className="instant">instantly.</span>
            </h1>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="fadeInUp" delay={600} duration={0.8}>
          <p className="hero-desc">
            Your nearby discovery navigation and connection tool for the best
            food spots, restaurants, and dhabas in Bhubaneswar.
          </p>
        </AnimatedElement>

        <AnimatedElement animation="scaleIn" delay={800} duration={0.6}>
          <button className="hero-button">
            <span>
              <Download size={25} strokeWidth={1.5} />
            </span>
            <p>Download from Playstore</p>
          </button>
        </AnimatedElement>
      </div>
    </section>
  );
}
