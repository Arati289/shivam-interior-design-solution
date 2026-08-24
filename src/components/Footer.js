import { Link } from "react-router-dom";

function Footer() {
  const whatsappNumber = "917058253252";
  const phoneNumber = "+917058253252";
  const emailAddress = "info@shivaminteriors.com";

  return (
    <footer className="site-footer">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">

        <div className="container">

          <div className="row gy-5">


            {/* ================= COMPANY ================= */}

            <div className="col-lg-4 col-md-6">

              <div className="footer-company">

                <div className="footer-logo-mark">
                  SD
                </div>

                <h2>
                  Shivam Interior
                  <br />
                  Design Solution
                </h2>

                <p>
                  Creating elegant, functional and personalized
                  interiors that reflect your lifestyle and
                  transform the way you experience your space.
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-whatsapp"
                >
                  Chat on WhatsApp
                  <span>→</span>
                </a>

              </div>

            </div>


            {/* ================= QUICK LINKS ================= */}

            <div className="col-lg-2 col-md-6">

              <div className="footer-column">

                <h4>
                  QUICK LINKS
                </h4>

                <div className="footer-links">

                  <Link to="/">
                    Home
                  </Link>

                  <Link to="/about">
                    About Us
                  </Link>

                  <Link to="/services">
                    Services
                  </Link>

                  <Link to="/portfolio">
                    Portfolio
                  </Link>

                  <Link to="/gallery">
                    Gallery
                  </Link>

                  <Link to="/contact">
                    Contact
                  </Link>

                </div>

              </div>

            </div>


            {/* ================= SERVICES ================= */}

            <div className="col-lg-3 col-md-6">

              <div className="footer-column">

                <h4>
                  OUR SERVICES
                </h4>

                <div className="footer-links">

                  <Link to="/services">
                    Modular Kitchen
                  </Link>

                  <Link to="/services">
                    Living Room
                  </Link>

                  <Link to="/services">
                    Bedroom Interior
                  </Link>

                  <Link to="/services">
                    Wardrobe Design
                  </Link>

                  <Link to="/services">
                    Office Interior
                  </Link>

                  <Link to="/services">
                    False Ceiling
                  </Link>

                </div>

              </div>

            </div>


            {/* ================= CONTACT ================= */}

            <div className="col-lg-3 col-md-6">

              <div className="footer-column">

                <h4>
                  GET IN TOUCH
                </h4>


                {/* PHONE */}

                <a
                  href={`tel:${phoneNumber}`}
                  className="footer-contact-item"
                >

                  <span className="footer-contact-icon">
                    ☎
                  </span>

                  <span>
                    <small>
                      CALL US
                    </small>

                    +91 70582 53252
                  </span>

                </a>


                {/* EMAIL */}

                <a
                  href={`mailto:${emailAddress}`}
                  className="footer-contact-item"
                >

                  <span className="footer-contact-icon">
                    ✉
                  </span>

                  <span>
                    <small>
                      EMAIL
                    </small>

                    {emailAddress}
                  </span>

                </a>


                {/* LOCATION */}

                <div className="footer-contact-item">

                  <span className="footer-contact-icon">
                    ◎
                  </span>

                  <span>
                    <small>
                      LOCATION
                    </small>

                    Pune, Maharashtra, India
                  </span>

                </div>


                {/* HOURS */}

                <div className="footer-contact-item">

                  <span className="footer-contact-icon">
                    ◷
                  </span>

                  <span>
                    <small>
                      WORKING HOURS
                    </small>

                    Monday - Saturday
                    <br />
                    10:00 AM - 7:00 PM
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div className="footer-bottom">

        <div className="container">

          <div className="footer-bottom-inner">

            <p>
              © {new Date().getFullYear()}
              {" "}
              Shivam Interior Design Solution.
              All Rights Reserved.
            </p>

            <div className="footer-bottom-links">

              <Link to="/contact">
                Get Free Consultation
              </Link>

              <span>
                •
              </span>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;