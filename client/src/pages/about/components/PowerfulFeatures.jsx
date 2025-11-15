import React from "react";
import "./PowerfulFeatures.css";
import { ChartLine, Globe, MapPin, Smartphone, Users, Zap } from "lucide-react";

const PowerfulFeatures = () => {
  const foodLoversFeatures = [
    {
      id: 1,
      icon: <MapPin size={35} color="rgb(207, 255, 0)" />,
      title: "Smart Geofencing",
      description:
        "Automatically discover food spots within your preferred radius. Get notified when you're near great food options.",
    },
    {
      id: 2,
      icon: <Smartphone size={35} color="rgb(106, 142, 255)" />,
      title: "Real-Time Updates",
      description:
        "Live information about opening hours, special offers, and availability. Never miss out on your favorite spots.",
    },
    {
      id: 3,
      icon: <Users size={35} color="rgb(221, 160, 221)" />,
      title: "Community Reviews",
      description:
        "Read authentic reviews from local food enthusiasts and share your own experiences with the community.",
    },
  ];

  const foodVendorsFeatures = [
    {
      id: 1,
      icon: <Globe size={30} color="rgb(90, 0, 255)" />,
      title: "Digital Storefront",
      description:
        "Create a professional digital presence with photos, menus, and contact information. Showcase what makes you special.",
    },
    {
      id: 2,
      icon: <Zap size={30} color="rgb(207, 255, 0)" />,
      title: "Instant Promotions",
      description:
        "Launch targeted promotions to customers in your area. Drive foot traffic during slow hours or special events.",
    },
    {
      id: 3,
      icon: <ChartLine size={30} color="rgb(106, 142, 255)" />,
      title: "Analytics & Insights",
      description:
        "Understand your customer patterns, peak hours, and promotional effectiveness with detailed analytics.",
    },
  ];

  return (
    <div className="powerful-features">
      <div className="features-container">
        <h1 className="features-title">
          Powerful <span className="highlight">Features</span>
        </h1>
        <p className="features-subtitle">
          Advanced technology meets local needs to create an unparalleled food
          discovery experience
        </p>

        <div className="p-features-grid">
          {/* Food Lovers Section */}
          <div className="p-features-column">
            <h2 className="column-title food-lovers-title">For Food Lovers</h2>
            <div className="p-features-cards">
              {foodLoversFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="p-feature-card food-lovers-card"
                >
                  <div className="p-feature-icon">{feature.icon}</div>
                  <div className="p-feature-details">
                    <h3 className="p-feature-title">{feature.title}</h3>
                    <p className="p-feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Food Vendors Section */}
          <div className="p-features-column">
            <h2 className="column-title food-vendors-title">
              For Food Vendors
            </h2>
            <div className="p-features-cards">
              {foodVendorsFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="p-feature-card food-vendors-card"
                >
                  <div className="p-feature-icon">{feature.icon}</div>
                  <div className="p-feature-details">
                    <h3 className="p-feature-title">{feature.title}</h3>
                    <p className="p-feature-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerfulFeatures;
