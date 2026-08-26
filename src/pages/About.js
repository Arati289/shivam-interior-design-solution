import React from "react";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-hero-overlay">
          <div className="container">
            <div className="about-hero-content">
              <span>ABOUT SHIVAM INTERIORS</span>
              <h1>
                Creating Spaces
                <br />
                <em>That Feel Like Home.</em>
              </h1>
              <p>
                We design beautiful, functional and timeless interiors
                that reflect the people who live and work in them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">

            <div className="about-intro-image">
              <img
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
                alt="Interior design"
              />
            </div>

            <div className="about-intro-content">
              <span className="about-label">WHO WE ARE</span>

              <h2>
                Design With
                <em> Purpose.</em>
              </h2>

              <p>
                Shivam Interior Design Solution is focused on creating
                interiors that combine elegance, comfort and functionality.
              </p>

              <p>
                From individual rooms to complete homes and workspaces,
                we carefully understand every client's requirements and
                turn their ideas into thoughtfully designed spaces.
              </p>

              <div className="about-stats">
                <div>
                  <strong>50+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>100%</strong>
                  <span>Dedication</span>
                </div>

                <div>
                  <strong>5★</strong>
                  <span>Client Focus</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">

          <div className="about-section-heading">
            <span>OUR VALUES</span>
            <h2>What We Believe In</h2>
            <p>
              Every project is approached with creativity,
              attention to detail and a commitment to quality.
            </p>
          </div>

          <div className="about-values-grid">

            <div className="about-value-card">
              <span>01</span>
              <h3>Creativity</h3>
              <p>
                Fresh ideas and thoughtful design solutions for every space.
              </p>
            </div>

            <div className="about-value-card">
              <span>02</span>
              <h3>Quality</h3>
              <p>
                We focus on quality materials, finishes and workmanship.
              </p>
            </div>

            <div className="about-value-card">
              <span>03</span>
              <h3>Trust</h3>
              <p>
                Clear communication and honest guidance throughout the project.
              </p>
            </div>

            <div className="about-value-card">
              <span>04</span>
              <h3>Functionality</h3>
              <p>
                Beautiful spaces that are practical and comfortable every day.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default About;