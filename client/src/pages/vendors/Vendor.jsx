import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Vendor.css";
import { Check, House, MapPin, CheckCircle2 } from "lucide-react";

const Vendor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vendorName: "",
    shopName: "",
    foodSpotType: "",
    contactNumber: "",
  });

  const vendorBenefits = [
    {
      id: 1,
      icon: <House size={30} color="rgb(207, 255, 0)" />,
      border: "rgb(207, 255, 0)",
      title: "Digital Presence",
      description: "Showcase your food spot with photos, menus, and details",
    },
    {
      id: 2,
      icon: <MapPin size={30} color="rgb(90, 0, 255)" />,
      border: "rgb(90, 0, 255)",
      title: "Local Discovery",
      description: "Reach customers when they're nearby with geofencing",
    },
    {
      id: 3,
      icon: <Check size={30} color="rgb(106, 142, 255)" />,
      border: "rgb(106, 142, 255)",
      title: "Free to Join",
      description: "No setup fees, no monthly charges, just pure growth",
    },
  ];

  const foodSpotTypes = [
    "Restaurant",
    "Cafe",
    "Street Food",
    "Bakery",
    "Fast Food",
    "Dessert Shop",
    "Juice Bar",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="vendor-page">
      {/* Header */}
      <header className="vendor-header">
        <div className="vendor-header-content">
          <div className="vendor-logo">Wisbox</div>
          <button className="back-btn" onClick={() => navigate("/")}>
            <span className="back-arrow">←</span> Back to Home
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="vendor-hero">
        <div className="vendor-hero-content">
          <h1 className="vendor-title">
            Join the <span className="highlight">Wisbox</span> family
          </h1>
          <p className="vendor-description">
            Create your digital storefront and connect with food lovers in
            Bhubaneswar. It's free, easy, and takes just a few minutes.
          </p>

          <div className="vendor-benefits">
            {vendorBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="benefit-card"
                style={{ border: `1px solid ${benefit.border}` }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="vendor-registration">
        <div className="registration-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <h2 className="registration-title">Create Your Vendor Profile</h2>

            <fieldset className="form-section">
              <legend className="form-legend">Vendor Information</legend>

              <div className="form-group">
                <label htmlFor="vendorName" className="form-label">
                  Your Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="vendorName"
                  name="vendorName"
                  placeholder="e.g., Ravi Kumar, Priya Sharma"
                  value={formData.vendorName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="shopName" className="form-label">
                  Shop/Food Spot Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="shopName"
                  name="shopName"
                  placeholder="e.g., Ravi's Dhaba, Momo Corner"
                  value={formData.shopName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="foodSpotType" className="form-label">
                  Food Spot Type <span className="required">*</span>
                </label>
                <select
                  id="foodSpotType"
                  name="foodSpotType"
                  value={formData.foodSpotType}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select your food spot type</option>
                  {foodSpotTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contactNumber" className="form-label">
                  Contact Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </fieldset>

            <div className="quick-registration-info">
              <div className="info-icon">
                <CheckCircle2 size={24} color="rgb(30, 144, 255)" />
              </div>
              <div className="info-text">
                <h3 className="info-title">Quick Registration</h3>
                <p className="info-description">
                  We've simplified the registration process! Additional details
                  like address, email, and operating hours can be added later
                  through your vendor dashboard.
                </p>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Join Wisbox
            </button>

            <p className="form-footer">
              By joining Wisbox, you agree to our terms of service and privacy
              policy. Your profile will be reviewed and activated within 24
              hours.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Vendor;
