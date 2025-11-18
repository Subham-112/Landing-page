import "./Explore.css";

export default function Explore({ isLoading = true }) {
  return (
    <section className={`explore-section ${!isLoading ? 'loaded' : ''}`}>
      <div className="explore-background">
        <img src="/Images/ready.png" alt="Background" className="bg-image" />
      </div>

      <div className="explore-container">
        <div className="explore-content">
          <div className="location-icon fade-in-scale-element" style={{ animationDelay: '0.1s' }}>📍</div>
          
          <h1 className="explore-title fade-in-element" style={{ animationDelay: '0.3s' }}>Ready to Explore?</h1>
          
          <p className="explore-description fade-in-element" style={{ animationDelay: '0.5s' }}>
            Download Wisbox and start discovering amazing food spots in
            <br />
            Bhubaneswar with the power of geofencing technology.
          </p>

          <div className="explore-buttons">
            <button className="btn-download slide-in-up-element" style={{ animationDelay: '0.7s' }}>
              <span className="download-icon">⬇</span> Get Wisbox on Playstore
            </button>
            
            <div className="community-badge fade-in-element" style={{ animationDelay: '0.9s' }}>
              <div className="avatars">
                <div className="avatar avatar-1">👤</div>
                <div className="avatar avatar-2">👤</div>
                <div className="avatar avatar-3">👤</div>
                <div className="avatar avatar-4">👤</div>
              </div>
              <span className="community-text">Join 10K+ foodies</span>
            </div>
          </div>

          <div className="explore-icon bottom-left fade-in-scale-element" style={{ animationDelay: '1.1s' }}>👥</div>
          <div className="explore-icon bottom-right fade-in-scale-element" style={{ animationDelay: '1.3s' }}>⭐</div>
        </div>
      </div>
    </section>
  );
}
