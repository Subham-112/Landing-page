import { CheckCircle, Radio } from "lucide-react";
import "./OurSuccess.css";
import { useState } from "react";

export default function OurSuccess() {
  const [isMobile] = useState(window.innerWidth < 768);
  const values = [
    {
      id: 1,
      icon: "✓",
      iconColor: "yellow",
      title: "Digital Transformation",
      description:
        "Helping traditional food vendors embrace digital marketing and customer engagement.",
    },
    {
      id: 2,
      icon: "✓",
      iconColor: "blue",
      title: "Local Economy Growth",
      description:
        "Boosting local businesses by connecting them with nearby customers instantly.",
    },
    {
      id: 3,
      icon: "✓",
      iconColor: "purple",
      title: "Cultural Preservation",
      description:
        "Celebrating and preserving Bhubaneswar's rich culinary heritage through technology.",
    },
  ];

  const visionMetrics = [
    { value: "1000+", label: "Food Spots", color: "yellow" },
    { value: "50K+", label: "Active Users", color: "blue" },
    { value: "100%", label: "Digital Coverage", color: "purple" },
  ];

  return (
    <section className="our-success-section">
      <div className="our-success-container">
        {/* Mission Section */}
        <div className="mission-section">
          <h2 className="mission-title">
            Our <span className="mission-highlight">Mission</span>
          </h2>

          <p className="mission-description">
            To empower every local food spot in Bhubaneswar to go digital, attract customers,
            and grow smarter with geofencing technology. We believe that great food deserves to
            be discovered, and every vendor deserves the tools to succeed in the digital age.
          </p>

          <div className="values-grid">
            {values.map((value) => (
              <div key={value.id} className="value-card">
                <div className={`value-icon icon-${value.iconColor}`}>
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="vision-section">
          <div className="vision-icon"><Radio size={isMobile ? 40 : 65} color="rgb(90, 0, 255)" /></div>
          
          <h2 className="vision-title">Vision 2025</h2>
          
          <p className="vision-description">
            To become the leading food discovery platform across Eastern India, starting with
            Bhubaneswar.
          </p>

          <div className="vision-metrics">
            {visionMetrics.map((metric, idx) => (
              <div key={idx} className={`metric-box metric-${metric.color}`}>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
