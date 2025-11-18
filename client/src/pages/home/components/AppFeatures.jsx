import { LocateFixed, User, Users, Zap } from "lucide-react";
import {
  AnimatedElement,
  StaggerContainer,
  StaggerItem,
} from "../../../components/AnimatedElement";
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

  const comparisonFeatures = {
    traditional: [
      "Focus only on food delivery with limited local discovery",
      "Miss hidden gems and authentic local food experiences",
      "High fees burden small vendors and limit their growth",
    ],
    wisbox: [
      "Nearby discovery navigation and connection tool for authentic experiences",
      "Smart geofencing reveals local favorites and trending spots instantly",
      "Zero commission model empowers local vendors to thrive",
    ],
  };

  return (
    <section className={`app-features ${!isLoading ? "loaded" : ""}`}>
      <div className="features-container">
        <div className="app-header">
          <AnimatedElement animation="fadeInUp" delay={0} threshold={0.2}>
            <span className="heading">[ APP FEATURES ]</span>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={150} threshold={0.2}>
            <h1>Your Ultimate Food Companion</h1>
          </AnimatedElement>

          <AnimatedElement animation="fadeInUp" delay={300} threshold={0.2}>
            <p>
              Wisbox is your nearby discovery navigation and connection tool,
              designed to make finding amazing food spots effortless and fun.
            </p>
          </AnimatedElement>
        </div>

        <StaggerContainer
          className="app-features-grid"
          animation="bounceIn"
          staggerDelay={0.2}
          threshold={0.1}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.id} className="app-feature-card">
              <div className="app-feature-icon">{feature.icon}</div>
              <h3 className="app-feature-title">{feature.title}</h3>
              <p className="app-feature-subtitle">{feature.subtitle}</p>
              <p className="app-feature-description">{feature.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedElement animation="fadeInUp" delay={200} threshold={0.15}>
          <div className="comparison-section">
            <h2 className="comparison-title">Why Wisbox is Different</h2>
            <div className="comparison-grid">
              <AnimatedElement
                animation="slideInLeft"
                delay={100}
                threshold={0.2}
              >
                <div className="comparison-column">
                  <h3 className="comparison-column-title">
                    Traditional Food Apps
                  </h3>
                  <StaggerContainer animation="fadeInUp" staggerDelay={0.1}>
                    <ul className="comparison-list">
                      {comparisonFeatures.traditional.map((item, index) => (
                        <StaggerItem key={index}>
                          <li>{item}</li>
                        </StaggerItem>
                      ))}
                    </ul>
                  </StaggerContainer>
                </div>
              </AnimatedElement>

              <AnimatedElement
                animation="slideInRight"
                delay={100}
                threshold={0.2}
              >
                <div className="comparison-column wisbox-column">
                  <h3 className="comparison-column-title wisbox-title">
                    Wisbox Advantage
                  </h3>
                  <StaggerContainer animation="fadeInUp" staggerDelay={0.1}>
                    <ul className="comparison-list wisbox-list">
                      {comparisonFeatures.wisbox.map((item, index) => (
                        <StaggerItem key={index}>
                          <li>{item}</li>
                        </StaggerItem>
                      ))}
                    </ul>
                  </StaggerContainer>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
