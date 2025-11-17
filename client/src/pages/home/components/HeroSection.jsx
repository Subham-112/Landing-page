import { Download } from "lucide-react";
import "./HeroSection.css";

export default function HeroSection({ isLoading = true }) {
  return (
    <section className={`hero-section ${!isLoading ? 'loaded' : ''}`}>
      <h1 className="absolute">WISBOX</h1>
      <span className="absolute span">[ SCROLL ]</span>
      <div className="hero-content">
        <div className="hero-heading">
          <h1 className="fade-in-element" style={{ animationDelay: '0.2s' }}>Discover nearby</h1>
          <h1 className="hero-gradient fade-in-element" style={{ animationDelay: '0.4s' }}>
            <span className="market">market</span>
            <span className="instant">instantly.</span>
          </h1>
        </div>
        <p className="hero-desc fade-in-element" style={{ animationDelay: '0.6s' }}>
          Your nearby discovery navigation and connection tool for the best food
          spots, restaurants, and dhabas in Bhubaneswar.
        </p>
        <button className="hero-button fade-in-element" style={{ animationDelay: '0.8s' }}>
          <span>
            <Download size={25} strokeWidth={1.5} />
          </span>
          <p>Download from Playstore</p>
        </button>
      </div>
    </section>
  );
}
