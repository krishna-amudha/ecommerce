import React from 'react';


function About() {
  return (
    <div>
      <div className="container py-5">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <h1 className="mb-3">About Us</h1>
            <p >
              We focus on building simple, clean, and user-friendly digital experiences.
              Our goal is to make technology easy and accessible for everyone.
            </p>
            <p>great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.</p>
            <div className="d-flex gap-3 py-4">
              <button className="btn btn-dark-color rounded-pill px-4 d-flex align-items-center gap-3">
                <span>View Intro</span>
                <span className="play-icon">
                  <i className="bi bi-play-fill"></i>
                </span>
              </button>

              <button className="btn btn-color rounded-pill px-4">
                Explore Now
              </button>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://thumbs.dreamstime.com/b/woman-clothing-store-young-72249675.jpg"
              alt="About"
              className="img-fluid rounded"
            />
          </div>

        </div>
      </div>
      <div className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <h3>Our Vision</h3>
              <p className="text-muted">
                To become a leading platform that delivers simple and effective digital solutions
                for people around the world.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h3>Our Mission</h3>
              <p className="text-muted">
                To design and develop products that are easy to use, reliable, and accessible,
                helping users achieve more with less complexity.
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center mb-4">FAQ</h2>

        <div className="accordion" id="faqAccordion">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                What do you do?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse show">
              <div className="accordion-body">
                We create simple and user-friendly web applications.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                Why choose us?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse">
              <div className="accordion-body">
                We focus on clean design, performance, and ease of use.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                Is your service beginner-friendly?
              </button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse">
              <div className="accordion-body">
                Yes, our products are designed to be simple and easy for everyone.
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;