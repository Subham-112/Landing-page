import { LocateFixed, Smartphone, Users, Zap } from "lucide-react";
import "./CoreFeatures.css";

export default function CoreFeatures({ isLoading = true }) {
  const features = [
    {
      id: 1,
      icon: <LocateFixed size={40} color="rgb(207, 255, 0)" />,
      title: "Hyper-Local Discovery",
      description:
        "Find hidden gems and popular spots within your immediate vicinity.",
    },
    {
      id: 2,
      icon: <Smartphone size={40} color="rgb(106, 142, 255)" />,
      title: "Digital Storefronts",
      description: "Vendors showcase their menu, hours, and unique story.",
    },
    {
      id: 3,
      icon: <Users size={40} color="rgb(221, 160, 221)" />,
      title: "Direct Engagement",
      description:
        "Connect with vendors through inquiries for events and special orders.",
    },
    {
      id: 4,
      icon: <Zap size={40} color="rgb(90, 0, 255)" />,
      title: "Live Promotions",
      description:
        "Get notified about real-time offers and events happening near you.",
    },
  ];

  return (
    <section className={`core-features ${!isLoading ? 'loaded' : ''}`}>
      <div className="core-features-container">
        <div className="features-left">
          <span className="core-section-label fade-in-element" style={{ animationDelay: '0.1s' }}>[ CORE FEATURES ]</span>
          <h2 className="main-title fade-in-element" style={{ animationDelay: '0.3s' }}>
            Smart discovery
            meets{" "}
            <span className="highlight">
              local taste.
            </span>
          </h2>
          <p className="description fade-in-element" style={{ animationDelay: '0.5s' }}>
            Wisbox transforms how you find food. Our nearby discovery navigation
            and connection tool connects you with vendors instantly, creating a
            vibrant local marketplace.
          </p>
          <button className="learn-more-btn fade-in-element" style={{ animationDelay: '0.7s' }}>Learn More →</button>
        </div>

        <div className="features-right">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={feature.id} className="feature-card fade-in-element" style={{ animationDelay: `${0.9 + index * 0.15}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
