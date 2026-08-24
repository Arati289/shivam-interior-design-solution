import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Luxury Living Room",
      category: "Living Room",
      location: "Pune",
      description:
        "A warm and elegant living room designed with modern furniture, soft lighting and premium finishes.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      title: "Modern Modular Kitchen",
      category: "Kitchen",
      location: "Kolhapur",
      description:
        "A practical modular kitchen with smart storage, contemporary finishes and efficient space planning.",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    },
    {
      title: "Luxury Master Bedroom",
      category: "Bedroom",
      location: "Pune",
      description:
        "A calm and luxurious bedroom designed for comfort with elegant colours and modern detailing.",
      image:
        "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
    },
    {
      title: "Elegant Dining Space",
      category: "Dining",
      location: "Mumbai",
      description:
        "A sophisticated dining area combining functionality, comfort and contemporary aesthetics.",
      image:
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    },
    {
      title: "Modern Office Interior",
      category: "Office",
      location: "Pune",
      description:
        "A productive workspace designed with clean lines, comfortable furniture and smart planning.",
      image:
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
    },
    {
      title: "Premium Wardrobe Design",
      category: "Wardrobe",
      location: "Kolhapur",
      description:
        "A customized wardrobe solution offering organised storage, premium finishes and a clean modern look.",
      image:
        "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg",
    },
  ];

  const categories = [
    "All",
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Dining",
    "Office",
    "Wardrobe",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <div className="portfolio-page">

      {/* ================= HERO ================= */}

      <section className="portfolio-hero">

        <div className="portfolio-hero-overlay">

          <div className="container text-center text-white">

            <span className="portfolio-label">
              OUR WORK
            </span>

            <h1>
              Spaces We Have
              <br />
              Transformed
            </h1>

            <p>
              Explore our interior design projects
              and discover ideas for your dream space.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROJECT SECTION ================= */}

      <section className="portfolio-section">

        <div className="container">

          <div className="portfolio-heading">

            <span className="section-label">
              FEATURED PROJECTS
            </span>

            <h2>
              Our Latest Work
            </h2>

            <p>
              Every project is designed with attention to
              detail, functionality and your personal style.
            </p>

          </div>


          {/* FILTERS */}

          <div className="portfolio-filters">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category
                    ? "portfolio-filter active"
                    : "portfolio-filter"
                }
                onClick={() =>
                  setSelectedCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>


          {/* PROJECT GRID */}

          <div className="row g-4">

            {filteredProjects.map((project, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="portfolio-card">

                  {/* IMAGE */}

                  <div className="portfolio-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="portfolio-category">
                      {project.category}
                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="portfolio-content">

                    <div className="portfolio-location">
                      📍 {project.location}
                    </div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <button
                      type="button"
                      className="portfolio-view-btn"
                      onClick={() =>
                        navigate(
                          "/project-details",
                          {
                            state: {
                              project: project,
                            },
                          }
                        )
                      }
                    >
                      View Project
                      <span>→</span>
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* BOTTOM CTA */}

          <div className="portfolio-cta">

            <div>

              <span>
                HAVE A PROJECT IN MIND?
              </span>

              <h3>
                Let's create your dream interior.
              </h3>

            </div>

            <a href="/contact">
              Get Free Consultation →
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Portfolio;