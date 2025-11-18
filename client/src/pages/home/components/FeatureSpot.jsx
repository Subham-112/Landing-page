import "./FeatureSpot.css";

export default function FeatureSpot({ isLoading = true }) {
  const spots = [
    {
      id: 1,
      img: "/Images/bento1.png",
      name: "Ravi's Authentic Dhaba",
      description: "Famous for traditional Odisha thali and homestyle cooking",
      location: "Near KIIT Campus",
      distance: "0.2 km away",
      rating: 4.8,
      badge: "Featured",
    },
    {
      id: 2,
      img: "/Images/bento2.png",
      name: "Momo Paradise",
      location: "Kalinga Nagar",
      distance: "0.5 km",
      rating: 4.6,
      badge: "Hot",
    },
    {
      id: 3,
      img: "/Images/bento3.png",
      name: "Chai Adda",
      location: "Campus Road",
      distance: "0.1 km",
      badge: "Near",
    },
    {
      id: 4,
      img: "/Images/bento4.png",
      name: "Biryani House",
      location: "",
      distance: "0.3 km",
    },
    {
      id: 5,
      img: "/Images/bento5.png",
      name: "Fresh Juice",
      location: "",
      distance: "0.4 km",
    },
    {
      id: 6,
      img: "/Images/bento6.png",
      name: "Pizza Corner",
      location: "",
      distance: "0.6 km",
    },
  ];

  return (
    <section className={`feature-spot ${!isLoading ? 'loaded' : ''}`}>
      <div className="spot-container">
        <div className="spot-header">
          <span className="fade-in-element" style={{ animationDelay: '0.1s' }}>[ APP FEATURES ]</span>
          <h1 className="fade-in-element" style={{ animationDelay: '0.3s' }}>
            Your Ultimate <span className="spot-glow">Food Companion</span>
          </h1>
          <p className="spot-description fade-in-element" style={{ animationDelay: '0.5s' }}>
            Whether it's your nearby discovery, navigation and connection tool,
            designed to make finding the best local food spots a breeze.
          </p>
        </div>

        <div className="bento-image-container">
          {/* Large main card - spans 2x2 */}
          <div className="top-row">
            <div className="bento-card main-card scale-in-element" style={{ animationDelay: '0.7s' }}>
              <img
                src={spots[0].img}
                alt={spots[0].name}
                className="bento-image"
              />
              <div className="spot-info">
                <h3 className="spot-name">{spots[0].name}</h3>
                <p className="spot-desc">{spots[0].description}</p>
                <div className="spot-meta">
                  <span className="location">📍 {spots[0].location}</span>
                  <span className="distance">⏱️ {spots[0].distance}</span>
                </div>
              </div>
            </div>

            {/* Top right card */}
            <div className="right">
              <div className="bento-card top-right scale-in-element" style={{ animationDelay: '0.9s' }}>
                <img
                  src={spots[1].img}
                  alt={spots[1].name}
                  className="bento-image"
                />
                <div className="spot-badge">{spots[1].badge}</div>
                <div className="spot-info-small">
                  <h4 className="spot-name-small">{spots[1].name}</h4>
                  <span className="location-small">
                    📍 {spots[1].location} • {spots[1].distance}
                  </span>
                </div>
              </div>

              {/* Middle right card */}
              <div className="bento-card middle-right scale-in-element" style={{ animationDelay: '1.1s' }}>
                <img
                  src={spots[2].img}
                  alt={spots[2].name}
                  className="bento-image"
                />
                <div className="spot-badge near-badge">{spots[2].badge}</div>
                <div className="spot-info-small">
                  <h4 className="spot-name-small">{spots[2].name}</h4>
                  <span className="location-small">
                    📍 {spots[2].location} • {spots[2].distance}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-row">
            {/* Bottom row - 3 cards */}
            <div className="bento-card small-card scale-in-element" style={{ animationDelay: '1.3s' }}>
              <img
                src={spots[3].img}
                alt={spots[3].name}
                className="bento-image"
              />
              <div className="spot-info-tiny">
                <h4 className="spot-name-tiny">{spots[3].name}</h4>
                <span className="distance-tiny">{spots[3].distance}</span>
              </div>
            </div>

            <div className="bento-card small-card middle scale-in-element" style={{ animationDelay: '1.5s' }}>
              <img
                src={spots[4].img}
                alt={spots[4].name}
                className="bento-image"
              />
              <div className="spot-info-tiny">
                <h4 className="spot-name-tiny">{spots[4].name}</h4>
                <span className="distance-tiny">{spots[4].distance}</span>
              </div>
            </div>

            <div className="bento-card small-card scale-in-element" style={{ animationDelay: '1.7s' }}>
            <img src={spots[5].img} alt={spots[5].name} className="bento-image" />
            <div className="spot-info-tiny">
              <h4 className="spot-name-tiny">{spots[5].name}</h4>
              <span className="distance-tiny">{spots[5].distance}</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
