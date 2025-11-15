import "./StudentVoice.css";

export default function StudentVoice() {
  const testimonials = [
    {
      id: 1,
      name: "Arjun Patel",
      title: "B.Tech CSE, 3rd Year",
      avatar: "A",
      avatarColor: "yellow",
      rating: 5,
      ratingColor: "yellow",
      testimonial:
        "Wisbox saved my life during exam season! I could pre-book my favorite biryani and pick it up between study sessions. No more waiting in long queues!",
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "MBA, 1st Year",
      avatar: "P",
      avatarColor: "blue",
      rating: 5,
      ratingColor: "blue",
      testimonial:
        "Found the most amazing street food stall near campus through Wisbox. The geofencing feature is genius - I get notified whenever I'm near good food!",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      title: "B.Tech EE, 2nd Year",
      avatar: "R",
      avatarColor: "purple",
      rating: 5,
      ratingColor: "purple",
      testimonial:
        "Table booking feature is perfect for group study sessions. We can reserve a spot at our favorite cafe and focus on studies with good food!",
    },
  ];

  return (
    <section className="student-voice-section">
      <div className="student-voice-container">
        <div className="voice-header">
          <span className="voice-badge">[ STUDENT VOICES ]</span>
          <h1 className="voice-title">What KIIT Students Say</h1>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`testimonial-card testimonial-${testimonial.avatarColor}`}>
              <div className="testimonial-top">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className={`star star-${testimonial.ratingColor}`}>★</span>
                  ))}
                </div>
                <div className={`avatar avatar-${testimonial.avatarColor}`}>
                  {testimonial.avatar}
                </div>
              </div>

              <p className="testimonial-text">"{testimonial.testimonial}"</p>

              <div className="testimonial-author">
                <div className={`author-avatar author-avatar-${testimonial.avatarColor}`}>
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <h3 className="author-name">{testimonial.name}</h3>
                  <p className="author-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
