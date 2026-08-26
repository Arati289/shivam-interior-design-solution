import { Link } from "react-router-dom";

function Navbar() {
  const whatsappNumber = "919767462242";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          Shivam Interior Design Solution
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <div className="navbar-nav ms-auto align-items-lg-center">

            <Link className="nav-link px-3" to="/">
              Home
            </Link>

            <Link className="nav-link px-3" to="/about">
              About
            </Link>

            <Link className="nav-link px-3" to="/services">
              Services
            </Link>

            <Link className="nav-link px-3" to="/portfolio">
              Portfolio
            </Link>

            <Link className="nav-link px-3" to="/gallery">
              Gallery
            </Link>

            <Link className="nav-link px-3" to="/contact">
              Contact
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning ms-lg-3 mt-2 mt-lg-0 px-4"
            >
              WhatsApp
            </a>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;