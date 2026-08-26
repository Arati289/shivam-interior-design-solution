import React from "react";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "Living Room",
      location: "Pune, Maharashtra",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },

    {
      id: 2,
      title: "Luxury Bedroom",
      category: "Bedroom",
      location: "Pune, Maharashtra",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    },

    {
      id: 3,
      title: "Contemporary Kitchen",
      category: "Kitchen",
      location: "Pune, Maharashtra",
      image:
        "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg",
    },

    {
      id: 4,
      title: "Elegant Home Interior",
      category: "Full Home",
      location: "Pune, Maharashtra",
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    },

    {
      id: 5,
      title: "Modern Family Lounge",
      category: "Living Room",
      location: "Pune, Maharashtra",
      image:
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
    },

    {
      id: 6,
      title: "Premium Office",
      category: "Office",
      location: "Pune, Maharashtra",
      image:
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
    },
  ];

  return (
    <div className="portfolio-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="portfolio-hero">

        <div className="portfolio-hero-overlay">

          <div className="container">

            <div className="portfolio-hero-content">

              <span>
                OUR PORTFOLIO
              </span>

              <h1>
                Spaces We've
                <br />
                <em>Transformed.</em>
              </h1>

              <p>
                A collection of interiors created with purpose,
                personality and timeless design.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          PROJECTS
      ================================================= */}

      <section className="portfolio-section">

        <div className="container">

          <div className="portfolio-heading">

            <span>
              SELECTED PROJECTS
            </span>

            <h2>
              Our Recent
              <em> Work.</em>
            </h2>

            <p>
              Discover some of the spaces we have designed
              for our clients.
            </p>

          </div>


          <div className="portfolio-grid">

            {projects.map((project) => (

              <div
                className="portfolio-card"
                key={project.id}
              >

                {/* IMAGE */}

                <div className="portfolio-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <span className="portfolio-category">
                    {project.category}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="portfolio-content">

                  <div className="portfolio-location">
                    {project.location}
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/project/${project.id}`)
                    }
                  >
                    View Project
                    <span>→</span>
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="portfolio-cta">

        <div className="container">

          <span>
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's design a space
            <em> you'll love.</em>
          </h2>

          <button
            type="button"
            onClick={() => navigate("/contact")}
          >
            Start Your Project →
          </button>

        </div>

      </section>

    </div>
  );
}

export default Portfolio;