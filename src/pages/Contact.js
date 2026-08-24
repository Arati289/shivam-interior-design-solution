import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const whatsappNumber = "917058253252";
  const emailAddress = "info@shivaminteriors.com";
  const phoneNumber = "+917058253252";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Shivam Interior Design Solution,

I would like to enquire about an interior design project.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Project Details: ${formData.message || "Not provided"}
`;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-page">

      {/* ================= HERO ================= */}

      <section className="new-contact-hero">
        <div className="new-contact-overlay">

          <div className="container">
            <div className="new-contact-hero-content">

              <span className="contact-mini-title">
                SHIVAM INTERIOR DESIGN SOLUTION
              </span>

              <h1>
                Let's Design
                <br />
                Something Beautiful.
              </h1>

              <p>
                Tell us about your dream space and
                let our team help bring your vision to life.
              </p>

              <div className="hero-contact-buttons">

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-whatsapp-btn"
                >
                  WhatsApp Us
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="hero-mail-btn"
                >
                  Send Email
                </a>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================= CONTACT CONTENT ================= */}

      <section className="new-contact-section">

        <div className="container">

          <div className="row g-5 align-items-start">

            {/* ================= LEFT ================= */}

            <div className="col-lg-4">

              <span className="new-section-label">
                CONTACT US
              </span>

              <h2 className="new-contact-title">
                Start Your
                <br />
                Interior Journey
              </h2>

              <p className="new-contact-description">
                Have a home, office or commercial space in mind?
                Tell us what you are looking for and our team
                will help you plan your ideal interior.
              </p>


              <div className="new-contact-details">

                {/* PHONE */}

                <a
                  href={`tel:${phoneNumber}`}
                  className="contact-detail"
                >
                  <div className="contact-detail-icon">
                    ☎
                  </div>

                  <div>
                    <span>CALL US</span>

                    <strong>
                      +91 7058253252
                    </strong>
                  </div>
                </a>


                {/* EMAIL */}

                <a
                  href={`mailto:${emailAddress}`}
                  className="contact-detail"
                >
                  <div className="contact-detail-icon">
                    ✉
                  </div>

                  <div>
                    <span>EMAIL US</span>

                    <strong>
                      {emailAddress}
                    </strong>
                  </div>
                </a>


                {/* WHATSAPP */}

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-detail"
                >
                  <div className="contact-detail-icon whatsapp-icon">
                    ◉
                  </div>

                  <div>
                    <span>WHATSAPP</span>

                    <strong>
                      Chat With Our Team
                    </strong>
                  </div>
                </a>


                {/* LOCATION */}

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    ◎
                  </div>

                  <div>
                    <span>VISIT US</span>

                    <strong>
                      Pune, Maharashtra, India
                    </strong>
                  </div>
                </div>


                {/* WORKING HOURS */}

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    ◷
                  </div>

                  <div>
                    <span>WORKING HOURS</span>

                    <strong>
                      Monday - Saturday
                      <br />
                      10:00 AM - 7:00 PM
                    </strong>
                  </div>
                </div>

              </div>

            </div>


            {/* ================= FORM ================= */}

            <div className="col-lg-8">

              <div className="new-contact-form-card">

                <div className="form-top">

                  <span>
                    GET A FREE CONSULTATION
                  </span>

                  <h3>
                    Tell Us About Your Project
                  </h3>

                  <p>
                    Fill in the details and send your
                    enquiry directly to WhatsApp.
                  </p>

                </div>


                <form onSubmit={handleSubmit}>

                  {/* NAME + PHONE */}

                  <div className="row">

                    <div className="col-md-6">

                      <div className="new-form-group">

                        <label>
                          Full Name *
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />

                      </div>

                    </div>


                    <div className="col-md-6">

                      <div className="new-form-group">

                        <label>
                          Phone Number *
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                        />

                      </div>

                    </div>

                  </div>


                  {/* SERVICE */}

                  <div className="new-form-group">

                    <label>
                      Select Service *
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >

                      <option value="">
                        Select a service
                      </option>

                      <option value="Complete Home Interior">
                        Complete Home Interior
                      </option>

                      <option value="Modular Kitchen">
                        Modular Kitchen
                      </option>

                      <option value="Living Room">
                        Living Room
                      </option>

                      <option value="Bedroom Interior">
                        Bedroom Interior
                      </option>

                      <option value="Wardrobe Design">
                        Wardrobe Design
                      </option>

                      <option value="Office Interior">
                        Office Interior
                      </option>

                      <option value="False Ceiling">
                        False Ceiling
                      </option>

                    </select>

                  </div>


                  {/* MESSAGE */}

                  <div className="new-form-group">

                    <label>
                      Project Details
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your space, requirements, area, budget, etc."
                    ></textarea>

                  </div>


                  {/* WHATSAPP SUBMIT */}

                  <button
                    type="submit"
                    className="new-whatsapp-btn"
                  >
                    <span>◉</span>

                    Send Enquiry on WhatsApp

                    <strong>
                      →
                    </strong>

                  </button>

                </form>


                <div className="privacy-note">
                  Your information is used only to respond
                  to your enquiry.
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}

      <section className="contact-bottom-cta">

        <div className="container">

          <div className="cta-inner">

            <div>
              <span>
                NEED QUICK ASSISTANCE?
              </span>

              <h3>
                Chat directly with our interior team.
              </h3>
            </div>


            <div className="cta-buttons">

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

              <a
                href={`mailto:${emailAddress}`}
              >
                Email Us
              </a>

              <a
                href={`tel:${phoneNumber}`}
              >
                Call Now
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FLOATING BUTTONS ================= */}

      <div className="floating-contact">

        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="floating-whatsapp"
          title="Chat on WhatsApp"
        >
          <span>◉</span>
          <small>WhatsApp</small>
        </a>

        <a
          href={`mailto:${emailAddress}`}
          className="floating-email"
          title="Send Email"
        >
          <span>✉</span>
          <small>Email</small>
        </a>

      </div>

    </div>
  );
}

export default Contact;