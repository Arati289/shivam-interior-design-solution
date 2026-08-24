function ContactSection() {
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

      <form className="shadow p-4 rounded">

        <div className="mb-3">

          <label className="form-label">
            Full Name
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Phone Number
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter phone number"
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Your Requirement
          </label>

          <textarea
            className="form-control"
            rows="4"
            placeholder="Tell us about your interior project"
          ></textarea>

        </div>

        <button
          type="submit"
          className="btn btn-dark w-100"
        >
          Submit Enquiry
        </button>

      </form>

    </div>
  );
}

export default ContactSection;