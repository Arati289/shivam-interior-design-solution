import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = {
    1: {
      title: "Modern Living Room",
      location: "Pune, Maharashtra",
      category: "Living Room",
      year: "2026",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      description:
        "A warm and elegant living room designed with modern furniture, soft lighting and carefully selected finishes.",
      details:
        "The space focuses on simplicity, functionality and timeless elegance. Every element was selected to create a balanced interior while maintaining enough open space for comfortable movement.",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
        "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
      ],
    },

    2: {
      title: "Luxury Bedroom",
      location: "Pune, Maharashtra",
      category: "Bedroom",
      year: "2026",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      description:
        "A luxurious bedroom designed around comfort, relaxation and elegant detailing.",
      details:
        "The bedroom uses soft colours, modern furniture and warm lighting to create a peaceful and premium atmosphere.",
      images: [
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
      ],
    },

    3: {
      title: "Contemporary Kitchen",
      location: "Pune, Maharashtra",
      category: "Kitchen",
      year: "2026",
      image:
        "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg",
      description:
        "A contemporary kitchen designed with practical storage, clean lines and a premium modern finish.",
      details:
        "The layout focuses on functionality and efficient use of space while maintaining a clean and sophisticated appearance.",
      images: [
        "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg",
        "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      ],
    },

    4: {
      title: "Elegant Home Interior",
      location: "Pune, Maharashtra",
      category: "Full Home",
      year: "2026",
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      description:
        "A complete home interior planned to bring together elegance, comfort and functionality.",
      details:
        "The project combines coordinated furniture, lighting, colours and finishes to create a consistent design language throughout the home.",
      images: [
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
      ],
    },

    5: {
      title: "Modern Family Lounge",
      location: "Pune, Maharashtra",
      category: "Living Room",
      year: "2026",
      image:
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
      description:
        "A comfortable and stylish family lounge designed for everyday living, relaxation and quality time together.",
      details:
        "This family lounge combines comfortable seating, warm lighting and modern decor to create a welcoming environment for the entire family.",
      images: [
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      ],
    },

    6: {
      title: "Premium Office",
      location: "Pune, Maharashtra",
      category: "Office",
      year: "2026",
      image:
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
      description:
        "A professional office interior designed to improve productivity, comfort and the overall working environment.",
      details:
        "The office design combines functional workstations, comfortable furniture, modern lighting and a professional aesthetic to create an efficient workspace.",
      images: [
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      ],
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="container text-center py-5">

        <h2>
          Project Not Found
        </h2>

        <button
          type="button"
          className="btn btn-dark mt-3"
          onClick={() => navigate("/portfolio")}
        >
          Back to Portfolio
        </button>

      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Shivam Interior Design Solution,

I am interested in the "${project.title}" project.

Project Location: ${project.location}
Category: ${project.category}

I would like to know more details about this project.

Thank you.`
  );

  return (
    <div className="project-details-page">

      {/* HERO */}

      <section className="project-details-hero">

        <div className="container">

          <button
            type="button"
            className="project-back-btn"
            onClick={() => navigate("/portfolio")}
          >
            ← Back to Portfolio
          </button>

          <div className="project-details-hero-content">

            <span>
              {project.category}
            </span>

            <h1>
              {project.title}
            </h1>

            <p>
              {project.location}
            </p>

          </div>

        </div>

      </section>


      {/* MAIN DETAILS */}

      <section className="project-details-content">

        <div className="container">

          <div className="row g-5 align-items-start">

            {/* MAIN IMAGE */}

            <div className="col-lg-7">

              <div className="project-details-main-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

            </div>


            {/* INFO */}

            <div className="col-lg-5">

              <div className="project-info-card">

                <span className="section-label">
                  PROJECT DETAILS
                </span>

                <h2>
                  {project.title}
                </h2>


                <div className="project-meta">

                  <div>
                    <small>
                      LOCATION
                    </small>

                    <strong>
                      {project.location}
                    </strong>
                  </div>


                  <div>
                    <small>
                      CATEGORY
                    </small>

                    <strong>
                      {project.category}
                    </strong>
                  </div>


                  <div>
                    <small>
                      YEAR
                    </small>

                    <strong>
                      {project.year}
                    </strong>
                  </div>

                </div>


                <p>
                  {project.description}
                </p>


                <a
                  href={`https://wa.me/919767462242?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="project-whatsapp-btn"
                >
                  Enquire About This Project →
                </a>

              </div>

            </div>

          </div>


          {/* PROJECT STORY */}

          <div className="project-story">

            <span className="section-label">
              THE DESIGN
            </span>

            <h2>
              Designed With
              <span> Purpose</span>
            </h2>

            <p>
              {project.details}
            </p>

          </div>


          {/* PROJECT GALLERY */}

          <div className="project-gallery">

            <div className="project-gallery-heading">

              <span className="section-label">
                PROJECT GALLERY
              </span>

              <h2>
                Explore The Space
              </h2>

            </div>


            <div className="row g-4">

              {project.images.map((image, index) => (

                <div
                  className="col-lg-4 col-md-6"
                  key={index}
                >

                  <div className="project-gallery-image">

                    <img
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* CTA */}

          <div className="project-details-cta">

            <div>

              <span>
                LIKE THIS DESIGN?
              </span>

              <h3>
                Let's create something beautiful for you.
              </h3>

            </div>


            <div className="project-details-cta-buttons">

              <a
                href={`https://wa.me/919767462242?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>

              <button
                type="button"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ProjectDetails;