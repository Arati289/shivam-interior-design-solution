import React from "react";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="container">

        <div className="footer-main">

          {/* COMPANY */}
          <div className="footer-column footer-company">

            <h2>Shivam Interior<br />Design Solution</h2>

            <p>
              Creating elegant, functional and personalized
              interiors that reflect your lifestyle and transform
              the way you experience your space.
            </p>

            <a
              href="https://wa.me/919767462242"
              target="_blank"
              rel="noreferrer"
              className="footer-whatsapp"
            >
              Chat on WhatsApp →
            </a>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h3>QUICK LINKS</h3>

            <ul className="footer-links">

              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About Us</a>
              </li>

              <li>
                <a href="/services">Services</a>
              </li>

              <li>
                <a href="/portfolio">Portfolio</a>
              </li>

              <li>
                <a href="/gallery">Gallery</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>

            </ul>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <h3>OUR SERVICES</h3>

            <ul className="footer-links">

              <li>
                <a href="/services">Modular Kitchen</a>
              </li>

              <li>
                <a href="/services">Living Room</a>
              </li>

              <li>
                <a href="/services">Bedroom Design</a>
              </li>

              <li>
                <a href="/services">Wardrobe</a>
              </li>

              <li>
                <a href="/services">Office Interior</a>
              </li>

              <li>
                <a href="/services">False Ceiling</a>
              </li>

            </ul>

          </div>


          {/* CONTACT */}
          <div className="footer-column">

            <h3>GET IN TOUCH</h3>

            <div className="footer-contact">

              <a href="tel:+919767462242">
                ☎ &nbsp; +91 9767462242
              </a>

              <a href="mailto:info@shivaminteriors.com">
                ✉ &nbsp; info@shivaminteriors.com
              </a>

              <p>
                ⦿ &nbsp; Pune, Maharashtra, India
              </p>

              <p>
                ◷ &nbsp; Monday - Saturday
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00 AM - 7:00 PM
              </p>

            </div>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © 2026 Shivam Interior Design Solution.
            All Rights Reserved.
          </p>

          <p>
            Designed with care for beautiful spaces.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;