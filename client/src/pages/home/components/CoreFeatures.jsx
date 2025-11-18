import { LocateFixed, Smartphone, Users, Zap } from "lucide-react";
import {
  AnimatedElement,
  StaggerContainer,
  StaggerItem,
} from "../../../components/AnimatedElement";
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
    <section className={`core-features ${!isLoading ? "loaded" : ""}`}>
      <div className="core-features-container">
        <div className="features-left">
          <AnimatedElement animation="fadeInLeft" delay={0} threshold={0.2}>
            <span className="core-section-label">[ CORE FEATURES ]</span>
          </AnimatedElement>

          <AnimatedElement animation="fadeInLeft" delay={100} threshold={0.2}>
            <h2 className="main-title">
              Smart discovery meets{" "}
              <span className="highlight">local taste.</span>
            </h2>
          </AnimatedElement>

          <AnimatedElement animation="fadeInLeft" delay={200} threshold={0.2}>
            <p className="description">
              Wisbox transforms how you find food. Our nearby discovery
              navigation and connection tool connects you with vendors
              instantly, creating a vibrant local marketplace.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="fadeInLeft" delay={300} threshold={0.2}>
            <button className="learn-more-btn">Learn More →</button>
          </AnimatedElement>
        </div>

        <div className="features-right">
          <StaggerContainer
            className="features-grid"
            animation="scaleIn"
            staggerDelay={0.15}
            threshold={0.1}
          >
            {features.map((feature) => (
              <StaggerItem key={feature.id} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
