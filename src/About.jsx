import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Your Financial Journey</h1>
          <p>
            Welcome to <span>Zerodha</span> — building trust, innovation, and
            seamless experiences for modern investors and customers.
          </p>
        </div>
      </section>

      {/* Main Card */}
      <section className="about-wrapper">
        <div className="company-card">
          <div className="company-header">
            <h2>About Zerodha</h2>
            <p>
              Founded in 2026, Zerodha began as a small passion project in
              Vijayawada and quickly grew into a trusted destination for
              thousands of customers.
            </p>
          </div>

          <div className="grid-section">
            <div className="info-card">
              <h3>🚀 Our Mission</h3>
              <p>
                We are committed to delivering high-quality, affordable, and
                ethically sourced products while ensuring customer satisfaction
                remains our highest priority.
              </p>
            </div>

            <div className="info-card">
              <h3>🌍 Our Vision</h3>
              <p>
                To create a platform where trust, quality, and innovation come
                together to redefine online shopping experiences.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-section">
            <div className="stat-box">
              <h2>10K+</h2>
              <p>Happy Customers</p>
            </div>

            <div className="stat-box">
              <h2>500+</h2>
              <p>Premium Products</p>
            </div>

            <div className="stat-box">
              <h2>99%</h2>
              <p>Customer Satisfaction</p>
            </div>
          </div>

          {/* Socials */}
          <div className="social-section">
            <h3>Connect With Us</h3>

            <div className="social-buttons">
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter (X)</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;