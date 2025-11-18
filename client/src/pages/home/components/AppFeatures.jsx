import { LocateFixed, User, Users, Zap } from "lucide-react";
import "./AppFeatures.css";

export default function AppFeatures({ isLoading = true }) {
  const features = [
    {
      id: 1,
      icon: <LocateFixed size={35} color="rgb(201, 255, 0)" />,
      title: "Smart Maps",
      subtitle: "Live Geofencing Technology",
      description:
        "Real-time discovery of food spots within your radius with precise location tracking",
    },
    {
      id: 2,
      icon: <Users size={35} color="rgb(90, 0, 255)" />,
      title: "Social Hub",
      subtitle: "Community-Driven Reviews",
      description:
        "Connect with fellow foodies and share authentic experiences from the local community",
    },
    {
      id: 3,
      icon: <Zap size={35} color="rgb(106, 142, 255)" />,
      title: "Instant Alerts",
      subtitle: "Smart Notifications",
      description:
        "Get notified about special deals, new spots, and trending food when you're nearby",
    },
  ];

  return (
    <section className={`app-features ${!isLoading ? 'loaded' : ''}`}>
      <div className="features-container">
        <div className="app-header">
          <span className="heading fade-in-element" style={{ animationDelay: '0.1s' }}>[ APP FEATURES ]</span>
          <h1 className="fade-in-element" style={{ animationDelay: '0.3s' }}>Your Ultimate Food Companion</h1>
          <p className="fade-in-element" style={{ animationDelay: '0.5s' }}>
            Wisbox is your nearby discovery navigation and connection tool,
            designed to make finding amazing food spots effortless and fun.
          </p>
        </div>
        <div className="app-features-grid">
          {features.map((feature, index) => (
            <div key={feature.id} className="app-feature-card fade-in-element" style={{ animationDelay: `${0.7 + index * 0.2}s` }}>
              <div className="app-feature-icon">{feature.icon}</div>
              <h3 className="app-feature-title">{feature.title}</h3>
              <p className="app-feature-subtitle">{feature.subtitle}</p>
              <p className="app-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="comparison-section fade-in-element" style={{ animationDelay: '1.3s' }}>
          <h2 className="comparison-title">Why Wisbox is Different</h2>
          <div className="comparison-grid">
            <div className="comparison-column">
              <h3 className="comparison-column-title">Traditional Food Apps</h3>
              <ul className="comparison-list">
                <li>Focus only on food delivery with limited local discovery</li>
                <li>Miss hidden gems and authentic local food experiences</li>
                <li>High fees burden small vendors and limit their growth</li>
              </ul>
            </div>

            <div className="comparison-column wisbox-column">
              <h3 className="comparison-column-title wisbox-title">Wisbox Advantage</h3>
              <ul className="comparison-list wisbox-list">
                <li>Nearby discovery navigation and connection tool for authentic experiences</li>
                <li>Smart geofencing reveals local favorites and trending spots instantly</li>
                <li>Zero commission model empowers local vendors to thrive</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
