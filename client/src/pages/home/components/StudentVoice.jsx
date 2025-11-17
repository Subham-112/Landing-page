import "./StudentVoice.css";

export default function StudentVoice({ isLoading = true }) {
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
    <section className={`student-voice-section ${!isLoading ? 'loaded' : ''}`}>
      <div className="student-voice-container">
        <div className="voice-header">
          <span className="voice-badge">[ STUDENT VOICES ]</span>
          <h1 className="voice-title">What KIIT Students Say</h1>
        </div>

        <div className="stu-testimonials-grid">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`stu-testimonial-card testimonial-${testimonial.avatarColor}`}
            >
              <div className="stu-testimonial-top">
                <div className="stu-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className={`stu-star star-${testimonial.ratingColor}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className={`stu-avatar avatar-${testimonial.avatarColor}`}>
                  {testimonial.avatar}
                </div>
              </div>

              <p className="stu-testimonial-text">
                "{testimonial.testimonial}"
              </p>

              <div className="stu-testimonial-author">
                <div
                  className={`stu-author-avatar author-avatar-${testimonial.avatarColor}`}
                >
                  {testimonial.avatar}
                </div>
                <div className="stu-author-info">
                  <h3 className="stu-author-name">{testimonial.name}</h3>
                  <p className="stu-author-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
