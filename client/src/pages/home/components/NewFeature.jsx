import { Clock, Users } from "lucide-react";
import "./NewFeature.css";
import { useState } from "react";

export default function NewFeature({ isLoading = true }) {
  const [isMobile] = useState(window.innerWidth < 768);
  const features = [
    {
      id: 1,
      icon: <Clock size={isMobile ? 25 : 32} color="rgb(201, 255, 0)" />,
      title: "Food Pre-Booking",
      image: "/Images/new1.png",
      description:
        "Order your favorite meals in advance for dine-in or takeaway. Perfect for busy students who want to grab food between classes without waiting.",
      points: [
        "Schedule orders up to 24 hours ahead",
        "Choose dine-in or takeaway options",
        "Get notifications when your order is ready",
      ],
      badge: "24h",
      badgeColor: "yellow",
    },
    {
      id: 2,
      icon: <Users size={isMobile ? 25 : 32} color="#6366f1" />,
      title: "Table Reservations",
      image: "/Images/new2.png",
      description:
        "Reserve tables at local restaurants for group dining, study sessions, or special occasions. Every participating restaurant offers seamless booking.",
      points: [
        "Real-time table availability",
        "Group size and special requests",
        "Instant confirmation and reminders",
      ],
      badge: "Live",
      badgeColor: "blue",
    },
  ];

  return (
    <section className={`new-feature-section ${!isLoading ? 'loaded' : ''}`}>
      <div className="new-feature-container">
        <div className="new-feature-header">
          <span className="new-feature-badge">[ NEW FEATURES ]</span>
          <h1 className="new-feature-title">Pre-Book & Reserve</h1>
          <p className="new-feature-description">
            Skip the wait, secure your spot. Wisbox now offers food pre-booking and table
            reservations for a seamless dining experience.
          </p>
        </div>

        <div className="new-feature-grid">
          {features.map((feature) => (
            <div key={feature.id} className="new-feature-card">
              <div className="feature-top">
                <div className="feature-icon-box">{feature.icon}</div>
                <h2 className="feature-card-title">{feature.title}</h2>
              </div>

              <div className="feature-images">
                <div className="feature-image-wrapper">
                  <img src={feature.image} alt={feature.title} className="feature-image" />
                  <span className={`feature-badge feature-badge-${feature.badgeColor}`}>
                    {feature.badge}
                  </span>
                </div>
              </div>

              <p className="feature-card-description">{feature.description}</p>

              <ul className="feature-points">
                {feature.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
