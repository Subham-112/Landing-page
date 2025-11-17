import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer({ isLoading = true }) {
  return (
    <footer className={`footer ${!isLoading ? 'loaded' : ''}`}>
      <div className="footer-container">
        <div className="footer-section-header">
          <h3 className="footer-brand">Wisbox</h3>
          <p className="footer-description">
            Empowering local food discovery in Bhubaneswar through smart
            geofencing technology.
          </p>
        </div>

        <div className="footer-info">
          <div className="footer-content-section">
            <h4 className="footer-title">[ FEATURES ]</h4>
            <ul className="footer-links">
              <li>
                <Link to="#location">Location Discovery</Link>
              </li>
              <li>
                <Link to="#vendors">Vendor Profiles</Link>
              </li>
              <li>
                <Link to="#promotions">Live Promotions</Link>
              </li>
            </ul>
          </div>

          <div className="footer-content-section">
            <h4 className="footer-title">[ FOR VENDORS ]</h4>
            <ul className="footer-links">
              <li>
                <Link to="#join">Join Wisbox</Link>
              </li>
              <li>
                <Link to="#profile">Create Profile</Link>
              </li>
              <li>
                <Link to="#promote">Promote Events</Link>
              </li>
            </ul>
          </div>

          <div className="footer-content-section">
            <h4 className="footer-title">[ CONTACT ]</h4>
            <div className="footer-contact">
              <p className="contact-item">
                <span className="contact-icon">📞</span> +91 XXXX XXXXXX
              </p>
              <p className="contact-item">
                <span className="contact-icon">📍</span> Bhubaneswar, Odisha
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2024 Wisbox. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
