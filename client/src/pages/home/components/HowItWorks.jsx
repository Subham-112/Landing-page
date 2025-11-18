import { Gift, House, Search } from "lucide-react";
import {
  AnimatedElement,
  StaggerContainer,
  StaggerItem,
} from "../../../components/AnimatedElement";
import "./HowItWorks.css";

export default function HowItWorks({ isLoading = true }) {
  const steps = [
    {
      id: "01",
      icon: <Search size={35} color="rgb(207, 255, 0)" />,
      title: "Discover Nearby",
      description:
        "Open the app to see a live map of food spots around you, powered by geofencing.",
    },
    {
      id: "02",
      icon: <House size={35} color="rgb(207, 255, 0)" />,
      title: "Explore Storefronts",
      description:
        "Tap on any spot to view their digital storefront, menu, and special offers.",
    },
    {
      id: "03",
      icon: <Gift size={35} color="rgb(207, 255, 0)" />,
      title: "Engage & Enjoy",
      description:
        "Connect with vendors, get directions, and enjoy the best local food Bhubaneswar has to offer.",
    },
  ];

  return (
    <section className={`how-it-works ${!isLoading ? "loaded" : ""}`}>
      <div className="how-it-works-container">
        <AnimatedElement animation="fadeInUp" delay={0} threshold={0.2}>
          <span className="section-header-label">[ HOW IT WORKS ]</span>
        </AnimatedElement>

        <AnimatedElement animation="fadeInUp" delay={150} threshold={0.2}>
          <h2 className="how-section-title">
            Find Your Next Hangout Spot in 3 Steps
          </h2>
        </AnimatedElement>

        <StaggerContainer
          className="steps-container"
          animation="fadeInUp"
          staggerDelay={0.2}
          threshold={0.1}
        >
          {steps.map((step) => (
            <StaggerItem key={step.id} className="step">
              <div className="step-content">
                <div className="step-header">
                  <span className="number">{step.id}</span>
                  <div className="icon">{step.icon}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
