import { Download } from "lucide-react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="absolute">WISBOX</h1>
      <span className="absolute span">[ SCROLL ]</span>
      <div className="hero-content">
        <div className="hero-heading">
          <h1>Discover nearby</h1>
          <h1 className="hero-gradient">
            <span className="market">market</span>
            <span className="instant">instantly.</span>
          </h1>
        </div>
        <p className="hero-desc">
          Your nearby discovery navigation and connection tool for the best food
          spots, restaurants, and dhabas in Bhubaneswar.
        </p>
        <button className="hero-button">
          <span>
            <Download size={25} strokeWidth={1.5} />
          </span>
          <p>Download from Playstore</p>
        </button>
      </div>
    </section>
  );
}
