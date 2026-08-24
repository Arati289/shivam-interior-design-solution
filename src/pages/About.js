function About() {
  return (
    <div className="about-page">

      {/* ================= HERO ================= */}

      <section className="about-hero">

        <div className="about-overlay">

          <div className="container text-center text-white">

            <p className="about-label">
              ABOUT US
            </p>

            <h1>
              Designing Spaces,
              <br />
              Creating Experiences
            </h1>

            <p>
              We transform houses into beautiful,
              comfortable and meaningful homes.
            </p>

          </div>

        </div>

      </section>


      {/* ================= STORY ================= */}

      <section className="about-story py-5">

        <div className="container">

          <div className="row align-items-center">

            {/* Image */}

            <div className="col-lg-6 mb-4">

              <div className="about-image">

                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                  alt="Interior Design"
                />

              </div>

            </div>


            {/* Content */}

            <div className="col-lg-6">

              <span className="section-label">
                WHO WE ARE
              </span>

              <h2 className="about-title">
                Turning Your Vision
                Into Beautiful Spaces
              </h2>

              <p>
                Shivam Interior Design Solution is an
                interior design company focused on creating
                beautiful, functional and personalized spaces.
              </p>

              <p>
                From modern homes to elegant offices, we
                carefully understand our client's requirements
                and create designs that match their lifestyle,
                personality and budget.
              </p>

              <p>
                Our goal is simple — to make every space
                beautiful, comfortable and practical.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MISSION / VISION ================= */}

      <section className="mission-section py-5">

        <div className="container">

          <div className="row">

            {/* Mission */}

            <div className="col-md-6 mb-4">

              <div className="mission-card">

                <span className="mission-number">
                  01
                </span>

                <h3>
                  Our Mission
                </h3>

                <p>
                  To create thoughtful interior spaces that
                  combine aesthetics, comfort and functionality
                  while delivering an excellent customer
                  experience.
                </p>

              </div>

            </div>


            {/* Vision */}

            <div className="col-md-6 mb-4">

              <div className="mission-card">

                <span className="mission-number">
                  02
                </span>

                <h3>
                  Our Vision
                </h3>

                <p>
                  To become a trusted interior design brand
                  known for creativity, quality, transparency
                  and customer satisfaction.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="about-stats py-5">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-3 col-6 mb-4">

              <h2>
                100+
              </h2>

              <p>
                Projects
              </p>

            </div>


            <div className="col-md-3 col-6 mb-4">

              <h2>
                50+
              </h2>

              <p>
                Happy Clients
              </p>

            </div>


            <div className="col-md-3 col-6 mb-4">

              <h2>
                5+
              </h2>

              <p>
                Years Experience
              </p>

            </div>


            <div className="col-md-3 col-6 mb-4">

              <h2>
                100%
              </h2>

              <p>
                Commitment
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-section py-5">

        <div className="container">

          <div className="text-center mb-5">

            <span className="section-label">
              WHY CHOOSE US
            </span>

            <h2 className="about-title">
              Why Choose Shivam Interior?
            </h2>

          </div>


          <div className="row">

            <div className="col-lg-4 col-md-6 mb-4">

              <div className="why-card">

                <div className="why-icon">
                  ✦
                </div>

                <h4>
                  Personalized Design
                </h4>

                <p>
                  Every project is designed according to
                  your lifestyle, requirements and preferences.
                </p>

              </div>

            </div>


            <div className="col-lg-4 col-md-6 mb-4">

              <div className="why-card">

                <div className="why-icon">
                  ◆
                </div>

                <h4>
                  Quality Materials
                </h4>

                <p>
                  We focus on quality materials and finishes
                  to create interiors that last.
                </p>

              </div>

            </div>


            <div className="col-lg-4 col-md-6 mb-4">

              <div className="why-card">

                <div className="why-icon">
                  ✓
                </div>

                <h4>
                  Professional Service
                </h4>

                <p>
                  From initial consultation to final delivery,
                  we focus on a smooth customer experience.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


    </div>
  );
}

export default About;