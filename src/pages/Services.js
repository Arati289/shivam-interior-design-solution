import { Link } from "react-router-dom";

function Services() {

  const services = [
    {
      title: "Modular Kitchen",
      description:
        "Create a modern and functional kitchen designed around your lifestyle. We focus on smart storage, elegant finishes and efficient space utilization.",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    },

    {
      title: "Living Room Interior",
      description:
        "Transform your living room into a warm and elegant space with carefully selected furniture, lighting, colours and décor.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },

    {
      title: "Bedroom Interior",
      description:
        "Design a peaceful and comfortable bedroom that reflects your personality with beautiful colours, furniture and lighting.",
      image:
        "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
    },

    {
      title: "Wardrobe Design",
      description:
        "Maximize your storage with customized wardrobes designed to provide functionality, organization and a stylish appearance.",
      image:
        "https://images.pexels.com/photos/6585750/pexels-photo-6585750.jpeg",
    },

    {
      title: "Office Interior",
      description:
        "Create a productive and professional workplace with modern furniture, smart layouts and a comfortable working environment.",
      image:
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
    },

    {
      title: "False Ceiling",
      description:
        "Enhance your interiors with stylish false ceiling designs, modern lighting and elegant finishes.",
      image:
        "https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg",
    },
  ];

  return (
    <div className="services-page">

      {/* ================= HERO ================= */}

      <section className="services-hero">

        <div className="services-hero-overlay">

          <div className="container text-center text-white">

            <span className="services-label">
              WHAT WE DO
            </span>

            <h1>
              Interior Design Services
            </h1>

            <p>
              Beautiful spaces designed around
              your lifestyle.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="services-list py-5">

        <div className="container">

          <div className="services-intro text-center">

            <span className="section-label">
              OUR SERVICES
            </span>

            <h2>
              Complete Interior Solutions
            </h2>

            <p>
              From concept to completion, we create
              beautiful and functional interiors tailored
              to your needs.
            </p>

          </div>


          <div className="row mt-5">

            {services.map(
              (service, index) => (

                <div
                  className="col-lg-6 mb-5"
                  key={index}
                >

                  <div className="detailed-service-card">

                    {/* IMAGE */}

                    <div className="detailed-service-image">

                      <img
                        src={service.image}
                        alt={service.title}
                      />

                    </div>


                    {/* CONTENT */}

                    <div className="detailed-service-content">

                      <span className="service-number">
                        0{index + 1}
                      </span>

                      <h3>
                        {service.title}
                      </h3>

                      <p>
                        {service.description}
                      </p>

                      <Link
                        to="/contact"
                        className="service-enquiry-btn"
                      >
                        Get Free Consultation
                        <span> →</span>
                      </Link>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="services-cta">

        <div className="container text-center">

          <span className="section-label">
            LET'S CREATE TOGETHER
          </span>

          <h2>
            Ready To Transform
            Your Space?
          </h2>

          <p>
            Tell us about your dream interior and
            our design team will help bring it to life.
          </p>

          <Link
            to="/contact"
            className="btn btn-warning btn-lg mt-3"
          >
            Start Your Project
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Services;