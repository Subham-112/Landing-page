import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="abt-footer">
      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Join the food revolution</h2>
          <p className="cta-description">
            Whether you're a food lover or a vendor, Wisbox has something amazing for you. Download the app and start exploring Bhubaneswar's culinary landscape like never before.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">
              <span className="download-icon">⬇</span> Download Wisbox
            </button>
            <button className="btn btn-secondary">
              Become a Vendor <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="abt-footer-content">
        <div className="abt-footer-main">
          <div className="abt-footer-brand">
            <h3 className="footer-logo">Wisbox</h3>
            <p className="abt-footer-tagline">Empowering local food discovery in Bhubaneswar through smart geofencing technology.</p>
          </div>

          <div className="abt-footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/vendors" className="footer-link">For Vendors</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 Wisbox. Revolutionizing food discovery in Bhubaneswar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
