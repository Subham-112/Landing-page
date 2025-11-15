import { Gift, House, Search } from "lucide-react";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <span className="section-header-label">[ HOW IT WORKS ]</span>
        <h2 className="how-section-title">
          Find Your Next Hangout Spot in 3 Steps
        </h2>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">
              <span className="number">01</span>
            </div>
            <div className="step-details">
              <span className="icon"><Search size={35} color="rgb(207, 255, 0)" /></span>
              <h3 className="step-title">Discover Nearby</h3>
              <p className="step-description">
                Open the app to see a live map of food spots around you, powered
                by geofencing.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">
              <span className="number">02</span>
            </div>
            <div className="step-details">
              <span className="icon"><House size={35} color="rgb(207, 255, 0)" /></span>
              <h3 className="step-title">Explore Storefronts</h3>
              <p className="step-description">
                Tap on any spot to view their digital storefront, menu, and
                special offers.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">
              <span className="number">03</span>
            </div>
            <div className="step-details">
              <span className="icon"><Gift size={35} color="rgb(207, 255, 0)" /></span>
              <h3 className="step-title">Engage & Enjoy</h3>
              <p className="step-description">
                Connect with vendors, get directions, and enjoy the best local
                food Bhubaneswar has to offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
