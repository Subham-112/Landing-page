import { Star, MapPin, Award } from "lucide-react";
import "./VendorSuccess.css";

export default function VendorSuccess({ isLoading = true }) {
  const successStories = [
    {
      id: 1,
      image: "/Images/dhaba.png",
      businessName: "Suresh's Authentic Dhaba",
      ownerName: "Suresh Uncle",
      rating: 5.0,
      metric: "+300%",
      metricLabel: "Customer Growth",
      testimonial:
        "Since joining Wisbox, my small dhaba near KIIT has seen 300% more student customers. The pre-booking feature helps me manage rush hours better, and I love that there are no commission fees!",
      badges: [
        { label: "Featured Vendor", type: "featured" },
        { label: "Near KIIT", type: "location" },
      ],
      commissionBadge: "₹0 Commission",
    },
  ];

  const vendorTestimonials = [
    {
      id: 1,
      name: "Meera Devi",
      business: "Meera's Family Restaurant",
      image: "/Images/review1.png",
      rating: 5,
      ratingColor: "purple",
      metric: "+200%",
      testimonial: "The table booking system transformed my restaurant. Students can now reserve tables for group dining, and my revenue increased by 200%!",
      avatar: "M",
      avatarColor: "purple",
    },
    {
      id: 2,
      name: "Amit Kumar",
      business: "Amit's Cozy Cafe",
      image: "/Images/review2.png",
      rating: 5,
      ratingColor: "yellow",
      metric: "+500",
      testimonial: "Wisbox helped me reach 500+ new customers in just 2 months! The geofencing feature brings students right to my cafe.",
      avatar: "A",
      avatarColor: "yellow",
    },
    {
      id: 3,
      name: "Raj's Biryani",
      business: "+150% orders",
      rating: 5,
      ratingColor: "blue",
      testimonial: "Pre-booking increased my daily orders by 150%! Students love the convenience.",
      avatar: "R",
      avatarColor: "blue",
      isSimple: true,
    },
    {
      id: 4,
      name: "Priya's Sweets",
      business: "Sweet Success",
      rating: 5,
      ratingColor: "blue",
      testimonial: "Zero commission means more profit for my family business!",
      avatar: "P",
      avatarColor: "blue",
    },
    {
      id: 5,
      name: "Kiran's Kitchen",
      business: "Digital Pioneer",
      rating: 5,
      ratingColor: "purple",
      testimonial: "Best decision for my business! Digital presence changed everything.",
      avatar: "K",
      avatarColor: "purple",
    },
  ];

  const metrics = [
    { value: "500+", label: "Active Vendors", color: "yellow" },
    { value: "250%", label: "Avg Growth", color: "blue" },
    { value: "₹0", label: "Commission", color: "purple" },
    { value: "4.9", label: "Avg Rating", color: "pink" },
  ];

  return (
    <section className={`vendor-success-section ${!isLoading ? 'loaded' : ''}`}>
      <div className="vendor-success-container">
        <div className="vendor-suc-header">
          <span className="vendor-badge">[ VENDOR SUCCESS STORIES ]</span>
          <h1 className="vendor-title">
            Local Vendors <span className="vendor-highlight">Thriving Together</span>
          </h1>
          <p className="vendor-description">
            Real stories from real vendors who transformed their businesses with Wisbox's
            zero-commission platform
          </p>
        </div>

        <div className="success-stories-grid">
          {successStories.map((story) => (
            <div key={story.id} className="success-story-card">
              <div className="story-image-container">
                <img src={story.image} alt={story.businessName} className="story-image" />
                <div className="success-metric-badge">
                  <span className="success-metric-value">{story.metric}</span>
                  <span className="success-metric-label">{story.metricLabel}</span>
                </div>
                <div className="success-commission-badge">
                  <span className="success-commission-text">{story.commissionBadge}</span>
                </div>
              </div>

              <div className="story-content">
                <div className="story-rating">
                  <div className="rating-stars">
                    {[...Array(Math.floor(story.rating))].map((_, i) => (
                      <Star key={i} size={20} fill="rgb(168, 85, 247)" color="rgb(168, 85, 247)" />
                    ))}
                  </div>
                  <span className="rating-value">{story.rating.toFixed(1)} Rating</span>
                </div>

                <p className="story-testimonial">"{story.testimonial}"</p>

                <div className="story-footer">
                  <div className="vendor-info">
                    <div className="vendor-avatar">
                      {story.ownerName.charAt(0).toUpperCase()}
                    </div>
                    <div className="vendor-details">
                      <h3 className="vendor-name">{story.ownerName}</h3>
                      <p className="vendor-business">{story.businessName}</p>
                    </div>
                  </div>

                  <div className="vendor-badges">
                    {story.badges.map((badge, idx) => (
                      <span key={idx} className={`badge badge-${badge.type}`}>
                        {badge.type === "featured" ? "⭐" : "📍"} {badge.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="vendor-testimonials-section">
          <div className="testimonials-grid">
            {vendorTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`vendor-testimonial-card testimonial-${testimonial.avatarColor}`}
              >
                {!testimonial.isSimple && (
                  <div className="testimonial-header">
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className={`star star-${testimonial.ratingColor}`}>★</span>
                      ))}
                    </div>
                    {testimonial.metric && (
                      <span className={`metric-badge-small metric-${testimonial.ratingColor}`}>
                        {testimonial.metric}
                      </span>
                    )}
                  </div>
                )}

                {testimonial.isSimple ? (
                  <div className="simple-testimonial">
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className={`star star-${testimonial.ratingColor}`}>★</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="testimonial-image-small">
                    <img src={testimonial.image} alt={testimonial.business} />
                  </div>
                )}

                <p className="testimonial-text-small">"{testimonial.testimonial}"</p>

                <div className="testimonial-author-small">
                  <div className={`avatar-small avatar-${testimonial.avatarColor}`}>
                    {testimonial.avatar}
                  </div>
                  <div className="author-small">
                    <h4 className="author-name-small">{testimonial.name}</h4>
                    <p className="author-business-small">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="metrics-section">
          <div className="metrics-header">
            <h2 className="metrics-title">Collective Success Metrics</h2>
            <p className="metrics-subtitle">Real results from our vendor community across Bhubaneswar</p>
          </div>
          <div className="metrics-grid">
            {metrics.map((metric, idx) => (
              <div key={idx} className={`metric-card metric-${metric.color}`}>
                <div className="metric-value-large">{metric.value}</div>
                <div className="metric-label-large">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
