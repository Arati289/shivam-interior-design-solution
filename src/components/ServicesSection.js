import bedroom from "../assets/images/bedroom.jpg";

function ServicesSection() {

  const services = [
    {
      title: "Modular Kitchen",
      description:
        "Modern and functional kitchens designed according to your lifestyle.",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    },

    {
      title: "Living Room",
      description:
        "Elegant living spaces that combine comfort, style and functionality.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },

    {
      title: "Bedroom Design",
      description:
        "Beautiful and peaceful bedrooms designed for comfort and relaxation.",
      image: bedroom,
    },

    {
      title: "Wardrobe Design",
      description:
        "Smart storage solutions with stylish and modern wardrobe designs.",
      image:
        "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
    },

    {
      title: "Office Interior",
      description:
        "Professional workspaces designed for productivity and comfort.",
      image:
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
    },

    {
      title: "False Ceiling",
      description:
        "Stylish ceiling designs that enhance the beauty of your interiors.",
      image:
        "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg",
    },
  ];

  return (
    <section className="services-section py-5">

      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">

          <p className="text-uppercase fw-bold text-warning">
            What We Do
          </p>

          <h2 className="fw-bold">
            Our Interior Design Services
          </h2>

          <p className="text-muted">
            Complete interior solutions designed specially
            for your dream space.
          </p>

        </div>

        {/* Cards */}

        <div className="row">

          {services.map((service, index) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={index}
            >

              <div className="service-card">

                <div className="service-image">

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                </div>

                <div className="service-content">

                  <h4>
                    {service.title}
                  </h4>

                  <p>
                    {service.description}
                  </p>

                  <button className="btn btn-outline-dark">
                    View Details
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

export default ServicesSection;