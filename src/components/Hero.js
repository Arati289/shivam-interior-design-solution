import { Link } from "react-router-dom";

function Hero() {
  const whatsappNumber = "919767462242";
  const phoneNumber = "+919767462242";

  return (
    <section className="hero-section">

      <div className="hero-overlay">

        <div className="container">

          <div className="hero-content text-white">

            <span className="hero-small-title">
              SHIVAM INTERIOR DESIGN SOLUTION
            </span>

            <h1>
              Beautiful Spaces.
              <br />
              Designed For You.
            </h1>

            <p>
              We create elegant, functional and personalized
              interiors that turn your house into a space
              you truly love.
            </p>

            <div className="hero-buttons">

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="hero-primary-btn"
              >
                WhatsApp Us
              </a>

              <Link
                to="/gallery"
                className="hero-secondary-btn"
              >
                View Our Work
              </Link>

              <a
                href={`tel:${phoneNumber}`}
                className="hero-call-btn"
              >
                Call Now
              </a>

            </div>

            <div className="hero-trust">

              <span>✓ Personalized Designs</span>

              <span>✓ Quality Materials</span>

              <span>✓ Professional Service</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;