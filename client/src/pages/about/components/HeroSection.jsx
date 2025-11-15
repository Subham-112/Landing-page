import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            Revolutionizing
            <br />
            <span className="about-hero-highlight">food discovery</span>
            <br />
            in Bhubaneswar
          </h1>

          <p className="about-hero-description">
            Wisbox combines cutting-edge geofencing technology with local expertise to create the
            ultimate food discovery platform for Bhubaneswar's vibrant culinary scene.
          </p>
        </div>
      </div>
    </section>
  );
}
