import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* SERVICE DETAILS */}
        <Route
          path="/service/:id"
          element={<ServiceDetails />}
        />

        {/* PORTFOLIO */}
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        {/* GALLERY */}
        <Route
          path="/gallery"
          element={<Gallery />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* PROJECT DETAILS */}
        <Route
          path="/project/:id"
          element={<ProjectDetails />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;