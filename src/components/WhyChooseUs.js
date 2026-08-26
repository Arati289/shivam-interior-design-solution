import React from "react";

function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Thoughtful Design",
      description:
        "Every space is carefully planned to match your lifestyle, taste and everyday needs.",
    },
    {
      number: "02",
      title: "Quality Materials",
      description:
        "We focus on reliable materials, elegant finishes and quality workmanship for lasting results.",
    },
    {
      number: "03",
      title: "Transparent Pricing",
      description:
        "Clear communication and transparent pricing help you plan your interior with confidence.",
    },
    {
      number: "04",
      title: "Timely Delivery",
      description:
        "We follow a structured process to keep your project organised and moving towards completion.",
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="container">

        <div className="why-choose-header">
          <span className="section-label">
            WHY CHOOSE US
          </span>

          <h2>
            Designed For
            <span> The Way You Live</span>
          </h2>

          <p>
            We combine thoughtful design, quality execution and
            personal attention to create interiors that feel
            beautiful, comfortable and truly yours.
          </p>
        </div>

        <div className="why-choose-grid">

          {reasons.map((reason) => (
            <div
              className="why-choose-card"
              key={reason.number}
            >

              <div className="why-choose-number">
                {reason.number}
              </div>

              <div className="why-choose-content">

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;