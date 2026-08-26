import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectsSection() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Modern Living Room",
      location: "Pune, Maharashtra",
      category: "Living Room",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      description:
        "A warm and elegant living room designed with modern furniture, soft lighting and carefully selected finishes.",
    },

    {
      id: 2,
      title: "Luxury Bedroom",
      location: "Pune, Maharashtra",
      category: "Bedroom",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      description:
        "A sophisticated bedroom combining comfort, functionality and elegant interior details.",
    },

    {
      id: 3,
      title: "Contemporary Kitchen",
      location: "Pune, Maharashtra",
      category: "Kitchen",
      image:
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
      description:
        "A practical contemporary kitchen designed with smart storage, clean lines and a premium finish.",
    },

    {
      id: 4,
      title: "Elegant Home Interior",
      location: "Pune, Maharashtra",
      category: "Full Home",
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      description:
        "A complete home interior designed to balance elegance, comfort and everyday functionality.",
    },
  ];

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="projects-section">

      <div className="container">

        {/* HEADER */}

        <div className="projects-header">

          <span className="section-label">
            OUR PROJECTS
          </span>

          <h2>
            Spaces We've
            <span> Transformed</span>
          </h2>

          <p>
            Explore some of our interior projects created
            with thoughtful design, functionality and
            attention to detail.
          </p>

        </div>


        {/* PROJECTS */}

        <div className="row g-4">

          {projects.map((project) => (

            <div
              className="col-lg-6 col-md-6"
              key={project.id}
            >

              <div className="premium-project-card">

                {/* IMAGE */}

                <div className="premium-project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <span className="image-category">
                    {project.category}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="premium-project-content">

                  <div className="project-location">
                    {project.location}
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
                      handleViewDetails(project.id)
                    }
                  >
                    View Details
                    <span>→</span>
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProjectsSection;