import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check required fields
    if (
      formData.name.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.service === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    // Check phone number
    const phone = formData.phone.replace(/\D/g, "");

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Create WhatsApp message
    const message =
      "Hello Shivam Interior Design Solution,\n\n" +
      "I would like to enquire about an interior design project.\n\n" +
      "Name: " +
      formData.name +
      "\n" +
      "Phone: " +
      formData.phone +
      "\n" +
      "Service: " +
      formData.service +
      "\n\n" +
      "Project Details:\n" +
      formData.message +
      "\n\n" +
      "Please contact me regarding this enquiry.";

    // WhatsApp number
    const whatsappNumber = "919767462242";

    // WhatsApp URL
    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    // Open WhatsApp
    window.location.href = whatsappURL;
  };

  return (
    <div className="contact-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="new-contact-hero">

        <div className="new-contact-overlay">

          <div className="container">

            <div className="new-contact-hero-content">

              <span className="contact-mini-title">
                LET'S CREATE TOGETHER
              </span>

              <h1>
                Let's Design
                <br />
                Something Beautiful.
              </h1>

              <p>
                Tell us about your dream space and let our
                team bring your vision to life with thoughtful
                and beautiful interior design.
              </p>

              <div className="hero-contact-buttons">

                <a
                  href="https://wa.me/919767462242"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-whatsapp-btn"
                >
                  WhatsApp Us →
                </a>

                <a
                  href="mailto:info@shivaminteriors.com"
                  className="hero-mail-btn"
                >
                  Send Email →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section className="new-contact-section">

        <div className="container">

          <div className="row g-5 align-items-start">


            {/* =========================
                LEFT SIDE
            ========================= */}

            <div className="col-lg-5">

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
                  href="tel:+919767462242"
                  className="contact-detail"
                >

                  <div className="contact-detail-icon">
                    ☎
                  </div>

                  <div>

                    <span>
                      CALL US
                    </span>

                    <strong>
                      +91 97674 62242
                    </strong>

                  </div>

                </a>


                {/* EMAIL */}

                <a
                  href="mailto:info@shivaminteriors.com"
                  className="contact-detail"
                >

                  <div className="contact-detail-icon">
                    ✉
                  </div>

                  <div>

                    <span>
                      EMAIL US
                    </span>

                    <strong>
                      info@shivaminteriors.com
                    </strong>

                  </div>

                </a>


                {/* WHATSAPP */}

                <a
                  href="https://wa.me/919767462242"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-detail"
                >

                  <div className="contact-detail-icon">
                    💬
                  </div>

                  <div>

                    <span>
                      WHATSAPP
                    </span>

                    <strong>
                      Chat With Our Team
                    </strong>

                  </div>

                </a>


                {/* LOCATION */}

                <div className="contact-detail">

                  <div className="contact-detail-icon">
                    📍
                  </div>

                  <div>

                    <span>
                      LOCATION
                    </span>

                    <strong>
                      Pune, Maharashtra, India
                    </strong>

                  </div>

                </div>

              </div>

            </div>


            {/* =========================
                FORM
            ========================= */}

            <div className="col-lg-7">

              <div className="new-contact-form-card">


                <div className="form-top">

                  <span>
                    GET A FREE CONSULTATION
                  </span>

                  <h3>
                    Tell Us About Your Project
                  </h3>

                  <p>
                    Fill in the details below and send your
                    enquiry directly to our WhatsApp.
                  </p>

                </div>


                {/* FORM */}

                <form onSubmit={handleSubmit}>


                  {/* NAME + PHONE */}

                  <div className="row">


                    {/* NAME */}

                    <div className="col-md-6">

                      <div className="new-form-group">

                        <label htmlFor="name">
                          Full Name
                        </label>

                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                        />

                      </div>

                    </div>


                    {/* PHONE */}

                    <div className="col-md-6">

                      <div className="new-form-group">

                        <label htmlFor="phone">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter 10 digit number"
                          maxLength="10"
                        />

                      </div>

                    </div>

                  </div>


                  {/* SERVICE */}

                  <div className="new-form-group">

                    <label htmlFor="service">
                      Select Service
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >

                      <option value="">
                        Select a service
                      </option>

                      <option value="Modular Kitchen">
                        Modular Kitchen
                      </option>

                      <option value="Living Room">
                        Living Room
                      </option>

                      <option value="Bedroom Design">
                        Bedroom Design
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

                      <option value="Full Home Interior">
                        Full Home Interior
                      </option>

                    </select>

                  </div>


                  {/* PROJECT DETAILS */}

                  <div className="new-form-group">

                    <label htmlFor="message">
                      Project Details
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your space, requirements, area, budget, etc."
                    />

                  </div>


                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="new-whatsapp-btn"
                  >

                    <strong>
                      💬
                    </strong>

                    Send Enquiry on WhatsApp →

                  </button>


                  <div className="privacy-note">

                    Your information is used only to respond
                    to your enquiry. Clicking the button will
                    open WhatsApp with your enquiry details.

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          BOTTOM CTA
      ========================= */}

      <section className="contact-bottom-cta">

        <div className="container">

          <div className="cta-inner">


            <div>

              <span>
                READY TO START?
              </span>

              <h3>
                Let's create a beautiful space together.
              </h3>

            </div>


            <div className="cta-buttons">

              <a
                href="https://wa.me/919767462242"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>

              <a
                href="mailto:info@shivaminteriors.com"
              >
                Email Us
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;