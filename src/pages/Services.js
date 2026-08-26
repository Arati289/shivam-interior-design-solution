import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: "kitchen",
      title: "Modular Kitchen",
      description:
        "Modern and functional kitchens designed according to your lifestyle.",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    },
    {
      id: "living-room",
      title: "Living Room",
      description:
        "Elegant living spaces that combine comfort, style and functionality.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      id: "bedroom",
      title: "Bedroom Design",
      description:
        "Beautiful and peaceful bedrooms designed for comfort and relaxation.",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    },
    {
      id: "wardrobe",
      title: "Wardrobe Design",
      description:
        "Smart storage solutions with stylish and modern wardrobe designs.",
      image:
        "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
    },
    {
      id: "office",
      title: "Office Interior",
      description:
        "Professional workspaces designed for productivity and comfort.",
      image:
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
    },
    {
      id: "ceiling",
      title: "False Ceiling",
      description:
        "Stylish ceiling designs that enhance the beauty of your interiors.",
      image:
        "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg",
    },
  ];

  return (
    <div className="services-page">

      {/* HERO */}

      <section className="services-page-hero">

        <div className="services-page-overlay">

          <div className="container">

            <div className="services-page-hero-content">

              <span>WHAT WE DO</span>

              <h1>
                Interior Design
                <br />
                <em>Made For You.</em>
              </h1>

              <p>
                Complete interior solutions designed with creativity,
                functionality and attention to detail.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section className="services-page-section">

        <div className="container">

          <div className="services-page-heading">

            <span>OUR SERVICES</span>

            <h2>
              Spaces Designed
              <em> Beautifully.</em>
            </h2>

            <p>
              Explore our interior design services created to transform
              your home, office or commercial space.
            </p>

          </div>


          <div className="services-page-grid">

            {services.map((service) => (

              <div
                className="services-page-card"
                key={service.id}
              >

                <div className="services-page-image">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                </div>


                <div className="services-page-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(`/service/${service.id}`)
                    }
                  >
                    View Details
                    <span>→</span>
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="services-page-cta">

        <div className="container">

          <div>

            <span>
              READY TO TRANSFORM YOUR SPACE?
            </span>

            <h2>
              Let's create something beautiful together.
            </h2>

          </div>

          <button
            type="button"
            onClick={() => navigate("/contact")}
          >
            Get Free Consultation →
          </button>

        </div>

      </section>

    </div>
  );
}

export default Services;