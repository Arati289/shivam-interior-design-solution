import React, { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
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

    // Check fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.requirement.trim()
    ) {
      alert("Please fill all the fields.");
      return;
    }

    // Validate phone
    const phone = formData.phone.replace(/\D/g, "");

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // WhatsApp message
    const message =
      "Hello Shivam Interior Design Solution,\n\n" +
      "I would like to enquire about an interior design project.\n\n" +
      "Name: " +
      formData.name +
      "\n" +
      "Email: " +
      formData.email +
      "\n" +
      "Phone: " +
      formData.phone +
      "\n\n" +
      "Requirement:\n" +
      formData.requirement +
      "\n\n" +
      "Please contact me regarding this enquiry.";

    // WhatsApp number
    const whatsappNumber = "919767462242";

    // Create WhatsApp URL
    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    // Open WhatsApp
    window.location.href = whatsappURL;
  };

  return (
    <div
      className="container my-5"
      id="consultation"
    >

      <h2 className="text-center mb-4">
        Get Free Consultation
      </h2>

      <p className="text-center mb-4">
        Tell us about your dream interior and our team
        will contact you.
      </p>

      <form
        className="shadow p-4 rounded"
        onSubmit={handleSubmit}
      >

        {/* NAME */}

        <div className="mb-3">

          <label className="form-label">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

        </div>


        {/* EMAIL */}

        <div className="mb-3">

          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

        </div>


        {/* PHONE */}

        <div className="mb-3">

          <label className="form-label">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Enter 10 digit phone number"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
          />

        </div>


        {/* REQUIREMENT */}

        <div className="mb-3">

          <label className="form-label">
            Your Requirement
          </label>

          <textarea
            name="requirement"
            className="form-control"
            rows="4"
            placeholder="Tell us about your interior project"
            value={formData.requirement}
            onChange={handleChange}
          ></textarea>

        </div>


        {/* SUBMIT */}

        <button
          type="submit"
          className="btn btn-dark w-100"
        >
          Submit Enquiry →
        </button>

      </form>

    </div>
  );
}

export default ContactSection;