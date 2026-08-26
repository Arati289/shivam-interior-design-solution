import React from "react";

function ProcessSection() {
  const process = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We understand your requirements, lifestyle, preferences, space and budget before starting the project.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Our designers create thoughtful concepts, layouts, colours and material selections tailored to your space.",
    },
    {
      number: "03",
      title: "Execution",
      description:
        "Our team brings the approved design to life with quality materials, skilled workmanship and careful coordination.",
    },
    {
      number: "04",
      title: "Handover",
      description:
        "After completing the project, we make sure every detail is finished properly and your space is ready to enjoy.",
    },
  ];

  return (
    <section className="process-section">

      <div className="container">

        {/* HEADER */}

        <div className="process-header">

          <span className="section-label">
            HOW WE WORK
          </span>

          <h2>
            From Vision to
            <span> Reality</span>
          </h2>

          <p>
            We follow a simple and transparent process to turn
            your ideas into a beautiful, functional and
            personalized interior.
          </p>

        </div>


        {/* PROCESS */}

        <div className="process-grid">

          {process.map((item, index) => (

            <div
              className="process-card"
              key={item.number}
            >

              <div className="process-top">

                <span className="process-number">
                  {item.number}
                </span>

                {index !== process.length - 1 && (
                  <span className="process-line"></span>
                )}

              </div>


              <div className="process-icon">
                {index === 0 && "💬"}
                {index === 1 && "✏️"}
                {index === 2 && "🏗️"}
                {index === 3 && "✓"}
              </div>


              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProcessSection;