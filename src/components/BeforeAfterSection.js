import React from "react";

function BeforeAfterSection() {
  const projects = [
    {
      title: "Modern Living Room",
      category: "Living Room",
      before:
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
      after:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      description:
        "A simple space transformed into a warm, elegant and comfortable living area.",
    },
    {
      title: "Contemporary Kitchen",
      category: "Kitchen",
      before:
        "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
      after:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      description:
        "A functional kitchen redesigned with smart storage and a modern premium finish.",
    },
  ];

  return (
    <section className="before-after-section">
      <div className="container">

        {/* HEADER */}

        <div className="before-after-header">

          <span className="section-label">
            TRANSFORMATION
          </span>

          <h2>
            From Simple
            <span> To Stunning</span>
          </h2>

          <p>
            See how thoughtful planning and interior design can
            completely transform an everyday space.
          </p>

        </div>


        {/* PROJECTS */}

        <div className="before-after-list">

          {projects.map((project, index) => (

            <div
              className="before-after-project"
              key={index}
            >

              {/* PROJECT TITLE */}

              <div className="before-after-project-heading">

                <div>
                  <span>
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>
                </div>

                <p>
                  {project.description}
                </p>

              </div>


              {/* IMAGES */}

              <div className="before-after-images">

                {/* BEFORE */}

                <div className="before-after-image">

                  <img
                    src={project.before}
                    alt={`${project.title} before`}
                  />

                  <div className="before-after-label">
                    BEFORE
                  </div>

                </div>


                {/* AFTER */}

                <div className="before-after-image">

                  <img
                    src={project.after}
                    alt={`${project.title} after`}
                  />

                  <div className="before-after-label after">
                    AFTER
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default BeforeAfterSection;