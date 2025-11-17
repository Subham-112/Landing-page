import "./Vendor.css";

export default function Vendor({ isLoading = true }) {
  return (
    <section className={`vendor-section ${!isLoading ? 'loaded' : ''}`}>
      <div className="vendor-container">
        <div className="vendor-content">
          <div className="vendor-left">
            <span className="vendor-section-badge">[ FOR VENDORS ]</span>
            <h1 className="vendor-section-title">
              Go Digital.
              <br />
              <span className="vendor-section-highlight">Grow Smarter.</span>
            </h1>
            <p className="vendor-section-description">
              Join Wisbox to create your digital storefront, connect with KIIT students and local
              customers, and offer pre-booking and table reservations. Zero commission fees, maximum
              growth.
            </p>

            <div className="vendor-features">
              <div className="vendor-feature-box">
                <span className="feature-value">0%</span>
                <span className="feature-label">Commission Fees</span>
              </div>
              <div className="vendor-feature-box">
                <span className="feature-value">24/7</span>
                <span className="feature-label">Booking System</span>
              </div>
            </div>

            <button className="vendor-cta">
              Create Your Storefront <span>→</span>
            </button>
          </div>

          <div className="vendor-right">
            <div className="vendor-phone-mockup">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <img src="/Images/vendor-app.png" alt="Vendor Dashboard" />
                </div>
              </div>
              <div className="badge-go-live">Go Live</div>
              <div className="badge-analytics">📊 Analytics</div>
              <div className="badge-zero-fees">0% Fees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
