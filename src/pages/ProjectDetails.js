import { Link, useLocation } from "react-router-dom";

function ProjectDetails() {

  const location = useLocation();

  const project = location.state?.project;

  if (!project) {
    return (
      <div className="container py-5 text-center">

        <h2>
          Project Not Found
        </h2>

        <Link
          to="/"
          className="btn btn-dark mt-3"
        >
          Back To Home
        </Link>

      </div>
    );
  }

  return (
    <section className="project-details py-5">

      <div className="container">

        <div className="row align-items-center">

          {/* Image */}

          <div className="col-lg-7 mb-4">

            <div className="project-details-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

          </div>


          {/* Details */}

          <div className="col-lg-5">

            <span className="project-category">
              {project.category}
            </span>

            <h1 className="fw-bold mt-2">
              {project.title}
            </h1>

            <p className="mt-3">
              📍 {project.location}
            </p>

            <p className="text-muted mt-4">
              {project.description}
            </p>


            <h5 className="mt-4">
              Project Features
            </h5>

            <ul className="mt-3">

              <li>Modern Interior Design</li>

              <li>Premium Materials</li>

              <li>Customized Design</li>

              <li>Smart Space Utilization</li>

            </ul>


            <Link
              to="/contact"
              className="btn btn-dark btn-lg mt-4"
            >
              Get Free Quote
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProjectDetails;