import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectsSection() {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  const projects = [
    {
      title: "Luxury Living Room",
      category: "Living Room",
      location: "Pune",
      description:
        "A sophisticated living space designed with elegant furniture, warm lighting and modern finishes.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },

    {
      title: "Modern Modular Kitchen",
      category: "Kitchen",
      location: "Kolhapur",
      description:
        "A contemporary modular kitchen designed with smart storage and beautiful finishes.",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    },

    {
      title: "Luxury Master Bedroom",
      category: "Bedroom",
      location: "Pune",
      description:
        "A calming bedroom interior combining comfort, elegant colours and modern design.",
      image:
        "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
    },

    {
      title: "Elegant Dining Area",
      category: "Dining",
      location: "Mumbai",
      description:
        "An elegant dining space designed for comfortable family gatherings and memorable moments.",
      image:
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    },

    {
      title: "Modern Office Interior",
      category: "Office",
      location: "Pune",
      description:
        "A clean and productive office environment designed with comfort and functionality in mind.",
      image:
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
    },

    {
      title: "Premium Wardrobe Design",
      category: "Wardrobe",
      location: "Kolhapur",
      description:
        "A stylish wardrobe solution offering smart organization, premium finishes and maximum storage.",
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
          (project) =>
            project.category === selectedCategory
        );

  return (
    <section className="projects-section">

      <div className="container">

        {/* SECTION HEADER */}

        <div className="projects-header">

          <span className="section-label">
            OUR PORTFOLIO
          </span>

          <h2>
            Spaces We Have
            <span> Transformed</span>
          </h2>

          <p>
            Explore our thoughtfully designed interiors,
            created to bring beauty, comfort and
            functionality together.
          </p>

        </div>


        {/* FILTER */}

        <div className="project-filters">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              className={
                selectedCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
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

        <div className="row">

          {filteredProjects.map(
            (project, index) => (

              <div
                className="col-lg-4 col-md-6 mb-5"
                key={index}
              >

                <div className="premium-project-card">

                  {/* IMAGE */}

                  <div className="premium-project-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="image-category">
                      {project.category}
                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="premium-project-content">

                    <div className="project-location">
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
                      className="view-project-btn"
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
                      <span> →</span>
                    </button>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default ProjectsSection;