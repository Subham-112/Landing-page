import { MapPin, Clock, Users } from "lucide-react";
import "./Student.css";

export default function Student({ isLoading = true }) {
  const features = [
    {
      id: 1,
      icon: <MapPin size={24} color="rgb(201, 255, 0)" />,
      title: "Find hot spots around KIIT campus instantly",
    },
    {
      id: 2,
      icon: <Clock size={24} color="#6366f1" />,
      title: "Prebook your orders for instant takeaway or dine-in without waiting",
    },
    {
      id: 3,
      icon: <Users size={24} color="rgb(90, 0, 255)" />,
      title: "Book tables for group study sessions with food",
    },
  ];

  return (
    <section className={`student-section ${!isLoading ? 'loaded' : ''}`}>
      <div className="student-container">
        <div className="student-content">
          <div className="student-left">
            <span className="student-badge fade-in-element" style={{ animationDelay: '0.1s' }}>[ FOR KIIT STUDENTS ]</span>
            <h1 className="student-title fade-in-element" style={{ animationDelay: '0.3s' }}>
              Your Campus
              <br />
              <span className="student-highlight">Lifestyle App</span>
            </h1>
            <p className="student-description fade-in-element" style={{ animationDelay: '0.5s' }}>
              Designed specifically for students, Wisbox is your nearby discovery navigation and
              connection tool that understands your food cravings, budget constraints, and the need
              for quick, quality meals between classes.
            </p>

            <div className="student-features">
              {features.map((feature, index) => (
                <div key={feature.id} className="student-feature-item scale-in-element" style={{ animationDelay: `${0.7 + index * 0.15}s` }}>
                  <div className="student-feature-icon">{feature.icon}</div>
                  <span className="student-feature-text">{feature.title}</span>
                </div>
              ))}
            </div>

            <button className="student-cta fade-in-element" style={{ animationDelay: '1.2s' }}>
              Join KIIT Food Community <span>→</span>
            </button>
          </div>

          <div className="student-right">
            <div className="student-image-container slide-in-right" style={{ animationDelay: '1.4s' }}>
              <img src="/Images/student.png" alt="KIIT Students" className="student-image" />
              
              <div className="badge-trending fade-in-scale-element" style={{ animationDelay: '1.6s' }}>
                <span className="badge-icon">✨</span>
                <span className="badge-text">Trending</span>
              </div>

              <div className="badge-nearby fade-in-scale-element" style={{ animationDelay: '1.8s' }}>
                <span className="badge-icon">📍</span>
                <span className="badge-text">Nearby</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
