export default function Home() {
  return (
    <main>
      <header className="header">
        <nav className="nav-container">
          <div className="logo">
            <span>🎓</span>
            <span>Oakwood Academy</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Oakwood Academy</h1>
          <p>Where excellence meets opportunity. Empowering students to reach their full potential through innovative education and dedicated mentorship.</p>
          <div className="cta-buttons">
            <a href="#admissions" className="btn btn-primary">Apply Now</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <h2 className="section-title">Why Choose Oakwood Academy?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Academic Excellence</h3>
            <p>Rigorous curriculum designed to challenge and inspire students at every level, preparing them for future success.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Expert Faculty</h3>
            <p>Passionate educators with advanced degrees and years of experience dedicated to student achievement.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Arts & Culture</h3>
            <p>Comprehensive arts program including music, theater, visual arts, and dance to nurture creativity.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚽</div>
            <h3>Athletics</h3>
            <p>State-of-the-art facilities and competitive sports programs to develop physical fitness and teamwork.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Technology</h3>
            <p>Modern learning tools and STEM programs preparing students for the digital future.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Global Perspective</h3>
            <p>International exchange programs and multicultural curriculum fostering global citizenship.</p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>98%</h3>
            <p>College Acceptance Rate</p>
          </div>
          <div className="stat-item">
            <h3>15:1</h3>
            <p>Student-Teacher Ratio</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Clubs & Activities</p>
          </div>
          <div className="stat-item">
            <h3>25</h3>
            <p>Years of Excellence</p>
          </div>
        </div>
      </section>

      <section className="section" id="programs">
        <h2 className="section-title">Our Programs</h2>
        <div className="programs-grid">
          <div className="program-card">
            <h3>Elementary School</h3>
            <p>Grades K-5: Building strong foundations in literacy, mathematics, and social skills.</p>
            <ul>
              <li>Inquiry-based learning</li>
              <li>Character development</li>
              <li>Creative exploration</li>
              <li>Small class sizes</li>
            </ul>
          </div>
          <div className="program-card">
            <h3>Middle School</h3>
            <p>Grades 6-8: Fostering critical thinking and independence during formative years.</p>
            <ul>
              <li>Advanced coursework</li>
              <li>Leadership programs</li>
              <li>STEM initiatives</li>
              <li>Peer mentoring</li>
            </ul>
          </div>
          <div className="program-card">
            <h3>High School</h3>
            <p>Grades 9-12: College preparatory education with AP courses and career guidance.</p>
            <ul>
              <li>20+ AP courses</li>
              <li>College counseling</li>
              <li>Internship opportunities</li>
              <li>Honors programs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <h2 className="section-title">What Our Community Says</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"Oakwood Academy transformed my daughter's love for learning. The teachers genuinely care about each student's success and go above and beyond every day."</p>
            <p className="testimonial-author">— Sarah Mitchell, Parent</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"The rigorous academic program and supportive environment prepared me perfectly for university. I'm grateful for the foundation Oakwood provided."</p>
            <p className="testimonial-author">— James Chen, Alumni (Class of 2022)</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"Working at Oakwood has been the most rewarding experience of my career. The commitment to excellence and innovation is inspiring."</p>
            <p className="testimonial-author">— Dr. Emily Rodriguez, Faculty</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-content">
          <h2 className="section-title">Get in Touch</h2>
          <p>We'd love to hear from you! Schedule a campus tour or learn more about our admissions process.</p>
          <div className="contact-info">
            <div className="contact-item">
              <span>📍</span>
              <span>123 Education Drive, Springfield, ST 12345</span>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <span>(555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <span>admissions@oakwoodacademy.edu</span>
            </div>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <a href="#admissions" className="btn btn-primary">Schedule a Tour</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Oakwood Academy. All rights reserved. | Accredited by the National Education Association</p>
      </footer>
    </main>
  )
}
