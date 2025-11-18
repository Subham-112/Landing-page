import "./Vendor.css";

export default function Vendor({ isLoading = true }) {
  return (
    <section className={`vendor-section ${!isLoading ? 'loaded' : ''}`}>
      <div className="vendor-container">
        <div className="vendor-content">
          <div className="vendor-left">
            <span className="vendor-section-badge fade-in-element" style={{ animationDelay: '0.1s' }}>[ FOR VENDORS ]</span>
            <h1 className="vendor-section-title fade-in-element" style={{ animationDelay: '0.3s' }}>
              Go Digital.
              <br />
              <span className="vendor-section-highlight">Grow Smarter.</span>
            </h1>
            <p className="vendor-section-description fade-in-element" style={{ animationDelay: '0.5s' }}>
              Join Wisbox to create your digital storefront, connect with KIIT students and local
              customers, and offer pre-booking and table reservations. Zero commission fees, maximum
              growth.
            </p>

            <div className="vendor-features fade-in-element" style={{ animationDelay: '0.7s' }}>
              <div className="vendor-feature-box scale-in-element" style={{ animationDelay: '0.8s' }}>
                <span className="feature-value">0%</span>
                <span className="feature-label">Commission Fees</span>
              </div>
              <div className="vendor-feature-box scale-in-element" style={{ animationDelay: '1.0s' }}>
                <span className="feature-value">24/7</span>
                <span className="feature-label">Booking System</span>
              </div>
            </div>

            <button className="vendor-cta slide-in-up-element" style={{ animationDelay: '1.2s' }}>
              Create Your Storefront <span>→</span>
            </button>
          </div>

          <div className="vendor-right">
            <div className="vendor-phone-mockup slide-in-right" style={{ animationDelay: '1.4s' }}>
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <img src="/Images/vendor-app.png" alt="Vendor Dashboard" />
                </div>
              </div>
              <div className="badge-go-live fade-in-scale-element" style={{ animationDelay: '1.6s' }}>Go Live</div>
              <div className="badge-analytics fade-in-scale-element" style={{ animationDelay: '1.8s' }}>📊 Analytics</div>
              <div className="badge-zero-fees fade-in-scale-element" style={{ animationDelay: '2.0s' }}>0% Fees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
