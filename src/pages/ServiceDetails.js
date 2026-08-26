import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = {
    kitchen: {
      title: "Modular Kitchen",
      category: "KITCHEN DESIGN",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      description:
        "Modern and functional kitchens designed according to your lifestyle.",
      details:
        "Our modular kitchen designs combine smart storage, modern aesthetics and everyday functionality. Every element is planned according to your available space and requirements.",
      points: [
        "Smart storage solutions",
        "Modern cabinet designs",
        "Premium finishes",
        "Functional layouts",
      ],
    },

    "living-room": {
      title: "Living Room",
      category: "LIVING ROOM DESIGN",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      description:
        "Elegant living spaces that combine comfort, style and functionality.",
      details:
        "We design living rooms that feel comfortable, elegant and welcoming. Furniture, lighting, colours and decor are carefully selected to create a beautiful space.",
      points: [
        "Custom furniture planning",
        "Lighting design",
        "Colour consultation",
        "Space optimisation",
      ],
    },

    bedroom: {
      title: "Bedroom Design",
      category: "BEDROOM DESIGN",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      description:
        "Beautiful and peaceful bedrooms designed for comfort and relaxation.",
      details:
        "Our bedroom designs focus on comfort, storage and a peaceful atmosphere. We carefully plan furniture, wardrobes, lighting and colours.",
      points: [
        "Custom wardrobe planning",
        "Furniture layouts",
        "Ambient lighting",
        "Comfort-focused design",
      ],
    },

    wardrobe: {
      title: "Wardrobe Design",
      category: "STORAGE DESIGN",
      image:
        "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
      description:
        "Smart storage solutions with stylish and modern wardrobe designs.",
      details:
        "We create wardrobes that maximise storage while maintaining a clean and stylish appearance. Designs are customised according to your room and storage requirements.",
      points: [
        "Custom storage planning",
        "Sliding wardrobes",
        "Hinged wardrobes",
        "Space-saving solutions",
      ],
    },

    office: {
      title: "Office Interior",
      category: "OFFICE DESIGN",
      image:
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
      description:
        "Professional workspaces designed for productivity and comfort.",
      details:
        "We create professional workspaces that improve productivity and provide a comfortable environment for employees and clients.",
      points: [
        "Workstation planning",
        "Reception area design",
        "Meeting room planning",
        "Professional lighting",
      ],
    },

    ceiling: {
      title: "False Ceiling",
      category: "CEILING DESIGN",
      image:
        "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg",
      description:
        "Stylish ceiling designs that enhance the beauty of your interiors.",
      details:
        "A well-designed false ceiling can completely transform a room. We combine modern ceiling patterns with suitable lighting and finishes.",
      points: [
        "Modern ceiling patterns",
        "LED lighting integration",
        "Decorative designs",
        "Premium finishes",
      ],
    },
  };

  const service = services[id];

  if (!service) {
    return (
      <div className="container text-center py-5">

        <h2>
          Service Not Found
        </h2>

        <p className="text-muted">
          The requested service could not be found.
        </p>

        <button
          type="button"
          className="btn btn-dark mt-3"
          onClick={() => navigate("/services")}
        >
          Back to Services
        </button>

      </div>
    );
  }

  return (
    <div className="service-details-page">

      {/* HERO */}

      <section className="service-details-hero">

        <div className="service-details-overlay">

          <div className="container">

            <button
              type="button"
              className="service-back-btn"
              onClick={() => navigate("/services")}
            >
              ← Back to Services
            </button>

            <div className="service-details-hero-content">

              <span>
                {service.category}
              </span>

              <h1>
                {service.title}
              </h1>

              <p>
                {service.description}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* DETAILS */}

      <section className="service-details-content">

        <div className="container">

          <div className="service-details-grid">

            {/* IMAGE */}

            <div className="service-details-image">

              <img
                src={service.image}
                alt={service.title}
              />

            </div>


            {/* CONTENT */}

            <div className="service-details-info">

              <span className="section-label">
                OUR SERVICE
              </span>

              <h2>
                {service.title}
              </h2>

              <p>
                {service.details}
              </p>


              <div className="service-points">

                {service.points.map((point, index) => (

                  <div
                    className="service-point"
                    key={index}
                  >

                    <span>
                      ✓
                    </span>

                    <strong>
                      {point}
                    </strong>

                  </div>

                ))}

              </div>


              <button
                type="button"
                className="service-consultation-btn"
                onClick={() => navigate("/contact")}
              >
                Get Free Consultation →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="service-details-cta">

        <div className="container">

          <span>
            READY TO START?
          </span>

          <h2>
            Let's create your dream space.
          </h2>

          <button
            type="button"
            onClick={() => navigate("/contact")}
          >
            Contact Us →
          </button>

        </div>

      </section>

    </div>
  );
}

export default ServiceDetails;