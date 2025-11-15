import "./Bhubaneswar.css";
import { MapPin, Users, Clock } from "lucide-react";

export default function Bhubaneswar() {
  const locations = [
    {
      id: 1,
      name: "Infocity Tech Hub",
      image: "/Images/infocity.png",
      status: "Coming Soon",
    },
    {
      id: 2,
      name: "Patia College Zone",
      image: "/Images/patia.png",
      status: "Coming Soon",
    },
    {
      id: 3,
      name: "Sum Hospital Area",
      image: "/Images/sum.png",
      status: "Coming Soon",
    },
  ];

  return (
    <section className="bhubaneswar-section">
      <div className="bhubaneswar-container">
        {/* Part 1: Currently Serving */}
        <div className="serving-section">
          <div className="bhu-header">
            <span className="serving-badge">[ LIVE IN BHUBANESWAR ]</span>
            <h1 className="serving-title">
              Currently Serving
              <span className="serving-highlight"> KIIT University Area</span>
            </h1>
            <p className="serving-description">
              Wisbox is actively serving the KIIT University area with 200+ food
              spots and 30,000+ students discovering amazing food daily.
            </p>
          </div>

          <div className="flagship-card">
            <div className="flagship-left">
              <div className="location-badge">
                <MapPin size={35} color="rgb(201, 255, 0)" />
              </div>
              <div className="flagship-image">
                <img src="/Images/kiit.png" alt="KIIT University Area" />
              </div>
            </div>

            <div className="flagship-right">
              <div className="flagship-details">
                <div className="right-heading">
                  <h3 className="flagship-title">KIIT University Area</h3>
                  <span className="live-badge">LIVE NOW</span>
                </div>
                <p className="flagship-description">
                  Our flagship location with 200+ food spots serving 30,000+
                  students daily. From street food to fine dining, discover it
                  all with Wisbox.
                </p>
              </div>

              <div className="flagship-stats">
                <div className="flag-stat-item">
                  <div className="flag-stat-label">Active</div>
                  <div className="flag-stat-type">Food Spots</div>
                </div>
                <div className="flag-stat-item">
                  <div className="flag-stat-label">Live</div>
                  <div className="flag-stat-type">Students</div>
                </div>
                <div className="flag-stat-item">
                  <div className="flag-stat-label">24/7</div>
                  <div className="flag-stat-type">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Coming Soon Locations */}
        <div className="coming-soon-section">
          <div className="coming-soon-grid">
            {locations.map((location) => (
              <div key={location.id} className="coming-soon-card">
                <div className="coming-soon-image">
                  <img src={location.image} alt={location.name} />
                </div>
                <div className="coming-soon-content">
                  <h3 className="coming-soon-title">{location.name}</h3>
                  <span className="coming-soon-badge">
                    <span className="status-dot"></span>
                    {location.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bhu-cta-section">
          <h2 className="bhu-cta-title">Experience Wisbox</h2>
          <p className="bhu-cta-description">
            Join thousands of users who are already discovering amazing food
            spots around campus with Wisbox's smart geofencing technology.
          </p>
          <div className="bhu-cta-buttons">
            <button className="bhu-btn-download">
              <span>↓</span> Download Wisbox
            </button>
            <button className="bhu-btn-vendor">
              Join as Vendor <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
