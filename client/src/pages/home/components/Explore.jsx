import "./Explore.css";

export default function Explore() {
  return (
    <section className="explore-section">
      <div className="explore-background">
        <img src="/Images/ready.png" alt="Background" className="bg-image" />
      </div>

      <div className="explore-container">
        <div className="explore-content">
          <div className="location-icon">📍</div>
          
          <h1 className="explore-title">Ready to Explore?</h1>
          
          <p className="explore-description">
            Download Wisbox and start discovering amazing food spots in
            <br />
            Bhubaneswar with the power of geofencing technology.
          </p>

          <div className="explore-buttons">
            <button className="btn-download">
              <span className="download-icon">⬇</span> Get Wisbox on Playstore
            </button>
            
            <div className="community-badge">
              <div className="avatars">
                <div className="avatar avatar-1">👤</div>
                <div className="avatar avatar-2">👤</div>
                <div className="avatar avatar-3">👤</div>
                <div className="avatar avatar-4">👤</div>
              </div>
              <span className="community-text">Join 10K+ foodies</span>
            </div>
          </div>

          <div className="explore-icon bottom-left">👥</div>
          <div className="explore-icon bottom-right">⭐</div>
        </div>
      </div>
    </section>
  );
}
